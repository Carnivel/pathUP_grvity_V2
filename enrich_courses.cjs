const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/coursesData.js');

const engineeringCourses = [
    { name: 'B.Tech (Computer Science)', field: 'engineering', color: '#4F46E5', baseCareers: ['Software Engineer', 'Data Scientist', 'Cloud Architect'] },
    { name: 'B.Tech (Mechanical)', field: 'engineering', color: '#4F46E5', baseCareers: ['Mechanical Engineer', 'Automobile Engineer', 'Robotics Engineer'] },
    { name: 'B.Tech (Civil)', field: 'engineering', color: '#4F46E5', baseCareers: ['Structural Engineer', 'Urban Planner', 'Construction Manager'] },
    { name: 'B.Tech (Electrical)', field: 'engineering', color: '#4F46E5', baseCareers: ['Electrical Engineer', 'Power Systems Engineer', 'Control Systems Engineer'] },
    { name: 'B.Tech (Electronics & Comm.)', field: 'engineering', color: '#4F46E5', baseCareers: ['Network Engineer', 'Telecom Engineer', 'VLSI Design Engineer'] },
    { name: 'B.Tech (Aerospace)', field: 'engineering', color: '#4F46E5', baseCareers: ['Aerospace Engineer', 'Avionics Engineer', 'Flight Test Engineer'] },
    { name: 'B.Tech (Biotechnology)', field: 'engineering', color: '#4F46E5', baseCareers: ['Biotechnologist', 'Clinical Researcher', 'Process Engineer'] },
    { name: 'B.Tech (Chemical)', field: 'engineering', color: '#4F46E5', baseCareers: ['Chemical Engineer', 'Process Safety Engineer', 'Plant Manager'] },
    { name: 'B.Tech (Information Technology)', field: 'engineering', color: '#4F46E5', baseCareers: ['IT Consultant', 'Systems Analyst', 'Database Administrator'] },
    { name: 'B.Tech (Artificial Intelligence)', field: 'engineering', color: '#4F46E5', baseCareers: ['AI Engineer', 'Machine Learning Engineer', 'NLP Scientist'] }
];

const medicalCourses = [
    { name: 'MBBS', field: 'medical', color: '#06B6D4', baseCareers: ['General Physician', 'Surgeon', 'Medical Officer'] },
    { name: 'BDS (Dental)', field: 'medical', color: '#06B6D4', baseCareers: ['Dentist', 'Orthodontist', 'Dental Surgeon'] },
    { name: 'B.Pharm', field: 'medical', color: '#06B6D4', baseCareers: ['Pharmacist', 'Drug Inspector', 'Clinical Research Associate'] },
    { name: 'B.Sc. (Nursing)', field: 'medical', color: '#06B6D4', baseCareers: ['Registered Nurse', 'Nurse Educator', 'Clinical Nurse Specialist'] },
    { name: 'BPT (Physiotherapy)', field: 'medical', color: '#06B6D4', baseCareers: ['Physiotherapist', 'Sports Rehab Specialist', 'Ergonomist'] },
    { name: 'BAMS (Ayurveda)', field: 'medical', color: '#06B6D4', baseCareers: ['Ayurvedic Doctor', 'Medical Consultant', 'Wellness Expert'] },
    { name: 'BHMS (Homeopathy)', field: 'medical', color: '#06B6D4', baseCareers: ['Homeopathic Doctor', 'Researcher', 'Clinic Owner'] },
    { name: 'B.V.Sc (Veterinary)', field: 'medical', color: '#06B6D4', baseCareers: ['Veterinarian', 'Animal Researcher', 'Livestock Inspector'] },
    { name: 'B.Sc (Radiology)', field: 'medical', color: '#06B6D4', baseCareers: ['Radiologic Technologist', 'MRI Technician', 'Sonographer'] },
    { name: 'B.Sc (Optometry)', field: 'medical', color: '#06B6D4', baseCareers: ['Optometrist', 'Vision Consultant', 'Ophthalmic Assistant'] }
];

const artsCourses = [
    { name: 'BA (Psychology)', field: 'arts', color: '#8B5CF6', baseCareers: ['Counselor', 'HR Specialist', 'Research Assistant'] },
    { name: 'BA (English Literature)', field: 'arts', color: '#8B5CF6', baseCareers: ['Content Writer', 'Editor', 'Teacher'] },
    { name: 'BA (History)', field: 'arts', color: '#8B5CF6', baseCareers: ['Historian', 'Museum Curator', 'Archivist'] },
    { name: 'BA (Political Science)', field: 'arts', color: '#8B5CF6', baseCareers: ['Political Analyst', 'Public Relations Specialist', 'Civil Servant'] },
    { name: 'BA (Sociology)', field: 'arts', color: '#8B5CF6', baseCareers: ['Social Worker', 'Community Organizer', 'Survey Researcher'] },
    { name: 'BA (Economics)', field: 'arts', color: '#8B5CF6', baseCareers: ['Economic Analyst', 'Market Researcher', 'Financial Consultant'] },
    { name: 'BFA (Fine Arts)', field: 'arts', color: '#8B5CF6', baseCareers: ['Commercial Artist', 'Art Director', 'Animator'] },
    { name: 'BA (Journalism & Mass Comm)', field: 'arts', color: '#8B5CF6', baseCareers: ['Journalist', 'PR Manager', 'Digital Marketer'] },
    { name: 'BA (Geography)', field: 'arts', color: '#8B5CF6', baseCareers: ['Cartographer', 'Environmental Consultant', 'GIS Specialist'] },
    { name: 'BA (Foreign Languages)', field: 'arts', color: '#8B5CF6', baseCareers: ['Translator', 'Interpreter', 'Diplomat'] }
];

const scienceCourses = [
    { name: 'B.Sc (Data Science)', field: 'science', color: '#059669', baseCareers: ['Data Analyst', 'Data Engineer', 'Machine Learning Engineer'] },
    { name: 'B.Sc (Physics)', field: 'science', color: '#059669', baseCareers: ['Physicist', 'Research Scientist', 'Lab Technician'] },
    { name: 'B.Sc (Chemistry)', field: 'science', color: '#059669', baseCareers: ['Analytical Chemist', 'Quality Control Lab Techn', 'Forensic Scientist'] },
    { name: 'B.Sc (Mathematics)', field: 'science', color: '#059669', baseCareers: ['Actuary', 'Statistician', 'Cryptographer'] },
    { name: 'B.Sc (Zoology)', field: 'science', color: '#059669', baseCareers: ['Zoologist', 'Wildlife Biologist', 'Conservation Officer'] },
    { name: 'B.Sc (Botany)', field: 'science', color: '#059669', baseCareers: ['Botanist', 'Ecologist', 'Plant Geneticist'] },
    { name: 'B.Sc (Microbiology)', field: 'science', color: '#059669', baseCareers: ['Microbiologist', 'Clinical Lab Scientist', 'Immunologist'] },
    { name: 'B.Sc (Agriculture)', field: 'science', color: '#059669', baseCareers: ['Agricultural Scientist', 'Agronomist', 'Farm Manager'] },
    { name: 'B.Sc (Computer Science)', field: 'science', color: '#059669', baseCareers: ['Software Developer', 'Systems Analyst', 'Web Developer'] },
    { name: 'B.Sc (Environmental Science)', field: 'science', color: '#059669', baseCareers: ['Environmental Consultant', 'Sustainability Officer', 'Waste Management Officer'] }
];

const commerceCourses = [
    { name: 'B.Com (Hons)', field: 'commerce', color: '#F43F5E', baseCareers: ['Accountant', 'Financial Analyst', 'Tax Consultant'] },
    { name: 'BBA', field: 'commerce', color: '#F43F5E', baseCareers: ['Business Analyst', 'Marketing Executive', 'HR Manager'] },
    { name: 'B.Com (Finance & Accounts)', field: 'commerce', color: '#F43F5E', baseCareers: ['Financial Planner', 'Investment Analyst', 'Auditor'] },
    { name: 'BMS (Management Studies)', field: 'commerce', color: '#F43F5E', baseCareers: ['Project Manager', 'Operations Analyst', 'Sales Manager'] },
    { name: 'B.Com (Taxation)', field: 'commerce', color: '#F43F5E', baseCareers: ['Tax Adviser', 'Revenue Agent', 'Compliance Officer'] },
    { name: 'BBA (International Business)', field: 'commerce', color: '#F43F5E', baseCareers: ['Trade Analyst', 'Export Manager', 'Global Sourcing Manager'] },
    { name: 'B.Com (Banking & Insurance)', field: 'commerce', color: '#F43F5E', baseCareers: ['Banker', 'Insurance Underwriter', 'Loan Officer'] },
    { name: 'BBA (Retail Management)', field: 'commerce', color: '#F43F5E', baseCareers: ['Retail Manager', 'Merchandiser', 'Store Planner'] },
    { name: 'B.Com (E-Commerce)', field: 'commerce', color: '#F43F5E', baseCareers: ['E-Commerce Manager', 'Digital Analyst', 'Supply Chain Coordinator'] },
    { name: 'BBA (Entrepreneurship)', field: 'commerce', color: '#F43F5E', baseCareers: ['Founder', 'Venture Analyst', 'Business Consultant'] }
];

const lawCourses = [
    { name: 'BA LLB (Hons)', field: 'law', color: '#D97706', baseCareers: ['Corporate Lawyer', 'Litigation Lawyer', 'Legal Advisor'] },
    { name: 'BBA LLB', field: 'law', color: '#D97706', baseCareers: ['Corporate Counsel', 'Mergers & Acquisitions Lawyer', 'Compliance Officer'] },
    { name: 'B.Com LLB', field: 'law', color: '#D97706', baseCareers: ['Tax Lawyer', 'Company Secretary', 'Financial Legal Consultant'] },
    { name: 'B.Sc LLB', field: 'law', color: '#D97706', baseCareers: ['IPR Lawyer', 'Patent Attorney', 'Environmental Lawyer'] },
    { name: 'LLB (3 Years)', field: 'law', color: '#D97706', baseCareers: ['Advocate', 'Public Prosecutor', 'Magistrate'] },
    { name: 'B.Tech LLB', field: 'law', color: '#D97706', baseCareers: ['Cyber Law Expert', 'Tech Legal Advisor', 'Patent Drafter'] },
    { name: 'BA in Criminology & Law', field: 'law', color: '#D97706', baseCareers: ['Criminologist', 'Criminal Lawyer', 'Forensic Legal Expert'] },
    { name: 'Diploma in Cyber Law', field: 'law', color: '#D97706', baseCareers: ['Cyber Security Consultant', 'Data Privacy Officer', 'Tech Policy Analyst'] },
    { name: 'Diploma in Labor Law', field: 'law', color: '#D97706', baseCareers: ['HR Legal Advisor', 'Union Representative', 'Labor Compliance Officer'] },
    { name: 'Diploma in Human Rights Law', field: 'law', color: '#D97706', baseCareers: ['Human Rights Activist', 'NGO Legal Counsel', 'Policy Advocate'] }
];

const allCourseTemplates = [
    ...engineeringCourses, ...medicalCourses, ...artsCourses,
    ...scienceCourses, ...commerceCourses, ...lawCourses
];

function generateCourseData() {
    let idCounter = 1;
    let fullCoursesList = [];

    for (const tmpl of allCourseTemplates) {

        // Generate pseudo-data for each course
        let duration = '3 Years';
        let degree = 'Bachelor';
        let avgFees = '\u20B91 - 3 Lacs/yr';
        let roadmapLen = 3;

        if (tmpl.name.includes('B.Tech') || tmpl.name.includes('B.Pharm')) { duration = '4 Years'; roadmapLen = 4; degree = 'Bachelor of Technology/Pharmacy'; avgFees = '\u20B92 - 8 Lacs/yr'; }
        if (tmpl.name.includes('MBBS') || tmpl.name.includes('BDS') || tmpl.name.includes('BAMS')) { duration = '5.5 Years'; roadmapLen = 5; degree = 'Medical Bachelor'; avgFees = '\u20B95 - 25 Lacs/yr'; }
        if (tmpl.name.includes('LLB') && !tmpl.name.startsWith('LLB')) { duration = '5 Years'; roadmapLen = 5; degree = 'Integrated Law'; avgFees = '\u20B93 - 10 Lacs/yr'; }
        if (tmpl.name.startsWith('Diploma')) { duration = '1 Year'; roadmapLen = 1; degree = 'Diploma'; avgFees = '\u20B90.5 - 1 Lacs/yr'; }

        // Create random fees, colleges
        const topColleges = Math.floor(Math.random() * 150) + 30;

        let roadmap = [];
        for (let y = 1; y <= roadmapLen; y++) {
            roadmap.push({
                year: 'Year ' + y,
                title: y === 1 ? 'Foundations & Basics' : y === roadmapLen ? 'Specialization & Projects' : 'Core Subjects',
                description: 'Detailed study of core subjects related to ' + tmpl.name + ' required for building a strong foundation and expertise.'
            });
        }

        let careers = tmpl.baseCareers.map(role => {
            const highBound = Math.floor(Math.random() * 15) + 10;
            const lowBound = Math.floor(Math.random() * 5) + 3;
            const demands = ['High', 'Very High', 'Stable', 'Growing'];
            return {
                role: role,
                salary: "\u20B9" + lowBound + " - " + highBound + " LPA",
                demand: demands[Math.floor(Math.random() * demands.length)]
            }
        });

        let courseItem = {
            id: idCounter++,
            name: tmpl.name,
            stream: tmpl.field,
            duration: duration,
            degree: degree,
            avgFees: avgFees,
            topColleges: topColleges,
            trending: Math.random() > 0.7,
            color: tmpl.color,
            highlights: ['Hands-on Projects', 'Industry Placement', 'Expert Faculty'],
            about: "A comprehensive course in " + tmpl.name + ", preparing students for demanding roles in the " + tmpl.field + " sector through extensive theoretical knowledge and practical applications.",
            eligibility: ["10+2 from a recognized board", "Minimum 50% aggregate", "Entrance test or merit-based admission"],
            careers: careers,
            roadmap: roadmap
        };

        fullCoursesList.push(courseItem);
    }
    return fullCoursesList;
}

const finalCoursesArray = generateCourseData();

const newFileContent = "export const streams = [\n" +
    "    { id: 'all', label: 'All Streams' },\n" +
    "    { id: 'engineering', label: 'Engineering' },\n" +
    "    { id: 'medical', label: 'Medical' },\n" +
    "    { id: 'arts', label: 'Arts & Humanities' },\n" +
    "    { id: 'science', label: 'Science' },\n" +
    "    { id: 'commerce', label: 'Commerce' },\n" +
    "    { id: 'law', label: 'Law' },\n" +
    "];\n\n" +
    "export const courses = " + JSON.stringify(finalCoursesArray, null, 4) + ";\n";

fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log("Successfully generated 60 courses and wrote to coursesData.js");
