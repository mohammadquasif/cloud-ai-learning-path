# AWS Global Infrastructure — Regions, AZs & Edge Locations

> **Exam:** AWS Certified Cloud Practitioner (CLF-C02)
> **Domain:** Cloud Technology and Services (34% of exam)
> **Chapter:** 02 — AWS Global Infrastructure
> **Topics:** Regions, Availability Zones, Edge Locations, Local Zones, CloudFront, High Availability vs Disaster Recovery

---

## Learning Objectives

After reading this chapter you will be able to:
- Explain the three-tier AWS global infrastructure hierarchy
- Distinguish between Regions, Availability Zones, and Edge Locations
- Identify which infrastructure layer is used for high availability vs disaster recovery
- Explain how Amazon CloudFront uses Edge Locations
- Choose the correct AWS Region for a given compliance or latency requirement

---

## 1. AWS Global Infrastructure Overview

AWS operates the world's largest cloud infrastructure — spanning continents, countries, and cities through a layered architecture.

```mermaid
graph TD
    GLOBAL["🌐 AWS Global Network"]

    GLOBAL --> R1["🗺️ Region\n(e.g. Asia Pacific - Mumbai)"]
    GLOBAL --> R2["🗺️ Region\n(e.g. US East - N. Virginia)"]
    GLOBAL --> R3["🗺️ Region\n(e.g. Europe - Ireland)"]

    R1 --> AZ1["🏢 AZ — ap-south-1a"]
    R1 --> AZ2["🏢 AZ — ap-south-1b"]
    R1 --> AZ3["🏢 AZ — ap-south-1c"]

    AZ1 --> DC1["🖥️ Data Centre"]
    AZ1 --> DC2["🖥️ Data Centre"]
    AZ2 --> DC3["🖥️ Data Centre"]

    GLOBAL --> EL1["📡 Edge Location — Mumbai"]
    GLOBAL --> EL2["📡 Edge Location — Chennai"]
    GLOBAL --> EL3["📡 Edge Location — Hyderabad"]
    GLOBAL --> EL4["📡 Edge Location — 400+ cities worldwide"]
```

### Infrastructure Counts (approximate, grows regularly)

| Layer | Count | Purpose |
|---|---|---|
| **Regions** | 33+ | Where you deploy applications and store data |
| **Availability Zones** | 105+ (3+ per Region) | High availability and fault isolation |
| **Edge Locations** | 400+ | Content delivery and DNS caching |
| **Local Zones** | 30+ | Ultra-low latency for specific cities |

---

## 2. AWS Regions

### 2.1 Definition

An AWS Region is a **physical geographic area** in the world that contains multiple, isolated Availability Zones. Each Region is completely independent of all other Regions — there is no automatic cross-Region data sharing.

### 2.2 Key Region Properties

| Property | Detail |
|---|---|
| **Independence** | Fully isolated from all other Regions |
| **Minimum AZs** | Every Region has at least 3 AZs |
| **Data sovereignty** | Data in a Region stays in that Region unless you explicitly replicate it |
| **Service availability** | Not all services are available in all Regions |
| **Latency** | Choose Region closest to your users |

### 2.3 How to Choose a Region

```mermaid
flowchart TD
    START([Start: Choosing a Region]) --> Q1{Data Residency\nRequirement?}
    Q1 -->|Yes| R1[Choose Region\nin that country\ne.g. Mumbai for India]
    Q1 -->|No| Q2{Compliance\nStandard Required?\ne.g. GDPR}
    Q2 -->|Yes| R2[Choose Region that\nmeets compliance\ne.g. eu-west-1 for GDPR]
    Q2 -->|No| Q3{Where are\nyour users?}
    Q3 --> R3[Choose Region\nclosest to users\nfor lowest latency]
    R3 --> Q4{Service\nAvailability?}
    Q4 -->|Service not in preferred Region| R4[Choose nearest\nRegion with that service]
    Q4 -->|Service available| R5[✅ Region Selected]
```

### 2.4 Key AWS Regions — India Context

| Region Code | Location | Common Use Case |
|---|---|---|
| `ap-south-1` | Mumbai | Indian users, data residency compliance |
| `ap-south-2` | Hyderabad | Additional India Region (newer) |
| `ap-southeast-1` | Singapore | Southeast Asia users |
| `us-east-1` | N. Virginia | Most services launch here first, US East users |

### 2.5 Exam Points — Regions

- ✅ Data does **NOT** automatically cross Regions — you must configure cross-region replication
- ✅ "Data must stay in India" → deploy in `ap-south-1` (Mumbai)
- ✅ Not all AWS services are available in every Region — `us-east-1` typically gets new services first
- ✅ Region selection affects: **latency**, **compliance**, **service availability**, **cost** (prices vary by Region)

---

## 3. Availability Zones (AZs)

### 3.1 Definition

An Availability Zone is one or more **discrete, physically separate data centres** within an AWS Region, each with:
- Redundant power supply
- Independent cooling systems
- Separate network connectivity
- Physical separation from other AZs (typically kilometers apart)

### 3.2 AZ Architecture

```mermaid
graph TD
    subgraph REGION["Mumbai Region (ap-south-1)"]
        subgraph AZ_A["AZ ap-south-1a"]
            DC_A1["Data Centre 1"]
            DC_A2["Data Centre 2"]
        end

        subgraph AZ_B["AZ ap-south-1b"]
            DC_B1["Data Centre 3"]
        end

        subgraph AZ_C["AZ ap-south-1c"]
            DC_C1["Data Centre 4"]
            DC_C2["Data Centre 5"]
        end

        AZ_A <-->|"High-speed private\nfibre link"| AZ_B
        AZ_B <-->|"High-speed private\nfibre link"| AZ_C
        AZ_A <-->|"High-speed private\nfibre link"| AZ_C
    end
```

### 3.3 Why Multiple AZs Matter

```mermaid
graph LR
    subgraph BEFORE["❌ Single-AZ Deployment"]
        APP1["App Server\n(AZ-a)"]
        DB1["Database\n(AZ-a)"]
        FAIL["💥 AZ-a fails\n→ Complete outage"]
        APP1 --> DB1
        DB1 --> FAIL
    end

    subgraph AFTER["✅ Multi-AZ Deployment"]
        APP2["App Server\n(AZ-a)"]
        APP3["App Server\n(AZ-b)"]
        DB2["Primary DB\n(AZ-a)"]
        DB3["Standby DB\n(AZ-b)"]
        LB["Load Balancer"]
        RESULT["✅ AZ-a fails\n→ AZ-b serves\nNo downtime"]
        LB --> APP2
        LB --> APP3
        APP2 --> DB2
        APP3 --> DB3
        DB2 -.->|"Auto failover"| DB3
    end
```

### 3.4 AZ Key Facts

| Property | Detail |
|---|---|
| **Physical separation** | Separate buildings, power grids, flood zones |
| **Connectivity** | Connected via high-speed, private fibre optic |
| **Latency between AZs** | Single-digit milliseconds (fast enough for synchronous replication) |
| **AZ naming** | Each AZ has a code: `ap-south-1a`, `ap-south-1b`, `ap-south-1c` |
| **AZ = physical location** | AZ names are randomised per account — your `ap-south-1a` may not be the same physical location as someone else's `ap-south-1a` |

### 3.5 Exam Points — AZs

- ✅ **Multi-AZ = High Availability** — application survives one AZ failure
- ✅ AZs within a Region are connected by high-speed private links — fast enough for real-time replication
- ✅ Deploy across **minimum 2 AZs** for any production workload
- ✅ Amazon RDS Multi-AZ automatically replicates to a standby in a different AZ

---

## 4. Edge Locations

### 4.1 Definition

Edge Locations are **small AWS points of presence (PoPs)** deployed in hundreds of cities worldwide, specifically to deliver content and DNS resolution to end users with minimal latency.

**Important distinction:**
- Regions and AZs → where you **run** your applications
- Edge Locations → where AWS **delivers your content** to users

### 4.2 Edge Location Architecture

```mermaid
graph TD
    ORIGIN["🗄️ Origin Server\n(S3 in Mumbai Region)"]

    ORIGIN --> CF["☁️ Amazon CloudFront\n(CDN Service)"]

    CF --> EL1["📡 Edge Location\nMumbai"]
    CF --> EL2["📡 Edge Location\nDelhi"]
    CF --> EL3["📡 Edge Location\nHyderabad"]
    CF --> EL4["📡 Edge Location\nDubai"]
    CF --> EL5["📡 Edge Location\nLondon"]
    CF --> EL6["📡 Edge Location\nSingapore"]

    EL1 --> U1["👤 User in Mumbai\n~5ms latency"]
    EL2 --> U2["👤 User in Delhi\n~8ms latency"]
    EL3 --> U3["👤 User in Hyderabad\n~6ms latency"]
    EL4 --> U4["👤 User in Dubai\n~10ms latency"]
```

### 4.3 What Runs at Edge Locations

| Service | What It Does at Edge |
|---|---|
| **Amazon CloudFront** | Caches website content, images, videos near users |
| **Amazon Route 53** | Resolves DNS queries from the nearest Edge Location |
| **AWS Shield** | DDoS protection at the Edge Layer |
| **AWS WAF** (with CloudFront) | Blocks web attacks at the Edge before reaching origin |

### 4.4 How CloudFront Cache Works

```mermaid
sequenceDiagram
    participant User as 👤 User in Delhi
    participant EL as 📡 Edge Location Delhi
    participant Origin as 🗄️ Origin (S3 Mumbai)

    User->>EL: Request: video.mp4
    EL->>EL: Cache hit? NO (first request)
    EL->>Origin: Fetch video.mp4
    Origin-->>EL: video.mp4 (cached at Edge)
    EL-->>User: video.mp4 served fast ✅

    Note over User,EL: Next User in Delhi
    User->>EL: Request: video.mp4
    EL->>EL: Cache hit? YES
    EL-->>User: video.mp4 served instantly ⚡
    Note over EL,Origin: Origin NOT contacted
```

### 4.5 Exam Points — Edge Locations

- ✅ There are **400+ Edge Locations** — far more than Regions (33+)
- ✅ Edge Locations are used by **CloudFront** and **Route 53**
- ✅ Edge Locations are **NOT** where you deploy EC2 or databases
- ✅ "Deliver content globally with low latency" → **CloudFront + Edge Locations**
- ✅ Edge Locations exist in cities that don't have full Regions (e.g., Delhi, Hyderabad, Kolkata)

---

## 5. Local Zones and Wavelength Zones

### 5.1 Local Zones

Local Zones are **extensions of AWS Regions** placed in large metropolitan areas — closer to densely populated centres than the nearest Region.

```mermaid
graph LR
    REGION["us-west-2\nRegion\n(Oregon)"]
    LZ["Local Zone\nLos Angeles"]
    USER["👤 User in\nLos Angeles"]

    REGION -->|"~20ms latency\nwithout Local Zone"| USER
    REGION --> LZ
    LZ -->|"~5ms latency\nwith Local Zone"| USER
```

| Property | Detail |
|---|---|
| **Purpose** | Single-digit millisecond latency for specific cities |
| **Services available** | EC2, EBS, RDS, ECS (subset of services) |
| **Use cases** | Gaming, media rendering, real-time simulations |
| **Relationship to Region** | Extension of parent Region, not a separate Region |

### 5.2 Wavelength Zones

Wavelength Zones embed AWS compute and storage services within 5G network providers' data centres.

| Property | Detail |
|---|---|
| **Purpose** | Ultra-low latency applications using 5G mobile networks |
| **Use cases** | AR/VR, connected vehicles, IoT |
| **Exam relevance** | Low — understand what it is, rarely tested at CCP level |

---

## 6. High Availability vs Disaster Recovery

This comparison is heavily tested. Understanding the difference determines whether the answer uses AZs or Regions.

```mermaid
graph TD
    subgraph HA["✅ High Availability — Multi-AZ"]
        HA1["Goal: Minimize downtime"]
        HA2["Deploy across 2-3 AZs"]
        HA3["Same Region"]
        HA4["Automatic failover within seconds"]
        HA5["Best for: production apps that must stay online"]
    end

    subgraph DR["🆘 Disaster Recovery — Multi-Region"]
        DR1["Goal: Recover from regional failure"]
        DR2["Replicate to different Region"]
        DR3["Cross-Region replication"]
        DR4["RPO/RTO measured in minutes-hours"]
        DR5["Best for: business continuity planning"]
    end
```

### Comparison Table

| Dimension | High Availability | Disaster Recovery |
|---|---|---|
| **Scope** | Within one Region (multiple AZs) | Across multiple Regions |
| **Failure handled** | Single data centre / AZ failure | Entire Region failure |
| **Failover time** | Seconds to minutes | Minutes to hours |
| **Cost** | Moderate (same-region replication) | Higher (cross-region replication) |
| **AWS Services** | ELB, Auto Scaling, RDS Multi-AZ | S3 Cross-Region Replication, Route 53 failover |

### Exam Decision Guide

```mermaid
flowchart TD
    Q1{What does the\nquestion ask for?}

    Q1 -->|"Application must stay up\nif one data centre fails"| A1["Answer: Multi-AZ\nin same Region"]
    Q1 -->|"Application must recover\nif entire Region fails"| A2["Answer: Multi-Region\nDisaster Recovery"]
    Q1 -->|"Low-latency content\nto global users"| A3["Answer: CloudFront\n+ Edge Locations"]
    Q1 -->|"Data must stay in India"| A4["Answer: Choose\nMumbai Region only"]
```

---

## 7. Infrastructure Comparison Summary

```
AWS Global Infrastructure Hierarchy:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 AWS Global Network (backbone)
│
├── 🗺️  REGION (33+ worldwide)
│    ├── Geographically isolated
│    ├── 3+ AZs minimum
│    └── Independent from other Regions
│
│    └── 🏢 AVAILABILITY ZONE (105+ worldwide)
│         ├── 1+ physical data centres
│         ├── Independent power + network
│         ├── Connected to other AZs via private fibre
│         └── Used for High Availability
│
├── 📡 EDGE LOCATION (400+ worldwide)
│    ├── Not for running apps
│    ├── Used by CloudFront for caching
│    ├── Used by Route 53 for DNS
│    └── Exists in many cities without a Region
│
└── 🏙️ LOCAL ZONE (30+ worldwide)
     ├── Extension of a Region
     ├── Subset of AWS services
     └── Ultra-low latency for specific cities
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 8. Exam Focus Points

| Scenario Keyword | Correct Answer |
|---|---|
| "High availability," "survive AZ failure" | Multi-AZ deployment |
| "Disaster recovery," "survive Region failure" | Multi-Region deployment |
| "Low latency content delivery globally" | Amazon CloudFront + Edge Locations |
| "Data must remain in India" | Deploy only in Mumbai Region |
| "Ultra-low latency for one city" | AWS Local Zone |
| "Identify CPU utilization across multiple AZs" | Amazon CloudWatch |
| "DNS routing and health checks" | Amazon Route 53 |

---

## 9. Quick Revision Points

- **Region** = geographic area, 33+, min 3 AZs each, fully independent
- **AZ** = isolated data centre(s) within a Region, 105+ total
- **Edge Location** = 400+ cities, content caching, CloudFront + Route 53
- **Local Zone** = extension of Region, ultra-low latency for specific cities
- Multi-AZ = **High Availability** (milliseconds failover)
- Multi-Region = **Disaster Recovery** (minutes-hours recovery)
- Data does NOT cross Regions automatically
- AZs within a Region are connected by high-speed private fibre
- CloudFront caches content at Edge Locations near users
- `ap-south-1` = Mumbai Region (primary India Region)

---

*Previous Chapter → `01-cloud-concepts/what-is-cloud.md`*
*Next Chapter → `03-core-services/compute/ec2-basics.md`*
