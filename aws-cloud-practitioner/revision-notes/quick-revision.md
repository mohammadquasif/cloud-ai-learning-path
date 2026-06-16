# AWS Cloud Practitioner Quick Revision Guide

> **Exam:** AWS Certified Cloud Practitioner (CLF-C02)  
> **Best Use:** Read during the final 24-48 hours before the exam  
> **Last Updated:** 2026-06

---

## Exam Snapshot

| Item | Current Official Detail |
|---|---|
| Exam code | CLF-C02 |
| Level | Foundational |
| Time | 90 minutes |
| Questions | 65 total |
| Scored questions | 50 scored, 15 unscored |
| Format | Multiple choice and multiple response |
| Passing score | 700 on a 100-1000 scale |
| Cost | USD 100, with local taxes or currency handling depending on testing channel |
| Delivery | Pearson VUE test center or online proctored exam |
| Validity | 3 years |

## Official Domain Weights

| Domain | Weight | Final-Week Priority |
|---|---:|---|
| Cloud Concepts | 24% | High |
| Security and Compliance | 30% | Very high |
| Cloud Technology and Services | 34% | Very high |
| Billing, Pricing, and Support | 12% | Medium, but easy marks if revised well |

---

## High-Yield Decision Table

| If The Question Says... | Think... |
|---|---|
| "Who stopped this EC2 instance?" | AWS CloudTrail |
| "CPU utilization, metrics, alarms, logs" | Amazon CloudWatch |
| "Approved AMIs, configuration history, compliance rules" | AWS Config |
| "SQL injection or XSS" | AWS WAF |
| "DDoS protection" | AWS Shield or Shield Advanced |
| "Threat detection using logs and behavior" | Amazon GuardDuty |
| "Central view of security findings" | AWS Security Hub |
| "Vulnerability scanning on EC2/container images" | Amazon Inspector |
| "Sensitive data discovery in S3" | Amazon Macie |
| "Download compliance reports" | AWS Artifact |
| "Run code on an event, no servers" | AWS Lambda |
| "Run containers without EC2 management" | AWS Fargate |
| "Upload code, AWS provisions app infrastructure" | Elastic Beanstalk |
| "Data warehouse, BI, analytics" | Amazon Redshift |
| "Key-value NoSQL, millisecond latency" | Amazon DynamoDB |
| "Relational database managed by AWS" | Amazon RDS or Aurora |
| "Graph relationships" | Amazon Neptune |
| "In-memory cache" | Amazon ElastiCache |
| "Shared Linux file system" | Amazon EFS |
| "Windows SMB file share" | Amazon FSx for Windows File Server |
| "Archive, lowest storage cost, hours retrieval" | S3 Glacier Deep Archive |
| "Archive but millisecond retrieval" | S3 Glacier Instant Retrieval |
| "Unknown S3 access pattern" | S3 Intelligent-Tiering |
| "Dedicated private connection to AWS" | AWS Direct Connect |
| "Private network in AWS" | Amazon VPC |
| "Subnet-level firewall" | Network ACL |
| "Instance-level firewall" | Security group |
| "Queue between components" | Amazon SQS |
| "Publish/subscribe notifications" | Amazon SNS |
| "React to AWS events or schedules" | Amazon EventBridge |
| "Estimate before building" | AWS Pricing Calculator |
| "Historical cost and forecast" | AWS Cost Explorer |
| "Spend alert" | AWS Budgets |
| "Rightsizing recommendations" | AWS Compute Optimizer |
| "One bill for many accounts" | AWS Organizations |
| "Pre-approved products for teams" | AWS Service Catalog |
| "Technical Account Manager" | Enterprise Support |

---

## Cloud Concepts

### Six Advantages Of Cloud Computing

| Advantage | Exam Clue |
|---|---|
| Trade capital expense for variable expense | Avoid upfront hardware purchase; pay as you go |
| Benefit from massive economies of scale | AWS aggregates customer demand and lowers prices |
| Stop guessing capacity | Scale to match demand; avoid idle servers |
| Increase speed and agility | Provision resources in minutes |
| Stop spending money running data centers | AWS handles physical facilities |
| Go global in minutes | Deploy close to users around the world |

### Well-Architected Pillars

| Pillar | Core Idea |
|---|---|
| Operational Excellence | Run and monitor systems, improve processes, anticipate failure |
| Security | Protect data, systems, identities, and detect events |
| Reliability | Recover from failure and meet demand |
| Performance Efficiency | Use resources efficiently as demand changes |
| Cost Optimization | Avoid unnecessary cost |
| Sustainability | Reduce environmental impact |

### AWS CAF Perspectives

| Perspective | Focus |
|---|---|
| Business | Business outcomes and value realization |
| People | Skills, roles, culture, and organizational change |
| Governance | Portfolio, risk, cloud financial management |
| Platform | Architecture, infrastructure, migration patterns |
| Security | Identity, threat detection, compliance, controls |
| Operations | Monitoring, incident response, service management |

---

## Security And Compliance

### Shared Responsibility Model

| Area | AWS Responsibility | Customer Responsibility |
|---|---|---|
| Physical data center | Yes | No |
| Physical servers and networking | Yes | No |
| Hypervisor and managed service infrastructure | Yes | No |
| EC2 guest operating system | No | Yes |
| Application code and data | No | Yes |
| IAM users, roles, policies, MFA | No | Yes |
| Encryption configuration and key use | Shared | Shared |
| RDS automated backups infrastructure | AWS runs the managed feature | Customer configures retention and usage choices |

### IAM Must-Know Points

- Root user: secure with MFA, do not use for daily work.
- IAM users: long-term human or application identities.
- IAM groups: assign permissions to collections of users.
- IAM roles: temporary credentials, best for AWS services and federation.
- Least privilege: give only required permissions.
- Strong password policy and MFA are common correct answers.
- STS provides temporary security credentials.

### Security Service Map

| Service | Remember It As |
|---|---|
| CloudTrail | API audit trail: who did what |
| CloudWatch | Metrics, logs, alarms, dashboards |
| Config | Resource configuration history and compliance rules |
| WAF | Web attack filtering such as SQL injection and XSS |
| Shield | DDoS protection |
| GuardDuty | Intelligent threat detection |
| Inspector | Vulnerability management |
| Macie | Sensitive data discovery in S3 |
| Security Hub | Centralized security findings |
| KMS | Encryption key management |
| Secrets Manager | Rotate and manage secrets |
| Artifact | Compliance reports and agreements |

---

## Cloud Technology And Services

### Compute

| Need | Service |
|---|---|
| Full virtual server control | Amazon EC2 |
| Event-driven code, no servers | AWS Lambda |
| Containers without EC2 host management | AWS Fargate |
| Managed Kubernetes | Amazon EKS |
| Managed Docker orchestration | Amazon ECS |
| Upload app code and let AWS deploy infrastructure | Elastic Beanstalk |
| Simple VPS-style hosting | Amazon Lightsail |

### EC2 Purchase Options

| Option | Best For |
|---|---|
| On-Demand | Short-term, unpredictable, no commitment |
| Reserved Instance | Predictable 1-year or 3-year workload |
| Savings Plans | Flexible long-term compute discount |
| Spot | Fault-tolerant workloads that can be interrupted |
| Dedicated Host | Dedicated physical server, licensing or compliance |

### Storage

| Need | Service Or Class |
|---|---|
| Object storage for files | Amazon S3 |
| Block storage for one EC2 instance | Amazon EBS |
| Shared Linux file system | Amazon EFS |
| Windows SMB file system | Amazon FSx for Windows File Server |
| Connect on-premises storage to AWS | AWS Storage Gateway |
| Unknown S3 access pattern | S3 Intelligent-Tiering |
| Rare access, millisecond retrieval | S3 Glacier Instant Retrieval |
| Long-term archive, lowest cost | S3 Glacier Deep Archive |

### Databases

| Need | Service |
|---|---|
| Managed relational database | Amazon RDS |
| AWS-compatible MySQL/PostgreSQL with high performance | Amazon Aurora |
| Serverless NoSQL key-value/document database | Amazon DynamoDB |
| Data warehouse and analytics | Amazon Redshift |
| In-memory cache | Amazon ElastiCache |
| Graph database | Amazon Neptune |
| Database migration | AWS Database Migration Service |

### Networking And Integration

| Need | Service |
|---|---|
| Isolated cloud network | Amazon VPC |
| DNS and health checks | Amazon Route 53 |
| Content delivery network | Amazon CloudFront |
| Dedicated private connection | AWS Direct Connect |
| Site-to-site encrypted connection over internet | AWS VPN |
| Queue for decoupling | Amazon SQS |
| Pub/sub notifications | Amazon SNS |
| Event bus and schedules | Amazon EventBridge |
| VPC network traffic logs | VPC Flow Logs |

---

## Billing, Pricing, And Support

### Cost Tool Differences

| Tool | Use It When... |
|---|---|
| AWS Pricing Calculator | You have not built it yet and want an estimate |
| AWS Cost Explorer | You want historical spend, trends, or forecast |
| AWS Budgets | You need alerts when cost or usage crosses a threshold |
| AWS Compute Optimizer | You want rightsizing recommendations |
| AWS Cost and Usage Report | You need detailed billing data files |
| AWS Organizations | You need multiple accounts, consolidated billing, and governance |
| AWS Marketplace | You want third-party software or AMIs |

### Support Plans

| Plan | Remember |
|---|---|
| Basic | Account and billing support, documentation, health dashboard |
| Developer | Business-hours technical support by email |
| Business | 24/7 technical support, production workload support |
| Enterprise On-Ramp | Production support with stronger guidance than Business |
| Enterprise | Technical Account Manager and fastest critical response |

### Pricing Clues

- Data transfer into AWS is generally free.
- Data transfer out to the internet usually costs money.
- On-Demand has no long-term commitment.
- Reserved Instances and Savings Plans are for predictable usage.
- Spot is the lowest compute price but interruptible.
- All Upfront generally gives the highest Reserved Instance discount.

---

## Final 2-Hour Revision Plan

1. Spend 35 minutes on security: shared responsibility, IAM, CloudTrail, Config, WAF, Shield, GuardDuty, Security Hub.
2. Spend 35 minutes on services: Lambda, Fargate, EC2, S3 classes, RDS, DynamoDB, Redshift, SQS, SNS, CloudFront.
3. Spend 20 minutes on billing: Cost Explorer, Budgets, Pricing Calculator, Organizations, support plans.
4. Spend 15 minutes on cloud concepts: six advantages, Well-Architected, CAF, Region/AZ/Edge.
5. Spend 15 minutes reviewing wrong answers from your mock test.

## Exam-Day Tactics

- Read the last sentence first to identify what is being asked.
- For multi-response questions, confirm the exact number of answers required.
- Eliminate services that solve a different layer of the problem.
- Do not leave blanks. There is no penalty for guessing.
- If two answers seem close, pick the one matching the scenario clue most directly.
- Watch for "most cost-effective", "least operational overhead", "managed", "serverless", and "auditing" keywords.

