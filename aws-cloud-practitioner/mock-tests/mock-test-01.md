# Mini Mock Test 01: AWS Certified Cloud Practitioner

> **Exam:** AWS Certified Cloud Practitioner (CLF-C02)  
> **Questions:** 20 original questions  
> **Time Limit:** 30 minutes  
> **Passing Target:** 70% or higher before attempting the full 65-question mock

---

## Test Instructions

1. Answer all questions before viewing the key.
2. Treat multi-response questions carefully; they say "Choose TWO."
3. Use this as a warm-up before the full timed HTML mock test.
4. Review every wrong answer in the quick revision guide.

---

## Questions

**1. A company wants to identify who deleted a security group rule and when the action occurred. Which AWS service should it use?**

A) AWS CloudTrail  
B) Amazon CloudWatch metrics  
C) AWS Trusted Advisor  
D) AWS Pricing Calculator

**2. A business wants to move from large upfront server purchases to paying only for monthly resource consumption. Which AWS Cloud benefit is this?**

A) Go global in minutes  
B) Trade capital expense for variable expense  
C) Increase application coupling  
D) Use single-tenant infrastructure

**3. A company has a long-running predictable EC2 workload and wants the largest discount. Which option is most appropriate?**

A) On-Demand Instances  
B) Spot Instances  
C) Standard Reserved Instances with All Upfront payment  
D) Dedicated Instances without commitment

**4. Which AWS service protects web applications from SQL injection and cross-site scripting attacks?**

A) AWS WAF  
B) AWS Shield  
C) Amazon Macie  
D) AWS Artifact

**5. A team wants to run application code when a file is uploaded to Amazon S3, without managing servers. Which service should it use?**

A) Amazon EC2  
B) AWS Lambda  
C) AWS Direct Connect  
D) AWS Service Catalog

**6. A company needs a managed NoSQL key-value database with single-digit millisecond latency. Which service fits best?**

A) Amazon Redshift  
B) Amazon RDS  
C) Amazon DynamoDB  
D) Amazon EFS

**7. Which AWS service provides consolidated billing across multiple AWS accounts?**

A) AWS Organizations  
B) AWS Cost Explorer  
C) AWS Budgets  
D) AWS Marketplace

**8. A company wants to cache static website content closer to global users. Which service should it use?**

A) Amazon CloudFront  
B) AWS Config  
C) AWS Direct Connect  
D) Amazon EBS

**9. Under the AWS Shared Responsibility Model for Amazon EC2, which task is the customer's responsibility?**

A) Maintaining physical data center cooling  
B) Replacing failed host hardware  
C) Patching the guest operating system  
D) Maintaining the hypervisor

**10. A company stores compliance archives that are rarely accessed and can wait 12 hours for retrieval. Which S3 storage class is most cost-effective?**

A) S3 Standard  
B) S3 Intelligent-Tiering  
C) S3 Glacier Instant Retrieval  
D) S3 Glacier Deep Archive

**11. A team wants to receive an alert when monthly AWS spend reaches a chosen threshold. Which service should be used?**

A) AWS Budgets  
B) AWS CloudTrail  
C) AWS Artifact  
D) Amazon Inspector

**12. A workload can tolerate interruption and must use the lowest-cost EC2 capacity. Which purchase option should be selected?**

A) On-Demand  
B) Spot  
C) Dedicated Host  
D) Enterprise Support

**13. Which AWS service continuously evaluates resource configurations, such as whether only approved AMIs are used?**

A) AWS Config  
B) Amazon CloudWatch Logs  
C) AWS Pricing Calculator  
D) Amazon Transcribe

**14. A company needs a shared Windows file system using SMB protocol. Which service should it choose?**

A) Amazon EFS  
B) Amazon FSx for Windows File Server  
C) Amazon EBS  
D) S3 Glacier Flexible Retrieval

**15. Which service is best for a data warehouse used by analysts for business intelligence queries?**

A) Amazon Neptune  
B) Amazon Redshift  
C) Amazon ElastiCache  
D) Amazon DynamoDB

**16. A developer wants to run containers without managing EC2 instances or host patching. Which service should be used?**

A) AWS Fargate  
B) Amazon EC2 Dedicated Hosts  
C) AWS CloudFormation  
D) Amazon Route 53

**17. Which two actions are recommended for securing an AWS account root user? Choose TWO.**

A) Enable multi-factor authentication on the root user  
B) Use the root user for all daily administration  
C) Create IAM users or roles for daily administrative work  
D) Share root credentials through a password manager with all developers  
E) Disable CloudTrail after setup

**18. A company wants to estimate the monthly AWS cost of a proposed architecture before deploying it. Which tool should it use?**

A) AWS Pricing Calculator  
B) AWS Cost Explorer  
C) AWS Budgets  
D) AWS CloudTrail

**19. A workload must remain available if one Availability Zone fails. Which design should the company use?**

A) Deploy all resources into one subnet  
B) Deploy across multiple Availability Zones  
C) Store all data in one EBS volume  
D) Use only one EC2 instance with a larger size

**20. A company needs a support plan that includes a Technical Account Manager and the fastest response for business-critical systems. Which plan should it choose?**

A) Basic  
B) Developer  
C) Business  
D) Enterprise

---

## Stop Before Viewing Answers

Scroll only after you have answered all 20 questions.

---

## Answer Key And Explanations

| Q | Answer | Explanation |
|---:|:---:|---|
| 1 | A | CloudTrail records AWS API activity and is used to answer "who did what and when." |
| 2 | B | Avoiding upfront hardware and paying for usage is the CapEx-to-variable-expense cloud benefit. |
| 3 | C | Predictable long-running EC2 workloads get strong discounts from Reserved Instances; All Upfront gives the highest RI discount. |
| 4 | A | AWS WAF protects web apps against SQL injection, XSS, and similar Layer 7 attacks. |
| 5 | B | Lambda is event-driven serverless compute and fits S3 upload triggers. |
| 6 | C | DynamoDB is the managed NoSQL key-value/document database associated with single-digit millisecond latency. |
| 7 | A | AWS Organizations provides consolidated billing and account governance. |
| 8 | A | CloudFront caches content at edge locations near users. |
| 9 | C | For EC2, customers manage the guest OS, applications, data, and IAM configuration. |
| 10 | D | Glacier Deep Archive is lowest-cost storage for long-term archives with hours retrieval. |
| 11 | A | AWS Budgets sends cost and usage alerts based on thresholds. |
| 12 | B | Spot Instances are cheapest but interruptible, so they fit fault-tolerant workloads. |
| 13 | A | AWS Config records and evaluates resource configurations against rules. |
| 14 | B | FSx for Windows File Server supports SMB and Windows-native shared file systems. |
| 15 | B | Redshift is the AWS data warehouse service for analytics and BI. |
| 16 | A | Fargate runs containers without EC2 host management. |
| 17 | A, C | Secure root with MFA and use IAM identities for daily work. |
| 18 | A | Pricing Calculator estimates cost before deployment; Cost Explorer analyzes existing spend. |
| 19 | B | Multi-AZ design supports high availability during an AZ failure. |
| 20 | D | Enterprise Support includes a Technical Account Manager and fastest critical response. |

## Score Interpretation

| Score | Meaning | Next Step |
|---:|---|---|
| 18-20 | Strong readiness | Take the full 65-question mock under timed conditions |
| 14-17 | Close | Review wrong domains, then retake |
| 10-13 | Needs reinforcement | Re-read quick revision and chapter questions |
| Below 10 | Too early | Study the main lessons again before attempting the full mock |
