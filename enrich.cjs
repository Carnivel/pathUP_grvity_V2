const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/careersData.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

const enrichments = {
    1: { futureRoles: ["VP of Engineering", "CTO", "Principal Architect"], importantNote: "Continuous learning and adapting to new frameworks is critical." },
    10: { futureRoles: ["Chief Information Security Officer", "Security Director"], importantNote: "Certifications like CISSP drastically improve career prospects." },
    101: { futureRoles: ["Head of Cloud Infrastructure", "Cloud Strategy Director"], importantNote: "Vendor-specific certifications (AWS, Azure, GCP) are mandatory for growth." },
    102: { futureRoles: ["Lead Blockchain Architect", "Web3 Technical Director"], importantNote: "Cryptography fundamentals and staying updated closely with decentralized finance trends are essential." },
    103: { futureRoles: ["Gaming Studio Director", "Lead Game Engine Architect"], importantNote: "A strong portfolio of playable games is more valuable than just degrees." },
    104: { futureRoles: ["VP of Platform Engineering", "Head of SRE"], importantNote: "Mastery of automation and infrastructure-as-code is the core." },
    105: { futureRoles: ["Director of IoT Solutions", "Hardware/Software Architect"], importantNote: "Understanding both hardware limitations and cloud integrations is the golden key." },
    106: { futureRoles: ["Metaverse Product Lead", "Principal VR Architect"], importantNote: "Knowledge of 3D math and spatial computing concepts is highly required." },
    107: { futureRoles: ["Network Architecture Director", "VP of IT Infrastructure"], importantNote: "CCIE or equivalent expert certifications carry massive weight." },
    108: { futureRoles: ["Chief Data Officer", "Principal Data Architect"], importantNote: "Transitioning towards cloud-native databases is the modern necessity." },
    109: { futureRoles: ["VP of Quality Assurance", "Director of Test Automation"], importantNote: "Automation skills have completely overtaken manual testing roles." },
    2: { futureRoles: ["Chief Medical Officer", "Hospital Director", "Head of Surgery"], importantNote: "Residency and continuous hands-on practice are the only paths to mastery." },
    9: { futureRoles: ["Director of Nursing", "Chief Nursing Officer"], importantNote: "Empathy and physical stamina are as important as medical knowledge." },
    201: { futureRoles: ["Clinic Owner", "Maxillofacial Surgeon"], importantNote: "Building a loyal patient base and managing a private practice are key for high income." },
    202: { futureRoles: ["Director of Pharmacy", "R&D Head in Pharma"], importantNote: "Attention to detail is non-negotiable; small errors have major consequences." },
    203: { futureRoles: ["Rehabilitation Center Director", "Sports Team Head Physio"], importantNote: "Physical fitness and patience are critical for helping patients recover." },
    204: { futureRoles: ["Veterinary Hospital Director", "Wildlife Conservation Vet"], importantNote: "Requires an immense passion for animals and tolerance for emotional stress." },
    205: { futureRoles: ["Chief Psychologist", "Mental Health Program Director"], importantNote: "Emotional resilience is absolutely necessary to avoid burnout." },
    206: { futureRoles: ["Head of Clinical Nutrition", "Corporate Wellness Director"], importantNote: "Adapting generic diets to specific medical profiles is the core skill." },
    207: { futureRoles: ["VP of Medical Devices R&D", "Chief Innovation Officer"], importantNote: "Bridging the gap between engineering complexity and patient safety is the main challenge." },
    208: { futureRoles: ["Head of Radiology Dept", "Chief Diagnostic Tech"], importantNote: "Precision and deep understanding of anatomy are critical for accurate imaging." },
    209: { futureRoles: ["Hospital CEO", "Minister of Health", "Public Health Director"], importantNote: "Balancing clinical outcomes with financial sustainability is the primary goal." },
    3: { futureRoles: ["CEO", "Chief Operating Officer", "VP of Strategy"], importantNote: "Networking and soft skills often outweigh technical knowledge at higher levels." },
    7: { futureRoles: ["Chief Marketing Officer (CMO)", "VP of Growth"], importantNote: "Data-driven decision making has replaced purely creative marketing." },
    8: { futureRoles: ["Managing Director", "Partner", "Head of M&A"], importantNote: "Extremely high stress and long hours are the norm, but the financial rewards are unmatched." },
    301: { futureRoles: ["Chief Human Resources Officer (CHRO)", "VP of People"], importantNote: "Understanding employment law and resolving conflicts are everyday necessities." },
    302: { futureRoles: ["Chief Supply Chain Officer", "VP of Global Logistics"], importantNote: "Crisis management and forecasting are the most critical skills to master." },
    303: { futureRoles: ["Chief Revenue Officer (CRO)", "VP of Global Sales"], importantNote: "Resilience to rejection and high emotional intelligence define the best salespeople." },
    304: { futureRoles: ["Head of PMO", "VP of Operations"], importantNote: "Certifications like PMP or Agile/Scrum Master are standard requirements." },
    305: { futureRoles: ["Serial Entrepreneur", "Venture Partner", "Angel Investor"], importantNote: "Comfort with extreme uncertainty and failure is a prerequisite." },
    306: { futureRoles: ["Partner at Wealth Firm", "Family Office Director"], importantNote: "Trust and maintaining long-term relationships with clients are everything." },
    307: { futureRoles: ["Chief Risk Officer", "Chief Actuary"], importantNote: "Clearing the rigorous series of actuarial exams is the biggest hurdle." },
    308: { futureRoles: ["Senior Partner", "Global Practice Head"], importantNote: "Involves heavy travel and the ability to solve ambiguous problems under tight deadlines." },
    4: { futureRoles: ["VP of Design", "Chief Design Officer", "Creative Director"], importantNote: "A strong, curated portfolio is your true resume." },
    11: { futureRoles: ["Principal Architect", "City Planning Director"], importantNote: "Licensure is legally required to sign off on building plans." },
    12: { futureRoles: ["Editor-in-Chief", "VP of Content", "Media Director"], importantNote: "Building a personal brand and audience is increasingly vital for success." },
    401: { futureRoles: ["Creative Director", "Head of Brand Identity"], importantNote: "Understanding marketing psychology is what separates good designers from great ones." },
    402: { futureRoles: ["VFX Supervisor", "Animation Studio Head"], importantNote: "Patience and extreme attention to frame-by-frame detail are required." },
    403: { futureRoles: ["Creative Director of Fashion House", "Lead Apparel Designer"], importantNote: "The industry is highly competitive; networking is as important as talent." },
    404: { futureRoles: ["Principal Interior Architect", "Design Firm Partner"], importantNote: "Understanding spatial flow and building codes is as important as aesthetics." },
    405: { futureRoles: ["VP of Product Design", "Head of Industrial Design"], importantNote: "Balancing aesthetics with manufacturability and cost is the core challenge." },
    406: { futureRoles: ["Director of Photography (DP)", "Executive Producer"], importantNote: "Technical mastery of gear must be paired with an artistic eye." },
    407: { futureRoles: ["Creative Group Head", "Chief Creative Officer"], importantNote: "The ability to write persuasively and understand human psychology is key." },
    408: { futureRoles: ["Art Director", "Lead Game Artist"], importantNote: "Adapting to different art styles quickly makes you highly valuable." },
    5: { futureRoles: ["Senior Partner", "Judge", "General Counsel"], importantNote: "Passing the Bar exam and immense amounts of reading are required." },
    501: { futureRoles: ["Chief Privacy Officer", "Technology Policy Director"], importantNote: "Law changes rapidly in this field; constant updates are required." },
    502: { futureRoles: ["Head of IP Strategy", "Patent Office Director"], importantNote: "A background in science or engineering is often required for patent law." },
    503: { futureRoles: ["M&A Partner", "Chief Legal Officer"], importantNote: "High pressure and tight deadlines are common during major corporate deals." },
    504: { futureRoles: ["Partner (Tax Practice)", "Director of Revenue"], importantNote: "Attention to detail with numbers and constantly changing tax codes is essential." },
    505: { futureRoles: ["UN Legal Advisor", "International Court Judge"], importantNote: "Fluency in multiple languages and living abroad are often required." },
    506: { futureRoles: ["Head of Environmental Policy", "Sustainability Director"], importantNote: "Passion for the environment is needed to navigate slow bureaucratic systems." },
    507: { futureRoles: ["Senior Family Judge", "Partner (Family Law)"], importantNote: "Requires extreme emotional intelligence and boundary-setting to avoid burnout." },
    508: { futureRoles: ["High Court Judge", "Supreme Court Justice"], importantNote: "Impeccable ethical standards and a long history of legal practice are required." },
    509: { futureRoles: ["Sports Agency Director", "Head of Entertainment Law"], importantNote: "Networking and negotiation skills are heavily utilized." },
    510: { futureRoles: ["Partner (Real Estate)", "Development Legal Head"], importantNote: "Understanding local zoning laws and urban politics is crucial." },
    6: { futureRoles: ["Chief Data Scientist", "VP of AI", "Head of Data"], importantNote: "Math and statistics are the foundation; tools and languages change, but math doesn't." },
    601: { futureRoles: ["VP of Analytics", "Chief Analytics Officer"], importantNote: "The ability to communicate data insights to non-technical stakeholders is vital." },
    602: { futureRoles: ["Head of Data Infrastructure", "VP of Data Engineering"], importantNote: "Data engineers are often in higher demand than data scientists to build the foundations." },
    603: { futureRoles: ["Director of AI Research", "VP of GenAI Solutions"], importantNote: "This space evolves weekly; constant reading of research papers is necessary." },
    604: { futureRoles: ["Head of Quantitative Trading", "Portfolio Manager"], importantNote: "Extreme mathematical rigor and comfort with building models that handle massive money." },
    605: { futureRoles: ["Lead Autonomous Systems Engineer", "VP of Computer Vision"], importantNote: "Deep understanding of deep learning and optimization for edge devices." },
    606: { futureRoles: ["Head of Conversational AI", "Principal NLP Scientist"], importantNote: "Understanding linguistics alongside machine learning yields the best results." },
    607: { futureRoles: ["Director of Computational Biology", "Head of Biotech Informatics"], importantNote: "Requires cross-disciplinary knowledge in both biology and computer science." },
    608: { futureRoles: ["VP of Consumer Insights", "Director of Market Intelligence"], importantNote: "Separating signal from noise in consumer data is the primary challenge." },
    609: { futureRoles: ["Head of Spatial Data Science", "Director of Urban Analytics"], importantNote: "Fusing geospatial data with other datasets unlocks the highest value insights." },
    610: { futureRoles: ["VP of Business Intelligence", "Chief Data Officer"], importantNote: "Bridging the gap between raw database schemas and executive dashboards is key." }
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
    const enrichment = enrichments[id] || { futureRoles: ["Industry Leader", "Senior Executive"], importantNote: "Continuous learning and networking are essential for long-term growth in this field." };

    // Create the updated string representation of the object
    const topRolesStr = JSON.stringify(career.topRoles);
    const skillsStr = JSON.stringify(career.skills);
    const futureRolesStr = JSON.stringify(enrichment.futureRoles);
    const importantNoteStr = JSON.stringify(enrichment.importantNote);

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
console.log("Successfully enriched careersData.js");
