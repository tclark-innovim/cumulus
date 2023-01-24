terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.14.1"
    }
  }
}

provider "aws" {
  region  = var.region
  profile = var.aws_profile
}

module "rds_cluster" {
  source              = "../../tf-modules/cumulus-rds-tf"
  max_capacity = 4
  min_capacity = 2
  prefix                         = var.prefix
  db_admin_username              = var.db_admin_username
  db_admin_password              = var.db_admin_password
  region                         = var.region
  vpc_id                         = var.vpc_id != null ? var.vpc_id : data.aws_vpc.application_vpc[0].id
  subnets                        = var.subnets != null ? var.subnets : data.aws_subnet_ids.subnet_ids[0].ids
  engine_version                 = var.engine_version
  deletion_protection            = var.deletion_protection
  cluster_identifier             = var.cluster_identifier
  tags                           = var.tags
  snapshot_identifier            = var.snapshot_identifier
  major_version_upgrade          = var.major_version_upgrade
  parameter_group_family         = var.parameter_group_family
  parameter_upgrade_group_family = var.parameter_upgrade_group_family
  retain_upgrade_parameter_group = var.retain_upgrade_parameter_group
}
