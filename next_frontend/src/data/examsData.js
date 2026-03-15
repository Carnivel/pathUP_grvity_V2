export const examCategories = [
    { id: 'all', label: 'All Exams' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'medical', label: 'Medical' },
    { id: 'management', label: 'Management' },
    { id: 'law', label: 'Law' },
    { id: 'design', label: 'Design' },
    { id: 'civil', label: 'Civil Services' },
    { id: 'study_abroad', label: 'Study Abroad' }
];

export const examsData = [
    {
        id: 19,
        name: 'KEAM 2026',
        category: 'engineering',
        conductedBy: 'CEE Kerala',
        date: 'June 2026',
        level: 'State Level',
        eligibility: 'Class 12 with PCM (min 45%)',
        mode: 'Computer Based Test',
        registrations: '1 Lakh+',
        color: '#059669',
        fees: '₹700 - ₹900',
        about: 'Kerala Engineering Architecture Medical (KEAM) is an entrance examination series for admissions to various professional degree courses in the state of Kerala, India. It is highly sought after by students in South India for state engineering colleges.',
        importantDates: [
            { event: 'Notification Release', date: 'March 2026' },
            { event: 'Registration Window', date: 'March - April 2026' },
            { event: 'Admit Card Download', date: 'May 2026' },
            { event: 'Exam Date', date: 'June 2026' }
        ],
        syllabus: [
            'Physics: Motion, Thermodynamics, Electromagnetism, Modern Physics',
            'Chemistry: Physical, Organic, Inorganic Chemistry, Environmental Chemistry',
            'Mathematics: Algebra, Calculus, Coordinate Geometry, Vectors'
        ]
    },
    {
        id: 20,
        name: 'KCET 2026',
        category: 'engineering',
        conductedBy: 'KEA (Karnataka)',
        date: 'April 2026',
        level: 'State Level',
        eligibility: 'Class 12 with PCM/PCB (min 45%)',
        mode: 'Pen & Paper',
        registrations: '2.5 Lakh+',
        color: '#EA580C',
        fees: '₹500 - ₹750',
        about: 'Karnataka Common Entrance Test (KCET) is conducted by the Karnataka Examination Authority for admission to professional courses like Engineering Technology, Bachelor of Pharmacy (BPharma), Diploma in Pharmacy (DPharma), Agriculture courses (Farm Science) and Veterinary courses.',
        importantDates: [
            { event: 'Notification Release', date: 'January 2026' },
            { event: 'Registration Window', date: 'Feb - March 2026' },
            { event: 'Admit Card Download', date: 'April 2026' },
            { event: 'Exam Date', date: 'April 2026' }
        ],
        syllabus: [
            'Physics: State Syllabus Class 11 & 12',
            'Chemistry: State Syllabus Class 11 & 12',
            'Mathematics/Biology: Based on PUC syllabus'
        ]
    },
    {
        id: 21,
        name: 'AP EAPCET 2026',
        category: 'engineering',
        conductedBy: 'JNTU Kakinada (for APSCHE)',
        date: 'May 2026',
        level: 'State Level',
        eligibility: 'Class 12 with PCM/PCB (min 45%)',
        mode: 'Computer Based Test',
        registrations: '3.5 Lakh+',
        color: '#2563EB',
        fees: '₹600 - ₹1200',
        about: 'Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test (AP EAPCET) is a state-level entrance exam for admission into Engineering, Agriculture, and Pharmacy courses offered by colleges in Andhra Pradesh.',
        importantDates: [
            { event: 'Notification Release', date: 'March 2026' },
            { event: 'Registration Window', date: 'March - April 2026' },
            { event: 'Admit Card Download', date: 'May 2026' },
            { event: 'Exam Date', date: 'May 2026' }
        ],
        syllabus: [
            'Physics: Andhra State Board Syllabus',
            'Chemistry: Andhra State Board Syllabus',
            'Mathematics/Biology: Andhra State Board Syllabus'
        ]
    },
    {
        id: 22,
        name: 'TS EAMCET 2026',
        category: 'engineering',
        conductedBy: 'JNTU Hyderabad (for TSCHE)',
        date: 'May 2026',
        level: 'State Level',
        eligibility: 'Class 12 with PCM/PCB (min 45%)',
        mode: 'Computer Based Test',
        registrations: '3 Lakh+',
        color: '#7C3AED',
        fees: '₹900 - ₹1800',
        about: 'Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET) is a state-level exam for admission to engineering, agriculture, and pharmacy courses in colleges across Telangana.',
        importantDates: [
            { event: 'Notification Release', date: 'February 2026' },
            { event: 'Registration Window', date: 'March - April 2026' },
            { event: 'Admit Card Download', date: 'April 2026' },
            { event: 'Exam Date', date: 'May 2026' }
        ],
        syllabus: [
            'Physics: Telangana State Board 1st and 2nd Year',
            'Chemistry: Telangana State Board 1st and 2nd Year',
            'Mathematics/Biology: Telangana State Board 1st and 2nd Year'
        ]
    },
    {
        id: 1,
        name: 'JEE Main 2026',
        category: 'engineering',
        conductedBy: 'National Testing Agency (NTA)',
        date: 'April 2026',
        level: 'National',
        eligibility: 'Class 12 with PCM (min 75%)',
        mode: 'Computer Based Test',
        registrations: '12L+',
        color: '#4F46E5',
        fees: '₹650 - ₹1,600',
        about: 'Joint Entrance Examination (Main) is an all-India standardized computer-based test for admission to various technical undergraduate programs in architecture, engineering, and planning across India.',
        importantDates: [
            { event: 'Notification Release', date: 'November 2025' },
            { event: 'Registration Window', date: 'Dec 2025 - Jan 2026' },
            { event: 'Admit Card Download', date: 'March 2026' },
            { event: 'Exam Date (Session 1)', date: 'April 2026' }
        ],
        syllabus: ['Physics: Mechanics, Thermodynamics, Electromagnetism, Modern Physics', 'Chemistry: Physical, Organic, Inorganic Chemistry', 'Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry']
    },
    {
        id: 2,
        name: 'NEET UG 2026',
        category: 'medical',
        conductedBy: 'National Testing Agency (NTA)',
        date: 'May 2026',
        level: 'National',
        eligibility: 'Class 12 with PCB (min 50%)',
        mode: 'Pen & Paper',
        registrations: '20L+',
        color: '#06B6D4',
        fees: '₹1,600 - ₹1,700',
        about: 'The National Eligibility cum Entrance Test (Undergraduate) is an all India pre-medical entrance test for students who wish to pursue undergraduate medical (MBBS), dental (BDS) and AYUSH (BAMS, BUMS, BHMS, etc.) courses in government and private institutions in India.',
        importantDates: [
            { event: 'Notification Release', date: 'December 2025' },
            { event: 'Registration Window', date: 'Jan 2026 - March 2026' },
            { event: 'Admit Card Download', date: 'April 2026' },
            { event: 'Exam Date', date: 'May 2026' }
        ],
        syllabus: ['Physics: Optics, Thermodynamics, Mechanics', 'Chemistry: Organic, Inorganic, Physical', 'Biology: Botany, Zoology, Human Physiology']
    },
    {
        id: 3,
        name: 'CAT 2026',
        category: 'management',
        conductedBy: 'IIM (Rotational)',
        date: 'November 2026',
        level: 'National',
        eligibility: 'Graduation with 50%',
        mode: 'Computer Based Test',
        registrations: '2.5L+',
        color: '#F43F5E',
        fees: '₹2,300 - ₹2,500',
        about: 'The Common Admission Test (CAT) is a computer-based test for admission in a graduate management program. The test consists of three sections: Verbal Ability and Reading Comprehension (VARC), Data Interpretation and Logical Reasoning (DILR), and Quantitative Ability (QA).',
        importantDates: [
            { event: 'Registration Window', date: 'August - September 2026' },
            { event: 'Admit Card Download', date: 'October 2026' },
            { event: 'Exam Date', date: 'November 2026' },
            { event: 'Result Declaration', date: 'January 2027' }
        ],
        syllabus: ['Quantitative Ability (QA)', 'Data Interpretation & Logical Reasoning (DILR)', 'Verbal Ability & Reading Comprehension (VARC)']
    },
    {
        id: 4,
        name: 'CLAT 2026',
        category: 'law',
        conductedBy: 'Consortium of NLUs',
        date: 'December 2026',
        level: 'National',
        eligibility: 'Class 12 with 45%',
        mode: 'Computer Based Test',
        registrations: '70K+',
        color: '#D97706',
        fees: '₹4,000 - ₹4,500',
        about: 'The Common Law Admission Test (CLAT) is a centralized national level entrance test for admissions to twenty two National Law Universities (NLU) in India.',
        importantDates: [
            { event: 'Notification Release', date: 'July 2026' },
            { event: 'Registration Window', date: 'August - October 2026' },
            { event: 'Exam Date', date: 'December 2026' }
        ],
        syllabus: ['English Language', 'Current Affairs, including General Knowledge', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques']
    },
    {
        id: 5,
        name: 'GATE 2026',
        category: 'engineering',
        conductedBy: 'IIT (Rotational)',
        date: 'February 2026',
        level: 'National',
        eligibility: 'B.Tech / B.E. final year or graduate',
        mode: 'Computer Based Test',
        registrations: '8L+',
        color: '#8B5CF6',
        fees: '₹1,700 - ₹1,800',
        about: 'The Graduate Aptitude Test in Engineering (GATE) is an examination that primarily tests the comprehensive understanding of various undergraduate subjects in engineering and science.',
        importantDates: [
            { event: 'Registration Window', date: 'September - October 2025' },
            { event: 'Admit Card Download', date: 'January 2026' },
            { event: 'Exam Date', date: 'February 2026' }
        ],
        syllabus: ['General Aptitude (GA)', 'Engineering Mathematics (Core)', 'Subject-Specific Technical Section']
    },
    {
        id: 6,
        name: 'NID DAT 2026',
        category: 'design',
        conductedBy: 'National Institute of Design',
        date: 'January 2026',
        level: 'National',
        eligibility: 'Class 12 (any stream)',
        mode: 'Pen & Paper + Studio Test',
        registrations: '30K+',
        color: '#059669',
        fees: '₹3,000 - ₹3,500',
        about: 'National Institute of Design - Design Aptitude Test (NID DAT) is a two-tier entrance exam consisting of Prelims and Mains, conducted for admission to B.Des and M.Des programs.',
        importantDates: [
            { event: 'Registration Window', date: 'October - November 2025' },
            { event: 'DAT Prelims Exam', date: 'January 2026' },
            { event: 'DAT Mains (Studio Test)', date: 'March - April 2026' }
        ],
        syllabus: ['Visual Design', 'Thematic Color Arrangement', 'Subjects of Design', 'Memory Drawing', 'Proportions and Perspective']
    },
    {
        id: 7,
        name: 'UPSC CSE 2026',
        category: 'civil',
        conductedBy: 'UPSC',
        date: 'June 2026',
        level: 'National',
        eligibility: 'Graduation in any discipline',
        mode: 'Pen & Paper',
        registrations: '10L+',
        color: '#DC2626',
        fees: '₹100 - ₹200',
        about: 'The Civil Services Examination is a nationwide competitive examination in India conducted by the Union Public Service Commission for recruitment to various Civil Services of the Government of India, including IAS, IFS, and IPS.',
        importantDates: [
            { event: 'Notification Release', date: 'February 2026' },
            { event: 'Preliminary Exam', date: 'June 2026' },
            { event: 'Main Exam', date: 'September 2026' }
        ],
        syllabus: ['Prelims: General Studies & CSAT', 'Mains: Essay, English, Indian Language, General Studies I-IV, Optional Subjects']
    },
    {
        id: 8,
        name: 'JEE Advanced 2026',
        category: 'engineering',
        conductedBy: 'IIT (Rotational)',
        date: 'May 2026',
        level: 'National',
        eligibility: 'Qualified JEE Main (Top 2.5L)',
        mode: 'Computer Based Test',
        registrations: '1.6L+',
        color: '#4F46E5',
        fees: '₹2,800 - ₹2,900',
        about: 'Joint Entrance Examination – Advanced is an academic examination held annually in India. It is organized by one of the seven zonal IITs under the guidance of the Joint Admission Board (JAB).',
        importantDates: [
            { event: 'Registration Window', date: 'April 2026 (post JEE Main)' },
            { event: 'Admit Card Download', date: 'May 2026' },
            { event: 'Exam Date', date: 'May 2026' }
        ],
        syllabus: ['Physics, Chemistry, and Mathematics (Advanced concepts extending beyond JEE Main level)']
    },
    // Adding 10 new exams
    {
        id: 9,
        name: 'BITSAT 2026',
        category: 'engineering',
        conductedBy: 'BITS Pilani',
        date: 'June 2026',
        level: 'University',
        eligibility: 'Class 12 with PCM (min 75%)',
        mode: 'Computer Based Test',
        registrations: '3L+',
        color: '#4F46E5',
        fees: '₹3,400',
        about: 'BITS Admission Test (BITSAT) is an online computer-based exam for admission to engineering and science degree programs at BITS Pilani campuses in Pilani, Goa, and Hyderabad.',
        importantDates: [
            { event: 'Application Window', date: 'Jan - April 2026' },
            { event: 'Slot Booking', date: 'May 2026' },
            { event: 'Exam Date (Session 1)', date: 'June 2026' }
        ],
        syllabus: ['Physics, Chemistry, Mathematics', 'English Proficiency', 'Logical Reasoning']
    },
    {
        id: 10,
        name: 'XAT 2026',
        category: 'management',
        conductedBy: 'XLRI Jamshedpur',
        date: 'January 2026',
        level: 'National',
        eligibility: 'Graduation in any discipline',
        mode: 'Computer Based Test',
        registrations: '1L+',
        color: '#F43F5E',
        fees: '₹2,100',
        about: 'Xavier Aptitude Test (XAT) is a national-level management entrance examination conducted by XLRI on behalf of XAMI. The scores are used by more than 160 institutes for MBA/PGDM admission.',
        importantDates: [
            { event: 'Registration Window', date: 'August - November 2025' },
            { event: 'Admit Card', date: 'December 2025' },
            { event: 'Exam Date', date: 'January 2026' }
        ],
        syllabus: ['Decision Making', 'Verbal and Logical Ability', 'Quantitative Ability & Data Interpretation', 'General Knowledge']
    },
    {
        id: 11,
        name: 'AIIMS INI-CET 2026',
        category: 'medical',
        conductedBy: 'AIIMS, New Delhi',
        date: 'May / Nov 2026',
        level: 'National',
        eligibility: 'MBBS Degree',
        mode: 'Computer Based Test',
        registrations: '80K+',
        color: '#06B6D4',
        fees: '₹4,000',
        about: 'Institute of National Importance Combined Entrance Test (INI-CET) is for admission to postgraduate medical courses like MD, MS, DM (6 yrs), MCh (6 yrs), and MDS at AIIMS, JIPMER, PGIMER, and NIMHANS.',
        importantDates: [
            { event: 'Registration (July Session)', date: 'March 2026' },
            { event: 'Exam Date (July Session)', date: 'May 2026' }
        ],
        syllabus: ['Pre-Clinical: Anatomy, Physiology, Biochemistry', 'Para-Clinical: Pharmacology, Microbiology, Pathology', 'Clinical: Medicine, Surgery, Obstetrics']
    },
    {
        id: 12,
        name: 'LSAT India 2026',
        category: 'law',
        conductedBy: 'Law School Admission Council (LSAC)',
        date: 'June 2026',
        level: 'National',
        eligibility: 'Class 12 pass',
        mode: 'Online (Remote Proctored)',
        registrations: '40K+',
        color: '#D97706',
        fees: '₹3,999',
        about: 'LSAT India is a standardized test of reading and verbal reasoning skills designed by the USA-based Law School Admission Council (LSAC) for use by law schools in India.',
        importantDates: [
            { event: 'Registration Window', date: 'Nov 2025 - May 2026' },
            { event: 'Exam Date', date: 'May / June 2026' }
        ],
        syllabus: ['Analytical Reasoning', 'Logical Reasoning (1 & 2)', 'Reading Comprehension']
    },
    {
        id: 13,
        name: 'UCEED 2026',
        category: 'design',
        conductedBy: 'IIT Bombay',
        date: 'January 2026',
        level: 'National',
        eligibility: 'Class 12 (any stream)',
        mode: 'Computer Based Test',
        registrations: '25K+',
        color: '#059669',
        fees: '₹3,800',
        about: 'Undergraduate Common Entrance Examination for Design (UCEED) is conducted by IIT Bombay for admissions to the Bachelor of Design (B.Des) programs at IITs and IIITDM.',
        importantDates: [
            { event: 'Registration', date: 'October - November 2025' },
            { event: 'Admit Card', date: 'January 2026' },
            { event: 'Exam Date', date: 'January 2026' }
        ],
        syllabus: ['Visualization and Spatial Ability', 'Observation and Design Sensitivity', 'Environmental and Social Awareness', 'Analytical and Logical Reasoning']
    },
    {
        id: 14,
        name: 'CUET UG 2026',
        category: 'all',
        conductedBy: 'National Testing Agency (NTA)',
        date: 'May 2026',
        level: 'National',
        eligibility: 'Class 12 pass',
        mode: 'Computer Based Test',
        registrations: '15L+',
        color: '#8B5CF6',
        fees: '₹750 - ₹1,750',
        about: 'Common University Entrance Test (CUET) is a highly competitive all-India test for admission into various Undergraduate programs in Central Universities under the Ministry of Education.',
        importantDates: [
            { event: 'Registration Window', date: 'February - March 2026' },
            { event: 'Exam Date', date: 'May 2026' }
        ],
        syllabus: ['Section IA & IB: Languages', 'Section II: Domain-Specific Subjects', 'Section III: General Test (Aptitude, GK, Logic)']
    },
    {
        id: 15,
        name: 'GMAT 2026',
        category: 'study_abroad',
        conductedBy: 'GMAC',
        date: 'Year-Round',
        level: 'International',
        eligibility: 'Graduates/Professionals',
        mode: 'Computer Based Test',
        registrations: '2L+ (Global)',
        color: '#1E3A8A',
        fees: '$275',
        about: 'The Graduate Management Admission Test is a computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills for admission to a graduate management program globally.',
        importantDates: [
            { event: 'Registration', date: 'Available Year-Round' },
            { event: 'Score Validity', date: '5 Years' }
        ],
        syllabus: ['Quantitative Reasoning', 'Verbal Reasoning', 'Data Insights']
    },
    {
        id: 16,
        name: 'GRE General 2026',
        category: 'study_abroad',
        conductedBy: 'ETS',
        date: 'Year-Round',
        level: 'International',
        eligibility: 'Undergraduates/Graduates',
        mode: 'Computer Based Test',
        registrations: '3L+ (Global)',
        color: '#1E3A8A',
        fees: '$220',
        about: 'The Graduate Record Examinations is a standardized test that is an admissions requirement for many graduate schools in the United States and Canada and few in other countries.',
        importantDates: [
            { event: 'Registration', date: 'Available Year-Round' },
            { event: 'Score Validity', date: '5 Years' }
        ],
        syllabus: ['Analytical Writing', 'Verbal Reasoning', 'Quantitative Reasoning']
    },
    {
        id: 17,
        name: 'NDA & NA 2026',
        category: 'civil',
        conductedBy: 'UPSC',
        date: 'April / Sept 2026',
        level: 'National',
        eligibility: 'Class 12 pass (unmarried males/females)',
        mode: 'Pen & Paper',
        registrations: '6L+',
        color: '#DC2626',
        fees: '₹100',
        about: 'National Defence Academy and Naval Academy Examination is conducted by UPSC for admission to the Army, Navy and Air Force wings of the NDA and for the Indian Naval Academy Course.',
        importantDates: [
            { event: 'Notification (NDA I)', date: 'December 2025' },
            { event: 'Exam Date (NDA I)', date: 'April 2026' },
            { event: 'SSB Interview', date: 'July onwards' }
        ],
        syllabus: ['Paper I: Mathematics (12th level)', 'Paper II: General Ability Test (English & General Knowledge)']
    },
    {
        id: 18,
        name: 'IELTS 2026',
        category: 'study_abroad',
        conductedBy: 'IDP / British Council',
        date: 'Year-Round',
        level: 'International',
        eligibility: 'Anyone looking to study/work abroad',
        mode: 'Computer or Paper',
        registrations: '3M+ (Global)',
        color: '#1E3A8A',
        fees: '₹17,000',
        about: 'The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language (e.g., Australia, Canada, New Zealand, UK and USA).',
        importantDates: [
            { event: 'Registration', date: 'Flexible, up to 4 tests per month' },
            { event: 'Score Validity', date: '2 Years' }
        ],
        syllabus: ['Listening (4 sections, 40 items)', 'Reading (3 sections, 40 items)', 'Writing (2 tasks)', 'Speaking (Face-to-face interview)']
    }
];
