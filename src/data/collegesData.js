export const collegeCategories = [
    { id: 'all', label: 'All Streams' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'medical', label: 'Medical / MBBS' },
    { id: 'management', label: 'MBA / Management' },
    { id: 'law', label: 'Law' },
    { id: 'design', label: 'Design & Arts' },
    { id: 'computer', label: 'Computer Science' },
    { id: 'arts', label: 'Arts & Humanities' },
    { id: 'commerce', label: 'Commerce & Finance' }
];

export const states = [
    'All States', 'Delhi NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana', 'West Bengal', 'Rajasthan', 'Gujarat', 'Jharkhand'
];

export const citiesByState = {
    'Delhi NCR': ['New Delhi', 'Sonipat'],
    'Maharashtra': ['Pune', 'Mumbai'],
    'Karnataka': ['Bangalore', 'Manipal'],
    'Tamil Nadu': ['Chennai', 'Vellore', 'Tiruchirappalli', 'Puducherry'],
    'Telangana': ['Hyderabad'],
    'West Bengal': ['Kolkata'],
    'Rajasthan': ['Pilani'],
    'Gujarat': ['Ahmedabad'],
    'Jharkhand': ['Jamshedpur']
};

export const feeRanges = [
    { id: 'all', label: 'Any Fee' },
    { id: 'under_2l', label: 'Under ₹2 Lakhs' },
    { id: '2l_5l', label: '₹2L - ₹5 Lakhs' },
    { id: 'above_5l', label: 'Above ₹5 Lakhs' }
];

export const collegesData = [
    // ENGINEERING
    {
        id: 1, name: "Indian Institute of Technology (IIT), Delhi", location: "New Delhi, Delhi NCR", state: "Delhi NCR",
        rating: 4.9, type: "Public", courses: 45, stream: "engineering", feeCategory: "2l_5l", fee: "2.5 Lacs/yr",
        tags: ["B.Tech", "M.Tech", "Ph.D"], expectedCutoff: "Top 0.5% JEE"
    },
    {
        id: 2, name: "Birla Institute of Technology and Science (BITS)", location: "Pilani, Rajasthan", state: "Rajasthan",
        rating: 4.8, type: "Private", courses: 38, stream: "engineering", feeCategory: "above_5l", fee: "5.5 Lacs/yr",
        tags: ["B.E.", "M.E.", "MBA"], expectedCutoff: "BITSAT 320+"
    },
    {
        id: 3, name: "Vellore Institute of Technology (VIT)", location: "Vellore, Tamil Nadu", state: "Tamil Nadu",
        rating: 4.6, type: "Private", courses: 62, stream: "engineering", feeCategory: "2l_5l", fee: "3.2 Lacs/yr",
        tags: ["B.Tech", "B.Sc", "MBA"], expectedCutoff: "VITEEE Rank < 10k"
    },
    {
        id: 4, name: "National Institute of Technology (NIT)", location: "Tiruchirappalli, Tamil Nadu", state: "Tamil Nadu",
        rating: 4.8, type: "Public", courses: 32, stream: "engineering", feeCategory: "under_2l", fee: "1.8 Lacs/yr",
        tags: ["B.Tech", "M.Tech", "MCA"], expectedCutoff: "JEE Mains 99%ile"
    },
    {
        id: 5, name: "SRM Institute of Science and Technology", location: "Chennai, Tamil Nadu", state: "Tamil Nadu",
        rating: 4.4, type: "Private", courses: 55, stream: "engineering", feeCategory: "2l_5l", fee: "4.0 Lacs/yr",
        tags: ["B.Tech", "BBA", "B.Com"], expectedCutoff: "SRMJEEE Rank < 15k"
    },
    {
        id: 6, name: "Manipal Institute of Technology", location: "Manipal, Karnataka", state: "Karnataka",
        rating: 4.5, type: "Private", courses: 48, stream: "engineering", feeCategory: "2l_5l", fee: "4.5 Lacs/yr",
        tags: ["B.Tech", "M.Tech", "MCA"], expectedCutoff: "MET Score 120+"
    },
    {
        id: 7, name: "IIIT Hyderabad", location: "Hyderabad, Telangana", state: "Telangana",
        rating: 4.9, type: "Public-Private", courses: 20, stream: "engineering", feeCategory: "2l_5l", fee: "3.6 Lacs/yr",
        tags: ["B.Tech CS", "Dual Degree", "M.Tech"], expectedCutoff: "JEE Mains 99.5%ile"
    },
    {
        id: 8, name: "College of Engineering, Pune (COEP)", location: "Pune, Maharashtra", state: "Maharashtra",
        rating: 4.6, type: "Public", courses: 25, stream: "engineering", feeCategory: "under_2l", fee: "1.2 Lacs/yr",
        tags: ["B.Tech", "M.Tech", "Ph.D"], expectedCutoff: "MHT-CET 98%ile"
    },

    // MANAGEMENT
    {
        id: 101, name: "Indian Institute of Management (IIM), Ahmedabad", location: "Ahmedabad, Gujarat", state: "All States",
        rating: 4.9, type: "Public", courses: 15, stream: "management", feeCategory: "above_5l", fee: "12.5 Lacs/yr",
        tags: ["MBA", "Exec MBA", "Ph.D"], expectedCutoff: "CAT 99.5%ile"
    },
    {
        id: 102, name: "Indian School of Business (ISB)", location: "Hyderabad, Telangana", state: "Telangana",
        rating: 4.8, type: "Private", courses: 10, stream: "management", feeCategory: "above_5l", fee: "35 Lacs/total",
        tags: ["PGP", "MBA Exec", "FPM"], expectedCutoff: "GMAT 700+"
    },
    {
        id: 103, name: "XLRI Xavier School of Management", location: "Jamshedpur, Jharkhand", state: "All States",
        rating: 4.8, type: "Private", courses: 12, stream: "management", feeCategory: "above_5l", fee: "14 Lacs/yr",
        tags: ["PGDM", "Exec PGDM", "HRM"], expectedCutoff: "XAT 95%ile+"
    },
    {
        id: 104, name: "SPJIMR", location: "Mumbai, Maharashtra", state: "Maharashtra",
        rating: 4.7, type: "Private", courses: 14, stream: "management", feeCategory: "above_5l", fee: "10 Lacs/yr",
        tags: ["PGDM", "MBA", "FPM"], expectedCutoff: "CAT 95%ile+"
    },
    {
        id: 105, name: "Faculty of Management Studies (FMS)", location: "New Delhi, Delhi NCR", state: "Delhi NCR",
        rating: 4.8, type: "Public", courses: 8, stream: "management", feeCategory: "under_2l", fee: "1.5 Lacs/yr",
        tags: ["MBA", "Exec MBA", "Ph.D"], expectedCutoff: "CAT 98%ile+"
    },

    // MEDICAL
    {
        id: 201, name: "All India Institute of Medical Sciences (AIIMS)", location: "New Delhi, Delhi NCR", state: "Delhi NCR",
        rating: 5.0, type: "Public", courses: 30, stream: "medical", feeCategory: "under_2l", fee: "0.2 Lacs/yr",
        tags: ["MBBS", "MD", "MS"], expectedCutoff: "NEET Top 50 Rank"
    },
    {
        id: 202, name: "Christian Medical College (CMC)", location: "Vellore, Tamil Nadu", state: "Tamil Nadu",
        rating: 4.8, type: "Private", courses: 40, stream: "medical", feeCategory: "under_2l", fee: "1.5 Lacs/yr",
        tags: ["MBBS", "B.Sc Nursing", "MD"], expectedCutoff: "NEET 650+"
    },
    {
        id: 203, name: "Armed Forces Medical College (AFMC)", location: "Pune, Maharashtra", state: "Maharashtra",
        rating: 4.8, type: "Public", courses: 15, stream: "medical", feeCategory: "under_2l", fee: "None (Service bond)",
        tags: ["MBBS", "Nursing", "Postgrad"], expectedCutoff: "NEET + Interview"
    },
    {
        id: 204, name: "Kasturba Medical College (KMC)", location: "Manipal, Karnataka", state: "Karnataka",
        rating: 4.6, type: "Private", courses: 25, stream: "medical", feeCategory: "above_5l", fee: "17.0 Lacs/yr",
        tags: ["MBBS", "MD/MS", "Fellowships"], expectedCutoff: "NEET 550+"
    },
    {
        id: 205, name: "JIPMER", location: "Puducherry", state: "Tamil Nadu",
        rating: 4.8, type: "Public", courses: 35, stream: "medical", feeCategory: "under_2l", fee: "0.5 Lacs/yr",
        tags: ["MBBS", "B.Sc Allied", "MD/MS"], expectedCutoff: "NEET 680+"
    },

    // ARTS & HUMANITIES
    {
        id: 301, name: "Stephen's College, Delhi University", location: "New Delhi, Delhi NCR", state: "Delhi NCR",
        rating: 4.8, type: "Public", courses: 20, stream: "arts", feeCategory: "under_2l", fee: "0.4 Lacs/yr",
        tags: ["B.A. Hons", "B.Sc Hons", "M.A."], expectedCutoff: "CUET High Score + Interview"
    },
    {
        id: 302, name: "Hindu College", location: "New Delhi, Delhi NCR", state: "Delhi NCR",
        rating: 4.7, type: "Public", courses: 18, stream: "arts", feeCategory: "under_2l", fee: "0.3 Lacs/yr",
        tags: ["B.A. Hons", "B.Com Hons", "B.Sc"], expectedCutoff: "CUET High Score"
    },
    {
        id: 303, name: "Loyola College", location: "Chennai, Tamil Nadu", state: "Tamil Nadu",
        rating: 4.6, type: "Autonomous", courses: 40, stream: "arts", feeCategory: "under_2l", fee: "0.5 Lacs/yr",
        tags: ["B.A.", "B.Sc", "BBA", "B.Com"], expectedCutoff: "Merit Based / Entrance"
    },
    {
        id: 304, name: "Christ University", location: "Bangalore, Karnataka", state: "Karnataka",
        rating: 4.5, type: "Private", courses: 60, stream: "arts", feeCategory: "2l_5l", fee: "2.5 Lacs/yr",
        tags: ["B.A. Media", "Psychology", "B.Com"], expectedCutoff: "CU Entrance Test"
    },
    {
        id: 305, name: "Fergusson College", location: "Pune, Maharashtra", state: "Maharashtra",
        rating: 4.5, type: "Autonomous", courses: 35, stream: "arts", feeCategory: "under_2l", fee: "0.2 Lacs/yr",
        tags: ["B.A.", "B.Sc", "M.A."], expectedCutoff: "Merit Based (Class 12 Marks)"
    },

    // LAW
    {
        id: 401, name: "National Law School of India University (NLSIU)", location: "Bangalore, Karnataka", state: "Karnataka",
        rating: 4.9, type: "Public", courses: 10, stream: "law", feeCategory: "2l_5l", fee: "3.2 Lacs/yr",
        tags: ["BA LLB (Hons)", "LLM", "Ph.D"], expectedCutoff: "CLAT Top 100 Rank"
    },
    {
        id: 402, name: "National Law University (NLU), Delhi", location: "New Delhi, Delhi NCR", state: "Delhi NCR",
        rating: 4.8, type: "Public", courses: 8, stream: "law", feeCategory: "2l_5l", fee: "2.8 Lacs/yr",
        tags: ["BA LLB (Hons)", "LLM", "Ph.D"], expectedCutoff: "AILET Top Rank"
    },
    {
        id: 403, name: "Symbiosis Law School", location: "Pune, Maharashtra", state: "Maharashtra",
        rating: 4.6, type: "Private", courses: 12, stream: "law", feeCategory: "2l_5l", fee: "4.0 Lacs/yr",
        tags: ["BA LLB", "BBA LLB", "LLM"], expectedCutoff: "SLAT Score"
    },
    {
        id: 404, name: "NALSAR University of Law", location: "Hyderabad, Telangana", state: "Telangana",
        rating: 4.8, type: "Public", courses: 12, stream: "law", feeCategory: "2l_5l", fee: "2.5 Lacs/yr",
        tags: ["BA LLB (Hons)", "MBA", "LLM"], expectedCutoff: "CLAT Upper Marks"
    },
    {
        id: 405, name: "Jindal Global Law School", location: "Sonipat, Delhi NCR", state: "Delhi NCR",
        rating: 4.7, type: "Private", courses: 15, stream: "law", feeCategory: "above_5l", fee: "6.5 Lacs/yr",
        tags: ["BA LLB", "BBA LLB", "LLM"], expectedCutoff: "LSAT India Score"
    }
];
