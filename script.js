// UCSC Module Data
const COURSE_DATA = {
  "CS": {
    "Year1": {
      "Semester1": [
        { "id": "SCS1301", "name": "Data Structures and Program Design in C", "lectureCredits": 3, "practicalCredits": 1 },
        { "id": "SCS1302", "name": "Discrete Mathematics", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1303", "name": "Introduction to Software Engineering", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1304", "name": "Problem Solving Strategies and Computation Approaches", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1305", "name": "Computer Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1306", "name": "Linear Algebra", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1307", "name": "Probability and Statistics", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "ENH1301", "name": "Application Laboratory", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true },
        { "id": "ENH1302", "name": "Communication Skills", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true }
      ],
      "Semester2": [
        { "id": "SCS1308", "name": "Foundations of Algorithms", "lectureCredits": 3, "practicalCredits": 1 },
        { "id": "SCS1309", "name": "Database Management Systems", "lectureCredits": 3, "practicalCredits": 1 },
        { "id": "SCS1310", "name": "Object Oriented Modelling and Programming", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS1311", "name": "Internet and Web Technologies", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS1312", "name": "Operating System Concepts", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "ENH1303", "name": "Aesthetic Studies", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true }
      ]
    },
    "Year2": {
      "Semester1": [
        { "id": "SCS2301", "name": "Group Project+", "lectureCredits": 0, "practicalCredits": 4 },
        { "id": "SCS2302", "name": "Calculus", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2303", "name": "Software Architectures", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2304", "name": "Advanced Algorithms", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS2306", "name": "Computer Networks", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS2307", "name": "Information Technology Project Management", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2308", "name": "Numerical Methods", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2309", "name": "Statistical Inference", "lectureCredits": 2, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "SCS2310", "name": "Digital Signal Processing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2311", "name": "Cryptography and Information Security", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2312", "name": "Computational Models and Programming Language Concepts", "lectureCredits": 4, "practicalCredits": 0 },
        { "id": "SCS2313", "name": "Computer System Architecture", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2314", "name": "Middleware Architecture", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2315", "name": "Electronics and Physical Computing", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "ENH2301", "name": "Entrepreneurship", "lectureCredits": 2, "practicalCredits": 0, "nonGPA": true }
      ]
    },
    "Year3": {
      "Semester1": [
        { "id": "SCS3301", "name": "Industry Project+", "lectureCredits": 0, "practicalCredits": 4 },
        { "id": "SCS3302", "name": "Computer Graphics and Image Processing", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3303", "name": "Compiler Theory and Construction", "lectureCredits": 3, "practicalCredits": 1 },
        { "id": "SCS3304", "name": "Intelligent Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3305", "name": "Robotics and Cognitive Systems", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3306", "name": "Digital Forensics", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3307", "name": "Data Warehousing and Mining", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3308", "name": "Machine Learning", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3309", "name": "Human Computer Interaction", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3310", "name": "System and Network Administration", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3311", "name": "Mobile Application Designing and Development", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3312", "name": "Research Methods", "lectureCredits": 2, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "SCS3313", "name": "Applied Machine Learning", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3314", "name": "Database Programming", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3315", "name": "Literature Review", "lectureCredits": 0, "practicalCredits": 2 },
        { "id": "SCS3316", "name": "Software Quality Assurance", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS3317", "name": "Professional Practice and Behavior", "lectureCredits": 0, "practicalCredits": 1 },
        { "id": "ENH3301", "name": "Industry Placement", "lectureCredits": 0, "practicalCredits": 8, "nonGPA": true },
        { "id": "ENH3302", "name": "Business communication and Soft Skills", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true }
      ]
    },
    "Year4": {
      "Semester1": [
        { "id": "SCS4301", "name": "Advanced Operating Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4302", "name": "Advanced Computer Networks", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4303", "name": "Computer Vision and Deep Learning", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS4304", "name": "Natural Language Processing", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS4305", "name": "Research Seminar", "lectureCredits": 0, "practicalCredits": 2 },
        { "id": "SCS4306", "name": "Formal Methods and Software Verification", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4307", "name": "Computational Biology", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4308", "name": "Distributed Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4309", "name": "Final Year Project in Software Engineering+", "lectureCredits": 0, "practicalCredits": 8 },
        { "id": "SCS4310", "name": "Final Year Project in Computer Science+", "lectureCredits": 0, "practicalCredits": 8 },
        { "id": "SCS4311", "name": "Philosophy of Science", "lectureCredits": 0, "practicalCredits": 1 },
        { "id": "SCS4312", "name": "Advanced Database Systems", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS4313", "name": "Advanced Software Engineering", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4314", "name": "Software Quality and Security Assurance", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4315", "name": "Embedded Systems", "lectureCredits": 2, "practicalCredits": 1 }
      ],
      "Semester2": [
        { "id": "SCS4316", "name": "Analog, Quantum, and Alternative Computing Models", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4317", "name": "Game Theory", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4318", "name": "Advanced Computer Graphics", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS4319", "name": "Enterprise Architectures", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4320", "name": "Secure Software Engineering", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4321", "name": "Network Security", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "SCS4322", "name": "Parallel Computing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4323", "name": "Natural Algorithms", "lectureCredits": 2, "practicalCredits": 0 }
      ]
    }
  },
  "IS": {
    "Year1": {
      "Semester1": [
        { "id": "IS1201", "name": "Programming and Problem Solving", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS1202", "name": "Computer Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1203", "name": "Foundations of Information Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1204", "name": "Fundamentals of Software Engineering", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1205", "name": "Introduction to Management", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1206", "name": "Mathematics for Computing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1207", "name": "Internet and Web Technologies", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "EN1201", "name": "Communication Skills", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true },
        { "id": "EN1202", "name": "Application Laboratory", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true }
      ],
      "Semester2": [
        { "id": "IS1208", "name": "Systems Analysis and Design", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1209", "name": "Information Technology Project Management", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1210", "name": "Database Systems", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS1211", "name": "Computer Networks", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS1212", "name": "Probability and Statistics", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS1213", "name": "Organizational Behavior", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1214", "name": "Data Structures and Algorithms", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "EN1203", "name": "Aesthetic Studies", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true }
      ]
    },
    "Year2": {
      "Semester1": [
        { "id": "IS2201", "name": "Group Project+", "lectureCredits": 0, "practicalCredits": 4 },
        { "id": "IS2202", "name": "Advanced Data Structures and Algorithms", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2203", "name": "Object Oriented Programming", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS2204", "name": "Information Systems Security", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2205", "name": "Mobile Application Design and Development", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS2206", "name": "Business Process Management", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS2207", "name": "Electronics and Physical Computing", "lectureCredits": 2, "practicalCredits": 1 }
      ],
      "Semester2": [
        { "id": "IS2208", "name": "Information Systems Management and Strategy", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2209", "name": "Data Management and Governance", "lectureCredits": 3, "practicalCredits": 1 },
        { "id": "IS2210", "name": "Applied Data Science", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS2211", "name": "UI/UX Design", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS2212", "name": "Cloud Infrastructure and Applications", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "EN2201", "name": "Entrepreneurship", "lectureCredits": 2, "practicalCredits": 0, "nonGPA": true }
      ]
    },
    "Year3": {
      "Semester1": [
        { "id": "IS3201", "name": "Industry Project+", "lectureCredits": 0, "practicalCredits": 4 },
        { "id": "IS3202", "name": "Research Methods", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3203", "name": "Cybercrime, Privacy, and Legislation", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3204", "name": "Enterprise Resource Planning Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3205", "name": "Data Visualization", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS3206", "name": "Enterprise Architecture", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3207", "name": "E-Business and Digital Marketing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3208", "name": "Middleware Architecture", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS3209", "name": "Systems and Network Administration", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS3210", "name": "Digital Innovation", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3211", "name": "Operations Research", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3212", "name": "Robotics and Cognitive Systems", "lectureCredits": 2, "practicalCredits": 1 }
      ],
      "Semester2": [
        { "id": "IS3213", "name": "Literature Survey", "lectureCredits": 0, "practicalCredits": 2 },
        { "id": "IS3214", "name": "Professional Practice and Behavior", "lectureCredits": 0, "practicalCredits": 1 },
        { "id": "IS3215", "name": "Software Quality Assurance", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS3216", "name": "Applied Machine Learning", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS3217", "name": "Social Impact of Information Systems and Ethics", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3218", "name": "E-Learning Concepts and Technologies", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS3219", "name": "Information Technology Audit", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3220", "name": "Interactive Media Design", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS3221", "name": "Contemporary Topics in Software Development", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "EN3201", "name": "Industrial Placement", "lectureCredits": 0, "practicalCredits": 8, "nonGPA": true },
        { "id": "EN3202", "name": "Business Communication and Soft Skills", "lectureCredits": 0, "practicalCredits": 1, "nonGPA": true }
      ]
    },
    "Year4": {
      "Semester1": [
        { "id": "IS4201", "name": "Final Year Project in Information Systems+", "lectureCredits": 0, "practicalCredits": 8 },
        { "id": "IS4202", "name": "Research Seminar+", "lectureCredits": 0, "practicalCredits": 2 },
        { "id": "IS4203", "name": "Data Analytics", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS4204", "name": "Software Quality Assurance", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS4205", "name": "Machine Learning", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS4206", "name": "Advanced Concepts in Software Design and Development", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS4207", "name": "Geographical Information Systems", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS4208", "name": "Natural Language Processing", "lectureCredits": 2, "practicalCredits": 1 }
      ],
      "Semester2": [
        { "id": "IS4209", "name": "Business Intelligence Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS4210", "name": "Philosophy of Science and Computational Thinking", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4211", "name": "Contemporary Topics in Information Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS4212", "name": "Affective Computing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS4213", "name": "Digital Forensics", "lectureCredits": 2, "practicalCredits": 1 },
        { "id": "IS4214", "name": "Bio-Informatics", "lectureCredits": 2, "practicalCredits": 0 }
      ]
    }
  }
};

// Application State
let appState = {
    course: null,
    year: null,
    semester: null,
    progress: {} // { moduleId: { lecture: 0, self: 0, other: 0, practical: 0 } }
};

// DOM Elements
const sections = {
    landing: document.getElementById('landing-section'),
    setup: document.getElementById('setup-section'),
    dashboard: document.getElementById('dashboard-section'),
    curriculum: document.getElementById('curriculum-section')
};

const nav = document.getElementById('main-nav');
const setupForm = document.getElementById('setup-form');
const modulesContainer = document.getElementById('modules-container');
const curriculumDisplay = document.getElementById('curriculum-display');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initEventListeners();
    
    if (appState.course && appState.year && appState.semester) {
        showSection('dashboard');
        renderDashboard();
    } else {
        showSection('landing');
    }
});

function initEventListeners() {
    document.getElementById('start-planning-btn').addEventListener('click', () => {
        showSection('setup');
    });

    document.getElementById('landing-curriculum-btn').addEventListener('click', () => {
        showSection('curriculum');
        renderCurriculum('CS');
    });

    document.getElementById('view-curriculum-btn').addEventListener('click', () => {
        showSection('curriculum');
        renderCurriculum(appState.course || 'CS');
    });

    document.getElementById('back-to-landing-btn').addEventListener('click', () => {
        if (appState.course && appState.year && appState.semester) {
            showSection('dashboard');
        } else {
            showSection('landing');
        }
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderCurriculum(e.target.dataset.course);
        });
    });

    setupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const course = document.getElementById('course-select').value;
        const year = document.getElementById('year-select').value;
        const semester = document.getElementById('semester-select').value;

        if (!COURSE_DATA[course] || !COURSE_DATA[course][year] || !COURSE_DATA[course][year][semester]) {
            alert('Module data for this selection is not available.');
            return;
        }

        appState.course = course;
        appState.year = year;
        appState.semester = semester;
        
        const modules = COURSE_DATA[course][year][semester];
        modules.forEach(m => {
            if (!appState.progress[m.id]) {
                appState.progress[m.id] = { lecture: 0, self: 0, other: 0, practical: 0 };
            }
        });

        saveProgress();
        renderDashboard();
        showSection('dashboard');
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('Switch semesters? Current progress is saved.')) {
            showSection('setup');
        }
    });
}

function showSection(sectionId) {
    Object.keys(sections).forEach(key => {
        sections[key].classList.remove('active');
    });
    sections[sectionId].classList.add('active');
    
    // Header nav visibility
    if (sectionId === 'dashboard') {
        nav.classList.remove('hidden');
    } else if (sectionId === 'curriculum') {
        nav.classList.remove('hidden');
        document.getElementById('reset-btn').style.display = appState.course ? 'inline-block' : 'none';
    } else {
        nav.classList.add('hidden');
    }
}

function calculateTargets(module) {
    // 50 total hours per lecture credit
    const lectureHours = module.lectureCredits * 15;
    const selfHours = module.lectureCredits * 30;
    const otherHours = module.lectureCredits * 5;
    // 45 hours per practical credit (approx. 3 hours per week for 15 weeks)
    const practicalHours = module.practicalCredits * 45;

    return {
        total: lectureHours + selfHours + otherHours + practicalHours,
        lecture: lectureHours,
        self: selfHours,
        other: otherHours,
        practical: practicalHours
    };
}

function renderDashboard() {
    const { course, year, semester } = appState;
    const modules = COURSE_DATA[course][year][semester];
    modulesContainer.innerHTML = '';
    
    let totalCompleted = 0;
    let totalTarget = 0;

    modules.forEach(module => {
        const targets = calculateTargets(module);
        if (!appState.progress[module.id]) appState.progress[module.id] = { lecture: 0, self: 0, other: 0, practical: 0 };
        const progress = appState.progress[module.id];
        
        const moduleCompleted = (progress.lecture || 0) + (progress.self || 0) + (progress.other || 0) + (progress.practical || 0);
        totalCompleted += moduleCompleted;
        totalTarget += targets.total;

        const card = document.createElement('div');
        card.className = 'card module-card';
        card.innerHTML = `
            <h4>${module.id}: ${module.name}</h4>
            <span class="lp-badge">Credits - L: ${module.lectureCredits} P: ${module.practicalCredits}</span>
            
            ${targets.lecture > 0 ? renderProgressBar('Lectures', progress.lecture, targets.lecture, module.id, 'lecture') : ''}
            ${targets.lecture > 0 ? renderProgressBar('Self Study', progress.self, targets.self, module.id, 'self') : ''}
            ${targets.lecture > 0 ? renderProgressBar('Other', progress.other, targets.other, module.id, 'other') : ''}
            ${targets.practical > 0 ? renderProgressBar('Practical', progress.practical, targets.practical, module.id, 'practical') : ''}
            
            <div class="module-footer">
                <small>${moduleCompleted} / ${targets.total} hrs (${targets.total > 0 ? Math.round((moduleCompleted / targets.total) * 100) : 0}%)</small>
            </div>
        `;
        modulesContainer.appendChild(card);
    });

    updateOverallProgress(totalCompleted, totalTarget);
}

function renderProgressBar(label, current, target, moduleId, type) {
    if (target === 0) return '';
    const percent = Math.min(Math.round((current / target) * 100), 100);
    return `
        <div class="progress-group">
            <div class="progress-header"><span>${label}</span><span>${current}/${target}h</span></div>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${percent}%"></div></div>
            <div class="controls">
                <button class="btn btn-small btn-primary" onclick="updateHour('${moduleId}', '${type}', 1)">+1</button>
                <button class="btn btn-small btn-outline" style="color:#333;border-color:#ccc" onclick="updateHour('${moduleId}', '${type}', -1)">-1</button>
            </div>
        </div>
    `;
}

function renderCurriculum(course) {
    curriculumDisplay.innerHTML = '';
    const data = COURSE_DATA[course];
    
    Object.keys(data).forEach(year => {
        const yearDiv = document.createElement('div');
        yearDiv.className = 'curriculum-year';
        yearDiv.innerHTML = `<h4>${year.replace('Year', 'Year ')}</h4>`;
        
        Object.keys(data[year]).forEach(semester => {
            const semDiv = document.createElement('div');
            semDiv.className = 'curriculum-semester';
            semDiv.innerHTML = `<h5>${semester.replace('Semester', 'Semester ')}</h5>`;
            
            const table = document.createElement('table');
            table.className = 'curriculum-table';
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>L</th>
                        <th>P</th>
                    </tr>
                </thead>
                <tbody>
                    ${data[year][semester].map(m => `
                        <tr>
                            <td>${m.id}</td>
                            <td>${m.name}</td>
                            <td>${m.lectureCredits}</td>
                            <td>${m.practicalCredits}</td>
                        </tr>
                    `).join('')}
                </tbody>
            `;
            semDiv.appendChild(table);
            yearDiv.appendChild(semDiv);
        });
        curriculumDisplay.appendChild(yearDiv);
    });
}

window.updateHour = function(moduleId, type, delta) {
    if (!appState.progress[moduleId]) appState.progress[moduleId] = { lecture: 0, self: 0, other: 0, practical: 0 };
    const newValue = (appState.progress[moduleId][type] || 0) + delta;
    if (newValue >= 0) {
        appState.progress[moduleId][type] = newValue;
        saveProgress();
        renderDashboard();
    }
};

function updateOverallProgress(completed, target) {
    const percent = target > 0 ? Math.round((completed / target) * 100) : 0;
    document.getElementById('total-hours-completed').textContent = completed;
    document.getElementById('total-target-hours').textContent = target;
    document.getElementById('total-hours-remaining').textContent = Math.max(target - completed, 0);
    document.getElementById('overall-progress-bar').style.width = `${Math.min(percent, 100)}%`;
    document.getElementById('overall-progress-percent').textContent = `${percent}%`;
}

function saveProgress() { localStorage.setItem('ucsc_study_tracker_data', JSON.stringify(appState)); }
function loadProgress() {
    const saved = localStorage.getItem('ucsc_study_tracker_data');
    if (saved) try { appState = JSON.parse(saved); } catch (e) {}
}
