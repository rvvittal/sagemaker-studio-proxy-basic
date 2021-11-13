# sagemaker-studio-proxy
The objective of this solution is to demonstrate how customers using IAM federation can abstract away the SageMaker console using a simple proxy application running in customer VPC.  As SageMaker Studio is accessed through the proxy application running in their VPC, customer can further enhance their security posture using defense-in-depth approach by applying WAF and VPC security controls. With this architecture, customers can setup  access controls to their SageMaker Studio regardless of how the user is accessing the application i.e. whether the user is off the corporate network or accessing from a mobile device.

