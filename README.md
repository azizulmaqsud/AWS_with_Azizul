# Creating AWS S3 bucket (Public access On/Off) with Terraform

# main.tf (Terraform Configuration File) 

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket = "azizuls-bucket"
}

resource "aws_s3_bucket_public_access_block" "s3_block" {
  bucket = aws_s3_bucket.s3_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Steps
- Create folder named aws-s3-tf
- Create folder named terraform-aws
- Open the aws-s3-tf folder on VS Code
- Create the file main.tf
- Create the configuration to deploy an S3 bucket

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket = "azizuls-bucket"
}
#	Login AWS
  - Open Cloud Shell
  - Install Terraform https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started
  - Upload the main.tf file to the Cloud Shell
  - Terraform Init, plan and apply to create the S3
  - Add another configuration to stop public access on S3

resource "aws_s3_bucket_public_access_block" "s3_block" {
bucket = aws_s3_bucket.s3_bucket.id

block_public_acls       = true
block_public_policy     = true
ignore_public_acls      = true
restrict_public_buckets = true
}


# Troubleshooting
- If the AWS Cloud Shell CLI session expires, then run a new AWS CLI to refresh it. Example: aws s3 ls s3://azizuls-bucket


# Let's be connected with me at following links
 
- https://www.youtube.com/channel/UCNwP7KEElaJ7cdDTLP-KbBg
- https://www.linkedin.com/in/azizul-maqsud/
- https://azizulmaqsud-1684501031000.hashnode.dev/
- https://twitter.com/Sohail2me
- https://www.buymeacoffee.com/azizulmaqsud



# Learn_with_Azizul
