resource "aws_lambda_function" "async_operation_fail" {
  function_name    = "${var.prefix}-AsyncOperationFail"
  filename         = "${path.module}/../lambdas/asyncOperations/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/asyncOperations/lambda.zip")
  handler          = "index.fail"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}

resource "aws_lambda_function" "async_operation_success" {
  function_name    = "${var.prefix}-AsyncOperationSuccess"
  filename         = "${path.module}/../lambdas/asyncOperations/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/asyncOperations/lambda.zip")
  handler          = "index.success"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}

resource "aws_lambda_function" "sns_s3_executions_test" {
  function_name    = "${var.prefix}-SnsS3ExecutionsTest"
  filename         = "${path.module}/../lambdas/snsS3Test/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/snsS3Test/lambda.zip")
  handler          = "index.handleExecutions"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  environment {
    variables = {
      system_bucket = var.system_bucket
      stackName     = var.prefix
    }
  }

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}

resource "aws_lambda_function" "sns_s3_granules_test" {
  function_name    = "${var.prefix}-SnsS3GranulesTest"
  filename         = "${path.module}/../lambdas/snsS3Test/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/snsS3Test/lambda.zip")
  handler          = "index.handleGranules"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  environment {
    variables = {
      system_bucket = var.system_bucket
      stackName     = var.prefix
    }
  }

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}

resource "aws_lambda_function" "sns_s3_pdrs_test" {
  function_name    = "${var.prefix}-SnsS3PdrsTest"
  filename         = "${path.module}/../lambdas/snsS3Test/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/snsS3Test/lambda.zip")
  handler          = "index.handlePdrs"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  environment {
    variables = {
      system_bucket = var.system_bucket
      stackName     = var.prefix
    }
  }

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}

resource "aws_lambda_function" "sns_s3_collections_test" {
  function_name    = "${var.prefix}-SnsS3CollectionsTest"
  filename         = "${path.module}/../lambdas/snsS3Test/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/snsS3Test/lambda.zip")
  handler          = "index.handleCollections"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  environment {
    variables = {
      system_bucket = var.system_bucket
      stackName     = var.prefix
    }
  }

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}

resource "aws_secretsmanager_secret" "lzards_api_client_test_launchpad_passphrase" {
  name_prefix = "${var.prefix}-api-launchpad-passphrase"
  description = "Launchpad passphrase for the Cumulus API's ${var.prefix} deployment"
  tags        = var.tags
}

resource "aws_secretsmanager_secret_version" "lzards_api_client_test_launchpad_passphrase" {
  count         = length(var.launchpad_passphrase) == 0 ? 0 : 1
  secret_id     = aws_secretsmanager_secret.lzards_api_client_test_launchpad_passphrase.id
  secret_string = var.launchpad_passphrase
}

data "aws_iam_policy_document" "lzards_api_client_test_processing_role_get_secrets" {
  count         = length(var.launchpad_passphrase) == 0 ? 0 : 1
  statement {
    actions   = ["secretsmanager:GetSecretValue"]
    resources = [
      aws_secretsmanager_secret.lzards_api_client_test_launchpad_passphrase.arn,
    ]
  }
}

resource "aws_iam_role_policy" "lzards_api_client_test_processing_role_get_secrets" {
  count  = length(var.launchpad_passphrase) == 0 ? 0 : 1
  name   = "${var.prefix}_lzards_api_client_test_processing_role_get_secrets_policy"
  role   = split("/", module.cumulus.lambda_processing_role_arn)[1]
  policy = data.aws_iam_policy_document.lzards_api_client_test_processing_role_get_secrets[0].json
}

resource "aws_lambda_function" "lzards_api_client_test" {
  function_name    = "${var.prefix}-LzardsApiClientTest"
  filename         = "${path.module}/../lambdas/lzardsClientTest/dist/webpack/lambda.zip"
  source_code_hash = filebase64sha256("${path.module}/../lambdas/lzardsClientTest/dist/webpack/lambda.zip")
  handler          = "index.handler"
  role             = module.cumulus.lambda_processing_role_arn
  runtime          = "nodejs12.x"

  environment {
    variables = {
      system_bucket                    = var.system_bucket
      stackName                        = var.prefix
      lzards_api                       = var.lzards_api
      launchpad_api                    = var.launchpad_api
      launchpad_passphrase_secret_name = length(var.launchpad_passphrase) == 0 ? null : aws_secretsmanager_secret.lzards_api_client_test_launchpad_passphrase.name
      launchpad_certificate            = var.launchpad_certificate
    }
  }

  tags = local.tags

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = [aws_security_group.no_ingress_all_egress.id]
    }
  }
}