# AWS Cloud Practitioner — Study Hub

Welcome to the AWS Cloud Practitioner section of certification-study-hub!

### 🌟 Did you get certified using this repo?
If this repo helped you pass your exam, please consider **giving it a star ⭐** to help other students find it!

---

# 🛑 STOP READING MARKDOWN! 🛑
## 👉 [GO TO THE INTERACTIVE COURSE DASHBOARD](https://mohammadquasif.github.io/certification-study-hub/docs/aws-cloud-practitioner/README.html) 👈

We have converted this entire course into a beautiful, interactive website with sidebar navigation, dark mode, and a built-in mock test engine. 

**Do not read the raw markdown files here.** 

Click the link above to start studying the right way!

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

## ✅ Interactive Study Tracker

Follow the chapters in this order for best results. Check them off as you go!

- `[ ]` `01-cloud-concepts/` — Understand what cloud is
- `[ ]` `02-aws-global-infrastructure/` — Know how AWS is set up globally
- `[ ]` `03-core-services/` — Learn the most important AWS services
- `[ ]` `04-security-and-compliance/` — Very important — 30% of exam
- `[ ]` `05-billing-and-pricing/` — Understand AWS costs and support plans
- `[ ]` `06-cloud-technology-and-services/` — Broader services and concepts

Then:
- `[ ]` **Practice Questions** (`chapter-wise-questions.md`)
- `[ ]` **Revision Notes** (`quick-revision.md`)
- `[ ]` **Mock Tests** (`ccp-mock-test-65q.html`)

---

## 📖 Interactive Study Guide (Live on GitHub Pages)

You can read the full study guide with interactive sidebar navigation directly in your browser:
👉 **[Read the Full AWS Cloud Practitioner Course](https://mohammadquasif.github.io/certification-study-hub/docs/aws-cloud-practitioner/README.html)**

---

## 🔥 Interactive Mock Test

Take the full 65-question mock test with a timer, auto-scoring, and detailed results directly in your browser:

👉 **[Take the AWS Mock Test Live](https://mohammadquasif.github.io/certification-study-hub/docs/aws-cloud-practitioner/mock-tests/ccp-mock-test-65q.html)**

---

## 🧠 Psychological Tips for Better Preparation
1. **The Forgetting Curve**: You will forget 50% of what you learn within 24 hours unless you review it. Use the `flashcards/` for spaced repetition.
2. **Active Recall**: Don't just read the notes passively. After each chapter, close the tab and try to explain the core concepts out loud to an imaginary 10-year-old.
3. **Mock Exam Environment**: When taking the mock test, treat it like the real exam. Sit in a quiet room, don't check your phone, and time yourself strictly. This trains your brain to handle exam pressure.
4. **Learn from Mistakes**: Getting a practice question wrong is the best way to learn. Always read the explanations, even if you guessed correctly.

---

## 💡 Top Exam Tips (Based on the 65 Question Set)

- **Shared Responsibility Model** — Know exactly what AWS owns (hardware, hypervisor, physical security) vs what you own (OS, apps, customer data, IAM policies).
- **S3 Storage Classes** — Know when to use Standard (frequent), Glacier Instant Retrieval (rarely accessed but needs ms retrieval), and Deep Archive (cheapest, 12-hour retrieval).
- **EC2 Pricing** — On-Demand (short-term, unpredictable), Reserved (1-3 years, highly predictable), Spot (interruptible, batch processing, cheapest).
- **CloudTrail vs Config** — CloudTrail tracks WHO did WHAT (API calls); Config tracks WHAT the resource configuration IS (compliance).
- **WAF vs Shield** — WAF protects against Layer 7 application attacks (SQL injection, XSS); Shield protects against DDoS attacks.
- **Cost Explorer vs Pricing Calculator vs Budgets** — Explorer = analyze past spend, Calculator = estimate future costs before deploying, Budgets = set alerts when costs exceed thresholds.
- **RDS vs DynamoDB vs Redshift** — RDS = SQL/OLTP (transactions), DynamoDB = NoSQL key-value (millisecond latency), Redshift = data warehouse OLAP (analytics).
- **EFS vs EBS vs FSx** — EFS = shared Linux NFS across multiple EC2 instances, EBS = single EC2 block storage (C: drive), FSx = Windows SMB server.
- **SQS vs SNS vs EventBridge** — SQS = queue/decouple components (polling), SNS = push notifications (pub/sub), EventBridge = complex event routing.
- **IAM Roles** — Always attach roles to EC2 instances to access other services; never embed hardcoded access keys in code.
- **Macie vs GuardDuty vs Inspector** — Macie discovers sensitive data (PII) in S3; GuardDuty monitors malicious activity and threats; Inspector scans EC2/ECR for software vulnerabilities.
- **Serverless Pattern** — The classic `API Gateway + Lambda + DynamoDB` combination is heavily tested as the ultimate serverless architecture.

---

Start with `01-cloud-concepts/what-is-cloud.md` 👇
