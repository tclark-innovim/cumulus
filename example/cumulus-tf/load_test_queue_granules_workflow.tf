resource "aws_sfn_activity" "ecs_task_generate_granules" {
  name = "${var.prefix}-EcsTaskGenerateGranules"
  tags = local.tags
}

module "generate_granules_service" {
  source = "../../tf-modules/cumulus_ecs_service"

  prefix = var.prefix
  name   = "GenerateGranules"
  tags   = local.tags

  cluster_arn = module.cumulus.ecs_cluster_arn
  desired_count = 1
  image = "${data.aws_ecr_repository.ecs_task_image.repository_url}:${var.ecs_task_image_version}"

  cpu                = 400
  memory_reservation = 700
  default_log_retention_days                     = var.default_log_retention_days
  cloudwatch_log_retention_periods               = var.cloudwatch_log_retention_periods

  environment = {
    AWS_DEFAULT_REGION = data.aws_region.current.name
  }
  command = [
    "cumulus-ecs-task",
    "--activityArn",
    aws_sfn_activity.ecs_task_generate_granules.id,
    "--lambdaArn",
    module.cumulus.generate_granules_task.task_arn,
    "--lastModified",
    module.cumulus.generate_granules_task.last_modified_date
  ]
}

resource "aws_sfn_activity" "ecs_task_queue_granules" {
  name = "${var.prefix}-EcsTaskQueueGranules"
  tags = local.tags
}

module "queue_granules_service" {
  source = "../../tf-modules/cumulus_ecs_service"

  prefix = var.prefix
  name   = "QueueGranules"
  tags   = local.tags

  cluster_arn                           = module.cumulus.ecs_cluster_arn
  desired_count                         = 1
  image                                 = "${data.aws_ecr_repository.ecs_task_image.repository_url}:${var.ecs_task_image_version}"

  cpu                = 400
  memory_reservation = 700
  default_log_retention_days                     = var.default_log_retention_days
  cloudwatch_log_retention_periods               = var.cloudwatch_log_retention_periods

  environment = {
    AWS_DEFAULT_REGION = data.aws_region.current.name
  }
  command = [
    "cumulus-ecs-task",
    "--activityArn",
    aws_sfn_activity.ecs_task_queue_granules.id,
    "--lambdaArn",
    module.cumulus.queue_granules_task.task_arn,
    "--lastModified",
    module.cumulus.queue_granules_task.last_modified_date
  ]
}

module "ecs_load_test_queue_granules_workflow" {
  source = "../../tf-modules/workflow"

  prefix          = var.prefix
  name            = "EcsLoadTestQueueGranulesWorkflow"
  workflow_config = module.cumulus.workflow_config
  system_bucket   = var.system_bucket
  tags            = local.tags


  state_machine_definition = templatefile(
    "${path.module}/load_test_queue_granules_workflow.asl.json",
    {
      ingest_granule_workflow_name: module.hello_world_workflow.name,
      ecs_task_generate_granules_activity_id: aws_sfn_activity.ecs_task_generate_granules.id,
      ecs_task_queue_granules_activity_id: aws_sfn_activity.ecs_task_queue_granules.id,
      start_sf_queue_url: module.cumulus.start_sf_queue_url
    }
  )
}
