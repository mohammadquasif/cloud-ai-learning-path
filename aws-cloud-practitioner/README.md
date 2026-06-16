# AWS Cloud Practitioner — Study Hub

Welcome to the AWS Cloud Practitioner section of cloudcert-sathi!

This section covers everything you need to clear the **AWS Certified Cloud Practitioner (CLF-C02)** exam.

---

## 📂 Folder Structure

```
aws-cloud-practitioner/
├── README.md                    ← You are here
├── 01-cloud-concepts/
│   └── what-is-cloud.md
├── 02-aws-global-infrastructure/
│   └── regions-and-availability-zones.md
├── 03-core-services/
│   ├── compute/
│   │   └── ec2-basics.md
│   ├── storage/
│   │   └── s3-basics.md
│   └── database/
│       └── rds-vs-dynamodb.md
├── 04-security-and-compliance/
│   └── shared-responsibility-model.md
├── 05-billing-and-pricing/
│   └── pricing-models.md
├── 06-cloud-technology-and-services/
│   └── cloud-adoption-framework.md
├── practice-questions/
│   └── chapter-wise-questions.md
├── mock-tests/
│   ├── mock-test-01.md
│   └── ccp-mock-test-65q.html  ← 🔥 Interactive 65-Question Test
└── revision-notes/
    └── quick-revision.md
```

---

## 📋 Exam Overview

| Item | Detail |
|---|---|
| Exam Code | CLF-C02 |
| Number of Questions | 65 questions |
| Duration | 90 minutes |
| Passing Score | ~700 out of 1000 |
| Format | Multiple Choice + Multiple Response |
| Cost | USD 100 (check AWS website for current price) |

---

## 🗂️ Exam Domain Breakdown

| Domain | Weight |
|---|---|
| Cloud Concepts | 24% |
| Security and Compliance | 30% |
| Cloud Technology and Services | 34% |
| Billing, Pricing, and Support | 12% |

**Security and Cloud Technology together = 64% of the exam.** Focus here first.

---

## ✅ Recommended Chapter Order

Follow the chapters in this order for best results:

1. `01-cloud-concepts/` — Understand what cloud is
2. `02-aws-global-infrastructure/` — Know how AWS is set up globally
3. `03-core-services/` — Learn the most important AWS services
4. `04-security-and-compliance/` — Very important — 30% of exam
5. `05-billing-and-pricing/` — Understand AWS costs and support plans
6. `06-cloud-technology-and-services/` — Broader services and concepts

Then: **Practice Questions → Revision Notes → Mock Tests**

---

## 🔥 Interactive Mock Test

Take the full 65-question mock test with a timer, auto-scoring, and detailed results:

👉 **[Open the Mock Test](./mock-tests/ccp-mock-test-65q.html)** — Download and open in your browser.

---

## 💡 Top Exam Tips (Based on the 65 Question Set)

- **Shared Responsibility Model** — Know exactly what AWS owns (hardware, hypervisor) vs what you own (OS, apps, data)
- **S3 Storage Classes** — Know when to use Standard, Glacier Instant Retrieval, and Deep Archive
- **EC2 Pricing** — On-Demand (short-term), Reserved (long-term, discounted), Spot (interruptible, cheapest)
- **CloudTrail vs Config** — CloudTrail tracks WHO did WHAT; Config tracks WHAT the resource configuration IS
- **WAF vs Shield** — WAF protects against Layer 7 attacks (SQL injection, XSS); Shield protects against DDoS
- **Cost Explorer vs Pricing Calculator vs Budgets** — Explorer=analyze past, Calculator=estimate future, Budgets=set alerts
- **RDS vs DynamoDB vs Redshift** — RDS=SQL/OLTP, DynamoDB=NoSQL key-value, Redshift=data warehouse OLAP
- **EFS vs EBS vs FSx** — EFS=shared Linux NFS, EBS=single EC2 block storage, FSx=Windows SMB
- **SQS vs SNS vs EventBridge** — SQS=queue/decouple, SNS=push notifications, EventBridge=event routing
- **IAM Roles** — Always attach roles to services, never embed access keys in EC2

---

Start with `01-cloud-concepts/what-is-cloud.md` 👇
