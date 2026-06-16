# AWS Cloud Practitioner Flashcards

> **Exam:** AWS Certified Cloud Practitioner (CLF-C02)  
> **Use:** Fast recall after reading lessons  
> **Important:** The AWS exam has 65 total questions. AWS states that 50 affect your score and 15 are unscored.

---

## Cloud Concepts

### Card 1

**Front:** What AWS Cloud benefit converts large upfront hardware purchases into usage-based monthly spend?

**Back:** Trade capital expense for variable expense. The clue is "avoid upfront cost" or "pay only for what is used."

### Card 2

**Front:** Which cloud benefit matches "avoid buying too much or too little capacity before launch"?

**Back:** Stop guessing capacity. AWS lets workloads scale based on actual demand.

### Card 3

**Front:** Which cloud benefit matches "launch resources in minutes instead of waiting weeks for hardware"?

**Back:** Increase speed and agility.

### Card 4

**Front:** Which AWS framework uses Business, People, Governance, Platform, Security, and Operations perspectives?

**Back:** AWS Cloud Adoption Framework (AWS CAF).

### Card 5

**Front:** Which AWS framework uses pillars such as Security, Reliability, Operational Excellence, Performance Efficiency, Cost Optimization, and Sustainability?

**Back:** AWS Well-Architected Framework.

### Card 6

**Front:** Multi-AZ design mainly improves what?

**Back:** High availability and fault tolerance within one Region.

### Card 7

**Front:** Multi-Region design mainly supports what?

**Back:** Disaster recovery and resilience if an entire Region is unavailable.

---

## Security And Compliance

### Card 8

**Front:** In the AWS Shared Responsibility Model, who manages physical data center security?

**Back:** AWS.

### Card 9

**Front:** In Amazon EC2, who patches the guest operating system?

**Back:** The customer. EC2 gives the customer OS-level control and responsibility.

### Card 10

**Front:** What is the best practice for the AWS account root user?

**Back:** Enable MFA, avoid daily use, and use IAM users or roles for normal administration.

### Card 11

**Front:** Which IAM identity is best for temporary access by AWS services or federated users?

**Back:** IAM role.

### Card 12

**Front:** Which AWS service answers "who did what, when, and from where"?

**Back:** AWS CloudTrail.

### Card 13

**Front:** Which AWS service is used for metrics, logs, dashboards, and alarms?

**Back:** Amazon CloudWatch.

### Card 14

**Front:** Which AWS service tracks resource configuration history and evaluates compliance rules?

**Back:** AWS Config.

### Card 15

**Front:** Which AWS service protects web applications from SQL injection and XSS?

**Back:** AWS WAF.

### Card 16

**Front:** Which AWS service provides DDoS protection?

**Back:** AWS Shield. Shield Advanced is the enhanced paid DDoS protection service.

### Card 17

**Front:** Which AWS service detects threats using account activity, network logs, and DNS activity?

**Back:** Amazon GuardDuty.

### Card 18

**Front:** Which AWS service centralizes security findings from multiple AWS security services?

**Back:** AWS Security Hub.

### Card 19

**Front:** Which AWS service discovers sensitive data in S3?

**Back:** Amazon Macie.

### Card 20

**Front:** Which AWS service provides AWS compliance reports and agreements?

**Back:** AWS Artifact.

---

## Cloud Technology And Services

### Card 21

**Front:** Which compute service runs virtual machines where you manage the OS?

**Back:** Amazon EC2.

### Card 22

**Front:** Which compute service runs event-driven code without server management?

**Back:** AWS Lambda.

### Card 23

**Front:** Which service runs containers without managing EC2 container hosts?

**Back:** AWS Fargate.

### Card 24

**Front:** Which service lets you upload application code while AWS provisions EC2, load balancing, and scaling?

**Back:** AWS Elastic Beanstalk.

### Card 25

**Front:** Which EC2 purchase option is best for short-term unpredictable workloads?

**Back:** On-Demand Instances.

### Card 26

**Front:** Which EC2 purchase option is cheapest for fault-tolerant workloads that can be interrupted?

**Back:** Spot Instances.

### Card 27

**Front:** Which EC2 purchase option fits predictable 1-year or 3-year workloads?

**Back:** Reserved Instances or Savings Plans. If the question asks for maximum RI discount, think Standard Reserved with All Upfront.

### Card 28

**Front:** Which AWS storage service is object storage for files, backups, media, and static websites?

**Back:** Amazon S3.

### Card 29

**Front:** Which S3 storage class fits unknown or changing access patterns?

**Back:** S3 Intelligent-Tiering.

### Card 30

**Front:** Which S3 storage class fits rare access but millisecond retrieval?

**Back:** S3 Glacier Instant Retrieval.

### Card 31

**Front:** Which S3 storage class is lowest cost for long-term archives when retrieval can take hours?

**Back:** S3 Glacier Deep Archive.

### Card 32

**Front:** Which storage service is a block volume attached to one EC2 instance?

**Back:** Amazon EBS.

### Card 33

**Front:** Which storage service is a shared Linux file system across multiple EC2 instances?

**Back:** Amazon EFS.

### Card 34

**Front:** Which storage service fits Windows SMB file shares and Active Directory integration?

**Back:** Amazon FSx for Windows File Server.

### Card 35

**Front:** Which database service is relational and managed by AWS?

**Back:** Amazon RDS.

### Card 36

**Front:** Which database service is serverless NoSQL with single-digit millisecond latency?

**Back:** Amazon DynamoDB.

### Card 37

**Front:** Which database service is for data warehousing, analytics, and BI?

**Back:** Amazon Redshift.

### Card 38

**Front:** Which database service is for graph relationships?

**Back:** Amazon Neptune.

### Card 39

**Front:** Which service is an in-memory cache for sub-millisecond latency?

**Back:** Amazon ElastiCache.

### Card 40

**Front:** Which service caches content at edge locations for global low latency?

**Back:** Amazon CloudFront.

### Card 41

**Front:** Which service provides a dedicated private connection from on-premises to AWS?

**Back:** AWS Direct Connect.

### Card 42

**Front:** Which VPC control is an instance-level virtual firewall?

**Back:** Security group.

### Card 43

**Front:** Which VPC control is a subnet-level stateless firewall?

**Back:** Network ACL.

### Card 44

**Front:** Which integration service decouples components with a queue?

**Back:** Amazon SQS.

### Card 45

**Front:** Which integration service publishes messages to subscribers?

**Back:** Amazon SNS.

### Card 46

**Front:** Which integration service routes events and supports scheduled events?

**Back:** Amazon EventBridge.

---

## Billing, Pricing, And Support

### Card 47

**Front:** Which AWS tool estimates cost before building?

**Back:** AWS Pricing Calculator.

### Card 48

**Front:** Which AWS tool analyzes historical spend and forecasts cost?

**Back:** AWS Cost Explorer.

### Card 49

**Front:** Which AWS tool sends alerts when spend crosses a threshold?

**Back:** AWS Budgets.

### Card 50

**Front:** Which AWS service gives rightsizing recommendations?

**Back:** AWS Compute Optimizer.

### Card 51

**Front:** Which AWS service provides consolidated billing across multiple accounts?

**Back:** AWS Organizations.

### Card 52

**Front:** Which support plan includes a Technical Account Manager?

**Back:** Enterprise Support.

### Card 53

**Front:** Is data transfer into AWS generally charged?

**Back:** Data transfer into AWS is generally free. Data transfer out to the internet usually costs money.

### Card 54

**Front:** Which AWS service provides a catalog of approved products for teams to launch?

**Back:** AWS Service Catalog.

### Card 55

**Front:** Which AWS service is used to find and buy third-party software, AMIs, and SaaS products?

**Back:** AWS Marketplace.

