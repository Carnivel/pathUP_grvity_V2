export const careerCategories = [
    { id: 'all', label: 'All Fields' },
    { id: 'tech', label: 'Technology' },
    { id: 'medical', label: 'Healthcare' },
    { id: 'business', label: 'Business' },
    { id: 'creative', label: 'Creative' },
    { id: 'law', label: 'Law' },
    { id: 'data', label: 'Data & AI' },
];

export const careers = [
    {
        id: 1, title: 'Software Engineering', category: 'tech', icon: 'code', color: '#4F46E5',
        description: 'Design, develop, and maintain software applications and systems.',
        avgSalary: '₹8-25 LPA', growth: 'Very High',
        topRoles: ["Full-Stack Developer","DevOps Engineer"], futureRoles: ["VP of Engineering","CTO","Principal Architect"], skills: ["JavaScript/TypeScript","Python/Java","System Design","React/Angular","Node.js/Spring Boot","SQL & NoSQL Databases","Git/Version Control","CI/CD Pipelines","Cloud Services (AWS/Azure)","Agile Methodologies"],
        education: 'B.Tech / B.E. in CS/IT',
        importantNote: "Continuous learning and adapting to new frameworks is critical.",
        isRightForYou: ["You enjoy solving logical puzzles and breaking down complex problems.","You have a strong attention to detail and don't mind debugging code for hours.","You are comfortable with continuous learning as technologies change rapidly.","You enjoy building things from scratch and seeing your code come to life.","You can work effectively both independently and as part of an agile team."],
        industriesHiring: ["Tech & IT","Finance & Fintech","Healthcare Tech","E-commerce","Automotive"]
    },
    {
        id: 10, title: 'Cyber Security', category: 'tech', icon: 'shieldcheck', color: '#3B82F6',
        description: 'Protect organizations from cyber threats and secure networks.',
        avgSalary: '₹9-25 LPA', growth: 'Very High',
        topRoles: ["Security Analyst","Ethical Hacker"], futureRoles: ["Chief Information Security Officer","Security Director"], skills: ["Network Security","Penetration Testing","Cryptography","Incident Response","SIEM Tools","Firewall Configuration","Risk Assessment","Ethical Hacking","Python Scripting","Compliance Standards (ISO 27001, GDPR)"],
        education: 'B.Tech CS / Cyber Security Certifications',
        importantNote: "Certifications like CISSP drastically improve career prospects.",
        isRightForYou: ["You have a natural 'hacker' mindset and like thinking about how systems can be broken.","You thrive under pressure, especially during incident response scenarios.","You are highly ethical and can be trusted with highly sensitive data.","You enjoy staying up-to-date with the latest vulnerabilities and threats.","You possess strong analytical skills to investigate security breaches."],
        industriesHiring: ["Banking & Finance","Government & Defense","Tech & SaaS","Healthcare","Consulting"]
    },
    {
        id: 101, title: 'Cloud Architect', category: 'tech', icon: 'cloud', color: '#0EA5E9',
        description: 'Design and manage robust cloud infrastructure and deployment strategies.',
        avgSalary: '₹12-30 LPA', growth: 'Very High',
        topRoles: ["Cloud Engineer","Solutions Architect"], futureRoles: ["Head of Cloud Infrastructure","Cloud Strategy Director"], skills: ["Cloud Architecture (AWS/Azure/GCP)","Kubernetes/Docker","Infrastructure as Code (Terraform)","Serverless Computing","Cloud Security","Cost Optimization","Linux Administration","Networking Fundamentals","Database Migration","Microservices Architecture"],
        education: 'B.Tech CS + Cloud Certifications',
        importantNote: "Vendor-specific certifications (AWS, Azure, GCP) are mandatory for growth.",
        isRightForYou: ["You love thinking about the big picture and designing large-scale architectures.","You are interested in optimizing system performance and reducing infrastructure costs.","You enjoy learning about distributed systems and cloud provider ecosystems.","You are comfortable acting as a technical leader and guiding engineering teams.","You have a solid understanding of networking, security, and database management."],
        industriesHiring: ["Cloud Providers","Telecom","Streaming Services","E-commerce","SaaS"]
    },
    {
        id: 102, title: 'Blockchain Developer', category: 'tech', icon: 'blocks', color: '#F59E0B',
        description: 'Build decentralized applications and smart contracts using blockchain.',
        avgSalary: '₹10-35 LPA', growth: 'High',
        topRoles: ["Web3 Developer","Smart Contract Engineer"], futureRoles: ["Lead Blockchain Architect","Web3 Technical Director"], skills: ["Solidity/Vyper","Smart Contract Development","Cryptography Fundamentals","Web3.js/ethers.js","DeFi Protocols","Consensus Algorithms","Rust/Go","dApp Architecture","Smart Contract Auditing","Blockchain Nodes/Networks"],
        education: 'B.Tech CS or Web3 Bootcamps',
        importantNote: "Cryptography fundamentals and staying updated closely with decentralized finance trends are essential.",
        isRightForYou: ["You are fascinated by decentralization, cryptography, and open-source principles.","You enjoy working in an emerging field where best practices are still being written.","You have a strong grasp of economics, game theory, and incentive structures.","You are extremely detail-oriented, as smart contract bugs can cost millions.","You are comfortable navigating ambiguity and rapid industry pivots."],
        industriesHiring: ["Fintech & DeFi","Gaming & Metaverse","Supply Chain","Venture Capital","Cybersecurity"]
    },
    {
        id: 103, title: 'Game Developer', category: 'tech', icon: 'gamepad', color: '#8B5CF6',
        description: 'Create interactive video games for mobile, PC, and consoles.',
        avgSalary: '₹6-20 LPA', growth: 'Moderate',
        topRoles: ["Unity Developer","Unreal Engineer"], futureRoles: ["Gaming Studio Director","Lead Game Engine Architect"], skills: ["C++/C#","Unity/Unreal Engine","3D Mathematics","Physics Engines","Game AI","Graphics Programming (OpenGL/DirectX)","Multiplayer Networking","Asset Optimization","UI/UX Implementation","Version Control (Perforce/Git)"],
        education: 'B.Tech CS / B.Sc Gaming',
        importantNote: "A strong portfolio of playable games is more valuable than just degrees.",
        isRightForYou: ["You have a blend of creative artistic vision and hardcore programming skills.","You love playing video games and analyzing what makes them structurally fun.","You possess strong skills in 3D mathematics, physics, and spatial logic.","You are patient enough to optimize performance for various hardware constraints.","You enjoy collaborating closely with artists, designers, and writers."],
        industriesHiring: ["Game Studios","AR/VR Tech","Education/EdTech","Entertainment","Simulation/Military"]
    },
    {
        id: 104, title: 'DevOps Engineer', category: 'tech', icon: 'server', color: '#10B981',
        description: 'Bridge the gap between development and operations for faster deployments.',
        avgSalary: '₹10-25 LPA', growth: 'Very High',
        topRoles: ["Release Manager","Site Reliability Engineer"], futureRoles: ["VP of Platform Engineering","Head of SRE"], skills: ["CI/CD configuration (Jenkins/GitLab)","Containerization (Docker)","Orchestration (Kubernetes)","Scripting (Python/Bash)","Infrastructure as Code (Terraform/Ansible)","Monitoring & Logging (Prometheus/ELK)","Cloud Platforms (AWS/GCP/Azure)","Linux/Unix Administration","Network Security","GitOps Practices"],
        education: 'B.Tech CS / IT',
        importantNote: "Mastery of automation and infrastructure-as-code is the core.",
        isRightForYou: ["You are obsessed with automation and hate doing manual tasks repeatedly.","You enjoy acting as the bridge between software developers and IT operations.","You are comfortable managing scalable infrastructure and deployment pipelines.","You stay calm when production systems go down and can troubleshoot rapidly.","You believe in the 'infrastructure as code' philosophy."],
        industriesHiring: ["SaaS & Cloud","Fintech","E-commerce","Healthcare Tech","Telecommunications"]
    },
    {
        id: 105, title: 'IoT Developer', category: 'tech', icon: 'cpu', color: '#6366F1',
        description: 'Develop software for interconnected smart devices and sensors.',
        avgSalary: '₹7-22 LPA', growth: 'High',
        topRoles: ["IoT Architect","Embedded Engineer"], futureRoles: ["Director of IoT Solutions","Hardware/Software Architect"], skills: ["Embedded C/C++","Microcontrollers (Arduino/Raspberry Pi)","IoT Protocols (MQTT/CoAP)","Hardware Design","Wireless Communication (BLE/WiFi/Zigbee)","Edge Computing","Real-time Operating Systems (RTOS)","Sensor Integration","Cloud IoT Platforms","Data Security"],
        education: 'B.Tech Electronics / CS',
        importantNote: "Understanding both hardware limitations and cloud integrations is the golden key.",
        isRightForYou: ["You enjoy working at the intersection of physical hardware and digital software.","You are interested in sensors, microcontrollers, and wireless communication.","You are comfortable dealing with extreme memory and power constraints.","You like seeing physical objects become 'smart' and interconnected.","You understand both the engineering and security implications of connected devices."],
        industriesHiring: ["Manufacturing & Industry 4.0","Consumer Electronics","Automotive","Smart Home/City","Healthcare"]
    },
    {
        id: 106, title: 'AR/VR Developer', category: 'tech', icon: 'glasses', color: '#EC4899',
        description: 'Build immersive augmented and virtual reality experiences.',
        avgSalary: '₹8-25 LPA', growth: 'High',
        topRoles: ["XR Developer","3D UI Engineer"], futureRoles: ["Metaverse Product Lead","Principal VR Architect"], skills: ["Unity3D / Unreal Engine","C# / C++ Programming","3D Modeling & Animation Basics","Spatial Audio","Computer Vision Concepts","UI/UX Design for Spatial Computing","Interaction Design","Hardware Knowledge (Meta Quest, HoloLens)","Performance Profiling","Version Control"],
        education: 'B.Tech / specialized AR/VR courses',
        importantNote: "Knowledge of 3D math and spatial computing concepts is highly required.",
        isRightForYou: ["You are passionate about immersive experiences, AR, VR, and spatial computing.","You have a strong background in 3D modeling, Unity, or Unreal Engine.","You are interested in human-computer interaction beyond traditional screens.","You love experimenting with cutting-edge hardware (headsets, smart glasses).","You can optimize complex 3D scenes to run at high framerates."],
        industriesHiring: ["Entertainment","Education & Training","Real Estate","Healthcare","Retail"]
    },
    {
        id: 107, title: 'Network Engineer', category: 'tech', icon: 'wifi', color: '#3B82F6',
        description: 'Set up, administer, and upgrade organizational computer networks.',
        avgSalary: '₹5-15 LPA', growth: 'Moderate',
        topRoles: ["Network Administrator","Systems Engineer"], futureRoles: ["Network Architecture Director","VP of IT Infrastructure"], skills: ["Routing and Switching (Cisco/Juniper)","Network Protocols (TCP/IP, BGP, OSPF)","Firewall Administration","VPN Configuration","Network Troubleshooting","Load Balancing","Cloud Networking","Network Security","SD-WAN","Wireshark/Packet Analysis"],
        education: 'B.Tech IT / Electronics',
        importantNote: "CCIE or equivalent expert certifications carry massive weight.",
        isRightForYou: ["You enjoy understanding how data physically travels across the globe.","You are highly analytical and good at troubleshooting connectivity issues.","You don't mind working hands-on with routers, switches, and cabling.","You are detail-oriented when configuring complex firewalls and security policies.","You can handle on-call responsibilities during major network outages."],
        industriesHiring: ["Telecommunications","Data Centers","ISPs","Large Enterprises","Government"]
    },
    {
        id: 108, title: 'Database Administrator', category: 'tech', icon: 'database', color: '#F97316',
        description: 'Ensure databases run efficiently, securely, and handle large scale data.',
        avgSalary: '₹7-18 LPA', growth: 'Moderate',
        topRoles: ["DBA","Data Engineer"], futureRoles: ["Chief Data Officer","Principal Data Architect"], skills: ["SQL Mastery","Database Design & Modeling","Performance Tuning & Query Optimization","Backup and Recovery Strategy","High Availability / Clustering","NoSQL (MongoDB/Cassandra)","Database Security","Data Migration","ETL Processes","Cloud Databases (RDS/Aurora)"],
        education: 'B.Tech CS or BCA/MCA',
        importantNote: "Transitioning towards cloud-native databases is the modern necessity.",
        isRightForYou: ["You are highly organized and care deeply about data integrity and structural design.","You have a knack for optimizing slow queries into lightning-fast operations.","You are meticulous about backups, disaster recovery, and high availability.","You enjoy working behind the scenes to keep critical applications running.","You possess strong analytical skills to model complex business relationships."],
        industriesHiring: ["Finance","Healthcare","E-commerce","Government","Tech"]
    },
    {
        id: 109, title: 'QA & Test Engineer', category: 'tech', icon: 'checkcircle', color: '#14B8A6',
        description: 'Automate and run tests to ensure software quality before release.',
        avgSalary: '₹6-15 LPA', growth: 'Moderate',
        topRoles: ["Automation Tester","SDET"], futureRoles: ["VP of Quality Assurance","Director of Test Automation"], skills: ["Automated Testing (Selenium/Cypress)","Java/Python/JS Scripting","API Testing (Postman/RestAssured)","Performance Testing (JMeter)","Defect Tracking (Jira)","Test Planning & Strategy","CI/CD Integration","SQL/Database Testing","Mobile Testing (Appium)","Agile Quality Assurance"],
        education: 'B.Tech CS / BCA',
        importantNote: "Automation skills have completely overtaken manual testing roles.",
        isRightForYou: ["You have a knack for finding edge cases and breaking software intentionally.","You believe that delivering a bug-free user experience is the ultimate goal.","You enjoy writing automated scripts to test applications thoroughly.","You have strong communication skills to explain defects to developers.","You are detail-oriented and don't let small inconsistencies slide."],
        industriesHiring: ["Software & IT","Game Development","Banking","Healthcare ERP","Consumer Apps"]
    },
    {
        id: 2, title: 'Medicine & Surgery', category: 'medical', icon: 'stethoscope', color: '#06B6D4',
        description: 'Diagnose and treat patients, conduct research, and improve public health.',
        avgSalary: '₹10-30 LPA', growth: 'High',
        topRoles: ["Physician","Surgeon"], futureRoles: ["Chief Medical Officer","Hospital Director","Head of Surgery"], skills: ["Clinical Diagnostics","Surgical Techniques","Patient Care","Anatomy & Physiology","Pharmacology","Medical Imaging Analysis","Emergency Response","Medical Ethics","Empathy & Communication","Decision Making Under Pressure"],
        education: 'MBBS + MD/MS',
        importantNote: "Residency and continuous hands-on practice are the only paths to mastery.",
        isRightForYou: ["You possess immense empathy and a genuine desire to heal others.","You have exceptional physical stamina to withstand long surgical procedures.","You remain incredibly calm and focused during life-or-death emergencies.","You are committed to lifelong learning and reading medical journals.","You have the emotional resilience to deliver bad news to patients and families."],
        industriesHiring: ["Hospitals","Private Clinics","Research Institutes","Military","NGOs"]
    },
    {
        id: 9, title: 'Nursing & Healthcare', category: 'medical', icon: 'heartpulse', color: '#EC4899',
        description: 'Provide critical care, assist in surgeries, and advocate for wellness.',
        avgSalary: '₹4-12 LPA', growth: 'Very High',
        topRoles: ["Registered Nurse","Nurse Educator"], futureRoles: ["Director of Nursing","Chief Nursing Officer"], skills: ["Patient Care & Monitoring","Medication Administration","Vital Signs Assessment","Infection Control","IV Therapy","Medical Charting/EHR","Basic Life Support (BLS)","Empathy & Compassion","Emergency Response","Health Education"],
        education: 'B.Sc Nursing / GNM',
        importantNote: "Empathy and physical stamina are as important as medical knowledge.",
        isRightForYou: ["You are deeply compassionate, patient, and find joy in direct patient care.","You have strong physical endurance for long shifts on your feet.","You can handle the emotional weight of caring for the sick and terminally ill.","You are highly observant and can spot subtle changes in a patient's condition.","You have excellent communication skills to brief doctors and comfort families."],
        industriesHiring: ["Hospitals","Nursing Homes","Home Healthcare","Schools","Corporate Clinics"]
    },
    {
        id: 201, title: 'Dentistry', category: 'medical', icon: 'smile', color: '#0EA5E9',
        description: 'Diagnose and treat conditions related to the teeth, gums, and mouth.',
        avgSalary: '₹5-15 LPA', growth: 'Moderate',
        topRoles: ["Dentist","Orthodontist"], futureRoles: ["Clinic Owner","Maxillofacial Surgeon"], skills: ["Dental Surgery & Extraction","Orthodontics Basics","Preventive Dental Care","Endodontics (Root Canals)","Prosthodontics","Dental Radiography","Local Anesthesia","Patient Communication","Clinic Management","Manual Dexterity"],
        education: 'BDS + MDS',
        importantNote: "Building a loyal patient base and managing a private practice are key for high income.",
        isRightForYou: ["You have excellent manual dexterity and hand-eye coordination.","You enjoy detailed, precise work in a focused, small spatial environment.","You have strong interpersonal skills to calm anxious or fearful patients.","You are interested in both the medical and aesthetic aspects of oral care.","You have the entrepreneurial drive to potentially run your own private clinic."],
        industriesHiring: ["Private Dental Clinics","Hospitals","Research","Academics","Public Health"]
    },
    {
        id: 202, title: 'Pharmacy', category: 'medical', icon: 'pill', color: '#10B981',
        description: 'Work with medications, drug research, and pharmacological testing.',
        avgSalary: '₹3-12 LPA', growth: 'High',
        topRoles: ["Pharmacist","Clinical Researcher"], futureRoles: ["Director of Pharmacy","R&D Head in Pharma"], skills: ["Pharmacology","Drug Interactions","Dispensing Accuracy","Patient Counseling","Pharmacy Law & Ethics","Inventory Management","Clinical Trial Knowledge","Compounding","Healthcare IT (EHR)","Attention to Detail"],
        education: 'B.Pharm / Pharm.D',
        importantNote: "Attention to detail is non-negotiable; small errors have major consequences.",
        isRightForYou: ["You are incredibly meticulous and understand that minor errors can be fatal.","You have a deep interest in chemistry and how compounds interact in the body.","You possess strong memory skills to recall thousands of drug interactions.","You have good communication skills for patient counseling and doctor consultation.","You enjoy working in an organized, highly regulated, and structured environment."],
        industriesHiring: ["Retail Pharmacies","Hospitals","Pharmaceutical Companies","Research","Regulatory Agencies"]
    },
    {
        id: 203, title: 'Physiotherapy', category: 'medical', icon: 'activity', color: '#F59E0B',
        description: 'Help patients recover physical mobility and manage pain after injuries.',
        avgSalary: '₹4-10 LPA', growth: 'High',
        topRoles: ["Physiotherapist","Sports Rehab Specialist"], futureRoles: ["Rehabilitation Center Director","Sports Team Head Physio"], skills: ["Anatomy & Kinesiology","Therapeutic Exercise Prescription","Manual Therapy","Patient Assessment","Pain Management Techniques","Rehabilitation Planning","Biomechanics","Empathy & Motivation","Post-Surgical Care","Electrotherapy"],
        education: 'BPT (Bachelor of Physiotherapy)',
        importantNote: "Physical fitness and patience are critical for helping patients recover.",
        isRightForYou: ["You are physically active, motivating, and enjoy seeing gradual human progress.","You are fascinated by human anatomy, biomechanics, and kinesiology.","You possess extreme patience, as physical rehabilitation can be a very slow process.","You have strong empathy to relate to patients in chronic pain.","You prefer hands-on, interactive therapy over sitting at a desk all day."],
        industriesHiring: ["Sports Teams","Rehab Centers","Hospitals","Private Practice","Fitness Centers"]
    },
    {
        id: 204, title: 'Veterinary Science', category: 'medical', icon: 'pawprint', color: '#D946EF',
        description: 'Treat diseased or injured animals and promote animal welfare.',
        avgSalary: '₹5-12 LPA', growth: 'Moderate',
        topRoles: ["Veterinarian","Animal Surgeon"], futureRoles: ["Veterinary Hospital Director","Wildlife Conservation Vet"], skills: ["Animal Handling & Restraint","Veterinary Surgery","Zoonotic Diseases","Animal Diagnostics & Imaging","Veterinary Pharmacology","Animal Behavior","Nutrition Planning","Emergency Care","Client Communication","Compassion"],
        education: 'B.V.Sc & A.H',
        importantNote: "Requires an immense passion for animals and tolerance for emotional stress.",
        isRightForYou: ["You have a deep, unwavering love for animals of all kinds.","You are not squeamish and can handle blood, surgery, and difficult medical situations.","You have the emotional resilience to handle euthanasia and distressed pet owners.","You possess strong deductive reasoning since your patients cannot speak.","You enjoy a mix of medicine, surgery, and laboratory diagnosis in one role."],
        industriesHiring: ["Veterinary Clinics","Zoos & Wildlife Sanctuaries","Agriculture","Research","Animal Shelters"]
    },
    {
        id: 205, title: 'Clinical Psychology', category: 'medical', icon: 'brain', color: '#8B5CF6',
        description: 'Assess, diagnose, and treat mental illness and psychological disorders.',
        avgSalary: '₹4-15 LPA', growth: 'Very High',
        topRoles: ["Clinical Psychologist","Therapist"], futureRoles: ["Chief Psychologist","Mental Health Program Director"], skills: ["Psychological Assessment","Cognitive Behavioral Therapy (CBT)","Counseling Techniques","Crisis Intervention","Active Listening","Empathy & Boundary Setting","Diagnosis of Mental Disorders","Treatment Planning","Research Methods","Ethics in Psychology"],
        education: 'M.A. Psychology + M.Phil',
        importantNote: "Emotional resilience is absolutely necessary to avoid burnout.",
        isRightForYou: ["You are an exceptional, active listener who can read between the lines.","You are highly empathetic but can set strict boundaries to avoid emotional burnout.","You have a deep interest in human behavior, cognition, and neuroscience.","You are patient and understand that mental healing is a non-linear process.","You are non-judgmental and can provide a completely safe space for all people."],
        industriesHiring: ["Hospitals","Private Practice","Schools","Corporate HR","Rehabilitation Centers"]
    },
    {
        id: 206, title: 'Nutrition & Dietetics', category: 'medical', icon: 'apple', color: '#84CC16',
        description: 'Advise individuals on dietary choices to improve health and manage diseases.',
        avgSalary: '₹3-10 LPA', growth: 'High',
        topRoles: ["Clinical Dietitian","Nutritionist"], futureRoles: ["Head of Clinical Nutrition","Corporate Wellness Director"], skills: ["Clinical Nutrition","Dietary Assessment","Meal Planning","Metabolism & Biochemistry","Medical Nutrition Therapy","Food Safety & Regulations","Counseling & Motivation","Sports Nutrition","Public Health Nutrition","Communication Skills"],
        education: 'B.Sc Nutrition / Dietetics',
        importantNote: "Adapting generic diets to specific medical profiles is the core skill.",
        isRightForYou: ["You are passionate about food science, biochemistry, and healthy living.","You enjoy counseling people and motivating them to make difficult lifestyle changes.","You are detail-oriented when calculating caloric needs and macronutrients.","You enjoy keeping up with the latest nutritional science and debunking fad diets.","You have strong empathy for individuals struggling with eating disorders or obesity."],
        industriesHiring: ["Hospitals","Sports Teams","Fitness Centers","Food Industry","Public Health"]
    },
    {
        id: 207, title: 'Biomedical Engineering', category: 'medical', icon: 'microscope', color: '#3B82F6',
        description: 'Design medical devices, prosthetics, and healthcare software.',
        avgSalary: '₹5-15 LPA', growth: 'High',
        topRoles: ["Biomedical Engineer","R&D Engineer"], futureRoles: ["VP of Medical Devices R&D","Chief Innovation Officer"], skills: ["Biomechanics","Medical Device Design","Regulatory Compliance (FDA/CE)","Signal Processing","Biomaterials Base","CAD & 3D Modeling","Prototyping","Quality Assurance","Physiology","Embedded Systems Basics"],
        education: 'B.Tech Biomedical Engineering',
        importantNote: "Bridging the gap between engineering complexity and patient safety is the main challenge.",
        isRightForYou: ["You want to apply hardcore engineering principles to save or improve human lives.","You enjoy the intersection of mechanical design, electronics, and biology.","You are detail-oriented and understand the importance of strict FDA/CE regulations.","You are innovative and want to build the next generation of prosthetics or scanners.","You enjoy working in cross-functional teams with doctors and scientists."],
        industriesHiring: ["Medical Device Manufacturing","Hospitals","Research Labs","Pharmaceuticals","Startups"]
    },
    {
        id: 208, title: 'Radiology / Imaging Tech', category: 'medical', icon: 'camera', color: '#64748B',
        description: 'Operate medical imaging equipment like X-Rays, MRIs, and CT scanners.',
        avgSalary: '₹3-8 LPA', growth: 'High',
        topRoles: ["Radiology Technician","MRI Technologist"], futureRoles: ["Head of Radiology Dept","Chief Diagnostic Tech"], skills: ["MRI/CT Operating Procedures","Radiation Safety","Anatomy Identification","Patient Positioning","Image Quality Assessment","Equipment Calibration","Medical Terminology","Empathy & Patient Care","Emergency Protocols","PACS/RIS Systems"],
        education: 'B.Sc Radiology',
        importantNote: "Precision and deep understanding of anatomy are critical for accurate imaging.",
        isRightForYou: ["You are detail-oriented and comfortable operating complex, high-tech machinery.","You have a strong understanding of human anatomy and cross-sectional imaging.","You are meticulous about radiation safety and patient positioning.","You have good interpersonal skills to guide patients through claustrophobic scans.","You enjoy the analytical process of producing the perfect diagnostic image."],
        industriesHiring: ["Hospitals","Diagnostic Centers","Research Labs","Outpatient Clinics"]
    },
    {
        id: 209, title: 'Public Health Administration', category: 'medical', icon: 'globe', color: '#14B8A6',
        description: 'Manage health services, create health policies, and lead health programs.',
        avgSalary: '₹6-20 LPA', growth: 'Moderate',
        topRoles: ["Public Health Manager","Epidemiologist"], futureRoles: ["Hospital CEO","Minister of Health","Public Health Director"], skills: ["Healthcare Policies & Regulations","Hospital Operations Management","Healthcare Finance","Epidemiology Basics","Quality Improvement","Strategic Planning","Public Relations","Crisis Management","Human Resources in Healthcare","Health Informatics"],
        education: 'Master of Public Health (MPH)',
        importantNote: "Balancing clinical outcomes with financial sustainability is the primary goal.",
        isRightForYou: ["You are a natural leader who understands complex organizational operations.","You care about improving public health outcomes on a macro, systemic level.","You are comfortable balancing clinical needs with strict financial budgets.","You have strong negotiation skills to deal with insurance companies and vendors.","You can navigate massive amounts of healthcare legislation and compliance laws."],
        industriesHiring: ["Hospitals","Government Agencies","NGOs","Health Insurance","Consulting"]
    },
    {
        id: 3, title: 'Business & Management', category: 'business', icon: 'barchart', color: '#F43F5E',
        description: 'Lead teams, manage projects, and drive strategy.',
        avgSalary: '₹12-35 LPA', growth: 'High',
        topRoles: ["Product Manager","Management Consultant"], futureRoles: ["CEO","Chief Operating Officer","VP of Strategy"], skills: ["Strategic Planning","Financial Analysis","Leadership & Team Management","Operations Management","Market Analysis","Risk Management","Negotiation","Change Management","Corporate Communication","Decision Making"],
        education: 'MBA / BBA',
        importantNote: "Networking and soft skills often outweigh technical knowledge at higher levels.",
        isRightForYou: ["You are a visionary leader who excels at motivating and managing large teams.","You are comfortable taking calculated risks and making high-stakes decisions.","You have strong financial acumen and understand how to drive profitability.","You are excellent at networking, public speaking, and corporate communication.","You can stay calm and strategic during corporate crises or market downturns."],
        industriesHiring: ["Corporate Sector","Startups","Consulting","Finance","Retail"]
    },
    {
        id: 7, title: 'Digital Marketing & Growth', category: 'business', icon: 'megaphone', color: '#EAB308',
        description: 'Drive brand awareness and revenue growth using digital channels.',
        avgSalary: '₹6-20 LPA', growth: 'High',
        topRoles: ["Marketing Manager","SEO Specialist"], futureRoles: ["Chief Marketing Officer (CMO)","VP of Growth"], skills: ["SEO/SEM","Content Marketing","Data Analytics (Google Analytics)","Social Media Strategy","Email Marketing Automation","Conversion Rate Optimization (CRO)","PPC Campaigns","Copywriting","A/B Testing","Marketing Psychology"],
        education: 'BBA / Certifications',
        importantNote: "Data-driven decision making has replaced purely creative marketing.",
        isRightForYou: ["You are both highly creative and deeply analytical, driven by data-backed results.","You love understanding consumer psychology and what drives purchasing behavior.","You are highly adaptable and constantly learn new social media algorithms.","You have strong writing skills and an eye for compelling visual aesthetics.","You enjoy running A/B tests and optimizing campaigns for ROI."],
        industriesHiring: ["Digital Agencies","E-commerce","Tech Startups","Media & Entertainment","Retail"]
    },
    {
        id: 8, title: 'Investment Banking', category: 'business', icon: 'landmark', color: '#10B981',
        description: 'Help corporations raise capital and manage portfolios.',
        avgSalary: '₹15-40 LPA', growth: 'Moderate',
        topRoles: ["Investment Banker","Financial Analyst"], futureRoles: ["Managing Director","Partner","Head of M&A"], skills: ["Financial Modeling","Valuation Methods (DCF, LBO)","Mergers & Acquisitions (M&A)","Corporate Finance","Advanced Excel / VBA","Pitchbook Creation","Market Research","Risk Assessment","Client Relationship Management","Analytical Thinking"],
        education: 'MBA Finance / CA / CFA',
        importantNote: "Extremely high stress and long hours are the norm, but the financial rewards are unmatched.",
        isRightForYou: ["You thrive under extreme pressure and do not mind working 80+ hour weeks.","You are a math and Excel wizard, naturally gifted at financial modeling.","You are highly competitive and motivated by high-stakes deals and high compensation.","You have exceptional attention to detail; a small error can ruin a multi-million dollar deal.","You enjoy corporate strategy and analyzing the financial health of massive companies."],
        industriesHiring: ["Investment Banks","Private Equity","Venture Capital","Hedge Funds","Corporate Strategy"]
    },
    {
        id: 301, title: 'Human Resources (HR)', category: 'business', icon: 'users', color: '#8B5CF6',
        description: 'Recruit top talent, manage employee relations.',
        avgSalary: '₹5-18 LPA', growth: 'Moderate',
        topRoles: ["HR Manager","Talent Lead"], futureRoles: ["Chief Human Resources Officer (CHRO)","VP of People"], skills: ["Talent Acquisition","Employee Relations","Performance Management","Employment Law & Compliance","Compensation & Benefits","HRIS Software (Workday)","Conflict Resolution","Organizational Development","Diversity & Inclusion","Onboarding Strategies"],
        education: 'MBA HR',
        importantNote: "Understanding employment law and resolving conflicts are everyday necessities.",
        isRightForYou: ["You possess high emotional intelligence and excel at resolving interpersonal conflicts.","You are passionate about building company culture and employee well-being.","You are comfortable navigating complex employment laws and compliance regulations.","You are persuasive and enjoy recruiting top talent to build winning teams.","You are trustworthy and can handle sensitive, confidential personnel issues."],
        industriesHiring: ["All Corporate Sectors","Tech","Manufacturing","Healthcare","Education"]
    },
    {
        id: 302, title: 'Supply Chain Management', category: 'business', icon: 'truck', color: '#F97316',
        description: 'Oversee the flow of goods globally.',
        avgSalary: '₹8-22 LPA', growth: 'High',
        topRoles: ["Supply Chain Manager","Logistics Director"], futureRoles: ["Chief Supply Chain Officer","VP of Global Logistics"], skills: ["Logistics Management","Inventory Control","Procurement & Sourcing","Demand Forecasting","Vendor Management","Warehouse Management Systems (WMS)","Supply Chain Optimization","Risk Mitigation","ERP Systems (SAP)","Negotiation Skills"],
        education: 'MBA Operations',
        importantNote: "Crisis management and forecasting are the most critical skills to master.",
        isRightForYou: ["You are highly analytical, organized, and a master of logistical planning.","You enjoy optimizing complex systems to save time, money, and resources.","You stay incredibly calm when global events disrupt your supply chains.","You have strong negotiation skills for dealing with international vendors.","You are comfortable analyzing massive datasets to forecast future demand."],
        industriesHiring: ["Manufacturing","E-commerce","Retail","Automotive","FMCG"]
    },
    {
        id: 303, title: 'Sales & Business Dev', category: 'business', icon: 'target', color: '#EF4444',
        description: 'Identify new opportunities and close enterprise deals.',
        avgSalary: '₹7-30 LPA', growth: 'Very High',
        topRoles: ["B2B Sales Leader","Account Executive"], futureRoles: ["Chief Revenue Officer (CRO)","VP of Global Sales"], skills: ["B2B Sales Strategies","Lead Generation & Prospecting","CRM Software (Salesforce)","Negotiation & Closing","Account Management","Market Expansion","Sales Presentation","Relationship Building","Objection Handling","Revenue Forecasting"],
        education: 'Any Degree',
        importantNote: "Resilience to rejection and high emotional intelligence define the best salespeople.",
        isRightForYou: ["You are highly persuasive, charismatic, and excellent at building relationships.","You have thick skin, handle rejection well, and bounce back quickly.","You are highly competitive and motivated by quotas, commissions, and targets.","You are an active listener who can identify a client's underlying pain points.","You excel at public speaking, pitching, and presenting under pressure."],
        industriesHiring: ["SaaS & Tech","Real Estate","Pharmaceuticals","Manufacturing","Financial Services"]
    },
    {
        id: 304, title: 'Project Management', category: 'business', icon: 'clipboard', color: '#06B6D4',
        description: 'Plan, execute, and deliver cross-functional projects.',
        avgSalary: '₹10-25 LPA', growth: 'High',
        topRoles: ["Scrum Master","Project Manager"], futureRoles: ["Head of PMO","VP of Operations"], skills: ["Agile/Scrum Frameworks","Project Scheduling & Budgeting","Risk Management","Stakeholder Management","Resource Allocation","Project Management Tools (Jira, Asana)","Quality Assurance","Scope Management","Team Leadership","Conflict Resolution"],
        education: 'PMP Certification',
        importantNote: "Certifications like PMP or Agile/Scrum Master are standard requirements.",
        isRightForYou: ["You are exceptionally organized and great at juggling multiple timelines simultaneously.","You are completely comfortable holding cross-functional teams accountable.","You enjoy taking a massive, vague goal and breaking it down into actionable steps.","You excel at crisis management and re-allocating resources when things go wrong.","You have strong communication skills to manage stakeholder expectations."],
        industriesHiring: ["Tech & Software","Construction","Engineering","Marketing Agencies","Healthcare"]
    },
    {
        id: 305, title: 'Startup Founder', category: 'business', icon: 'rocket', color: '#EC4899',
        description: 'Build your own company and disrupt industries.',
        avgSalary: 'Variable', growth: 'High Risk',
        topRoles: ["CEO","Startup Founder"], futureRoles: ["Serial Entrepreneur","Venture Partner","Angel Investor"], skills: ["Vision & Strategy","Fundraising & Pitching","Product-Market Fit Analysis","Financial Management","Sales & Marketing","Networking","Risk Tolerance","Recruitment & Team Building","Adaptability","Resilience & Grit"],
        education: 'No strict requirement',
        importantNote: "Comfort with extreme uncertainty and failure is a prerequisite.",
        isRightForYou: ["You are a visionary risk-taker who is entirely comfortable with extreme uncertainty.","You have an incredible work ethic and don't mind working 24/7 to build your dream.","You are resilient and view failures simply as stepping stones to success.","You are a highly persuasive storyteller, capable of convincing investors to back you.","You are adaptable and willing to pivot your entire product when the market demands it."],
        industriesHiring: ["Tech Startups","E-commerce","SaaS","Fintech","Green Energy"]
    },
    {
        id: 306, title: 'Wealth Management', category: 'business', icon: 'briefcase', color: '#84CC16',
        description: 'Advise high-net-worth individuals on investments.',
        avgSalary: '₹8-25 LPA', growth: 'Moderate',
        topRoles: ["Wealth Advisor","Private Banker"], futureRoles: ["Partner at Wealth Firm","Family Office Director"], skills: ["Portfolio Management","Asset Allocation","Estate Planning","Tax Strategy","Client Relationship Building","Financial Analysis","Risk Analysis","Retirement Planning","Regulatory Compliance","Sales & Persuasion"],
        education: 'CFP / CA / MBA',
        importantNote: "Trust and maintaining long-term relationships with clients are everything.",
        isRightForYou: ["You are highly trustworthy and excel at building deep, long-term relationships.","You have a strong understanding of financial markets, taxes, and estate planning.","You are excellent at explaining complex financial concepts to non-technical clients.","You are highly analytical and enjoy crafting personalized investment portfolios.","You are comfortable networking with high-net-worth individuals and family offices."],
        industriesHiring: ["Private Banks","Wealth Management Firms","Family Offices","Asset Management"]
    },
    {
        id: 307, title: 'Actuarial Science', category: 'business', icon: 'bar-chart', color: '#6366F1',
        description: 'Analyze financial risk for insurance and pensions.',
        avgSalary: '₹10-30 LPA', growth: 'Moderate',
        topRoles: ["Actuary","Risk Analyst"], futureRoles: ["Chief Risk Officer","Chief Actuary"], skills: ["Probability & Statistics","Financial Risk Modeling","Insurance Mathematics","VBA / R / Python","Data Analysis","Predictive Modeling","Regulatory Frameworks","Financial Reporting","Problem Solving","Attention to Detail"],
        education: 'Actuarial Exams',
        importantNote: "Clearing the rigorous series of actuarial exams is the biggest hurdle.",
        isRightForYou: ["You are exceptionally gifted at statistics, probability, and advanced mathematics.","You enjoy assessing and quantifying future risks using complex data models.","You have the discipline to study for and pass a rigorous series of professional exams.","You are highly detail-oriented and enjoy working behind the scenes in finance.","You possess strong coding skills (Python/R) for predictive data modeling."],
        industriesHiring: ["Insurance Providers","Consulting Firms","Government","Pension Funds","Investment Banks"]
    },
    {
        id: 308, title: 'Management Consulting', category: 'business', icon: 'lightbulb', color: '#F43F5E',
        description: 'Help organizations solve issues, create value, and maximize growth.',
        avgSalary: '₹12-40 LPA', growth: 'High',
        topRoles: ["Strategy Consultant","Consultant"], futureRoles: ["Senior Partner","Global Practice Head"], skills: ["Problem Structuring (MECE)","Financial Modeling","Market Analysis","Client Presentation & Storytelling","Data Analysis","Process Improvement","Strategic Planning","Change Management","Stakeholder Interactions","Advanced PowerPoint & Excel"],
        education: 'MBA',
        importantNote: "Involves heavy travel and the ability to solve ambiguous problems under tight deadlines.",
        isRightForYou: ["You are a fast learner who can quickly become an expert in completely new industries.","You are excellent at structuring ambiguous problems into logical, solvable frameworks.","You don't mind living out of a suitcase and traveling constantly to client sites.","You excel at creating compelling, data-backed PowerPoint presentations.","You are comfortable advising C-suite executives who are much older than you."],
        industriesHiring: ["Strategy Consulting (MBB)","Big 4 Accounting","Boutique Advisory Firms","Corporate Strategy"]
    },
    {
        id: 4, title: 'UX/UI Design', category: 'creative', icon: 'palette', color: '#8B5CF6',
        description: 'Create intuitive, beautiful digital experiences.',
        avgSalary: '₹6-20 LPA', growth: 'Very High',
        topRoles: ["UX Designer","Product Designer"], futureRoles: ["VP of Design","Chief Design Officer","Creative Director"], skills: ["Wireframing & Prototyping","User Research & Testing","Figma / Sketch / Adobe XD","Interaction Design","Visual Design Principles","Information Architecture","Usability Testing","Design Systems","HTML/CSS Basics","Empathy for Users"],
        education: 'B.Des / Portfolio',
        importantNote: "A strong, curated portfolio is your true resume.",
        isRightForYou: ["You have deep empathy for end-users and always advocate for their needs.","You appreciate aesthetic beauty but prioritize functionality and intuition.","You are comfortable accepting criticism and iterating designs based on feedback.","You enjoy conducting research, interviews, and analyzing user interaction data.","You have an eye for spatial layout, typography, and color theory."],
        industriesHiring: ["Tech & Software","Agencies","E-commerce","Fintech","Media"]
    },
    {
        id: 11, title: 'Architecture & Urban Planning', category: 'creative', icon: 'building', color: '#6366F1',
        description: 'Design buildings and master-plan cities sustainably.',
        avgSalary: '₹5-18 LPA', growth: 'Moderate',
        topRoles: ["Architect","Urban Planner"], futureRoles: ["Principal Architect","City Planning Director"], skills: ["Architectural Design","CAD / AutoCAD / Revit","Urban Planning Regulations","3D Rendering (Lumion/V-Ray)","Building Codes & Zoning","Sustainable Design (LEED)","Project Management","Structural Fundamentals","Client Presentations","Spatial Awareness"],
        education: 'B.Arch',
        importantNote: "Licensure is legally required to sign off on building plans.",
        isRightForYou: ["You have a unique blend of creative artistic flair and logical, structural thinking.","You want to leave a permanent, physical, and beautiful mark on the world.","You have excellent spatial awareness and can visualize 3D spaces from 2D plans.","You are patient enough to navigate complex zoning laws and building codes.","You enjoy collaborating closely with engineers, contractors, and clients."],
        industriesHiring: ["Architectural Firms","Real Estate Developers","Urban Planning","Construction","Government"]
    },
    {
        id: 12, title: 'Content Creation & Journalism', category: 'creative', icon: 'pentool', color: '#F97316',
        description: 'Research, write, and produce stories for digital media.',
        avgSalary: '₹4-15 LPA', growth: 'High',
        topRoles: ["Content Creator","Journalist"], futureRoles: ["Editor-in-Chief","VP of Content","Media Director"], skills: ["Copywriting & Editing","SEO Writing","Social Media Strategy","Storytelling","Video/Audio Editing Basics","CMS Platforms (WordPress)","Content Strategy","Journalistic Ethics","Audience Research","Interviewing Skills"],
        education: 'BA Journalism / Mass Comm',
        importantNote: "Building a personal brand and audience is increasingly vital for success.",
        isRightForYou: ["You are intensely curious about the world and constantly asking 'why?'.","You are a natural storyteller with a deeply engaging writing or speaking style.","You have a relentless drive to uncover the truth and hold people accountable.","You thrive under the pressure of tight deadlines and breaking news.","You are excellent at networking and getting people to open up in interviews."],
        industriesHiring: ["News Organizations","Digital Media","Publishing","Corporate Comms","PR Agencies"]
    },
    {
        id: 401, title: 'Graphic Design', category: 'creative', icon: 'image', color: '#EC4899',
        description: 'Design brand identities, marketing materials, and digital art.',
        avgSalary: '₹3-12 LPA', growth: 'Moderate',
        topRoles: ["Art Director","Graphic Designer"], futureRoles: ["Creative Director","Head of Brand Identity"], skills: ["Adobe Creative Suite (Photoshop, Illustrator, InDesign)","Typography","Color Theory","Branding & Identity","Layout Design","Vector Graphics","Print Design vs Digital Design","Photo Editing","UI Design Basics","Creative Problem Solving"],
        education: 'BFA / B.Des / Portfolio',
        importantNote: "Understanding marketing psychology is what separates good designers from great ones.",
        isRightForYou: ["You are highly visual, with an innate eye for color, typography, and layout.","You love translating complex, abstract ideas into simple, beautiful designs.","You are comfortable receiving subjective feedback and revising your work.","You stay up-to-date with the latest visual trends in digital and print media.","You enjoy using software like Illustrator, Photoshop, and InDesign."],
        industriesHiring: ["Advertising","Publishing","Corporate Marketing","Tech Startups","Freelance"]
    },
    {
        id: 402, title: 'Animation & VFX', category: 'creative', icon: 'video', color: '#3B82F6',
        description: 'Create visual effects and animations for movies and games.',
        avgSalary: '₹4-15 LPA', growth: 'High',
        topRoles: ["VFX Artist","3D Animator"], futureRoles: ["VFX Supervisor","Animation Studio Head"], skills: ["2D/3D Animation","Maya / Blender / After Effects","Motion Graphics","Compositing","Storyboarding","Character Rigging","Lighting & Texturing","Visual Effects (VFX)","Physics & Anatomy for Animation","Rendering Pipelines"],
        education: 'B.Sc Animation',
        importantNote: "Patience and extreme attention to frame-by-frame detail are required.",
        isRightForYou: ["You are highly observant of how things move in the real world (gravity, weight).","You possess the extreme patience required for frame-by-frame detailed work.","You love cinematic storytelling and bringing inanimate objects to life.","You are comfortable with both the artistic and highly technical aspects of 3D software.","You enjoy collaborating in large pipelines to produce films or video games."],
        industriesHiring: ["Film & TV","Gaming","Advertising","Architecture","Education"]
    },
    {
        id: 403, title: 'Fashion Design', category: 'creative', icon: 'scissors', color: '#F43F5E',
        description: 'Design clothing ranges and accessories.',
        avgSalary: '₹4-20 LPA', growth: 'Moderate',
        topRoles: ["Fashion Designer","Stylist"], futureRoles: ["Creative Director of Fashion House","Lead Apparel Designer"], skills: ["Garment Construction","Pattern Making","Textile Knowledge","Fashion Illustration","Trend Forecasting","Adobe Illustrator for Fashion","Sewing Techniques","Brand Development","Sourcing & Manufacturing","Retail Math"],
        education: 'B.Des Fashion Design',
        importantNote: "The industry is highly competitive; networking is as important as talent.",
        isRightForYou: ["You have an impeccable, innate sense of personal style and aesthetics.","You have a deep understanding of textiles, fabrics, and garment construction.","You are highly observant of culture and can anticipate or invent new trends.","You have the thick skin required to survive in a highly critical, competitive industry.","You enjoy the fast-paced nature of seasonal collections and runway shows."],
        industriesHiring: ["Apparel Brands","Haute Couture","Retailers","Textile Manufacturing","Media"]
    },
    {
        id: 404, title: 'Interior Design', category: 'creative', icon: 'home', color: '#10B981',
        description: 'Design functional and aesthetic indoor spaces.',
        avgSalary: '₹3-14 LPA', growth: 'Moderate',
        topRoles: ["Interior Architect","Space Planner"], futureRoles: ["Principal Interior Architect","Design Firm Partner"], skills: ["Space Planning","Color & Lighting Design","AutoCAD / SketchUp","Material Selection","Furniture Design Basics","Building Codes Compliance","3D Rendering","Budgeting","Project Management","Client Communication"],
        education: 'B.Sc Interior Design',
        importantNote: "Understanding spatial flow and building codes is as important as aesthetics.",
        isRightForYou: ["You understand spatial flow and how environments affect human psychology.","You love optimizing indoor aesthetics with color, lighting, and texture.","You can balance a client's specific taste with highly functional design.","You are detail-oriented regarding building codes, safety, and precise measurements.","You enjoy sourcing materials and managing contractors to bring a vision to life."],
        industriesHiring: ["Interior Design Firms","Real Estate","Hospitality","Retail","Corporate Workspaces"]
    },
    {
        id: 405, title: 'Product Design', category: 'creative', icon: 'box', color: '#0EA5E9',
        description: 'Design physical products from electronics to furniture.',
        avgSalary: '₹6-18 LPA', growth: 'High',
        topRoles: ["Industrial Designer","CMF Designer"], futureRoles: ["VP of Product Design","Head of Industrial Design"], skills: ["3D CAD Modeling (SolidWorks/Fusion 360)","Design for Manufacturing (DFM)","Prototyping","Ergonomics","Material Science","Human-Centered Design","User Research","Aesthetics & Form","Rendering","Lifecycle Analysis"],
        education: 'B.Des / M.Des',
        importantNote: "Balancing aesthetics with manufacturability and cost is the core challenge.",
        isRightForYou: ["You love inventing physical objects and figuring out how things are put together.","You understand both the aesthetic form and the mechanical function of a product.","You have a strong understanding of materials, ergonomics, and manufacturing processes.","You are comfortable using 3D CAD software and building physical prototypes.","You enjoy iterating designs based on user testing and cost constraints."],
        industriesHiring: ["Consumer Electronics","Automotive","Furniture Design","Medical Devices","Toys"]
    },
    {
        id: 406, title: 'Photography & Filmmaking', category: 'creative', icon: 'camera', color: '#EAB308',
        description: 'Direct movies, shoot photography, and produce video content.',
        avgSalary: '₹4-25 LPA', growth: 'Moderate',
        topRoles: ["Film Director","Cinematographer"], futureRoles: ["Director of Photography (DP)","Executive Producer"], skills: ["Camera Operation & Lenses","Lighting Design","Composition & Framing","Video Editing (Premiere Pro/Final Cut)","Color Grading","Audio Recording","Storyboarding","Directing Talent","Post-Production Workflow","Visual Storytelling"],
        education: 'B.Sc Filmmaking',
        importantNote: "Technical mastery of gear must be paired with an artistic eye.",
        isRightForYou: ["You see the entire world in frames, compositions, and lighting angles.","You are highly observant and know how to capture raw, authentic emotion visually.","You are a master of highly technical camera gear, lenses, and lighting equipment.","You are comfortable directing people and managing the chaos of a live set.","You possess the patience required for tedious post-production editing and color grading."],
        industriesHiring: ["Film Production","Advertising","Media & Journalism","Events","Freelance"]
    },
    {
        id: 407, title: 'Copywriting & Advertising', category: 'creative', icon: 'type', color: '#8B5CF6',
        description: 'Write persuasive copy for ad campaigns and brands.',
        avgSalary: '₹4-15 LPA', growth: 'High',
        topRoles: ["Creative Director","Senior Copywriter"], futureRoles: ["Creative Group Head","Chief Creative Officer"], skills: ["Persuasive Writing","SEO Copywriting","Brand Voice Consistency","Ad Concepting","A/B Testing Copy","Market Research","Editing & Proofreading","Social Media Copy","Creative Strategy","Consumer Psychology"],
        education: 'BA English/Mass Comm',
        importantNote: "The ability to write persuasively and understand human psychology is key.",
        isRightForYou: ["You have a brilliant way with words and can distill complex ideas into catchy phrases.","You deeply understand consumer psychology and what drives people to take action.","You are highly creative but also care about metrics, analytics, and A/B testing.","You can easily adapt your writing style to match completely different brand voices.","You enjoy brainstorming sessions and collaborating with art directors."],
        industriesHiring: ["Ad Agencies","Tech Companies","E-commerce","Non-Profits","Media"]
    },
    {
        id: 408, title: 'Game Art & Design', category: 'creative', icon: 'gamepad', color: '#F97316',
        description: 'Create 2D/3D assets, levels, and narrative for video games.',
        avgSalary: '₹5-18 LPA', growth: 'High',
        topRoles: ["Game Artist","Level Designer"], futureRoles: ["Art Director","Lead Game Artist"], skills: ["Concept Art","3D Modeling & Texturing","ZBrush / Maya","Environment Design","Character Design","Game Engines (Unity/Unreal)","UI/UX for Games","Animation Basics","Optimization for Games","Visual Storytelling"],
        education: 'B.Des Game Art',
        importantNote: "Adapting to different art styles quickly makes you highly valuable.",
        isRightForYou: ["You love drawing, world-building, and creating visually stunning environments.","You have a deep understanding of anatomy, color theory, and digital painting.","You enjoy collaborating with engineers to bring your interactive art to life.","You are adaptable and can switch between hyper-realistic and stylized art styles.","You are comfortable optimizing your artwork to run efficiently within a game engine."],
        industriesHiring: ["Game Studios","Animation Studios","AR/VR Companies","Advertising","Freelance"]
    },
    {
        id: 5, title: 'Law & Legal Practice', category: 'law', icon: 'scale', color: '#D97706',
        description: 'Advocate for justice, advise clients, and specialize in corporate/criminal law.',
        avgSalary: '₹7-25 LPA', growth: 'Moderate',
        topRoles: ["Corporate Lawyer","Litigation Advocate"], futureRoles: ["Senior Partner","Judge","General Counsel"], skills: ["Legal Research (LexisNexis/Westlaw)","Contract Drafting","Litigation & Trial Advocacy","Negotiation","Client Counseling","Case Analysis","Legal Writing","Statutory Interpretation","Courtroom Procedures","Persuasion & Argumentation"],
        education: 'BA LLB',
        importantNote: "Passing the Bar exam and immense amounts of reading are required.",
        isRightForYou: ["You are highly analytical, logical, and excel at structuring persuasive arguments.","You are completely comfortable reading and synthesizing massive text documents.","You have excellent public speaking, debate, and negotiation skills.","You are highly competitive and thrive in adversarial, high-stakes environments.","You are meticulous; a single misplaced comma in a contract can change a case."],
        industriesHiring: ["Law Firms","Corporate Counsel","Government","NGOs","Judiciary"]
    },
    {
        id: 501, title: 'Cyber Law & Data Privacy', category: 'law', icon: 'shield', color: '#3B82F6',
        description: 'Advise on data protection, tech compliance, and cyber crimes.',
        avgSalary: '₹8-22 LPA', growth: 'Very High',
        topRoles: ["Privacy Counsel","Cyber Lawyer"], futureRoles: ["Chief Privacy Officer","Technology Policy Director"], skills: ["Data Privacy Laws (GDPR, CCPA)","Cybersecurity Frameworks","Technology Contracts","Incident Response Counseling","Risk Assessment","Intellectual Property Basics","Compliance Auditing","Policy Drafting","Cloud Computing Law","Breach Notification Procedures"],
        education: 'LLB + Cyber Law',
        importantNote: "Law changes rapidly in this field; constant updates are required.",
        isRightForYou: ["You are fascinated by the intersection of rapidly evolving technology and the law.","You care deeply about data privacy, user rights, and digital security.","You want to help shape policies for AI, cybersecurity, and global data flow.","You are comfortable constantly learning, as tech laws change almost daily.","You enjoy advising tech giants or startups on regulatory compliance."],
        industriesHiring: ["Tech Companies","Law Firms","Government","Consulting","E-commerce"]
    },
    {
        id: 502, title: 'Intellectual Property (IP)', category: 'law', icon: 'file-text', color: '#8B5CF6',
        description: 'Protect patents, trademarks, copyrights, and trade secrets.',
        avgSalary: '₹8-20 LPA', growth: 'High',
        topRoles: ["Patent Attorney","IP Consultant"], futureRoles: ["Head of IP Strategy","Patent Office Director"], skills: ["Patent Prosecution","Trademark Registration","Copyright Law","IP Litigation","Licensing Agreements","Technical Background (Science/Engineering)","Prior Art Searching","Trade Secrets","Drafting Patent Claims","Negotiation"],
        education: 'B.Tech/B.Sc + LLB',
        importantNote: "A background in science or engineering is often required for patent law.",
        isRightForYou: ["You have a unique background combining hard science/engineering with legal acumen.","You are deeply interested in innovation and protecting the rights of inventors.","You are highly meticulous when drafting complex patent claims and applications.","You enjoy litigating high-stakes cases over copyrights and technical trade secrets.","You are comfortable translating dense technical concepts to judges and juries."],
        industriesHiring: ["IP Law Firms","Pharmaceuticals","Tech Giants","Universities","Entertainment"]
    },
    {
        id: 503, title: 'Corporate & M&A Law', category: 'law', icon: 'briefcase', color: '#10B981',
        description: 'Handle complex mergers, acquisitions, and corporate governance.',
        avgSalary: '₹12-40 LPA', growth: 'Moderate',
        topRoles: ["M&A Partner","In-house Counsel"], futureRoles: ["M&A Partner","Chief Legal Officer"], skills: ["Mergers & Acquisitions","Corporate Governance","Securities Law","Due Diligence","Contract Negotiation","Venture Capital Financing","Drafting Term Sheets","Antitrust Law","Tax Implications of M&A","Board of Directors Advisory"],
        education: 'BA LLB / LLM',
        importantNote: "High pressure and tight deadlines are common during major corporate deals.",
        isRightForYou: ["You are comfortable with high-stakes, fast-paced corporate environments.","You love facilitating massive business combinations and billion-dollar deals.","You thrive under pressure and don't mind working exhausting hours to close a deal.","You possess exceptional negotiation skills and extreme attention to detail.","You enjoy understanding the complex financial structures of large corporations."],
        industriesHiring: ["Big Law Firms","Investment Banks","Private Equity","Corporate Counsel"]
    },
    {
        id: 504, title: 'Taxation Law', category: 'law', icon: 'percent', color: '#F43F5E',
        description: 'Navigate complex tax codes to advise corporations.',
        avgSalary: '₹10-30 LPA', growth: 'Moderate',
        topRoles: ["Tax Consultant","Tax Litigator"], futureRoles: ["Partner (Tax Practice)","Director of Revenue"], skills: ["Corporate Tax Law","International Taxation","Tax Planning & Strategy","Estate Planning","IRS Audit Defense","Accounting Principles","Compliance","Tax Litigation","Wealth Management Law","Detail Orientation"],
        education: 'LLB + CA',
        importantNote: "Attention to detail with numbers and constantly changing tax codes is essential.",
        isRightForYou: ["You are deeply analytical, detail-oriented, and highly comfortable with numbers.","You view the complex, ever-changing tax code as a puzzle to be solved.","You enjoy finding legal avenues to optimize financial outcomes for clients.","You have the patience to navigate massive amounts of bureaucratic regulations.","You are comfortable defending clients during high-stress government audits."],
        industriesHiring: ["Accounting Firms","Tax Law Boutiques","Corporate Finance","Wealth Management"]
    },
    {
        id: 505, title: 'International & Human Rights Law', category: 'law', icon: 'globe', color: '#0EA5E9',
        description: 'Work with NGOs, UN, and governments on treaties and human rights.',
        avgSalary: '₹5-15 LPA', growth: 'Low',
        topRoles: ["Human Rights Advocate","Policy Advisor"], futureRoles: ["UN Legal Advisor","International Court Judge"], skills: ["International Treaties","Human Rights Advocacy","Diplomacy","Public International Law","Immigration Law","Policy Analysis","Cross-Cultural Communication","NGO Operations","Foreign Languages","Dispute Resolution (Arbitration)"],
        education: 'BA LLB + LLM',
        importantNote: "Fluency in multiple languages and living abroad are often required.",
        isRightForYou: ["You have a global perspective and care deeply about fundamental human rights.","You are interested in diplomacy, foreign policy, and international treaties.","You are adaptable, culturally aware, and potentially fluent in multiple languages.","You want to make a systemic impact by working with NGOs or the United Nations.","You are patient enough to navigate incredibly slow international bureaucracies."],
        industriesHiring: ["United Nations","NGOs","Government Diplomacy","International Courts","Academia"]
    },
    {
        id: 506, title: 'Environmental Law', category: 'law', icon: 'leaf', color: '#84CC16',
        description: 'Focus on climate change, sustainability, and resource rights.',
        avgSalary: '₹6-18 LPA', growth: 'High',
        topRoles: ["Environmental Lawyer","Sustainability Counsel"], futureRoles: ["Head of Environmental Policy","Sustainability Director"], skills: ["Environmental Regulations (EPA)","Energy Law","Sustainability Reporting","Land Use Permitting","Climate Change Litigation","Administrative Law","Corporate Compliance","Toxic Torts","Negotiation with Agencies","Scientific Literacy"],
        education: 'LLB + Environmental Law',
        importantNote: "Passion for the environment is needed to navigate slow bureaucratic systems.",
        isRightForYou: ["You are deeply passionate about protecting the planet and combating climate change.","You want to use the legal system to enforce sustainability and corporate accountability.","You have a strong grasp of environmental science and regulatory frameworks.","You are comfortable taking on massive corporate entities in high-profile litigation.","You enjoy the intersection of law, public policy, and scientific data."],
        industriesHiring: ["Environmental NGOs","Energy Companies","Government Agencies","Specialized Law Firms"]
    },
    {
        id: 507, title: 'Family & Divorce Law', category: 'law', icon: 'users', color: '#EC4899',
        description: 'Handle legal matters involving domestic relations.',
        avgSalary: '₹5-20 LPA', growth: 'Moderate',
        topRoles: ["Family Lawyer","Mediator"], futureRoles: ["Senior Family Judge","Partner (Family Law)"], skills: ["Divorce Litigation","Child Custody & Support","Mediation & ADR","Prenuptial Agreements","Asset Division","Emotional Intelligence","Empathy & Patience","Financial Analysis (for assets)","Domestic Violence Law","Client Counseling"],
        education: 'LLB',
        importantNote: "Requires extreme emotional intelligence and boundary-setting to avoid burnout.",
        isRightForYou: ["You are highly empathetic and want to help people through their darkest times.","You have immense emotional resilience to avoid burnout from daily traumatic cases.","You excel at mediation, de-escalation, and alternative dispute resolution.","You can set strict professional boundaries while remaining compassionate.","You are comfortable handling sensitive issues like child custody and asset division."],
        industriesHiring: ["Family Law Boutiques","Solo Practice","Legal Aid Clinics","Mediation Centers"]
    },
    {
        id: 508, title: 'Judiciary (Civil/Criminal Judge)', category: 'law', icon: 'award', color: '#D97706',
        description: 'Preside over court proceedings, interpret the law, and deliver judgments.',
        avgSalary: '₹10-25 LPA', growth: 'Stable',
        topRoles: ["District Judge","High Court Justice"], futureRoles: ["High Court Judge","Supreme Court Justice"], skills: ["Impartial Decision Making","Statutory Interpretation","Evidence Law","Trial Management","Legal Writing (Opinions)","Constitutional Law","Conflict Resolution","Ethics & Integrity","Public Speaking","Analytical Reasoning"],
        education: 'LLB + Judicial Services Exam',
        importantNote: "Impeccable ethical standards and a long history of legal practice are required.",
        isRightForYou: ["You have a profound respect for the rule of law and the administration of justice.","You are highly impartial, unbiased, and adhere strictly to judicial ethics.","You have a long history of legal practice and impeccable analytical skills.","You are comfortable making decisions that permanently alter peoples lives.","You have the temperament to manage a courtroom and keep proceedings orderly."],
        industriesHiring: ["Government","Court Systems"]
    },
    {
        id: 509, title: 'Sports & Entertainment Law', category: 'law', icon: 'music', color: '#6366F1',
        description: 'Negotiate contracts for athletes, musicians, and production houses.',
        avgSalary: '₹6-25 LPA', growth: 'Moderate',
        topRoles: ["Entertainment Counsel","Sports Agent"], futureRoles: ["Sports Agency Director","Head of Entertainment Law"], skills: ["Contract Negotiation","IP & Trademark Law","Talent Representation","Endorsement Deals","Media Rights","Labor Law (Unions/Players Assoc.)","Dispute Resolution","Public Relations","Brand Protection","Entertainment Industry Knowledge"],
        education: 'LLB + Media Internships',
        importantNote: "Networking and negotiation skills are heavily utilized.",
        isRightForYou: ["You love the business side of the sports, music, or film industries.","You excel at negotiating lucrative contracts, endorsements, and media rights.","You are charismatic and comfortable representing high-profile, demanding talent.","You have a strong understanding of intellectual property and brand protection.","You are highly networked and thrive in the entertainment industry culture."],
        industriesHiring: ["Talent Agencies","Sports Franchises","Film Studios","Record Labels","Boutique Law Firms"]
    },
    {
        id: 510, title: 'Real Estate Law', category: 'law', icon: 'home', color: '#F97316',
        description: 'Advise on real estate transactions, property disputes, and land zoning.',
        avgSalary: '₹6-18 LPA', growth: 'Moderate',
        topRoles: ["Real Estate Attorney","Property Consultant"], futureRoles: ["Partner (Real Estate)","Development Legal Head"], skills: ["Property Law","Zoning & Land Use","Real Estate Transactions","Lease Drafting","Title Examination","Construction Law","Real Estate Finance","Environmental Restrictions","Contract Negotiation","Due Diligence"],
        education: 'LLB + Real Estate Experience',
        importantNote: "Understanding local zoning laws and urban politics is crucial.",
        isRightForYou: ["You are interested in property development, real estate finance, and urban growth.","You are highly detail-oriented when drafting leases and examining property titles.","You want to help facilitate major infrastructure, commercial, or housing projects.","You enjoy negotiating complex contracts between buyers, sellers, and banks.","You are comfortable navigating local zoning laws and municipal regulations."],
        industriesHiring: ["Real Estate Developers","Law Firms","Government Zoning Boards","Title Companies"]
    },
    {
        id: 6, title: 'Data Science & AI', category: 'data', icon: 'database', color: '#059669',
        description: 'Extract insights from data and build intelligent systems.',
        avgSalary: '₹10-30 LPA', growth: 'Very High',
        topRoles: ["Data Scientist","ML Engineer"], futureRoles: ["Chief Data Scientist","VP of AI","Head of Data"], skills: ["Machine Learning Algorithms","Python/R","Data Visualization","Statistical Analysis","SQL","Big Data (Hadoop/Spark)","Deep Learning","Data Wrangling","Business Acumen","Cloud Computing (AWS/GCP)"],
        education: 'B.Tech/M.Tech CS',
        importantNote: "Math and statistics are the foundation; tools and languages change, but math doesn't.",
        isRightForYou: ["You love uncovering hidden patterns and insights within massive, messy datasets.","You are exceptionally gifted at statistics, mathematics, and probability.","You are comfortable writing code (Python/R) to build complex predictive models.","You are highly curious and constantly asking questions about why things happen.","You enjoy translating complex algorithms into actionable business strategies."],
        industriesHiring: ["Tech & FAANG","Finance","Healthcare","E-commerce","Consulting"]
    },
    {
        id: 601, title: 'Data Analytics', category: 'data', icon: 'bar-chart', color: '#3B82F6',
        description: 'Analyze historical data to discover trends and empower business decisions.',
        avgSalary: '₹6-15 LPA', growth: 'Very High',
        topRoles: ["Data Analyst","BI Analyst"], futureRoles: ["VP of Analytics","Chief Analytics Officer"], skills: ["SQL & NoSQL","Data Visualization (Tableau/PowerBI)","Python/R for Analytics","A/B Testing","Statistical Analysis","Data Cleaning","Business Intelligence","Excel (Advanced)","Storytelling with Data","Metrics & KPIs"],
        education: 'Any Degree + Analytics',
        importantNote: "The ability to communicate data insights to non-technical stakeholders is vital.",
        isRightForYou: ["You are naturally curious and love telling compelling stories using numbers.","You excel at simplifying complex metrics for non-technical executives.","You enjoy building beautiful, intuitive dashboards using tools like Tableau/PowerBI.","You are highly focused on metrics, KPIs, and tracking business performance.","You possess strong SQL skills to extract exactly the data you need."],
        industriesHiring: ["Retail","Tech","Finance","Healthcare","Marketing Agencies"]
    },
    {
        id: 602, title: 'Data Engineering', category: 'data', icon: 'layers', color: '#8B5CF6',
        description: 'Build pipelines to ingest, store, and process big data.',
        avgSalary: '₹12-28 LPA', growth: 'Very High',
        topRoles: ["Data Engineer","Big Data Architect"], futureRoles: ["Head of Data Infrastructure","VP of Data Engineering"], skills: ["Data Pipelines (ETL/ELT)","Apache Spark/Kafka","Cloud Data Warehouses (Snowflake/BigQuery)","Python/Java/Scala","SQL Optimization","Data Modeling","Airflow/Orchestration","Database Administration","CI/CD","Data Security"],
        education: 'B.Tech CS / IT',
        importantNote: "Data engineers are often in higher demand than data scientists to build the foundations.",
        isRightForYou: ["You care deeply about system architecture, scalability, and performance.","You love building robust pipelines to move and transform terabytes of data.","You prefer hardcore backend engineering over statistical analysis and modeling.","You are an expert in SQL, distributed systems (Spark), and cloud data warehouses.","You enjoy solving the foundational problems that make data science possible."],
        industriesHiring: ["Tech Companies","Streaming Services","Finance","Retail","Telecommunications"]
    },
    {
        id: 603, title: 'Generative AI Engineering', category: 'data', icon: 'zap', color: '#F43F5E',
        description: 'Develop applications using Large Language Models (LLMs).',
        avgSalary: '₹15-40 LPA', growth: 'Extreme',
        topRoles: ["AI Application Engineer","LLM Researcher"], futureRoles: ["Director of AI Research","VP of GenAI Solutions"], skills: ["Large Language Models (LLMs)","Prompt Engineering","Fine-tuning Models","Transformers Architecture","Python (PyTorch/TensorFlow)","Vector Databases (Pinecone, Milvus)","LangChain / LlamaIndex","API Integration","Model Evaluation","AI Safety & Ethics"],
        education: 'B.Tech CS / AI Specialization',
        importantNote: "This space evolves weekly; constant reading of research papers is necessary.",
        isRightForYou: ["You want to be at the absolute forefront of the AI and Large Language Model revolution.","You are fascinated by generative systems creating text, code, audio, or art.","You have a strong grasp of neural networks, transformers, and prompt engineering.","You are comfortable in a field that changes drastically every single month.","You think critically about AI safety, ethics, and reducing model hallucinations."],
        industriesHiring: ["AI Startups","Tech Giants","Healthcare Tech","Legal Tech","Creative Agencies"]
    },
    {
        id: 604, title: 'Quantitative Analysis (Quant)', category: 'data', icon: 'trending-up', color: '#10B981',
        description: 'Apply advanced math to find alpha in financial markets.',
        avgSalary: '₹20-60+ LPA', growth: 'High',
        topRoles: ["Quant Researcher","Algorithmic Trader"], futureRoles: ["Head of Quantitative Trading","Portfolio Manager"], skills: ["Stochastic Calculus","Time Series Analysis","C++ / Python / KDB+","Algorithmic Trading","Risk Modeling","Financial Markets Knowledge","Machine Learning","Optimization Algorithms","Backtesting","High-Frequency Trading Concepts"],
        education: 'B.Tech / M.Sc Math (IIT/ISI)',
        importantNote: "Extreme mathematical rigor and comfort with building models that handle massive money.",
        isRightForYou: ["You are a math genius who loves financial markets and complex algorithms.","You thrive in the incredibly high-pressure environment of algorithmic trading.","You have elite C++ or Python skills to build lightning-fast trading systems.","You are comfortable building models that automatically handle millions of dollars.","You are highly analytical, competitive, and entirely data-driven."],
        industriesHiring: ["Hedge Funds","Proprietary Trading Firms","Investment Banks","Asset Management"]
    },
    {
        id: 605, title: 'Computer Vision Engineering', category: 'data', icon: 'eye', color: '#0EA5E9',
        description: 'Train models that enable computers to interpret visual data.',
        avgSalary: '₹12-35 LPA', growth: 'High',
        topRoles: ["CV Engineer","Robotics Researcher"], futureRoles: ["Lead Autonomous Systems Engineer","VP of Computer Vision"], skills: ["Image Processing","Object Detection & Tracking","Deep Learning (PyTorch/TensorFlow)","OpenCV","Convolutional Neural Networks (CNNs)","Python/C++","3D Vision","Edge AI (TensorRT)","Sensor Fusion","Algorithm Optimization"],
        education: 'B.Tech / M.Tech AI & ML',
        importantNote: "Deep understanding of deep learning and optimization for edge devices.",
        isRightForYou: ["You want to teach machines how to 'see' and interpret the visual world.","You are passionate about technologies like self-driving cars or facial recognition.","You have a deep understanding of Convolutional Neural Networks (CNNs).","You are skilled at image processing, object detection, and tracking algorithms.","You enjoy optimizing heavy deep-learning models to run on edge devices."],
        industriesHiring: ["Automotive (Self-Driving)","Healthcare Diagnostics","Manufacturing","Security & Surveillance","Retail"]
    },
    {
        id: 606, title: 'Natural Language Processing', category: 'data', icon: 'message-square', color: '#EC4899',
        description: 'Build systems that interpret and generate human language.',
        avgSalary: '₹12-35 LPA', growth: 'High',
        topRoles: ["NLP Scientist","Conversational AI Lead"], futureRoles: ["Head of Conversational AI","Principal NLP Scientist"], skills: ["Text Processing & Tokenization","Transformer Models (BERT, GPT)","Sentiment Analysis","Named Entity Recognition (NER)","Python (NLTK, spaCy, Hugging Face)","Machine Translation","Language Modeling","Deep Learning","Information Extraction","Speech Recognition Algorithms"],
        education: 'B.Tech / M.Tech AI',
        importantNote: "Understanding linguistics alongside machine learning yields the best results.",
        isRightForYou: ["You are fascinated by human language, linguistics, and syntactic structures.","You want to teach computers how to read, understand, and generate human speech.","You have a strong grasp of Transformer architectures (BERT, GPT variants).","You enjoy working on chatbots, translation tools, or sentiment analysis engines.","You are comfortable handling messy, unstructured text data."],
        industriesHiring: ["Tech (Search/Assistants)","Customer Service SaaS","Healthcare","Legal Tech","Finance"]
    },
    {
        id: 607, title: 'Bioinformatics', category: 'data', icon: 'dna', color: '#84CC16',
        description: 'Use computational tools to analyze complex biological data.',
        avgSalary: '₹6-18 LPA', growth: 'Moderate',
        topRoles: ["Bioinformatician","Computational Biologist"], futureRoles: ["Director of Computational Biology","Head of Biotech Informatics"], skills: ["Genomics & Sequence Analysis","Python/R/Perl","Statistical Genetics","Bioconductor / Nextflow","Machine Learning for Biology","Database Management (SQL/NoSQL)","Data Visualization","Structural Bioinformatics","Cloud Computing","Molecular Biology"],
        education: 'B.Tech/M.Sc Bioinformatics',
        importantNote: "Requires cross-disciplinary knowledge in both biology and computer science.",
        isRightForYou: ["You love the intersection of advanced computer science and molecular biology.","You want to analyze DNA sequencing to help cure genetic diseases.","You have a unique background in both statistical modeling and life sciences.","You are comfortable working with massive biological datasets and cloud computing.","You enjoy working closely with doctors, geneticists, and researchers."],
        industriesHiring: ["Pharmaceuticals","Biotech Startups","Research Institutes","Healthcare","Agriculture"]
    },
    {
        id: 608, title: 'Market Research Analysis', category: 'data', icon: 'pie-chart', color: '#F97316',
        description: 'Gather and analyze data on consumers and market conditions.',
        avgSalary: '₹5-14 LPA', growth: 'Moderate',
        topRoles: ["Market Researcher","Consumer Insights Lead"], futureRoles: ["VP of Consumer Insights","Director of Market Intelligence"], skills: ["Survey Design & Methodology","Quantitative Research","Qualitative Research (Focus Groups)","Statistical Software (SPSS/SAS/R)","Data Visualization","Consumer Behavior","Competitive Intelligence","Report Writing","Presentation Skills","Trend Forecasting"],
        education: 'MBA / Economics',
        importantNote: "Separating signal from noise in consumer data is the primary challenge.",
        isRightForYou: ["You are deeply curious about why consumers buy what they buy.","You enjoy designing surveys, running focus groups, and analyzing human behavior.","You are skilled at both qualitative observation and quantitative statistical analysis.","You excel at turning market research into competitive intelligence for brands.","You have strong presentation skills to pitch insights to marketing teams."],
        industriesHiring: ["Consumer Goods (FMCG)","Market Research Agencies","Retail","Automotive","Media"]
    },
    {
        id: 609, title: 'GIS & Spatial Data Analysis', category: 'data', icon: 'map', color: '#6366F1',
        description: 'Analyze geographic data for mapping and urban planning.',
        avgSalary: '₹5-16 LPA', growth: 'High',
        topRoles: ["GIS Analyst","Geospatial Engineer"], futureRoles: ["Head of Spatial Data Science","Director of Urban Analytics"], skills: ["Geographic Information Systems (ArcGIS/QGIS)","Spatial Analysis","Python (GeoPandas, GDAL)","Remote Sensing","SQL (PostGIS)","Cartography & Visualization","Data Wrangling","Machine Learning for Spatial Data","Web Mapping (Leaflet)","GPS/GNSS Data Handling"],
        education: 'B.Tech / B.Sc Geoinformatics',
        importantNote: "Fusing geospatial data with other datasets unlocks the highest value insights.",
        isRightForYou: ["You love maps, geography, spatial thinking, and location-based logic.","You want to use satellite imaging and GPS data to solve real-world problems.","You are skilled in GIS software (ArcGIS/QGIS) and spatial SQL databases.","You are interested in applications like urban planning, logistics, or climate tracking.","You enjoy visualizing complex geographic patterns that aren't obvious in spreadsheets."],
        industriesHiring: ["Urban Planning","Logistics & Transport","Environmental Agencies","Agriculture","Defense"]
    },
    {
        id: 610, title: 'Business Intelligence Architect', category: 'data', icon: 'layout', color: '#8B5CF6',
        description: 'Design BI systems to support enterprise decision-making at scale.',
        avgSalary: '₹10-25 LPA', growth: 'High',
        topRoles: ["BI Architect","Enterprise Data Modeler"], futureRoles: ["VP of Business Intelligence","Chief Data Officer"], skills: ["Data Warehousing Design","ETL/ELT Processes","BI Tools (Tableau/Power BI/Looker)","Data Modeling (Star/Snowflake Schemas)","SQL Mastery","Data Governance & Quality","Cloud Platforms","OLAP","Python Scripting","Stakeholder Requirements Gathering"],
        education: 'B.Tech CS / IT',
        importantNote: "Bridging the gap between raw database schemas and executive dashboards is key.",
        isRightForYou: ["You are a big-picture strategic thinker who understands data operations.","You act as the bridge between raw database schemas and executive decision-making.","You are highly skilled at Data Governance, ensuring data quality and security.","You have deep expertise in ETL/ELT processes and data warehousing concepts.","You excel at gathering requirements from C-suite executives and delivering solutions."],
        industriesHiring: ["Large Enterprises","Consulting","Finance","Healthcare","E-commerce"]
    },
];
