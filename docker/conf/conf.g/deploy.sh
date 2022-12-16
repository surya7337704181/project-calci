#!/bin/sh


echo "Pre-Build Steps:"
echo "authenticating with AWS ECR..."
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 813455874529.dkr.ecr.ap-south-1.amazonaws.com


echo "Build Steps:"
echo "building image..."
docker build -t 813455874529.dkr.ecr.ap-south-1.amazonaws.com/calculator-project:latest .

echo "Post-Build Steps:"
echo "pushing image to AWS ECR"
docker push 813455874529.dkr.ecr.ap-south-1.amazonaws.com/calculator-project:latest .