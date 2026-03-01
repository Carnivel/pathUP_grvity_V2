const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/careersData.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

const moreEnrichments = {
    1: {
        isRightForYou: "You enjoy solving logical puzzles, have an eye for detail, and don't mind sitting for long hours debugging complex technical issues.",
        industriesHiring: ["Tech & IT", "Finance & Fintech", "Healthcare Tech", "E-commerce", "Automotive"]
    },
    10: {
        isRightForYou: "You have a hacker mindset, think like a detective, and thrive on outsmarting malicious actors in high-stress environments.",
        industriesHiring: ["Banking & Finance", "Government & Defense", "Tech & SaaS", "Healthcare", "Consulting"]
    },
    101: {
        isRightForYou: "You love thinking about the big picture, scaling systems to support millions of users, and managing complex infrastructure.",
        industriesHiring: ["Cloud Providers", "Telecom", "Streaming Services", "E-commerce", "SaaS"]
    },
    102: {
        isRightForYou: "You are fascinated by decentralization, cryptography, and want to be at the bleeding edge of Web3 innovation.",
        industriesHiring: ["Fintech & DeFi", "Gaming & Metaverse", "Supply Chain", "Venture Capital", "Cybersecurity"]
    },
    103: {
        isRightForYou: "You have a blend of artistic vision and hardcore programming skills, and love creating immersive virtual worlds.",
        industriesHiring: ["Game Studios", "AR/VR Tech", "Education/EdTech", "Entertainment", "Simulation/Military"]
    },
    104: {
        isRightForYou: "You are obsessed with automation, hate doing things manually twice, and love bridging the gap between developers and operations.",
        industriesHiring: ["SaaS & Cloud", "Fintech", "E-commerce", "Healthcare Tech", "Telecommunications"]
    },
    105: {
        isRightForYou: "You like working at the intersection of hardware and software, making physical objects 'smart' and connected.",
        industriesHiring: ["Manufacturing & Industry 4.0", "Consumer Electronics", "Automotive", "Smart Home/City", "Healthcare"]
    },
    106: {
        isRightForYou: "You are passionate about spatial computing, immersive experiences, and shaping the future of human-computer interaction.",
        industriesHiring: ["Entertainment", "Education & Training", "Real Estate", "Healthcare", "Retail"]
    },
    107: {
        isRightForYou: "You enjoy working with hardware, understanding how data physically moves across the globe, and troubleshooting connectivity.",
        industriesHiring: ["Telecommunications", "Data Centers", "ISPs", "Large Enterprises", "Government"]
    },
    108: {
        isRightForYou: "You are highly organized, detail-oriented, and care deeply about data integrity, security, and fast retrieval.",
        industriesHiring: ["Finance", "Healthcare", "E-commerce", "Government", "Tech"]
    },
    109: {
        isRightForYou: "You have a knack for breaking things, spotting edge cases, and ensuring a flawless user experience before launch.",
        industriesHiring: ["Software & IT", "Game Development", "Banking", "Healthcare ERP", "Consumer Apps"]
    },
    2: {
        isRightForYou: "You have immense empathy, physical stamina, a calm demeanor during emergencies, and a lifelong commitment to learning.",
        industriesHiring: ["Hospitals", "Private Clinics", "Research Institutes", "Military", "NGOs"]
    },
    9: {
        isRightForYou: "You are deeply compassionate, emotionally resilient, and find fulfillment in direct, hands-on patient care.",
        industriesHiring: ["Hospitals", "Nursing Homes", "Home Healthcare", "Schools", "Corporate Clinics"]
    },
    201: {
        isRightForYou: "You have excellent manual dexterity, good interpersonal skills for anxious patients, and an interest in oral health.",
        industriesHiring: ["Private Dental Clinics", "Hospitals", "Research", "Academics", "Public Health"]
    },
    202: {
        isRightForYou: "You are incredibly detail-oriented, interested in chemistry and how compounds interact with the human body.",
        industriesHiring: ["Retail Pharmacies", "Hospitals", "Pharmaceutical Companies", "Research", "Regulatory Agencies"]
    },
    203: {
        isRightForYou: "You are physically active, motivating, and enjoy helping people overcome physical limitations to regain mobility.",
        industriesHiring: ["Sports Teams", "Rehab Centers", "Hospitals", "Private Practice", "Fitness Centers"]
    },
    204: {
        isRightForYou: "You have a deep love for animals, are not squeamish, and can handle the emotional weight of treating pets.",
        industriesHiring: ["Veterinary Clinics", "Zoos & Wildlife Sanctuaries", "Agriculture", "Research", "Animal Shelters"]
    },
    205: {
        isRightForYou: "You are an exceptional listener, highly empathetic, and can detach from the emotional trauma you hear daily.",
        industriesHiring: ["Hospitals", "Private Practice", "Schools", "Corporate HR", "Rehabilitation Centers"]
    },
    206: {
        isRightForYou: "You are passionate about food science, healthy living, and enjoy counseling people to make better lifestyle choices.",
        industriesHiring: ["Hospitals", "Sports Teams", "Fitness Centers", "Food Industry", "Public Health"]
    },
    207: {
        isRightForYou: "You want to apply engineering principles to medicine, creating devices that save or drastically improve lives.",
        industriesHiring: ["Medical Device Manufacturing", "Hospitals", "Research Labs", "Pharmaceuticals", "Startups"]
    },
    208: {
        isRightForYou: "You are detail-oriented, comfortable with high-tech machinery, and care about patient safety and accurate diagnosis.",
        industriesHiring: ["Hospitals", "Diagnostic Centers", "Research Labs", "Outpatient Clinics"]
    },
    209: {
        isRightForYou: "You are a leader who understands both business operations and the critical nature of delivering quality healthcare.",
        industriesHiring: ["Hospitals", "Government Agencies", "NGOs", "Health Insurance", "Consulting"]
    },
    3: {
        isRightForYou: "You are a natural leader, comfortable making high-stakes decisions, and excel at managing both people and capital.",
        industriesHiring: ["Corporate Sector", "Startups", "Consulting", "Finance", "Retail"]
    },
    7: {
        isRightForYou: "You are both creative and analytical, love understanding consumer behavior, and are highly adaptable to new internet trends.",
        industriesHiring: ["Digital Agencies", "E-commerce", "Tech Startups", "Media & Entertainment", "Retail"]
    },
    8: {
        isRightForYou: "You thrive under extreme pressure, excel at complex financial math, and are motivated by high-stakes deals and high compensation.",
        industriesHiring: ["Investment Banks", "Private Equity", "Venture Capital", "Hedge Funds", "Corporate Strategy"]
    },
    301: {
        isRightForYou: "You have high emotional intelligence, enjoy resolving conflicts, and are passionate about building company culture.",
        industriesHiring: ["All Corporate Sectors", "Tech", "Manufacturing", "Healthcare", "Education"]
    },
    302: {
        isRightForYou: "You are a master of logistics, deeply analytical, and stay calm when global events disrupt carefully laid plans.",
        industriesHiring: ["Manufacturing", "E-commerce", "Retail", "Automotive", "FMCG"]
    },
    303: {
        isRightForYou: "You are an excellent communicator, highly persuasive, handle rejection well, and are motivated by targets and commissions.",
        industriesHiring: ["SaaS & Tech", "Real Estate", "Pharmaceuticals", "Manufacturing", "Financial Services"]
    },
    304: {
        isRightForYou: "You are highly organized, great at keeping teams accountable, and able to juggle timelines, budgets, and stakeholders simultaneously.",
        industriesHiring: ["Tech & Software", "Construction", "Engineering", "Marketing Agencies", "Healthcare"]
    },
    305: {
        isRightForYou: "You are a visionary risk-taker who embraces failure, works tirelessly, and wants to build something from absolutely nothing.",
        industriesHiring: ["Tech Startups", "E-commerce", "SaaS", "Fintech", "Green Energy"]
    },
    306: {
        isRightForYou: "You are trustworthy, articulate, excellent at networking, and understand the nuances of managing significant personal capital.",
        industriesHiring: ["Private Banks", "Wealth Management Firms", "Family Offices", "Asset Management"]
    },
    307: {
        isRightForYou: "You are exceptionally gifted at statistics and probability, and enjoy assessing risk using complex mathematical models.",
        industriesHiring: ["Insurance Providers", "Consulting Firms", "Government", "Pension Funds", "Investment Banks"]
    },
    308: {
        isRightForYou: "You are a fast learner, great at structuring ambiguous problems, and don't mind living out of a suitcase to meet clients globally.",
        industriesHiring: ["Strategy Consulting (MBB)", "Big 4 Accounting", "Boutique Advisory Firms", "Corporate Strategy"]
    },
    4: {
        isRightForYou: "You have deep empathy for end-users, appreciate aesthetics, and balance creative intuition with data-driven testing.",
        industriesHiring: ["Tech & Software", "Agencies", "E-commerce", "Fintech", "Media"]
    },
    11: {
        isRightForYou: "You have a mix of artistic flair and structural thinking, and want to leave a permanent physical mark on the world.",
        industriesHiring: ["Architectural Firms", "Real Estate Developers", "Urban Planning", "Construction", "Government"]
    },
    12: {
        isRightForYou: "You are intensely curious, a natural storyteller, and have a relentless drive to uncover the truth and share it compellingly.",
        industriesHiring: ["News Organizations", "Digital Media", "Publishing", "Corporate Comms", "PR Agencies"]
    },
    401: {
        isRightForYou: "You have an eye for layout, color, and typography, and love translating complex ideas into simple, beautiful visuals.",
        industriesHiring: ["Advertising", "Publishing", "Corporate Marketing", "Tech Startups", "Freelance"]
    },
    402: {
        isRightForYou: "You are highly observant of how things move, patient enough for frame-by-frame work, and love cinematic storytelling.",
        industriesHiring: ["Film & TV", "Gaming", "Advertising", "Architecture", "Education"]
    },
    403: {
        isRightForYou: "You have an impeccable sense of style, understand textiles, and can anticipate or create cultural trends.",
        industriesHiring: ["Apparel Brands", "Haute Couture", "Retailers", "Textile Manufacturing", "Media"]
    },
    404: {
        isRightForYou: "You understand spatial flow, love optimizing indoor aesthetics, and can balance a client's specific taste with functional design.",
        industriesHiring: ["Interior Design Firms", "Real Estate", "Hospitality", "Retail", "Corporate Workspaces"]
    },
    405: {
        isRightForYou: "You love inventing physical objects, understanding how things are manufactured, and merging form with function.",
        industriesHiring: ["Consumer Electronics", "Automotive", "Furniture Design", "Medical Devices", "Toys"]
    },
    406: {
        isRightForYou: "You see the world in frames and lighting, are highly observant, and know how to capture raw emotion visually.",
        industriesHiring: ["Film Production", "Advertising", "Media & Journalism", "Events", "Freelance"]
    },
    407: {
        isRightForYou: "You have a way with words, understand consumer psychology, and can write compelling narratives that drive action.",
        industriesHiring: ["Ad Agencies", "Tech Companies", "E-commerce", "Non-Profits", "Media"]
    },
    408: {
        isRightForYou: "You love drawing, world-building, and collaborating with engineers to bring interactive characters and environments to life.",
        industriesHiring: ["Game Studios", "Animation Studios", "AR/VR Companies", "Advertising", "Freelance"]
    },
    5: {
        isRightForYou: "You are highly analytical, comfortable with massive amounts of reading, and love crafting logical, persuasive arguments.",
        industriesHiring: ["Law Firms", "Corporate Counsel", "Government", "NGOs", "Judiciary"]
    },
    501: {
        isRightForYou: "You understand the intersection of technology and law, and want to protect user rights in a rapidly digitizing world.",
        industriesHiring: ["Tech Companies", "Law Firms", "Government", "Consulting", "E-commerce"]
    },
    502: {
        isRightForYou: "You have a scientific mindset combined with legal acumen, and want to protect the inventions and creations of innovators.",
        industriesHiring: ["IP Law Firms", "Pharmaceuticals", "Tech Giants", "Universities", "Entertainment"]
    },
    503: {
        isRightForYou: "You are comfortable with high-stakes, fast-paced environments and love facilitating massive business combinations.",
        industriesHiring: ["Big Law Firms", "Investment Banks", "Private Equity", "Corporate Counsel"]
    },
    504: {
        isRightForYou: "You are detail-oriented, comfortable with numbers, and enjoy finding legal avenues to optimize financial outcomes.",
        industriesHiring: ["Accounting Firms", "Tax Law Boutiques", "Corporate Finance", "Wealth Management"]
    },
    505: {
        isRightForYou: "You have a global perspective, care deeply about human rights, and want to make an impact on international policy.",
        industriesHiring: ["United Nations", "NGOs", "Government Diplomacy", "International Courts", "Academia"]
    },
    506: {
        isRightForYou: "You are passionate about the planet and want to use the legal system to enforce sustainability and combat climate change.",
        industriesHiring: ["Environmental NGOs", "Energy Companies", "Government Agencies", "Specialized Law Firms"]
    },
    507: {
        isRightForYou: "You are highly empathetic, emotionally resilient, and want to help individuals navigate the most difficult times in their personal lives.",
        industriesHiring: ["Family Law Boutiques", "Solo Practice", "Legal Aid Clinics", "Mediation Centers"]
    },
    508: {
        isRightForYou: "You are impartial, adhere strictly to ethics, and have a deep respect for the rule of law and the administration of justice.",
        industriesHiring: ["Government", "Court Systems"]
    },
    509: {
        isRightForYou: "You love the business of sports or entertainment, and excel at negotiating contracts for high-profile talent.",
        industriesHiring: ["Talent Agencies", "Sports Franchises", "Film Studios", "Record Labels", "Boutique Law Firms"]
    },
    510: {
        isRightForYou: "You are interested in property development, zoning laws, and want to help facilitate major infrastructure or housing projects.",
        industriesHiring: ["Real Estate Developers", "Law Firms", "Government Zoning Boards", "Title Companies"]
    },
    6: {
        isRightForYou: "You love uncovering hidden patterns in messy data, excel at statistics, and are comfortable writing code to build models.",
        industriesHiring: ["Tech & FAANG", "Finance", "Healthcare", "E-commerce", "Consulting"]
    },
    601: {
        isRightForYou: "You are naturally curious, love telling stories with numbers, and are great at simplifying complex metrics for executives.",
        industriesHiring: ["Retail", "Tech", "Finance", "Healthcare", "Marketing Agencies"]
    },
    602: {
        isRightForYou: "You care about system architecture, love building robust pipelines, and prefer the backend engineering over statistical modeling.",
        industriesHiring: ["Tech Companies", "Streaming Services", "Finance", "Retail", "Telecommunications"]
    },
    603: {
        isRightForYou: "You want to be at the forefront of AI, working with large language models to create systems that can generate text, code, or art.",
        industriesHiring: ["AI Startups", "Tech Giants", "Healthcare Tech", "Legal Tech", "Creative Agencies"]
    },
    604: {
        isRightForYou: "You are a math genius who loves financial markets and the high-pressure environment of algorithmic trading.",
        industriesHiring: ["Hedge Funds", "Proprietary Trading Firms", "Investment Banks", "Asset Management"]
    },
    605: {
        isRightForYou: "You want to teach machines how to 'see' the world, working on fascinating problems like autonomous driving or medical imaging.",
        industriesHiring: ["Automotive (Self-Driving)", "Healthcare Diagnostics", "Manufacturing", "Security & Surveillance", "Retail"]
    },
    606: {
        isRightForYou: "You are fascinated by human language and linguistics, and want to teach computers how to understand and respond to it.",
        industriesHiring: ["Tech (Search/Assistants)", "Customer Service SaaS", "Healthcare", "Legal Tech", "Finance"]
    },
    607: {
        isRightForYou: "You love the intersection of biology and computer science, analyzing DNA to help cure diseases or understand human health.",
        industriesHiring: ["Pharmaceuticals", "Biotech Startups", "Research Institutes", "Healthcare", "Agriculture"]
    },
    608: {
        isRightForYou: "You are deeply curious about why people buy what they buy, and enjoy designing surveys and analyzing consumer behavior.",
        industriesHiring: ["Consumer Goods (FMCG)", "Market Research Agencies", "Retail", "Automotive", "Media"]
    },
    609: {
        isRightForYou: "You love maps, geography, and spatial thinking, using location data to solve urban, environmental, or logistical problems.",
        industriesHiring: ["Urban Planning", "Logistics & Transport", "Environmental Agencies", "Agriculture", "Defense"]
    },
    610: {
        isRightForYou: "You are a big-picture thinker who bridges the gap between raw data warehouses and actionable executive dashboards.",
        industriesHiring: ["Large Enterprises", "Consulting", "Finance", "Healthcare", "E-commerce"]
    }
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
    const additionalData = moreEnrichments[id] || {
        isRightForYou: "You have a passion for this field, enjoy continuous learning, and are driven by making a tangible impact in your chosen profession.",
        industriesHiring: ["Technology", "Consulting", "Education", "Government", "Private Sector"]
    };

    // Create the updated string representation of the object
    const topRolesStr = JSON.stringify(career.topRoles);
    const futureRolesStr = career.futureRoles ? JSON.stringify(career.futureRoles) : "[]";
    const skillsStr = JSON.stringify(career.skills);
    const importantNoteStr = career.importantNote ? JSON.stringify(career.importantNote) : '""';
    const isRightForYouStr = JSON.stringify(additionalData.isRightForYou);
    const industriesHiringStr = JSON.stringify(additionalData.industriesHiring);

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
console.log("Successfully enriched careersData.js with isRightForYou and industriesHiring");
