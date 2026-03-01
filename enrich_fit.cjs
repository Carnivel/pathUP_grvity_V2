const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/careersData.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

const fitPoints = {
    1: [
        "You enjoy solving logical puzzles and breaking down complex problems.",
        "You have a strong attention to detail and don't mind debugging code for hours.",
        "You are comfortable with continuous learning as technologies change rapidly.",
        "You enjoy building things from scratch and seeing your code come to life.",
        "You can work effectively both independently and as part of an agile team."
    ],
    10: [
        "You have a natural 'hacker' mindset and like thinking about how systems can be broken.",
        "You thrive under pressure, especially during incident response scenarios.",
        "You are highly ethical and can be trusted with highly sensitive data.",
        "You enjoy staying up-to-date with the latest vulnerabilities and threats.",
        "You possess strong analytical skills to investigate security breaches."
    ],
    101: [
        "You love thinking about the big picture and designing large-scale architectures.",
        "You are interested in optimizing system performance and reducing infrastructure costs.",
        "You enjoy learning about distributed systems and cloud provider ecosystems.",
        "You are comfortable acting as a technical leader and guiding engineering teams.",
        "You have a solid understanding of networking, security, and database management."
    ],
    102: [
        "You are fascinated by decentralization, cryptography, and open-source principles.",
        "You enjoy working in an emerging field where best practices are still being written.",
        "You have a strong grasp of economics, game theory, and incentive structures.",
        "You are extremely detail-oriented, as smart contract bugs can cost millions.",
        "You are comfortable navigating ambiguity and rapid industry pivots."
    ],
    103: [
        "You have a blend of creative artistic vision and hardcore programming skills.",
        "You love playing video games and analyzing what makes them structurally fun.",
        "You possess strong skills in 3D mathematics, physics, and spatial logic.",
        "You are patient enough to optimize performance for various hardware constraints.",
        "You enjoy collaborating closely with artists, designers, and writers."
    ],
    104: [
        "You are obsessed with automation and hate doing manual tasks repeatedly.",
        "You enjoy acting as the bridge between software developers and IT operations.",
        "You are comfortable managing scalable infrastructure and deployment pipelines.",
        "You stay calm when production systems go down and can troubleshoot rapidly.",
        "You believe in the 'infrastructure as code' philosophy."
    ],
    105: [
        "You enjoy working at the intersection of physical hardware and digital software.",
        "You are interested in sensors, microcontrollers, and wireless communication.",
        "You are comfortable dealing with extreme memory and power constraints.",
        "You like seeing physical objects become 'smart' and interconnected.",
        "You understand both the engineering and security implications of connected devices."
    ],
    106: [
        "You are passionate about immersive experiences, AR, VR, and spatial computing.",
        "You have a strong background in 3D modeling, Unity, or Unreal Engine.",
        "You are interested in human-computer interaction beyond traditional screens.",
        "You love experimenting with cutting-edge hardware (headsets, smart glasses).",
        "You can optimize complex 3D scenes to run at high framerates."
    ],
    107: [
        "You enjoy understanding how data physically travels across the globe.",
        "You are highly analytical and good at troubleshooting connectivity issues.",
        "You don't mind working hands-on with routers, switches, and cabling.",
        "You are detail-oriented when configuring complex firewalls and security policies.",
        "You can handle on-call responsibilities during major network outages."
    ],
    108: [
        "You are highly organized and care deeply about data integrity and structural design.",
        "You have a knack for optimizing slow queries into lightning-fast operations.",
        "You are meticulous about backups, disaster recovery, and high availability.",
        "You enjoy working behind the scenes to keep critical applications running.",
        "You possess strong analytical skills to model complex business relationships."
    ],
    109: [
        "You have a knack for finding edge cases and breaking software intentionally.",
        "You believe that delivering a bug-free user experience is the ultimate goal.",
        "You enjoy writing automated scripts to test applications thoroughly.",
        "You have strong communication skills to explain defects to developers.",
        "You are detail-oriented and don't let small inconsistencies slide."
    ],
    2: [
        "You possess immense empathy and a genuine desire to heal others.",
        "You have exceptional physical stamina to withstand long surgical procedures.",
        "You remain incredibly calm and focused during life-or-death emergencies.",
        "You are committed to lifelong learning and reading medical journals.",
        "You have the emotional resilience to deliver bad news to patients and families."
    ],
    9: [
        "You are deeply compassionate, patient, and find joy in direct patient care.",
        "You have strong physical endurance for long shifts on your feet.",
        "You can handle the emotional weight of caring for the sick and terminally ill.",
        "You are highly observant and can spot subtle changes in a patient's condition.",
        "You have excellent communication skills to brief doctors and comfort families."
    ],
    201: [
        "You have excellent manual dexterity and hand-eye coordination.",
        "You enjoy detailed, precise work in a focused, small spatial environment.",
        "You have strong interpersonal skills to calm anxious or fearful patients.",
        "You are interested in both the medical and aesthetic aspects of oral care.",
        "You have the entrepreneurial drive to potentially run your own private clinic."
    ],
    202: [
        "You are incredibly meticulous and understand that minor errors can be fatal.",
        "You have a deep interest in chemistry and how compounds interact in the body.",
        "You possess strong memory skills to recall thousands of drug interactions.",
        "You have good communication skills for patient counseling and doctor consultation.",
        "You enjoy working in an organized, highly regulated, and structured environment."
    ],
    203: [
        "You are physically active, motivating, and enjoy seeing gradual human progress.",
        "You are fascinated by human anatomy, biomechanics, and kinesiology.",
        "You possess extreme patience, as physical rehabilitation can be a very slow process.",
        "You have strong empathy to relate to patients in chronic pain.",
        "You prefer hands-on, interactive therapy over sitting at a desk all day."
    ],
    204: [
        "You have a deep, unwavering love for animals of all kinds.",
        "You are not squeamish and can handle blood, surgery, and difficult medical situations.",
        "You have the emotional resilience to handle euthanasia and distressed pet owners.",
        "You possess strong deductive reasoning since your patients cannot speak.",
        "You enjoy a mix of medicine, surgery, and laboratory diagnosis in one role."
    ],
    205: [
        "You are an exceptional, active listener who can read between the lines.",
        "You are highly empathetic but can set strict boundaries to avoid emotional burnout.",
        "You have a deep interest in human behavior, cognition, and neuroscience.",
        "You are patient and understand that mental healing is a non-linear process.",
        "You are non-judgmental and can provide a completely safe space for all people."
    ],
    206: [
        "You are passionate about food science, biochemistry, and healthy living.",
        "You enjoy counseling people and motivating them to make difficult lifestyle changes.",
        "You are detail-oriented when calculating caloric needs and macronutrients.",
        "You enjoy keeping up with the latest nutritional science and debunking fad diets.",
        "You have strong empathy for individuals struggling with eating disorders or obesity."
    ],
    207: [
        "You want to apply hardcore engineering principles to save or improve human lives.",
        "You enjoy the intersection of mechanical design, electronics, and biology.",
        "You are detail-oriented and understand the importance of strict FDA/CE regulations.",
        "You are innovative and want to build the next generation of prosthetics or scanners.",
        "You enjoy working in cross-functional teams with doctors and scientists."
    ],
    208: [
        "You are detail-oriented and comfortable operating complex, high-tech machinery.",
        "You have a strong understanding of human anatomy and cross-sectional imaging.",
        "You are meticulous about radiation safety and patient positioning.",
        "You have good interpersonal skills to guide patients through claustrophobic scans.",
        "You enjoy the analytical process of producing the perfect diagnostic image."
    ],
    209: [
        "You are a natural leader who understands complex organizational operations.",
        "You care about improving public health outcomes on a macro, systemic level.",
        "You are comfortable balancing clinical needs with strict financial budgets.",
        "You have strong negotiation skills to deal with insurance companies and vendors.",
        "You can navigate massive amounts of healthcare legislation and compliance laws."
    ],
    3: [
        "You are a visionary leader who excels at motivating and managing large teams.",
        "You are comfortable taking calculated risks and making high-stakes decisions.",
        "You have strong financial acumen and understand how to drive profitability.",
        "You are excellent at networking, public speaking, and corporate communication.",
        "You can stay calm and strategic during corporate crises or market downturns."
    ],
    7: [
        "You are both highly creative and deeply analytical, driven by data-backed results.",
        "You love understanding consumer psychology and what drives purchasing behavior.",
        "You are highly adaptable and constantly learn new social media algorithms.",
        "You have strong writing skills and an eye for compelling visual aesthetics.",
        "You enjoy running A/B tests and optimizing campaigns for ROI."
    ],
    8: [
        "You thrive under extreme pressure and do not mind working 80+ hour weeks.",
        "You are a math and Excel wizard, naturally gifted at financial modeling.",
        "You are highly competitive and motivated by high-stakes deals and high compensation.",
        "You have exceptional attention to detail; a small error can ruin a multi-million dollar deal.",
        "You enjoy corporate strategy and analyzing the financial health of massive companies."
    ],
    301: [
        "You possess high emotional intelligence and excel at resolving interpersonal conflicts.",
        "You are passionate about building company culture and employee well-being.",
        "You are comfortable navigating complex employment laws and compliance regulations.",
        "You are persuasive and enjoy recruiting top talent to build winning teams.",
        "You are trustworthy and can handle sensitive, confidential personnel issues."
    ],
    302: [
        "You are highly analytical, organized, and a master of logistical planning.",
        "You enjoy optimizing complex systems to save time, money, and resources.",
        "You stay incredibly calm when global events disrupt your supply chains.",
        "You have strong negotiation skills for dealing with international vendors.",
        "You are comfortable analyzing massive datasets to forecast future demand."
    ],
    303: [
        "You are highly persuasive, charismatic, and excellent at building relationships.",
        "You have thick skin, handle rejection well, and bounce back quickly.",
        "You are highly competitive and motivated by quotas, commissions, and targets.",
        "You are an active listener who can identify a client's underlying pain points.",
        "You excel at public speaking, pitching, and presenting under pressure."
    ],
    304: [
        "You are exceptionally organized and great at juggling multiple timelines simultaneously.",
        "You are completely comfortable holding cross-functional teams accountable.",
        "You enjoy taking a massive, vague goal and breaking it down into actionable steps.",
        "You excel at crisis management and re-allocating resources when things go wrong.",
        "You have strong communication skills to manage stakeholder expectations."
    ],
    305: [
        "You are a visionary risk-taker who is entirely comfortable with extreme uncertainty.",
        "You have an incredible work ethic and don't mind working 24/7 to build your dream.",
        "You are resilient and view failures simply as stepping stones to success.",
        "You are a highly persuasive storyteller, capable of convincing investors to back you.",
        "You are adaptable and willing to pivot your entire product when the market demands it."
    ],
    306: [
        "You are highly trustworthy and excel at building deep, long-term relationships.",
        "You have a strong understanding of financial markets, taxes, and estate planning.",
        "You are excellent at explaining complex financial concepts to non-technical clients.",
        "You are highly analytical and enjoy crafting personalized investment portfolios.",
        "You are comfortable networking with high-net-worth individuals and family offices."
    ],
    307: [
        "You are exceptionally gifted at statistics, probability, and advanced mathematics.",
        "You enjoy assessing and quantifying future risks using complex data models.",
        "You have the discipline to study for and pass a rigorous series of professional exams.",
        "You are highly detail-oriented and enjoy working behind the scenes in finance.",
        "You possess strong coding skills (Python/R) for predictive data modeling."
    ],
    308: [
        "You are a fast learner who can quickly become an expert in completely new industries.",
        "You are excellent at structuring ambiguous problems into logical, solvable frameworks.",
        "You don't mind living out of a suitcase and traveling constantly to client sites.",
        "You excel at creating compelling, data-backed PowerPoint presentations.",
        "You are comfortable advising C-suite executives who are much older than you."
    ],
    4: [
        "You have deep empathy for end-users and always advocate for their needs.",
        "You appreciate aesthetic beauty but prioritize functionality and intuition.",
        "You are comfortable accepting criticism and iterating designs based on feedback.",
        "You enjoy conducting research, interviews, and analyzing user interaction data.",
        "You have an eye for spatial layout, typography, and color theory."
    ],
    11: [
        "You have a unique blend of creative artistic flair and logical, structural thinking.",
        "You want to leave a permanent, physical, and beautiful mark on the world.",
        "You have excellent spatial awareness and can visualize 3D spaces from 2D plans.",
        "You are patient enough to navigate complex zoning laws and building codes.",
        "You enjoy collaborating closely with engineers, contractors, and clients."
    ],
    12: [
        "You are intensely curious about the world and constantly asking 'why?'.",
        "You are a natural storyteller with a deeply engaging writing or speaking style.",
        "You have a relentless drive to uncover the truth and hold people accountable.",
        "You thrive under the pressure of tight deadlines and breaking news.",
        "You are excellent at networking and getting people to open up in interviews."
    ],
    401: [
        "You are highly visual, with an innate eye for color, typography, and layout.",
        "You love translating complex, abstract ideas into simple, beautiful designs.",
        "You are comfortable receiving subjective feedback and revising your work.",
        "You stay up-to-date with the latest visual trends in digital and print media.",
        "You enjoy using software like Illustrator, Photoshop, and InDesign."
    ],
    402: [
        "You are highly observant of how things move in the real world (gravity, weight).",
        "You possess the extreme patience required for frame-by-frame detailed work.",
        "You love cinematic storytelling and bringing inanimate objects to life.",
        "You are comfortable with both the artistic and highly technical aspects of 3D software.",
        "You enjoy collaborating in large pipelines to produce films or video games."
    ],
    403: [
        "You have an impeccable, innate sense of personal style and aesthetics.",
        "You have a deep understanding of textiles, fabrics, and garment construction.",
        "You are highly observant of culture and can anticipate or invent new trends.",
        "You have the thick skin required to survive in a highly critical, competitive industry.",
        "You enjoy the fast-paced nature of seasonal collections and runway shows."
    ],
    404: [
        "You understand spatial flow and how environments affect human psychology.",
        "You love optimizing indoor aesthetics with color, lighting, and texture.",
        "You can balance a client's specific taste with highly functional design.",
        "You are detail-oriented regarding building codes, safety, and precise measurements.",
        "You enjoy sourcing materials and managing contractors to bring a vision to life."
    ],
    405: [
        "You love inventing physical objects and figuring out how things are put together.",
        "You understand both the aesthetic form and the mechanical function of a product.",
        "You have a strong understanding of materials, ergonomics, and manufacturing processes.",
        "You are comfortable using 3D CAD software and building physical prototypes.",
        "You enjoy iterating designs based on user testing and cost constraints."
    ],
    406: [
        "You see the entire world in frames, compositions, and lighting angles.",
        "You are highly observant and know how to capture raw, authentic emotion visually.",
        "You are a master of highly technical camera gear, lenses, and lighting equipment.",
        "You are comfortable directing people and managing the chaos of a live set.",
        "You possess the patience required for tedious post-production editing and color grading."
    ],
    407: [
        "You have a brilliant way with words and can distill complex ideas into catchy phrases.",
        "You deeply understand consumer psychology and what drives people to take action.",
        "You are highly creative but also care about metrics, analytics, and A/B testing.",
        "You can easily adapt your writing style to match completely different brand voices.",
        "You enjoy brainstorming sessions and collaborating with art directors."
    ],
    408: [
        "You love drawing, world-building, and creating visually stunning environments.",
        "You have a deep understanding of anatomy, color theory, and digital painting.",
        "You enjoy collaborating with engineers to bring your interactive art to life.",
        "You are adaptable and can switch between hyper-realistic and stylized art styles.",
        "You are comfortable optimizing your artwork to run efficiently within a game engine."
    ],
    5: [
        "You are highly analytical, logical, and excel at structuring persuasive arguments.",
        "You are completely comfortable reading and synthesizing massive text documents.",
        "You have excellent public speaking, debate, and negotiation skills.",
        "You are highly competitive and thrive in adversarial, high-stakes environments.",
        "You are meticulous; a single misplaced comma in a contract can change a case."
    ],
    501: [
        "You are fascinated by the intersection of rapidly evolving technology and the law.",
        "You care deeply about data privacy, user rights, and digital security.",
        "You want to help shape policies for AI, cybersecurity, and global data flow.",
        "You are comfortable constantly learning, as tech laws change almost daily.",
        "You enjoy advising tech giants or startups on regulatory compliance."
    ],
    502: [
        "You have a unique background combining hard science/engineering with legal acumen.",
        "You are deeply interested in innovation and protecting the rights of inventors.",
        "You are highly meticulous when drafting complex patent claims and applications.",
        "You enjoy litigating high-stakes cases over copyrights and technical trade secrets.",
        "You are comfortable translating dense technical concepts to judges and juries."
    ],
    503: [
        "You are comfortable with high-stakes, fast-paced corporate environments.",
        "You love facilitating massive business combinations and billion-dollar deals.",
        "You thrive under pressure and don't mind working exhausting hours to close a deal.",
        "You possess exceptional negotiation skills and extreme attention to detail.",
        "You enjoy understanding the complex financial structures of large corporations."
    ],
    504: [
        "You are deeply analytical, detail-oriented, and highly comfortable with numbers.",
        "You view the complex, ever-changing tax code as a puzzle to be solved.",
        "You enjoy finding legal avenues to optimize financial outcomes for clients.",
        "You have the patience to navigate massive amounts of bureaucratic regulations.",
        "You are comfortable defending clients during high-stress government audits."
    ],
    505: [
        "You have a global perspective and care deeply about fundamental human rights.",
        "You are interested in diplomacy, foreign policy, and international treaties.",
        "You are adaptable, culturally aware, and potentially fluent in multiple languages.",
        "You want to make a systemic impact by working with NGOs or the United Nations.",
        "You are patient enough to navigate incredibly slow international bureaucracies."
    ],
    506: [
        "You are deeply passionate about protecting the planet and combating climate change.",
        "You want to use the legal system to enforce sustainability and corporate accountability.",
        "You have a strong grasp of environmental science and regulatory frameworks.",
        "You are comfortable taking on massive corporate entities in high-profile litigation.",
        "You enjoy the intersection of law, public policy, and scientific data."
    ],
    507: [
        "You are highly empathetic and want to help people through their darkest times.",
        "You have immense emotional resilience to avoid burnout from daily traumatic cases.",
        "You excel at mediation, de-escalation, and alternative dispute resolution.",
        "You can set strict professional boundaries while remaining compassionate.",
        "You are comfortable handling sensitive issues like child custody and asset division."
    ],
    508: [
        "You have a profound respect for the rule of law and the administration of justice.",
        "You are highly impartial, unbiased, and adhere strictly to judicial ethics.",
        "You have a long history of legal practice and impeccable analytical skills.",
        "You are comfortable making decisions that permanently alter peoples lives.",
        "You have the temperament to manage a courtroom and keep proceedings orderly."
    ],
    509: [
        "You love the business side of the sports, music, or film industries.",
        "You excel at negotiating lucrative contracts, endorsements, and media rights.",
        "You are charismatic and comfortable representing high-profile, demanding talent.",
        "You have a strong understanding of intellectual property and brand protection.",
        "You are highly networked and thrive in the entertainment industry culture."
    ],
    510: [
        "You are interested in property development, real estate finance, and urban growth.",
        "You are highly detail-oriented when drafting leases and examining property titles.",
        "You want to help facilitate major infrastructure, commercial, or housing projects.",
        "You enjoy negotiating complex contracts between buyers, sellers, and banks.",
        "You are comfortable navigating local zoning laws and municipal regulations."
    ],
    6: [
        "You love uncovering hidden patterns and insights within massive, messy datasets.",
        "You are exceptionally gifted at statistics, mathematics, and probability.",
        "You are comfortable writing code (Python/R) to build complex predictive models.",
        "You are highly curious and constantly asking questions about why things happen.",
        "You enjoy translating complex algorithms into actionable business strategies."
    ],
    601: [
        "You are naturally curious and love telling compelling stories using numbers.",
        "You excel at simplifying complex metrics for non-technical executives.",
        "You enjoy building beautiful, intuitive dashboards using tools like Tableau/PowerBI.",
        "You are highly focused on metrics, KPIs, and tracking business performance.",
        "You possess strong SQL skills to extract exactly the data you need."
    ],
    602: [
        "You care deeply about system architecture, scalability, and performance.",
        "You love building robust pipelines to move and transform terabytes of data.",
        "You prefer hardcore backend engineering over statistical analysis and modeling.",
        "You are an expert in SQL, distributed systems (Spark), and cloud data warehouses.",
        "You enjoy solving the foundational problems that make data science possible."
    ],
    603: [
        "You want to be at the absolute forefront of the AI and Large Language Model revolution.",
        "You are fascinated by generative systems creating text, code, audio, or art.",
        "You have a strong grasp of neural networks, transformers, and prompt engineering.",
        "You are comfortable in a field that changes drastically every single month.",
        "You think critically about AI safety, ethics, and reducing model hallucinations."
    ],
    604: [
        "You are a math genius who loves financial markets and complex algorithms.",
        "You thrive in the incredibly high-pressure environment of algorithmic trading.",
        "You have elite C++ or Python skills to build lightning-fast trading systems.",
        "You are comfortable building models that automatically handle millions of dollars.",
        "You are highly analytical, competitive, and entirely data-driven."
    ],
    605: [
        "You want to teach machines how to 'see' and interpret the visual world.",
        "You are passionate about technologies like self-driving cars or facial recognition.",
        "You have a deep understanding of Convolutional Neural Networks (CNNs).",
        "You are skilled at image processing, object detection, and tracking algorithms.",
        "You enjoy optimizing heavy deep-learning models to run on edge devices."
    ],
    606: [
        "You are fascinated by human language, linguistics, and syntactic structures.",
        "You want to teach computers how to read, understand, and generate human speech.",
        "You have a strong grasp of Transformer architectures (BERT, GPT variants).",
        "You enjoy working on chatbots, translation tools, or sentiment analysis engines.",
        "You are comfortable handling messy, unstructured text data."
    ],
    607: [
        "You love the intersection of advanced computer science and molecular biology.",
        "You want to analyze DNA sequencing to help cure genetic diseases.",
        "You have a unique background in both statistical modeling and life sciences.",
        "You are comfortable working with massive biological datasets and cloud computing.",
        "You enjoy working closely with doctors, geneticists, and researchers."
    ],
    608: [
        "You are deeply curious about why consumers buy what they buy.",
        "You enjoy designing surveys, running focus groups, and analyzing human behavior.",
        "You are skilled at both qualitative observation and quantitative statistical analysis.",
        "You excel at turning market research into competitive intelligence for brands.",
        "You have strong presentation skills to pitch insights to marketing teams."
    ],
    609: [
        "You love maps, geography, spatial thinking, and location-based logic.",
        "You want to use satellite imaging and GPS data to solve real-world problems.",
        "You are skilled in GIS software (ArcGIS/QGIS) and spatial SQL databases.",
        "You are interested in applications like urban planning, logistics, or climate tracking.",
        "You enjoy visualizing complex geographic patterns that aren't obvious in spreadsheets."
    ],
    610: [
        "You are a big-picture strategic thinker who understands data operations.",
        "You act as the bridge between raw database schemas and executive decision-making.",
        "You are highly skilled at Data Governance, ensuring data quality and security.",
        "You have deep expertise in ETL/ELT processes and data warehousing concepts.",
        "You excel at gathering requirements from C-suite executives and delivering solutions."
    ]
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
    const bulletArray = fitPoints[id] || [
        "You have a strong passion for this specific industry.",
        "You are eager to continuously learn and adapt to new changes.",
        "You enjoy working as part of a collaborative team to achieve goals.",
        "You have strong analytical skills to solve industry-specific problems.",
        "You want to make a tangible, positive impact in your daily work."
    ];

    // Create the updated string representation of the object
    const topRolesStr = JSON.stringify(career.topRoles);
    const futureRolesStr = career.futureRoles ? JSON.stringify(career.futureRoles) : "[]";
    const skillsStr = JSON.stringify(career.skills);
    const importantNoteStr = career.importantNote ? JSON.stringify(career.importantNote) : '""';
    const industriesHiringStr = career.industriesHiring ? JSON.stringify(career.industriesHiring) : "[]";
    const isRightForYouStr = JSON.stringify(bulletArray); // Now an array of 5 strings instead of a single string

    let objectStr = `    {
        id: ${career.id}, title: '${career.title.replace(/'/g, "\\'")}', category: '${career.category}', icon: '${career.icon}', color: '${career.color}',
        description: '${career.description.replace(/'/g, "\\'")}',
        avgSalary: '${career.avgSalary}', growth: '${career.growth}',
        topRoles: ${topRolesStr}, futureRoles: ${futureRolesStr}, skills: ${skillsStr},
        education: '${career.education.replace(/'/g, "\\'")}',
        importantNote: ${importantNoteStr},
        isRightForYou: ${isRightForYouStr},
        industriesHiring: ${industriesHiringStr}
    },`;
    outputString += objectStr + "\n";
}
outputString += "]";

// Write back to file
const newFileContent = fileContent.replace(/export const careers = \[([\s\S]*?)\];/, `export const careers = ${outputString};`);
fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log("Successfully enriched careersData.js with 5-point isRightForYou arrays");
