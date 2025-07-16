// Detailed content for learning modules
export const moduleContent = {
  'ds-intro': {
    title: 'What is Data Science?',
    description: 'Understanding the field, career paths, and real-world applications',
    sections: [
      {
        id: 'definition',
        title: 'Definition and Scope of Data Science',
        content: `# What is Data Science? A Complete Deep Dive

Data Science is a revolutionary interdisciplinary field that combines **statistical analysis**, **computer science**, **domain expertise**, and **storytelling** to extract actionable insights from vast amounts of structured and unstructured data. It's the science of turning raw data into competitive advantage.

## The Four Pillars of Data Science Mastery

### 1. Mathematical & Statistical Foundation
Data Science is built on solid mathematical principles:

- **Descriptive Statistics**: Mean, median, mode, variance, standard deviation
- **Inferential Statistics**: Hypothesis testing, confidence intervals, p-values
- **Probability Theory**: Bayes' theorem, probability distributions, conditional probability
- **Linear Algebra**: Vectors, matrices, eigenvalues (essential for machine learning)
- **Calculus**: Derivatives and optimization (for understanding algorithms)

**Why This Matters**: Without statistical literacy, you're just creating fancy visualizations without understanding what the data actually tells you.

### 2. Programming & Technical Skills
Modern data science requires computational thinking:

- **Python Ecosystem**: NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch
- **R Language**: ggplot2, dplyr, tidyr, caret (especially strong in statistics)
- **SQL**: Database querying, joins, window functions, CTEs
- **Big Data Tools**: Spark, Hadoop, Kafka for large-scale processing
- **Cloud Platforms**: AWS, Azure, GCP for scalable computing

**Pro Tip**: Start with Python - it has the richest ecosystem and is industry standard.

### 3. Domain Expertise
This is what separates good data scientists from great ones:

- **Business Acumen**: Understanding KPIs, business models, market dynamics
- **Industry Knowledge**: Healthcare regulations, financial markets, e-commerce metrics
- **Problem Framing**: Translating business questions into data problems
- **Context Awareness**: Knowing when results make sense vs. when they're suspicious

### 4. Communication & Storytelling
Data without narrative is just numbers:

- **Data Visualization**: Creating compelling charts that tell a story
- **Executive Communication**: Presenting to C-level executives
- **Technical Documentation**: Writing clear, reproducible analyses
- **Stakeholder Management**: Managing expectations and timelines

## The Complete Data Science Workflow (CRISP-DM 2.0)

### Phase 1: Business Understanding (20% of time)
**What you do:**
- Meet with stakeholders to understand the real problem
- Define success metrics and KPIs
- Assess feasibility and resource requirements
- Create project timeline and deliverables

**Common Mistakes:**
- Jumping straight to modeling without understanding the business context
- Not defining clear success criteria upfront
- Underestimating the complexity of the problem

**Real Example**: Netflix doesn't just want to "recommend movies" - they want to increase viewing time, reduce churn, and optimize content acquisition costs.

### Phase 2: Data Understanding (25% of time)
**What you do:**
- Inventory all available data sources
- Assess data quality, completeness, and reliability
- Understand data lineage and collection methods
- Identify potential biases and limitations

**Deep Dive Activities:**
- **Data Profiling**: Distribution analysis, missing value patterns
- **Data Quality Assessment**: Accuracy, completeness, consistency, timeliness
- **Exploratory Data Analysis**: Univariate, bivariate, and multivariate analysis
- **Correlation Analysis**: Understanding relationships between variables

### Phase 3: Data Preparation (50% of time - Yes, really!)
This is where most of your time goes:

**Data Cleaning:**
- Handling missing values (imputation strategies)
- Outlier detection and treatment
- Data type conversions and standardization
- Duplicate removal and deduplication logic

**Feature Engineering:**
- Creating new variables from existing ones
- Binning continuous variables
- Encoding categorical variables
- Time-based feature extraction (seasonality, trends)

**Data Integration:**
- Joining data from multiple sources
- Resolving schema differences
- Handling different granularities and time periods

### Phase 4: Modeling (15% of time)
**Algorithm Selection Strategy:**
- **Regression**: Linear, polynomial, ridge, lasso for continuous outcomes
- **Classification**: Logistic regression, random forest, SVM, neural networks
- **Clustering**: K-means, hierarchical, DBSCAN for pattern discovery
- **Time Series**: ARIMA, exponential smoothing, LSTM for temporal data

**Model Development Process:**
1. **Baseline Model**: Start simple (linear regression, decision tree)
2. **Feature Selection**: Remove irrelevant or redundant features
3. **Hyperparameter Tuning**: Grid search, random search, Bayesian optimization
4. **Cross-Validation**: K-fold, stratified, time series split
5. **Ensemble Methods**: Bagging, boosting, stacking for better performance

### Phase 5: Evaluation (10% of time)
**Technical Metrics:**
- **Classification**: Accuracy, precision, recall, F1-score, AUC-ROC
- **Regression**: MAE, MSE, RMSE, R-squared, MAPE
- **Clustering**: Silhouette score, Davies-Bouldin index
- **Time Series**: MASE, sMAPE, directional accuracy

**Business Metrics:**
- Revenue impact, cost savings, efficiency gains
- User engagement, customer satisfaction
- Risk reduction, compliance improvements

### Phase 6: Deployment (Production)
**Model Deployment Strategies:**
- **Batch Scoring**: Periodic model runs for bulk predictions
- **Real-time API**: Low-latency predictions for live applications
- **Edge Deployment**: Models running on mobile devices or IoT
- **A/B Testing**: Gradual rollout with control groups

**MLOps Considerations:**
- Model versioning and reproducibility
- Monitoring for data drift and model decay
- Automated retraining pipelines
- Performance monitoring and alerting

## Industry Applications & Career Paths

### Healthcare & Life Sciences
**Applications:**
- **Drug Discovery**: Molecular property prediction, clinical trial optimization
- **Medical Imaging**: Radiology AI, pathology analysis, surgical planning
- **Personalized Medicine**: Genomic analysis, treatment recommendation systems
- **Epidemiology**: Disease outbreak prediction, public health monitoring

**Skills Needed**: Biostatistics, regulatory knowledge (FDA, HIPAA), clinical trial design

**Salary Range**: $120,000 - $200,000+ (higher due to specialized domain knowledge)

### Financial Services
**Applications:**
- **Algorithmic Trading**: High-frequency trading, portfolio optimization
- **Risk Management**: Credit scoring, fraud detection, market risk modeling
- **Robo-Advisors**: Automated investment advice, portfolio rebalancing
- **RegTech**: Compliance monitoring, anti-money laundering

**Skills Needed**: Financial modeling, risk management, regulatory compliance

**Salary Range**: $130,000 - $250,000+ (Wall Street premiums)

### Technology & Internet
**Applications:**
- **Recommendation Systems**: Netflix, Amazon, Spotify content recommendations
- **Search & Ranking**: Google search, social media feed algorithms
- **Computer Vision**: Autonomous vehicles, facial recognition, AR/VR
- **Natural Language Processing**: Chatbots, translation, sentiment analysis

**Skills Needed**: Software engineering, system design, large-scale computing

**Salary Range**: $140,000 - $300,000+ (FAANG companies)

### E-commerce & Retail
**Applications:**
- **Demand Forecasting**: Inventory optimization, supply chain management
- **Price Optimization**: Dynamic pricing, promotional effectiveness
- **Customer Analytics**: Segmentation, lifetime value, churn prediction
- **Supply Chain**: Route optimization, warehouse management

**Skills Needed**: Business analytics, operations research, marketing analytics

**Salary Range**: $100,000 - $180,000

## The Data Science Career Progression

### Entry Level (0-2 years): Data Analyst/Junior Data Scientist
**Responsibilities:**
- Data cleaning and basic analysis
- Creating dashboards and reports
- Supporting senior team members
- Learning tools and methodologies

**Key Skills to Develop:**
- SQL mastery
- Python/R fundamentals
- Basic statistics
- Data visualization

**Typical Projects:**
- Sales performance analysis
- Customer segmentation
- A/B test analysis
- Operational reporting

### Mid-Level (2-5 years): Data Scientist
**Responsibilities:**
- End-to-end project ownership
- Model development and deployment
- Stakeholder communication
- Mentoring junior team members

**Key Skills to Develop:**
- Advanced machine learning
- Feature engineering
- Model deployment
- Business communication

**Typical Projects:**
- Predictive modeling systems
- Recommendation engines
- Fraud detection systems
- Customer lifetime value models

### Senior Level (5-8 years): Senior Data Scientist/Lead
**Responsibilities:**
- Technical leadership
- Architecture decisions
- Cross-functional collaboration
- Strategic planning

**Key Skills to Develop:**
- System design
- Team leadership
- Product strategy
- Advanced algorithms

**Typical Projects:**
- Platform development
- Research initiatives
- Technical strategy
- Team building

### Expert Level (8+ years): Principal Data Scientist/Director
**Responsibilities:**
- Organizational strategy
- Research and innovation
- External representation
- Talent development

**Key Skills to Develop:**
- Executive communication
- Strategic thinking
- Innovation leadership
- Industry expertise

## Modern Data Science Challenges & Trends

### Ethical AI & Responsible Data Science
- **Bias Detection**: Identifying and mitigating algorithmic bias
- **Fairness Metrics**: Ensuring equitable outcomes across demographics
- **Explainable AI**: Making black-box models interpretable
- **Privacy Preservation**: Differential privacy, federated learning

### Big Data & Scalability
- **Distributed Computing**: Spark, Dask, Ray for large-scale processing
- **Stream Processing**: Real-time analytics with Kafka, Flink
- **Cloud-Native**: Serverless computing, containerization
- **Data Lakes**: Modern data architecture patterns

### AutoML & Democratization
- **Automated Feature Engineering**: Tools like Featuretools
- **Neural Architecture Search**: Automated model design
- **Citizen Data Science**: Low-code/no-code platforms
- **MLOps Platforms**: End-to-end ML lifecycle management

## Getting Started: Your 6-Month Learning Path

### Months 1-2: Foundation Building
- **Statistics**: Khan Academy Statistics, Think Stats book
- **Python**: Python for Data Analysis by Wes McKinney
- **SQL**: SQLBolt, HackerRank SQL challenges
- **Practice**: Kaggle Learn courses

### Months 3-4: Core Skills Development
- **Machine Learning**: Andrew Ng's Coursera course
- **Data Manipulation**: Advanced Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, Plotly
- **Practice**: Complete 2-3 Kaggle competitions

### Months 5-6: Specialization & Portfolio
- **Choose Focus**: Pick one domain (NLP, Computer Vision, etc.)
- **Advanced Topics**: Deep learning, time series, or specialized algorithms
- **Portfolio Projects**: 3-5 end-to-end projects on GitHub
- **Networking**: Join data science communities, attend meetups

**Remember**: Data Science is not just about algorithms - it's about solving real business problems with data-driven insights. Focus on understanding the "why" behind every technique, not just the "how."`,
      }
    ]
  },
  'de-intro': {
    title: 'What is Data Engineering?',
    description: 'Understanding data engineering fundamentals, architecture, and career paths',
    sections: [
      {
        id: 'definition',
        title: 'Data Engineering: The Backbone of Data-Driven Organizations',
        content: `# What is Data Engineering? The Complete Professional Guide

Data Engineering is the **foundational discipline** that designs, builds, and maintains the infrastructure and systems that enable organizations to collect, store, process, and serve data at scale. While Data Scientists analyze data to extract insights, Data Engineers create the robust pipelines and platforms that make this analysis possible.

## The Critical Role of Data Engineers

### Why Data Engineering Matters More Than Ever

In today's data-driven economy, organizations generate **2.5 quintillion bytes of data daily**. Without proper data engineering:
- Data Scientists spend 80% of their time cleaning data instead of analyzing it
- Business decisions are based on incomplete or unreliable information
- Real-time opportunities are missed due to slow data processing
- Compliance and governance become impossible to maintain

**Data Engineers are the architects of the data ecosystem** - they build the highways on which data travels.

### Data Engineering vs. Related Roles

**Data Engineer vs. Data Scientist:**
- **Data Engineer**: Builds systems to collect and process data
- **Data Scientist**: Analyzes processed data to extract insights
- **Overlap**: Both need programming skills and data understanding

**Data Engineer vs. Software Engineer:**
- **Data Engineer**: Focuses on data pipelines, ETL, and analytics infrastructure
- **Software Engineer**: Builds applications and user-facing systems
- **Overlap**: Both require strong programming and system design skills

**Data Engineer vs. Database Administrator:**
- **Data Engineer**: Designs entire data ecosystems and pipelines
- **DBA**: Maintains and optimizes specific database systems
- **Overlap**: Both need deep database knowledge

## The Five Pillars of Data Engineering Excellence

### 1. Data Architecture & System Design

**Batch vs. Stream Processing:**
- **Batch Processing**: Processing large volumes of data at scheduled intervals
  - Use cases: Daily reports, historical analysis, data warehousing
  - Tools: Apache Spark, Hadoop MapReduce, AWS Batch
  - Pros: High throughput, cost-effective, simpler to implement
  - Cons: Higher latency, not suitable for real-time needs

- **Stream Processing**: Processing data in real-time as it arrives
  - Use cases: Fraud detection, real-time recommendations, monitoring
  - Tools: Apache Kafka, Apache Flink, AWS Kinesis
  - Pros: Low latency, real-time insights, immediate response
  - Cons: More complex, higher costs, harder to debug

**Data Storage Patterns:**
- **Data Lakes**: Store raw data in its native format
  - Best for: Exploratory analysis, machine learning, unstructured data
  - Technologies: AWS S3, Azure Data Lake, Google Cloud Storage

- **Data Warehouses**: Structured, optimized for analytics
  - Best for: Business intelligence, reporting, historical analysis
  - Technologies: Snowflake, Amazon Redshift, Google BigQuery

- **Data Lakehouses**: Combine benefits of lakes and warehouses
  - Best for: Modern analytics workloads, unified architecture
  - Technologies: Databricks, Delta Lake, Apache Iceberg

### 2. Programming & Technical Mastery

**Core Programming Languages:**

**Python (Most Popular):**
- **Strengths**: Rich ecosystem, easy to learn, great for data processing
- **Key Libraries**: Pandas, NumPy, Apache Airflow, PySpark
- **Use Cases**: ETL scripts, data pipeline orchestration, API development

**SQL (Essential):**
- **Advanced Concepts**: Window functions, CTEs, query optimization
- **Database Types**: OLTP (PostgreSQL, MySQL) vs OLAP (Snowflake, BigQuery)
- **Performance Tuning**: Indexing strategies, query plan analysis

**Scala (Big Data Focused):**
- **Strengths**: Native Spark language, functional programming, JVM performance
- **Use Cases**: Large-scale data processing, real-time streaming
- **Learning Curve**: Steeper than Python but more performant

**Java (Enterprise):**
- **Strengths**: Enterprise integration, Hadoop ecosystem, performance
- **Use Cases**: Kafka applications, Hadoop jobs, enterprise systems

### 3. Cloud Platforms & Infrastructure

**Amazon Web Services (AWS) - Market Leader:**
- **Storage**: S3 (object storage), EBS (block storage), EFS (file storage)
- **Compute**: EC2 (virtual machines), Lambda (serverless), EMR (big data)
- **Databases**: RDS (relational), DynamoDB (NoSQL), Redshift (warehouse)
- **Analytics**: Kinesis (streaming), Glue (ETL), Athena (query service)
- **Orchestration**: Step Functions, Batch, Data Pipeline

**Microsoft Azure - Enterprise Focused:**
- **Storage**: Blob Storage, Data Lake Storage Gen2
- **Compute**: Virtual Machines, Functions, HDInsight
- **Databases**: SQL Database, Cosmos DB, Synapse Analytics
- **Analytics**: Stream Analytics, Data Factory, Event Hubs

**Google Cloud Platform (GCP) - AI/ML Focused:**
- **Storage**: Cloud Storage, Persistent Disk
- **Compute**: Compute Engine, Cloud Functions, Dataproc
- **Databases**: Cloud SQL, Firestore, BigQuery
- **Analytics**: Dataflow, Pub/Sub, Cloud Composer

### 4. Data Pipeline Development

**ETL vs. ELT: The Modern Shift**

**Traditional ETL (Extract, Transform, Load):**
Source Data -> Transform (Clean/Process) -> Load to Warehouse
- **Pros**: Clean data in warehouse, predictable performance
- **Cons**: Rigid schema, slower time-to-insight, complex transformations

**Modern ELT (Extract, Load, Transform):**
Source Data -> Load to Data Lake -> Transform as Needed
- **Pros**: Flexible schema, faster ingestion, raw data preservation
- **Cons**: Storage costs, potential data quality issues

**Pipeline Orchestration Tools:**

**Apache Airflow (Most Popular):**
- **Strengths**: Python-based, rich UI, extensive integrations
- **Use Cases**: Complex workflows, dependency management, scheduling
- **Architecture**: DAGs (Directed Acyclic Graphs) for workflow definition

**Prefect (Modern Alternative):**
- **Strengths**: Better error handling, cloud-native, easier debugging
- **Use Cases**: Modern data workflows, hybrid cloud deployments

**dbt (Data Build Tool):**
- **Strengths**: SQL-based transformations, version control, testing
- **Use Cases**: Data warehouse transformations, analytics engineering

### 5. Data Quality & Governance

**Data Quality Dimensions:**
- **Accuracy**: Data correctly represents reality
- **Completeness**: All required data is present
- **Consistency**: Data is uniform across systems
- **Timeliness**: Data is available when needed
- **Validity**: Data conforms to defined formats and rules

**Data Governance Framework:**
- **Data Cataloging**: Metadata management, data discovery
- **Data Lineage**: Tracking data flow from source to consumption
- **Access Control**: Role-based permissions, data security
- **Compliance**: GDPR, CCPA, industry-specific regulations

## Industry Applications & Specializations

### E-commerce & Retail
**Data Challenges:**
- **Scale**: Millions of transactions, product catalogs, user interactions
- **Real-time**: Inventory updates, pricing changes, recommendation engines
- **Seasonality**: Black Friday traffic spikes, holiday demand patterns

**Technical Solutions:**
- **Event-driven Architecture**: Kafka for real-time inventory updates
- **Microservices**: Separate services for orders, inventory, recommendations
- **CDN Integration**: Global content delivery for product images and data

**Career Focus**: Real-time systems, high-throughput processing, global scale

### Financial Services
**Data Challenges:**
- **Compliance**: SOX, Basel III, anti-money laundering regulations
- **Security**: Encryption, access controls, audit trails
- **Latency**: Millisecond trading systems, real-time fraud detection

**Technical Solutions:**
- **Immutable Data**: Append-only systems for audit compliance
- **Encryption**: End-to-end data protection
- **High-frequency Processing**: Low-latency streaming systems

**Career Focus**: Regulatory compliance, security, low-latency systems

### Healthcare & Life Sciences
**Data Challenges:**
- **Privacy**: HIPAA compliance, patient data protection
- **Integration**: EMR systems, medical devices, lab results
- **Scale**: Genomic data, medical imaging, clinical trials

**Technical Solutions:**
- **Data Anonymization**: Privacy-preserving analytics
- **FHIR Standards**: Healthcare data interoperability
- **Secure Enclaves**: Protected computing environments

**Career Focus**: Healthcare standards, privacy engineering, regulatory compliance

### Technology & Internet
**Data Challenges:**
- **Volume**: Petabytes of user data, logs, metrics
- **Variety**: Text, images, videos, sensor data
- **Velocity**: Real-time recommendations, fraud detection

**Technical Solutions:**
- **Distributed Systems**: Hadoop, Spark, Kubernetes clusters
- **Machine Learning Pipelines**: Feature stores, model serving
- **Global Infrastructure**: Multi-region deployments

**Career Focus**: Distributed systems, ML infrastructure, global scale

## Data Engineering Career Progression

### Entry Level (0-2 years): Junior Data Engineer
**Typical Responsibilities:**
- Write ETL scripts and data pipelines
- Monitor existing systems and fix basic issues
- Learn company data architecture and tools
- Support senior engineers on larger projects

**Key Skills to Develop:**
- SQL proficiency (joins, window functions, optimization)
- Python programming (pandas, requests, basic scripting)
- Understanding of databases (PostgreSQL, MySQL)
- Basic cloud services (S3, EC2, basic networking)

**Typical Salary**: $70,000 - $95,000

### Mid-Level (2-5 years): Data Engineer
**Typical Responsibilities:**
- Design and implement end-to-end data pipelines
- Optimize existing systems for performance and cost
- Collaborate with data scientists and analysts
- Participate in architecture decisions

**Key Skills to Develop:**
- Advanced SQL and database optimization
- Distributed computing (Spark, Hadoop)
- Cloud platform expertise (AWS, Azure, or GCP)
- Data modeling and warehouse design
- Pipeline orchestration (Airflow, Prefect)

**Typical Salary**: $95,000 - $130,000

### Senior Level (5-8 years): Senior Data Engineer
**Typical Responsibilities:**
- Lead complex data infrastructure projects
- Mentor junior team members
- Make architectural decisions and technology choices
- Collaborate with product and engineering teams

**Key Skills to Develop:**
- System architecture and design patterns
- Performance optimization and troubleshooting
- Team leadership and mentoring
- Cross-functional collaboration
- Cost optimization and resource management

**Typical Salary**: $130,000 - $170,000

### Staff/Principal Level (8+ years): Staff Data Engineer
**Typical Responsibilities:**
- Define technical strategy and roadmap
- Lead organization-wide data initiatives
- Represent engineering in executive discussions
- Drive innovation and best practices

**Key Skills to Develop:**
- Strategic thinking and planning
- Executive communication
- Technology evaluation and adoption
- Organization design and scaling
- Industry thought leadership

**Typical Salary**: $170,000 - $250,000+

## Modern Data Engineering Trends & Technologies

### Cloud-Native Data Platforms
**Serverless Computing:**
- **AWS Lambda**: Event-driven data processing
- **Google Cloud Functions**: Lightweight data transformations
- **Azure Functions**: Integration with Microsoft ecosystem

**Managed Services:**
- **Snowflake**: Cloud data warehouse with automatic scaling
- **Databricks**: Unified analytics platform for big data and ML
- **Fivetran**: Automated data integration and ELT

### Real-Time & Streaming Analytics
**Apache Kafka Ecosystem:**
- **Kafka Streams**: Stream processing library
- **Kafka Connect**: Integration with external systems
- **Schema Registry**: Schema evolution and compatibility

**Modern Streaming Platforms:**
- **Apache Pulsar**: Next-generation messaging system
- **Amazon Kinesis**: Fully managed streaming service
- **Confluent Cloud**: Managed Kafka service

### DataOps & Infrastructure as Code
**Version Control for Data:**
- **Git-based workflows**: Data pipeline version control
- **Data versioning**: Track changes in datasets
- **Environment management**: Dev/staging/production pipelines

**Infrastructure Automation:**
- **Terraform**: Infrastructure as code for cloud resources
- **Kubernetes**: Container orchestration for data workloads
- **Docker**: Containerization for consistent environments

### Data Mesh & Decentralized Architecture
**Domain-Driven Data Architecture:**
- **Data Products**: Self-contained, domain-specific data assets
- **Federated Governance**: Distributed data ownership
- **Self-Service Platforms**: Enable domain teams to manage their data

## Your 12-Month Data Engineering Learning Journey

### Months 1-3: Foundation Building
**Core Skills:**
- **SQL Mastery**: Advanced queries, optimization, database design
- **Python Programming**: Data manipulation, API development, scripting
- **Linux/Command Line**: File systems, process management, networking
- **Git Version Control**: Branching, merging, collaboration workflows

**Hands-on Projects:**
- Build a simple ETL pipeline with Python and PostgreSQL
- Create a data warehouse schema for an e-commerce business
- Set up a Linux development environment

### Months 4-6: Cloud & Big Data
**Cloud Platform (Choose One):**
- **AWS**: S3, EC2, RDS, Lambda, Glue, Redshift
- **Azure**: Blob Storage, VMs, SQL Database, Functions, Data Factory
- **GCP**: Cloud Storage, Compute Engine, BigQuery, Cloud Functions

**Big Data Technologies:**
- **Apache Spark**: DataFrames, RDDs, Spark SQL
- **Hadoop Ecosystem**: HDFS, MapReduce, Hive
- **Data Warehousing**: Dimensional modeling, star schema

**Hands-on Projects:**
- Build a data lake on your chosen cloud platform
- Process large datasets with Spark
- Create a data warehouse with dimensional modeling

### Months 7-9: Advanced Pipeline Development
**Orchestration & Workflow:**
- **Apache Airflow**: DAG development, scheduling, monitoring
- **Data Quality**: Great Expectations, data validation frameworks
- **Monitoring**: Logging, alerting, performance optimization

**Stream Processing:**
- **Apache Kafka**: Producers, consumers, topics, partitions
- **Stream Processing**: Kafka Streams or Apache Flink
- **Real-time Analytics**: Building streaming data pipelines

**Hands-on Projects:**
- Build a complete data pipeline with Airflow orchestration
- Implement real-time data processing with Kafka
- Create data quality monitoring and alerting

### Months 10-12: Specialization & Portfolio
**Choose Your Focus:**
- **ML Engineering**: Feature stores, model serving, MLOps
- **Real-time Systems**: Low-latency processing, event-driven architecture
- **Data Platform**: Self-service analytics, data mesh, governance

**Portfolio Development:**
- **End-to-end Project**: Complete data platform for a business use case
- **Open Source Contribution**: Contribute to data engineering tools
- **Technical Writing**: Blog posts, documentation, tutorials

**Career Preparation:**
- **Networking**: Join data engineering communities, attend conferences
- **Interviewing**: Practice system design, coding challenges
- **Certification**: Cloud platform or technology-specific certifications

## The Future of Data Engineering

### Emerging Technologies
- **Quantum Computing**: Potential for massive parallel processing
- **Edge Computing**: Processing data closer to its source
- **AI-Driven Automation**: Self-optimizing data pipelines
- **Blockchain**: Immutable data lineage and governance

### Skills for the Future
- **AI/ML Integration**: Understanding how to build ML-ready data platforms
- **Privacy Engineering**: Building privacy-preserving data systems
- **Sustainability**: Green computing and energy-efficient data processing
- **Cross-functional Collaboration**: Working closely with product and business teams

**Remember**: Data Engineering is not just about moving data from point A to point B. It's about building reliable, scalable, and efficient systems that enable organizations to make data-driven decisions. Focus on understanding the business impact of your work, not just the technical implementation.

The field is rapidly evolving, so continuous learning and adaptation are essential. Stay curious, build things, and always think about how your work enables others to succeed with data.`,
      }
    ]
  },
  'de-fundamentals': {
    title: 'Data Engineering Fundamentals',
    description: 'Core concepts, data lifecycle, and architecture patterns',
    sections: [
      {
        id: 'data-lifecycle',
        title: 'The Complete Data Lifecycle',
        content: `# The Complete Data Lifecycle: From Source to Insight

Understanding the data lifecycle is fundamental to becoming an effective data engineer. This lifecycle represents the journey data takes from its creation to its eventual use in driving business decisions.

## The Seven Stages of Data Lifecycle

### 1. Data Generation & Collection
**What happens here:**
- Data is created by various sources: applications, sensors, user interactions, external APIs
- Raw data exists in multiple formats: structured (databases), semi-structured (JSON, XML), unstructured (logs, images, text)
- Data volume, velocity, and variety create the first engineering challenges

**Key Considerations:**
- **Data Sources**: Understanding where data comes from and its reliability
- **Data Formats**: JSON, CSV, Parquet, Avro, Protocol Buffers
- **Collection Methods**: Batch collection, real-time streaming, API polling
- **Data Quality**: Completeness, accuracy, consistency from the source

**Real-World Example**: An e-commerce platform generates data from:
- User clicks and page views (web analytics)
- Purchase transactions (database records)
- Product reviews (text data)
- Mobile app interactions (event streams)
- Customer service interactions (chat logs)

### 2. Data Ingestion
**What happens here:**
- Raw data is moved from source systems into your data infrastructure
- Data is validated, formatted, and prepared for processing
- Error handling and retry mechanisms ensure reliable data flow

**Ingestion Patterns:**

**Batch Ingestion:**
- Scheduled data transfers (hourly, daily, weekly)
- Suitable for large volumes of historical data
- Tools: Apache Sqoop, AWS Glue, Azure Data Factory
- Pros: High throughput, cost-effective, simpler error handling
- Cons: Higher latency, not suitable for real-time needs

**Stream Ingestion:**
- Continuous, real-time data flow
- Event-driven architecture with immediate processing
- Tools: Apache Kafka, Amazon Kinesis, Google Pub/Sub
- Pros: Low latency, real-time insights, immediate response to events
- Cons: More complex, higher operational overhead, harder to debug

**Micro-batch Ingestion:**
- Hybrid approach processing small batches frequently
- Balance between batch efficiency and stream responsiveness
- Tools: Apache Spark Streaming, Apache Flink
- Pros: Near real-time processing with batch-like reliability
- Cons: Still some latency, complexity in tuning batch sizes

### 3. Data Storage
**What happens here:**
- Ingested data is stored in appropriate storage systems
- Storage choice depends on data structure, access patterns, and performance requirements
- Data is organized for efficient retrieval and processing

**Storage Architecture Patterns:**

**Data Lakes:**
- Store raw data in its native format
- Schema-on-read approach (structure applied when data is accessed)
- Suitable for exploratory analysis and machine learning
- Technologies: AWS S3, Azure Data Lake, Google Cloud Storage
- Pros: Flexible, cost-effective, handles all data types
- Cons: Can become "data swamps" without proper governance

**Data Warehouses:**
- Structured, schema-on-write approach
- Optimized for analytical queries and reporting
- Dimensional modeling with fact and dimension tables
- Technologies: Snowflake, Amazon Redshift, Google BigQuery
- Pros: Fast query performance, data quality, business-ready
- Cons: Less flexible, higher costs, requires upfront schema design

**Data Lakehouses:**
- Combine flexibility of data lakes with performance of warehouses
- ACID transactions on data lake storage
- Support for both batch and streaming workloads
- Technologies: Databricks Delta Lake, Apache Iceberg, Apache Hudi
- Pros: Best of both worlds, unified architecture
- Cons: Newer technology, learning curve, vendor lock-in concerns

### 4. Data Processing & Transformation
**What happens here:**
- Raw data is cleaned, transformed, and enriched
- Business logic is applied to create meaningful datasets
- Data quality issues are identified and resolved

**Processing Paradigms:**

**ETL (Extract, Transform, Load):**
Traditional approach where data is transformed before loading
- Extract data from sources
- Transform data in a staging area
- Load clean data into the target system
- Pros: Clean data in target, predictable performance
- Cons: Rigid schema, slower time-to-insight

**ELT (Extract, Load, Transform):**
Modern approach where raw data is loaded first, then transformed
- Extract data from sources
- Load raw data into data lake/warehouse
- Transform data as needed for specific use cases
- Pros: Flexible schema, faster ingestion, preserves raw data
- Cons: Storage costs, potential data quality issues

**Data Transformation Types:**

**Structural Transformations:**
- Changing data formats (JSON to tabular)
- Normalizing or denormalizing data structures
- Splitting or combining columns
- Data type conversions

**Content Transformations:**
- Data cleansing (removing duplicates, fixing errors)
- Data standardization (consistent formats, units)
- Data enrichment (adding derived fields, external data)
- Data aggregation (summaries, rollups)

**Business Logic Transformations:**
- Applying business rules and calculations
- Creating business metrics and KPIs
- Customer segmentation and scoring
- Feature engineering for machine learning

### 5. Data Integration & Modeling
**What happens here:**
- Data from multiple sources is combined and integrated
- Relationships between different datasets are established
- Data models are created to support business requirements

**Integration Challenges:**
- **Schema Differences**: Different field names, data types, formats
- **Data Quality Variations**: Inconsistent quality across sources
- **Temporal Alignment**: Data from different time periods or frequencies
- **Business Logic Conflicts**: Different business rules across systems

**Data Modeling Approaches:**

**Dimensional Modeling:**
- Star schema with fact tables (measures) and dimension tables (attributes)
- Optimized for analytical queries and reporting
- Easy to understand and navigate for business users
- Best for: Data warehouses, business intelligence

**Data Vault Modeling:**
- Highly normalized approach with hubs, links, and satellites
- Designed for data warehouse scalability and auditability
- Handles changing business requirements well
- Best for: Enterprise data warehouses, regulatory environments

**One Big Table (OBT):**
- Denormalized approach with all data in wide tables
- Optimized for analytical processing and cloud data warehouses
- Simplifies queries but can lead to data redundancy
- Best for: Cloud analytics, self-service BI

### 6. Data Serving & Access
**What happens here:**
- Processed data is made available to end users and applications
- Different access patterns require different serving strategies
- Performance optimization ensures fast query response times

**Serving Patterns:**

**OLAP (Online Analytical Processing):**
- Optimized for complex analytical queries
- Supports aggregations, drill-downs, and multi-dimensional analysis
- Technologies: Snowflake, BigQuery, Azure Synapse
- Use cases: Business intelligence, reporting, data analysis

**OLTP (Online Transaction Processing):**
- Optimized for high-frequency, low-latency transactions
- Supports CRUD operations with ACID properties
- Technologies: PostgreSQL, MySQL, Oracle
- Use cases: Operational applications, real-time systems

**API-based Serving:**
- Data exposed through REST APIs or GraphQL
- Enables application integration and self-service access
- Technologies: FastAPI, Django REST, GraphQL servers
- Use cases: Application integration, microservices, mobile apps

**Real-time Serving:**
- Low-latency access to streaming data
- Supports real-time dashboards and alerting
- Technologies: Apache Kafka, Redis, Apache Druid
- Use cases: Monitoring, real-time analytics, fraud detection

### 7. Data Consumption & Analytics
**What happens here:**
- End users consume data through various interfaces
- Business insights are generated from processed data
- Feedback loops inform improvements to the data pipeline

**Consumption Patterns:**

**Business Intelligence & Reporting:**
- Dashboards, reports, and visualizations
- Self-service analytics for business users
- Tools: Tableau, Power BI, Looker, Grafana

**Data Science & Machine Learning:**
- Exploratory data analysis and model development
- Feature engineering and model training
- Tools: Jupyter notebooks, MLflow, Kubeflow

**Operational Analytics:**
- Real-time monitoring and alerting
- Automated decision-making systems
- Tools: Prometheus, Grafana, custom applications

**Data Products:**
- Data-driven applications and services
- APIs that serve processed data to other systems
- Examples: Recommendation engines, fraud detection systems

## Data Lifecycle Governance

### Data Quality Management
**Throughout the lifecycle:**
- **Data Profiling**: Understanding data characteristics and quality
- **Data Validation**: Checking data against business rules and constraints
- **Data Monitoring**: Continuous monitoring of data quality metrics
- **Data Lineage**: Tracking data flow and transformations

### Security & Privacy
**At every stage:**
- **Access Control**: Role-based permissions and authentication
- **Data Encryption**: Protecting data at rest and in transit
- **Privacy Compliance**: GDPR, CCPA, and industry-specific regulations
- **Audit Trails**: Logging and monitoring data access and changes

### Metadata Management
**Across all stages:**
- **Technical Metadata**: Schema, data types, relationships
- **Business Metadata**: Definitions, business rules, ownership
- **Operational Metadata**: Processing logs, performance metrics
- **Data Catalog**: Centralized repository of metadata for discovery

## Modern Data Lifecycle Challenges

### Scale & Performance
- **Volume**: Processing petabytes of data efficiently
- **Velocity**: Handling high-frequency data streams
- **Variety**: Managing diverse data types and formats
- **Veracity**: Ensuring data quality at scale

### Technology Evolution
- **Cloud Migration**: Moving from on-premises to cloud-native architectures
- **Real-time Requirements**: Increasing demand for real-time insights
- **AI/ML Integration**: Supporting machine learning workflows
- **Self-Service Analytics**: Enabling business users to access data independently

### Organizational Challenges
- **Data Silos**: Breaking down organizational barriers to data sharing
- **Skills Gap**: Finding and training data engineering talent
- **Governance**: Balancing data access with security and compliance
- **Cost Management**: Optimizing infrastructure costs while maintaining performance

## Best Practices for Data Lifecycle Management

### 1. Design for Change
- Build flexible architectures that can adapt to changing requirements
- Use schema evolution strategies to handle data structure changes
- Implement versioning for data models and transformations

### 2. Automate Everything
- Automate data quality checks and validation
- Use infrastructure as code for reproducible deployments
- Implement automated testing for data pipelines

### 3. Monitor Continuously
- Set up comprehensive monitoring and alerting
- Track data quality metrics and SLA compliance
- Monitor system performance and resource utilization

### 4. Document Thoroughly
- Maintain clear documentation for data sources and transformations
- Create data dictionaries and business glossaries
- Document data lineage and dependencies

### 5. Plan for Failure
- Implement robust error handling and retry mechanisms
- Design for fault tolerance and disaster recovery
- Test failure scenarios regularly

The data lifecycle is not a linear process but a continuous cycle of improvement. As business requirements evolve and new technologies emerge, data engineers must continuously optimize and enhance each stage of the lifecycle to deliver reliable, high-quality data that drives business value.

Understanding this lifecycle deeply will help you make better architectural decisions, troubleshoot issues more effectively, and build more robust data systems that can scale with your organization's needs.`,
      },
      {
        id: 'etl-vs-elt',
        title: 'ETL vs ELT: The Great Data Processing Debate',
        content: `# ETL vs ELT: The Great Data Processing Debate

The choice between ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) is one of the most fundamental architectural decisions in data engineering. This choice affects everything from performance and scalability to development workflows and data governance.

## Understanding ETL (Extract, Transform, Load)

### The Traditional ETL Approach

**Process Flow:**
1. **Extract**: Data is pulled from source systems
2. **Transform**: Data is processed, cleaned, and transformed in a staging area
3. **Load**: Clean, processed data is loaded into the target system

**Historical Context:**
ETL emerged in the 1970s when:
- Storage was expensive, so data needed to be clean before storing
- Processing power was limited, requiring efficient transformations
- Data warehouses had rigid schemas that required pre-processing
- Network bandwidth was limited, making it costly to move large amounts of data

### ETL Architecture Components

**Staging Area:**
- Temporary storage where transformations occur
- Isolated from both source and target systems
- Allows for complex, multi-step transformations
- Provides a buffer for handling processing failures

**Transformation Engine:**
- Dedicated processing environment for data transformations
- Often uses specialized ETL tools (Informatica, Talend, SSIS)
- Optimized for data processing operations
- Handles complex business logic and data quality rules

**Target System:**
- Receives only clean, processed data
- Typically a data warehouse with predefined schema
- Optimized for analytical queries
- Maintains data quality and consistency

### ETL Advantages

**Data Quality Assurance:**
- Data is cleaned and validated before reaching the target
- Business rules are applied consistently
- Data quality issues are caught early in the process
- Target system contains only high-quality, business-ready data

**Predictable Performance:**
- Transformations happen in dedicated processing environment
- Target system performance is not affected by transformation logic
- Query performance is optimized since data is pre-processed
- Resource allocation is predictable and manageable

**Security & Compliance:**
- Sensitive data can be masked or encrypted during transformation
- Compliance rules are applied before data reaches the target
- Audit trails are easier to maintain
- Data governance is enforced at the transformation layer

**Network Efficiency:**
- Only processed, relevant data is moved to the target
- Reduces network bandwidth requirements
- Minimizes storage costs in the target system
- Efficient for scenarios with limited connectivity

### ETL Disadvantages

**Rigid Schema Requirements:**
- Target schema must be defined upfront
- Changes to business requirements require pipeline modifications
- Difficult to accommodate new data sources quickly
- Schema evolution is complex and time-consuming

**Slower Time-to-Insight:**
- Data must be fully processed before it's available for analysis
- Complex transformations can create bottlenecks
- Batch processing introduces latency
- Business users must wait for ETL cycles to complete

**Limited Flexibility:**
- Difficult to support ad-hoc analysis requirements
- Raw data is not preserved in the target system
- Reprocessing requires going back to source systems
- Hard to adapt to changing analytical needs

**Higher Development Overhead:**
- Requires specialized ETL developers and tools
- Complex transformation logic is harder to maintain
- Testing and debugging transformations is challenging
- Version control and deployment are more complex

## Understanding ELT (Extract, Load, Transform)

### The Modern ELT Approach

**Process Flow:**
1. **Extract**: Data is pulled from source systems
2. **Load**: Raw data is loaded directly into the target system
3. **Transform**: Data is transformed within the target system as needed

**Modern Context:**
ELT became viable with:
- Cloud computing providing virtually unlimited storage and compute
- Columnar databases optimized for analytical processing
- Massively parallel processing (MPP) architectures
- Separation of storage and compute in cloud data warehouses

### ELT Architecture Components

**Data Lake/Warehouse:**
- Stores both raw and processed data
- Provides massive storage capacity at low cost
- Supports schema-on-read for flexible data access
- Enables both batch and real-time processing

**In-Database Processing:**
- Transformations happen within the target system
- Leverages the processing power of modern data warehouses
- Uses SQL or distributed computing frameworks
- Takes advantage of data locality for performance

**Transformation Layer:**
- Often implemented using SQL or tools like dbt
- Transformations are version-controlled and testable
- Can be run on-demand or scheduled
- Supports incremental processing patterns

### ELT Advantages

**Flexibility & Agility:**
- Raw data is immediately available for analysis
- Schema can evolve without pipeline changes
- New analytical requirements can be addressed quickly
- Supports both structured and unstructured data

**Faster Time-to-Insight:**
- Data is available as soon as it's loaded
- Transformations can be applied on-demand
- Supports real-time and near-real-time processing
- Business users can access data immediately

**Cost Efficiency:**
- Leverages cloud storage economics (storage is cheap)
- Compute resources are used only when needed
- No need for separate transformation infrastructure
- Pay-as-you-go pricing models

**Scalability:**
- Cloud data warehouses can scale compute independently
- Handles large data volumes efficiently
- Supports concurrent users and workloads
- Auto-scaling capabilities reduce operational overhead

**Data Preservation:**
- Raw data is preserved for future use
- Enables data reprocessing with new business logic
- Supports data science and machine learning workflows
- Provides complete data lineage and audit trails

### ELT Disadvantages

**Data Quality Challenges:**
- Raw data may contain quality issues
- Data validation happens after loading
- Downstream systems may receive poor-quality data
- Requires robust data quality monitoring

**Performance Considerations:**
- Large volumes of raw data can impact query performance
- Transformation logic competes with analytical queries for resources
- May require careful resource management and optimization
- Complex transformations can be resource-intensive

**Security & Governance:**
- Sensitive data is stored in raw form
- Requires careful access control and data masking
- Compliance requirements must be handled post-load
- Data governance is more complex with raw data

**Skill Requirements:**
- Requires SQL expertise for transformations
- Data analysts need to understand data quality issues
- More complex data governance and monitoring
- Requires understanding of cloud data warehouse optimization

## ETL vs ELT: Decision Framework

### When to Choose ETL

**Regulatory & Compliance Requirements:**
- Strict data governance and compliance needs
- Sensitive data that must be processed before storage
- Industries with heavy regulatory oversight (finance, healthcare)
- Requirements for data masking and anonymization

**Limited Target System Resources:**
- Constrained storage or compute capacity
- Legacy systems that can't handle raw data volumes
- Network bandwidth limitations
- Cost-sensitive environments where storage is expensive

**Complex Business Logic:**
- Sophisticated transformation requirements
- Multi-step data processing workflows
- Integration with legacy systems and formats
- Need for specialized transformation tools

**Predictable Workloads:**
- Well-defined, stable analytical requirements
- Batch processing is acceptable
- Limited need for ad-hoc analysis
- Mature data processes with established patterns

### When to Choose ELT

**Cloud-Native Environments:**
- Modern cloud data warehouses (Snowflake, BigQuery, Redshift)
- Unlimited storage and elastic compute
- Pay-as-you-go pricing models
- Auto-scaling capabilities

**Agile Analytics Requirements:**
- Rapidly changing business requirements
- Need for self-service analytics
- Data science and machine learning workloads
- Exploratory data analysis needs

**Real-Time or Near-Real-Time Needs:**
- Streaming data processing
- Real-time dashboards and monitoring
- Event-driven architectures
- Low-latency analytical requirements

**Diverse Data Types:**
- Unstructured and semi-structured data
- JSON, XML, and other flexible formats
- IoT and sensor data
- Social media and web data

## Hybrid Approaches: The Best of Both Worlds

### Lambda Architecture
Combines batch and stream processing:
- **Batch Layer**: ETL for historical data processing
- **Speed Layer**: ELT for real-time data processing
- **Serving Layer**: Unified view of batch and real-time results

### Kappa Architecture
Stream-first approach with reprocessing capabilities:
- All data is treated as streams
- Batch processing is just a special case of stream processing
- Enables both real-time and historical analysis

### Modern Data Stack
Combines multiple approaches:
- **Ingestion**: Tools like Fivetran, Stitch for ELT
- **Storage**: Cloud data warehouses for raw and processed data
- **Transformation**: dbt for SQL-based transformations
- **Orchestration**: Airflow for workflow management

## Implementation Considerations

### Tool Selection

**ETL Tools:**
- **Traditional**: Informatica PowerCenter, IBM DataStage, Microsoft SSIS
- **Open Source**: Apache NiFi, Talend Open Studio, Pentaho
- **Cloud-Native**: AWS Glue, Azure Data Factory, Google Cloud Dataflow

**ELT Tools:**
- **Transformation**: dbt, Dataform, Matillion
- **Orchestration**: Apache Airflow, Prefect, Dagster
- **Data Warehouses**: Snowflake, BigQuery, Redshift, Databricks

### Performance Optimization

**ETL Optimization:**
- Parallel processing in transformation layer
- Incremental processing patterns
- Efficient staging area design
- Resource allocation and scheduling

**ELT Optimization:**
- Query optimization and indexing
- Partitioning and clustering strategies
- Resource management and scaling
- Caching and materialized views

### Monitoring & Observability

**ETL Monitoring:**
- Transformation job success/failure rates
- Data quality metrics and validation results
- Processing time and resource utilization
- Error handling and retry mechanisms

**ELT Monitoring:**
- Data freshness and availability
- Query performance and resource usage
- Data quality monitoring post-load
- Transformation job monitoring

## The Future of Data Processing

### Emerging Trends

**Real-Time ELT:**
- Stream processing with immediate transformation
- Event-driven architectures
- Continuous data processing

**AI-Powered Transformations:**
- Automated data quality detection
- Intelligent schema mapping
- ML-driven data transformations

**Serverless Processing:**
- Function-as-a-Service for transformations
- Event-driven processing
- Auto-scaling and cost optimization

**Data Mesh Architecture:**
- Domain-driven data ownership
- Decentralized data processing
- Self-service data platforms

### Choosing Your Path Forward

The ETL vs ELT decision is not binary. Modern data architectures often combine both approaches:

1. **Start with your requirements**: Understand your data, users, and constraints
2. **Consider your infrastructure**: Cloud vs on-premises, existing tools and skills
3. **Think about the future**: How will your needs evolve?
4. **Implement incrementally**: Start simple and add complexity as needed
5. **Monitor and optimize**: Continuously improve based on actual usage patterns

The key is to choose the approach that best serves your organization's current needs while providing flexibility for future growth. Whether you choose ETL, ELT, or a hybrid approach, the most important factor is building reliable, maintainable systems that deliver value to your business users.`,
      }
    ]
  },
  'de-databases': {
    title: 'Databases & Storage Systems',
    description: 'Comprehensive guide to data storage technologies',
    sections: [
      {
        id: 'sql-mastery',
        title: 'SQL Mastery for Data Engineers',
        content: `# SQL Mastery for Data Engineers

SQL (Structured Query Language) is the foundation of data engineering. While many modern tools abstract away SQL complexity, a deep understanding of SQL is essential for building efficient data pipelines, optimizing performance, and troubleshooting issues.

## Advanced SQL Concepts for Data Engineers

### Window Functions: The Power Tool of Analytics

Window functions perform calculations across a set of table rows related to the current row, without collapsing the result set like GROUP BY would.

**Core Window Function Categories:**

**Ranking Functions:**
- **ROW_NUMBER()**: Assigns unique sequential integers
- **RANK()**: Assigns rank with gaps for ties
- **DENSE_RANK()**: Assigns rank without gaps for ties
- **NTILE(n)**: Divides rows into n buckets

**Aggregate Functions:**
- **SUM(), AVG(), COUNT(), MIN(), MAX()** over windows
- **FIRST_VALUE(), LAST_VALUE()**: First/last values in window
- **LAG(), LEAD()**: Access previous/next row values

**Real-World Applications:**

**Customer Lifetime Value Calculation:**
Calculate running totals and moving averages for customer spending patterns.

**Time Series Analysis:**
Compare current period performance with previous periods using LAG/LEAD functions.

**Data Quality Checks:**
Identify duplicates and outliers using ranking functions.

**Business Intelligence:**
Create running totals, moving averages, and period-over-period comparisons.

### Common Table Expressions (CTEs): Readable Complex Queries

CTEs provide a way to write more readable and maintainable complex queries by breaking them into logical steps.

**Benefits of CTEs:**
- **Readability**: Break complex logic into named, understandable steps
- **Reusability**: Reference the same CTE multiple times in a query
- **Recursion**: Handle hierarchical data structures
- **Debugging**: Easier to test and debug individual steps

**Recursive CTEs:**
Handle hierarchical data like organizational charts, bill of materials, or graph traversal.

**Performance Considerations:**
- CTEs are typically materialized once and reused
- Can improve performance for complex queries
- May create temporary tables in some database systems

### Advanced JOIN Patterns

**Self Joins:**
Join a table to itself to find relationships within the same dataset.
- Employee-manager relationships
- Product hierarchies
- Time-based comparisons

**Cross Joins:**
Cartesian product of two tables, useful for:
- Generating date ranges
- Creating all possible combinations
- Data modeling scenarios

**Lateral Joins:**
Allow subqueries to reference columns from preceding tables in the FROM clause.
- Dynamic subqueries based on outer table values
- Top-N queries per group
- Complex analytical patterns

### Query Optimization Techniques

**Index Strategy:**
- **B-tree indexes**: Standard indexes for equality and range queries
- **Hash indexes**: Optimized for equality comparisons
- **Bitmap indexes**: Efficient for low-cardinality columns
- **Partial indexes**: Indexes on subsets of data
- **Composite indexes**: Multi-column indexes for complex queries

**Query Plan Analysis:**
- Understanding execution plans
- Identifying bottlenecks and inefficiencies
- Cost-based optimization principles
- Statistics and cardinality estimation

**Performance Best Practices:**
- Use appropriate WHERE clauses to limit data
- Avoid SELECT * in production queries
- Use EXISTS instead of IN for subqueries
- Leverage partitioning for large tables
- Consider materialized views for complex aggregations

### Data Types and Storage Optimization

**Choosing Appropriate Data Types:**
- **Numeric Types**: INTEGER vs BIGINT vs DECIMAL considerations
- **String Types**: VARCHAR vs CHAR vs TEXT optimization
- **Date/Time Types**: Timezone handling and storage efficiency
- **JSON/JSONB**: Semi-structured data handling

**Storage Considerations:**
- **Compression**: Column-store compression techniques
- **Partitioning**: Range, hash, and list partitioning strategies
- **Clustering**: Physical data organization for query performance
- **Archiving**: Hot, warm, and cold data storage strategies

## Database Systems Deep Dive

### Relational Databases (OLTP)

**PostgreSQL: The Advanced Open Source Choice**

**Strengths:**
- ACID compliance with strong consistency guarantees
- Advanced data types (JSON, arrays, custom types)
- Extensibility with custom functions and extensions
- Strong community and ecosystem
- Excellent performance for complex queries

**Data Engineering Use Cases:**
- Transactional systems requiring strong consistency
- Applications with complex data relationships
- Systems requiring custom data types and functions
- Environments where open source is preferred

**Optimization Techniques:**
- Connection pooling with PgBouncer
- Query optimization with EXPLAIN ANALYZE
- Partitioning for large tables
- Replication for read scaling

**MySQL: The Web-Scale Workhorse**

**Strengths:**
- High performance for read-heavy workloads
- Excellent replication capabilities
- Wide ecosystem and tool support
- Simple administration and maintenance
- Strong community and documentation

**Data Engineering Use Cases:**
- Web applications with high read volumes
- Systems requiring simple, fast transactions
- Environments with existing MySQL expertise
- Applications needing master-slave replication

**Optimization Techniques:**
- InnoDB engine optimization
- Query cache configuration
- Read replica scaling
- Partitioning strategies

### Analytical Databases (OLAP)

**Snowflake: The Cloud Data Warehouse Leader**

**Architecture:**
- Separation of storage and compute
- Multi-cluster shared data architecture
- Automatic scaling and optimization
- Zero-copy cloning capabilities

**Strengths:**
- Elastic scaling without downtime
- Support for semi-structured data (JSON, XML, Avro)
- Time travel and data recovery features
- Strong security and governance features
- Pay-per-use pricing model

**Data Engineering Applications:**
- Modern data warehouse implementations
- Analytics on semi-structured data
- Environments requiring elastic scaling
- Organizations prioritizing ease of use

**Best Practices:**
- Warehouse sizing and auto-scaling configuration
- Clustering keys for large tables
- Result caching optimization
- Resource monitoring and cost management

**Amazon Redshift: The AWS Analytics Powerhouse**

**Architecture:**
- Columnar storage with compression
- Massively parallel processing (MPP)
- Integration with AWS ecosystem
- Spectrum for querying S3 data

**Strengths:**
- High performance for analytical workloads
- Deep AWS integration
- Mature ecosystem and tooling
- Cost-effective for large data volumes

**Data Engineering Applications:**
- AWS-centric data architectures
- Large-scale analytical processing
- Integration with AWS data services
- Cost-sensitive analytical workloads

**Optimization Techniques:**
- Distribution and sort key selection
- Vacuum and analyze operations
- Workload management queues
- Spectrum for data lake integration

**Google BigQuery: The Serverless Analytics Engine**

**Architecture:**
- Serverless, fully managed service
- Columnar storage with automatic optimization
- Separation of storage and compute
- Integration with Google Cloud ecosystem

**Strengths:**
- No infrastructure management required
- Automatic scaling and optimization
- Strong machine learning integration
- Pay-per-query pricing model
- Excellent performance for analytical queries

**Data Engineering Applications:**
- Serverless analytics architectures
- Machine learning and AI workloads
- Organizations wanting minimal operational overhead
- Google Cloud-centric environments

**Best Practices:**
- Query optimization for cost control
- Partitioning and clustering strategies
- Slot allocation and reservation
- Integration with Dataflow and other GCP services

### NoSQL Databases

**Document Databases: MongoDB**

**Data Model:**
- Flexible, schema-less document storage
- Rich query language with aggregation framework
- Horizontal scaling with sharding
- ACID transactions (in recent versions)

**Data Engineering Use Cases:**
- Content management systems
- Product catalogs with varying attributes
- Real-time analytics on JSON data
- Applications requiring flexible schemas

**Optimization Strategies:**
- Index design for query patterns
- Sharding key selection
- Aggregation pipeline optimization
- Read preference configuration

**Key-Value Stores: Redis**

**Characteristics:**
- In-memory data structure store
- Support for various data types (strings, hashes, lists, sets)
- Pub/sub messaging capabilities
- Persistence options (RDB, AOF)

**Data Engineering Applications:**
- Caching layer for data pipelines
- Session storage for web applications
- Real-time analytics and counters
- Message queuing and pub/sub

**Performance Optimization:**
- Memory optimization techniques
- Persistence configuration
- Clustering for high availability
- Pipeline commands for bulk operations

**Column-Family: Apache Cassandra**

**Architecture:**
- Distributed, decentralized design
- Tunable consistency levels
- Linear scalability
- No single point of failure

**Data Engineering Use Cases:**
- Time series data storage
- IoT data ingestion and storage
- Applications requiring high write throughput
- Globally distributed applications

**Design Considerations:**
- Data modeling around query patterns
- Partition key design for even distribution
- Consistency level selection
- Compaction strategy optimization

### Modern Data Storage Patterns

**Data Lakes: Flexible Storage for All Data Types**

**Architecture Principles:**
- Store data in its native format
- Schema-on-read approach
- Separation of storage and compute
- Support for structured, semi-structured, and unstructured data

**Storage Formats:**
- **Parquet**: Columnar format optimized for analytics
- **ORC**: Optimized Row Columnar format
- **Avro**: Schema evolution support
- **Delta Lake**: ACID transactions on data lakes

**Governance Challenges:**
- Data cataloging and discovery
- Data quality and validation
- Access control and security
- Schema management and evolution

**Data Warehouses: Structured Analytics Storage**

**Design Patterns:**
- **Star Schema**: Central fact table with dimension tables
- **Snowflake Schema**: Normalized dimension tables
- **Data Vault**: Highly normalized approach for enterprise
- **One Big Table**: Denormalized approach for cloud warehouses

**Modern Warehouse Features:**
- Automatic optimization and tuning
- Support for semi-structured data
- Time travel and versioning
- Integration with machine learning platforms

**Data Lakehouses: The Best of Both Worlds**

**Key Technologies:**
- **Delta Lake**: ACID transactions and schema enforcement
- **Apache Iceberg**: Table format with schema evolution
- **Apache Hudi**: Incremental data processing

**Benefits:**
- ACID transactions on data lake storage
- Schema enforcement and evolution
- Time travel and versioning
- Support for both batch and streaming workloads

## Storage Optimization Strategies

### Partitioning Strategies

**Range Partitioning:**
- Partition by date ranges (most common)
- Suitable for time-series data
- Enables partition pruning for time-based queries
- Easy to implement and understand

**Hash Partitioning:**
- Even distribution of data across partitions
- Good for high-cardinality partition keys
- Prevents data skew
- Suitable for parallel processing

**List Partitioning:**
- Partition by specific values
- Good for categorical data
- Enables partition elimination
- Useful for multi-tenant applications

### Compression Techniques

**Row-Level Compression:**
- Gzip, LZ4, Snappy compression
- Trade-off between compression ratio and speed
- Suitable for archival storage
- Reduces I/O costs

**Column-Level Compression:**
- Dictionary encoding for categorical data
- Run-length encoding for repeated values
- Delta encoding for sequential data
- Bit-packing for small integer ranges

### Indexing Strategies

**Primary Indexes:**
- Clustered indexes for physical data organization
- Choose based on most common query patterns
- Consider cardinality and selectivity
- Balance between query performance and maintenance cost

**Secondary Indexes:**
- Support for additional query patterns
- Consider covering indexes for read-heavy workloads
- Partial indexes for filtered queries
- Composite indexes for multi-column queries

## Database Selection Framework

### Requirements Analysis

**Data Characteristics:**
- Volume: How much data will you store?
- Velocity: How fast does data change?
- Variety: What types of data do you have?
- Veracity: What are your data quality requirements?

**Access Patterns:**
- Read vs write ratios
- Query complexity and types
- Concurrency requirements
- Latency and throughput needs

**Operational Requirements:**
- Availability and disaster recovery needs
- Backup and restore requirements
- Monitoring and maintenance capabilities
- Scaling requirements (vertical vs horizontal)

### Technology Evaluation Matrix

**OLTP Requirements:**
- ACID compliance needs
- Transaction volume and complexity
- Consistency requirements
- Integration with existing systems

**OLAP Requirements:**
- Query complexity and performance
- Data volume and growth projections
- User concurrency needs
- Integration with BI tools

**Hybrid Requirements:**
- Mixed workload support
- Real-time analytics needs
- Operational reporting requirements
- Cost optimization priorities

The choice of database technology is one of the most critical decisions in data engineering. It affects not only current performance and capabilities but also future scalability and flexibility. Take time to understand your requirements deeply, evaluate options thoroughly, and plan for future growth and evolution.`,
      }
    ]
  },
  'de-pipelines': {
    title: 'Building Production Data Pipelines',
    description: 'Design, build, and maintain robust data pipelines',
    sections: [
      {
        id: 'pipeline-architecture',
        title: 'Data Pipeline Architecture & Design Patterns',
        content: `# Data Pipeline Architecture & Design Patterns

Building robust, scalable data pipelines is at the heart of data engineering. A well-designed pipeline can handle failures gracefully, scale with growing data volumes, and provide reliable data delivery. This comprehensive guide covers the architectural patterns, design principles, and best practices for building production-ready data pipelines.

## Fundamental Pipeline Architecture Patterns

### Linear Pipeline Pattern

**Structure:**
Source -> Transform -> Destination

**Characteristics:**
- Simple, sequential processing
- Each stage depends on the previous stage
- Easy to understand and debug
- Limited parallelization opportunities

**Use Cases:**
- Simple ETL processes
- Data migration projects
- Proof-of-concept implementations
- Small-scale data processing

**Advantages:**
- Simple to implement and maintain
- Clear data lineage
- Easy error tracking
- Minimal coordination complexity

**Disadvantages:**
- Single point of failure
- Limited scalability
- No parallel processing
- Bottlenecks can affect entire pipeline

### Fan-Out Pattern

**Structure:**
Source -> Multiple Parallel Transforms -> Multiple Destinations

**Characteristics:**
- One input feeds multiple parallel processing paths
- Each path can have different transformation logic
- Parallel execution improves performance
- Independent failure domains

**Use Cases:**
- Multi-format data export
- Real-time and batch processing from same source
- Different aggregation levels for different consumers
- A/B testing scenarios

**Implementation Considerations:**
- Load balancing across parallel paths
- Coordination of completion across paths
- Error handling for individual paths
- Resource allocation and management

### Fan-In Pattern

**Structure:**
Multiple Sources -> Merge/Join -> Single Transform -> Destination

**Characteristics:**
- Multiple inputs combined into single processing stream
- Requires data synchronization and alignment
- Complex coordination logic
- Single output destination

**Use Cases:**
- Data integration from multiple systems
- Master data management
- 360-degree customer view creation
- Financial consolidation processes

**Challenges:**
- Data synchronization across sources
- Handling different data arrival times
- Schema alignment and conflict resolution
- Error propagation from multiple sources

### Lambda Architecture Pattern

**Structure:**
Source -> Batch Layer (Historical) + Speed Layer (Real-time) -> Serving Layer

**Characteristics:**
- Dual processing paths for batch and real-time data
- Batch layer provides comprehensive, accurate results
- Speed layer provides low-latency, approximate results
- Serving layer merges results from both layers

**Use Cases:**
- Real-time analytics with historical context
- Systems requiring both accuracy and low latency
- Event processing with batch reconciliation
- Financial trading and risk management

**Complexity Considerations:**
- Maintaining two separate codebases
- Data consistency between layers
- Complex serving layer logic
- Higher operational overhead

### Kappa Architecture Pattern

**Structure:**
Source -> Stream Processing -> Serving Layer (with reprocessing capability)

**Characteristics:**
- Stream-first approach to data processing
- Batch processing is treated as a special case of stream processing
- Single codebase for all processing logic
- Reprocessing capability for historical data

**Use Cases:**
- Event-driven architectures
- Real-time analytics platforms
- IoT data processing
- Modern cloud-native applications

**Benefits:**
- Simplified architecture with single processing paradigm
- Consistent processing logic
- Better resource utilization
- Easier maintenance and debugging

## Pipeline Design Principles

### Idempotency: The Foundation of Reliable Pipelines

**Definition:**
An idempotent operation produces the same result regardless of how many times it's executed.

**Why It Matters:**
- Enables safe retries after failures
- Simplifies error recovery procedures
- Reduces data corruption risks
- Supports exactly-once processing semantics

**Implementation Strategies:**

**Upsert Operations:**
Use INSERT ... ON CONFLICT or MERGE statements to handle duplicate data gracefully.

**Deterministic Transformations:**
Ensure transformations produce consistent results with the same input data.

**Timestamp-Based Processing:**
Use processing timestamps to handle late-arriving data and reprocessing scenarios.

**Checkpointing:**
Implement checkpoints to track processing progress and enable restarts from known good states.

### Fault Tolerance: Building Resilient Systems

**Failure Categories:**

**Transient Failures:**
- Network timeouts and connectivity issues
- Temporary resource unavailability
- Rate limiting and throttling
- Temporary service outages

**Permanent Failures:**
- Data corruption or invalid formats
- Authentication and authorization failures
- Configuration errors
- Resource exhaustion

**Fault Tolerance Strategies:**

**Retry Mechanisms:**
- Exponential backoff for transient failures
- Maximum retry limits to prevent infinite loops
- Circuit breakers to prevent cascade failures
- Dead letter queues for failed messages

**Graceful Degradation:**
- Continue processing valid data when some data is invalid
- Provide approximate results when exact computation fails
- Fall back to cached or historical data
- Reduce functionality rather than complete failure

**Error Isolation:**
- Process data in small batches to limit failure impact
- Use separate error handling paths
- Implement bulkheads to prevent failure propagation
- Monitor and alert on error rates and patterns

### Scalability: Designing for Growth

**Horizontal Scaling Patterns:**

**Data Partitioning:**
- Partition data by time, geography, or business domain
- Enable parallel processing across partitions
- Balance partition sizes to prevent hotspots
- Consider partition key selection carefully

**Microservices Architecture:**
- Break pipelines into independent, deployable services
- Enable independent scaling of different components
- Use message queues for service communication
- Implement service discovery and load balancing

**Elastic Scaling:**
- Auto-scaling based on queue depth or processing metrics
- Container orchestration for dynamic resource allocation
- Serverless functions for event-driven processing
- Cloud-native scaling capabilities

**Vertical Scaling Considerations:**
- CPU-intensive vs I/O-intensive workloads
- Memory requirements for in-memory processing
- Storage performance requirements
- Network bandwidth considerations

### Monitoring & Observability: Visibility into Pipeline Health

**Key Metrics to Track:**

**Throughput Metrics:**
- Records processed per second/minute/hour
- Data volume processed (bytes, GB, TB)
- Processing latency and end-to-end delay
- Queue depths and backlog sizes

**Quality Metrics:**
- Data validation failure rates
- Schema compliance percentages
- Duplicate detection rates
- Data freshness and staleness metrics

**System Metrics:**
- CPU, memory, and disk utilization
- Network I/O and bandwidth usage
- Error rates and failure patterns
- Resource costs and efficiency metrics

**Business Metrics:**
- SLA compliance and availability
- Time to insight for business users
- Cost per processed record
- Business impact of pipeline failures

**Observability Implementation:**

**Logging Strategy:**
- Structured logging with consistent formats
- Correlation IDs for tracing requests across services
- Log levels appropriate for different environments
- Centralized log aggregation and search

**Metrics Collection:**
- Time-series metrics for trend analysis
- Custom business metrics alongside system metrics
- Real-time dashboards for operational monitoring
- Historical analysis for capacity planning

**Distributed Tracing:**
- End-to-end request tracing across services
- Performance bottleneck identification
- Dependency mapping and analysis
- Error propagation tracking

**Alerting Framework:**
- Threshold-based alerts for immediate issues
- Anomaly detection for unusual patterns
- Escalation procedures for critical failures
- Alert fatigue prevention through intelligent grouping

## Advanced Pipeline Patterns

### Event-Driven Architecture

**Core Concepts:**
- Events as first-class citizens in the system
- Loose coupling between producers and consumers
- Asynchronous processing and communication
- Event sourcing for complete audit trails

**Implementation Components:**

**Event Streaming Platforms:**
- Apache Kafka for high-throughput event streaming
- Amazon Kinesis for AWS-native streaming
- Google Pub/Sub for serverless event handling
- Azure Event Hubs for enterprise integration

**Event Processing Patterns:**
- Event sourcing for complete state reconstruction
- CQRS (Command Query Responsibility Segregation)
- Saga pattern for distributed transactions
- Event choreography vs orchestration

**Benefits:**
- Real-time processing capabilities
- Scalable and resilient architecture
- Loose coupling between components
- Natural audit trail and replay capabilities

**Challenges:**
- Event ordering and consistency
- Schema evolution and compatibility
- Error handling in distributed systems
- Debugging and troubleshooting complexity

### Stream Processing Architecture

**Stream Processing Paradigms:**

**Record-at-a-Time Processing:**
- Process each record individually as it arrives
- Low latency but limited throughput
- Simple programming model
- Suitable for simple transformations

**Micro-Batch Processing:**
- Process small batches of records frequently
- Balance between latency and throughput
- Easier error handling and recovery
- Better resource utilization

**Windowed Processing:**
- Group records by time windows or other criteria
- Enable aggregations and complex analytics
- Handle late-arriving data with watermarks
- Support for session and sliding windows

**Stream Processing Frameworks:**

**Apache Kafka Streams:**
- Library for building stream processing applications
- Exactly-once processing semantics
- Stateful processing with local state stores
- Integration with Kafka ecosystem

**Apache Flink:**
- Low-latency stream processing engine
- Event time processing with watermarks
- Stateful computations with checkpointing
- Support for both batch and stream processing

**Apache Spark Streaming:**
- Micro-batch processing on Spark engine
- Integration with Spark ecosystem
- Structured streaming for SQL-like operations
- Support for multiple data sources and sinks

### Data Quality Pipeline Integration

**Data Quality Dimensions:**

**Completeness:**
- Missing value detection and handling
- Required field validation
- Data coverage analysis
- Completeness scoring and reporting

**Accuracy:**
- Data validation against business rules
- Reference data verification
- Cross-system consistency checks
- Accuracy metrics and monitoring

**Consistency:**
- Format standardization across sources
- Unit conversion and normalization
- Duplicate detection and resolution
- Referential integrity validation

**Timeliness:**
- Data freshness monitoring
- SLA compliance tracking
- Late data handling strategies
- Real-time quality assessment

**Quality Pipeline Implementation:**

**Validation Rules Engine:**
- Configurable business rules
- Custom validation functions
- Rule versioning and management
- Performance optimization for large datasets

**Quality Metrics Collection:**
- Real-time quality scoring
- Historical quality trends
- Quality dimension breakdown
- Business impact assessment

**Quality Remediation:**
- Automated data correction where possible
- Quarantine processes for invalid data
- Manual review workflows
- Quality improvement feedback loops

## Pipeline Orchestration & Workflow Management

### Workflow Orchestration Patterns

**Directed Acyclic Graphs (DAGs):**
- Tasks represented as nodes
- Dependencies represented as edges
- No circular dependencies allowed
- Clear execution order and parallelization opportunities

**Workflow Scheduling:**
- Time-based scheduling (cron-like)
- Event-driven triggering
- Dependency-based execution
- Manual triggering for ad-hoc processing

**Error Handling in Workflows:**
- Task-level retry policies
- Workflow-level error handling
- Partial workflow recovery
- Error notification and escalation

### Apache Airflow Deep Dive

**Core Concepts:**

**DAG Definition:**
- Python-based DAG definitions
- Dynamic DAG generation
- DAG versioning and deployment
- Configuration management

**Operators:**
- BashOperator for shell commands
- PythonOperator for Python functions
- SQLOperator for database operations
- Custom operators for specific needs

**Executors:**
- SequentialExecutor for development
- LocalExecutor for single-machine parallelism
- CeleryExecutor for distributed execution
- KubernetesExecutor for container orchestration

**Best Practices:**

**DAG Design:**
- Keep DAGs simple and focused
- Use appropriate task granularity
- Implement proper error handling
- Document DAG purpose and dependencies

**Performance Optimization:**
- Optimize task parallelism
- Use appropriate executor configuration
- Monitor resource utilization
- Implement efficient data passing between tasks

**Operational Excellence:**
- Implement comprehensive monitoring
- Use version control for DAG definitions
- Automate deployment processes
- Maintain proper documentation

## Testing Strategies for Data Pipelines

### Unit Testing

**Testable Components:**
- Individual transformation functions
- Data validation rules
- Business logic implementations
- Utility functions and helpers

**Testing Frameworks:**
- pytest for Python-based pipelines
- JUnit for Java-based systems
- Custom testing frameworks for specific needs
- Mock frameworks for external dependencies

**Test Data Management:**
- Synthetic test data generation
- Data anonymization for production data
- Test data versioning and management
- Automated test data refresh

### Integration Testing

**End-to-End Testing:**
- Full pipeline execution with test data
- Validation of output data quality
- Performance testing under load
- Error scenario testing

**Component Integration:**
- Service-to-service communication testing
- Database integration testing
- External API integration testing
- Message queue integration testing

**Environment Management:**
- Isolated test environments
- Infrastructure as code for consistency
- Automated environment provisioning
- Test data seeding and cleanup

### Performance Testing

**Load Testing:**
- Normal load performance validation
- Peak load capacity testing
- Sustained load endurance testing
- Resource utilization monitoring

**Scalability Testing:**
- Horizontal scaling validation
- Vertical scaling limits
- Auto-scaling behavior testing
- Cost-performance optimization

**Chaos Engineering:**
- Failure injection testing
- Network partition simulation
- Resource exhaustion scenarios
- Recovery time validation

Building robust data pipelines requires careful consideration of architecture patterns, design principles, and operational practices. The key is to start with solid foundations—idempotency, fault tolerance, and observability—and then layer on more advanced patterns as your requirements grow in complexity.

Remember that the best pipeline architecture is one that serves your specific business needs while providing room for future growth and evolution. Focus on building systems that are reliable, maintainable, and observable, and you'll be well-positioned to handle whatever challenges come your way.`,
      }
    ]
  },
  'de-streaming': {
    title: 'Real-time Data Processing & Streaming',
    description: 'Master stream processing and real-time analytics',
    sections: [
      {
        id: 'streaming-fundamentals',
        title: 'Stream Processing Fundamentals',
        content: `# Stream Processing Fundamentals: Building Real-Time Data Systems

Stream processing has become essential in modern data architectures as organizations demand real-time insights and immediate responses to events. This comprehensive guide covers the fundamental concepts, architectures, and technologies needed to build robust streaming data systems.

## Understanding Stream Processing

### What is Stream Processing?

Stream processing is a data processing paradigm that handles continuous flows of data in real-time, processing each record as it arrives rather than waiting to collect batches of data. Unlike traditional batch processing, stream processing provides:

- **Low Latency**: Process data within milliseconds or seconds of arrival
- **Continuous Processing**: Handle unbounded data streams that never end
- **Event-Driven Architecture**: React to events as they happen
- **Real-Time Insights**: Enable immediate decision-making and responses

### Stream vs Batch Processing Comparison

**Batch Processing Characteristics:**
- Processes finite datasets at scheduled intervals
- Higher throughput for large volumes
- Simpler programming model and debugging
- Better for complex analytics and historical analysis
- Examples: Daily reports, ETL jobs, machine learning training

**Stream Processing Characteristics:**
- Processes infinite data streams continuously
- Lower latency for real-time requirements
- More complex programming model
- Better for monitoring, alerting, and real-time analytics
- Examples: Fraud detection, real-time recommendations, IoT monitoring

**When to Choose Stream Processing:**
- Real-time fraud detection and security monitoring
- Live dashboards and operational metrics
- Real-time personalization and recommendations
- IoT sensor data processing and alerting
- Financial trading and risk management
- Social media sentiment analysis
- Supply chain optimization and tracking

## Core Stream Processing Concepts

### Event Streams and Event Time

**Event Streams:**
An event stream is an unbounded sequence of events, where each event represents something that happened at a specific point in time. Events are immutable and ordered by their occurrence time.

**Event Time vs Processing Time:**
- **Event Time**: When the event actually occurred in the real world
- **Processing Time**: When the event is processed by the streaming system
- **Ingestion Time**: When the event enters the streaming system

**Why Event Time Matters:**
- Network delays can cause events to arrive out of order
- System failures can cause events to be replayed
- Different time zones and clock synchronization issues
- Business logic often depends on when events actually happened

### Windowing: Grouping Stream Data

Windowing allows you to group events from an infinite stream into finite chunks for processing. This is essential for aggregations and analytics on streaming data.

**Tumbling Windows:**
- Fixed-size, non-overlapping windows
- Each event belongs to exactly one window
- Example: Count events every 5 minutes
- Use cases: Regular reporting, rate limiting, periodic aggregations

**Sliding Windows:**
- Fixed-size windows that slide by a smaller interval
- Events can belong to multiple windows
- Example: Average over last 10 minutes, updated every minute
- Use cases: Moving averages, trend analysis, anomaly detection

**Session Windows:**
- Variable-size windows based on activity periods
- Windows close after a period of inactivity
- Example: User session analysis, shopping cart abandonment
- Use cases: User behavior analysis, session-based analytics

**Global Windows:**
- Single window containing all events
- Requires custom triggers to emit results
- Use cases: Custom windowing logic, stateful processing

### Watermarks and Late Data Handling

**Watermarks:**
Watermarks are timestamps that indicate the progress of event time in a stream. They help the system decide when to close windows and emit results.

**Late Data Challenges:**
- Events can arrive after their window has closed
- Network delays, system failures, or mobile devices going offline
- Need to balance completeness vs latency

**Late Data Handling Strategies:**
- **Drop Late Data**: Ignore events that arrive too late
- **Update Results**: Recompute and update previously emitted results
- **Side Outputs**: Send late data to separate processing path
- **Grace Periods**: Keep windows open for additional time

### Exactly-Once Processing Semantics

**Processing Guarantees:**
- **At-Most-Once**: Events may be lost but never duplicated
- **At-Least-Once**: Events may be duplicated but never lost
- **Exactly-Once**: Each event is processed exactly once

**Achieving Exactly-Once:**
- Idempotent operations that can be safely retried
- Transactional processing with atomic commits
- Deduplication based on event IDs or keys
- Checkpointing and state management

## Apache Kafka: The Streaming Platform Foundation

### Kafka Architecture Deep Dive

**Core Components:**

**Topics and Partitions:**
- Topics are logical channels for organizing events
- Partitions provide parallelism and ordering guarantees
- Events within a partition are ordered by offset
- Partitions are distributed across multiple brokers

**Producers:**
- Applications that publish events to Kafka topics
- Handle partitioning, batching, and compression
- Provide delivery guarantees and error handling
- Support for custom serializers and partitioners

**Consumers:**
- Applications that read events from Kafka topics
- Organized into consumer groups for scalability
- Track progress using offsets
- Support for different consumption patterns

**Brokers:**
- Kafka servers that store and serve data
- Form a distributed cluster for fault tolerance
- Handle replication and leader election
- Manage storage, indexing, and log compaction

### Kafka Design Principles

**Distributed and Fault-Tolerant:**
- Data is replicated across multiple brokers
- Automatic failover and leader election
- No single point of failure
- Horizontal scalability

**High Throughput:**
- Sequential disk I/O for optimal performance
- Batch processing and compression
- Zero-copy data transfer
- Efficient network protocols

**Durable Storage:**
- Events are persisted to disk
- Configurable retention policies
- Log compaction for key-based data
- Backup and disaster recovery capabilities

**Scalable:**
- Add brokers to increase capacity
- Partition topics for parallel processing
- Consumer groups for load distribution
- Linear scalability characteristics

### Kafka Streams: Stream Processing Library

**Programming Model:**
Kafka Streams provides a high-level DSL (Domain Specific Language) for building stream processing applications.

**Key Abstractions:**

**KStream (Event Stream):**
- Represents an unbounded stream of events
- Each record is an independent event
- Supports transformations like map, filter, join
- Immutable and append-only

**KTable (Changelog Stream):**
- Represents a stream of updates to a table
- Latest value for each key represents current state
- Supports aggregations and joins
- Mutable with updates and deletes

**GlobalKTable:**
- Replicated table available on all application instances
- Used for reference data and lookups
- Automatically maintained and updated
- Enables efficient joins with streams

**Stream Processing Operations:**

**Stateless Transformations:**
- **Map**: Transform each record individually
- **Filter**: Select records based on conditions
- **FlatMap**: Transform one record into multiple records
- **Branch**: Split stream into multiple streams

**Stateful Transformations:**
- **Aggregate**: Compute running aggregations
- **Reduce**: Combine records with same key
- **Join**: Combine records from multiple streams
- **Window**: Group records by time windows

### Kafka Connect: Data Integration Framework

**Purpose:**
Kafka Connect provides a scalable and reliable way to stream data between Kafka and external systems.

**Architecture:**
- **Connectors**: Plugins for specific systems (databases, file systems, etc.)
- **Tasks**: Units of work that actually copy data
- **Workers**: Processes that execute connectors and tasks
- **Converters**: Handle data serialization and deserialization

**Source Connectors:**
- Import data from external systems into Kafka
- Examples: Database CDC, file monitoring, API polling
- Handle schema evolution and data transformation
- Provide fault tolerance and exactly-once delivery

**Sink Connectors:**
- Export data from Kafka to external systems
- Examples: Database writes, file output, search indexing
- Support batching and transaction handling
- Provide error handling and dead letter queues

## Advanced Stream Processing Patterns

### Event Sourcing Architecture

**Core Concept:**
Store all changes to application state as a sequence of events, rather than storing current state directly.

**Benefits:**
- Complete audit trail of all changes
- Ability to replay events and rebuild state
- Support for temporal queries and time travel
- Natural fit for event-driven architectures

**Implementation Patterns:**
- Events as the source of truth
- Projections for different views of data
- Snapshots for performance optimization
- Event versioning and schema evolution

**Challenges:**
- Event schema evolution and compatibility
- Handling large event stores
- Query performance for complex projections
- Eventual consistency considerations

### CQRS (Command Query Responsibility Segregation)

**Principle:**
Separate the models for reading and writing data, optimizing each for its specific use case.

**Architecture:**
- **Command Side**: Handles writes and business logic
- **Query Side**: Optimized for reads and reporting
- **Event Store**: Connects command and query sides
- **Projections**: Materialized views for queries

**Benefits:**
- Independent scaling of read and write workloads
- Optimized data models for different use cases
- Better performance and scalability
- Simplified business logic on command side

### Saga Pattern for Distributed Transactions

**Problem:**
Traditional ACID transactions don't work well in distributed, event-driven systems.

**Solution:**
Break long-running transactions into a series of smaller, compensatable transactions.

**Implementation Approaches:**

**Choreography:**
- Each service publishes events and reacts to events from other services
- No central coordinator
- More resilient but harder to understand and debug

**Orchestration:**
- Central orchestrator manages the saga workflow
- Easier to understand and monitor
- Single point of failure concerns

**Compensation Patterns:**
- Forward recovery: Continue despite failures
- Backward recovery: Undo completed steps
- Mixed approach: Combine both strategies

## Stream Processing Frameworks Comparison

### Apache Flink

**Strengths:**
- True streaming with low latency
- Advanced event time processing
- Exactly-once processing guarantees
- Rich windowing and state management
- SQL support for stream processing

**Use Cases:**
- Low-latency stream processing
- Complex event processing
- Real-time analytics and monitoring
- Financial trading systems

**Architecture:**
- JobManager for coordination
- TaskManagers for execution
- Distributed snapshots for fault tolerance
- Flexible deployment options

### Apache Spark Streaming

**Strengths:**
- Integration with Spark ecosystem
- Unified batch and stream processing
- Rich library ecosystem
- Structured streaming with SQL support

**Architecture:**
- Micro-batch processing model
- Driver program coordinates execution
- Executors process data
- Checkpointing for fault tolerance

**Use Cases:**
- Organizations already using Spark
- Mixed batch and streaming workloads
- ETL pipelines with streaming components
- Machine learning on streaming data

### Apache Storm

**Strengths:**
- Low-latency processing
- Fault-tolerant and scalable
- Language agnostic
- Real-time processing guarantees

**Architecture:**
- Nimbus for cluster coordination
- Supervisors manage worker processes
- Spouts generate streams
- Bolts process streams

**Use Cases:**
- Real-time analytics
- Online machine learning
- Continuous computation
- ETL processing

## Building Production Streaming Systems

### Design Considerations

**Scalability Planning:**
- Estimate throughput and latency requirements
- Plan for peak loads and growth
- Design for horizontal scaling
- Consider resource allocation and costs

**Fault Tolerance Strategy:**
- Identify failure modes and recovery procedures
- Implement proper checkpointing and state management
- Design for graceful degradation
- Plan for disaster recovery scenarios

**Monitoring and Observability:**
- Track throughput, latency, and error rates
- Monitor resource utilization and performance
- Implement distributed tracing
- Set up alerting for critical issues

**Data Quality and Schema Evolution:**
- Implement data validation and quality checks
- Plan for schema changes and compatibility
- Handle malformed or corrupt data
- Maintain data lineage and audit trails

### Performance Optimization

**Throughput Optimization:**
- Batch processing where possible
- Optimize serialization and compression
- Use appropriate partitioning strategies
- Minimize network overhead

**Latency Optimization:**
- Reduce processing complexity
- Optimize state access patterns
- Use appropriate windowing strategies
- Minimize garbage collection impact

**Resource Optimization:**
- Right-size compute resources
- Optimize memory usage and allocation
- Use appropriate storage tiers
- Monitor and tune JVM settings

### Security and Compliance

**Data Security:**
- Encrypt data in transit and at rest
- Implement proper authentication and authorization
- Use secure communication protocols
- Audit access and operations

**Privacy Compliance:**
- Handle PII data appropriately
- Implement data retention policies
- Support data deletion requests
- Maintain compliance documentation

## Real-World Implementation Patterns

### Real-Time Analytics Pipeline

**Architecture:**
Data Sources -> Kafka -> Stream Processor -> Analytics Store -> Dashboard

**Components:**
- Event ingestion with Kafka producers
- Stream processing with Kafka Streams or Flink
- Time-series database for analytics storage
- Real-time dashboard for visualization

**Challenges:**
- Handling high-volume event streams
- Maintaining low-latency processing
- Ensuring data quality and consistency
- Scaling for peak loads

### IoT Data Processing Platform

**Architecture:**
IoT Devices -> Edge Processing -> Message Queue -> Stream Processor -> Time Series DB

**Components:**
- Edge computing for local processing
- MQTT or HTTP for device communication
- Stream processing for aggregation and alerting
- Time-series storage for sensor data

**Considerations:**
- Device connectivity and reliability
- Data compression and bandwidth optimization
- Edge vs cloud processing decisions
- Device management and updates

### Financial Trading System

**Architecture:**
Market Data -> Low-Latency Processor -> Risk Engine -> Order Management -> Execution

**Requirements:**
- Ultra-low latency (microseconds)
- High availability and fault tolerance
- Regulatory compliance and audit trails
- Real-time risk management

**Technologies:**
- Custom low-latency messaging
- In-memory processing and storage
- Hardware acceleration where needed
- Specialized financial data formats

Stream processing is a powerful paradigm that enables organizations to build responsive, real-time systems. Success requires understanding the fundamental concepts, choosing appropriate technologies, and designing for the specific requirements of your use case.

The key is to start with clear requirements, choose technologies that fit your needs, and build incrementally while maintaining focus on reliability, scalability, and maintainability. As streaming technologies continue to evolve, staying current with best practices and emerging patterns will be essential for building successful real-time data systems.`,
      }
    ]
  },
  'de-cloud': {
    title: 'Cloud Data Engineering',
    description: 'Cloud-native data platforms and modern architectures',
    sections: [
      {
        id: 'cloud-fundamentals',
        title: 'Cloud Data Engineering Fundamentals',
        content: `# Cloud Data Engineering Fundamentals: Building Modern Data Platforms

Cloud computing has revolutionized data engineering by providing virtually unlimited scalability, managed services, and pay-as-you-go pricing models. This comprehensive guide covers the fundamental concepts, architectures, and best practices for building cloud-native data platforms.

## Cloud Computing Paradigm for Data Engineering

### Why Cloud for Data Engineering?

**Scalability Benefits:**
- **Elastic Scaling**: Automatically scale resources up or down based on demand
- **Unlimited Storage**: Store petabytes of data without upfront infrastructure investment
- **Global Distribution**: Deploy data systems across multiple regions worldwide
- **Parallel Processing**: Leverage thousands of cores for distributed computing

**Economic Advantages:**
- **Pay-as-you-go**: Only pay for resources you actually use
- **No Capital Expenditure**: Eliminate upfront hardware and infrastructure costs
- **Operational Efficiency**: Reduce IT overhead and maintenance costs
- **Faster Time-to-Market**: Deploy solutions in minutes instead of months

**Managed Services:**
- **Reduced Operational Overhead**: Cloud providers manage infrastructure, patching, and maintenance
- **Built-in Security**: Enterprise-grade security features and compliance certifications
- **High Availability**: Built-in redundancy and disaster recovery capabilities
- **Integration Ecosystem**: Seamless integration between cloud services

### Cloud Service Models for Data Engineering

**Infrastructure as a Service (IaaS):**
- Virtual machines, storage, and networking
- Full control over the operating system and applications
- Examples: AWS EC2, Azure VMs, Google Compute Engine
- Use cases: Custom data processing applications, legacy system migration

**Platform as a Service (PaaS):**
- Managed runtime environments and development platforms
- Focus on application logic rather than infrastructure
- Examples: AWS Elastic Beanstalk, Azure App Service, Google App Engine
- Use cases: Data APIs, web applications, microservices

**Software as a Service (SaaS):**
- Fully managed applications accessible via web interfaces
- No infrastructure or platform management required
- Examples: Snowflake, Databricks, Looker
- Use cases: Data warehousing, analytics, business intelligence

**Function as a Service (FaaS):**
- Serverless computing for event-driven processing
- Automatic scaling and pay-per-execution pricing
- Examples: AWS Lambda, Azure Functions, Google Cloud Functions
- Use cases: Data transformation, event processing, API backends

### Cloud-Native Architecture Principles

**Microservices Architecture:**
- Decompose monolithic applications into small, independent services
- Each service owns its data and business logic
- Communicate via APIs and message queues
- Enable independent scaling and deployment

**Event-Driven Architecture:**
- Services communicate through events rather than direct calls
- Loose coupling between components
- Support for real-time processing and reactive systems
- Natural fit for streaming data architectures

**Containerization:**
- Package applications with their dependencies
- Consistent deployment across environments
- Efficient resource utilization
- Support for orchestration platforms like Kubernetes

**Infrastructure as Code:**
- Define infrastructure using code and version control
- Reproducible and consistent deployments
- Automated provisioning and configuration
- Support for multiple environments (dev, staging, production)

## AWS Data Engineering Platform

### Core AWS Data Services

**Amazon S3 (Simple Storage Service):**
- Object storage for data lakes and backup
- Virtually unlimited scalability
- Multiple storage classes for cost optimization
- Strong consistency and durability guarantees
- Integration with all AWS data services

**Storage Classes:**
- **S3 Standard**: Frequently accessed data
- **S3 Intelligent-Tiering**: Automatic cost optimization
- **S3 Standard-IA**: Infrequently accessed data
- **S3 Glacier**: Long-term archival storage
- **S3 Glacier Deep Archive**: Lowest cost archival

**Amazon Redshift:**
- Fully managed data warehouse service
- Columnar storage and massively parallel processing
- Automatic scaling and performance optimization
- Integration with BI tools and analytics platforms
- Support for both structured and semi-structured data

**Redshift Architecture:**
- **Leader Node**: Query planning and coordination
- **Compute Nodes**: Data storage and processing
- **Node Slices**: Parallel processing units
- **Redshift Spectrum**: Query data directly in S3

**Amazon EMR (Elastic MapReduce):**
- Managed big data platform
- Support for Hadoop, Spark, HBase, and other frameworks
- Auto-scaling clusters based on workload
- Integration with S3 for data storage
- Cost optimization through spot instances

**EMR Components:**
- **Master Node**: Cluster coordination and job scheduling
- **Core Nodes**: Data storage and processing
- **Task Nodes**: Additional processing capacity
- **EMR Notebooks**: Interactive development environment

**AWS Glue:**
- Fully managed ETL service
- Automatic schema discovery and cataloging
- Serverless execution environment
- Support for Python and Scala
- Integration with various data sources and targets

**Glue Components:**
- **Data Catalog**: Centralized metadata repository
- **Crawlers**: Automatic schema discovery
- **ETL Jobs**: Data transformation workflows
- **Triggers**: Job scheduling and orchestration

### AWS Streaming and Real-Time Services

**Amazon Kinesis:**
- Fully managed streaming data platform
- Real-time data ingestion and processing
- Multiple service offerings for different use cases
- Integration with AWS analytics and ML services

**Kinesis Data Streams:**
- Real-time data streaming service
- Configurable retention period (1-365 days)
- Shard-based scaling model
- Support for multiple consumers

**Kinesis Data Firehose:**
- Fully managed data delivery service
- Automatic scaling and data transformation
- Direct integration with S3, Redshift, and Elasticsearch
- Built-in data compression and encryption

**Kinesis Analytics:**
- Real-time stream processing with SQL
- Automatic scaling and fault tolerance
- Integration with Kinesis streams and external sources
- Support for windowing and aggregations

**Amazon MSK (Managed Streaming for Kafka):**
- Fully managed Apache Kafka service
- Compatible with existing Kafka applications
- Automatic patching and maintenance
- Integration with AWS security and monitoring services

### AWS Analytics and ML Services

**Amazon Athena:**
- Serverless query service for S3 data
- Standard SQL interface
- Pay-per-query pricing model
- Integration with AWS Glue Data Catalog
- Support for various data formats (Parquet, ORC, JSON, CSV)

**Amazon QuickSight:**
- Fully managed business intelligence service
- Interactive dashboards and visualizations
- Machine learning-powered insights
- Mobile and web access
- Integration with various data sources

**Amazon SageMaker:**
- Fully managed machine learning platform
- End-to-end ML workflow support
- Built-in algorithms and frameworks
- Automatic model tuning and deployment
- Integration with data engineering pipelines

### AWS Data Pipeline Orchestration

**AWS Step Functions:**
- Serverless workflow orchestration
- Visual workflow designer
- Error handling and retry logic
- Integration with AWS services
- Support for parallel and sequential execution

**Amazon Managed Workflows for Apache Airflow (MWAA):**
- Fully managed Apache Airflow service
- Automatic scaling and patching
- Integration with AWS services
- Support for custom plugins and dependencies
- VPC connectivity for secure access

**AWS Data Pipeline:**
- Web service for data workflow orchestration
- Support for data movement and transformation
- Built-in retry and error handling
- Integration with on-premises and cloud data sources
- Visual pipeline designer

## Microsoft Azure Data Platform

### Core Azure Data Services

**Azure Data Lake Storage Gen2:**
- Hierarchical namespace for big data analytics
- Integration with Azure analytics services
- Fine-grained access control
- Support for both blob and file system APIs
- Optimized for analytics workloads

**Azure Synapse Analytics:**
- Unified analytics platform
- Combines data warehousing and big data analytics
- Serverless and dedicated resource options
- Integration with Power BI and Azure ML
- Support for SQL, Spark, and .NET

**Synapse Components:**
- **SQL Pools**: Dedicated data warehouse resources
- **Spark Pools**: Managed Apache Spark clusters
- **Pipelines**: Data integration and orchestration
- **Studio**: Unified development environment

**Azure Databricks:**
- Apache Spark-based analytics platform
- Collaborative workspace for data teams
- Optimized Spark runtime
- Integration with Azure services
- Support for multiple languages (Python, Scala, R, SQL)

**Azure Data Factory:**
- Cloud-based data integration service
- Visual data pipeline designer
- Support for 90+ data connectors
- Hybrid data integration capabilities
- Monitoring and management tools

**Data Factory Components:**
- **Pipelines**: Logical grouping of activities
- **Activities**: Individual processing steps
- **Datasets**: Data structure definitions
- **Linked Services**: Connection information
- **Integration Runtimes**: Compute infrastructure

### Azure Streaming Services

**Azure Event Hubs:**
- Big data streaming platform
- Millions of events per second capacity
- Integration with Azure analytics services
- Support for multiple protocols
- Built-in partitioning and scaling

**Azure Stream Analytics:**
- Real-time analytics service
- SQL-based query language
- Built-in temporal functions
- Integration with Power BI for real-time dashboards
- Automatic scaling and fault tolerance

**Azure Service Bus:**
- Enterprise messaging service
- Support for queues and topics
- Advanced messaging patterns
- Integration with Azure Logic Apps
- Hybrid connectivity options

### Azure AI and Analytics Services

**Azure Cognitive Services:**
- Pre-built AI models and APIs
- Computer vision, speech, and language processing
- Custom model training capabilities
- Integration with data pipelines
- Scalable and secure deployment

**Azure Machine Learning:**
- End-to-end ML lifecycle management
- Automated machine learning capabilities
- Model deployment and monitoring
- Integration with data engineering workflows
- Support for popular ML frameworks

**Power BI:**
- Business intelligence and visualization platform
- Self-service analytics capabilities
- Real-time dashboard support
- Integration with Azure data services
- Mobile and web access

## Google Cloud Platform (GCP) Data Services

### Core GCP Data Services

**Google Cloud Storage:**
- Object storage for data lakes and backup
- Multiple storage classes for cost optimization
- Strong consistency and global availability
- Integration with GCP analytics services
- Lifecycle management policies

**BigQuery:**
- Serverless data warehouse
- Petabyte-scale analytics
- Standard SQL interface
- Automatic scaling and optimization
- Machine learning integration (BigQuery ML)

**BigQuery Features:**
- **Columnar Storage**: Optimized for analytics
- **Automatic Partitioning**: Time-based data organization
- **Clustering**: Physical data organization
- **Materialized Views**: Pre-computed results
- **Data Transfer Service**: Automated data ingestion

**Cloud Dataflow:**
- Fully managed stream and batch processing
- Based on Apache Beam programming model
- Automatic scaling and resource optimization
- Integration with GCP services
- Support for Java and Python

**Cloud Dataproc:**
- Managed Hadoop and Spark service
- Fast cluster provisioning and scaling
- Integration with GCP storage and analytics
- Support for popular big data tools
- Cost optimization through preemptible instances

**Cloud Composer:**
- Fully managed Apache Airflow service
- Workflow orchestration and scheduling
- Integration with GCP services
- Python-based workflow definitions
- Monitoring and logging capabilities

### GCP Streaming and Real-Time Services

**Cloud Pub/Sub:**
- Fully managed messaging service
- Global message delivery
- At-least-once delivery guarantee
- Integration with GCP analytics services
- Support for push and pull subscriptions

**Cloud Datastream:**
- Change data capture service
- Real-time replication from databases
- Low-latency data synchronization
- Integration with BigQuery and Cloud SQL
- Support for Oracle and MySQL sources

### GCP AI and ML Services

**Vertex AI:**
- Unified ML platform
- AutoML and custom model training
- Model deployment and monitoring
- Feature store for ML features
- Integration with data pipelines

**Cloud AI Platform:**
- Machine learning model training and deployment
- Support for popular ML frameworks
- Distributed training capabilities
- Hyperparameter tuning
- Model versioning and management

## Multi-Cloud and Hybrid Strategies

### Multi-Cloud Architecture Benefits

**Vendor Independence:**
- Avoid vendor lock-in
- Leverage best-of-breed services
- Negotiate better pricing
- Reduce business risk

**Geographic Distribution:**
- Comply with data residency requirements
- Optimize for global performance
- Disaster recovery across providers
- Regional service availability

**Cost Optimization:**
- Compare pricing across providers
- Use spot/preemptible instances
- Optimize for different workload types
- Take advantage of pricing competition

### Hybrid Cloud Considerations

**Data Gravity:**
- Keep processing close to data
- Minimize data transfer costs
- Consider network latency
- Plan for bandwidth limitations

**Security and Compliance:**
- Consistent security policies
- Data encryption in transit and at rest
- Identity and access management
- Compliance with regulations

**Operational Complexity:**
- Multiple management interfaces
- Different APIs and tools
- Skill requirements across platforms
- Monitoring and troubleshooting

## Cloud Data Engineering Best Practices

### Cost Optimization Strategies

**Resource Right-Sizing:**
- Monitor resource utilization
- Use appropriate instance types
- Implement auto-scaling policies
- Regular cost reviews and optimization

**Storage Optimization:**
- Use appropriate storage classes
- Implement data lifecycle policies
- Compress and optimize data formats
- Regular cleanup of unused data

**Compute Optimization:**
- Use serverless where appropriate
- Leverage spot/preemptible instances
- Implement efficient scheduling
- Optimize query performance

### Security Best Practices

**Identity and Access Management:**
- Principle of least privilege
- Role-based access control
- Multi-factor authentication
- Regular access reviews

**Data Protection:**
- Encryption at rest and in transit
- Key management best practices
- Data classification and handling
- Backup and disaster recovery

**Network Security:**
- Virtual private clouds (VPCs)
- Network segmentation
- Firewall rules and security groups
- VPN and private connectivity

### Monitoring and Observability

**Infrastructure Monitoring:**
- Resource utilization metrics
- Performance monitoring
- Cost tracking and alerting
- Capacity planning

**Application Monitoring:**
- Data pipeline health
- Processing latency and throughput
- Error rates and failure patterns
- Data quality metrics

**Business Monitoring:**
- SLA compliance
- Business KPIs
- User experience metrics
- ROI and value realization

## Cloud Migration Strategies

### Assessment and Planning

**Current State Analysis:**
- Inventory existing systems and data
- Assess technical debt and dependencies
- Evaluate performance requirements
- Identify compliance and security needs

**Migration Strategy Selection:**
- **Rehost (Lift and Shift)**: Move without changes
- **Replatform**: Minor optimizations for cloud
- **Refactor**: Redesign for cloud-native architecture
- **Rebuild**: Complete rewrite using cloud services

### Migration Execution

**Phased Approach:**
- Start with non-critical systems
- Gradually migrate complex workloads
- Maintain parallel systems during transition
- Validate functionality at each phase

**Data Migration:**
- Plan for data transfer methods
- Consider bandwidth and time requirements
- Implement data validation procedures
- Plan for minimal downtime

**Testing and Validation:**
- Comprehensive testing in cloud environment
- Performance and load testing
- Security and compliance validation
- User acceptance testing

### Post-Migration Optimization

**Performance Tuning:**
- Optimize for cloud-native patterns
- Implement auto-scaling policies
- Fine-tune resource configurations
- Monitor and adjust based on usage

**Cost Optimization:**
- Regular cost reviews and optimization
- Implement governance policies
- Use cost management tools
- Optimize resource utilization

**Operational Excellence:**
- Implement monitoring and alerting
- Establish operational procedures
- Train teams on cloud technologies
- Continuous improvement processes

Cloud data engineering represents a fundamental shift in how we build and operate data systems. The key to success is understanding the unique characteristics of cloud platforms, leveraging managed services effectively, and designing for cloud-native patterns while maintaining focus on cost optimization, security, and operational excellence.

As cloud technologies continue to evolve rapidly, staying current with new services and best practices is essential. The most successful cloud data engineering teams are those that embrace continuous learning, experimentation, and adaptation to new technologies and patterns.`,
      }
    ]
  },
  'de-bigdata': {
    title: 'Big Data Technologies',
    description: 'Distributed computing and large-scale data processing',
    sections: [
      {
        id: 'distributed-systems',
        title: 'Distributed Systems for Big Data',
        content: `# Distributed Systems for Big Data: Mastering Large-Scale Data Processing

Big data processing requires distributed systems that can handle massive volumes of data across multiple machines. This comprehensive guide covers the fundamental concepts, architectures, and technologies needed to build and operate large-scale distributed data processing systems.

## Distributed Systems Fundamentals

### Why Distributed Systems for Big Data?

**Scale Challenges:**
- **Volume**: Datasets too large for single machines (terabytes to petabytes)
- **Velocity**: Data arriving faster than single machines can process
- **Processing Complexity**: Computations requiring more resources than available on one machine
- **Fault Tolerance**: Need for system resilience as scale increases failure probability

**Distributed Computing Benefits:**
- **Horizontal Scalability**: Add more machines to increase capacity
- **Fault Tolerance**: System continues operating despite individual machine failures
- **Cost Effectiveness**: Use commodity hardware instead of expensive specialized systems
- **Geographic Distribution**: Process data close to where it's generated or consumed

### Core Distributed Systems Concepts

**CAP Theorem:**
In any distributed system, you can only guarantee two of the following three properties:
- **Consistency**: All nodes see the same data simultaneously
- **Availability**: System remains operational and responsive
- **Partition Tolerance**: System continues despite network failures

**Implications for Big Data Systems:**
- Most big data systems choose Availability and Partition tolerance (AP)
- Eventual consistency is acceptable for many analytics use cases
- Different consistency models for different data access patterns

**Distributed System Challenges:**

**Network Partitions:**
- Network failures can split the system into isolated groups
- Systems must continue operating during partitions
- Reconciliation needed when partitions heal

**Consensus and Coordination:**
- Distributed systems need to agree on shared state
- Leader election for coordination
- Distributed locking and synchronization

**Data Distribution:**
- How to partition data across multiple machines
- Balancing load while maintaining data locality
- Handling data skew and hotspots

**Failure Handling:**
- Detecting and recovering from machine failures
- Replication strategies for fault tolerance
- Graceful degradation under partial failures

### Distributed Storage Patterns

**Replication Strategies:**

**Master-Slave Replication:**
- One master handles writes, multiple slaves handle reads
- Simple consistency model
- Single point of failure at master
- Good for read-heavy workloads

**Multi-Master Replication:**
- Multiple nodes can handle writes
- More complex conflict resolution
- Better availability and write scalability
- Requires sophisticated consistency mechanisms

**Quorum-Based Systems:**
- Require majority agreement for operations
- Configurable consistency vs availability trade-offs
- Used in systems like Cassandra and DynamoDB
- Tunable consistency levels

**Partitioning (Sharding) Strategies:**

**Range Partitioning:**
- Partition data based on key ranges
- Good for range queries
- Risk of hotspots with skewed data
- Example: Partition by date ranges

**Hash Partitioning:**
- Use hash function to distribute data evenly
- Good load distribution
- Poor for range queries
- Consistent hashing for dynamic scaling

**Directory-Based Partitioning:**
- Lookup service maps keys to partitions
- Flexible partitioning strategies
- Additional complexity and potential bottleneck
- Good for complex partitioning requirements

## Apache Hadoop Ecosystem

### Hadoop Distributed File System (HDFS)

**Architecture:**
- **NameNode**: Metadata management and coordination
- **DataNodes**: Actual data storage and retrieval
- **Secondary NameNode**: Checkpoint and backup for NameNode
- **Block-based Storage**: Files split into large blocks (typically 128MB)

**Key Features:**
- **Fault Tolerance**: Data replicated across multiple nodes (default 3x)
- **Scalability**: Add DataNodes to increase storage capacity
- **Data Locality**: Computation moved to data location when possible
- **Write-Once, Read-Many**: Optimized for append-only workloads

**HDFS Design Principles:**
- **Large Files**: Optimized for files in gigabytes or larger
- **Streaming Access**: Designed for batch processing, not interactive use
- **Commodity Hardware**: Runs on standard servers, expects failures
- **High Throughput**: Optimized for bandwidth over latency

**HDFS Operations:**
- **Block Placement**: Intelligent placement for fault tolerance and performance
- **Replication Management**: Automatic re-replication when nodes fail
- **Balancing**: Redistribute data when new nodes are added
- **Snapshots**: Point-in-time filesystem snapshots

### MapReduce Programming Model

**Core Concepts:**
- **Map Phase**: Process input data and emit key-value pairs
- **Shuffle Phase**: Group and sort intermediate data by key
- **Reduce Phase**: Process grouped data and produce final output

**MapReduce Execution Flow:**
1. **Input Splitting**: Divide input into fixed-size pieces
2. **Map Tasks**: Process splits in parallel across cluster
3. **Partitioning**: Distribute intermediate data to reducers
4. **Sorting**: Sort intermediate data by key
5. **Reduce Tasks**: Process sorted data and write output

**MapReduce Advantages:**
- **Simplicity**: Easy programming model for parallel processing
- **Fault Tolerance**: Automatic task retry and failure handling
- **Scalability**: Linear scaling with cluster size
- **Data Locality**: Processing moved to data location

**MapReduce Limitations:**
- **Batch Processing Only**: Not suitable for real-time processing
- **High Latency**: Overhead from job startup and intermediate I/O
- **Limited Programming Model**: Not all algorithms fit map-reduce pattern
- **Inefficient for Iterative Algorithms**: Each iteration requires full job restart

### Hadoop Ecosystem Components

**YARN (Yet Another Resource Negotiator):**
- **Resource Management**: Cluster resource allocation and scheduling
- **Application Framework**: Support for multiple processing frameworks
- **ResourceManager**: Global resource scheduler
- **NodeManager**: Per-node resource management
- **ApplicationMaster**: Per-application resource negotiation

**Apache Hive:**
- **SQL on Hadoop**: SQL-like query language (HiveQL)
- **Schema on Read**: Apply structure when reading data
- **Metastore**: Centralized metadata repository
- **Query Optimization**: Cost-based optimizer for performance

**Apache Pig:**
- **Data Flow Language**: High-level language for data processing
- **Pig Latin**: Procedural language for data transformations
- **Automatic Optimization**: Query optimization and parallelization
- **Extensibility**: User-defined functions (UDFs)

**Apache HBase:**
- **NoSQL Database**: Column-family database on HDFS
- **Real-time Access**: Low-latency random access to big data
- **Automatic Sharding**: Horizontal partitioning across regions
- **Strong Consistency**: ACID properties for row-level operations

**Apache Sqoop:**
- **Data Transfer**: Import/export between Hadoop and relational databases
- **Parallel Processing**: Distributed data transfer
- **Incremental Import**: Support for delta imports
- **Integration**: Works with Hive, HBase, and other Hadoop components

## Apache Spark: Next-Generation Big Data Processing

### Spark Architecture and Core Concepts

**Spark Components:**
- **Driver Program**: Main application that creates SparkContext
- **Cluster Manager**: Resource allocation (YARN, Mesos, Kubernetes, Standalone)
- **Executors**: Worker processes that run tasks and cache data
- **Tasks**: Units of work sent to executors

**Resilient Distributed Datasets (RDDs):**
- **Immutable**: Cannot be changed after creation
- **Distributed**: Partitioned across cluster nodes
- **Fault-Tolerant**: Automatically recovered using lineage information
- **Lazy Evaluation**: Transformations computed only when actions are called

**RDD Operations:**
- **Transformations**: Create new RDDs (map, filter, join, groupBy)
- **Actions**: Trigger computation and return results (collect, count, save)
- **Persistence**: Cache RDDs in memory or disk for reuse

**Spark Execution Model:**
- **Job**: Set of tasks triggered by an action
- **Stage**: Set of tasks that can run in parallel
- **Task**: Unit of work sent to executor
- **DAG (Directed Acyclic Graph)**: Execution plan optimization

### Spark DataFrames and Datasets

**DataFrame API:**
- **Structured Data**: Schema-aware distributed collections
- **SQL Integration**: Query DataFrames using SQL
- **Optimization**: Catalyst optimizer for query optimization
- **Language Support**: Scala, Java, Python, R

**Dataset API (Scala/Java):**
- **Type Safety**: Compile-time type checking
- **Object-Oriented**: Work with strongly-typed objects
- **Performance**: Optimized serialization and code generation
- **Functional Programming**: Rich functional programming APIs

**Catalyst Optimizer:**
- **Rule-Based Optimization**: Apply optimization rules to query plans
- **Cost-Based Optimization**: Choose optimal execution strategies
- **Code Generation**: Generate efficient Java code for execution
- **Extensibility**: Custom optimization rules and expressions

### Spark Streaming

**DStream (Discretized Stream):**
- **Micro-Batch Processing**: Process streams as series of small batches
- **Fault Tolerance**: Automatic recovery from failures
- **Integration**: Works with Kafka, Flume, HDFS, and other sources
- **Windowing**: Time-based aggregations and computations

**Structured Streaming:**
- **Unified API**: Same DataFrame/Dataset API for batch and streaming
- **Event Time Processing**: Handle late-arriving data correctly
- **Exactly-Once Semantics**: Guarantee each record processed exactly once
- **Continuous Processing**: Low-latency stream processing mode

**Streaming Sources and Sinks:**
- **Sources**: Kafka, socket, file systems, rate source for testing
- **Sinks**: Console, file systems, Kafka, foreach for custom output
- **Checkpointing**: Fault tolerance through write-ahead logs
- **Triggers**: Control when streaming queries execute

### Spark SQL and Analytics

**Spark SQL Features:**
- **ANSI SQL Compliance**: Standard SQL syntax and functions
- **Hive Integration**: Read Hive tables and use Hive UDFs
- **JDBC/ODBC**: Connect from BI tools and applications
- **Columnar Storage**: Optimized formats like Parquet and ORC

**Advanced Analytics:**
- **Window Functions**: Ranking, aggregation, and analytical functions
- **Complex Data Types**: Arrays, maps, structs for semi-structured data
- **User-Defined Functions**: Custom functions in multiple languages
- **Machine Learning Integration**: MLlib algorithms on DataFrames

### Spark Performance Optimization

**Memory Management:**
- **Unified Memory Manager**: Dynamic allocation between execution and storage
- **Serialization**: Kryo serializer for better performance
- **Garbage Collection**: Tuning JVM GC for Spark workloads
- **Off-Heap Storage**: Reduce GC pressure with off-heap memory

**Partitioning Strategies:**
- **Data Partitioning**: Optimize data distribution across cluster
- **Partition Pruning**: Skip irrelevant partitions during queries
- **Bucketing**: Pre-partition data for efficient joins
- **Coalescing**: Reduce number of partitions to avoid small files

**Caching and Persistence:**
- **Storage Levels**: Memory, disk, serialized, replicated options
- **Cache Management**: Automatic eviction and cache statistics
- **Broadcast Variables**: Efficiently share read-only data
- **Accumulators**: Distributed counters and metrics

**Join Optimization:**
- **Broadcast Joins**: Broadcast small tables to all nodes
- **Sort-Merge Joins**: Efficient joins for large datasets
- **Bucket Joins**: Avoid shuffles when data is pre-partitioned
- **Join Reordering**: Optimize join order for performance

## Modern Distributed Processing Frameworks

### Apache Flink

**Stream-First Architecture:**
- **True Streaming**: Process events one at a time, not micro-batches
- **Low Latency**: Millisecond processing latencies
- **Event Time Processing**: Handle out-of-order events correctly
- **Exactly-Once Semantics**: Strong consistency guarantees

**Flink Components:**
- **JobManager**: Coordinates distributed execution
- **TaskManager**: Execute tasks and manage local resources
- **Checkpointing**: Distributed snapshots for fault tolerance
- **State Backends**: Pluggable state storage (memory, RocksDB, etc.)

**Flink APIs:**
- **DataStream API**: Low-level streaming API
- **Table API**: Relational API for batch and streaming
- **SQL**: Standard SQL for stream and batch processing
- **CEP (Complex Event Processing)**: Pattern detection in streams

### Apache Beam

**Unified Programming Model:**
- **Batch and Streaming**: Single API for both processing modes
- **Portability**: Run on multiple execution engines (Spark, Flink, Dataflow)
- **Language Support**: Java, Python, Go, Scala
- **Windowing**: Flexible windowing strategies

**Beam Concepts:**
- **Pipeline**: Directed graph of data processing operations
- **PCollection**: Distributed dataset abstraction
- **Transform**: Data processing operation
- **Runner**: Execution engine (Spark, Flink, Direct, etc.)

### Kubernetes for Big Data

**Container Orchestration:**
- **Dynamic Scaling**: Scale applications based on demand
- **Resource Management**: Efficient resource allocation and isolation
- **Service Discovery**: Automatic service registration and discovery
- **Rolling Updates**: Zero-downtime application updates

**Big Data on Kubernetes:**
- **Spark on Kubernetes**: Native Kubernetes support in Spark
- **Flink on Kubernetes**: Kubernetes operator for Flink clusters
- **Kafka on Kubernetes**: Strimzi operator for Kafka deployment
- **Storage**: Persistent volumes for stateful applications

## Performance Optimization and Tuning

### Cluster Resource Management

**Resource Allocation:**
- **CPU Allocation**: Balance between parallelism and resource contention
- **Memory Management**: Optimize heap size and garbage collection
- **Network Bandwidth**: Consider data transfer costs
- **Storage I/O**: Balance between local and distributed storage

**Dynamic Resource Allocation:**
- **Auto-scaling**: Automatically adjust cluster size based on workload
- **Resource Pools**: Isolate resources for different workloads
- **Priority Scheduling**: Prioritize critical jobs
- **Fair Scheduling**: Ensure fair resource sharing

### Data Optimization Strategies

**File Formats:**
- **Parquet**: Columnar format optimized for analytics
- **ORC**: Optimized Row Columnar format
- **Avro**: Schema evolution support
- **Delta Lake**: ACID transactions on data lakes

**Compression:**
- **Snappy**: Fast compression/decompression
- **Gzip**: Higher compression ratio
- **LZ4**: Very fast compression
- **Zstd**: Good balance of speed and compression

**Data Layout Optimization:**
- **Partitioning**: Organize data for query performance
- **Clustering**: Physical data organization
- **Indexing**: Secondary indexes for faster lookups
- **Compaction**: Merge small files for better performance

### Query Optimization

**Predicate Pushdown:**
- Push filters down to data sources
- Reduce data transfer and processing
- Leverage storage-level filtering
- Optimize join conditions

**Projection Pushdown:**
- Select only required columns
- Reduce I/O and memory usage
- Leverage columnar storage benefits
- Optimize data serialization

**Join Optimization:**
- Choose appropriate join algorithms
- Optimize join order
- Use broadcast joins for small tables
- Leverage data partitioning

## Monitoring and Troubleshooting

### Performance Monitoring

**Cluster Metrics:**
- **Resource Utilization**: CPU, memory, disk, network usage
- **Job Performance**: Execution time, throughput, latency
- **Data Skew**: Identify uneven data distribution
- **Bottlenecks**: Find performance limiting factors

**Application Monitoring:**
- **Task Execution**: Monitor individual task performance
- **Stage Analysis**: Identify slow stages in execution
- **Memory Usage**: Track memory consumption patterns
- **Garbage Collection**: Monitor GC impact on performance

### Troubleshooting Common Issues

**Out of Memory Errors:**
- Increase executor memory allocation
- Optimize data serialization
- Reduce data skew
- Implement proper caching strategies

**Slow Performance:**
- Analyze execution plans
- Optimize data partitioning
- Tune parallelism levels
- Address data skew issues

**Data Skew:**
- Identify skewed keys
- Implement custom partitioning
- Use salting techniques
- Pre-aggregate skewed data

**Network Issues:**
- Monitor network bandwidth usage
- Optimize data locality
- Reduce shuffle operations
- Use appropriate serialization

Building and operating distributed big data systems requires deep understanding of distributed systems principles, careful architecture design, and continuous performance optimization. The key to success is starting with solid fundamentals, choosing appropriate technologies for your use case, and implementing comprehensive monitoring and optimization practices.

As big data technologies continue to evolve, staying current with new frameworks, optimization techniques, and best practices is essential. The most successful big data implementations are those that balance performance, reliability, and operational simplicity while maintaining focus on business value delivery.`,
      }
    ]
  },
  'de-dataops': {
    title: 'DataOps & MLOps',
    description: 'Modern data operations and ML pipeline management',
    sections: [
      {
        id: 'dataops-fundamentals',
        title: 'DataOps: Modern Data Operations',
        content: `# DataOps: Modern Data Operations for Agile Data Teams

DataOps represents a fundamental shift in how data teams operate, bringing DevOps principles and practices to data engineering and analytics. This comprehensive guide covers the principles, practices, and tools needed to implement effective DataOps in modern data organizations.

## Understanding DataOps

### What is DataOps?

DataOps is a collaborative data management practice focused on improving the communication, integration, and automation of data flows between data managers and data consumers across an organization. It combines:

- **DevOps Principles**: Automation, collaboration, and continuous improvement
- **Agile Methodologies**: Iterative development and rapid feedback cycles
- **Statistical Process Control**: Quality monitoring and continuous optimization
- **Lean Manufacturing**: Waste reduction and value stream optimization

### DataOps vs Traditional Data Management

**Traditional Approach:**
- Waterfall development cycles
- Manual testing and deployment
- Siloed teams and processes
- Reactive problem solving
- Limited collaboration between teams

**DataOps Approach:**
- Continuous integration and deployment
- Automated testing and validation
- Cross-functional collaboration
- Proactive monitoring and optimization
- Shared responsibility for data quality

### Core DataOps Principles

**1. Customer-Centric Focus:**
- Prioritize data consumer needs
- Deliver value quickly and continuously
- Gather feedback and iterate rapidly
- Measure success by business impact

**2. Automation and Orchestration:**
- Automate repetitive tasks and processes
- Orchestrate complex data workflows
- Reduce manual errors and inconsistencies
- Enable self-service capabilities

**3. Collaboration and Communication:**
- Break down silos between teams
- Foster cross-functional collaboration
- Implement shared tools and processes
- Promote knowledge sharing and learning

**4. Continuous Improvement:**
- Monitor and measure everything
- Learn from failures and successes
- Iterate and optimize continuously
- Embrace experimentation and innovation

**5. Quality and Reliability:**
- Build quality into every process
- Implement comprehensive testing
- Monitor data quality continuously
- Ensure reliable data delivery

## DataOps Implementation Framework

### 1. Data Pipeline Automation

**Continuous Integration for Data:**
- Version control for data pipeline code
- Automated testing of data transformations
- Code review processes for data changes
- Automated deployment to different environments

**Infrastructure as Code:**
- Define data infrastructure using code
- Version control infrastructure definitions
- Automated provisioning and configuration
- Consistent environments across dev/staging/production

**Configuration Management:**
- Centralized configuration management
- Environment-specific configurations
- Secrets management and security
- Dynamic configuration updates

### 2. Testing and Quality Assurance

**Data Quality Testing:**
- Schema validation and evolution testing
- Data completeness and accuracy checks
- Business rule validation
- Performance and scalability testing

**Pipeline Testing Strategies:**
- Unit tests for individual transformations
- Integration tests for end-to-end workflows
- Regression tests for change validation
- Load tests for performance validation

**Test Data Management:**
- Synthetic test data generation
- Data masking and anonymization
- Test data versioning and lifecycle
- Automated test data refresh

### 3. Monitoring and Observability

**Data Pipeline Monitoring:**
- Real-time pipeline health monitoring
- Data quality metrics and alerting
- Performance monitoring and optimization
- Error tracking and root cause analysis

**Business Impact Monitoring:**
- Data freshness and availability metrics
- SLA compliance monitoring
- Business KPI tracking
- User experience monitoring

**Observability Implementation:**
- Distributed tracing for data flows
- Comprehensive logging and metrics
- Custom dashboards and visualizations
- Automated anomaly detection

### 4. Deployment and Release Management

**Continuous Deployment:**
- Automated deployment pipelines
- Blue-green deployments for zero downtime
- Canary releases for gradual rollouts
- Rollback capabilities for quick recovery

**Environment Management:**
- Consistent development, staging, and production environments
- Environment promotion processes
- Configuration management across environments
- Automated environment provisioning

**Release Planning:**
- Feature flags for controlled rollouts
- Release coordination across teams
- Impact assessment and risk management
- Post-deployment validation

## MLOps: Machine Learning Operations

### MLOps Fundamentals

**What is MLOps?**
MLOps extends DataOps principles to machine learning workflows, addressing the unique challenges of ML model development, deployment, and maintenance.

**ML Lifecycle Challenges:**
- Model versioning and reproducibility
- Data drift and model decay
- Scalable model serving
- A/B testing and experimentation
- Regulatory compliance and explainability

### ML Pipeline Architecture

**Training Pipeline:**
- Data ingestion and preprocessing
- Feature engineering and selection
- Model training and hyperparameter tuning
- Model validation and testing
- Model registration and versioning

**Inference Pipeline:**
- Real-time and batch prediction serving
- Feature store integration
- Model monitoring and drift detection
- A/B testing and experimentation
- Feedback loop for continuous learning

**Model Management:**
- Model versioning and lineage tracking
- Experiment tracking and comparison
- Model registry and metadata management
- Model approval and governance workflows
- Model retirement and lifecycle management

### Feature Store Architecture

**Purpose and Benefits:**
- Centralized feature repository
- Feature reuse across teams and projects
- Consistent feature definitions and computations
- Online and offline feature serving
- Feature monitoring and quality assurance

**Feature Store Components:**
- **Feature Repository**: Centralized feature definitions
- **Feature Computation Engine**: Batch and streaming feature computation
- **Feature Serving**: Low-latency online feature serving
- **Feature Monitoring**: Quality and drift monitoring
- **Feature Discovery**: Search and documentation capabilities

**Implementation Patterns:**
- Batch feature computation with scheduled jobs
- Streaming feature computation for real-time updates
- Feature caching for low-latency serving
- Feature versioning for reproducibility
- Feature lineage tracking for governance

### Model Deployment Strategies

**Deployment Patterns:**

**Batch Scoring:**
- Periodic model execution on large datasets
- Suitable for non-real-time use cases
- Cost-effective for high-volume predictions
- Easier to implement and maintain

**Real-time Serving:**
- Low-latency prediction APIs
- Suitable for interactive applications
- Higher infrastructure costs
- More complex monitoring and scaling

**Edge Deployment:**
- Models deployed on edge devices
- Reduced latency and bandwidth usage
- Privacy and security benefits
- Limited computational resources

**Model Serving Infrastructure:**
- Container-based deployment (Docker, Kubernetes)
- Serverless deployment (AWS Lambda, Azure Functions)
- Managed ML platforms (SageMaker, Vertex AI)
- Custom serving infrastructure

### Model Monitoring and Maintenance

**Model Performance Monitoring:**
- Prediction accuracy and quality metrics
- Model latency and throughput monitoring
- Resource utilization and cost tracking
- Error rates and failure analysis

**Data Drift Detection:**
- Statistical tests for distribution changes
- Feature importance drift monitoring
- Concept drift detection algorithms
- Automated retraining triggers

**Model Explainability:**
- Feature importance analysis
- SHAP (SHapley Additive exPlanations) values
- LIME (Local Interpretable Model-agnostic Explanations)
- Model-specific interpretability techniques

## DataOps Tools and Technologies

### Version Control and Collaboration

**Git-based Workflows:**
- Data pipeline code versioning
- Collaborative development workflows
- Branch-based feature development
- Code review and approval processes

**Data Versioning:**
- **DVC (Data Version Control)**: Version control for data and models
- **Pachyderm**: Data versioning and pipeline orchestration
- **Delta Lake**: ACID transactions and time travel
- **lakeFS**: Git-like operations for data lakes

### CI/CD for Data

**Pipeline Orchestration:**
- **Apache Airflow**: Workflow orchestration and scheduling
- **Prefect**: Modern workflow orchestration
- **Dagster**: Data-aware orchestration platform
- **Kubeflow Pipelines**: Kubernetes-native ML workflows

**Testing Frameworks:**
- **Great Expectations**: Data quality testing and validation
- **dbt**: SQL-based testing and documentation
- **Pytest**: Python testing framework
- **Custom testing frameworks**: Domain-specific testing tools

### Monitoring and Observability

**Data Monitoring:**
- **Monte Carlo**: Data reliability monitoring
- **Datadog**: Infrastructure and application monitoring
- **Grafana**: Visualization and alerting
- **Prometheus**: Metrics collection and alerting

**ML Monitoring:**
- **MLflow**: ML experiment tracking and model registry
- **Weights & Biases**: Experiment tracking and collaboration
- **Neptune**: ML metadata management
- **Evidently**: ML model monitoring and drift detection

### Infrastructure and Deployment

**Container Orchestration:**
- **Kubernetes**: Container orchestration platform
- **Docker**: Containerization technology
- **Helm**: Kubernetes package manager
- **Istio**: Service mesh for microservices

**Cloud Platforms:**
- **AWS**: Comprehensive cloud services
- **Azure**: Microsoft cloud platform
- **GCP**: Google cloud services
- **Multi-cloud**: Vendor-agnostic solutions

## Implementing DataOps Culture

### Organizational Change Management

**Building DataOps Culture:**
- Leadership support and sponsorship
- Cross-functional team formation
- Shared goals and metrics
- Continuous learning and improvement

**Team Structure:**
- **Data Engineers**: Pipeline development and maintenance
- **Data Scientists**: Model development and analysis
- **DevOps Engineers**: Infrastructure and deployment
- **Data Analysts**: Business requirements and validation
- **Product Managers**: Prioritization and roadmap

### Skills and Training

**Technical Skills:**
- Programming and scripting
- Cloud platforms and services
- Containerization and orchestration
- Monitoring and observability tools

**Process Skills:**
- Agile and lean methodologies
- Collaboration and communication
- Problem-solving and troubleshooting
- Continuous improvement mindset

**Training Programs:**
- Internal training and workshops
- External courses and certifications
- Hands-on projects and experimentation
- Knowledge sharing and mentoring

### Metrics and KPIs

**Technical Metrics:**
- Deployment frequency and lead time
- Mean time to recovery (MTTR)
- Change failure rate
- Data quality scores

**Business Metrics:**
- Time to insight
- Data consumer satisfaction
- Business value delivered
- Cost optimization achieved

**Process Metrics:**
- Team collaboration effectiveness
- Knowledge sharing frequency
- Continuous improvement initiatives
- Innovation and experimentation rate

## DataOps Best Practices

### 1. Start Small and Iterate

**Pilot Projects:**
- Choose low-risk, high-impact projects
- Focus on specific pain points
- Measure and demonstrate value
- Learn and iterate quickly

**Gradual Expansion:**
- Apply learnings to larger projects
- Scale successful practices
- Address organizational resistance
- Build momentum and support

### 2. Automate Everything Possible

**Automation Priorities:**
- Repetitive and error-prone tasks
- Testing and validation processes
- Deployment and release management
- Monitoring and alerting

**Automation Strategy:**
- Start with manual processes
- Identify automation opportunities
- Implement incrementally
- Monitor and optimize continuously

### 3. Embrace Failure and Learning

**Failure Management:**
- Treat failures as learning opportunities
- Implement blameless post-mortems
- Share learnings across teams
- Improve processes based on failures

**Experimentation Culture:**
- Encourage experimentation and innovation
- Provide safe environments for testing
- Measure and evaluate experiments
- Scale successful experiments

### 4. Focus on Collaboration

**Cross-functional Teams:**
- Include diverse skill sets and perspectives
- Establish clear roles and responsibilities
- Foster open communication
- Align on shared goals and metrics

**Communication Practices:**
- Regular stand-ups and retrospectives
- Shared documentation and knowledge bases
- Cross-team collaboration sessions
- Transparent decision-making processes

DataOps represents a fundamental shift in how data teams operate, emphasizing automation, collaboration, and continuous improvement. Success requires not just technical implementation but also cultural change and organizational commitment.

The key to successful DataOps implementation is starting with clear goals, building incrementally, measuring progress, and continuously adapting based on learnings. Organizations that embrace DataOps principles will be better positioned to deliver reliable, high-quality data products that drive business value.`,
      }
    ]
  },
  'de-security': {
    title: 'Data Security & Governance',
    description: 'Data privacy, security, and compliance frameworks',
    sections: [
      {
        id: 'data-security',
        title: 'Data Security & Privacy Engineering',
        content: `# Data Security & Privacy Engineering: Protecting Data in Modern Systems

Data security and privacy have become critical concerns as organizations collect, process, and store ever-increasing amounts of sensitive information. This comprehensive guide covers the principles, practices, and technologies needed to build secure, privacy-compliant data systems.

## Data Security Fundamentals

### Understanding Data Security Threats

**External Threats:**
- **Cybercriminals**: Financial motivation, data theft, ransomware
- **Nation-State Actors**: Espionage, intellectual property theft
- **Hacktivists**: Ideological motivation, data exposure
- **Competitors**: Industrial espionage, competitive advantage

**Internal Threats:**
- **Malicious Insiders**: Employees with harmful intent
- **Negligent Users**: Accidental data exposure or loss
- **Compromised Accounts**: Legitimate accounts used maliciously
- **Third-Party Vendors**: Supply chain security risks

**Common Attack Vectors:**
- **SQL Injection**: Exploiting database vulnerabilities
- **Cross-Site Scripting (XSS)**: Web application vulnerabilities
- **Phishing**: Social engineering attacks
- **Malware**: Malicious software installation
- **Man-in-the-Middle**: Network communication interception
- **Privilege Escalation**: Unauthorized access elevation

### Data Classification and Handling

**Data Classification Levels:**

**Public Data:**
- No restrictions on access or distribution
- Marketing materials, public reports
- Minimal security controls required
- Can be freely shared externally

**Internal Data:**
- Restricted to organization members
- Business plans, internal communications
- Standard security controls required
- Should not be shared externally without approval

**Confidential Data:**
- Sensitive business information
- Financial data, strategic plans, customer lists
- Enhanced security controls required
- Strict access controls and monitoring

**Restricted Data:**
- Highly sensitive information
- Personal data, trade secrets, regulated data
- Maximum security controls required
- Need-to-know access only

**Data Handling Requirements:**
- **Storage**: Appropriate security controls based on classification
- **Transmission**: Encryption and secure channels
- **Processing**: Authorized systems and personnel only
- **Disposal**: Secure deletion and destruction procedures

### Encryption and Key Management

**Encryption Types:**

**Symmetric Encryption:**
- Same key for encryption and decryption
- Fast and efficient for large data volumes
- Key distribution and management challenges
- Examples: AES, ChaCha20

**Asymmetric Encryption:**
- Different keys for encryption and decryption
- Slower but solves key distribution problem
- Used for key exchange and digital signatures
- Examples: RSA, Elliptic Curve Cryptography

**Encryption Implementation:**

**Data at Rest:**
- Database encryption (TDE - Transparent Data Encryption)
- File system encryption
- Storage device encryption
- Cloud storage encryption

**Data in Transit:**
- TLS/SSL for network communications
- VPN for secure network connections
- Message-level encryption for APIs
- End-to-end encryption for sensitive communications

**Data in Use:**
- Application-level encryption
- Homomorphic encryption for computation on encrypted data
- Secure enclaves and trusted execution environments
- Memory encryption and protection

**Key Management Best Practices:**
- **Key Generation**: Use cryptographically secure random number generators
- **Key Storage**: Hardware security modules (HSMs) or key management services
- **Key Rotation**: Regular key rotation policies
- **Key Escrow**: Secure key backup and recovery procedures
- **Key Destruction**: Secure key deletion when no longer needed

## Identity and Access Management (IAM)

### Authentication Mechanisms

**Single-Factor Authentication:**
- Username and password
- Weakest form of authentication
- Vulnerable to password attacks
- Should be avoided for sensitive systems

**Multi-Factor Authentication (MFA):**
- Something you know (password)
- Something you have (token, phone)
- Something you are (biometrics)
- Significantly improves security
- Should be mandatory for privileged access

**Modern Authentication Methods:**
- **SAML (Security Assertion Markup Language)**: Enterprise SSO
- **OAuth 2.0**: Authorization framework for APIs
- **OpenID Connect**: Identity layer on top of OAuth 2.0
- **JWT (JSON Web Tokens)**: Stateless authentication tokens

### Authorization and Access Control

**Access Control Models:**

**Discretionary Access Control (DAC):**
- Resource owners control access
- Flexible but potentially insecure
- Common in file systems
- Difficult to manage at scale

**Mandatory Access Control (MAC):**
- System-enforced access policies
- Based on security labels and clearances
- High security but inflexible
- Common in government and military systems

**Role-Based Access Control (RBAC):**
- Access based on user roles
- Easier to manage than individual permissions
- Good balance of security and usability
- Most common in enterprise systems

**Attribute-Based Access Control (ABAC):**
- Access based on attributes (user, resource, environment)
- Most flexible and fine-grained
- Complex to implement and manage
- Suitable for complex authorization requirements

**Zero Trust Architecture:**
- Never trust, always verify
- Continuous authentication and authorization
- Micro-segmentation and least privilege
- Comprehensive monitoring and logging

### Privileged Access Management

**Privileged Account Types:**
- **Administrative Accounts**: System and application administrators
- **Service Accounts**: Automated processes and applications
- **Emergency Accounts**: Break-glass access for emergencies
- **Shared Accounts**: Accounts used by multiple users

**PAM Best Practices:**
- **Account Discovery**: Identify all privileged accounts
- **Password Management**: Automated password rotation
- **Session Management**: Monitor and record privileged sessions
- **Just-in-Time Access**: Temporary privilege elevation
- **Approval Workflows**: Multi-person authorization for sensitive access

## Data Privacy and Compliance

### Privacy Regulations Overview

**General Data Protection Regulation (GDPR):**
- **Scope**: EU residents' personal data
- **Key Principles**: Lawfulness, fairness, transparency, purpose limitation
- **Individual Rights**: Access, rectification, erasure, portability
- **Penalties**: Up to 4% of annual global turnover

**California Consumer Privacy Act (CCPA):**
- **Scope**: California residents' personal information
- **Consumer Rights**: Know, delete, opt-out, non-discrimination
- **Business Obligations**: Disclosure, data minimization, security
- **Penalties**: Up to $7,500 per violation

**Other Privacy Laws:**
- **PIPEDA**: Canada's privacy law
- **LGPD**: Brazil's data protection law
- **PDPA**: Singapore's personal data protection act
- **Industry-specific**: HIPAA (healthcare), FERPA (education), GLBA (financial)

### Privacy by Design Principles

**1. Proactive not Reactive:**
- Anticipate and prevent privacy invasions
- Build privacy into system design
- Address privacy risks before they occur
- Continuous privacy risk assessment

**2. Privacy as the Default:**
- Maximum privacy protection without user action
- Opt-in rather than opt-out for data collection
- Minimal data collection by default
- Automatic privacy protection

**3. Full Functionality:**
- Privacy protection without compromising functionality
- Win-win solutions for all stakeholders
- Innovation within privacy constraints
- User experience optimization

**4. End-to-End Security:**
- Comprehensive security throughout data lifecycle
- Strong encryption and access controls
- Secure data transmission and storage
- Regular security assessments and updates

**5. Visibility and Transparency:**
- Clear privacy policies and notices
- User-friendly privacy controls
- Audit trails and logging
- Regular privacy reporting

**6. Respect for User Privacy:**
- User-centric privacy design
- Meaningful consent mechanisms
- Easy-to-use privacy controls
- Respect for user preferences

### Data Minimization and Retention

**Data Minimization Principles:**
- **Collection Limitation**: Collect only necessary data
- **Purpose Limitation**: Use data only for stated purposes
- **Storage Limitation**: Keep data only as long as necessary
- **Quality Principle**: Ensure data accuracy and completeness

**Data Retention Strategies:**
- **Legal Requirements**: Comply with regulatory retention periods
- **Business Needs**: Balance business value with privacy risks
- **Automated Deletion**: Implement automated data purging
- **Data Archival**: Move old data to secure, cost-effective storage

**Data Anonymization Techniques:**
- **Pseudonymization**: Replace identifiers with pseudonyms
- **Generalization**: Reduce data precision
- **Suppression**: Remove identifying attributes
- **Perturbation**: Add noise to data
- **Synthetic Data**: Generate artificial data with similar properties

## Secure Data Architecture

### Defense in Depth

**Network Security:**
- **Firewalls**: Control network traffic
- **Network Segmentation**: Isolate sensitive systems
- **Intrusion Detection/Prevention**: Monitor for malicious activity
- **VPN**: Secure remote access

**Application Security:**
- **Secure Coding**: Follow secure development practices
- **Input Validation**: Prevent injection attacks
- **Output Encoding**: Prevent XSS attacks
- **Session Management**: Secure user sessions

**Data Security:**
- **Encryption**: Protect data confidentiality
- **Access Controls**: Limit data access
- **Data Loss Prevention**: Prevent unauthorized data exfiltration
- **Database Security**: Secure database configurations

**Infrastructure Security:**
- **Hardening**: Secure system configurations
- **Patch Management**: Keep systems updated
- **Monitoring**: Continuous security monitoring
- **Incident Response**: Rapid response to security incidents

### Secure Data Pipeline Design

**Ingestion Security:**
- **Source Authentication**: Verify data source identity
- **Data Validation**: Validate incoming data integrity
- **Rate Limiting**: Prevent denial-of-service attacks
- **Audit Logging**: Log all data ingestion activities

**Processing Security:**
- **Secure Environments**: Isolated processing environments
- **Code Security**: Secure transformation code
- **Resource Limits**: Prevent resource exhaustion
- **Error Handling**: Secure error handling and logging

**Storage Security:**
- **Encryption**: Encrypt data at rest
- **Access Controls**: Implement fine-grained access controls
- **Backup Security**: Secure backup and recovery procedures
- **Data Masking**: Mask sensitive data in non-production environments

**Output Security:**
- **Data Classification**: Classify output data appropriately
- **Access Controls**: Control access to processed data
- **Audit Trails**: Log data access and usage
- **Data Loss Prevention**: Prevent unauthorized data sharing

### Cloud Security Considerations

**Shared Responsibility Model:**
- **Cloud Provider**: Physical security, infrastructure security
- **Customer**: Data security, access management, application security
- **Shared**: Network controls, operating system patches

**Cloud Security Best Practices:**
- **Identity and Access Management**: Centralized IAM
- **Network Security**: VPCs, security groups, NACLs
- **Data Protection**: Encryption, key management
- **Monitoring**: CloudTrail, security monitoring tools
- **Compliance**: Compliance frameworks and certifications

## Data Governance Framework

### Governance Structure

**Data Governance Council:**
- **Executive Sponsor**: Senior leadership support
- **Data Stewards**: Business data owners
- **Data Custodians**: Technical data managers
- **Privacy Officer**: Privacy compliance oversight
- **Security Officer**: Security oversight

**Roles and Responsibilities:**
- **Data Owners**: Business accountability for data
- **Data Stewards**: Day-to-day data management
- **Data Custodians**: Technical data implementation
- **Data Users**: Responsible data consumption
- **Data Protection Officer**: Privacy compliance

### Data Governance Processes

**Data Classification:**
- **Classification Criteria**: Define classification levels
- **Classification Process**: Systematic data classification
- **Labeling**: Apply classification labels to data
- **Review**: Regular classification review and updates

**Data Quality Management:**
- **Quality Standards**: Define data quality requirements
- **Quality Monitoring**: Continuous quality assessment
- **Quality Remediation**: Address quality issues
- **Quality Reporting**: Regular quality reporting

**Data Lineage and Cataloging:**
- **Data Catalog**: Centralized data inventory
- **Lineage Tracking**: Track data flow and transformations
- **Impact Analysis**: Assess change impacts
- **Documentation**: Comprehensive data documentation

### Compliance Monitoring

**Compliance Framework:**
- **Regulatory Mapping**: Map regulations to controls
- **Control Implementation**: Implement required controls
- **Monitoring**: Continuous compliance monitoring
- **Reporting**: Regular compliance reporting

**Audit and Assessment:**
- **Internal Audits**: Regular internal assessments
- **External Audits**: Third-party compliance audits
- **Penetration Testing**: Security vulnerability assessments
- **Risk Assessments**: Regular risk evaluations

## Incident Response and Recovery

### Security Incident Response

**Incident Response Process:**
1. **Preparation**: Develop response procedures and train team
2. **Detection**: Identify potential security incidents
3. **Analysis**: Assess incident scope and impact
4. **Containment**: Limit incident spread and damage
5. **Eradication**: Remove threat and vulnerabilities
6. **Recovery**: Restore normal operations
7. **Lessons Learned**: Improve processes based on incident

**Incident Classification:**
- **Severity Levels**: Critical, high, medium, low
- **Impact Assessment**: Business and technical impact
- **Response Time**: Required response timeframes
- **Escalation Procedures**: When and how to escalate

### Data Breach Response

**Breach Response Steps:**
1. **Immediate Response**: Contain the breach
2. **Assessment**: Determine scope and impact
3. **Notification**: Notify relevant parties
4. **Investigation**: Conduct thorough investigation
5. **Remediation**: Address vulnerabilities
6. **Monitoring**: Enhanced monitoring post-breach

**Legal and Regulatory Requirements:**
- **Notification Timelines**: Regulatory notification requirements
- **Affected Individuals**: Individual notification requirements
- **Documentation**: Maintain detailed incident records
- **Cooperation**: Cooperate with regulatory investigations

## Emerging Security Technologies

### Privacy-Enhancing Technologies

**Differential Privacy:**
- Add statistical noise to protect individual privacy
- Quantifiable privacy guarantees
- Suitable for statistical analysis
- Used by Apple, Google, and others

**Homomorphic Encryption:**
- Computation on encrypted data
- Data remains encrypted during processing
- Enables secure cloud computing
- Still computationally expensive

**Secure Multi-Party Computation:**
- Multiple parties compute without revealing inputs
- Enables collaborative analysis
- Preserves data privacy
- Complex to implement

**Federated Learning:**
- Train models without centralizing data
- Preserves data locality and privacy
- Suitable for distributed datasets
- Challenges with model quality and security

### Zero Trust Architecture

**Core Principles:**
- Never trust, always verify
- Assume breach mentality
- Least privilege access
- Continuous monitoring and validation

**Implementation Components:**
- **Identity Verification**: Strong authentication and authorization
- **Device Security**: Device compliance and management
- **Network Segmentation**: Micro-segmentation and isolation
- **Data Protection**: Encryption and access controls
- **Monitoring**: Comprehensive security monitoring

Building secure, privacy-compliant data systems requires a comprehensive approach that addresses technical, organizational, and regulatory requirements. Success depends on implementing defense-in-depth security measures, establishing strong governance processes, and maintaining a culture of security and privacy awareness.

The key is to build security and privacy into the foundation of your data systems rather than treating them as afterthoughts. This requires ongoing investment in people, processes, and technology, but it's essential for maintaining trust and compliance in today's data-driven world.`,
      }
    ]
  },
  'ds-math-stats': {
    title: 'Mathematics & Statistics Basics',
    description: 'Essential mathematical concepts for data science',
    sections: [
      {
        id: 'descriptive-stats',
        title: 'Descriptive Statistics: Understanding Your Data',
        content: `# Descriptive Statistics: Understanding Your Data

## Introduction to Descriptive Statistics

Descriptive statistics form the foundation of data analysis. They help us summarize, organize, and understand the basic features of our data. Before diving into complex machine learning algorithms, you must master these fundamental concepts.

### What Are Descriptive Statistics?

**Descriptive statistics** are numerical and graphical methods used to summarize and describe the main characteristics of a dataset. They answer questions like:
- What does the typical value look like?
- How spread out are the values?
- What's the shape of the data distribution?
- Are there any unusual values?

## Measures of Central Tendency

Central tendency describes the "center" or "typical" value in a dataset.

### 1. Mean (Average)
**Formula:** μ = (Σx) / n

**When to use:**
- Data is normally distributed
- No extreme outliers
- You need the mathematical center

**Example:**
Test scores: [85, 90, 78, 92, 88]
Mean = (85 + 90 + 78 + 92 + 88) / 5 = 86.6

**Python Implementation:**
\`\`\`python
import numpy as np
import pandas as pd

scores = [85, 90, 78, 92, 88]
mean_score = np.mean(scores)
print(f"Mean: {mean_score}")
\`\`\`

### 2. Median (Middle Value)
The middle value when data is sorted in ascending order.

**When to use:**
- Data has outliers
- Data is skewed
- You need a robust measure of center

**Example:**
Salaries: [30000, 35000, 40000, 45000, 200000]
Median = 40000 (middle value)
Mean = 70000 (affected by the outlier)

**Python Implementation:**
\`\`\`python
salaries = [30000, 35000, 40000, 45000, 200000]
median_salary = np.median(salaries)
print(f"Median: {median_salary}")
\`\`\`

### 3. Mode (Most Frequent Value)
The value that appears most frequently in the dataset.

**When to use:**
- Categorical data
- You need the most common value
- Data has clear peaks

**Example:**
Favorite colors: ['blue', 'red', 'blue', 'green', 'blue', 'red']
Mode = 'blue' (appears 3 times)

## Measures of Variability (Spread)

Variability measures describe how spread out the data points are.

### 1. Range
**Formula:** Range = Maximum - Minimum

**Pros:** Simple to calculate and understand
**Cons:** Sensitive to outliers

**Example:**
Test scores: [65, 70, 75, 80, 95]
Range = 95 - 65 = 30

### 2. Variance
**Population Variance:** σ² = Σ(x - μ)² / N
**Sample Variance:** s² = Σ(x - x̄)² / (n-1)

Variance measures the average squared deviation from the mean.

### 3. Standard Deviation
**Formula:** σ = √(variance)

Standard deviation is the square root of variance, expressed in the same units as the original data.

**Interpretation:**
- Small standard deviation: Data points are close to the mean
- Large standard deviation: Data points are spread out

**Python Implementation:**
\`\`\`python
import numpy as np

data = [10, 12, 14, 16, 18, 20, 22]

# Calculate variance and standard deviation
variance = np.var(data, ddof=1)  # ddof=1 for sample variance
std_dev = np.std(data, ddof=1)   # ddof=1 for sample std dev

print(f"Variance: {variance}")
print(f"Standard Deviation: {std_dev}")
\`\`\`

### 4. Interquartile Range (IQR)
**Formula:** IQR = Q3 - Q1

The IQR represents the range of the middle 50% of the data.

**Quartiles:**
- Q1 (25th percentile): 25% of data falls below this value
- Q2 (50th percentile): The median
- Q3 (75th percentile): 75% of data falls below this value

**Python Implementation:**
\`\`\`python
data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

Q1 = np.percentile(data, 25)
Q3 = np.percentile(data, 75)
IQR = Q3 - Q1

print(f"Q1: {Q1}")
print(f"Q3: {Q3}")
print(f"IQR: {IQR}")
\`\`\`

## Distribution Shape

### Skewness
Skewness measures the asymmetry of the data distribution.

**Types of Skewness:**
- **Positive Skew (Right Skew):** Tail extends to the right
  - Mean > Median > Mode
  - Example: Income distribution
- **Negative Skew (Left Skew):** Tail extends to the left
  - Mode > Median > Mean
  - Example: Age at retirement
- **No Skew (Symmetric):** Balanced distribution
  - Mean ≈ Median ≈ Mode
  - Example: Heights in a population

### Kurtosis
Kurtosis measures the "tailedness" of the distribution.

**Types:**
- **Leptokurtic:** Heavy tails, sharp peak
- **Mesokurtic:** Normal distribution
- **Platykurtic:** Light tails, flat peak

## Practical Data Analysis Example

Let's analyze a real dataset using descriptive statistics:

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Create sample dataset
np.random.seed(42)
data = {
    'age': np.random.normal(35, 10, 1000),
    'salary': np.random.exponential(50000, 1000),
    'experience': np.random.poisson(8, 1000)
}

df = pd.DataFrame(data)

# Basic descriptive statistics
print("Descriptive Statistics:")
print(df.describe())

# Additional statistics
print(f"\\nSkewness:")
print(df.skew())

print(f"\\nKurtosis:")
print(df.kurtosis())

# Visualizations
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Histograms
df['age'].hist(ax=axes[0,0], bins=30, alpha=0.7)
axes[0,0].set_title('Age Distribution')
axes[0,0].axvline(df['age'].mean(), color='red', linestyle='--', label='Mean')
axes[0,0].axvline(df['age'].median(), color='green', linestyle='--', label='Median')
axes[0,0].legend()

df['salary'].hist(ax=axes[0,1], bins=30, alpha=0.7)
axes[0,1].set_title('Salary Distribution')
axes[0,1].axvline(df['salary'].mean(), color='red', linestyle='--', label='Mean')
axes[0,1].axvline(df['salary'].median(), color='green', linestyle='--', label='Median')
axes[0,1].legend()

# Box plots
df.boxplot(column='age', ax=axes[1,0])
axes[1,0].set_title('Age Box Plot')

df.boxplot(column='salary', ax=axes[1,1])
axes[1,1].set_title('Salary Box Plot')

plt.tight_layout()
plt.show()
\`\`\`

## Key Insights from Descriptive Statistics

### 1. Data Quality Assessment
- **Missing values:** How much data is missing?
- **Outliers:** Are there extreme values that need investigation?
- **Data types:** Are variables in the correct format?

### 2. Distribution Understanding
- **Normal vs. Skewed:** Determines which statistical tests to use
- **Variability:** High variance might indicate data quality issues
- **Central tendency:** Which measure best represents your data?

### 3. Business Insights
- **Customer behavior:** Average purchase amount, frequency
- **Performance metrics:** Mean response time, error rates
- **Market analysis:** Price distributions, competitor analysis

## Common Mistakes to Avoid

### 1. Using Mean with Skewed Data
**Problem:** Mean is sensitive to outliers
**Solution:** Use median for skewed distributions

### 2. Ignoring Data Distribution
**Problem:** Assuming all data is normally distributed
**Solution:** Always visualize your data first

### 3. Misinterpreting Standard Deviation
**Problem:** Thinking larger standard deviation is always bad
**Solution:** Consider context - some variables naturally have high variability

### 4. Not Checking for Outliers
**Problem:** Outliers can skew all statistics
**Solution:** Use box plots and IQR to identify outliers

## Best Practices

### 1. Always Start with Visualization
\`\`\`python
# Quick data overview
df.hist(figsize=(12, 8))
plt.show()

# Correlation matrix
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.show()
\`\`\`

### 2. Use Multiple Measures
Don't rely on just one statistic. Compare mean vs. median, use multiple measures of spread.

### 3. Consider Context
A standard deviation of 10 might be large for test scores (0-100) but small for salaries ($30,000-$200,000).

### 4. Document Your Findings
\`\`\`python
# Create a summary report
summary_stats = {
    'Variable': ['Age', 'Salary', 'Experience'],
    'Mean': [df['age'].mean(), df['salary'].mean(), df['experience'].mean()],
    'Median': [df['age'].median(), df['salary'].median(), df['experience'].median()],
    'Std Dev': [df['age'].std(), df['salary'].std(), df['experience'].std()],
    'Skewness': [df['age'].skew(), df['salary'].skew(), df['experience'].skew()]
}

summary_df = pd.DataFrame(summary_stats)
print(summary_df)
\`\`\`

## Next Steps

Now that you understand descriptive statistics, you're ready to:
1. **Explore probability concepts** - Understanding uncertainty and randomness
2. **Learn inferential statistics** - Making conclusions about populations from samples
3. **Master hypothesis testing** - Testing assumptions and claims about data
4. **Dive into correlation and regression** - Understanding relationships between variables

**Remember:** Descriptive statistics are your first line of defense against bad data and wrong conclusions. Always start here before moving to more complex analyses!`
      }
    ]
  },
  'ds-python-fundamentals': {
    title: 'Python Programming Fundamentals',
    description: 'Learn Python programming for data science',
    sections: [
      {
        id: 'python-basics',
        title: 'Python Fundamentals for Data Science',
        content: `# Python Fundamentals for Data Science

## Why Python for Data Science?

Python has become the dominant language in data science for several compelling reasons:

### 1. **Simplicity and Readability**
Python's syntax is clean and intuitive, allowing you to focus on solving problems rather than wrestling with complex syntax.

### 2. **Rich Ecosystem**
- **NumPy**: Numerical computing and arrays
- **Pandas**: Data manipulation and analysis
- **Matplotlib/Seaborn**: Data visualization
- **Scikit-learn**: Machine learning
- **TensorFlow/PyTorch**: Deep learning
- **Jupyter**: Interactive development

### 3. **Community and Support**
Massive community, extensive documentation, and countless tutorials and resources.

## Python Basics

### Variables and Data Types

Python is dynamically typed, meaning you don't need to declare variable types explicitly.

\`\`\`python
# Numbers
age = 25                    # Integer
height = 5.9               # Float
temperature = -10.5        # Negative float

# Strings
name = "Alice"             # String with double quotes
city = 'New York'          # String with single quotes
description = """This is a
multi-line string"""       # Multi-line string

# Booleans
is_student = True
has_job = False

# Check data types
print(type(age))           # <class 'int'>
print(type(height))        # <class 'float'>
print(type(name))          # <class 'str'>
print(type(is_student))    # <class 'bool'>
\`\`\`

### String Operations

Strings are fundamental in data science for text processing and data cleaning.

\`\`\`python
# String methods
text = "  Data Science is Amazing!  "

# Basic operations
print(len(text))                    # Length: 27
print(text.lower())                 # Convert to lowercase
print(text.upper())                 # Convert to uppercase
print(text.strip())                 # Remove whitespace
print(text.replace("Amazing", "Fun")) # Replace text

# String formatting
name = "Alice"
score = 95.5
print(f"Student {name} scored {score}%")  # f-string (recommended)
print("Student {} scored {}%".format(name, score))  # .format() method
print("Student %s scored %.1f%%" % (name, score))   # % formatting (older)

# String slicing
text = "Python Programming"
print(text[0])      # First character: 'P'
print(text[-1])     # Last character: 'g'
print(text[0:6])    # Slice: 'Python'
print(text[7:])     # From index 7 to end: 'Programming'
print(text[:6])     # From start to index 6: 'Python'
\`\`\`

## Data Structures

### Lists: Ordered, Mutable Collections

Lists are the most versatile data structure in Python.

\`\`\`python
# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, True]
empty_list = []

# List operations
fruits = ["apple", "banana", "orange"]

# Adding elements
fruits.append("grape")              # Add to end
fruits.insert(1, "kiwi")           # Insert at index 1
fruits.extend(["mango", "peach"])  # Add multiple elements

# Removing elements
fruits.remove("banana")            # Remove by value
popped = fruits.pop()              # Remove and return last element
del fruits[0]                      # Remove by index

# Accessing elements
print(fruits[0])                   # First element
print(fruits[-1])                  # Last element
print(fruits[1:3])                 # Slice: elements 1 and 2

# List comprehensions (powerful feature!)
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(squares)      # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(even_squares) # [0, 4, 16, 36, 64]
\`\`\`

### Dictionaries: Key-Value Pairs

Dictionaries are crucial for data science as they're similar to JSON and database records.

\`\`\`python
# Creating dictionaries
student = {
    "name": "Alice",
    "age": 22,
    "major": "Data Science",
    "gpa": 3.8
}

# Accessing values
print(student["name"])              # Direct access
print(student.get("age"))           # Safe access
print(student.get("height", "N/A")) # Default value if key doesn't exist

# Adding/updating values
student["graduation_year"] = 2024   # Add new key-value pair
student["gpa"] = 3.9               # Update existing value

# Dictionary methods
print(student.keys())               # Get all keys
print(student.values())             # Get all values
print(student.items())              # Get key-value pairs

# Dictionary comprehension
squared_dict = {x: x**2 for x in range(5)}
print(squared_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
\`\`\`

### Tuples: Ordered, Immutable Collections

Tuples are like lists but cannot be changed after creation.

\`\`\`python
# Creating tuples
coordinates = (10.5, 20.3)
rgb_color = (255, 128, 0)
single_item = (42,)  # Note the comma for single-item tuple

# Tuple unpacking (very useful!)
x, y = coordinates
r, g, b = rgb_color
print(f"X: {x}, Y: {y}")
print(f"RGB: ({r}, {g}, {b})")

# Multiple assignment
name, age, city = "Alice", 25, "New York"
\`\`\`

### Sets: Unique, Unordered Collections

Sets are perfect for removing duplicates and set operations.

\`\`\`python
# Creating sets
unique_numbers = {1, 2, 3, 4, 5}
colors = {"red", "green", "blue"}

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

print(set1.union(set2))        # {1, 2, 3, 4, 5, 6}
print(set1.intersection(set2)) # {3, 4}
print(set1.difference(set2))   # {1, 2}

# Remove duplicates from list
numbers_with_duplicates = [1, 2, 2, 3, 3, 3, 4]
unique_numbers = list(set(numbers_with_duplicates))
print(unique_numbers)  # [1, 2, 3, 4]
\`\`\`

## Control Structures

### Conditional Statements

\`\`\`python
# Basic if-else
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score: {score}, Grade: {grade}")

# Ternary operator (conditional expression)
status = "Pass" if score >= 70 else "Fail"

# Multiple conditions
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")
elif age >= 18 and not has_license:
    print("Need to get license")
else:
    print("Too young to drive")
\`\`\`

### Loops

\`\`\`python
# For loops
fruits = ["apple", "banana", "orange"]

# Iterate over items
for fruit in fruits:
    print(f"I like {fruit}")

# Iterate with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Range function
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):       # 2, 3, 4, 5, 6, 7
    print(i)

for i in range(0, 10, 2):   # 0, 2, 4, 6, 8
    print(i)

# While loops
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Loop control
for i in range(10):
    if i == 3:
        continue  # Skip this iteration
    if i == 7:
        break     # Exit the loop
    print(i)
\`\`\`

## Functions

Functions are essential for organizing code and avoiding repetition.

\`\`\`python
# Basic function
def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)

# Function with default parameters
def calculate_bmi(weight, height, unit="metric"):
    if unit == "metric":
        bmi = weight / (height ** 2)
    else:  # imperial
        bmi = (weight / (height ** 2)) * 703
    return round(bmi, 2)

# Function calls
bmi1 = calculate_bmi(70, 1.75)           # metric (default)
bmi2 = calculate_bmi(154, 69, "imperial") # imperial

# Function with multiple return values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

data = [1, 2, 3, 4, 5]
minimum, maximum, average = get_stats(data)

# Lambda functions (anonymous functions)
square = lambda x: x ** 2
add = lambda x, y: x + y

numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))  # [1, 4, 9, 16, 25]
\`\`\`

## File Handling

File operations are crucial for data science workflows.

\`\`\`python
# Writing to a file
data = ["Alice,25,Engineer", "Bob,30,Designer", "Charlie,28,Analyst"]

with open("employees.csv", "w") as file:
    file.write("Name,Age,Job\\n")
    for line in data:
        file.write(line + "\\n")

# Reading from a file
with open("employees.csv", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("employees.csv", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes newline characters

# Working with JSON (common in data science)
import json

# Writing JSON
data = {
    "employees": [
        {"name": "Alice", "age": 25, "job": "Engineer"},
        {"name": "Bob", "age": 30, "job": "Designer"}
    ]
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=2)

# Reading JSON
with open("data.json", "r") as file:
    loaded_data = json.load(file)
    print(loaded_data)
\`\`\`

## Error Handling

Robust error handling is essential for data processing pipelines.

\`\`\`python
# Basic try-except
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
        return None
    except TypeError:
        print("Error: Invalid data types!")
        return None

# Multiple exceptions
def process_data(data):
    try:
        # Attempt to process data
        result = sum(data) / len(data)
        return result
    except (TypeError, ValueError) as e:
        print(f"Data processing error: {e}")
        return None
    except ZeroDivisionError:
        print("Error: Empty dataset!")
        return None
    finally:
        print("Processing attempt completed")

# Using else and finally
def read_file(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
    except FileNotFoundError:
        print(f"File {filename} not found!")
        content = None
    else:
        print("File read successfully!")
    finally:
        print("File operation completed")

    return content
\`\`\`

## Object-Oriented Programming Basics

While not always necessary for data science, understanding OOP helps with larger projects.

\`\`\`python
class DataProcessor:
    def __init__(self, name):
        self.name = name
        self.processed_count = 0

    def process_data(self, data):
        # Simple data processing example
        cleaned_data = [x for x in data if x is not None]
        self.processed_count += len(cleaned_data)
        return cleaned_data

    def get_stats(self):
        return f"{self.name} has processed {self.processed_count} records"

# Using the class
processor = DataProcessor("CSV Processor")
raw_data = [1, 2, None, 4, 5, None, 7]
clean_data = processor.process_data(raw_data)
print(clean_data)  # [1, 2, 4, 5, 7]
print(processor.get_stats())  # CSV Processor has processed 5 records
\`\`\`

## Python Libraries Overview

### Essential Libraries for Data Science

\`\`\`python
# NumPy - Numerical computing
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())  # 3.0

# Pandas - Data manipulation
import pandas as pd
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 28]
})
print(df.head())

# Matplotlib - Basic plotting
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.show()

# Requests - API calls
import requests
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
\`\`\`

## Best Practices for Data Science Python

### 1. Code Organization
\`\`\`python
# Use meaningful variable names
customer_age = 25  # Good
ca = 25           # Bad

# Use functions to avoid repetition
def calculate_statistics(data):
    return {
        'mean': np.mean(data),
        'median': np.median(data),
        'std': np.std(data)
    }
\`\`\`

### 2. Documentation
\`\`\`python
def clean_data(df, columns_to_clean):
    """
    Clean specified columns in a DataFrame.

    Args:
        df (pd.DataFrame): Input DataFrame
        columns_to_clean (list): List of column names to clean

    Returns:
        pd.DataFrame: Cleaned DataFrame
    """
    cleaned_df = df.copy()
    for col in columns_to_clean:
        cleaned_df[col] = cleaned_df[col].fillna(0)
    return cleaned_df
\`\`\`

### 3. Error Handling in Data Pipelines
\`\`\`python
def robust_data_loader(file_path):
    try:
        if file_path.endswith('.csv'):
            return pd.read_csv(file_path)
        elif file_path.endswith('.json'):
            return pd.read_json(file_path)
        else:
            raise ValueError("Unsupported file format")
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return None
\`\`\`

## Next Steps

Now that you have a solid foundation in Python, you're ready to:

1. **Dive into NumPy** - Learn array operations and numerical computing
2. **Master Pandas** - Data manipulation and analysis
3. **Explore Matplotlib/Seaborn** - Data visualization
4. **Practice with real datasets** - Apply your skills to actual data problems

**Remember:** The best way to learn Python for data science is by doing. Start with small projects and gradually work your way up to more complex analyses!`
      }
    ]
  },
  'ds-data-analysis-intro': {
    title: 'Introduction to Data Analysis',
    description: 'First steps in analyzing data with Python',
    sections: [
      {
        id: 'numpy-pandas-intro',
        title: 'NumPy and Pandas: Your Data Analysis Toolkit',
        content: `# NumPy and Pandas: Your Data Analysis Toolkit

## Introduction to Data Analysis

Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information and support decision-making. In Python, two libraries form the foundation of data analysis:

- **NumPy**: Numerical computing with arrays
- **Pandas**: Data manipulation and analysis

## NumPy: Numerical Computing Foundation

NumPy (Numerical Python) provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays.

### Why NumPy?

1. **Performance**: NumPy operations are implemented in C, making them much faster than pure Python
2. **Memory Efficiency**: NumPy arrays use less memory than Python lists
3. **Vectorization**: Perform operations on entire arrays without writing loops
4. **Foundation**: Most other data science libraries are built on NumPy

### Creating NumPy Arrays

\`\`\`python
import numpy as np

# From Python lists
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Using NumPy functions
zeros = np.zeros(5)                    # [0. 0. 0. 0. 0.]
ones = np.ones((3, 4))                 # 3x4 array of ones
range_arr = np.arange(0, 10, 2)        # [0 2 4 6 8]
linspace = np.linspace(0, 1, 5)        # [0.   0.25 0.5  0.75 1.  ]
random_arr = np.random.random((3, 3))  # 3x3 random array

# Array properties
print(f"Shape: {arr2.shape}")          # (2, 3)
print(f"Size: {arr2.size}")            # 6
print(f"Data type: {arr2.dtype}")      # int64
print(f"Dimensions: {arr2.ndim}")      # 2
\`\`\`

### Array Operations

\`\`\`python
# Basic arithmetic (element-wise)
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

print(a + b)    # [ 6  8 10 12]
print(a * b)    # [ 5 12 21 32]
print(a ** 2)   # [ 1  4  9 16]

# Broadcasting (operations between arrays of different shapes)
arr = np.array([[1, 2, 3], [4, 5, 6]])
scalar = 10
print(arr + scalar)  # Adds 10 to each element

# Mathematical functions
data = np.array([1, 4, 9, 16, 25])
print(np.sqrt(data))     # [1. 2. 3. 4. 5.]
print(np.log(data))      # Natural logarithm
print(np.sin(data))      # Sine function

# Statistical functions
print(np.mean(data))     # 11.0
print(np.median(data))   # 9.0
print(np.std(data))      # Standard deviation
print(np.sum(data))      # 55
\`\`\`

### Array Indexing and Slicing

\`\`\`python
# 1D arrays
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])      # 10 (first element)
print(arr[-1])     # 50 (last element)
print(arr[1:4])    # [20 30 40] (slice)

# 2D arrays
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix[0, 1])     # 2 (row 0, column 1)
print(matrix[1, :])     # [4 5 6] (entire row 1)
print(matrix[:, 2])     # [3 6 9] (entire column 2)
print(matrix[0:2, 1:3]) # [[2 3] [5 6]] (submatrix)

# Boolean indexing
data = np.array([1, 5, 3, 8, 2, 7])
mask = data > 4
print(data[mask])       # [5 8 7] (elements greater than 4)
print(data[data % 2 == 0])  # [8 2] (even numbers)
\`\`\`

## Pandas: Data Manipulation Powerhouse

Pandas provides high-level data structures and tools for data analysis. The two main data structures are:
- **Series**: 1-dimensional labeled array
- **DataFrame**: 2-dimensional labeled data structure (like a spreadsheet)

### Creating Pandas Objects

\`\`\`python
import pandas as pd

# Creating a Series
series = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(series)

# Creating a DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['New York', 'London', 'Tokyo', 'Paris'],
    'Salary': [70000, 80000, 90000, 75000]
}

df = pd.DataFrame(data)
print(df)
\`\`\`

### Loading Data

\`\`\`python
# From CSV file
df = pd.read_csv('data.csv')

# From Excel file
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# From JSON
df = pd.read_json('data.json')

# From dictionary
data = {'A': [1, 2, 3], 'B': [4, 5, 6]}
df = pd.DataFrame(data)

# From URL
url = 'https://raw.githubusercontent.com/datasets/covid-19/master/data/countries-aggregated.csv'
df = pd.read_csv(url)
\`\`\`

### Data Inspection

\`\`\`python
# Basic information
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.info())        # Data types and memory usage
print(df.describe())    # Statistical summary
print(df.shape)         # (rows, columns)
print(df.columns)       # Column names
print(df.dtypes)        # Data types of each column

# Check for missing values
print(df.isnull().sum())
print(df.isna().any())

# Unique values
print(df['City'].unique())
print(df['City'].value_counts())
\`\`\`

### Data Selection and Filtering

\`\`\`python
# Selecting columns
print(df['Name'])           # Single column (Series)
print(df[['Name', 'Age']])  # Multiple columns (DataFrame)

# Selecting rows
print(df.iloc[0])           # First row by position
print(df.iloc[0:3])         # First 3 rows
print(df.loc[0])            # Row by index label

# Conditional filtering
young_employees = df[df['Age'] < 30]
high_earners = df[df['Salary'] > 75000]
ny_employees = df[df['City'] == 'New York']

# Multiple conditions
young_high_earners = df[(df['Age'] < 30) & (df['Salary'] > 70000)]
specific_cities = df[df['City'].isin(['New York', 'London'])]
\`\`\`

### Data Manipulation

\`\`\`python
# Adding new columns
df['Salary_K'] = df['Salary'] / 1000
df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else 'Senior')

# Modifying existing columns
df['Name'] = df['Name'].str.upper()
df['City'] = df['City'].str.replace('New York', 'NYC')

# Dropping columns/rows
df_clean = df.drop('Salary_K', axis=1)  # Drop column
df_clean = df.drop(0, axis=0)           # Drop row

# Sorting
df_sorted = df.sort_values('Age')                    # Sort by age
df_sorted = df.sort_values(['City', 'Age'])          # Sort by multiple columns
df_sorted = df.sort_values('Salary', ascending=False) # Descending order
\`\`\`

### Handling Missing Data

\`\`\`python
# Create sample data with missing values
data_with_na = {
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, 7, 8],
    'C': [9, 10, 11, np.nan]
}
df_na = pd.DataFrame(data_with_na)

# Check for missing values
print(df_na.isnull())
print(df_na.isnull().sum())

# Drop missing values
df_dropped = df_na.dropna()              # Drop rows with any NaN
df_dropped = df_na.dropna(axis=1)        # Drop columns with any NaN
df_dropped = df_na.dropna(thresh=2)      # Keep rows with at least 2 non-NaN values

# Fill missing values
df_filled = df_na.fillna(0)              # Fill with 0
df_filled = df_na.fillna(method='ffill') # Forward fill
df_filled = df_na.fillna(df_na.mean())   # Fill with mean
\`\`\`

### Grouping and Aggregation

\`\`\`python
# Sample sales data
sales_data = {
    'Product': ['A', 'B', 'A', 'B', 'A', 'B'],
    'Region': ['North', 'North', 'South', 'South', 'North', 'South'],
    'Sales': [100, 150, 120, 180, 110, 160],
    'Quantity': [10, 15, 12, 18, 11, 16]
}
sales_df = pd.DataFrame(sales_data)

# Group by single column
product_sales = sales_df.groupby('Product')['Sales'].sum()
print(product_sales)

# Group by multiple columns
region_product_sales = sales_df.groupby(['Region', 'Product'])['Sales'].sum()
print(region_product_sales)

# Multiple aggregations
agg_stats = sales_df.groupby('Product').agg({
    'Sales': ['sum', 'mean', 'count'],
    'Quantity': ['sum', 'mean']
})
print(agg_stats)
\`\`\`

### Data Cleaning Example

\`\`\`python
# Real-world data cleaning example
import pandas as pd
import numpy as np

# Create messy dataset
messy_data = {
    'customer_id': [1, 2, 3, 4, 5, 6],
    'name': ['  Alice  ', 'BOB', 'charlie', None, 'Diana', 'eve'],
    'email': ['alice@email.com', 'bob@EMAIL.COM', 'charlie@email',
              'diana@email.com', None, 'eve@email.com'],
    'age': [25, 30, -5, 28, 150, 22],
    'purchase_amount': [100.50, 200.00, 150.75, None, 300.25, 75.00],
    'purchase_date': ['2023-01-15', '2023-02-20', '2023-01-30',
                     '2023-03-10', '2023-02-05', '2023-03-15']
}

df_messy = pd.DataFrame(messy_data)
print("Original messy data:")
print(df_messy)

# Cleaning steps
df_clean = df_messy.copy()

# 1. Clean names
df_clean['name'] = df_clean['name'].str.strip()  # Remove whitespace
df_clean['name'] = df_clean['name'].str.title()  # Proper case

# 2. Clean emails
df_clean['email'] = df_clean['email'].str.lower()  # Lowercase
# Remove invalid emails (simple validation)
email_pattern = r'^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$'
df_clean['email_valid'] = df_clean['email'].str.match(email_pattern, na=False)

# 3. Clean age (remove impossible values)
df_clean['age_valid'] = (df_clean['age'] >= 0) & (df_clean['age'] <= 120)
df_clean.loc[~df_clean['age_valid'], 'age'] = np.nan

# 4. Handle missing values
df_clean['name'].fillna('Unknown', inplace=True)
df_clean['purchase_amount'].fillna(df_clean['purchase_amount'].median(), inplace=True)

# 5. Convert date column
df_clean['purchase_date'] = pd.to_datetime(df_clean['purchase_date'])

# 6. Remove helper columns
df_clean = df_clean.drop(['email_valid', 'age_valid'], axis=1)

print("\\nCleaned data:")
print(df_clean)
\`\`\`

### Basic Statistical Analysis

\`\`\`python
# Sample dataset for analysis
np.random.seed(42)
n_samples = 1000

data = {
    'age': np.random.normal(35, 10, n_samples),
    'income': np.random.exponential(50000, n_samples),
    'education_years': np.random.poisson(16, n_samples),
    'satisfaction': np.random.uniform(1, 10, n_samples)
}

analysis_df = pd.DataFrame(data)

# Descriptive statistics
print("Descriptive Statistics:")
print(analysis_df.describe())

# Correlation analysis
print("\\nCorrelation Matrix:")
print(analysis_df.corr())

# Custom statistics
print("\\nCustom Statistics:")
print(f"Age range: {analysis_df['age'].min():.1f} - {analysis_df['age'].max():.1f}")
print(f"Income median: \\$\{analysis_df['income'].median():,.2f}")
print(f"High satisfaction (>8): \{(analysis_df['satisfaction'] > 8).sum()} people")

# Percentiles
print("\\nIncome Percentiles:")
for p in [25, 50, 75, 90, 95]:
    value = analysis_df['income'].quantile(p/100)
    print(f"\{p}th percentile: \\$\{value:,.2f}")
\`\`\`

## Best Practices for Data Analysis

### 1. Always Explore Your Data First

\`\`\`python
def explore_dataset(df):
    """Comprehensive data exploration function"""
    print("Dataset Shape:", df.shape)
    print("\\nColumn Info:")
    print(df.info())
    print("\\nMissing Values:")
    print(df.isnull().sum())
    print("\\nDescriptive Statistics:")
    print(df.describe())
    print("\\nSample Data:")
    print(df.head())

# Use the function
explore_dataset(analysis_df)
\`\`\`

### 2. Handle Missing Data Thoughtfully

\`\`\`python
def handle_missing_data(df, strategy='analyze'):
    """Handle missing data with different strategies"""
    missing_summary = df.isnull().sum()
    missing_percent = (missing_summary / len(df)) * 100

    missing_df = pd.DataFrame({
        'Missing_Count': missing_summary,
        'Missing_Percent': missing_percent
    })

    print("Missing Data Summary:")
    print(missing_df[missing_df['Missing_Count'] > 0])

    if strategy == 'drop':
        return df.dropna()
    elif strategy == 'fill_mean':
        return df.fillna(df.mean())
    elif strategy == 'fill_median':
        return df.fillna(df.median())
    else:
        return df  # Return original for analysis
\`\`\`

### 3. Validate Your Data

\`\`\`python
def validate_data(df):
    """Basic data validation checks"""
    issues = []

    # Check for duplicates
    if df.duplicated().any():
        issues.append(f"Found {df.duplicated().sum()} duplicate rows")

    # Check for negative values where they shouldn't exist
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    for col in numeric_cols:
        if col in ['age', 'income', 'price'] and (df[col] < 0).any():
            issues.append(f"Negative values found in {col}")

    # Check for outliers (simple method)
    for col in numeric_cols:
        Q1 = df[col].quantile(0.25)
        Q3 = df[col].quantile(0.75)
        IQR = Q3 - Q1
        outliers = ((df[col] < (Q1 - 1.5 * IQR)) | (df[col] > (Q3 + 1.5 * IQR))).sum()
        if outliers > 0:
            issues.append(f"{outliers} potential outliers in {col}")

    return issues

# Validate your data
validation_issues = validate_data(analysis_df)
for issue in validation_issues:
    print(f"⚠️ {issue}")
\`\`\`

## Common Data Analysis Patterns

### 1. Time Series Analysis Basics

\`\`\`python
# Create time series data
dates = pd.date_range('2023-01-01', periods=365, freq='D')
values = np.random.randn(365).cumsum() + 100

ts_df = pd.DataFrame({
    'date': dates,
    'value': values
})

ts_df.set_index('date', inplace=True)

# Time series operations
print("Monthly average:")
monthly_avg = ts_df.resample('M').mean()
print(monthly_avg.head())

# Rolling statistics
ts_df['rolling_mean'] = ts_df['value'].rolling(window=7).mean()
ts_df['rolling_std'] = ts_df['value'].rolling(window=7).std()
\`\`\`

### 2. Categorical Data Analysis

\`\`\`python
# Sample categorical data
categories = ['A', 'B', 'C', 'A', 'B', 'A', 'C', 'B', 'A']
cat_series = pd.Series(categories)

# Frequency analysis
print("Value counts:")
print(cat_series.value_counts())

print("\\nProportions:")
print(cat_series.value_counts(normalize=True))

# Cross-tabulation
df_cat = pd.DataFrame({
    'Category': ['A', 'B', 'C', 'A', 'B', 'A'],
    'Type': ['X', 'Y', 'X', 'Y', 'X', 'Y'],
    'Value': [10, 20, 15, 25, 12, 18]
})

crosstab = pd.crosstab(df_cat['Category'], df_cat['Type'], values=df_cat['Value'], aggfunc='sum')
print("\\nCross-tabulation:")
print(crosstab)
\`\`\`

## Next Steps

Now that you understand the basics of data analysis with NumPy and Pandas, you're ready to:

1. **Master Data Visualization** - Learn Matplotlib and Seaborn
2. **Advanced Pandas Techniques** - Merging, reshaping, and advanced operations
3. **Statistical Analysis** - Hypothesis testing and statistical modeling
4. **Machine Learning Preparation** - Feature engineering and data preprocessing

**Remember**: Data analysis is 80% data cleaning and 20% actual analysis. Master these fundamentals, and you'll be well-prepared for any data science challenge!`
      }
    ]
  },
  'ds-data-visualization': {
    title: 'Basic Data Visualization',
    description: 'Create compelling visualizations to tell data stories',
    sections: [
      {
        id: 'visualization-fundamentals',
        title: 'Data Visualization: Telling Stories with Data',
        content: `# Data Visualization: Telling Stories with Data

## Why Data Visualization Matters

Data visualization is the graphical representation of information and data. It's one of the most powerful tools in a data scientist's toolkit because:

### 1. **Human Visual Processing**
- Humans process visual information 60,000x faster than text
- Patterns, trends, and outliers become immediately apparent
- Complex relationships can be understood at a glance

### 2. **Communication Power**
- Bridge the gap between technical analysis and business understanding
- Make data accessible to non-technical stakeholders
- Support decision-making with clear, compelling evidence

### 3. **Exploratory Analysis**
- Discover hidden patterns and relationships
- Identify data quality issues
- Generate hypotheses for further investigation

## Python Visualization Ecosystem

### Core Libraries

**Matplotlib**: The foundation of Python plotting
- Low-level control over every aspect of plots
- Highly customizable but verbose
- Backend for many other libraries

**Seaborn**: Statistical visualization made easy
- Built on Matplotlib
- Beautiful default styles
- Specialized for statistical plots

**Plotly**: Interactive visualizations
- Web-based interactive plots
- Great for dashboards and presentations
- Supports 3D and animated plots

## Matplotlib Fundamentals

Matplotlib is the foundation of Python data visualization. Understanding its structure is crucial.

### Basic Plot Structure

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Basic line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.grid(True)
plt.show()
\`\`\`

### Figure and Axes Concepts

\`\`\`python
# Object-oriented approach (recommended)
fig, ax = plt.subplots(figsize=(10, 6))

ax.plot(x, y, label='sin(x)', color='blue', linewidth=2)
ax.plot(x, np.cos(x), label='cos(x)', color='red', linestyle='--')

ax.set_title('Trigonometric Functions', fontsize=16)
ax.set_xlabel('X values', fontsize=12)
ax.set_ylabel('Y values', fontsize=12)
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
\`\`\`

### Multiple Subplots

\`\`\`python
# Create sample data
np.random.seed(42)
data1 = np.random.normal(0, 1, 1000)
data2 = np.random.exponential(2, 1000)
data3 = np.random.uniform(-3, 3, 1000)

# Create subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1: Line plot
x = np.linspace(0, 10, 100)
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Sine Wave')

# Plot 2: Histogram
axes[0, 1].hist(data1, bins=30, alpha=0.7, color='skyblue')
axes[0, 1].set_title('Normal Distribution')

# Plot 3: Scatter plot
axes[1, 0].scatter(data1[:100], data2[:100], alpha=0.6)
axes[1, 0].set_title('Scatter Plot')

# Plot 4: Box plot
axes[1, 1].boxplot([data1, data2[:1000], data3])
axes[1, 1].set_title('Box Plots')
axes[1, 1].set_xticklabels(['Normal', 'Exponential', 'Uniform'])

plt.tight_layout()
plt.show()
\`\`\`

## Essential Plot Types

### 1. Line Plots - Trends Over Time

\`\`\`python
# Time series example
dates = pd.date_range('2023-01-01', periods=365)
stock_price = 100 + np.cumsum(np.random.randn(365) * 0.5)

plt.figure(figsize=(12, 6))
plt.plot(dates, stock_price, linewidth=2, color='darkblue')
plt.title('Stock Price Over Time', fontsize=16)
plt.xlabel('Date')
plt.ylabel('Price ($)')
plt.xticks(rotation=45)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# Multiple lines with different styles
fig, ax = plt.subplots(figsize=(10, 6))

x = np.linspace(0, 10, 100)
ax.plot(x, np.sin(x), label='sin(x)', linewidth=2, color='blue')
ax.plot(x, np.cos(x), label='cos(x)', linewidth=2, color='red', linestyle='--')
ax.plot(x, np.tan(x), label='tan(x)', linewidth=2, color='green', linestyle=':')

ax.set_ylim(-2, 2)
ax.legend(fontsize=12)
ax.grid(True, alpha=0.3)
plt.show()
\`\`\`

### 2. Bar Charts - Categorical Comparisons

\`\`\`python
# Simple bar chart
categories = ['Product A', 'Product B', 'Product C', 'Product D']
values = [23, 45, 56, 78]

plt.figure(figsize=(10, 6))
bars = plt.bar(categories, values, color=['skyblue', 'lightgreen', 'lightcoral', 'gold'])
plt.title('Product Sales Comparison')
plt.ylabel('Sales (thousands)')

# Add value labels on bars
for bar, value in zip(bars, values):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1,
             str(value), ha='center', va='bottom')

plt.show()

# Horizontal bar chart
plt.figure(figsize=(10, 6))
plt.barh(categories, values, color='lightblue')
plt.title('Product Sales Comparison (Horizontal)')
plt.xlabel('Sales (thousands)')
plt.show()

# Grouped bar chart
quarters = ['Q1', 'Q2', 'Q3', 'Q4']
product_a = [20, 35, 30, 35]
product_b = [25, 25, 15, 30]

x = np.arange(len(quarters))
width = 0.35

fig, ax = plt.subplots(figsize=(10, 6))
bars1 = ax.bar(x - width/2, product_a, width, label='Product A', color='skyblue')
bars2 = ax.bar(x + width/2, product_b, width, label='Product B', color='lightcoral')

ax.set_xlabel('Quarter')
ax.set_ylabel('Sales')
ax.set_title('Quarterly Sales by Product')
ax.set_xticks(x)
ax.set_xticklabels(quarters)
ax.legend()

plt.show()
\`\`\`

### 3. Histograms - Distribution Analysis

\`\`\`python
# Single histogram
np.random.seed(42)
data = np.random.normal(100, 15, 1000)

plt.figure(figsize=(10, 6))
n, bins, patches = plt.hist(data, bins=30, alpha=0.7, color='skyblue', edgecolor='black')
plt.axvline(np.mean(data), color='red', linestyle='--', linewidth=2, label=f'Mean: {np.mean(data):.1f}')
plt.axvline(np.median(data), color='green', linestyle='--', linewidth=2, label=f'Median: {np.median(data):.1f}')
plt.title('Distribution of Test Scores')
plt.xlabel('Score')
plt.ylabel('Frequency')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Multiple histograms
group1 = np.random.normal(75, 10, 500)
group2 = np.random.normal(85, 12, 500)

plt.figure(figsize=(10, 6))
plt.hist(group1, bins=30, alpha=0.5, label='Group 1', color='blue')
plt.hist(group2, bins=30, alpha=0.5, label='Group 2', color='red')
plt.title('Comparison of Two Groups')
plt.xlabel('Score')
plt.ylabel('Frequency')
plt.legend()
plt.show()
\`\`\`

### 4. Scatter Plots - Relationships

\`\`\`python
# Basic scatter plot
np.random.seed(42)
x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5

plt.figure(figsize=(10, 6))
plt.scatter(x, y, alpha=0.6, color='darkblue')
plt.title('Scatter Plot with Linear Relationship')
plt.xlabel('X values')
plt.ylabel('Y values')

# Add trend line
z = np.polyfit(x, y, 1)
p = np.poly1d(z)
plt.plot(x, p(x), "r--", alpha=0.8, linewidth=2)

plt.grid(True, alpha=0.3)
plt.show()

# Colored scatter plot
categories = np.random.choice(['A', 'B', 'C'], 100)
colors = {'A': 'red', 'B': 'blue', 'C': 'green'}
color_list = [colors[cat] for cat in categories]

plt.figure(figsize=(10, 6))
plt.scatter(x, y, c=color_list, alpha=0.6, s=50)
plt.title('Scatter Plot with Categories')
plt.xlabel('X values')
plt.ylabel('Y values')

# Create legend
for category, color in colors.items():
    plt.scatter([], [], c=color, alpha=0.6, s=50, label=category)
plt.legend()
plt.show()
\`\`\`

## Seaborn: Statistical Visualization

Seaborn builds on Matplotlib and provides a higher-level interface for statistical visualizations.

### Setting Up Seaborn

\`\`\`python
import seaborn as sns
import pandas as pd

# Set style
sns.set_style("whitegrid")
sns.set_palette("husl")

# Create sample dataset
np.random.seed(42)
df = pd.DataFrame({
    'group': np.repeat(['A', 'B', 'C'], 100),
    'value': np.concatenate([
        np.random.normal(10, 2, 100),
        np.random.normal(15, 3, 100),
        np.random.normal(12, 2.5, 100)
    ]),
    'category': np.tile(['X', 'Y'], 150)
})
\`\`\`

### Distribution Plots

\`\`\`python
# Histogram with KDE
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
sns.histplot(df['value'], kde=True)
plt.title('Histogram with KDE')

plt.subplot(1, 3, 2)
sns.boxplot(data=df, x='group', y='value')
plt.title('Box Plot by Group')

plt.subplot(1, 3, 3)
sns.violinplot(data=df, x='group', y='value')
plt.title('Violin Plot by Group')

plt.tight_layout()
plt.show()
\`\`\`

### Relationship Plots

\`\`\`python
# Create correlation dataset
np.random.seed(42)
corr_data = pd.DataFrame({
    'x': np.random.randn(100),
    'y': np.random.randn(100),
    'z': np.random.randn(100)
})
corr_data['y'] = corr_data['x'] * 0.5 + corr_data['y'] * 0.5
corr_data['category'] = np.random.choice(['A', 'B'], 100)

# Scatter plot with regression line
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
sns.scatterplot(data=corr_data, x='x', y='y', hue='category')
plt.title('Scatter Plot with Categories')

plt.subplot(1, 3, 2)
sns.regplot(data=corr_data, x='x', y='y')
plt.title('Regression Plot')

plt.subplot(1, 3, 3)
sns.heatmap(corr_data[['x', 'y', 'z']].corr(), annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')

plt.tight_layout()
plt.show()
\`\`\`

### Categorical Plots

\`\`\`python
# Various categorical plots
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# Count plot
sns.countplot(data=df, x='group', ax=axes[0, 0])
axes[0, 0].set_title('Count Plot')

# Bar plot
sns.barplot(data=df, x='group', y='value', ax=axes[0, 1])
axes[0, 1].set_title('Bar Plot')

# Point plot
sns.pointplot(data=df, x='group', y='value', hue='category', ax=axes[1, 0])
axes[1, 0].set_title('Point Plot')

# Strip plot
sns.stripplot(data=df, x='group', y='value', hue='category', ax=axes[1, 1])
axes[1, 1].set_title('Strip Plot')

plt.tight_layout()
plt.show()
\`\`\`

## Advanced Visualization Techniques

### 1. Subplots with Seaborn

\`\`\`python
# FacetGrid for multiple plots
g = sns.FacetGrid(df, col='group', hue='category', height=4)
g.map(plt.scatter, 'value', 'value')
g.add_legend()
plt.show()

# PairGrid for pairwise relationships
iris = sns.load_dataset('iris')
g = sns.PairGrid(iris, hue='species')
g.map_diag(plt.hist)
g.map_offdiag(plt.scatter)
g.add_legend()
plt.show()
\`\`\`

### 2. Customizing Plots

\`\`\`python
# Custom styling
plt.figure(figsize=(10, 6))

# Create the plot
ax = sns.boxplot(data=df, x='group', y='value', palette='Set2')

# Customize
ax.set_title('Customized Box Plot', fontsize=16, fontweight='bold')
ax.set_xlabel('Group', fontsize=12)
ax.set_ylabel('Value', fontsize=12)

# Add annotations
for i, group in enumerate(['A', 'B', 'C']):
    group_data = df[df['group'] == group]['value']
    ax.text(i, group_data.max() + 1, f'n={len(group_data)}',
            ha='center', va='bottom', fontweight='bold')

# Customize spines
sns.despine()
plt.tight_layout()
plt.show()
\`\`\`

## Interactive Visualizations with Plotly

\`\`\`python
import plotly.express as px
import plotly.graph_objects as go

# Interactive scatter plot
fig = px.scatter(df, x='value', y='value', color='group',
                 title='Interactive Scatter Plot',
                 hover_data=['category'])
fig.show()

# Interactive line plot with time series
dates = pd.date_range('2023-01-01', periods=100)
ts_data = pd.DataFrame({
    'date': dates,
    'value': np.cumsum(np.random.randn(100)),
    'category': np.random.choice(['A', 'B'], 100)
})

fig = px.line(ts_data, x='date', y='value', color='category',
              title='Interactive Time Series')
fig.show()
\`\`\`

## Color Theory and Design Principles

### 1. Choosing Colors

\`\`\`python
# Color palettes
fig, axes = plt.subplots(2, 3, figsize=(15, 8))

# Qualitative colors (for categories)
colors_qual = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']
axes[0, 0].bar(range(4), [1, 2, 3, 4], color=colors_qual)
axes[0, 0].set_title('Qualitative Colors')

# Sequential colors (for ordered data)
colors_seq = plt.cm.Blues(np.linspace(0.3, 1, 4))
axes[0, 1].bar(range(4), [1, 2, 3, 4], color=colors_seq)
axes[0, 1].set_title('Sequential Colors')

# Diverging colors (for data with meaningful center)
colors_div = plt.cm.RdBu(np.linspace(0, 1, 4))
axes[0, 2].bar(range(4), [-2, -1, 1, 2], color=colors_div)
axes[0, 2].set_title('Diverging Colors')

# Colorblind-friendly palette
cb_colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
axes[1, 0].bar(range(5), [1, 2, 3, 4, 5], color=cb_colors)
axes[1, 0].set_title('Colorblind-Friendly')

# Seaborn palettes
sns.barplot(x=range(4), y=[1, 2, 3, 4], palette='viridis', ax=axes[1, 1])
axes[1, 1].set_title('Viridis Palette')

sns.barplot(x=range(4), y=[1, 2, 3, 4], palette='husl', ax=axes[1, 2])
axes[1, 2].set_title('HUSL Palette')

plt.tight_layout()
plt.show()
\`\`\`

### 2. Design Best Practices

\`\`\`python
# Before and after comparison
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))

# Poor design
x = ['Product A', 'Product B', 'Product C', 'Product D']
y = [23, 45, 56, 78]

ax1.bar(x, y, color=['red', 'green', 'blue', 'yellow'])
ax1.set_title('Poor Design Example')
ax1.set_ylabel('Sales')

# Good design
colors = plt.cm.Blues(np.linspace(0.4, 0.8, len(x)))
bars = ax2.bar(x, y, color=colors, edgecolor='white', linewidth=1)
ax2.set_title('Good Design Example', fontsize=14, pad=20)
ax2.set_ylabel('Sales (thousands)', fontsize=12)
ax2.spines['top'].set_visible(False)
ax2.spines['right'].set_visible(False)
ax2.grid(axis='y', alpha=0.3)

# Add value labels
for bar, value in zip(bars, y):
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1,
             f'{value}k', ha='center', va='bottom', fontweight='bold')

plt.tight_layout()
plt.show()
\`\`\`

## Real-World Example: Sales Dashboard

\`\`\`python
# Create comprehensive sales dataset
np.random.seed(42)
dates = pd.date_range('2023-01-01', periods=365)
products = ['Product A', 'Product B', 'Product C', 'Product D']
regions = ['North', 'South', 'East', 'West']

sales_data = []
for date in dates:
    for product in products:
        for region in regions:
            sales = np.random.poisson(50) + np.random.normal(0, 10)
            sales_data.append({
                'date': date,
                'product': product,
                'region': region,
                'sales': max(0, sales),
                'month': date.strftime('%Y-%m')
            })

sales_df = pd.DataFrame(sales_data)

# Create dashboard
fig = plt.figure(figsize=(16, 12))

# 1. Total sales over time
ax1 = plt.subplot(2, 3, 1)
monthly_sales = sales_df.groupby('month')['sales'].sum()
plt.plot(range(len(monthly_sales)), monthly_sales.values, marker='o', linewidth=2)
plt.title('Total Sales Over Time', fontsize=14, fontweight='bold')
plt.xlabel('Month')
plt.ylabel('Sales')
plt.xticks(range(0, len(monthly_sales), 2),
           [monthly_sales.index[i] for i in range(0, len(monthly_sales), 2)],
           rotation=45)
plt.grid(True, alpha=0.3)

# 2. Sales by product
ax2 = plt.subplot(2, 3, 2)
product_sales = sales_df.groupby('product')['sales'].sum()
colors = plt.cm.Set3(np.linspace(0, 1, len(product_sales)))
bars = plt.bar(product_sales.index, product_sales.values, color=colors)
plt.title('Sales by Product', fontsize=14, fontweight='bold')
plt.ylabel('Total Sales')
for bar, value in zip(bars, product_sales.values):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 500,
             f'{value:,.0f}', ha='center', va='bottom', fontweight='bold')

# 3. Sales by region
ax3 = plt.subplot(2, 3, 3)
region_sales = sales_df.groupby('region')['sales'].sum()
plt.pie(region_sales.values, labels=region_sales.index, autopct='%1.1f%%',
        startangle=90, colors=plt.cm.Pastel1(np.linspace(0, 1, len(region_sales))))
plt.title('Sales Distribution by Region', fontsize=14, fontweight='bold')

# 4. Heatmap of product vs region
ax4 = plt.subplot(2, 3, 4)
heatmap_data = sales_df.groupby(['product', 'region'])['sales'].sum().unstack()
sns.heatmap(heatmap_data, annot=True, fmt='.0f', cmap='YlOrRd', ax=ax4)
plt.title('Sales Heatmap: Product vs Region', fontsize=14, fontweight='bold')

# 5. Distribution of daily sales
ax5 = plt.subplot(2, 3, 5)
daily_sales = sales_df.groupby('date')['sales'].sum()
plt.hist(daily_sales, bins=30, alpha=0.7, color='skyblue', edgecolor='black')
plt.axvline(daily_sales.mean(), color='red', linestyle='--', linewidth=2,
            label=f'Mean: {daily_sales.mean():.0f}')
plt.title('Distribution of Daily Sales', fontsize=14, fontweight='bold')
plt.xlabel('Daily Sales')
plt.ylabel('Frequency')
plt.legend()

# 6. Top performing days
ax6 = plt.subplot(2, 3, 6)
top_days = daily_sales.nlargest(10)
plt.barh(range(len(top_days)), top_days.values, color='lightgreen')
plt.yticks(range(len(top_days)), [d.strftime('%m-%d') for d in top_days.index])
plt.title('Top 10 Sales Days', fontsize=14, fontweight='bold')
plt.xlabel('Sales')

plt.tight_layout()
plt.show()
\`\`\`

## Best Practices Summary

### 1. **Choose the Right Chart Type**
- Line plots: Trends over time
- Bar charts: Categorical comparisons
- Histograms: Distributions
- Scatter plots: Relationships
- Heatmaps: Correlation matrices

### 2. **Design Principles**
- Keep it simple and focused
- Use consistent colors and fonts
- Remove unnecessary elements (chartjunk)
- Make text readable
- Provide clear labels and titles

### 3. **Color Guidelines**
- Use colorblind-friendly palettes
- Limit the number of colors
- Use color meaningfully
- Consider cultural associations

### 4. **Accessibility**
- Ensure sufficient contrast
- Don't rely solely on color to convey information
- Provide alternative text for screen readers
- Test with different audiences

## Next Steps

Now that you understand data visualization fundamentals, you're ready to:

1. **Advanced Statistical Plots** - Learn specialized visualizations for specific analyses
2. **Interactive Dashboards** - Build web-based dashboards with Plotly Dash or Streamlit
3. **Geographic Visualizations** - Create maps and spatial visualizations
4. **Animation and Storytelling** - Create animated plots and data stories

**Remember**: The best visualization is the one that clearly communicates your message to your audience. Always consider who will be viewing your charts and what decisions they need to make based on the data!`
      }
    ]
  },
  'ds-data-cleaning': {
    title: 'Data Cleaning & Preprocessing',
    description: 'Master the art of preparing messy real-world data',
    sections: [
      {
        id: 'data-cleaning-fundamentals',
        title: 'Data Cleaning: From Messy to Analysis-Ready',
        content: `# Data Cleaning: From Messy to Analysis-Ready

## The Reality of Real-World Data

Data cleaning is often cited as taking 80% of a data scientist's time, and for good reason. Real-world data is messy, inconsistent, and full of surprises. Mastering data cleaning is essential for producing reliable insights.

### Common Data Quality Issues

**Missing Values**
- Incomplete surveys or forms
- System failures during data collection
- Privacy restrictions (redacted information)
- Data integration issues

**Inconsistent Formats**
- Different date formats (MM/DD/YYYY vs DD/MM/YYYY)
- Inconsistent naming conventions
- Mixed case text
- Various units of measurement

**Duplicate Records**
- Same entity recorded multiple times
- Near-duplicates with slight variations
- Merged datasets with overlapping records

**Outliers and Anomalies**
- Data entry errors (typos, wrong units)
- System glitches
- Legitimate extreme values
- Fraudulent or suspicious activities

## Comprehensive Data Cleaning Workflow

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import re

# Load and inspect data
def initial_data_inspection(df):
    """Comprehensive initial data inspection"""
    print("=== DATASET OVERVIEW ===")
    print(f"Shape: {df.shape}")
    print(f"Memory usage: {df.memory_usage(deep=True).sum() / 1024**2:.2f} MB")

    print("\\n=== COLUMN INFORMATION ===")
    print(df.info())

    print("\\n=== MISSING VALUES ===")
    missing = df.isnull().sum()
    missing_pct = (missing / len(df)) * 100
    missing_df = pd.DataFrame({
        'Missing_Count': missing,
        'Missing_Percentage': missing_pct
    })
    print(missing_df[missing_df['Missing_Count'] > 0].sort_values('Missing_Count', ascending=False))

    print("\\n=== DUPLICATES ===")
    print(f"Duplicate rows: {df.duplicated().sum()}")

    print("\\n=== SAMPLE DATA ===")
    print(df.head())

    return missing_df

# Example messy dataset
messy_data = {
    'customer_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2],  # Duplicate ID
    'name': ['  John Doe  ', 'JANE SMITH', 'bob johnson', None, 'Alice Brown',
             'Charlie Wilson', 'diana prince', 'Eve Adams', 'Frank Miller', 'Grace Lee', 'jane smith'],
    'email': ['john@email.com', 'JANE@EMAIL.COM', 'bob@invalid', 'alice@email.com', None,
              'charlie@email.com', 'diana@email', 'eve@email.com', 'frank@email.com', 'grace@email.com', 'jane@email.com'],
    'age': [25, 30, -5, 28, 150, 22, 35, None, 40, 33, 30],  # Invalid ages
    'salary': [50000, 75000, 60000, None, 80000, 45000, 70000, 65000, 90000, 55000, 75000],
    'join_date': ['2023-01-15', '2023/02/20', '15-03-2023', '2023-04-10', 'invalid_date',
                  '2023-05-05', '2023-06-12', '2023-07-08', '2023-08-15', '2023-09-20', '2023/02/20'],
    'department': ['Sales', 'MARKETING', 'sales', 'Engineering', 'Marketing',
                   'engineering', 'Sales', 'Marketing', 'Engineering', 'Sales', 'marketing']
}

df = pd.DataFrame(messy_data)
print("Original messy dataset:")
print(df)
\`\`\`

## Step-by-Step Cleaning Process

### 1. Handle Duplicates

\`\`\`python
def handle_duplicates(df):
    """Identify and handle duplicate records"""
    print("=== DUPLICATE ANALYSIS ===")

    # Exact duplicates
    exact_dupes = df.duplicated()
    print(f"Exact duplicates: {exact_dupes.sum()}")

    # Duplicates based on specific columns (e.g., customer_id)
    id_dupes = df.duplicated(subset=['customer_id'])
    print(f"Duplicate customer IDs: {id_dupes.sum()}")

    if id_dupes.any():
        print("\\nDuplicate records:")
        print(df[df['customer_id'].isin(df[id_dupes]['customer_id'])])

    # Remove duplicates (keep first occurrence)
    df_clean = df.drop_duplicates(subset=['customer_id'], keep='first')
    print(f"\\nAfter removing duplicates: {df_clean.shape}")

    return df_clean

df_clean = handle_duplicates(df)
\`\`\`

### 2. Standardize Text Data

\`\`\`python
def clean_text_data(df):
    """Clean and standardize text columns"""
    df_clean = df.copy()

    # Clean names
    if 'name' in df_clean.columns:
        df_clean['name'] = df_clean['name'].str.strip()  # Remove whitespace
        df_clean['name'] = df_clean['name'].str.title()  # Proper case
        df_clean['name'] = df_clean['name'].replace('', np.nan)  # Empty strings to NaN

    # Clean emails
    if 'email' in df_clean.columns:
        df_clean['email'] = df_clean['email'].str.lower()  # Lowercase
        df_clean['email'] = df_clean['email'].str.strip()

        # Validate email format (basic)
        email_pattern = r'^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$'
        valid_emails = df_clean['email'].str.match(email_pattern, na=False)
        df_clean.loc[~valid_emails, 'email'] = np.nan

    # Standardize categorical data
    if 'department' in df_clean.columns:
        df_clean['department'] = df_clean['department'].str.title()

        # Create mapping for common variations
        dept_mapping = {
            'Sales': 'Sales',
            'Marketing': 'Marketing',
            'Engineering': 'Engineering'
        }
        df_clean['department'] = df_clean['department'].map(dept_mapping)

    return df_clean

df_clean = clean_text_data(df_clean)
print("After text cleaning:")
print(df_clean)
\`\`\`

### 3. Handle Date and Time Data

\`\`\`python
def clean_dates(df):
    """Clean and standardize date columns"""
    df_clean = df.copy()

    if 'join_date' in df_clean.columns:
        # Try multiple date formats
        date_formats = ['%Y-%m-%d', '%Y/%m/%d', '%d-%m-%Y', '%m/%d/%Y']

        def parse_date(date_str):
            if pd.isna(date_str):
                return np.nan

            for fmt in date_formats:
                try:
                    return pd.to_datetime(date_str, format=fmt)
                except:
                    continue
            return np.nan

        df_clean['join_date'] = df_clean['join_date'].apply(parse_date)

        # Validate date ranges (e.g., reasonable employment dates)
        current_date = pd.Timestamp.now()
        min_date = pd.Timestamp('2020-01-01')  # Company founding date

        invalid_dates = (df_clean['join_date'] < min_date) | (df_clean['join_date'] > current_date)
        df_clean.loc[invalid_dates, 'join_date'] = np.nan

    return df_clean

df_clean = clean_dates(df_clean)
print("After date cleaning:")
print(df_clean[['customer_id', 'join_date']])
\`\`\`

### 4. Handle Numerical Data and Outliers

\`\`\`python
def clean_numerical_data(df):
    """Clean numerical columns and handle outliers"""
    df_clean = df.copy()

    # Age validation
    if 'age' in df_clean.columns:
        # Set reasonable bounds
        df_clean.loc[(df_clean['age'] < 0) | (df_clean['age'] > 120), 'age'] = np.nan

    # Salary validation
    if 'salary' in df_clean.columns:
        # Remove negative salaries
        df_clean.loc[df_clean['salary'] < 0, 'salary'] = np.nan

        # Identify outliers using IQR method
        Q1 = df_clean['salary'].quantile(0.25)
        Q3 = df_clean['salary'].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR

        outliers = (df_clean['salary'] < lower_bound) | (df_clean['salary'] > upper_bound)
        print(f"Salary outliers detected: {outliers.sum()}")

        # Option 1: Remove outliers
        # df_clean.loc[outliers, 'salary'] = np.nan

        # Option 2: Cap outliers
        df_clean.loc[df_clean['salary'] > upper_bound, 'salary'] = upper_bound
        df_clean.loc[df_clean['salary'] < lower_bound, 'salary'] = lower_bound

    return df_clean

df_clean = clean_numerical_data(df_clean)
print("After numerical cleaning:")
print(df_clean)
\`\`\`

### 5. Handle Missing Values

\`\`\`python
def handle_missing_values(df, strategy='smart'):
    """Handle missing values with various strategies"""
    df_clean = df.copy()

    print("=== MISSING VALUE TREATMENT ===")

    for column in df_clean.columns:
        missing_count = df_clean[column].isnull().sum()
        missing_pct = (missing_count / len(df_clean)) * 100

        if missing_count > 0:
            print(f"\\n{column}: {missing_count} missing ({missing_pct:.1f}%)")

            if missing_pct > 50:
                print(f"  → Consider dropping column (>50% missing)")
            elif df_clean[column].dtype in ['object']:
                # Categorical data
                mode_value = df_clean[column].mode()
                if len(mode_value) > 0:
                    df_clean[column].fillna(mode_value[0], inplace=True)
                    print(f"  → Filled with mode: {mode_value[0]}")
                else:
                    df_clean[column].fillna('Unknown', inplace=True)
                    print(f"  → Filled with 'Unknown'")
            elif df_clean[column].dtype in ['int64', 'float64']:
                # Numerical data
                if column == 'age':
                    # Use median for age
                    median_val = df_clean[column].median()
                    df_clean[column].fillna(median_val, inplace=True)
                    print(f"  → Filled with median: {median_val}")
                elif column == 'salary':
                    # Use mean for salary (or median if skewed)
                    mean_val = df_clean[column].mean()
                    df_clean[column].fillna(mean_val, inplace=True)
                    print(f"  → Filled with mean: {mean_val:.0f}")
            elif df_clean[column].dtype == 'datetime64[ns]':
                # Date data - might use forward fill or interpolation
                df_clean[column].fillna(method='ffill', inplace=True)
                print(f"  → Forward filled")

    return df_clean

df_clean = handle_missing_values(df_clean)
print("\\nAfter handling missing values:")
print(df_clean)
\`\`\`

## Advanced Cleaning Techniques

### 1. Data Type Optimization

\`\`\`python
def optimize_data_types(df):
    """Optimize data types to reduce memory usage"""
    df_optimized = df.copy()

    for column in df_optimized.columns:
        col_type = df_optimized[column].dtype

        if col_type == 'object':
            # Check if it's actually categorical
            unique_ratio = df_optimized[column].nunique() / len(df_optimized)
            if unique_ratio < 0.5:  # Less than 50% unique values
                df_optimized[column] = df_optimized[column].astype('category')
                print(f"{column}: object → category")

        elif col_type == 'int64':
            # Downcast integers
            col_min = df_optimized[column].min()
            col_max = df_optimized[column].max()

            if col_min >= 0:
                if col_max < 255:
                    df_optimized[column] = df_optimized[column].astype('uint8')
                elif col_max < 65535:
                    df_optimized[column] = df_optimized[column].astype('uint16')
                elif col_max < 4294967295:
                    df_optimized[column] = df_optimized[column].astype('uint32')
            else:
                if col_min > -128 and col_max < 127:
                    df_optimized[column] = df_optimized[column].astype('int8')
                elif col_min > -32768 and col_max < 32767:
                    df_optimized[column] = df_optimized[column].astype('int16')
                elif col_min > -2147483648 and col_max < 2147483647:
                    df_optimized[column] = df_optimized[column].astype('int32')

        elif col_type == 'float64':
            # Downcast floats
            df_optimized[column] = pd.to_numeric(df_optimized[column], downcast='float')

    return df_optimized

df_optimized = optimize_data_types(df_clean)
print("Memory usage comparison:")
print(f"Original: {df.memory_usage(deep=True).sum() / 1024:.2f} KB")
print(f"Optimized: {df_optimized.memory_usage(deep=True).sum() / 1024:.2f} KB")
\`\`\`

### 2. Feature Engineering During Cleaning

\`\`\`python
def create_derived_features(df):
    """Create useful features during the cleaning process"""
    df_enhanced = df.copy()

    # Age groups
    if 'age' in df_enhanced.columns:
        df_enhanced['age_group'] = pd.cut(df_enhanced['age'],
                                        bins=[0, 25, 35, 50, 100],
                                        labels=['Young', 'Adult', 'Middle-aged', 'Senior'])

    # Salary bands
    if 'salary' in df_enhanced.columns:
        df_enhanced['salary_band'] = pd.cut(df_enhanced['salary'],
                                          bins=[0, 50000, 75000, 100000, float('inf')],
                                          labels=['Low', 'Medium', 'High', 'Very High'])

    # Tenure calculation
    if 'join_date' in df_enhanced.columns:
        current_date = pd.Timestamp.now()
        df_enhanced['tenure_days'] = (current_date - df_enhanced['join_date']).dt.days
        df_enhanced['tenure_years'] = df_enhanced['tenure_days'] / 365.25

    # Email domain extraction
    if 'email' in df_enhanced.columns:
        df_enhanced['email_domain'] = df_enhanced['email'].str.split('@').str[1]

    return df_enhanced

df_final = create_derived_features(df_optimized)
print("Final cleaned dataset with derived features:")
print(df_final)
\`\`\`

## Data Validation and Quality Checks

\`\`\`python
def validate_cleaned_data(df):
    """Comprehensive validation of cleaned data"""
    print("=== DATA VALIDATION REPORT ===")

    # Check for remaining issues
    issues = []

    # Missing values
    missing = df.isnull().sum().sum()
    if missing > 0:
        issues.append(f"Still has {missing} missing values")

    # Duplicates
    dupes = df.duplicated().sum()
    if dupes > 0:
        issues.append(f"Still has {dupes} duplicate rows")

    # Data type consistency
    for column in df.columns:
        if df[column].dtype == 'object':
            # Check for mixed types
            sample = df[column].dropna().head(100)
            types = set(type(x).__name__ for x in sample)
            if len(types) > 1:
                issues.append(f"{column} has mixed data types: {types}")

    # Range validation
    if 'age' in df.columns:
        invalid_ages = ((df['age'] < 0) | (df['age'] > 120)).sum()
        if invalid_ages > 0:
            issues.append(f"{invalid_ages} invalid age values")

    if 'salary' in df.columns:
        invalid_salaries = (df['salary'] < 0).sum()
        if invalid_salaries > 0:
            issues.append(f"{invalid_salaries} negative salary values")

    # Report results
    if issues:
        print("⚠️  Issues found:")
        for issue in issues:
            print(f"  - {issue}")
    else:
        print("✅ Data validation passed!")

    # Summary statistics
    print("\\n=== SUMMARY STATISTICS ===")
    print(df.describe(include='all'))

    return len(issues) == 0

# Validate the final dataset
is_valid = validate_cleaned_data(df_final)
\`\`\`

## Best Practices for Data Cleaning

### 1. Document Everything
\`\`\`python
def create_cleaning_report(original_df, cleaned_df):
    """Generate a comprehensive cleaning report"""
    report = {
        'original_shape': original_df.shape,
        'cleaned_shape': cleaned_df.shape,
        'rows_removed': original_df.shape[0] - cleaned_df.shape[0],
        'columns_removed': original_df.shape[1] - cleaned_df.shape[1],
        'missing_values_handled': original_df.isnull().sum().sum() - cleaned_df.isnull().sum().sum(),
        'duplicates_removed': original_df.duplicated().sum() - cleaned_df.duplicated().sum()
    }

    print("=== CLEANING SUMMARY REPORT ===")
    for key, value in report.items():
        print(f"{key.replace('_', ' ').title()}: {value}")

    return report

cleaning_report = create_cleaning_report(df, df_final)
\`\`\`

### 2. Create Reusable Functions
\`\`\`python
class DataCleaner:
    """Reusable data cleaning pipeline"""

    def __init__(self):
        self.cleaning_steps = []

    def add_step(self, step_name, function, **kwargs):
        """Add a cleaning step to the pipeline"""
        self.cleaning_steps.append({
            'name': step_name,
            'function': function,
            'kwargs': kwargs
        })

    def clean(self, df):
        """Execute the cleaning pipeline"""
        df_clean = df.copy()

        for step in self.cleaning_steps:
            print(f"Executing: {step['name']}")
            df_clean = step['function'](df_clean, **step['kwargs'])

        return df_clean

# Usage example
cleaner = DataCleaner()
cleaner.add_step("Remove duplicates", handle_duplicates)
cleaner.add_step("Clean text", clean_text_data)
cleaner.add_step("Clean dates", clean_dates)
cleaner.add_step("Handle missing values", handle_missing_values)

cleaned_data = cleaner.clean(df)
\`\`\`

## Next Steps

After mastering data cleaning, you're ready to:

1. **Exploratory Data Analysis (EDA)** - Discover patterns and insights
2. **Feature Engineering** - Create meaningful variables for modeling
3. **Statistical Analysis** - Apply statistical tests and methods
4. **Machine Learning** - Build predictive models with clean data

**Remember**: Clean data is the foundation of all successful data science projects. Invest time in getting this right, and everything else becomes much easier!`
      }
    ]
  },
  'ds-eda': {
    title: 'Exploratory Data Analysis (EDA)',
    description: 'Systematic approach to understanding your data',
    sections: [
      {
        id: 'eda-fundamentals',
        title: 'Exploratory Data Analysis: Uncovering Hidden Insights',
        content: `# Exploratory Data Analysis: Uncovering Hidden Insights

## What is Exploratory Data Analysis?

Exploratory Data Analysis (EDA) is the critical process of performing initial investigations on data to discover patterns, spot anomalies, test hypotheses, and check assumptions through summary statistics and graphical representations.

### Goals of EDA

1. **Understand the data structure** - What variables do you have?
2. **Identify patterns and relationships** - How do variables relate to each other?
3. **Detect outliers and anomalies** - What doesn't fit the expected pattern?
4. **Test assumptions** - Are your modeling assumptions valid?
5. **Generate hypotheses** - What questions should you investigate further?
6. **Guide feature engineering** - What new variables might be useful?

## The EDA Process

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as stats
from scipy.stats import chi2_contingency
import warnings
warnings.filterwarnings('ignore')

# Set plotting style
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

# Load sample dataset (using built-in dataset)
df = sns.load_dataset('tips')
print("Dataset shape:", df.shape)
print("\\nFirst few rows:")
print(df.head())
\`\`\`

### Step 1: Data Overview and Structure

\`\`\`python
def comprehensive_overview(df):
    """Get comprehensive overview of the dataset"""
    print("=== DATASET OVERVIEW ===")
    print(f"Shape: {df.shape[0]} rows, {df.shape[1]} columns")
    print(f"Memory usage: {df.memory_usage(deep=True).sum() / 1024**2:.2f} MB")

    print("\\n=== COLUMN INFORMATION ===")
    info_df = pd.DataFrame({
        'Data_Type': df.dtypes,
        'Non_Null_Count': df.count(),
        'Null_Count': df.isnull().sum(),
        'Null_Percentage': (df.isnull().sum() / len(df)) * 100,
        'Unique_Values': df.nunique(),
        'Unique_Percentage': (df.nunique() / len(df)) * 100
    })
    print(info_df)

    print("\\n=== SAMPLE VALUES ===")
    for col in df.columns:
        print(f"{col}: {df[col].dropna().head(3).tolist()}")

    return info_df

overview = comprehensive_overview(df)
\`\`\`

### Step 2: Univariate Analysis

\`\`\`python
def analyze_numerical_variables(df):
    """Comprehensive analysis of numerical variables"""
    numerical_cols = df.select_dtypes(include=[np.number]).columns

    if len(numerical_cols) == 0:
        print("No numerical columns found")
        return

    print("=== NUMERICAL VARIABLES ANALYSIS ===")

    # Descriptive statistics
    print("\\nDescriptive Statistics:")
    desc_stats = df[numerical_cols].describe()
    print(desc_stats)

    # Additional statistics
    additional_stats = pd.DataFrame({
        'Skewness': df[numerical_cols].skew(),
        'Kurtosis': df[numerical_cols].kurtosis(),
        'CV': df[numerical_cols].std() / df[numerical_cols].mean()  # Coefficient of Variation
    })
    print("\\nAdditional Statistics:")
    print(additional_stats)

    # Visualizations
    n_cols = len(numerical_cols)
    fig, axes = plt.subplots(2, n_cols, figsize=(4*n_cols, 8))
    if n_cols == 1:
        axes = axes.reshape(-1, 1)

    for i, col in enumerate(numerical_cols):
        # Histogram with KDE
        axes[0, i].hist(df[col].dropna(), bins=30, alpha=0.7, density=True)
        axes[0, i].set_title(f'{col} - Distribution')
        axes[0, i].set_xlabel(col)
        axes[0, i].set_ylabel('Density')

        # Add KDE
        try:
            df[col].dropna().plot.kde(ax=axes[0, i], color='red', linewidth=2)
        except:
            pass

        # Box plot
        axes[1, i].boxplot(df[col].dropna())
        axes[1, i].set_title(f'{col} - Box Plot')
        axes[1, i].set_ylabel(col)

    plt.tight_layout()
    plt.show()

    return desc_stats, additional_stats

num_stats, add_stats = analyze_numerical_variables(df)
\`\`\`

\`\`\`python
def analyze_categorical_variables(df):
    """Comprehensive analysis of categorical variables"""
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns

    if len(categorical_cols) == 0:
        print("No categorical columns found")
        return

    print("=== CATEGORICAL VARIABLES ANALYSIS ===")

    for col in categorical_cols:
        print(f"\\n--- {col.upper()} ---")

        # Value counts
        value_counts = df[col].value_counts()
        value_props = df[col].value_counts(normalize=True) * 100

        summary_df = pd.DataFrame({
            'Count': value_counts,
            'Percentage': value_props
        })
        print(summary_df)

        # Check for high cardinality
        unique_ratio = df[col].nunique() / len(df)
        if unique_ratio > 0.5:
            print(f"⚠️  High cardinality: {df[col].nunique()} unique values ({unique_ratio:.1%})")

    # Visualizations
    n_cols = len(categorical_cols)
    fig, axes = plt.subplots(1, n_cols, figsize=(5*n_cols, 5))
    if n_cols == 1:
        axes = [axes]

    for i, col in enumerate(categorical_cols):
        value_counts = df[col].value_counts()

        if len(value_counts) <= 10:  # Bar plot for few categories
            value_counts.plot(kind='bar', ax=axes[i], rot=45)
            axes[i].set_title(f'{col} - Distribution')
            axes[i].set_ylabel('Count')
        else:  # Show top 10 for many categories
            value_counts.head(10).plot(kind='bar', ax=axes[i], rot=45)
            axes[i].set_title(f'{col} - Top 10 Categories')
            axes[i].set_ylabel('Count')

    plt.tight_layout()
    plt.show()

analyze_categorical_variables(df)
\`\`\`

### Step 3: Bivariate Analysis

\`\`\`python
def correlation_analysis(df):
    """Analyze correlations between numerical variables"""
    numerical_cols = df.select_dtypes(include=[np.number]).columns

    if len(numerical_cols) < 2:
        print("Need at least 2 numerical columns for correlation analysis")
        return

    print("=== CORRELATION ANALYSIS ===")

    # Correlation matrix
    corr_matrix = df[numerical_cols].corr()
    print("\\nCorrelation Matrix:")
    print(corr_matrix.round(3))

    # Find strong correlations
    strong_corr = []
    for i in range(len(corr_matrix.columns)):
        for j in range(i+1, len(corr_matrix.columns)):
            corr_val = corr_matrix.iloc[i, j]
            if abs(corr_val) > 0.5:  # Threshold for strong correlation
                strong_corr.append({
                    'Variable_1': corr_matrix.columns[i],
                    'Variable_2': corr_matrix.columns[j],
                    'Correlation': corr_val
                })

    if strong_corr:
        print("\\nStrong Correlations (|r| > 0.5):")
        strong_corr_df = pd.DataFrame(strong_corr)
        print(strong_corr_df.sort_values('Correlation', key=abs, ascending=False))

    # Visualization
    plt.figure(figsize=(10, 8))
    mask = np.triu(np.ones_like(corr_matrix, dtype=bool))
    sns.heatmap(corr_matrix, mask=mask, annot=True, cmap='coolwarm', center=0,
                square=True, linewidths=0.5, cbar_kws={"shrink": .8})
    plt.title('Correlation Matrix Heatmap')
    plt.tight_layout()
    plt.show()

    return corr_matrix

corr_matrix = correlation_analysis(df)
\`\`\`

\`\`\`python
def categorical_relationships(df):
    """Analyze relationships between categorical variables"""
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns

    if len(categorical_cols) < 2:
        print("Need at least 2 categorical columns for relationship analysis")
        return

    print("=== CATEGORICAL RELATIONSHIPS ===")

    # Chi-square tests for independence
    for i, col1 in enumerate(categorical_cols):
        for col2 in categorical_cols[i+1:]:
            # Create contingency table
            contingency_table = pd.crosstab(df[col1], df[col2])

            # Chi-square test
            chi2, p_value, dof, expected = chi2_contingency(contingency_table)

            print(f"\\n{col1} vs {col2}:")
            print(f"Chi-square statistic: {chi2:.4f}")
            print(f"P-value: {p_value:.4f}")

            if p_value < 0.05:
                print("✅ Significant relationship (p < 0.05)")
            else:
                print("❌ No significant relationship (p >= 0.05)")

            # Visualization
            plt.figure(figsize=(10, 6))

            # Stacked bar chart
            plt.subplot(1, 2, 1)
            contingency_table.plot(kind='bar', stacked=True, ax=plt.gca())
            plt.title(f'{col1} vs {col2} - Stacked Bar')
            plt.xticks(rotation=45)
            plt.legend(title=col2, bbox_to_anchor=(1.05, 1), loc='upper left')

            # Heatmap
            plt.subplot(1, 2, 2)
            sns.heatmap(contingency_table, annot=True, fmt='d', cmap='Blues')
            plt.title(f'{col1} vs {col2} - Contingency Table')

            plt.tight_layout()
            plt.show()

categorical_relationships(df)
\`\`\`

### Step 4: Numerical vs Categorical Analysis

\`\`\`python
def numerical_categorical_analysis(df):
    """Analyze relationships between numerical and categorical variables"""
    numerical_cols = df.select_dtypes(include=[np.number]).columns
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns

    if len(numerical_cols) == 0 or len(categorical_cols) == 0:
        print("Need both numerical and categorical columns")
        return

    print("=== NUMERICAL vs CATEGORICAL ANALYSIS ===")

    for num_col in numerical_cols:
        for cat_col in categorical_cols:
            print(f"\\n--- {num_col} by {cat_col} ---")

            # Group statistics
            group_stats = df.groupby(cat_col)[num_col].agg([
                'count', 'mean', 'median', 'std', 'min', 'max'
            ]).round(3)
            print(group_stats)

            # ANOVA test (if more than 2 groups)
            groups = [group[num_col].dropna() for name, group in df.groupby(cat_col)]
            if len(groups) > 2:
                f_stat, p_value = stats.f_oneway(*groups)
                print(f"\\nANOVA F-statistic: {f_stat:.4f}")
                print(f"P-value: {p_value:.4f}")

                if p_value < 0.05:
                    print("✅ Significant difference between groups (p < 0.05)")
                else:
                    print("❌ No significant difference between groups (p >= 0.05)")

            # Visualizations
            fig, axes = plt.subplots(1, 3, figsize=(15, 5))

            # Box plot
            df.boxplot(column=num_col, by=cat_col, ax=axes[0])
            axes[0].set_title(f'{num_col} by {cat_col}')
            axes[0].set_xlabel(cat_col)

            # Violin plot
            sns.violinplot(data=df, x=cat_col, y=num_col, ax=axes[1])
            axes[1].set_title(f'{num_col} by {cat_col} - Violin Plot')
            axes[1].tick_params(axis='x', rotation=45)

            # Strip plot
            sns.stripplot(data=df, x=cat_col, y=num_col, ax=axes[2], alpha=0.6)
            axes[2].set_title(f'{num_col} by {cat_col} - Strip Plot')
            axes[2].tick_params(axis='x', rotation=45)

            plt.tight_layout()
            plt.show()

numerical_categorical_analysis(df)
\`\`\`

### Step 5: Outlier Detection and Analysis

\`\`\`python
def comprehensive_outlier_analysis(df):
    """Detect and analyze outliers using multiple methods"""
    numerical_cols = df.select_dtypes(include=[np.number]).columns

    if len(numerical_cols) == 0:
        print("No numerical columns for outlier analysis")
        return

    print("=== OUTLIER ANALYSIS ===")

    outlier_summary = {}

    for col in numerical_cols:
        print(f"\\n--- {col.upper()} ---")

        data = df[col].dropna()
        outlier_summary[col] = {}

        # Method 1: IQR Method
        Q1 = data.quantile(0.25)
        Q3 = data.quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR

        iqr_outliers = data[(data < lower_bound) | (data > upper_bound)]
        outlier_summary[col]['IQR'] = len(iqr_outliers)

        print(f"IQR Method: {len(iqr_outliers)} outliers ({len(iqr_outliers)/len(data)*100:.1f}%)")
        print(f"  Bounds: [{lower_bound:.2f}, {upper_bound:.2f}]")

        # Method 2: Z-Score Method
        z_scores = np.abs(stats.zscore(data))
        z_outliers = data[z_scores > 3]
        outlier_summary[col]['Z-Score'] = len(z_outliers)

        print(f"Z-Score Method (|z| > 3): {len(z_outliers)} outliers ({len(z_outliers)/len(data)*100:.1f}%)")

        # Method 3: Modified Z-Score (using median)
        median = np.median(data)
        mad = np.median(np.abs(data - median))
        modified_z_scores = 0.6745 * (data - median) / mad
        modified_z_outliers = data[np.abs(modified_z_scores) > 3.5]
        outlier_summary[col]['Modified Z-Score'] = len(modified_z_outliers)

        print(f"Modified Z-Score Method: {len(modified_z_outliers)} outliers ({len(modified_z_outliers)/len(data)*100:.1f}%)")

        # Visualization
        fig, axes = plt.subplots(1, 3, figsize=(15, 5))

        # Box plot with outliers highlighted
        axes[0].boxplot(data)
        axes[0].set_title(f'{col} - Box Plot')
        axes[0].set_ylabel(col)

        # Histogram with outlier boundaries
        axes[1].hist(data, bins=30, alpha=0.7, edgecolor='black')
        axes[1].axvline(lower_bound, color='red', linestyle='--', label='IQR Lower')
        axes[1].axvline(upper_bound, color='red', linestyle='--', label='IQR Upper')
        axes[1].set_title(f'{col} - Distribution with IQR Bounds')
        axes[1].legend()

        # Scatter plot with outliers highlighted
        y_pos = np.arange(len(data))
        colors = ['red' if (x < lower_bound or x > upper_bound) else 'blue' for x in data]
        axes[2].scatter(data, y_pos, c=colors, alpha=0.6)
        axes[2].set_title(f'{col} - Outliers (Red)')
        axes[2].set_xlabel(col)

        plt.tight_layout()
        plt.show()

    # Summary table
    outlier_df = pd.DataFrame(outlier_summary).T
    print("\\n=== OUTLIER SUMMARY ===")
    print(outlier_df)

    return outlier_summary

outlier_summary = comprehensive_outlier_analysis(df)
\`\`\`

## Advanced EDA Techniques

### Pattern Recognition and Clustering

\`\`\`python
def pattern_recognition_analysis(df):
    """Identify patterns and potential clusters in the data"""
    numerical_cols = df.select_dtypes(include=[np.number]).columns

    if len(numerical_cols) < 2:
        print("Need at least 2 numerical columns for pattern analysis")
        return

    print("=== PATTERN RECOGNITION ===")

    # Pairwise scatter plots
    if len(numerical_cols) <= 5:  # Only for manageable number of variables
        sns.pairplot(df[numerical_cols], diag_kind='hist')
        plt.suptitle('Pairwise Relationships', y=1.02)
        plt.show()

    # Principal Component Analysis for dimensionality reduction
    from sklearn.preprocessing import StandardScaler
    from sklearn.decomposition import PCA

    # Standardize the data
    scaler = StandardScaler()
    scaled_data = scaler.fit_transform(df[numerical_cols].dropna())

    # Apply PCA
    pca = PCA()
    pca_result = pca.fit_transform(scaled_data)

    # Explained variance
    explained_variance = pca.explained_variance_ratio_
    cumulative_variance = np.cumsum(explained_variance)

    print(f"\\nPCA Results:")
    for i, (var, cum_var) in enumerate(zip(explained_variance, cumulative_variance)):
        print(f"PC{i+1}: {var:.3f} ({cum_var:.3f} cumulative)")

    # Plot explained variance
    plt.figure(figsize=(12, 5))

    plt.subplot(1, 2, 1)
    plt.bar(range(1, len(explained_variance)+1), explained_variance)
    plt.title('Explained Variance by Component')
    plt.xlabel('Principal Component')
    plt.ylabel('Explained Variance Ratio')

    plt.subplot(1, 2, 2)
    plt.plot(range(1, len(cumulative_variance)+1), cumulative_variance, 'bo-')
    plt.title('Cumulative Explained Variance')
    plt.xlabel('Number of Components')
    plt.ylabel('Cumulative Explained Variance')
    plt.axhline(y=0.8, color='r', linestyle='--', label='80% threshold')
    plt.legend()

    plt.tight_layout()
    plt.show()

pattern_recognition_analysis(df)
\`\`\`

## EDA Report Generation

\`\`\`python
def generate_eda_report(df):
    """Generate a comprehensive EDA report"""
    report = {
        'dataset_info': {
            'shape': df.shape,
            'memory_usage_mb': df.memory_usage(deep=True).sum() / 1024**2,
            'missing_values': df.isnull().sum().sum(),
            'duplicate_rows': df.duplicated().sum()
        },
        'variable_types': {
            'numerical': list(df.select_dtypes(include=[np.number]).columns),
            'categorical': list(df.select_dtypes(include=['object', 'category']).columns),
            'datetime': list(df.select_dtypes(include=['datetime64']).columns)
        },
        'data_quality': {
            'completeness': (1 - df.isnull().sum().sum() / (df.shape[0] * df.shape[1])) * 100,
            'uniqueness': (1 - df.duplicated().sum() / df.shape[0]) * 100
        }
    }

    print("=== EDA SUMMARY REPORT ===")
    print(f"Dataset Shape: {report['dataset_info']['shape']}")
    print(f"Memory Usage: {report['dataset_info']['memory_usage_mb']:.2f} MB")
    print(f"Missing Values: {report['dataset_info']['missing_values']}")
    print(f"Duplicate Rows: {report['dataset_info']['duplicate_rows']}")
    print(f"Data Completeness: {report['data_quality']['completeness']:.1f}%")
    print(f"Data Uniqueness: {report['data_quality']['uniqueness']:.1f}%")

    print(f"\\nVariable Types:")
    print(f"  Numerical: {len(report['variable_types']['numerical'])}")
    print(f"  Categorical: {len(report['variable_types']['categorical'])}")
    print(f"  Datetime: {len(report['variable_types']['datetime'])}")

    return report

eda_report = generate_eda_report(df)
\`\`\`

## Key Insights and Next Steps

After completing EDA, you should be able to answer:

1. **What is the structure of your data?**
2. **What are the key patterns and relationships?**
3. **Are there any data quality issues?**
4. **What variables are most important?**
5. **What hypotheses can you form?**
6. **What preprocessing steps are needed?**

**Remember**: EDA is an iterative process. As you discover new insights, you may need to go back and explore different aspects of your data. The goal is to understand your data thoroughly before moving to modeling!`
      }
    ]
  },
  'ds-ml-fundamentals': {
    title: 'Machine Learning Fundamentals',
    description: 'Core concepts and algorithms in machine learning',
    sections: [
      {
        id: 'ml-basics',
        title: 'Machine Learning: From Theory to Practice',
        content: `# Machine Learning: From Theory to Practice

## What is Machine Learning?

Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every scenario. Instead of following pre-programmed instructions, ML algorithms build mathematical models based on training data to make predictions or decisions.

### Types of Machine Learning

**1. Supervised Learning**
- **Definition**: Learning with labeled examples
- **Goal**: Predict outcomes for new, unseen data
- **Examples**: Email spam detection, house price prediction, medical diagnosis
- **Algorithms**: Linear Regression, Decision Trees, Random Forest, SVM

**2. Unsupervised Learning**
- **Definition**: Finding patterns in data without labels
- **Goal**: Discover hidden structures in data
- **Examples**: Customer segmentation, anomaly detection, data compression
- **Algorithms**: K-Means Clustering, PCA, DBSCAN

**3. Reinforcement Learning**
- **Definition**: Learning through interaction and feedback
- **Goal**: Maximize cumulative reward over time
- **Examples**: Game playing (Chess, Go), robotics, autonomous vehicles
- **Algorithms**: Q-Learning, Policy Gradient, Actor-Critic

## The Machine Learning Workflow

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.metrics import mean_squared_error, r2_score
import warnings
warnings.filterwarnings('ignore')

# Step 1: Load and explore data
# Using Boston Housing dataset for regression example
from sklearn.datasets import load_boston
boston = load_boston()
X, y = boston.data, boston.target
feature_names = boston.feature_names

# Create DataFrame
df = pd.DataFrame(X, columns=feature_names)
df['price'] = y

print("Dataset shape:", df.shape)
print("\\nFirst few rows:")
print(df.head())
\`\`\`

### Step 1: Problem Definition and Data Understanding

\`\`\`python
def define_ml_problem(df, target_column):
    """Define the machine learning problem type"""

    print("=== PROBLEM DEFINITION ===")

    # Analyze target variable
    target = df[target_column]

    # Determine problem type
    if target.dtype in ['int64', 'float64']:
        unique_values = target.nunique()
        if unique_values > 20:
            problem_type = "Regression"
            print(f"Problem Type: {problem_type}")
            print(f"Target variable: Continuous ({unique_values} unique values)")
            print(f"Range: {target.min():.2f} to {target.max():.2f}")
        else:
            problem_type = "Classification"
            print(f"Problem Type: {problem_type}")
            print(f"Target variable: Discrete ({unique_values} classes)")
            print(f"Classes: {sorted(target.unique())}")
    else:
        problem_type = "Classification"
        print(f"Problem Type: {problem_type}")
        print(f"Target variable: Categorical ({target.nunique()} classes)")
        print(f"Classes: {target.unique()}")

    # Target distribution
    plt.figure(figsize=(12, 4))

    if problem_type == "Regression":
        plt.subplot(1, 2, 1)
        plt.hist(target, bins=30, alpha=0.7, edgecolor='black')
        plt.title('Target Distribution')
        plt.xlabel(target_column)
        plt.ylabel('Frequency')

        plt.subplot(1, 2, 2)
        plt.boxplot(target)
        plt.title('Target Box Plot')
        plt.ylabel(target_column)
    else:
        plt.subplot(1, 2, 1)
        target.value_counts().plot(kind='bar')
        plt.title('Target Distribution')
        plt.xlabel(target_column)
        plt.ylabel('Count')
        plt.xticks(rotation=45)

        plt.subplot(1, 2, 2)
        target.value_counts().plot(kind='pie', autopct='%1.1f%%')
        plt.title('Target Proportion')

    plt.tight_layout()
    plt.show()

    return problem_type

problem_type = define_ml_problem(df, 'price')
\`\`\`

### Step 2: Data Preprocessing

\`\`\`python
def preprocess_data(df, target_column):
    """Comprehensive data preprocessing"""

    print("=== DATA PREPROCESSING ===")

    # Separate features and target
    X = df.drop(columns=[target_column])
    y = df[target_column]

    print(f"Features: {X.shape[1]}")
    print(f"Samples: {X.shape[0]}")

    # Handle missing values
    missing_features = X.isnull().sum()
    if missing_features.sum() > 0:
        print(f"\\nMissing values found:")
        print(missing_features[missing_features > 0])

        # Simple imputation strategy
        for col in X.columns:
            if X[col].isnull().sum() > 0:
                if X[col].dtype in ['int64', 'float64']:
                    X[col].fillna(X[col].median(), inplace=True)
                else:
                    X[col].fillna(X[col].mode()[0], inplace=True)

    # Handle categorical variables
    categorical_features = X.select_dtypes(include=['object']).columns
    if len(categorical_features) > 0:
        print(f"\\nCategorical features: {list(categorical_features)}")

        # One-hot encoding for categorical variables
        X = pd.get_dummies(X, columns=categorical_features, drop_first=True)
        print(f"After encoding: {X.shape[1]} features")

    # Feature scaling (important for many algorithms)
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    X_scaled = pd.DataFrame(X_scaled, columns=X.columns)

    print(f"\\nData preprocessing completed!")
    print(f"Final feature matrix shape: {X_scaled.shape}")

    return X_scaled, y, scaler

X_processed, y, scaler = preprocess_data(df, 'price')
\`\`\`

### Step 3: Train-Test Split

\`\`\`python
def create_train_test_split(X, y, test_size=0.2, random_state=42):
    """Create train-test split with proper validation"""

    print("=== TRAIN-TEST SPLIT ===")

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=random_state, stratify=None
    )

    print(f"Training set: {X_train.shape[0]} samples")
    print(f"Test set: {X_test.shape[0]} samples")
    print(f"Test size: {test_size*100}%")

    # Check distribution balance
    print(f"\\nTarget distribution:")
    print(f"Training set - Mean: {y_train.mean():.2f}, Std: {y_train.std():.2f}")
    print(f"Test set - Mean: {y_test.mean():.2f}, Std: {y_test.std():.2f}")

    return X_train, X_test, y_train, y_test

X_train, X_test, y_train, y_test = create_train_test_split(X_processed, y)
\`\`\`

### Step 4: Model Selection and Training

\`\`\`python
def train_multiple_models(X_train, y_train, problem_type):
    """Train multiple models and compare performance"""

    print("=== MODEL TRAINING ===")

    models = {}

    if problem_type == "Regression":
        from sklearn.linear_model import LinearRegression, Ridge, Lasso
        from sklearn.tree import DecisionTreeRegressor
        from sklearn.ensemble import RandomForestRegressor

        models = {
            'Linear Regression': LinearRegression(),
            'Ridge Regression': Ridge(alpha=1.0),
            'Lasso Regression': Lasso(alpha=1.0),
            'Decision Tree': DecisionTreeRegressor(random_state=42),
            'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42)
        }

        scoring = 'neg_mean_squared_error'

    else:  # Classification
        from sklearn.linear_model import LogisticRegression
        from sklearn.tree import DecisionTreeClassifier
        from sklearn.ensemble import RandomForestClassifier
        from sklearn.svm import SVC

        models = {
            'Logistic Regression': LogisticRegression(random_state=42),
            'Decision Tree': DecisionTreeClassifier(random_state=42),
            'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
            'SVM': SVC(random_state=42)
        }

        scoring = 'accuracy'

    # Train models and evaluate with cross-validation
    model_scores = {}
    trained_models = {}

    for name, model in models.items():
        print(f"\\nTraining {name}...")

        # Cross-validation
        cv_scores = cross_val_score(model, X_train, y_train, cv=5, scoring=scoring)
        model_scores[name] = cv_scores

        # Train on full training set
        model.fit(X_train, y_train)
        trained_models[name] = model

        print(f"CV Score: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")

    # Compare models
    print(f"\\n=== MODEL COMPARISON ===")
    comparison_df = pd.DataFrame({
        name: scores for name, scores in model_scores.items()
    })

    print("Cross-validation scores:")
    print(comparison_df.describe())

    # Visualization
    plt.figure(figsize=(12, 6))
    comparison_df.boxplot()
    plt.title('Model Comparison (Cross-Validation Scores)')
    plt.ylabel(scoring)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

    return trained_models, model_scores

trained_models, model_scores = train_multiple_models(X_train, y_train, problem_type)
\`\`\`

### Step 5: Model Evaluation

\`\`\`python
def evaluate_models(trained_models, X_test, y_test, problem_type):
    """Comprehensive model evaluation"""

    print("=== MODEL EVALUATION ===")

    results = {}

    for name, model in trained_models.items():
        print(f"\\n--- {name} ---")

        # Make predictions
        y_pred = model.predict(X_test)

        if problem_type == "Regression":
            # Regression metrics
            mse = mean_squared_error(y_test, y_pred)
            rmse = np.sqrt(mse)
            r2 = r2_score(y_test, y_pred)

            results[name] = {
                'MSE': mse,
                'RMSE': rmse,
                'R²': r2
            }

            print(f"MSE: {mse:.4f}")
            print(f"RMSE: {rmse:.4f}")
            print(f"R²: {r2:.4f}")

        else:  # Classification
            # Classification metrics
            accuracy = accuracy_score(y_test, y_pred)

            results[name] = {
                'Accuracy': accuracy
            }

            print(f"Accuracy: {accuracy:.4f}")
            print("\\nClassification Report:")
            print(classification_report(y_test, y_pred))

    # Results summary
    results_df = pd.DataFrame(results).T
    print(f"\\n=== RESULTS SUMMARY ===")
    print(results_df)

    # Find best model
    if problem_type == "Regression":
        best_model_name = results_df['R²'].idxmax()
        print(f"\\nBest model: {best_model_name} (R² = {results_df.loc[best_model_name, 'R²']:.4f})")
    else:
        best_model_name = results_df['Accuracy'].idxmax()
        print(f"\\nBest model: {best_model_name} (Accuracy = {results_df.loc[best_model_name, 'Accuracy']:.4f})")

    return results_df, best_model_name

results_df, best_model_name = evaluate_models(trained_models, X_test, y_test, problem_type)
\`\`\`

### Step 6: Model Interpretation

\`\`\`python
def interpret_model(model, feature_names, model_name):
    """Interpret model results"""

    print(f"=== MODEL INTERPRETATION: {model_name} ===")

    # Feature importance (for tree-based models)
    if hasattr(model, 'feature_importances_'):
        importance_df = pd.DataFrame({
            'feature': feature_names,
            'importance': model.feature_importances_
        }).sort_values('importance', ascending=False)

        print("\\nTop 10 Most Important Features:")
        print(importance_df.head(10))

        # Visualization
        plt.figure(figsize=(10, 6))
        top_features = importance_df.head(10)
        plt.barh(range(len(top_features)), top_features['importance'])
        plt.yticks(range(len(top_features)), top_features['feature'])
        plt.xlabel('Feature Importance')
        plt.title(f'Feature Importance - {model_name}')
        plt.gca().invert_yaxis()
        plt.tight_layout()
        plt.show()

    # Coefficients (for linear models)
    elif hasattr(model, 'coef_'):
        coef_df = pd.DataFrame({
            'feature': feature_names,
            'coefficient': model.coef_
        }).sort_values('coefficient', key=abs, ascending=False)

        print("\\nTop 10 Features by Coefficient Magnitude:")
        print(coef_df.head(10))

        # Visualization
        plt.figure(figsize=(10, 6))
        top_coefs = coef_df.head(10)
        colors = ['red' if x < 0 else 'blue' for x in top_coefs['coefficient']]
        plt.barh(range(len(top_coefs)), top_coefs['coefficient'], color=colors)
        plt.yticks(range(len(top_coefs)), top_coefs['feature'])
        plt.xlabel('Coefficient Value')
        plt.title(f'Feature Coefficients - {model_name}')
        plt.gca().invert_yaxis()
        plt.tight_layout()
        plt.show()

# Interpret the best model
best_model = trained_models[best_model_name]
interpret_model(best_model, X_processed.columns, best_model_name)
\`\`\`

## Key Machine Learning Concepts

### Bias-Variance Tradeoff

\`\`\`python
def demonstrate_bias_variance_tradeoff():
    """Demonstrate bias-variance tradeoff with polynomial regression"""

    print("=== BIAS-VARIANCE TRADEOFF ===")

    # Generate synthetic data
    np.random.seed(42)
    X_demo = np.linspace(0, 1, 100).reshape(-1, 1)
    y_true = 1.5 * X_demo.ravel() + 0.5 * np.sin(2 * np.pi * X_demo.ravel())
    y_demo = y_true + np.random.normal(0, 0.1, X_demo.shape[0])

    # Test different polynomial degrees
    degrees = [1, 3, 9, 15]

    plt.figure(figsize=(15, 10))

    for i, degree in enumerate(degrees):
        plt.subplot(2, 2, i+1)

        # Fit polynomial
        from sklearn.preprocessing import PolynomialFeatures
        from sklearn.pipeline import Pipeline

        poly_model = Pipeline([
            ('poly', PolynomialFeatures(degree=degree)),
            ('linear', LinearRegression())
        ])

        poly_model.fit(X_demo, y_demo)

        # Predictions
        X_plot = np.linspace(0, 1, 300).reshape(-1, 1)
        y_plot = poly_model.predict(X_plot)

        # Plot
        plt.scatter(X_demo, y_demo, alpha=0.6, label='Data')
        plt.plot(X_plot, y_plot, color='red', linewidth=2, label=f'Degree {degree}')
        plt.plot(X_plot, 1.5 * X_plot.ravel() + 0.5 * np.sin(2 * np.pi * X_plot.ravel()),
                color='green', linewidth=2, label='True function')

        plt.title(f'Polynomial Degree {degree}')
        plt.legend()

        # Calculate training error
        train_error = mean_squared_error(y_demo, poly_model.predict(X_demo))
        plt.text(0.05, 0.95, f'Train MSE: {train_error:.4f}',
                transform=plt.gca().transAxes, verticalalignment='top')

    plt.tight_layout()
    plt.show()

    print("Observations:")
    print("- Low degree (high bias): Underfitting, simple model")
    print("- High degree (high variance): Overfitting, complex model")
    print("- Optimal degree: Balance between bias and variance")

demonstrate_bias_variance_tradeoff()
\`\`\`

### Cross-Validation Strategies

\`\`\`python
def demonstrate_cross_validation():
    """Demonstrate different cross-validation strategies"""

    print("=== CROSS-VALIDATION STRATEGIES ===")

    from sklearn.model_selection import KFold, StratifiedKFold, TimeSeriesSplit

    # Create sample data
    X_cv = np.random.randn(100, 5)
    y_cv = np.random.randint(0, 3, 100)  # 3 classes

    cv_strategies = {
        'K-Fold (k=5)': KFold(n_splits=5, shuffle=True, random_state=42),
        'Stratified K-Fold': StratifiedKFold(n_splits=5, shuffle=True, random_state=42),
        'Time Series Split': TimeSeriesSplit(n_splits=5)
    }

    fig, axes = plt.subplots(1, 3, figsize=(15, 5))

    for i, (name, cv) in enumerate(cv_strategies.items()):
        train_indices = []
        test_indices = []

        for train_idx, test_idx in cv.split(X_cv, y_cv):
            train_indices.append(train_idx)
            test_indices.append(test_idx)

        # Visualize splits
        for fold, (train_idx, test_idx) in enumerate(zip(train_indices, test_indices)):
            axes[i].scatter(train_idx, [fold] * len(train_idx),
                          c='blue', alpha=0.6, s=10, label='Train' if fold == 0 else "")
            axes[i].scatter(test_idx, [fold] * len(test_idx),
                          c='red', alpha=0.6, s=10, label='Test' if fold == 0 else "")

        axes[i].set_title(name)
        axes[i].set_xlabel('Sample Index')
        axes[i].set_ylabel('Fold')
        if i == 0:
            axes[i].legend()

    plt.tight_layout()
    plt.show()

    print("When to use each strategy:")
    print("- K-Fold: General purpose, balanced datasets")
    print("- Stratified K-Fold: Imbalanced classification problems")
    print("- Time Series Split: Time-dependent data")

demonstrate_cross_validation()
\`\`\`

## Best Practices and Common Pitfalls

### 1. Data Leakage Prevention

\`\`\`python
def demonstrate_data_leakage():
    """Show examples of data leakage and how to prevent it"""

    print("=== DATA LEAKAGE PREVENTION ===")

    # Example: Feature scaling before train-test split (WRONG)
    print("❌ WRONG: Scaling before split")
    X_wrong = StandardScaler().fit_transform(X_processed)
    X_train_wrong, X_test_wrong, y_train_wrong, y_test_wrong = train_test_split(
        X_wrong, y, test_size=0.2, random_state=42
    )

    # Example: Feature scaling after train-test split (CORRECT)
    print("✅ CORRECT: Scaling after split")
    X_train_right, X_test_right, y_train_right, y_test_right = train_test_split(
        X_processed, y, test_size=0.2, random_state=42
    )

    scaler_right = StandardScaler()
    X_train_right_scaled = scaler_right.fit_transform(X_train_right)
    X_test_right_scaled = scaler_right.transform(X_test_right)  # Only transform, don't fit!

    print("\\nKey points:")
    print("- Never fit preprocessing on the entire dataset")
    print("- Fit on training data, transform on test data")
    print("- Be careful with feature selection and engineering")

demonstrate_data_leakage()
\`\`\`

### 2. Model Selection Guidelines

\`\`\`python
def model_selection_guide():
    """Provide guidelines for model selection"""

    print("=== MODEL SELECTION GUIDE ===")

    guidelines = {
        "Linear Models": {
            "Best for": ["Linear relationships", "High interpretability needed", "Small datasets"],
            "Examples": ["Linear/Logistic Regression", "Ridge", "Lasso"],
            "Pros": ["Fast", "Interpretable", "No hyperparameter tuning"],
            "Cons": ["Assumes linearity", "May underfit complex data"]
        },
        "Tree-based Models": {
            "Best for": ["Non-linear relationships", "Mixed data types", "Feature interactions"],
            "Examples": ["Decision Trees", "Random Forest", "XGBoost"],
            "Pros": ["Handle non-linearity", "Feature importance", "Robust to outliers"],
            "Cons": ["Can overfit", "Less interpretable (ensembles)"]
        },
        "Instance-based Models": {
            "Best for": ["Local patterns", "Irregular decision boundaries"],
            "Examples": ["k-NN", "SVM"],
            "Pros": ["Simple concept", "No assumptions about data"],
            "Cons": ["Computationally expensive", "Sensitive to irrelevant features"]
        }
    }

    for model_type, info in guidelines.items():
        print(f"\\n{model_type}:")
        for key, values in info.items():
            print(f"  {key}: {', '.join(values)}")

model_selection_guide()
\`\`\`

## Next Steps

After mastering ML fundamentals, you're ready to:

1. **Supervised Learning Deep Dive** - Master classification and regression algorithms
2. **Unsupervised Learning** - Explore clustering and dimensionality reduction
3. **Feature Engineering** - Create better features for improved performance
4. **Hyperparameter Tuning** - Optimize model performance
5. **Ensemble Methods** - Combine multiple models for better results

**Remember**: Machine learning is both an art and a science. Understanding the theory is important, but practical experience with real datasets is what makes you proficient!`
      }
    ]
  },
  'ds-supervised-learning': {
    title: 'Supervised Learning',
    description: 'Classification and regression algorithms',
    sections: [
      {
        id: 'supervised-algorithms',
        title: 'Supervised Learning: Mastering Prediction',
        content: `# Supervised Learning: Mastering Prediction

Supervised learning is the most common type of machine learning, where we learn from labeled examples to make predictions on new, unseen data. This comprehensive guide covers the essential algorithms and techniques you need to master.

## Classification Algorithms

### Logistic Regression
Perfect for binary and multiclass classification with interpretable results.

\`\`\`python
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix

# Create sample data
X, y = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train logistic regression
log_reg = LogisticRegression(random_state=42)
log_reg.fit(X_train, y_train)

# Predictions and evaluation
y_pred = log_reg.predict(X_test)
print("Classification Report:")
print(classification_report(y_test, y_pred))
\`\`\`

### Decision Trees
Intuitive algorithm that creates interpretable rules for classification.

\`\`\`python
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Train decision tree
dt_classifier = DecisionTreeClassifier(max_depth=5, random_state=42)
dt_classifier.fit(X_train, y_train)

# Visualize the tree
plt.figure(figsize=(15, 10))
plot_tree(dt_classifier, max_depth=3, filled=True, feature_names=[f'Feature_{i}' for i in range(X.shape[1])])
plt.title('Decision Tree Visualization')
plt.show()
\`\`\`

### Random Forest
Ensemble method that combines multiple decision trees for better performance.

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

# Train random forest
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
rf_classifier.fit(X_train, y_train)

# Feature importance
feature_importance = rf_classifier.feature_importances_
plt.figure(figsize=(10, 6))
plt.bar(range(len(feature_importance)), feature_importance)
plt.title('Feature Importance - Random Forest')
plt.xlabel('Feature Index')
plt.ylabel('Importance')
plt.show()
\`\`\`

### Support Vector Machines (SVM)
Powerful algorithm for both linear and non-linear classification.

\`\`\`python
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler

# Scale features (important for SVM)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train SVM with different kernels
svm_linear = SVC(kernel='linear', random_state=42)
svm_rbf = SVC(kernel='rbf', random_state=42)

svm_linear.fit(X_train_scaled, y_train)
svm_rbf.fit(X_train_scaled, y_train)

print(f"Linear SVM Accuracy: {svm_linear.score(X_test_scaled, y_test):.4f}")
print(f"RBF SVM Accuracy: {svm_rbf.score(X_test_scaled, y_test):.4f}")
\`\`\`

## Regression Algorithms

### Linear Regression
Foundation of regression analysis for continuous target variables.

\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.datasets import make_regression
from sklearn.metrics import mean_squared_error, r2_score

# Create regression data
X_reg, y_reg = make_regression(n_samples=1000, n_features=10, noise=0.1, random_state=42)
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(X_reg, y_reg, test_size=0.2, random_state=42)

# Train linear regression
lin_reg = LinearRegression()
lin_reg.fit(X_train_reg, y_train_reg)

# Predictions and evaluation
y_pred_reg = lin_reg.predict(X_test_reg)
mse = mean_squared_error(y_test_reg, y_pred_reg)
r2 = r2_score(y_test_reg, y_pred_reg)

print(f"MSE: {mse:.4f}")
print(f"R² Score: {r2:.4f}")
\`\`\`

### Regularized Regression (Ridge & Lasso)
Prevent overfitting with regularization techniques.

\`\`\`python
from sklearn.linear_model import Ridge, Lasso
from sklearn.model_selection import GridSearchCV

# Ridge Regression (L2 regularization)
ridge = Ridge()
ridge_params = {'alpha': [0.1, 1.0, 10.0, 100.0]}
ridge_grid = GridSearchCV(ridge, ridge_params, cv=5, scoring='r2')
ridge_grid.fit(X_train_reg, y_train_reg)

# Lasso Regression (L1 regularization)
lasso = Lasso()
lasso_params = {'alpha': [0.1, 1.0, 10.0, 100.0]}
lasso_grid = GridSearchCV(lasso, lasso_params, cv=5, scoring='r2')
lasso_grid.fit(X_train_reg, y_train_reg)

print(f"Best Ridge Alpha: {ridge_grid.best_params_['alpha']}")
print(f"Best Lasso Alpha: {lasso_grid.best_params_['alpha']}")
\`\`\`

## Model Evaluation and Selection

### Cross-Validation Strategies
\`\`\`python
from sklearn.model_selection import cross_val_score, StratifiedKFold

# Compare multiple algorithms
algorithms = {
    'Logistic Regression': LogisticRegression(random_state=42),
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Random Forest': RandomForestClassifier(random_state=42),
    'SVM': SVC(random_state=42)
}

cv_results = {}
for name, algorithm in algorithms.items():
    cv_scores = cross_val_score(algorithm, X_train_scaled, y_train, cv=5, scoring='accuracy')
    cv_results[name] = cv_scores
    print(f"{name}: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")
\`\`\`

### Hyperparameter Tuning
\`\`\`python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

# Random Forest hyperparameter tuning
rf_params = {
    'n_estimators': randint(50, 200),
    'max_depth': randint(3, 20),
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10)
}

rf_random = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    rf_params,
    n_iter=50,
    cv=5,
    scoring='accuracy',
    random_state=42
)

rf_random.fit(X_train, y_train)
print(f"Best parameters: {rf_random.best_params_}")
print(f"Best cross-validation score: {rf_random.best_score_:.4f}")
\`\`\`

## Advanced Techniques

### Ensemble Methods
\`\`\`python
from sklearn.ensemble import VotingClassifier, BaggingClassifier, AdaBoostClassifier

# Voting Classifier
voting_clf = VotingClassifier(
    estimators=[
        ('lr', LogisticRegression(random_state=42)),
        ('dt', DecisionTreeClassifier(random_state=42)),
        ('rf', RandomForestClassifier(random_state=42))
    ],
    voting='soft'
)

voting_clf.fit(X_train_scaled, y_train)
voting_score = voting_clf.score(X_test_scaled, y_test)
print(f"Voting Classifier Accuracy: {voting_score:.4f}")

# AdaBoost
ada_boost = AdaBoostClassifier(n_estimators=100, random_state=42)
ada_boost.fit(X_train, y_train)
ada_score = ada_boost.score(X_test, y_test)
print(f"AdaBoost Accuracy: {ada_score:.4f}")
\`\`\`

### Feature Selection
\`\`\`python
from sklearn.feature_selection import SelectKBest, f_classif, RFE

# Univariate feature selection
selector = SelectKBest(score_func=f_classif, k=10)
X_train_selected = selector.fit_transform(X_train, y_train)
X_test_selected = selector.transform(X_test)

# Recursive Feature Elimination
rfe = RFE(estimator=RandomForestClassifier(random_state=42), n_features_to_select=10)
X_train_rfe = rfe.fit_transform(X_train, y_train)
X_test_rfe = rfe.transform(X_test)

print(f"Selected features (SelectKBest): {selector.get_support().sum()}")
print(f"Selected features (RFE): {rfe.support_.sum()}")
\`\`\`

## Real-World Application Example

\`\`\`python
# Complete pipeline for a classification problem
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV

# Create a complete pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(random_state=42))
])

# Define parameter grid
param_grid = {
    'classifier__n_estimators': [50, 100, 200],
    'classifier__max_depth': [5, 10, None],
    'classifier__min_samples_split': [2, 5, 10]
}

# Grid search with cross-validation
grid_search = GridSearchCV(
    pipeline,
    param_grid,
    cv=5,
    scoring='accuracy',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)

# Final evaluation
final_score = grid_search.score(X_test, y_test)
print(f"Final model accuracy: {final_score:.4f}")
print(f"Best parameters: {grid_search.best_params_}")
\`\`\`

## Best Practices

1. **Always split your data properly** - Train/validation/test sets
2. **Scale your features** - Especially for distance-based algorithms
3. **Use cross-validation** - Get reliable performance estimates
4. **Tune hyperparameters** - Optimize model performance
5. **Evaluate multiple metrics** - Don't rely on accuracy alone
6. **Consider ensemble methods** - Often provide better performance
7. **Validate on unseen data** - Final test set should be truly unseen

**Next Steps**: Master unsupervised learning, deep learning, and specialized domains like NLP and computer vision!`
      }
    ]
  },
  'ds-unsupervised-learning': {
    title: 'Unsupervised Learning',
    description: 'Clustering and dimensionality reduction',
    sections: [
      {
        id: 'unsupervised-algorithms',
        title: 'Unsupervised Learning: Finding Hidden Patterns',
        content: `# Unsupervised Learning: Finding Hidden Patterns

Unsupervised learning discovers hidden patterns in data without labeled examples. This guide covers clustering, dimensionality reduction, and anomaly detection techniques.

## Clustering Algorithms

### K-Means Clustering
\`\`\`python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Apply K-Means
kmeans = KMeans(n_clusters=4, random_state=42)
clusters = kmeans.fit_predict(X)

# Visualize results
plt.figure(figsize=(10, 6))
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis', alpha=0.6)
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],
           c='red', marker='x', s=200, linewidths=3)
plt.title('K-Means Clustering')
plt.show()
\`\`\`

### Hierarchical Clustering
\`\`\`python
from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage

# Hierarchical clustering
hierarchical = AgglomerativeClustering(n_clusters=4)
clusters_hier = hierarchical.fit_predict(X)

# Create dendrogram
linkage_matrix = linkage(X, method='ward')
plt.figure(figsize=(12, 8))
dendrogram(linkage_matrix)
plt.title('Hierarchical Clustering Dendrogram')
plt.show()
\`\`\`

### DBSCAN
\`\`\`python
from sklearn.cluster import DBSCAN

# DBSCAN clustering
dbscan = DBSCAN(eps=0.5, min_samples=5)
clusters_dbscan = dbscan.fit_predict(X)

plt.figure(figsize=(10, 6))
plt.scatter(X[:, 0], X[:, 1], c=clusters_dbscan, cmap='viridis', alpha=0.6)
plt.title('DBSCAN Clustering')
plt.show()
\`\`\`

## Dimensionality Reduction

### Principal Component Analysis (PCA)
\`\`\`python
from sklearn.decomposition import PCA
from sklearn.datasets import load_iris

# Load iris dataset
iris = load_iris()
X_iris = iris.data

# Apply PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_iris)

# Visualize
plt.figure(figsize=(10, 6))
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=iris.target, cmap='viridis')
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.2%} variance)')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.2%} variance)')
plt.title('PCA of Iris Dataset')
plt.colorbar()
plt.show()
\`\`\`

### t-SNE
\`\`\`python
from sklearn.manifold import TSNE

# Apply t-SNE
tsne = TSNE(n_components=2, random_state=42)
X_tsne = tsne.fit_transform(X_iris)

plt.figure(figsize=(10, 6))
plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=iris.target, cmap='viridis')
plt.title('t-SNE of Iris Dataset')
plt.colorbar()
plt.show()
\`\`\`

## Anomaly Detection

### Isolation Forest
\`\`\`python
from sklearn.ensemble import IsolationForest

# Generate data with outliers
np.random.seed(42)
X_normal = np.random.normal(0, 1, (100, 2))
X_outliers = np.random.uniform(-4, 4, (10, 2))
X_combined = np.vstack([X_normal, X_outliers])

# Apply Isolation Forest
iso_forest = IsolationForest(contamination=0.1, random_state=42)
outliers = iso_forest.fit_predict(X_combined)

plt.figure(figsize=(10, 6))
plt.scatter(X_combined[:, 0], X_combined[:, 1], c=outliers, cmap='coolwarm')
plt.title('Anomaly Detection with Isolation Forest')
plt.show()
\`\`\`

**Applications**: Customer segmentation, data compression, anomaly detection, exploratory data analysis, and feature engineering.`
      }
    ]
  },
  'ds-deep-learning': {
    title: 'Deep Learning & Neural Networks',
    description: 'Build and train neural networks for complex problems',
    sections: [
      {
        id: 'neural-networks',
        title: 'Deep Learning: Neural Networks Mastery',
        content: `# Deep Learning: Neural Networks Mastery

Deep learning uses artificial neural networks with multiple layers to learn complex patterns in data. This guide covers neural network fundamentals and practical implementation.

## Neural Network Fundamentals

### Basic Neural Network
\`\`\`python
import tensorflow as tf
from tensorflow import keras
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Generate sample data
X, y = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Build neural network
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(20,)),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(1, activation='sigmoid')
])

# Compile model
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# Train model
history = model.fit(X_train_scaled, y_train,
                    epochs=50,
                    batch_size=32,
                    validation_split=0.2,
                    verbose=0)

# Evaluate
test_loss, test_accuracy = model.evaluate(X_test_scaled, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy:.4f}")
\`\`\`

### Convolutional Neural Networks (CNNs)
\`\`\`python
# CNN for image classification
from tensorflow.keras.datasets import cifar10
from tensorflow.keras.utils import to_categorical

# Load CIFAR-10 data
(X_train_img, y_train_img), (X_test_img, y_test_img) = cifar10.load_data()

# Preprocess data
X_train_img = X_train_img.astype('float32') / 255.0
X_test_img = X_test_img.astype('float32') / 255.0
y_train_img = to_categorical(y_train_img, 10)
y_test_img = to_categorical(y_test_img, 10)

# Build CNN
cnn_model = keras.Sequential([
    keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.Flatten(),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

cnn_model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])

# Train CNN (reduced epochs for demo)
cnn_history = cnn_model.fit(X_train_img[:1000], y_train_img[:1000],
                           epochs=5,
                           batch_size=32,
                           validation_split=0.2,
                           verbose=0)
\`\`\`

### Recurrent Neural Networks (RNNs)
\`\`\`python
# RNN for sequence prediction
from tensorflow.keras.layers import LSTM, SimpleRNN

# Generate sequence data
def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:(i + seq_length)])
        y.append(data[i + seq_length])
    return np.array(X), np.array(y)

# Sample time series data
time_series = np.sin(np.linspace(0, 100, 1000))
X_seq, y_seq = create_sequences(time_series, 10)

# Build LSTM model
lstm_model = keras.Sequential([
    keras.layers.LSTM(50, return_sequences=True, input_shape=(10, 1)),
    keras.layers.LSTM(50),
    keras.layers.Dense(1)
])

lstm_model.compile(optimizer='adam', loss='mse')

# Reshape data for LSTM
X_seq = X_seq.reshape((X_seq.shape[0], X_seq.shape[1], 1))

# Train LSTM
lstm_model.fit(X_seq[:800], y_seq[:800], epochs=20, verbose=0)
\`\`\`

## Transfer Learning
\`\`\`python
# Transfer learning with pre-trained models
from tensorflow.keras.applications import VGG16
from tensorflow.keras.layers import GlobalAveragePooling2D

# Load pre-trained VGG16
base_model = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
base_model.trainable = False

# Add custom layers
transfer_model = keras.Sequential([
    base_model,
    GlobalAveragePooling2D(),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.5),
    keras.layers.Dense(10, activation='softmax')
])

transfer_model.compile(optimizer='adam',
                      loss='categorical_crossentropy',
                      metrics=['accuracy'])
\`\`\`

**Applications**: Image recognition, natural language processing, speech recognition, autonomous vehicles, and game playing.`
      }
    ]
  },
  'ds-nlp': {
    title: 'Natural Language Processing',
    description: 'Process and analyze text data',
    sections: [
      {
        id: 'nlp-fundamentals',
        title: 'NLP: Understanding Human Language',
        content: `# NLP: Understanding Human Language

Natural Language Processing enables computers to understand, interpret, and generate human language. This guide covers text preprocessing, analysis, and modern NLP techniques.

## Text Preprocessing
\`\`\`python
import nltk
import spacy
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report
import re

# Download required NLTK data
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# Sample text data
texts = [
    "I love this movie! It's amazing.",
    "This film is terrible. I hate it.",
    "Great acting and wonderful story.",
    "Boring and poorly written.",
    "Excellent cinematography and direction."
]
labels = [1, 0, 1, 0, 1]  # 1: positive, 0: negative

def preprocess_text(text):
    # Convert to lowercase
    text = text.lower()

    # Remove special characters and digits
    text = re.sub(r'[^a-zA-Z\\s]', '', text)

    # Tokenization
    tokens = nltk.word_tokenize(text)

    # Remove stopwords
    stop_words = set(nltk.corpus.stopwords.words('english'))
    tokens = [token for token in tokens if token not in stop_words]

    # Lemmatization
    lemmatizer = nltk.WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]

    return ' '.join(tokens)

# Preprocess texts
processed_texts = [preprocess_text(text) for text in texts]
print("Processed texts:", processed_texts)
\`\`\`

## Feature Extraction
\`\`\`python
# TF-IDF Vectorization
tfidf = TfidfVectorizer(max_features=1000, ngram_range=(1, 2))
X_tfidf = tfidf.fit_transform(processed_texts)

# Count Vectorization
count_vec = CountVectorizer(max_features=1000, ngram_range=(1, 2))
X_count = count_vec.fit_transform(processed_texts)

print(f"TF-IDF shape: {X_tfidf.shape}")
print(f"Count vectorizer shape: {X_count.shape}")
\`\`\`

## Sentiment Analysis
\`\`\`python
# Train sentiment classifier
X_train, X_test, y_train, y_test = train_test_split(X_tfidf, labels, test_size=0.2, random_state=42)

# Naive Bayes classifier
nb_classifier = MultinomialNB()
nb_classifier.fit(X_train, y_train)

# Predictions
y_pred = nb_classifier.predict(X_test)
print("Classification Report:")
print(classification_report(y_test, y_pred))
\`\`\`

## Named Entity Recognition
\`\`\`python
# Using spaCy for NER
nlp = spacy.load("en_core_web_sm")

text = "Apple Inc. was founded by Steve Jobs in Cupertino, California."
doc = nlp(text)

print("Named Entities:")
for ent in doc.ents:
    print(f"{ent.text}: {ent.label_}")
\`\`\`

## Topic Modeling
\`\`\`python
from sklearn.decomposition import LatentDirichletAllocation

# LDA Topic Modeling
lda = LatentDirichletAllocation(n_components=2, random_state=42)
lda.fit(X_count)

# Display topics
feature_names = count_vec.get_feature_names_out()
for topic_idx, topic in enumerate(lda.components_):
    top_words = [feature_names[i] for i in topic.argsort()[-10:]]
    print(f"Topic {topic_idx}: {', '.join(top_words)}")
\`\`\`

## Modern NLP with Transformers
\`\`\`python
# Using Hugging Face Transformers
from transformers import pipeline

# Sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis")
result = sentiment_pipeline("I love this product!")
print(f"Sentiment: {result}")

# Text generation
generator = pipeline("text-generation", model="gpt2")
generated = generator("The future of AI is", max_length=50, num_return_sequences=1)
print(f"Generated text: {generated[0]['generated_text']}")
\`\`\`

**Applications**: Chatbots, sentiment analysis, machine translation, document classification, and information extraction.`
      }
    ]
  },
  'ds-computer-vision': {
    title: 'Computer Vision',
    description: 'Analyze and understand visual data',
    sections: [
      {
        id: 'computer-vision-basics',
        title: 'Computer Vision: Seeing with AI',
        content: `# Computer Vision: Seeing with AI

Computer vision enables machines to interpret and understand visual information from the world. This guide covers image processing, object detection, and deep learning for vision.

## Image Processing Fundamentals
\`\`\`python
import cv2
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import classification_report

# Load and display image
def load_and_display_image(image_path):
    # Load image
    img = cv2.imread(image_path)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    plt.figure(figsize=(10, 5))
    plt.subplot(1, 2, 1)
    plt.imshow(img_rgb)
    plt.title('Original Image')
    plt.axis('off')

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    plt.subplot(1, 2, 2)
    plt.imshow(gray, cmap='gray')
    plt.title('Grayscale Image')
    plt.axis('off')
    plt.show()

    return img_rgb, gray

# Image filtering
def apply_filters(image):
    # Gaussian blur
    blurred = cv2.GaussianBlur(image, (15, 15), 0)

    # Edge detection
    edges = cv2.Canny(image, 50, 150)

    # Morphological operations
    kernel = np.ones((5, 5), np.uint8)
    opening = cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)

    plt.figure(figsize=(15, 5))
    plt.subplot(1, 3, 1)
    plt.imshow(blurred, cmap='gray')
    plt.title('Gaussian Blur')
    plt.axis('off')

    plt.subplot(1, 3, 2)
    plt.imshow(edges, cmap='gray')
    plt.title('Edge Detection')
    plt.axis('off')

    plt.subplot(1, 3, 3)
    plt.imshow(opening, cmap='gray')
    plt.title('Morphological Opening')
    plt.axis('off')
    plt.show()
\`\`\`

## Feature Extraction
\`\`\`python
# HOG (Histogram of Oriented Gradients) features
from skimage.feature import hog
from skimage import exposure

def extract_hog_features(image):
    # Extract HOG features
    features, hog_image = hog(image, orientations=8, pixels_per_cell=(16, 16),
                             cells_per_block=(1, 1), visualize=True)

    # Rescale histogram for better display
    hog_image_rescaled = exposure.rescale_intensity(hog_image, in_range=(0, 10))

    plt.figure(figsize=(10, 5))
    plt.subplot(1, 2, 1)
    plt.imshow(image, cmap='gray')
    plt.title('Original Image')
    plt.axis('off')

    plt.subplot(1, 2, 2)
    plt.imshow(hog_image_rescaled, cmap='gray')
    plt.title('HOG Features')
    plt.axis('off')
    plt.show()

    return features

# SIFT features
def extract_sift_features(image):
    sift = cv2.SIFT_create()
    keypoints, descriptors = sift.detectAndCompute(image, None)

    # Draw keypoints
    img_with_keypoints = cv2.drawKeypoints(image, keypoints, None)

    plt.figure(figsize=(10, 5))
    plt.imshow(img_with_keypoints, cmap='gray')
    plt.title(f'SIFT Keypoints ({len(keypoints)} detected)')
    plt.axis('off')
    plt.show()

    return keypoints, descriptors
\`\`\`

## Image Classification
\`\`\`python
# Digit classification example
digits = load_digits()
X, y = digits.data, digits.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train SVM classifier
svm_classifier = SVC(kernel='rbf', random_state=42)
svm_classifier.fit(X_train, y_train)

# Predictions
y_pred = svm_classifier.predict(X_test)
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Visualize some predictions
plt.figure(figsize=(12, 6))
for i in range(10):
    plt.subplot(2, 5, i+1)
    plt.imshow(X_test[i].reshape(8, 8), cmap='gray')
    plt.title(f'True: {y_test[i]}, Pred: {y_pred[i]}')
    plt.axis('off')
plt.tight_layout()
plt.show()
\`\`\`

## Deep Learning for Computer Vision
\`\`\`python
import tensorflow as tf
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions

# Load pre-trained ResNet50
model = ResNet50(weights='imagenet')

def classify_image(img_path):
    # Load and preprocess image
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)

    # Make prediction
    preds = model.predict(x)
    decoded_preds = decode_predictions(preds, top=3)[0]

    # Display results
    plt.figure(figsize=(8, 6))
    plt.imshow(img)
    plt.axis('off')
    plt.title('Image Classification Results')

    for i, (imagenet_id, label, score) in enumerate(decoded_preds):
        print(f"{i+1}. {label}: {score:.4f}")

    plt.show()
    return decoded_preds
\`\`\`

## Object Detection
\`\`\`python
# Simple object detection using template matching
def template_matching(image, template):
    # Perform template matching
    result = cv2.matchTemplate(image, template, cv2.TM_CCOEFF_NORMED)

    # Find the best match
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)

    # Draw rectangle around matched area
    h, w = template.shape
    top_left = max_loc
    bottom_right = (top_left[0] + w, top_left[1] + h)

    result_img = image.copy()
    cv2.rectangle(result_img, top_left, bottom_right, 255, 2)

    plt.figure(figsize=(15, 5))
    plt.subplot(1, 3, 1)
    plt.imshow(image, cmap='gray')
    plt.title('Original Image')
    plt.axis('off')

    plt.subplot(1, 3, 2)
    plt.imshow(template, cmap='gray')
    plt.title('Template')
    plt.axis('off')

    plt.subplot(1, 3, 3)
    plt.imshow(result_img, cmap='gray')
    plt.title(f'Detection Result (Score: {max_val:.3f})')
    plt.axis('off')
    plt.show()
\`\`\`

## Image Segmentation
\`\`\`python
from sklearn.cluster import KMeans

def color_segmentation(image, k=3):
    # Reshape image to be a list of pixels
    data = image.reshape((-1, 3))
    data = np.float32(data)

    # Apply K-means clustering
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 20, 1.0)
    _, labels, centers = cv2.kmeans(data, k, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)

    # Convert back to uint8 and reshape to original image shape
    centers = np.uint8(centers)
    segmented_data = centers[labels.flatten()]
    segmented_image = segmented_data.reshape(image.shape)

    plt.figure(figsize=(10, 5))
    plt.subplot(1, 2, 1)
    plt.imshow(image)
    plt.title('Original Image')
    plt.axis('off')

    plt.subplot(1, 2, 2)
    plt.imshow(segmented_image)
    plt.title(f'Segmented Image (k={k})')
    plt.axis('off')
    plt.show()

    return segmented_image
\`\`\`

**Applications**: Autonomous vehicles, medical imaging, facial recognition, quality control, and augmented reality.`
      }
    ]
  },
  'ds-time-series': {
    title: 'Time Series Analysis',
    description: 'Analyze temporal data and make forecasts',
    sections: [
      {
        id: 'time-series-fundamentals',
        title: 'Time Series: Predicting the Future',
        content: `# Time Series: Predicting the Future

Time series analysis deals with data points collected over time. This guide covers forecasting, trend analysis, and seasonal decomposition.

## Time Series Fundamentals
\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Generate sample time series data
np.random.seed(42)
dates = pd.date_range('2020-01-01', periods=365, freq='D')
trend = np.linspace(100, 200, 365)
seasonal = 10 * np.sin(2 * np.pi * np.arange(365) / 365.25 * 4)
noise = np.random.normal(0, 5, 365)
ts_data = trend + seasonal + noise

ts_df = pd.DataFrame({'date': dates, 'value': ts_data})
ts_df.set_index('date', inplace=True)

# Plot time series
plt.figure(figsize=(12, 6))
plt.plot(ts_df.index, ts_df['value'])
plt.title('Sample Time Series Data')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.show()
\`\`\`

## Seasonal Decomposition
\`\`\`python
# Decompose time series
decomposition = seasonal_decompose(ts_df['value'], model='additive', period=90)

# Plot decomposition
fig, axes = plt.subplots(4, 1, figsize=(12, 10))
decomposition.observed.plot(ax=axes[0], title='Original')
decomposition.trend.plot(ax=axes[1], title='Trend')
decomposition.seasonal.plot(ax=axes[2], title='Seasonal')
decomposition.resid.plot(ax=axes[3], title='Residual')
plt.tight_layout()
plt.show()
\`\`\`

## ARIMA Modeling
\`\`\`python
# Split data for training and testing
train_size = int(len(ts_df) * 0.8)
train_data = ts_df['value'][:train_size]
test_data = ts_df['value'][train_size:]

# Fit ARIMA model
model = ARIMA(train_data, order=(1, 1, 1))
fitted_model = model.fit()

# Make predictions
forecast = fitted_model.forecast(steps=len(test_data))
forecast_index = test_data.index

# Plot results
plt.figure(figsize=(12, 6))
plt.plot(train_data.index, train_data, label='Training Data')
plt.plot(test_data.index, test_data, label='Actual Test Data')
plt.plot(forecast_index, forecast, label='Forecast', color='red')
plt.title('ARIMA Forecast')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# Calculate metrics
mse = mean_squared_error(test_data, forecast)
mae = mean_absolute_error(test_data, forecast)
print(f"MSE: {mse:.2f}")
print(f"MAE: {mae:.2f}")
\`\`\`

## Prophet Forecasting
\`\`\`python
from prophet import Prophet

# Prepare data for Prophet
prophet_df = ts_df.reset_index()
prophet_df.columns = ['ds', 'y']

# Split data
train_prophet = prophet_df[:train_size]
test_prophet = prophet_df[train_size:]

# Fit Prophet model
prophet_model = Prophet()
prophet_model.fit(train_prophet)

# Make future dataframe
future = prophet_model.make_future_dataframe(periods=len(test_data))
forecast_prophet = prophet_model.predict(future)

# Plot Prophet forecast
fig = prophet_model.plot(forecast_prophet)
plt.title('Prophet Forecast')
plt.show()

# Plot components
fig2 = prophet_model.plot_components(forecast_prophet)
plt.show()
\`\`\`

## LSTM for Time Series
\`\`\`python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler

# Prepare data for LSTM
def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:(i + seq_length)])
        y.append(data[i + seq_length])
    return np.array(X), np.array(y)

# Scale data
scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(ts_df['value'].values.reshape(-1, 1))

# Create sequences
seq_length = 30
X, y = create_sequences(scaled_data.flatten(), seq_length)

# Split data
train_size_lstm = int(len(X) * 0.8)
X_train, X_test = X[:train_size_lstm], X[train_size_lstm:]
y_train, y_test = y[:train_size_lstm], y[train_size_lstm:]

# Reshape for LSTM
X_train = X_train.reshape((X_train.shape[0], X_train.shape[1], 1))
X_test = X_test.reshape((X_test.shape[0], X_test.shape[1], 1))

# Build LSTM model
lstm_model = Sequential([
    LSTM(50, return_sequences=True, input_shape=(seq_length, 1)),
    LSTM(50),
    Dense(1)
])

lstm_model.compile(optimizer='adam', loss='mse')

# Train model
history = lstm_model.fit(X_train, y_train, epochs=50, batch_size=32,
                        validation_split=0.2, verbose=0)

# Make predictions
lstm_predictions = lstm_model.predict(X_test)

# Inverse transform predictions
lstm_predictions = scaler.inverse_transform(lstm_predictions)
y_test_actual = scaler.inverse_transform(y_test.reshape(-1, 1))

# Plot LSTM results
plt.figure(figsize=(12, 6))
plt.plot(y_test_actual, label='Actual')
plt.plot(lstm_predictions, label='LSTM Prediction')
plt.title('LSTM Time Series Forecast')
plt.xlabel('Time Steps')
plt.ylabel('Value')
plt.legend()
plt.show()
\`\`\`

**Applications**: Stock price prediction, demand forecasting, weather prediction, and economic analysis.`
      }
    ]
  },
  'ds-mlops': {
    title: 'MLOps & Model Deployment',
    description: 'Deploy and maintain ML models in production',
    sections: [
      {
        id: 'mlops-fundamentals',
        title: 'MLOps: Production Machine Learning',
        content: `# MLOps: Production Machine Learning

MLOps (Machine Learning Operations) is the practice of deploying, monitoring, and maintaining ML models in production environments.

## Model Versioning and Tracking
\`\`\`python
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Set up MLflow tracking
mlflow.set_experiment("model_experiment")

# Generate data
X, y = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train and track model
with mlflow.start_run():
    # Train model
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)

    # Make predictions
    y_pred = rf_model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)

    # Log parameters and metrics
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("random_state", 42)
    mlflow.log_metric("accuracy", accuracy)

    # Log model
    mlflow.sklearn.log_model(rf_model, "random_forest_model")

    print(f"Model accuracy: {accuracy:.4f}")
\`\`\`

## Model Deployment with Flask
\`\`\`python
from flask import Flask, request, jsonify
import pickle
import numpy as np

# Create Flask app
app = Flask(__name__)

# Load trained model (assuming it's saved)
# model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from request
        data = request.get_json()
        features = np.array(data['features']).reshape(1, -1)

        # Make prediction
        # prediction = model.predict(features)
        # probability = model.predict_proba(features)

        # For demo purposes
        prediction = [1]
        probability = [[0.3, 0.7]]

        return jsonify({
            'prediction': int(prediction[0]),
            'probability': probability[0].tolist(),
            'status': 'success'
        })

    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
\`\`\`

## Model Monitoring
\`\`\`python
import pandas as pd
from scipy import stats

class ModelMonitor:
    def __init__(self, reference_data):
        self.reference_data = reference_data
        self.reference_stats = self._calculate_stats(reference_data)

    def _calculate_stats(self, data):
        return {
            'mean': data.mean(),
            'std': data.std(),
            'min': data.min(),
            'max': data.max()
        }

    def detect_drift(self, new_data, threshold=0.05):
        """Detect data drift using statistical tests"""
        drift_detected = {}

        for column in new_data.columns:
            if column in self.reference_data.columns:
                # Kolmogorov-Smirnov test
                ks_stat, p_value = stats.ks_2samp(
                    self.reference_data[column],
                    new_data[column]
                )

                drift_detected[column] = {
                    'ks_statistic': ks_stat,
                    'p_value': p_value,
                    'drift_detected': p_value < threshold
                }

        return drift_detected

    def generate_report(self, new_data):
        """Generate monitoring report"""
        drift_results = self.detect_drift(new_data)
        new_stats = self._calculate_stats(new_data)

        report = {
            'timestamp': pd.Timestamp.now(),
            'data_quality': {
                'missing_values': new_data.isnull().sum().to_dict(),
                'data_shape': new_data.shape
            },
            'drift_detection': drift_results,
            'statistical_summary': new_stats.to_dict()
        }

        return report

# Example usage
# reference_df = pd.DataFrame(X_train, columns=[f'feature_{i}' for i in range(X_train.shape[1])])
# new_df = pd.DataFrame(X_test, columns=[f'feature_{i}' for i in range(X_test.shape[1])])
#
# monitor = ModelMonitor(reference_df)
# report = monitor.generate_report(new_df)
# print("Monitoring Report:", report)
\`\`\`

## CI/CD Pipeline for ML
\`\`\`python
# Example GitHub Actions workflow (save as .github/workflows/ml_pipeline.yml)
workflow_yaml = """
name: ML Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.8

    - name: Install dependencies
      run: |
        pip install -r requirements.txt

    - name: Run tests
      run: |
        python -m pytest tests/

    - name: Train model
      run: |
        python train_model.py

    - name: Validate model
      run: |
        python validate_model.py

    - name: Deploy model
      if: github.ref == 'refs/heads/main'
      run: |
        python deploy_model.py
"""

print("CI/CD Workflow for ML:")
print(workflow_yaml)
\`\`\`

## Model Performance Monitoring
\`\`\`python
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

class PerformanceMonitor:
    def __init__(self):
        self.metrics_history = []

    def log_prediction(self, prediction, actual=None, timestamp=None):
        """Log a prediction and optionally the actual value"""
        if timestamp is None:
            timestamp = datetime.now()

        entry = {
            'timestamp': timestamp,
            'prediction': prediction,
            'actual': actual
        }

        self.metrics_history.append(entry)

    def calculate_metrics(self, window_days=7):
        """Calculate performance metrics over a time window"""
        cutoff_date = datetime.now() - timedelta(days=window_days)
        recent_data = [
            entry for entry in self.metrics_history
            if entry['timestamp'] > cutoff_date and entry['actual'] is not None
        ]

        if not recent_data:
            return None

        predictions = [entry['prediction'] for entry in recent_data]
        actuals = [entry['actual'] for entry in recent_data]

        accuracy = sum(p == a for p, a in zip(predictions, actuals)) / len(predictions)

        return {
            'accuracy': accuracy,
            'sample_size': len(recent_data),
            'time_window': window_days
        }

    def plot_performance_over_time(self):
        """Plot model performance over time"""
        if not self.metrics_history:
            return

        # Group by day and calculate daily accuracy
        daily_metrics = {}
        for entry in self.metrics_history:
            if entry['actual'] is not None:
                date = entry['timestamp'].date()
                if date not in daily_metrics:
                    daily_metrics[date] = {'correct': 0, 'total': 0}

                daily_metrics[date]['total'] += 1
                if entry['prediction'] == entry['actual']:
                    daily_metrics[date]['correct'] += 1

        dates = sorted(daily_metrics.keys())
        accuracies = [daily_metrics[date]['correct'] / daily_metrics[date]['total']
                     for date in dates]

        plt.figure(figsize=(12, 6))
        plt.plot(dates, accuracies, marker='o')
        plt.title('Model Performance Over Time')
        plt.xlabel('Date')
        plt.ylabel('Daily Accuracy')
        plt.xticks(rotation=45)
        plt.grid(True)
        plt.tight_layout()
        plt.show()

# Example usage
monitor = PerformanceMonitor()

# Simulate some predictions and actual values
for i in range(100):
    pred = np.random.choice([0, 1])
    actual = np.random.choice([0, 1])
    timestamp = datetime.now() - timedelta(days=np.random.randint(0, 30))
    monitor.log_prediction(pred, actual, timestamp)

# Calculate recent performance
recent_performance = monitor.calculate_metrics(window_days=7)
print("Recent Performance:", recent_performance)
\`\`\`

**Key MLOps Practices**:
1. **Version Control**: Track code, data, and model versions
2. **Automated Testing**: Unit tests, integration tests, model validation
3. **Continuous Integration**: Automated model training and validation
4. **Monitoring**: Track model performance and data drift
5. **Deployment**: Automated, reliable model deployment
6. **Rollback**: Ability to quickly revert to previous model versions

**Applications**: Production ML systems, model lifecycle management, automated retraining, and performance monitoring.`
      }
    ]
  }
};

// Get content for a specific module
export const getModuleContent = (moduleId) => {
  return moduleContent[moduleId] || null;
};

// Get all available module content IDs
export const getAvailableModuleIds = () => {
  return Object.keys(moduleContent);
};
