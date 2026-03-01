const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/careersData.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

const expandedSkills = {
    1: ["JavaScript/TypeScript", "Python/Java", "System Design", "React/Angular", "Node.js/Spring Boot", "SQL & NoSQL Databases", "Git/Version Control", "CI/CD Pipelines", "Cloud Services (AWS/Azure)", "Agile Methodologies"],
    10: ["Network Security", "Penetration Testing", "Cryptography", "Incident Response", "SIEM Tools", "Firewall Configuration", "Risk Assessment", "Ethical Hacking", "Python Scripting", "Compliance Standards (ISO 27001, GDPR)"],
    101: ["Cloud Architecture (AWS/Azure/GCP)", "Kubernetes/Docker", "Infrastructure as Code (Terraform)", "Serverless Computing", "Cloud Security", "Cost Optimization", "Linux Administration", "Networking Fundamentals", "Database Migration", "Microservices Architecture"],
    102: ["Solidity/Vyper", "Smart Contract Development", "Cryptography Fundamentals", "Web3.js/ethers.js", "DeFi Protocols", "Consensus Algorithms", "Rust/Go", "dApp Architecture", "Smart Contract Auditing", "Blockchain Nodes/Networks"],
    103: ["C++/C#", "Unity/Unreal Engine", "3D Mathematics", "Physics Engines", "Game AI", "Graphics Programming (OpenGL/DirectX)", "Multiplayer Networking", "Asset Optimization", "UI/UX Implementation", "Version Control (Perforce/Git)"],
    104: ["CI/CD configuration (Jenkins/GitLab)", "Containerization (Docker)", "Orchestration (Kubernetes)", "Scripting (Python/Bash)", "Infrastructure as Code (Terraform/Ansible)", "Monitoring & Logging (Prometheus/ELK)", "Cloud Platforms (AWS/GCP/Azure)", "Linux/Unix Administration", "Network Security", "GitOps Practices"],
    105: ["Embedded C/C++", "Microcontrollers (Arduino/Raspberry Pi)", "IoT Protocols (MQTT/CoAP)", "Hardware Design", "Wireless Communication (BLE/WiFi/Zigbee)", "Edge Computing", "Real-time Operating Systems (RTOS)", "Sensor Integration", "Cloud IoT Platforms", "Data Security"],
    106: ["Unity3D / Unreal Engine", "C# / C++ Programming", "3D Modeling & Animation Basics", "Spatial Audio", "Computer Vision Concepts", "UI/UX Design for Spatial Computing", "Interaction Design", "Hardware Knowledge (Meta Quest, HoloLens)", "Performance Profiling", "Version Control"],
    107: ["Routing and Switching (Cisco/Juniper)", "Network Protocols (TCP/IP, BGP, OSPF)", "Firewall Administration", "VPN Configuration", "Network Troubleshooting", "Load Balancing", "Cloud Networking", "Network Security", "SD-WAN", "Wireshark/Packet Analysis"],
    108: ["SQL Mastery", "Database Design & Modeling", "Performance Tuning & Query Optimization", "Backup and Recovery Strategy", "High Availability / Clustering", "NoSQL (MongoDB/Cassandra)", "Database Security", "Data Migration", "ETL Processes", "Cloud Databases (RDS/Aurora)"],
    109: ["Automated Testing (Selenium/Cypress)", "Java/Python/JS Scripting", "API Testing (Postman/RestAssured)", "Performance Testing (JMeter)", "Defect Tracking (Jira)", "Test Planning & Strategy", "CI/CD Integration", "SQL/Database Testing", "Mobile Testing (Appium)", "Agile Quality Assurance"],
    2: ["Clinical Diagnostics", "Surgical Techniques", "Patient Care", "Anatomy & Physiology", "Pharmacology", "Medical Imaging Analysis", "Emergency Response", "Medical Ethics", "Empathy & Communication", "Decision Making Under Pressure"],
    9: ["Patient Care & Monitoring", "Medication Administration", "Vital Signs Assessment", "Infection Control", "IV Therapy", "Medical Charting/EHR", "Basic Life Support (BLS)", "Empathy & Compassion", "Emergency Response", "Health Education"],
    201: ["Dental Surgery & Extraction", "Orthodontics Basics", "Preventive Dental Care", "Endodontics (Root Canals)", "Prosthodontics", "Dental Radiography", "Local Anesthesia", "Patient Communication", "Clinic Management", "Manual Dexterity"],
    202: ["Pharmacology", "Drug Interactions", "Dispensing Accuracy", "Patient Counseling", "Pharmacy Law & Ethics", "Inventory Management", "Clinical Trial Knowledge", "Compounding", "Healthcare IT (EHR)", "Attention to Detail"],
    203: ["Anatomy & Kinesiology", "Therapeutic Exercise Prescription", "Manual Therapy", "Patient Assessment", "Pain Management Techniques", "Rehabilitation Planning", "Biomechanics", "Empathy & Motivation", "Post-Surgical Care", "Electrotherapy"],
    204: ["Animal Handling & Restraint", "Veterinary Surgery", "Zoonotic Diseases", "Animal Diagnostics & Imaging", "Veterinary Pharmacology", "Animal Behavior", "Nutrition Planning", "Emergency Care", "Client Communication", "Compassion"],
    205: ["Psychological Assessment", "Cognitive Behavioral Therapy (CBT)", "Counseling Techniques", "Crisis Intervention", "Active Listening", "Empathy & Boundary Setting", "Diagnosis of Mental Disorders", "Treatment Planning", "Research Methods", "Ethics in Psychology"],
    206: ["Clinical Nutrition", "Dietary Assessment", "Meal Planning", "Metabolism & Biochemistry", "Medical Nutrition Therapy", "Food Safety & Regulations", "Counseling & Motivation", "Sports Nutrition", "Public Health Nutrition", "Communication Skills"],
    207: ["Biomechanics", "Medical Device Design", "Regulatory Compliance (FDA/CE)", "Signal Processing", "Biomaterials Base", "CAD & 3D Modeling", "Prototyping", "Quality Assurance", "Physiology", "Embedded Systems Basics"],
    208: ["MRI/CT Operating Procedures", "Radiation Safety", "Anatomy Identification", "Patient Positioning", "Image Quality Assessment", "Equipment Calibration", "Medical Terminology", "Empathy & Patient Care", "Emergency Protocols", "PACS/RIS Systems"],
    209: ["Healthcare Policies & Regulations", "Hospital Operations Management", "Healthcare Finance", "Epidemiology Basics", "Quality Improvement", "Strategic Planning", "Public Relations", "Crisis Management", "Human Resources in Healthcare", "Health Informatics"],
    3: ["Strategic Planning", "Financial Analysis", "Leadership & Team Management", "Operations Management", "Market Analysis", "Risk Management", "Negotiation", "Change Management", "Corporate Communication", "Decision Making"],
    7: ["SEO/SEM", "Content Marketing", "Data Analytics (Google Analytics)", "Social Media Strategy", "Email Marketing Automation", "Conversion Rate Optimization (CRO)", "PPC Campaigns", "Copywriting", "A/B Testing", "Marketing Psychology"],
    8: ["Financial Modeling", "Valuation Methods (DCF, LBO)", "Mergers & Acquisitions (M&A)", "Corporate Finance", "Advanced Excel / VBA", "Pitchbook Creation", "Market Research", "Risk Assessment", "Client Relationship Management", "Analytical Thinking"],
    301: ["Talent Acquisition", "Employee Relations", "Performance Management", "Employment Law & Compliance", "Compensation & Benefits", "HRIS Software (Workday)", "Conflict Resolution", "Organizational Development", "Diversity & Inclusion", "Onboarding Strategies"],
    302: ["Logistics Management", "Inventory Control", "Procurement & Sourcing", "Demand Forecasting", "Vendor Management", "Warehouse Management Systems (WMS)", "Supply Chain Optimization", "Risk Mitigation", "ERP Systems (SAP)", "Negotiation Skills"],
    303: ["B2B Sales Strategies", "Lead Generation & Prospecting", "CRM Software (Salesforce)", "Negotiation & Closing", "Account Management", "Market Expansion", "Sales Presentation", "Relationship Building", "Objection Handling", "Revenue Forecasting"],
    304: ["Agile/Scrum Frameworks", "Project Scheduling & Budgeting", "Risk Management", "Stakeholder Management", "Resource Allocation", "Project Management Tools (Jira, Asana)", "Quality Assurance", "Scope Management", "Team Leadership", "Conflict Resolution"],
    305: ["Vision & Strategy", "Fundraising & Pitching", "Product-Market Fit Analysis", "Financial Management", "Sales & Marketing", "Networking", "Risk Tolerance", "Recruitment & Team Building", "Adaptability", "Resilience & Grit"],
    306: ["Portfolio Management", "Asset Allocation", "Estate Planning", "Tax Strategy", "Client Relationship Building", "Financial Analysis", "Risk Analysis", "Retirement Planning", "Regulatory Compliance", "Sales & Persuasion"],
    307: ["Probability & Statistics", "Financial Risk Modeling", "Insurance Mathematics", "VBA / R / Python", "Data Analysis", "Predictive Modeling", "Regulatory Frameworks", "Financial Reporting", "Problem Solving", "Attention to Detail"],
    308: ["Problem Structuring (MECE)", "Financial Modeling", "Market Analysis", "Client Presentation & Storytelling", "Data Analysis", "Process Improvement", "Strategic Planning", "Change Management", "Stakeholder Interactions", "Advanced PowerPoint & Excel"],
    4: ["Wireframing & Prototyping", "User Research & Testing", "Figma / Sketch / Adobe XD", "Interaction Design", "Visual Design Principles", "Information Architecture", "Usability Testing", "Design Systems", "HTML/CSS Basics", "Empathy for Users"],
    11: ["Architectural Design", "CAD / AutoCAD / Revit", "Urban Planning Regulations", "3D Rendering (Lumion/V-Ray)", "Building Codes & Zoning", "Sustainable Design (LEED)", "Project Management", "Structural Fundamentals", "Client Presentations", "Spatial Awareness"],
    12: ["Copywriting & Editing", "SEO Writing", "Social Media Strategy", "Storytelling", "Video/Audio Editing Basics", "CMS Platforms (WordPress)", "Content Strategy", "Journalistic Ethics", "Audience Research", "Interviewing Skills"],
    401: ["Adobe Creative Suite (Photoshop, Illustrator, InDesign)", "Typography", "Color Theory", "Branding & Identity", "Layout Design", "Vector Graphics", "Print Design vs Digital Design", "Photo Editing", "UI Design Basics", "Creative Problem Solving"],
    402: ["2D/3D Animation", "Maya / Blender / After Effects", "Motion Graphics", "Compositing", "Storyboarding", "Character Rigging", "Lighting & Texturing", "Visual Effects (VFX)", "Physics & Anatomy for Animation", "Rendering Pipelines"],
    403: ["Garment Construction", "Pattern Making", "Textile Knowledge", "Fashion Illustration", "Trend Forecasting", "Adobe Illustrator for Fashion", "Sewing Techniques", "Brand Development", "Sourcing & Manufacturing", "Retail Math"],
    404: ["Space Planning", "Color & Lighting Design", "AutoCAD / SketchUp", "Material Selection", "Furniture Design Basics", "Building Codes Compliance", "3D Rendering", "Budgeting", "Project Management", "Client Communication"],
    405: ["3D CAD Modeling (SolidWorks/Fusion 360)", "Design for Manufacturing (DFM)", "Prototyping", "Ergonomics", "Material Science", "Human-Centered Design", "User Research", "Aesthetics & Form", "Rendering", "Lifecycle Analysis"],
    406: ["Camera Operation & Lenses", "Lighting Design", "Composition & Framing", "Video Editing (Premiere Pro/Final Cut)", "Color Grading", "Audio Recording", "Storyboarding", "Directing Talent", "Post-Production Workflow", "Visual Storytelling"],
    407: ["Persuasive Writing", "SEO Copywriting", "Brand Voice Consistency", "Ad Concepting", "A/B Testing Copy", "Market Research", "Editing & Proofreading", "Social Media Copy", "Creative Strategy", "Consumer Psychology"],
    408: ["Concept Art", "3D Modeling & Texturing", "ZBrush / Maya", "Environment Design", "Character Design", "Game Engines (Unity/Unreal)", "UI/UX for Games", "Animation Basics", "Optimization for Games", "Visual Storytelling"],
    5: ["Legal Research (LexisNexis/Westlaw)", "Contract Drafting", "Litigation & Trial Advocacy", "Negotiation", "Client Counseling", "Case Analysis", "Legal Writing", "Statutory Interpretation", "Courtroom Procedures", "Persuasion & Argumentation"],
    501: ["Data Privacy Laws (GDPR, CCPA)", "Cybersecurity Frameworks", "Technology Contracts", "Incident Response Counseling", "Risk Assessment", "Intellectual Property Basics", "Compliance Auditing", "Policy Drafting", "Cloud Computing Law", "Breach Notification Procedures"],
    502: ["Patent Prosecution", "Trademark Registration", "Copyright Law", "IP Litigation", "Licensing Agreements", "Technical Background (Science/Engineering)", "Prior Art Searching", "Trade Secrets", "Drafting Patent Claims", "Negotiation"],
    503: ["Mergers & Acquisitions", "Corporate Governance", "Securities Law", "Due Diligence", "Contract Negotiation", "Venture Capital Financing", "Drafting Term Sheets", "Antitrust Law", "Tax Implications of M&A", "Board of Directors Advisory"],
    504: ["Corporate Tax Law", "International Taxation", "Tax Planning & Strategy", "Estate Planning", "IRS Audit Defense", "Accounting Principles", "Compliance", "Tax Litigation", "Wealth Management Law", "Detail Orientation"],
    505: ["International Treaties", "Human Rights Advocacy", "Diplomacy", "Public International Law", "Immigration Law", "Policy Analysis", "Cross-Cultural Communication", "NGO Operations", "Foreign Languages", "Dispute Resolution (Arbitration)"],
    506: ["Environmental Regulations (EPA)", "Energy Law", "Sustainability Reporting", "Land Use Permitting", "Climate Change Litigation", "Administrative Law", "Corporate Compliance", "Toxic Torts", "Negotiation with Agencies", "Scientific Literacy"],
    507: ["Divorce Litigation", "Child Custody & Support", "Mediation & ADR", "Prenuptial Agreements", "Asset Division", "Emotional Intelligence", "Empathy & Patience", "Financial Analysis (for assets)", "Domestic Violence Law", "Client Counseling"],
    508: ["Impartial Decision Making", "Statutory Interpretation", "Evidence Law", "Trial Management", "Legal Writing (Opinions)", "Constitutional Law", "Conflict Resolution", "Ethics & Integrity", "Public Speaking", "Analytical Reasoning"],
    509: ["Contract Negotiation", "IP & Trademark Law", "Talent Representation", "Endorsement Deals", "Media Rights", "Labor Law (Unions/Players Assoc.)", "Dispute Resolution", "Public Relations", "Brand Protection", "Entertainment Industry Knowledge"],
    510: ["Property Law", "Zoning & Land Use", "Real Estate Transactions", "Lease Drafting", "Title Examination", "Construction Law", "Real Estate Finance", "Environmental Restrictions", "Contract Negotiation", "Due Diligence"],
    6: ["Machine Learning Algorithms", "Python/R", "Data Visualization", "Statistical Analysis", "SQL", "Big Data (Hadoop/Spark)", "Deep Learning", "Data Wrangling", "Business Acumen", "Cloud Computing (AWS/GCP)"],
    601: ["SQL & NoSQL", "Data Visualization (Tableau/PowerBI)", "Python/R for Analytics", "A/B Testing", "Statistical Analysis", "Data Cleaning", "Business Intelligence", "Excel (Advanced)", "Storytelling with Data", "Metrics & KPIs"],
    602: ["Data Pipelines (ETL/ELT)", "Apache Spark/Kafka", "Cloud Data Warehouses (Snowflake/BigQuery)", "Python/Java/Scala", "SQL Optimization", "Data Modeling", "Airflow/Orchestration", "Database Administration", "CI/CD", "Data Security"],
    603: ["Large Language Models (LLMs)", "Prompt Engineering", "Fine-tuning Models", "Transformers Architecture", "Python (PyTorch/TensorFlow)", "Vector Databases (Pinecone, Milvus)", "LangChain / LlamaIndex", "API Integration", "Model Evaluation", "AI Safety & Ethics"],
    604: ["Stochastic Calculus", "Time Series Analysis", "C++ / Python / KDB+", "Algorithmic Trading", "Risk Modeling", "Financial Markets Knowledge", "Machine Learning", "Optimization Algorithms", "Backtesting", "High-Frequency Trading Concepts"],
    605: ["Image Processing", "Object Detection & Tracking", "Deep Learning (PyTorch/TensorFlow)", "OpenCV", "Convolutional Neural Networks (CNNs)", "Python/C++", "3D Vision", "Edge AI (TensorRT)", "Sensor Fusion", "Algorithm Optimization"],
    606: ["Text Processing & Tokenization", "Transformer Models (BERT, GPT)", "Sentiment Analysis", "Named Entity Recognition (NER)", "Python (NLTK, spaCy, Hugging Face)", "Machine Translation", "Language Modeling", "Deep Learning", "Information Extraction", "Speech Recognition Algorithms"],
    607: ["Genomics & Sequence Analysis", "Python/R/Perl", "Statistical Genetics", "Bioconductor / Nextflow", "Machine Learning for Biology", "Database Management (SQL/NoSQL)", "Data Visualization", "Structural Bioinformatics", "Cloud Computing", "Molecular Biology"],
    608: ["Survey Design & Methodology", "Quantitative Research", "Qualitative Research (Focus Groups)", "Statistical Software (SPSS/SAS/R)", "Data Visualization", "Consumer Behavior", "Competitive Intelligence", "Report Writing", "Presentation Skills", "Trend Forecasting"],
    609: ["Geographic Information Systems (ArcGIS/QGIS)", "Spatial Analysis", "Python (GeoPandas, GDAL)", "Remote Sensing", "SQL (PostGIS)", "Cartography & Visualization", "Data Wrangling", "Machine Learning for Spatial Data", "Web Mapping (Leaflet)", "GPS/GNSS Data Handling"],
    610: ["Data Warehousing Design", "ETL/ELT Processes", "BI Tools (Tableau/Power BI/Looker)", "Data Modeling (Star/Snowflake Schemas)", "SQL Mastery", "Data Governance & Quality", "Cloud Platforms", "OLAP", "Python Scripting", "Stakeholder Requirements Gathering"]
};

// find the careers array string
const match = fileContent.match(/export const careers = \[([\s\S]*?)\];/);
if (!match) {
    console.error("Could not find careers array.");
    process.exit(1);
}

// Extract the raw string of the array
let careersString = match[1];

// Evaluate it to an actual array of objects so we can easily iterate
let evalString = `(function() { return [${careersString}]; })()`;
let parsedCareers;
try {
    parsedCareers = eval(evalString);
} catch (e) {
    console.error("Error evaluating:", e);
    process.exit(1);
}

// Modify the objects
let outputString = "[\n";
for (const career of parsedCareers) {
    const id = career.id;
    const skillsToUse = expandedSkills[id] || ["Critical Thinking", "Communication", "Problem Solving", "Adaptability", "Teamwork", "Time Management", "Leadership", "Technical Literacy"];

    // Create the updated string representation of the object
    const topRolesStr = JSON.stringify(career.topRoles);
    const skillsStr = JSON.stringify(skillsToUse);
    const futureRolesStr = career.futureRoles ? JSON.stringify(career.futureRoles) : "[]";
    const importantNoteStr = career.importantNote ? JSON.stringify(career.importantNote) : '""';

    let objectStr = `    {
        id: ${career.id}, title: '${career.title.replace(/'/g, "\\'")}', category: '${career.category}', icon: '${career.icon}', color: '${career.color}',
        description: '${career.description.replace(/'/g, "\\'")}',
        avgSalary: '${career.avgSalary}', growth: '${career.growth}',
        topRoles: ${topRolesStr}, futureRoles: ${futureRolesStr}, skills: ${skillsStr},
        education: '${career.education.replace(/'/g, "\\'")}',
        importantNote: ${importantNoteStr}
    },`;
    outputString += objectStr + "\n";
}
outputString += "]";

// Write back to file
const newFileContent = fileContent.replace(/export const careers = \[([\s\S]*?)\];/, `export const careers = ${outputString};`);
fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log("Successfully enriched careersData.js with 8-10 skills per career");
