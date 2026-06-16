# Chapter-Wise Practice Questions

> **Exam:** AWS Certified Cloud Practitioner (CLF-C02)  
> **Difficulty:** Foundation to intermediate  
> **Last Updated:** 2026-06  
> **Purpose:** Original practice questions that follow the same reasoning style as useful certification practice, without using real exam questions.

---

## How To Use This Guide

1. Read the related lesson first.
2. Answer the question before opening the explanation.
3. Write down why the correct answer is better than the distractors.
4. Revisit any service where you chose by memory instead of scenario clues.

The CLF-C02 exam uses 65 questions in 90 minutes. Questions are mostly multiple choice and multiple response. The official exam guide currently weights the domains as:

| Domain | Official Weight | How This Practice Set Treats It |
|---|---:|---|
| Cloud Concepts | 24% | Cloud value, CAF, Well-Architected, elasticity, migration thinking |
| Security and Compliance | 30% | Shared responsibility, IAM, audit, governance, detective and protective services |
| Cloud Technology and Services | 34% | Compute, storage, databases, networking, integration, monitoring, migration |
| Billing, Pricing, and Support | 12% | Pricing models, cost tools, support plans, consolidated billing |

## Pattern Analysis From Helpful 65-Question Practice

The strongest practice questions are not vocabulary-only. They usually describe a business need and expect you to map the clue to the AWS service.

| Pattern Seen Often | Typical Clue | Best Answer Pattern |
|---|---|---|
| Technology and services dominate | "Which service should..." | Pick the exact service, not a broad category |
| Security is scenario-heavy | "Who did this?", "block SQL injection", "approved AMIs" | CloudTrail, WAF, Config, IAM, Security Hub |
| Billing appears through tools | "Forecast", "rightsizing", "alert when spend exceeds" | Cost Explorer, Compute Optimizer, Budgets |
| Cloud concepts test wording | "Fixed to variable", "avoid guessing", "global in minutes" | Match the named cloud advantage |
| Multi-response questions test pairs | "Which two actions..." | Select complementary best practices, not two similar distractors |

---

## Chapter 1: Cloud Concepts

**Q1. A company buys servers every three years based on predicted peak traffic. Most of the year, 60% of the hardware is idle. Which AWS Cloud benefit most directly solves this problem?**

A) Go global in minutes  
B) Stop guessing capacity  
C) Increase audit visibility  
D) Improve physical data center security

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

AWS lets the company scale capacity as demand changes instead of buying for predicted peak load. This is the "stop guessing capacity" advantage. "Go global in minutes" is about deploying near users, not avoiding idle hardware.

</details>

**Q2. A finance team wants to avoid large upfront hardware purchases and pay only for the resources consumed each month. Which cloud economics concept is being applied?**

A) Convert capital expense to variable expense  
B) Use reserved capacity for every workload  
C) Increase operational overhead  
D) Use single-tenant hardware

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

AWS cloud economics commonly test CapEx versus OpEx. The key phrase is "avoid large upfront purchases" and "pay only for consumption."

</details>

**Q3. A company wants a structured approach for business, people, governance, platform, security, and operations during cloud adoption. Which AWS framework should it use?**

A) AWS Well-Architected Framework  
B) AWS Cloud Adoption Framework  
C) AWS Shared Responsibility Model  
D) AWS Pricing Calculator

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

The AWS Cloud Adoption Framework (AWS CAF) organizes cloud transformation using perspectives such as Business, People, Governance, Platform, Security, and Operations.

</details>

**Q4. A workload must continue running even if one data center in a Region has an outage. Which design best supports this requirement?**

A) Deploy in one Availability Zone and enable detailed billing  
B) Deploy across multiple Availability Zones in the same Region  
C) Deploy only at an Edge Location  
D) Store all data in one EBS volume

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

Multiple Availability Zones provide high availability inside a Region. Edge Locations are for content delivery, not hosting the main application stack.

</details>

---

## Chapter 2: Global Infrastructure and Networking

**Q5. A media company has viewers around the world and wants to cache videos close to users to reduce latency. Which AWS service should it use?**

A) Amazon CloudFront  
B) AWS Direct Connect  
C) Amazon EFS  
D) AWS CloudTrail

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

CloudFront is the content delivery network that caches content at edge locations near users. Direct Connect is a private network link to AWS, not a CDN.

</details>

**Q6. A company needs a dedicated private connection from its data center to AWS with more consistent network performance than an internet VPN. Which service is most appropriate?**

A) AWS Direct Connect  
B) Amazon Route 53  
C) AWS Transit Gateway only  
D) Amazon CloudWatch

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

Direct Connect provides a dedicated private network connection between on-premises environments and AWS.

</details>

**Q7. Which AWS feature acts as a virtual firewall for Amazon EC2 instances and controls inbound and outbound traffic at the instance level?**

A) Network ACL  
B) Security group  
C) AWS Shield  
D) Amazon GuardDuty

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

Security groups operate at the instance or elastic network interface level. Network ACLs operate at the subnet level.

</details>

---

## Chapter 3: Compute, Containers, and Application Hosting

**Q8. A developer wants to run code only when images are uploaded to Amazon S3. The workload is short, event-driven, and should have no server management. Which service should be selected?**

A) Amazon EC2  
B) AWS Lambda  
C) AWS Elastic Beanstalk  
D) AWS Outposts

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

Lambda is serverless, event-driven compute. It is a strong fit for short tasks triggered by services such as S3, EventBridge, API Gateway, or DynamoDB Streams.

</details>

**Q9. A team wants to run containers but does not want to manage EC2 instances, cluster capacity, or host patching. Which AWS compute option best fits?**

A) AWS Fargate  
B) Amazon EC2 Dedicated Hosts  
C) Amazon Lightsail  
D) AWS Batch only

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

AWS Fargate is serverless compute for containers. It runs with ECS or EKS and removes the need to manage container hosts.

</details>

**Q10. A company has a steady workload that will run continuously for three years and wants the largest discount compared with On-Demand EC2 pricing. Which purchase option should it choose?**

A) Spot Instances  
B) On-Demand Instances  
C) Standard Reserved Instances with All Upfront payment  
D) Dedicated Instances with no commitment

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: C**

For predictable long-running EC2 workloads, Reserved Instances or Savings Plans provide discounts. The "largest discount" clue points to Standard Reserved with All Upfront payment.

</details>

**Q11. A batch processing workload can restart safely if interrupted and must run at the lowest possible EC2 cost. Which option should be used?**

A) Spot Instances  
B) Dedicated Hosts  
C) On-Demand Instances  
D) Enterprise Support

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

Spot Instances use spare EC2 capacity at a large discount but can be interrupted. They fit fault-tolerant and flexible workloads, not critical real-time systems.

</details>

---

## Chapter 4: Storage and Databases

**Q12. A company needs object storage for old compliance records that are rarely retrieved and can wait 12 hours or more for access. Which S3 storage class is the most cost-effective?**

A) S3 Standard  
B) S3 Intelligent-Tiering  
C) S3 Glacier Instant Retrieval  
D) S3 Glacier Deep Archive

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: D**

Glacier Deep Archive is designed for the lowest-cost long-term archival storage when retrieval can take hours.

</details>

**Q13. A company stores logs with an unpredictable access pattern. Some logs are accessed often; others are not touched for months. The company wants AWS to optimize storage cost automatically. Which S3 storage class is best?**

A) S3 Standard  
B) S3 Intelligent-Tiering  
C) S3 One Zone-IA  
D) S3 Glacier Deep Archive

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

S3 Intelligent-Tiering automatically moves data between access tiers when access patterns are unknown or changing.

</details>

**Q14. A Windows application requires a shared file system using SMB and integration with Microsoft Active Directory. Which AWS storage service should be selected?**

A) Amazon EFS  
B) Amazon EBS  
C) Amazon FSx for Windows File Server  
D) Amazon S3 Glacier Flexible Retrieval

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: C**

FSx for Windows File Server is the exam answer when the scenario says Windows file share, SMB, or Active Directory integration.

</details>

**Q15. A business intelligence team needs a data warehouse for analytics and complex queries across large datasets. Which service is the best fit?**

A) Amazon Redshift  
B) Amazon DynamoDB  
C) Amazon ElastiCache  
D) Amazon Neptune

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

Redshift is AWS's data warehouse service for analytics and business intelligence. DynamoDB is NoSQL, ElastiCache is in-memory caching, and Neptune is graph database.

</details>

**Q16. An application requires a managed key-value database with single-digit millisecond performance and no server administration. Which service should be used?**

A) Amazon RDS  
B) Amazon DynamoDB  
C) Amazon Redshift  
D) Amazon EFS

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: B**

DynamoDB is the serverless NoSQL key-value and document database commonly tested with "single-digit millisecond latency."

</details>

---

## Chapter 5: Security and Compliance

**Q17. An auditor asks who stopped an EC2 instance yesterday and from which IP address the request came. Which AWS service should the team check first?**

A) AWS CloudTrail  
B) Amazon CloudWatch metrics  
C) AWS Trusted Advisor  
D) AWS Pricing Calculator

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

CloudTrail records AWS API activity, including who performed an action, what action was performed, when it happened, and source details.

</details>

**Q18. A web application must be protected against SQL injection and cross-site scripting attacks. Which AWS service should be configured?**

A) AWS WAF  
B) AWS Shield Advanced  
C) AWS Artifact  
D) AWS Config

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

AWS WAF protects web applications from common web exploits such as SQL injection and cross-site scripting. Shield is focused on DDoS protection.

</details>

**Q19. A company wants to verify that only approved Amazon Machine Images are used across AWS accounts. Which service can continuously evaluate resource configurations against rules?**

A) AWS Config  
B) Amazon Transcribe  
C) AWS Marketplace  
D) Amazon SQS

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

AWS Config records resource configuration history and evaluates resources against compliance rules, including approved AMI checks.

</details>

**Q20. Which two actions are best practices for protecting the AWS account root user?**

A) Enable MFA on the root user  
B) Use the root user for daily administration  
C) Create IAM users or roles for daily tasks  
D) Share root credentials only with senior developers  
E) Disable CloudTrail to reduce cost

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answers: A and C**

AWS recommends securing the root user with MFA and avoiding routine use. Daily administration should be performed through IAM identities with appropriate permissions.

</details>

**Q21. Under the AWS Shared Responsibility Model, which task is the customer's responsibility for an application running on Amazon EC2?**

A) Maintaining data center power and cooling  
B) Patching the physical host firmware  
C) Patching the guest operating system  
D) Replacing failed hardware

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: C**

For EC2, AWS manages security of the cloud, including physical infrastructure and the hypervisor. Customers manage security in the cloud, including guest OS patching.

</details>

---

## Chapter 6: Billing, Pricing, Support, and Governance

**Q22. A company wants to view historical AWS spending, identify cost trends, and forecast future costs. Which tool should it use?**

A) AWS Cost Explorer  
B) AWS Pricing Calculator  
C) AWS Artifact  
D) Amazon Inspector

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

Cost Explorer analyzes past and current spend and provides forecasting. Pricing Calculator estimates cost before deployment.

</details>

**Q23. A finance manager wants an email alert when monthly AWS spend reaches 80% of a planned amount. Which service should be used?**

A) AWS Budgets  
B) AWS CloudTrail  
C) AWS Direct Connect  
D) AWS WAF

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

AWS Budgets can send alerts when actual or forecasted spend crosses configured thresholds.

</details>

**Q24. A company has multiple AWS accounts and wants one bill, central governance, and volume discount benefits. Which AWS service should it use?**

A) AWS Organizations  
B) AWS Service Catalog  
C) AWS Systems Manager  
D) AWS Artifact

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: A**

AWS Organizations provides consolidated billing and central account management across multiple AWS accounts.

</details>

**Q25. A company wants AWS experts, a Technical Account Manager, and the fastest support response for business-critical production systems. Which support plan should it choose?**

A) Basic  
B) Developer  
C) Business  
D) Enterprise

<details>
<summary><b>Answer and Explanation</b></summary>

**Correct Answer: D**

Enterprise Support includes the strongest production support features, including a Technical Account Manager and the fastest response targets for critical business systems.

</details>

---

## Final Review Checklist

Before taking the full mock test, make sure you can answer these without looking:

- What is the difference between CloudTrail, CloudWatch, and AWS Config?
- When should you choose WAF, Shield, GuardDuty, Security Hub, Inspector, Macie, and Artifact?
- Which clues point to Lambda, Fargate, Elastic Beanstalk, EC2, and Auto Scaling?
- Which clues point to S3 Standard, Intelligent-Tiering, Glacier Instant Retrieval, and Deep Archive?
- What is AWS responsible for and what is the customer responsible for on EC2?
- Which billing tool is for estimates before building, which is for historical spend, and which is for alerts?
- Which support plan includes a Technical Account Manager?

