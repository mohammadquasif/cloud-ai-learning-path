# Certification Roadmap - AWS Cloud Practitioner

> **Exam:** AWS Certified Cloud Practitioner (CLF-C02)  
> **Chapter:** 00 - Certification Roadmap  
> **Difficulty:** Beginner  
> **Last Updated:** 2026-06

---

## What This Topic Is About

The AWS Certified Cloud Practitioner exam tests whether you understand AWS at a foundational level. It is not a deep architecture exam. It is a service-selection, responsibility, pricing, and cloud-concepts exam.

Most questions ask:

- Which AWS service fits this business scenario?
- Is this AWS responsibility or customer responsibility?
- Which cost tool or pricing model should be used?
- Which security service solves this threat?
- Which storage/database/compute option is best for the described workload?

---

## Official Exam Snapshot

| Item | Detail |
|---|---|
| Exam code | CLF-C02 |
| Level | Foundational |
| Duration | 90 minutes |
| Questions | 65 multiple choice / multiple response |
| Scored questions | 50 scored; 15 unscored questions are included but not identified |
| Passing score | 700 on a 100-1000 scaled score |
| Cost | USD 100, with local pricing shown by AWS/Pearson VUE during scheduling |
| Delivery | Pearson VUE test center or online proctored exam |
| Validity | 3 years |
| Prerequisites | No mandatory prerequisite |

Always verify the latest details on the official AWS Certification pages before registering.

---

## Visual Roadmap

![AWS certification roadmap](../assets/aws-certification-roadmap.svg)

Study in this order:

1. Cloud value and economics.
2. Global infrastructure and availability.
3. Shared responsibility, IAM, governance, and security services.
4. Core AWS services: compute, storage, database, networking, integration.
5. Billing, pricing models, cost tools, and support plans.
6. Mock tests, wrong-answer review, and official practice questions.

---

## Official Domain Weights

| Domain | Weight | Approximate 65-question practice balance |
|---|---:|---:|
| Cloud Concepts | 24% | 15-16 questions |
| Security and Compliance | 30% | 19-20 questions |
| Cloud Technology and Services | 34% | 22 questions |
| Billing, Pricing, and Support | 12% | 8 questions |

**Main focus:** Security + Technology together form about 64% of the scored content. Spend most of your time there.

---

## Pattern Analysis From The 65 Helpful Practice Topics

The practice topics you shared map strongly to the official exam style. They are not about memorizing paragraphs; they are about recognizing scenario clues.

![AWS exam pattern map](../assets/aws-exam-patterns.svg)

### Most Common Patterns

| Pattern | Typical Clue | Correct Direction |
|---|---|---|
| Data warehouse / OLAP | Petabyte analytics, BI dashboards, complex joins | Amazon Redshift |
| Event notification | EC2 state change plus email/SMS notification | EventBridge + SNS |
| Historical cost analysis | Analyze past spend, rightsizing, forecasting | AWS Cost Explorer |
| Future cost estimate | Estimate architecture before building | AWS Pricing Calculator |
| Cost alert | Notify when spend crosses threshold | AWS Budgets |
| API audit | Who did what, who stopped EC2, who deleted S3 | AWS CloudTrail |
| Resource compliance | Is EC2 using approved AMI? Is config compliant? | AWS Config |
| Metrics and logs | CPU utilization, resource logs, alarms | Amazon CloudWatch |
| SQL injection / XSS | Layer 7 web attack | AWS WAF |
| DDoS | Volumetric attack | AWS Shield / Shield Advanced |
| Shared Linux file system | Multiple Linux EC2 instances need same file system | Amazon EFS |
| Windows SMB file system | Windows shared file service | Amazon FSx for Windows File Server |
| NoSQL low latency | Key-value, single-digit millisecond | Amazon DynamoDB |
| Managed SQL database | MySQL/PostgreSQL/Oracle/SQL Server | Amazon RDS / Aurora |
| Graph relationships | Recommendations, connected data | Amazon Neptune |
| Queue / decoupling | Producer and consumer should not depend on each other | Amazon SQS |
| Pub/sub notification | Push message to subscribers | Amazon SNS |
| Event routing | Event bus, state changes, rules | Amazon EventBridge |
| Long-term cheapest archive | Rare access, hours to retrieve | S3 Glacier Deep Archive |
| Archive with minutes retrieval | Rare access but fast retrieval | S3 Glacier Instant Retrieval |
| Unpredictable object access | Automatic storage tier movement | S3 Intelligent-Tiering |
| Private dedicated connectivity | Stable private link from data center to AWS | AWS Direct Connect |
| Temporary credentials | Short-lived credentials, federation | AWS STS |
| Multi-account billing | One invoice, consolidated billing | AWS Organizations |

---

## How To Register And Pay

1. Go to [AWS Training and Certification](https://aws.training/Certification).
2. Sign in or create an AWS Builder ID / AWS Certification Account.
3. Choose **Schedule New Exam**.
4. Select **AWS Certified Cloud Practitioner (CLF-C02)**.
5. Choose **Schedule with Pearson VUE**.
6. Select test center or online proctored exam.
7. Select date and time.
8. Pay through Pearson VUE using supported payment methods such as credit card or voucher.
9. Review the confirmation email carefully.

Payment notes:

- AWS lists foundational exams at USD 100.
- AWS also publishes local pricing; for India, AWS notes INR pricing is accepted on the Pearson Mindhub voucher store for exam voucher purchases.
- Taxes and foreign exchange updates may apply.
- AWS says exams can be rescheduled up to 24 hours before appointment time, with limits on rescheduling attempts.
- Cancellation within 24 hours generally forfeits the exam fee.

Always confirm the latest pricing, tax, cancellation, and payment rules during official scheduling.

---

## 21-Day Study Plan

### Days 1-3: Cloud Concepts

- Read chapter 01.
- Understand CapEx vs OpEx, elasticity, agility, economies of scale, global reach.
- Learn AWS CAF basics and Well-Architected pillars.

### Days 4-6: Global Infrastructure

- Read chapter 02.
- Master Region vs Availability Zone vs Edge Location.
- Understand multi-AZ high availability and when multi-Region matters.

### Days 7-11: Security And Compliance

- Read chapter 04.
- Learn shared responsibility deeply.
- Memorize IAM basics: users, groups, roles, policies, root user MFA, least privilege.
- Compare CloudTrail, Config, CloudWatch, Artifact, Security Hub, GuardDuty, Inspector, Macie, WAF, Shield.

### Days 12-16: Core Services

- Read chapter 03 and chapter 06.
- Practice service selection: EC2, Lambda, Fargate, Elastic Beanstalk, S3, EBS, EFS, FSx, RDS, Aurora, DynamoDB, Redshift, ElastiCache, Neptune, SQS, SNS, EventBridge, CloudFront, Direct Connect.

### Days 17-19: Billing, Pricing, Support

- Read chapter 05.
- Learn Cost Explorer vs Pricing Calculator vs Budgets.
- Learn On-Demand vs Reserved vs Savings Plans vs Spot.
- Learn Organizations, consolidated billing, AWS Marketplace, and support plan clues.

### Days 20-21: Mock Test And Wrong Answers

- Take the 65-question mock test.
- Review every wrong answer.
- Retake only after reviewing the service comparison behind each mistake.

---

## Readiness Checklist

You are ready when you can:

- Score at least 70-80% on the mock test twice.
- Explain AWS vs customer responsibility for EC2, RDS, Lambda, and S3.
- Choose the correct database from workload clues.
- Choose the correct storage class from retrieval-time clues.
- Choose the correct integration service from queue vs notification vs event-routing clues.
- Choose the correct cost tool from estimate vs analyze vs alert clues.
- Identify the correct security service from the threat clue.
- Explain why the wrong options are wrong.

---

## Quick Revision Summary

- Official domains: Cloud Concepts 24%, Security 30%, Technology 34%, Billing 12%.
- Security + Technology are the highest-value study areas.
- Most exam questions are service selection, not deep implementation.
- Shared responsibility is repeated in many forms.
- AWS service comparisons are more important than memorizing definitions.
- Cost questions often test tool purpose and pricing model fit.

---

## Official Links

- [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/)
- [CLF-C02 Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)
- [AWS Certification exam preparation](https://aws.amazon.com/certification/certification-prep/)
- [Before testing: policies, pricing, scheduling](https://aws.amazon.com/certification/policies/before-testing/)
- [AWS Skill Builder](https://skillbuilder.aws/)
- [AWS Training and Certification account](https://aws.training/Certification)

---

*Notes by certification-study-hub. Chapter 00 - AWS Certification Roadmap.*
