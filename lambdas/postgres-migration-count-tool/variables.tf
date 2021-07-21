
variable "buckets" {
  type    = map(object({ name = string, type = string }))
  default = {}
}

variable "dynamo_tables" {
  description = "A map of objects with the `arn` and `name` of every DynamoDB table for your Cumulus deployment."
  type        = map(object({ name = string, arn = string }))
}

variable "lambda_subnet_ids" {
  type = list(string)
  default = []
}

variable "permissions_boundary_arn" {
  type = string
}

variable "prefix" {
  type = string
  default = null
}

variable "rds_user_access_secret_arn" {
  description = "RDS User Database Login Credential Secret ID"
  type        = string
}

variable "rds_connection_heartbeat" {
  description = "If true, send a query to verify database connection is live on connection creation and retry on initial connection timeout.  Set to false if not using serverless RDS"
  type    = bool
  default = true
}

variable "rds_security_group_id" {
  type = string
}

variable "system_bucket" {
  description = "The name of the S3 bucket to be used for staging deployment files"
  type        = string
}

variable "tags" {
  description = "Tags to be applied to Cumulus resources that support tags"
  type        = map(string)
  default     = {}
}

variable "vpc_id" {
  type    = string
  default = null
}

## DB retry variables
variable "db_retry_failed_connection" {
  description = "If true, Core modules utilizing the database package will retry connection/query attempts that fail due to timeout/reserved connection errors"
  type = bool
  default = false
}

variable "db_retry_configuration" {
  description = "Configuration object for `db_retry_failed_connection` that allows tuning of 'retries', 'maxTimeout', 'minTimeout', 'factor' from https://github.com/tim-kos/node-retry#retryoperationoptions on database connection failures"
  type = map(string)
  default = {}
}
