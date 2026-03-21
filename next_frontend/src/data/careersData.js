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
        topRoles: ["Full Stack Developer","Backend Engineer"], futureRoles: ["System Architect","CTO"], skills: ["JavaScript/TypeScript","React/Next.js","Node.js","SQL/NoSQL Databases","System Design","Git & Version Control","Unit Testing","API Development","Cloud Basics (AWS/Azure)","Agile Methodology"],
        education: 'B.Tech CS / BCA / MCA',
        whyChoose: [
            "Build the Future: Create the apps and systems that billions of people use every day.",
            "Logic & Creativity: The perfect balance of solving complex puzzles and building beautiful products.",
            "Top Earning Potential: One of the highest-paying and most stable entry-level roles worldwide.",
            "Work Anywhere: Enjoy the flexibility of working from home or from top tech hubs like Bangalore and San Francisco.",
            "Infinite Growth: The tech world never stops evolving, offering constant new challenges and learning."
        ],
        isRightForYou: ["You belong here if you enjoy solving logical puzzles and building things from scratch.","You are a lifelong learner who is excited by rapidly changing technology.","You possess strong analytical skills and can focus on complex tasks for long periods.","You enjoy collaborating in teams to solve massive real-world problems.","You have a passion for creating tools that make peoples lives easier."],
        importantNote: "Continuous learning and adapting to new frameworks is critical.",
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
        whyChoose: [
            "Be a Digital Guardian: Protect people and companies from high-stakes cyber attacks.",
            "Recession-Proof: As long as the internet exists, hackers will exist—making your job vital.",
            "Elite Skillset: Gain 'Ethical Hacking' skills that only a few people in the world possess.",
            "Exciting Day-to-Day: No two days are the same when you're hunting for new threats.",
            "High Impact: You are the last line of defense for a company's most valuable secrets."
        ],
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
        whyChoose: [
            "Be the Backbone: Design the infrastructure that keeps apps like Netflix and Spotify running.",
            "High Demand: Every company is moving to the cloud, making you an essential expert.",
            "Architect the Future: Build systems that handle millions of users simultaneously.",
            "Elite Pay: Cloud Architects are among the highest-paid professionals in tech.",
            "Remote Work King: Work for global companies from your home office effortlessly."
        ],
        industriesHiring: ["Cloud Providers","Telecom","Streaming Services","E-commerce","SaaS"]
    },
    {
        id: 102, title: 'Blockchain Developer', category: 'tech', icon: 'blocks', color: '#F59E0B',
        description: 'Build decentralized applications and smart contracts using blockchain.',
        avgSalary: '₹10-35 LPA', growth: 'High',
        topRoles: ["Web3 Developer","Smart Contract Engineer"], futureRoles: ["Lead Blockchain Architect","Web3 Technical Director"], skills: ["Solidity/Vyper","Smart Contract Development","Cryptography Fundamentals","Web3.js/ethers.js","DeFi Protocols","Consensus Algorithms","Rust/Go","dApp Architecture","Smart Contract Auditing","Blockchain Nodes/Networks"],
        education: 'B.Tech CS or Web3 Bootcamps',
        importantNote: "Cryptography fundamentals and staying updated closely with decentralized finance trends are essential.",
        isRightForYou: ["You are fascinated by decentralization, cryptography, and open-source principles.","You enjoy working in an in an emerging field where best practices are still being written.","You have a strong grasp of economics, game theory, and incentive structures.","You are extremely detail-oriented, as smart contract bugs can cost millions.","You are comfortable navigating ambiguity and rapid industry pivots."],
        whyChoose: [
            "Be a Web3 Pioneer: Work on the cutting edge of the new decentralized internet.",
            "Incredible Pay: Blockchain talent is extremely rare and commands massive salaries.",
            "Build Financial Freedom: Help create open financial systems for anyone with an internet connection.",
            "Global Community: Join a passionate, global community of developers and innovators.",
            "Security First: Master the art of writing code that is immutable and unhackable."
        ],
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
        whyChoose: [
            "Build Worlds: Create immersive universes that millions of people play in.",
            "Creative & Technical: Perfect blend of coding and artistic storytelling.",
            "Work with Passion: Join a fun industry where everyone loves what they do.",
            "Fast-Growing Market: Gaming is now bigger than the movie and music industries combined.",
            "See Your Work Live: Nothing beats seeing your game on a shelf or App Store."
        ],
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
        whyChoose: [
            "Master of Speed: Use automation to deploy code faster and more reliably.",
            "In High Demand: Companies need DevOps to bridge the gap between building and running software.",
            "Problem Solver: Be the hero who fixes deployment issues and improves productivity.",
            "Work with Modern Tech: Use cutting-edge tools like Docker, Kubernetes, and AWS.",
            "High Career Stability: Every software-driven company needs a strong DevOps team."
        ],
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
        whyChoose: [
            "Make Objects Smart: Turn everyday items like watches and fridges into intelligent devices.",
            "Bridge the Worlds: Work at the exciting intersection of hardware and software.",
            "Build the Future: Help create smart cities, homes, and industrial systems.",
            "Innovation Playground: Constantly experiment with new sensors and communication tech.",
            "Huge Impact: Improve efficiency and sustainability through connected technology."
        ],
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
        whyChoose: [
            "Enter the Metaverse: Build the next generation of digital reality.",
            "Immersive Storytelling: Create experiences that people can actually step into.",
            "Beyond Screens: Lead the revolution as we move away from 2D screens to 3D spaces.",
            "Exciting Hardware: Work with the newest VR headsets and AR glasses every day.",
            "High Growth: From gaming to surgery, every field is adopting AR/VR technology."
        ],
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
        whyChoose: [
            "Keep the World Connected: Ensure data travels safely and quickly around the globe.",
            "Critical Expert: You are the person everyone relies on when the internet goes down.",
            "Master Foundations: Understand how the web actually works under the hood.",
            "High Job Security: Networks are vital for every single modern organization.",
            "Work with Cisco & Juniper: Master the high-end hardware that runs the world's data centers."
        ],
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
        whyChoose: [
            "Guardian of Knowledge: Protect and manage a company's most valuable asset—data.",
            "Performance Expert: Speed up apps by making database queries lightning fast.",
            "Critical Role: Without you, apps stop working, making you a key part of any tech team.",
            "Learn Huge Scalability: Work with systems that handle billions of records daily.",
            "Logical Challenge: Design complex data structures that power massive platforms."
        ],
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
        whyChoose: [
            "Be the Quality Guardian: Ensure software works flawlessly before it reaches users.",
            "High Demand: Every tech company needs QA engineers to maintain product integrity.",
            "Problem Solver: You get to find and fix critical issues, making a real impact.",
            "Learn Diverse Tech: Work with various programming languages, tools, and platforms.",
            "Bridge to Development: Often a stepping stone to a full-fledged developer role."
        ],
        industriesHiring: ["Software & IT","Game Development","Banking","Healthcare ERP","Consumer Apps"]
    },
    {
        id: 2, title: 'Medicine & Surgery', category: 'medical', icon: 'stethoscope', color: '#06B6D4',
        description: 'Diagnose and treat patients, conduct research, and improve public health.',
        avgSalary: '₹10-30 LPA', growth: 'High',
        topRoles: ["General Surgeon","Specialist Doctor"], futureRoles: ["Hospital Director","Medical Researcher"], skills: ["Clinical Diagnosis","Surgical Procedures","Patient Care","Medical Ethics","Pharmacology","Emergency Response","Anatomy & Physiology","Team Leadership","Scientific Research","Stress Management"],
        education: 'MBBS + MD/MS',
        whyChoose: [
            "Pure Nobility: Experience the ultimate fulfillment of saving lives and healing people.",
            "Lifelong Respect: Medicine is one of the most respected and prestigious professions in society.",
            "Global Demand: High-quality doctors are needed in every corner of the world, offering total job security.",
            "Intellectual Mastery: Master the incredible complexity of the human body and its mechanics.",
            "Diverse Specialties: From heart surgery to neurotech, find the niche that truly fascinates you."
        ],
        isRightForYou: ["You are deeply compassionate and have an unwavering desire to help people.","You possess the emotional resilience to handle high-stress life-and-death situations.","You are prepared for a long, rigorous path of education and lifelong learning.","You have excellent focus, stamina, and a high attention to detail.","You enjoy the challenge of solving complex medical mysteries to save lives."],
        importantNote: "Residency and continuous hands-on practice are the only paths to mastery.",
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
        whyChoose: [
            "Be the Heart of Healthcare: You spend the most time with patients and provide the most comfort.",
            "High Demand: There is a worldwide shortage of skilled nurses, ensuring job stability.",
            "Fast-Paced Environment: Every shift brings new challenges and learning opportunities.",
            "Career Flexibility: Specialise in ICU, Pediatrics, Surgery, or even Flight Nursing.",
            "Immediate Impact: See the direct results of your care every single day."
        ],
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
        whyChoose: [
            "Immediate Results: See a patient's smile transform and their pain vanish in one visit.",
            "High Autonomy: Many dentists run their own successful private clinics early on.",
            "Prestige & Pay: Dentistry is one of the most respected and highest-paying medical careers.",
            "Work-Life Balance: Typically offers more regular hours than general medicine.",
            "Combination of Skills: Use both medical knowledge and artistic precision every day."
        ],
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
        whyChoose: [
            "Medication Expert: Be the bridge between doctors and patients to ensure safe recovery.",
            "Stable Career: Pharmacists are needed in every hospital, clinic, and neighborhood.",
            "Modern Healthcare Hub: Research and develop the newest life-saving drugs.",
            "Direct Interaction: Help people understand their medicine and take control of their health.",
            "Clean Environment: Work in highly organized, clinical, and professional settings."
        ],
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
        whyChoose: [
            "Help People Move: Be the guide who helps someone walk again after an injury.",
            "Sports & Fitness: Work with pro athletes and help them back to the game.",
            "Active Work: One of the best careers if you hate sitting at a computer all day.",
            "Inspiring Progress: See the tangible, physical results of your work every week.",
            "Holistic Health: Master the entire human body and its physical mechanics."
        ],
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
        whyChoose: [
            "Treat Your Furry Friends: Make a career out of your love and passion for animals.",
            "Diverse Patients: Treat everything from dogs and cats to tigers and elephants.",
            "Total Hero: Be the person who can heal those who can't speak for themselves.",
            "Wildlife Conservation: Help protect endangered species and their habitats.",
            "Exciting Challenges: Every case is a unique puzzle since animals can't tell you where it hurts."
        ],
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
        whyChoose: [
            "Master of the Mind: Understand why people think and act the way they do.",
            "Change Lives: Help people overcome their deepest fears and mental challenges.",
            "High Demand: Mental health is more important than ever in today's world.",
            "Deep Connections: Build truly meaningful relationships with your clients.",
            "Diverse Careers: Work in hospitals, corporate offices, or even with schools."
        ],
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
        whyChoose: [
            "Food as Medicine: Use the power of nutrition to prevent and cure diseases.",
            "Wellness Expert: Lead the way in the global health and fitness boom.",
            "Diverse Roles: Work with athletes, hospital patients, or food tech companies.",
            "Immediate Impact: See people regain their energy and health through better eating.",
            "Constant Learning: Stay at the cutting edge of food science and metabolic health."
        ],
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
        whyChoose: [
            "Build Medical Magic: Invent the tech that keeps people alive and healthy.",
            "Bionic Future: Design the next generation of prosthetics and robotic limbs.",
            "Unique Hybrid: The perfect mix of high-end engineering and life sciences.",
            "Elite Tech: Work with some of the most advanced machinery on the planet.",
            "Massive Meaning: Use your math and physics skills for a truly noble cause."
        ],
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
        whyChoose: [
            "See the Invisible: Use high-tech X-rays and MRIs to peer inside the human body.",
            "Digital Diagnosis: Provide the images that allow doctors to save lives.",
            "High Tech Work: Operate some of the most expensive and advanced machines in history.",
            "Focused Care: Work directly with patients but in a specialized, tech-heavy role.",
            "Vital Expertise: You are the 'eyes' of the hospital—they can't treat what they can't see."
        ],
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
        whyChoose: [
            "Run the Hospital: Lead the massive organizations that keep our country healthy.",
            "Strategic Leader: Shape healthcare policies that affect millions of lives.",
            "High Impact Business: Combine management skills with a noble healthcare mission.",
            "Diverse Careers: Work in government, big hospitals, or global NGOs like the WHO.",
            "The CEO of Care: Build better systems to make healthcare faster and fairer for everyone."
        ],
        industriesHiring: ["Hospitals","Government Agencies","NGOs","Health Insurance","Consulting"]
    },
    {
        id: 3, title: 'Business & Management', category: 'business', icon: 'barchart', color: '#F43F5E',
        description: 'Lead teams, manage projects, and drive strategy.',
        avgSalary: '₹12-35 LPA', growth: 'High',
        topRoles: ["CEO / General Manager","Management Consultant"], futureRoles: ["Chief Executive Officer","Venture Capitalist"], skills: ["Strategic Planning","Financial Analysis","Team Leadership","Public Speaking","Negotiation","Marketing Strategy","Operational Efficiency","Data-Driven Decision Making","Project Management","Change Management"],
        education: 'BBA / B.Com + MBA',
        whyChoose: [
            "Be a Leader: Command teams and lead massive organizations toward success.",
            "Financial Freedom: Master the worlds of finance and markets to build significant wealth.",
            "Global Networking: Build relationships with world leaders and CEOs of top companies.",
            "Strategic Thinking: Use your brain to outthink competitors and solve big business puzzles.",
            "Total Versatility: Management skills are needed in every industry, from tech to fashion."
        ],
        isRightForYou: ["You are an ambitious natural leader who enjoys being in a position of responsibility.","You are a strategic thinker who is comfortable with high-level decision-making.","You possess excellent communication, public speaking, and persuasion skills.","You are highly analytical and enjoy the challenge of optimizing business performance.","You thrive in fast-paced corporate environments and enjoy networking with leaders."],
        importantNote: "Networking and soft skills often outweigh technical knowledge at higher levels.",
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
        whyChoose: [
            "Viral Impact: Create campaigns that go viral and reach millions of screens.",
            "Fast-Paced Fun: The digital world changes daily, so you'll never be bored.",
            "Psychology & Math: Learn exactly how people think and what makes them click buy.",
            "Freelance Friendly: One of the easiest careers to start as a side-hustle or freelancer.",
            "Help Brands Grow: Be the person responsible for turning a small startup into a giant."
        ],
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
        whyChoose: [
            "High Stakes: Work on massive multi-billion dollar corporate deals.",
            "Elite Pay: Known for some of the highest salaries and bonuses in the world.",
            "Financial Wizardry: Master the inner workings of global markets and corporations.",
            "Career Launchpad: Opens doors to any top-tier corporate role or private equity.",
            "Analytical Mastery: Become the best in the world at financial modeling and valuation."
        ],
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
        whyChoose: [
            "Team Builder: Be the person who finds and hires the best talent for a company.",
            "Culture Creator: Shape the environment where people work and help them thrive.",
            "People Expert: Master the art of communication, negotiation, and leadership.",
            "Diverse Impact: Work in any industry, from cool tech startups to big fashion brands.",
            "Stable & Growing: Companies always need great people experts to manage their growth."
        ],
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
        whyChoose: [
            "Global Operations: Manage the journey of products from across the ocean to your doorstep.",
            "Problem Solver: Solve massive logistical puzzles to keep the world moving.",
            "Crucial Impact: Ensure life-saving medicine or the newest iPhone reaches people on time.",
            "High Earning Potential: Experts who can optimize global shipping are highly valued.",
            "Tech-Driven: Use advanced AI and tracking tech to manage global trade."
        ],
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
        whyChoose: [
            "High Rewards: One of the few careers where your income is directly tied to your effort.",
            "Deal Maker: Experience the thrill of closing massive multi-million dollar deals.",
            "Infinite Networking: Meet and influence the most powerful people in various industries.",
            "Growth Mindset: Master the psychology of persuasion and building trust.",
            "Recession-Proof: As long as companies have products, they will always need great salespeople."
        ],
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
        whyChoose: [
            "The Captain: Be the leader who coordinates different teams to achieve one big goal.",
            "Highly Transferable: Every single industry on earth needs skilled project managers.",
            "Master of Organization: Gain elite skills in planning, budgeting, and execution.",
            "Visible Success: Watch a project go from a simple idea to a finished, successful product.",
            "Leadership Path: A perfect stepping stone to executive and director-level roles."
        ],
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
        whyChoose: [
            "Be Your Own Boss: Build your empire and set your own rules from day one.",
            "Disrupt Industries: Create the next Uber, Airbnb, or Zomato and change the world.",
            "Unlimited Potential: There's no ceiling on how much you can grow and earn.",
            "Pure Creativity: Build something from nothing and see your vision come to life.",
            "Leave a Legacy: Create a brand and product that will be remembered for decades."
        ],
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
        whyChoose: [
            "Build Generational Wealth: Help families protect and grow their money for decades.",
            "High-Level Networking: Advise and build relationships with the world's wealthiest people.",
            "Financial Freedom: Master the markets and apply those skills to your own life too.",
            "Respected Advisor: Become the most trusted partner for your clients' big life decisions.",
            "High Earning: Top wealth managers earn massive commissions and bonuses."
        ],
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
        whyChoose: [
            "Elite Math Skills: Use your talent for numbers to solve high-stakes global problems.",
            "Intellectual Prestige: One of the most academically rigorous and respected roles in finance.",
            "Predict the Unknown: Use complex models to foresee and mitigate future risks.",
            "High Stability: Every insurance and pension fund needs actuaries to survive.",
            "Great Compensation: Certified actuaries are among the highest-paid math experts in the world."
        ],
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
        whyChoose: [
            "Corporate Doctor: Help the world's biggest companies fix their most difficult problems.",
            "Fastest Learning Curve: Work in different industries every few months and learn at 2x speed.",
            "Top-Tier Network: Work side-by-side with CEOs and industry leaders daily.",
            "Global Travel: Visit new cities and countries frequently as part of your job.",
            "Ultimate Resume Builder: Consulting experience opens doors to almost any executive role."
        ],
        industriesHiring: ["Strategy Consulting (MBB)","Big 4 Accounting","Boutique Advisory Firms","Corporate Strategy"]
    },
    {
        id: 4, title: 'UX/UI Design', category: 'creative', icon: 'palette', color: '#8B5CF6',
        description: 'Create intuitive, beautiful digital experiences.',
        avgSalary: '₹6-20 LPA', growth: 'Very High',
        topRoles: ["Product Designer","UI Specialist"], futureRoles: ["Design Director","Head of Experience"], skills: ["Figma / Adobe XD","User Research","Wireframing & Prototyping","Visual Design","Information Architecture","Interaction Design","Accessibility Standards","Usability Testing","Collaboration with Engineers","Product Strategy"],
        education: 'B.Des / Specialized UX courses',
        whyChoose: [
            "Empathy as a Tool: Design products that make apps easier and friendlier for everyone to use.",
            "The Best of Both: The perfect blend of visual art and logical psychological problem-solving.",
            "High Tech Demand: Designers are the secret heart of every successful app like Instagram or Uber.",
            "Rapid Impact: See your designs in the hands of millions of users within weeks.",
            "Creative Freedom: Your entire job is to imagine better ways for the digital world to work."
        ],
        isRightForYou: ["You are highly empathetic and care about providing people with seamless experiences.","You possess a strong eye for aesthetics but also care deeply about functionality.","You enjoy the process of user research and understanding human psychology.","You are comfortable iterating on designs based on data and user feedback.","You love the intersection of art, technology, and human behavior."],
        importantNote: "A strong, curated portfolio is your true resume.",
        industriesHiring: ["Tech & Software","Agencies","E-commerce","Fintech","Media"]
    },
    {
        id: 11, title: 'Architecture & Urban Planning', category: 'creative', icon: 'building', color: '#6366F1',
        description: 'Design buildings and master-plan cities sustainably.',
        avgSalary: '₹5-18 LPA', growth: 'Moderate',
        topRoles: ["Architect","Urban Planner"], futureRoles: ["Principal Architect","City Planning Director"], skills: ["Architectural Design","CAD / AutoCAD / Revit","Urban Planning Regulations","3D Rendering (Lumion/V-Ray)","Building Codes & Zoning","Sustainable Design (LEED)","Project Management","Structural Fundamentals","Client Presentations","Spatial Awareness"],
        education: 'B.Arch',
        whyChoose: [
            "Shape the Skyline: Design the buildings and cities that people will live in for centuries.",
            "Leave a Legacy: Create physical landmarks that stand the test of time.",
            "Creative Engineering: The perfect mix of artistic design and structural science.",
            "Eco-Warrior: Lead the way in designing sustainable, green cities of the future.",
            "Spatial Master: Gain the unique skill of visualizing and creating 3D spaces from scratch."
        ],
        isRightForYou: ["You have a unique blend of creative artistic flair and logical, structural thinking.","You want to leave a permanent, physical, and beautiful mark on the world.","You have excellent spatial awareness and can visualize 3D spaces from 2D plans.","You are patient enough to navigate complex zoning laws and building codes.","You enjoy collaborating closely with engineers, contractors, and clients."],
        importantNote: "Licensure is legally required to sign off on building plans.",
        industriesHiring: ["Architectural Firms","Real Estate Developers","Urban Planning","Construction","Government"]
    },
    {
        id: 12, title: 'Content Creation & Journalism', category: 'creative', icon: 'pentool', color: '#F97316',
        description: 'Research, write, and produce stories for digital media.',
        avgSalary: '₹4-15 LPA', growth: 'High',
        topRoles: ["Content Creator","Journalist"], futureRoles: ["Editor-in-Chief","VP of Content","Media Director"], skills: ["Copywriting & Editing","SEO Writing","Social Media Strategy","Storytelling","Video/Audio Editing Basics","CMS Platforms (WordPress)","Content Strategy","Journalistic Ethics","Audience Research","Interviewing Skills"],
        education: 'BA Journalism / Mass Comm',
        whyChoose: [
            "The Power of Voice: Use your storytelling to influence millions of people daily.",
            "Front-Row Seat to History: Get exclusive access to the biggest events as they happen.",
            "Be the Change: Expose the truth and hold powerful people accountable.",
            "Creative Expression: Every day is a chance to write, film, or produce something new.",
            "Build Your Brand: Become a respected name in the ever-growing digital media world."
        ],
        isRightForYou: ["You are intensely curious about the world and constantly asking 'why?'.","You are a natural storyteller with a deeply engaging writing or speaking style.","You have a relentless drive to uncover the truth and hold people accountable.","You thrive under the pressure of tight deadlines and breaking news.","You are excellent at networking and getting people to open up in interviews."],
        importantNote: "Building a personal brand and audience is increasingly vital for success.",
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
        whyChoose: [
            "Visual Storyteller: Use colors, type, and layout to make brands come to life.",
            "Pure Creativity: Your entire job is to create beautiful things and push boundaries.",
            "Massive Reach: See your designs on billboards, app stores, and social media reels.",
            "Modern Tools: Master industry-standard software like Photoshop and Illustrator.",
            "Freelance Freedom: One of the best careers for a digital nomad lifestyle."
        ],
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
        whyChoose: [
            "Breathe Life into Art: Make characters and worlds move, breathe, and feel real.",
            "Work on Blockbusters: Help create the visual effects for the next Marvel or Bollywood hit.",
            "Exciting Studios: Work in fun, high-energy environments like Pixar or Rockstar Games.",
            "Technical Artistry: Perfect role if you love both cool software and creative drawing.",
            "Global Impact: See your animations loved by audiences all around the world."
        ],
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
        whyChoose: [
            "Express Yourself: Use clothing as a canvas to show your unique creative vision.",
            "Trend Setter: Be the person who decides what people will be wearing next year.",
            "Glamorous Industry: Get access to the world of runway shows, shoots, and stars.",
            "Hands-On Craft: Master the beautiful art of fabric, sewing, and construction.",
            "Build Your Brand: Launch your own label and see your clothes on the world stage."
        ],
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
        whyChoose: [
            "Vibe Architect: Change the entire mood of a room with just color and light.",
            "Improve Lives: Design comfortable, functional homes and workspaces that help people.",
            "Creative Puzzle: Balance gorgeous aesthetics with strict space and budget limits.",
            "Hands-On Work: Source cool furniture and materials to make your vision a reality.",
            "High Personal Impact: See the look on a client's face when they see their new home."
        ],
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
        whyChoose: [
            "Invent the Future: Design the physical objects of tomorrow—from EVs to AI gadgets.",
            "Help People Daily: Create ergonomic products that make life easier and better.",
            "The Maker Lifestyle: Use 3D printers and high-tech tools to build and test ideas.",
            "End-to-End Impact: Take an item from a sketch to a real, mass-produced product.",
            "Cool Industry: Work for companies like Tesla, Apple, or cool design boutiques."
        ],
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
        whyChoose: [
            "Capture the Moment: Preserve history and emotion in a single frame or shot.",
            "The Power of Film: Direct stories that move people and spark big conversations.",
            "Total Creative Control: Master the art of lighting, camera, and editing.",
            "Diverse Adventures: Travel the world shooting documentaries, fashion, or movies.",
            "Visual Legacy: Your work lives on as a permanent record of your unique vision."
        ],
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
        whyChoose: [
            "Influence with Words: Write the catchy slogans that everyone will repeat.",
            "Psychology of Success: Learn exactly what makes people click, buy, and believe.",
            "Brainstorming Fun: Spend your day coming up with wild, creative ad ideas.",
            "Fast-Paced Media: Write for social ads, huge billboards, and viral video scripts.",
            "Creative Career: Get paid to be witty, smart, and imaginative every single day."
        ],
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
        whyChoose: [
            "Build Interactive Beauty: Design the characters and environments for epic games.",
            "Ultimate World Building: Create every detail of a fantasy or sci-fi universe.",
            "Fun Collaborative Work: Join artists, coders, and writers to build something fun.",
            "Digital Mastery: Master tools like ZBrush and Maya to create stunning 3D art.",
            "Passionate Community: Work in an industry filled with people who love what they do."
        ],
        industriesHiring: ["Game Studios","Animation Studios","AR/VR Companies","Advertising","Freelance"]
    },
    {
        id: 5, title: 'Law & Legal Practice', category: 'law', icon: 'scale', color: '#D97706',
        description: 'Advocate for justice, advise clients, and specialize in corporate/criminal law.',
        avgSalary: '₹7-25 LPA', growth: 'Moderate',
        topRoles: ["Litigator","Transactional Lawyer"], futureRoles: ["Senior Partner","High Court Judge"], skills: ["Legal Research","Public Speaking","Critical Thinking","Drafting Legal Documents","Negotiation","Analytical Reasoning","Case Strategy","Ethics & Professionalism","Client Counseling","Courtroom Procedure"],
        education: 'LLB / BALLB',
        whyChoose: [
            "Voice for Justice: Be the shield for those who cannot defend themselves against unfairness.",
            "Intellectual Power: Master the laws and rules that govern our entire civilization.",
            "Prestige & Influence: Law is a high-status career that opens doors to politics and business.",
            "The Great Debater: Use your logic and speech to win arguments and persuade judges.",
            "Infinite Variety: Work on cases involving anything from human rights to space exploration."
        ],
        isRightForYou: ["You belong here if you have a profound sense of justice and fairness.","You possess exceptional analytical skills and a desire to argue for the truth.","You are comfortable with rigorous research and a high attention to detail.","You enjoy the challenge of persuading others using logic and evidence.","You have the stamina to handle high-stakes cases and navigate complex systems."],
        importantNote: "Passing the Bar exam and immense amounts of reading are required.",
        industriesHiring: ["Law Firms","Corporate Counsel","Government","NGOs","Judiciary"]
    },
    {
        id: 501, title: 'Cyber Law & Data Privacy', category: 'law', icon: 'shield', color: '#3B82F6',
        description: 'Advise on data protection, tech compliance, and cyber crimes.',
        avgSalary: '₹8-22 LPA', growth: 'Very High',
        topRoles: ["Privacy Counsel","Cyber Lawyer"], futureRoles: ["Chief Privacy Officer","Technology Policy Director"], skills: ["Data Privacy Laws (GDPR, CCPA)","Cybersecurity Frameworks","Technology Contracts","Incident Response Counseling","Risk Assessment","Intellectual Property Basics","Compliance Auditing","Policy Drafting","Cloud Computing Law","Breach Notification Procedures"],
        education: 'LLB + Cyber Law',
        importantNote: "Law changes rapidly in this field; constant updates are required.",
        isRightForYou: ["You are fascinated by the intersection of law, technology, and internet ethics.","You have a sharp eye for detail when reviewing complex digital privacy policies.","You stay updated on global regulations like GDPR and new AI governance acts.","You are interested in investigating and preventing cybercrime and data breaches.","You enjoy working in a rapidly evolving field where the rules change almost daily."],
        whyChoose: [
            "Digital Guardian: Protect people's privacy and data in the wild west of the internet.",
            "Modern Justice: Work on the front lines of hacking, deepfakes, and online fraud cases.",
            "Cutting-Edge Law: Every tech giant like Google and Meta needs experts in this field.",
            "Shape the Future: Help write the laws for AI, metaverses, and future technologies.",
            "Global Demand: One of the fastest-growing and highest-paying legal specialties."
        ],
        industriesHiring: ["Tech Giants","Law Firms","Government agencies","Cybersecurity Firms","Fintech"]
    },
    {
        id: 502, title: 'Intellectual Property (IP)', category: 'law', icon: 'file-text', color: '#8B5CF6',
        description: 'Protect patents, trademarks, copyrights, and trade secrets.',
        avgSalary: '₹8-20 LPA', growth: 'High',
        topRoles: ["Patent Attorney","IP Consultant"], futureRoles: ["Head of IP Strategy","Patent Office Director"], skills: ["Patent Prosecution","Trademark Registration","Copyright Law","IP Litigation","Licensing Agreements","Technical Background (Science/Engineering)","Prior Art Searching","Trade Secrets","Drafting Patent Claims","Negotiation"],
        education: 'B.Tech/B.Sc + LLB',
        importantNote: "A background in science or engineering is often required for patent law.",
        isRightForYou: ["You are interested in protecting original ideas, inventions, and creative works.","You have a dual interest in law and another field like science, tech, or art.","You enjoy meticulous research and identifying the uniqueness of a new creation.","You possess strong negotiation skills for licensing deals and patent litigation.","You are comfortable dealing with complex international treaties and protocols."],
        whyChoose: [
            "Protect Innovation: Be the one who ensures inventors and artists get paid for their ideas.",
            "Link with Tech/Art: Perfect if you love law but are also a fan of science or creativity.",
            "High Stakes: Work with famous brands to protect their logos, music, and world-shaping patents.",
            "Global Career: IP laws are international—work with clients from all over the world.",
            "Elite Prestige: IP lawyers are highly respected for their deep, specialized knowledge."
        ],
        industriesHiring: ["Pharma & Biotech","Tech Companies","Entertainment Studios","Law Firms","Universities"]
    },
    {
        id: 503, title: 'Corporate & M&A Law', category: 'law', icon: 'briefcase', color: '#10B981',
        description: 'Handle complex mergers, acquisitions, and corporate governance.',
        avgSalary: '₹12-40 LPA', growth: 'Moderate',
        topRoles: ["M&A Partner","In-house Counsel"], futureRoles: ["M&A Partner","Chief Legal Officer"], skills: ["Mergers & Acquisitions","Corporate Governance","Securities Law","Due Diligence","Contract Negotiation","Venture Capital Financing","Drafting Term Sheets","Antitrust Law","Tax Implications of M&A","Board of Directors Advisory"],
        education: 'BA LLB / LLM',
        importantNote: "High pressure and tight deadlines are common during major corporate deals.",
        isRightForYou: ["You thrive in high-pressure, fast-paced environments with massive financial stakes.","You are excellent at identifying potential risks in complex business contracts.","You have a deep interest in finance, economics, and how global markets function.","You possess the stamina for long hours during intense multi-billion dollar deals.","You are highly persuasive and a master of strategic negotiation."],
        whyChoose: [
            "The Deal Maker: Help big companies join forces or take over rivals in epic deals.",
            "High Finance: Work side-by-side with investment bankers and top CEOs.",
            "Elite Earning: Corporate law is consistently one of the highest-paying career paths.",
            "Strategic Thinking: Master the complex laws that run the world's biggest businesses.",
            "Career Prestige: Work in the impressive glass towers of the world's top financial hubs."
        ],
        industriesHiring: ["Top-Tier Law Firms","Investment Banks","Private Equity","Fortune 500 Companies"]
    },
    {
        id: 504, title: 'Taxation Law', category: 'law', icon: 'percent', color: '#F43F5E',
        description: 'Navigate complex tax codes to advise corporations.',
        avgSalary: '₹10-30 LPA', growth: 'Moderate',
        topRoles: ["Tax Consultant","Tax Litigator"], futureRoles: ["Partner (Tax Practice)","Director of Revenue"], skills: ["Corporate Tax Law","International Taxation","Tax Planning & Strategy","Estate Planning","IRS Audit Defense","Accounting Principles","Compliance","Tax Litigation","Wealth Management Law","Detail Orientation"],
        education: 'LLB + CA',
        importantNote: "Attention to detail with numbers and constantly changing tax codes is essential.",
        isRightForYou: ["You have an exceptionally logical mind and enjoy detailed, complex code-like rules.","You enjoy math and finance as much as you enjoy the study of law.","You are extremely meticulous, as a single number can change everything in tax.","You enjoy playing 'legal chess' to optimize financial outcomes for your clients.","You are interested in both national and international economic policies."],
        whyChoose: [
            "Logical Challenge: Master one of the most complex and rewarding legal systems.",
            "Economic Impact: Impact the world of finance and help businesses grow sustainably.",
            "Recession-Proof: As long as there are taxes, there will always be a need for tax lawyers.",
            "Financial Expert: Gain skills that make you invaluable to every wealthy individual and company.",
            "Structured Career: Enjoy a highly professional, organized, and intellectual workspace."
        ],
        industriesHiring: ["Audit Firms (Big 4)","Law Firms","Government Revenue Services","Large Corporations"]
    },
    {
        id: 505, title: 'International & Human Rights Law', category: 'law', icon: 'globe', color: '#0EA5E9',
        description: 'Work with NGOs, UN, and governments on treaties and human rights.',
        avgSalary: '₹5-15 LPA', growth: 'Low',
        topRoles: ["Human Rights Advocate","Policy Advisor"], futureRoles: ["UN Legal Advisor","International Court Judge"], skills: ["International Treaties","Human Rights Advocacy","Diplomacy","Public International Law","Immigration Law","Policy Analysis","Cross-Cultural Communication","NGO Operations","Foreign Languages","Dispute Resolution (Arbitration)"],
        education: 'BA LLB + LLM',
        importantNote: "Fluency in multiple languages and living abroad are often required.",
        isRightForYou: ["You have a global perspective and care deeply about fundamental human rights.","You are interested in diplomacy, foreign policy, and international treaties.","You are adaptable, culturally aware, and potentially fluent in multiple languages.","You want to make a systemic impact by working with NGOs or the United Nations.","You are patient enough to navigate incredibly slow international bureaucracies."],
        whyChoose: [
            "Global Justice: Fight for human rights and international law on a global stage.",
            "Diplomatic Impact: Work with the UN, NGOs, and governments to shape world policy.",
            "Cross-Cultural Expert: Master international relations and diverse legal systems.",
            "Meaningful Work: Dedicate your career to protecting the most vulnerable populations.",
            "Travel the World: Your work can take you to international courts and conflict zones."
        ],
        industriesHiring: ["United Nations","NGOs","Government Diplomacy","International Courts","Academia"]
    },
    {
        id: 506, title: 'Environmental Law', category: 'law', icon: 'leaf', color: '#84CC16',
        description: 'Focus on climate change, sustainability, and resource rights.',
        avgSalary: '₹6-18 LPA', growth: 'High',
        topRoles: ["Environmental Lawyer","Sustainability Counsel"], futureRoles: ["Head of Environmental Policy","Sustainability Director"], skills: ["Environmental Regulations (EPA)","Energy Law","Sustainability Reporting","Land Use Permitting","Climate Change Litigation","Administrative Law","Corporate Compliance","Toxic Torts","Negotiation with Agencies","Scientific Literacy"],
        education: 'LLB + Environmental Law',
        importantNote: "Passion for the environment is needed to navigate slow bureaucratic systems.",
        isRightForYou: ["You are passionate about nature, wildlife, and slowing down climate change.","You enjoy the intersection of science (ecology/geology) and legal policy.","You are detail-oriented when checking compliance with strict green regulations.","You enjoy working with both large corporations and grassroots activist groups.","You want to leave a healthier planet for future generations."],
        whyChoose: [
            "Save the Planet: Use the power of the law to fight climate change and pollution.",
            "Eco-Guardian: Protect forests, oceans, and endangered animals from damage.",
            "Frontier of Law: Lead the way in the 'Green Revolution' and new energy laws.",
            "High Meaning: Your work directly ensures the survival of our ecosystems.",
            "Diverse Clients: Work with green startups, NGOs, or even government agencies."
        ],
        industriesHiring: ["NGOs","Government bodies","Green Energy Companies","Law Firms"]
    },
    {
        id: 507, title: 'Family & Divorce Law', category: 'law', icon: 'users', color: '#EC4899',
        description: 'Handle legal matters involving domestic relations.',
        avgSalary: '₹5-20 LPA', growth: 'Moderate',
        topRoles: ["Family Lawyer","Mediator"], futureRoles: ["Senior Family Judge","Partner (Family Law)"], skills: ["Divorce Litigation","Child Custody & Support","Mediation & ADR","Prenuptial Agreements","Asset Division","Emotional Intelligence","Empathy & Patience","Financial Analysis (for assets)","Domestic Violence Law","Client Counseling"],
        education: 'LLB',
        importantNote: "Requires extreme emotional intelligence and boundary-setting to avoid burnout.",
        isRightForYou: ["You possess high emotional intelligence and can handle intense family drama.","You are a natural mediator who enjoys helping people reach peaceful agreements.","You are interested in the laws regarding marriage, adoption, and child welfare.","You are patient and can guide clients through their most difficult personal times.","You have strong interpersonal skills and feel comfortable in sensitive negotiations."],
        whyChoose: [
            "Human Connection: Help families navigate their most difficult life transitions.",
            "Protector: Fight for the best interests of children and the vulnerable.",
            "The Mediator: Use your skills to turn conflict into peaceful resolutions.",
            "Constant Demand: Family law remains a vital and stable part of the legal system.",
            "Rewarding Outcomes: See the direct, positive impact of your work on people's personal lives."
        ],
        industriesHiring: ["Boutique Law Firms","Private Practice","Family Courts","NGOs"]
    },
    {
        id: 508, title: 'Judiciary (Civil/Criminal Judge)', category: 'law', icon: 'award', color: '#D97706',
        description: 'Preside over court proceedings, interpret the law, and deliver judgments.',
        avgSalary: '₹10-25 LPA', growth: 'Stable',
        topRoles: ["District Judge","High Court Justice"], futureRoles: ["High Court Judge","Supreme Court Justice"], skills: ["Impartial Decision Making","Statutory Interpretation","Evidence Law","Trial Management","Legal Writing (Opinions)","Constitutional Law","Conflict Resolution","Ethics & Integrity","Public Speaking","Analytical Reasoning"],
        education: 'LLB + Judicial Services Exam',
        importantNote: "Impeccable ethical standards and a long history of legal practice are required.",
        isRightForYou: ["You have an unshakable sense of fairness, integrity, and social duty.","You possess absolute focus and can listen to complex arguments for hours.","You are comfortable making difficult, high-stakes decisions that affect lives.","You are a lifelong student of the law and enjoy deep, intellectual study.","You possess the patience and prestige required for a long-term judicial path."],
        whyChoose: [
            "The Final Word: Serve as the ultimate authority in the quest for justice.",
            "Highest Prestige: The judiciary is the most respected and honored legal role.",
            "Historical Impact: Write the judgments that become the law of the land for decades.",
            "Pure Fairness: Your entire job is to be impartial and uphold the truth.",
            "Public Service: Dedicate your life to the highest level of duty and social order."
        ],
        industriesHiring: ["Government","High Courts","Supreme Court","District Courts"]
    },
    {
        id: 509, title: 'Sports & Entertainment Law', category: 'law', icon: 'music', color: '#6366F1',
        description: 'Negotiate contracts for athletes, musicians, and production houses.',
        avgSalary: '₹6-25 LPA', growth: 'Moderate',
        topRoles: ["Entertainment Counsel","Sports Agent"], futureRoles: ["Sports Agency Director","Head of Entertainment Law"], skills: ["Contract Negotiation","IP & Trademark Law","Talent Representation","Endorsement Deals","Media Rights","Labor Law (Unions/Players Assoc.)","Dispute Resolution","Public Relations","Brand Protection","Entertainment Industry Knowledge"],
        education: 'LLB + Media Internships',
        importantNote: "Networking and negotiation skills are heavily utilized.",
        isRightForYou: ["You are a massive fan of sports, music, and the movie industry.","You enjoy the fast-paced, high-glamour world of celebrity representation.","You are a master of contract negotiation and talent management law.","You are comfortable dealing with high-profile clients and intense media scrutiny.","You have an eye for identifying and protecting a client's 'brand value'."],
        whyChoose: [
            "Represent the Stars: Work with your favorite athletes, singers, and actors.",
            "The Glamour Factor: Get behind-the-scenes access to stadiums and movie sets.",
            "Massive Negotiation: Close huge multi-million dollar deals and brand sponsorships.",
            "Protect Talent: Ensure your clients are treated fairly and their work is protected.",
            "Fun Industry: Combine your love for movies or sports with a high-level legal career."
        ],
        industriesHiring: ["Talent Agencies","Production Houses","Sports Leagues/Clubs","Record Labels","Law Firms"]
    },
    {
        id: 510, title: 'Real Estate Law', category: 'law', icon: 'home', color: '#F97316',
        description: 'Advise on real estate transactions, property disputes, and land zoning.',
        avgSalary: '₹6-18 LPA', growth: 'Moderate',
        topRoles: ["Real Estate Attorney","Property Consultant"], futureRoles: ["Partner (Real Estate)","Development Legal Head"], skills: ["Property Law","Zoning & Land Use","Real Estate Transactions","Lease Drafting","Title Examination","Construction Law","Real Estate Finance","Environmental Restrictions","Contract Negotiation","Due Diligence"],
        education: 'LLB + Real Estate Experience',
        importantNote: "Understanding local zoning laws and urban politics is crucial.",
        isRightForYou: ["You are interested in the massive business behind property and land.","You enjoy the intersection of property rights, zoning laws, and finance.","You are extremely thorough when researching land titles and property history.","You enjoy working with developers to build new neighborhoods and cities.","You have strong administrative and organizational skills for complex closures."],
        whyChoose: [
            "Build the Future: Be the legal expert behind the cities and houses people live in.",
            "Tangible Success: See the physical result of your work in the form of new buildings.",
            "Wealth Creation: Master the laws of real estate, the world's biggest asset class.",
            "Stable & High Value: Property deals are always happening, providing great job security.",
            "Strategic Expert: Navigate the complex web of land rights and urban development."
        ],
        industriesHiring: ["Real Estate Developers","Law Firms","Banks","Government Urban Bodies"]
    },
    {
        id: 6, title: 'Data Science & AI', category: 'data', icon: 'database', color: '#059669',
        description: 'Extract insights from data and build intelligent systems.',
        avgSalary: '₹10-30 LPA', growth: 'Very High',
        topRoles: ["Data Scientist","ML Engineer"], futureRoles: ["Chief Data Scientist","VP of AI","Head of Data"], skills: ["Machine Learning Algorithms","Python/R","Data Visualization","Statistical Analysis","SQL","Big Data (Hadoop/Spark)","Deep Learning","Data Wrangling","Business Acumen","Cloud Computing (AWS/GCP)"],
        education: 'B.Tech/M.Tech CS',
        importantNote: "Math and statistics are the foundation; tools and languages change, but math doesn't.",
        isRightForYou: ["You love uncovering hidden patterns and insights within massive, messy datasets.","You are exceptionally gifted at statistics, mathematics, and probability.","You are comfortable writing code (Python/R) to build complex predictive models.","You are highly curious and constantly asking questions about why things happen.","You enjoy translating complex algorithms into actionable business strategies."],
        whyChoose: [
            "Predict the Future: Use data to accurately forecast trends and human behavior.",
            "The Hottest Field: Ranked as the 'Sexiest Job of the 21st Century' for a reason.",
            "Creative Discovery: Find patterns that no one else can see in giant piles of data.",
            "Machine Learning Magic: Help build AI that can see, hear, and think like humans.",
            "Massive Impact: Help companies make billion-dollar decisions backed by hard facts."
        ],
        industriesHiring: ["Tech & FAANG","Finance","Healthcare","E-commerce","Consulting"]
    },
    {
        id: 601, title: 'Data Analytics', category: 'data', icon: 'bar-chart', color: '#3B82F6',
        description: 'Analyze historical data to discover trends and empower business decisions.',
        avgSalary: '₹6-15 LPA', growth: 'Very High',
        topRoles: ["Data Analyst","BI Analyst"], futureRoles: ["VP of Analytics","Chief Analytics Officer"], skills: ["SQL & NoSQL","Data Visualization (Tableau/PowerBI)","Python/R for Analytics","A/B Testing","Statistical Analysis","Data Cleaning","Business Intelligence","Excel (Advanced)","Storytelling with Data","Metrics & KPIs"],
        education: 'Any Degree + Analytics',
        importantNote: "The ability to communicate data insights to non-technical stakeholders is vital.",
        isRightForYou: ["You enjoy finding hidden patterns and stories within massive piles of raw data.","You are logical, love statistics, and want to help businesses make better decisions.","You are comfortable using tools like Excel, SQL, and data visualization software.","You possess strong communication skills to explain findings to non-tech managers.","You are curious and enjoy diving deep into an industry to understand its trends."],
        whyChoose: [
            "The Modern Storyteller: Use numbers to tell the story of a business and predict its future.",
            "High Demand: Every single company today needs experts to make sense of their data.",
            "Diverse Industries: Work in sports, fashion, gaming, or finance—data is everywhere.",
            "Actionable Impact: See your analysis turn into real changes that help a company grow.",
            "Fast-Paced Career: Start your journey into the world of AI and Machine Learning here."
        ],
        industriesHiring: ["Tech","Retail","Healthcare","Banking","Marketing"]
    },
    {
        id: 602, title: 'Data Engineering', category: 'data', icon: 'layers', color: '#8B5CF6',
        description: 'Build pipelines to ingest, store, and process big data.',
        avgSalary: '₹12-28 LPA', growth: 'Very High',
        topRoles: ["Data Engineer","Big Data Architect"], futureRoles: ["Head of Data Infrastructure","VP of Data Engineering"], skills: ["Data Pipelines (ETL/ELT)","Apache Spark/Kafka","Cloud Data Warehouses (Snowflake/BigQuery)","Python/Java/Scala","SQL Optimization","Data Modeling","Airflow/Orchestration","Database Administration","CI/CD","Data Security"],
        education: 'B.Tech CS / IT',
        importantNote: "Data engineers are often in higher demand than data scientists to build the foundations.",
        isRightForYou: ["You love building the 'plumbing' that allows data to flow through a company.","You are interested in high-performance computing, distributed systems, and databases.","You enjoy writing efficient code in Python, Java, or Scala to move massive data.","You are detail-oriented and care about data quality, reliability, and security.","You love solving complex puzzles regarding system architecture and scalability."],
        whyChoose: [
            "The Architect: Build the invisible systems that power the world's most popular apps.",
            "Elite Pay: Good data engineers are rare and highly valued by big tech companies.",
            "Master Big Tech: Work with cutting-edge tools like Spark, Kafka, and Cloud Clouds.",
            "Foundational Role: Without you, AI and data science can't happen—you are essential.",
            "Scale the World: Design systems that handle trillions of data points every single day."
        ],
        industriesHiring: ["Cloud Tech Companies","Large Enterprises","Fintech","Streaming Services"]
    },
    {
        id: 603, title: 'Generative AI Engineering', category: 'data', icon: 'zap', color: '#F43F5E',
        description: 'Develop applications using Large Language Models (LLMs).',
        avgSalary: '₹15-40 LPA', growth: 'Extreme',
        topRoles: ["AI Application Engineer","LLM Researcher"], futureRoles: ["Director of AI Research","VP of GenAI Solutions"], skills: ["Large Language Models (LLMs)","Prompt Engineering","Fine-tuning Models","Transformers Architecture","Python (PyTorch/TensorFlow)","Vector Databases (Pinecone, Milvus)","LangChain / LlamaIndex","API Integration","Model Evaluation","AI Safety & Ethics"],
        education: 'B.Tech CS / AI Specialization',
        importantNote: "This space evolves weekly; constant reading of research papers is necessary.",
        isRightForYou: ["You are obsessed with LLMs like ChatGPT and want to build the next one.","You enjoy the intersection of deep learning, linguistics, and creative AI.","You are comfortable with rapid experimentation and high-speed tech evolution.","You possess strong Python skills and a background in neural network architectures.","You are excited by the idea of machines that can write, code, and create art."],
        whyChoose: [
            "Frontier of Tech: Work at the absolute cutting edge of the AI revolution.",
            "Build the Future: Create tools that change how humans write, code, and live.",
            "High Impact: Be part of the team building the most powerful tech in human history.",
            "Creativity & Logic: The perfect role if you love both hardcore coding and creative AI.",
            "Explosive Growth: Generative AI is the fastest-growing field in the entire tech world."
        ],
        industriesHiring: ["AI Research Labs","Tech Giants","Startups","Creative Agencies"]
    },
    {
        id: 604, title: 'Quantitative Analysis (Quant)', category: 'data', icon: 'trending-up', color: '#10B981',
        description: 'Apply advanced math to find alpha in financial markets.',
        avgSalary: '₹20-60+ LPA', growth: 'High',
        topRoles: ["Quant Researcher","Algorithmic Trader"], futureRoles: ["Head of Quantitative Trading","Portfolio Manager"], skills: ["Stochastic Calculus","Time Series Analysis","C++ / Python / KDB+","Algorithmic Trading","Risk Modeling","Financial Markets Knowledge","Machine Learning","Optimization Algorithms","Backtesting","High-Frequency Trading Concepts"],
        education: 'B.Tech / M.Sc Math (IIT/ISI)',
        importantNote: "Extreme mathematical rigor and comfort with building models that handle massive money.",
        isRightForYou: ["You are a math wizard who loves applying statistics to financial markets.","You are interested in high-frequency trading and algorithmic investment.","You enjoy coding complex financial models and back-testing them for accuracy.","You thrive in high-pressure environments with massive financial consequences.","You possess a deep understanding of probability and stochastic calculus."],
        whyChoose: [
            "Master of Markets: Use your math skills to outsmart and predict global markets.",
            "High Stakes Trading: Build the algorithms that move billions of dollars every day.",
            "Elite Compensation: Quants are some of the most highly paid professionals on Wall Street.",
            "Intellectual High: Solve the world's most difficult financial and mathematical puzzles.",
            "Prestige: Join an elite group of math-experts at the top of the financial world."
        ],
        industriesHiring: ["Hedge Funds","Investment Banks","Prop Trading Firms","Fintech"]
    },
    {
        id: 605, title: 'Computer Vision Engineering', category: 'data', icon: 'eye', color: '#0EA5E9',
        description: 'Train models that enable computers to interpret visual data.',
        avgSalary: '₹12-35 LPA', growth: 'High',
        topRoles: ["CV Engineer","Robotics Researcher"], futureRoles: ["Lead Autonomous Systems Engineer","VP of Computer Vision"], skills: ["Image Processing","Object Detection & Tracking","Deep Learning (PyTorch/TensorFlow)","OpenCV","Convolutional Neural Networks (CNNs)","Python/C++","3D Vision","Edge AI (TensorRT)","Sensor Fusion","Algorithm Optimization"],
        education: 'B.Tech / M.Tech AI & ML',
        importantNote: "Deep understanding of deep learning and optimization for edge devices.",
        isRightForYou: ["You want to teach machines how to 'see' and understand the physical world.","You are interested in self-driving cars, facial recognition, and medical imaging.","You have a strong background in linear algebra and deep learning frameworks.","You enjoy working with image processing, 3D geometry, and video data.","You are curious about how human vision works and how to replicate it in code."],
        whyChoose: [
            "Give Sight to AI: Build machines that can recognize faces, drive cars, and save lives.",
            "Futuristic Tech: Work on self-driving vehicles, robots, and advanced security.",
            "High Demand: Every industry from healthcare to retail needs machines that can 'see'.",
            "Complex Challenges: Solve some of the most difficult and exciting puzzles in AI.",
            "Meaningful Impact: Use your skills to help doctors spot diseases in early scans."
        ],
        industriesHiring: ["Automotive (Self-driving)","Healthcare","Security","Robotics","Social Media"]
    },
    {
        id: 606, title: 'Natural Language Processing', category: 'data', icon: 'message-square', color: '#EC4899',
        description: 'Build systems that interpret and generate human language.',
        avgSalary: '₹12-35 LPA', growth: 'High',
        topRoles: ["NLP Scientist","Conversational AI Lead"], futureRoles: ["Head of Conversational AI","Principal NLP Scientist"], skills: ["Text Processing & Tokenization","Transformer Models (BERT, GPT)","Sentiment Analysis","Named Entity Recognition (NER)","Python (NLTK, spaCy, Hugging Face)","Machine Translation","Language Modeling","Deep Learning","Information Extraction","Speech Recognition Algorithms"],
        education: 'B.Tech / M.Tech AI',
        importantNote: "Understanding linguistics alongside machine learning yields the best results.",
        isRightForYou: ["You are fascinated by human language and how computers can understand it.","You enjoy working with grammar, syntax, and large-scale text datasets.","You are interested in translation, sentiment analysis, and voice assistants like Siri.","You possess strong coding skills and an interest in linguistics.","You love building models that can summarize, translate, and chat with humans."],
        whyChoose: [
            "Master of Communication: Bridge the gap between human speech and machine logic.",
            "AI Assistant Era: Build the tech behind Siri, Alexa, and advanced chatbots.",
            "Cross-Cultural Impact: Create tools that break down language barriers across the globe.",
            "Fascinating Intersection: The perfect mix of computer science and human linguistics.",
            "Booming Field: Work at the heart of the AI wave where language is the key interface."
        ],
        industriesHiring: ["Big Tech","Customer Service Platforms","Fintech","Translation Services","Media"]
    },
    {
        id: 607, title: 'Bioinformatics', category: 'data', icon: 'dna', color: '#84CC16',
        description: 'Use computational tools to analyze complex biological data.',
        avgSalary: '₹6-18 LPA', growth: 'Moderate',
        topRoles: ["Bioinformatician","Computational Biologist"], futureRoles: ["Director of Computational Biology","Head of Biotech Informatics"], skills: ["Genomics & Sequence Analysis","Python/R/Perl","Statistical Genetics","Bioconductor / Nextflow","Machine Learning for Biology","Database Management (SQL/NoSQL)","Data Visualization","Structural Bioinformatics","Cloud Computing","Molecular Biology"],
        education: 'B.Tech/M.Sc Bioinformatics',
        importantNote: "Requires cross-disciplinary knowledge in both biology and computer science.",
        isRightForYou: ["You are equally passionate about biology/genetics and computer science.","You enjoy analyzing massive genomic datasets to find cures for diseases.","You are detail-oriented and understand the complexity of biological systems.","You prefer working in a lab (computational) environment rather than at a bench.","You are curious about using AI to accelerate drug discovery and personal medicine."],
        whyChoose: [
            "Decode Life: Use your coding skills to unlock the secrets hidden in our DNA.",
            "Cure Diseases: Be part of the teams using data to find treatments for cancer and more.",
            "Cutting-Edge Hybrid: A unique and highly valuable mix of biology and tech.",
            "Personalized Medicine: Help build the future where treatments are tailored to individuals.",
            "Research Excellence: Work with top scientists and doctors at the frontier of biology."
        ],
        industriesHiring: ["Pharma giants","Biotech startups","Hospitals","Research Centers"]
    },
    {
        id: 608, title: 'Market Research Analysis', category: 'data', icon: 'pie-chart', color: '#F97316',
        description: 'Gather and analyze data on consumers and market conditions.',
        avgSalary: '₹5-14 LPA', growth: 'Moderate',
        topRoles: ["Market Researcher","Consumer Insights Lead"], futureRoles: ["VP of Consumer Insights","Director of Market Intelligence"], skills: ["Survey Design & Methodology","Quantitative Research","Qualitative Research (Focus Groups)","Statistical Software (SPSS/SAS/R)","Data Visualization","Consumer Behavior","Competitive Intelligence","Report Writing","Presentation Skills","Trend Forecasting"],
        education: 'MBA / Economics',
        importantNote: "Separating signal from noise in consumer data is the primary challenge.",
        isRightForYou: ["You are curious about why people buy what they buy and how they act.","You are part detective, part mathematician, and part psychologist.","You enjoy identifying trends before they become mainstream.","You have strong communication skills and enjoy presenting insights to brands.","You are fascinated by the impact of culture, social media, and ads on behavior."],
        whyChoose: [
            "Decipher Human Behavior: Learn exactly what makes people choose one brand over another.",
            "Strategic Influence: Your insights will decide how big brands spend millions of dollars.",
            "Trend Watcher: Be the first to spot the next big thing in global markets.",
            "Diverse Careers: Work for favorite brands in fashion, gaming, food, or tech.",
            "Psychology of Sales: Master the fascinating mix of math and human emotion."
        ],
        industriesHiring: ["FMCG Brands","Advertising Agencies","Tech Startups","Consulting Firms"]
    },
    {
        id: 609, title: 'GIS & Spatial Data Analysis', category: 'data', icon: 'map', color: '#6366F1',
        description: 'Analyze geographic data for mapping and urban planning.',
        avgSalary: '₹5-16 LPA', growth: 'High',
        topRoles: ["GIS Analyst","Geospatial Engineer"], futureRoles: ["Head of Spatial Data Science","Director of Urban Analytics"], skills: ["Geographic Information Systems (ArcGIS/QGIS)","Spatial Analysis","Python (GeoPandas, GDAL)","Remote Sensing","SQL (PostGIS)","Cartography & Visualization","Data Wrangling","Machine Learning for Spatial Data","Web Mapping (Leaflet)","GPS/GNSS Data Handling"],
        education: 'B.Tech / B.Sc Geoinformatics',
        importantNote: "Fusing geospatial data with other datasets unlocks the highest value insights.",
        isRightForYou: ["You see the world through maps, coordinates, and spatial relationships.","You are interested in urban planning, logistics, and environmental tracking.","You enjoy working with satellite imagery and geographic information systems.","You are detail-oriented and enjoy finding the 'where' in every data story.","You are curious about how location data can solve climate and transit problems."],
        whyChoose: [
            "Map the Future: Use satellite data to solve global transit and environmental issues.",
            "Location Intelligence: Help food delivery, logistics, and ride-hailing apps work perfectly.",
            "Impact the Earth: Track deforestation, sea-level rise, and urban growth in real-time.",
            "Spatial Expert: Master the high-tech tools of geographic analysis (GIS).",
            "Unique Niche: A specialized field with growing importance for smart cities."
        ],
        industriesHiring: ["Logistics (Uber/Zomato)","Urban Planning","Environmental NGOs","Defense/Intelligence"]
    },
    {
        id: 610, title: 'Business Intelligence Architect', category: 'data', icon: 'layout', color: '#8B5CF6',
        description: 'Design BI systems to support enterprise decision-making at scale.',
        avgSalary: '₹10-25 LPA', growth: 'High',
        topRoles: ["BI Architect","Enterprise Data Modeler"], futureRoles: ["VP of Business Intelligence","Chief Data Officer"], skills: ["Data Warehousing Design","ETL/ELT Processes","BI Tools (Tableau/Power BI/Looker)","Data Modeling (Star/Snowflake Schemas)","SQL Mastery","Data Governance & Quality","Cloud Platforms","OLAP","Python Scripting","Stakeholder Requirements Gathering"],
        education: 'B.Tech CS / IT',
        importantNote: "Bridging the gap between raw database schemas and executive dashboards is key.",
        isRightForYou: ["You love designing the large-scale data systems that power a company's decisions.","You are an expert at data modeling and translating business needs into tech infra.","You enjoy acting as the bridge between technical engineers and business leaders.","You have a holistic view of the data lifecycle from collection to dashboard.","You thrive in leadership roles and enjoy mentoring other data professionals."],
        whyChoose: [
            "Data Strategist: Design the master plan for how a company uses its information.",
            "Leadership Role: Act as the technical vision-bearer for entire data departments.",
            "High Impact: Your architectural decisions will shape the success of the multi-billion dollar firms.",
            "Future-Proof: BI Architects are essential for the move to AI-driven business models.",
            "Complex Problem Solver: Tackle the biggest data puzzles in corporate tech today."
        ],
        industriesHiring: ["Large Enterprises","Fintech","Cloud Services","Retail Giants"]
    },
];
