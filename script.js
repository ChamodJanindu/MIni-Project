// UCSC Module Data
const COURSE_DATA = {
  "CS": {
    "Year1": {
      "Semester1": [
        { "id": "SCS1301", "name": "Data Structures and Program Design in C", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS1302", "name": "Discrete Mathematics", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS1303", "name": "Introduction to Software Engineering", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS1304", "name": "Problem Solving Strategies and Computation Approaches", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS1305", "name": "Computer Systems", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS1306", "name": "Linear Algebra", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS1307", "name": "Probability and Statistics", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "ENH1301", "name": "Application Laboratory", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "ENH1302", "name": "Communication Skills", "lectureCredits": 3, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "SCS1208", "name": "Data Structures & Algorithms II", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1209", "name": "Object Oriented Programming", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1210", "name": "Software Engineering II", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1211", "name": "Mathematical Methods I", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1212", "name": "Foundations of Computer Science", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1213", "name": "Probability and Statistics", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS1214", "name": "Operating Systems I", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "ENH1202", "name": "Enhancement II", "lectureCredits": 2, "practicalCredits": 0 }
      ]
    },
    "Year2": {
      "Semester1": [
        { "id": "SCS2201", "name": "Data Structures and Algorithms III", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2202", "name": "Group Project I", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2203", "name": "Software Engineering III", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2204", "name": "Functional Programming", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2205", "name": "Computer Networks I", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2206", "name": "Mathematical Methods II", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2207", "name": "Programming Language Concepts", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2208", "name": "Rapid Application Development", "lectureCredits": 2, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "SCS2202", "name": "Group Project", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS2310", "name": "Applied Data Science", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS2311", "name": "Cryptography & Information Security", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS2312", "name": "Computational Models & Prog. Lang.", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS2313", "name": "Computer System Architecture", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS2314", "name": "Middleware Architecture", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "SCS2315", "name": "Electronics and Physical Computing", "lectureCredits": 3, "practicalCredits": 0 },
        { "id": "ENH2301", "name": "Enhancement", "lectureCredits": 3, "practicalCredits": 0 }
      ]
    },
    "Year3": {
      "Semester1": [
        { "id": "SCS3201", "name": "Machine Learning and Neural Computing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3202", "name": "Advanced Computer Architecture", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3203", "name": "Middleware Architecture", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3204", "name": "Management", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3205", "name": "Computer Graphics I", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3206", "name": "Graph Theory", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3207", "name": "Software Quality Assurance", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3209", "name": "Human Computer Interaction", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3211", "name": "Compiler Theory", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3214", "name": "Group Project II", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS3216", "name": "Research Methods", "lectureCredits": 2, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "SCS3215", "name": "Industrial Training", "lectureCredits": 0, "practicalCredits": 6 }
      ]
    },
    "Year4": {
      "Semester1": [
        { "id": "SCS4207", "name": "Image Processing & Computer Vision", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4208", "name": "Theory of Computation", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4210", "name": "Parallel Computing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4211", "name": "Research Seminar", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4212", "name": "Formal Methods and Software Verification", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4213", "name": "Digital Forensics", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4214", "name": "Natural Algorithms", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4215", "name": "Computational Biology", "lectureCredits": 2, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "SCS4217", "name": "Embedded Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4218", "name": "Operating Systems II", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4219", "name": "Distributed Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4221", "name": "Software Engineering IV", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4222", "name": "Logic Programming", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "SCS4226", "name": "Intelligent Systems", "lectureCredits": 2, "practicalCredits": 0 }
      ]
    }
  },
  "IS": {
    "Year1": {
      "Semester1": [
        { "id": "IS1201", "name": "Programming and Problem Solving", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1202", "name": "Computer Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1203", "name": "Foundations of Information Systems", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1204", "name": "Fundamentals of Software Engineering", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1205", "name": "Introduction to Management", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1206", "name": "Mathematics for Computing", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS1207", "name": "Internet and Web Technologies", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "EN1201", "name": "Communication Skills", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "EN1202", "name": "Application Laboratory", "lectureCredits": 2, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "IS1108", "name": "Financial Accounting", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1109", "name": "Programming for Web Application Dev", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1110", "name": "Database Management", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1111", "name": "Software Engineering", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1112", "name": "Probability and Statistics", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1113", "name": "Organizational Behavior and Society", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1114", "name": "Data Structures and Algorithms I", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS1115", "name": "Fundamentals of Economics", "lectureCredits": 1, "practicalCredits": 0 }
      ]
    },
    "Year2": {
      "Semester1": [
        { "id": "IS2101", "name": "Systems Analysis and Design", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2102", "name": "Group Project I", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2103", "name": "Digital Marketing", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2104", "name": "Rapid Application Development", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2105", "name": "Business Statistics", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2106", "name": "Business Process Management", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2107", "name": "Graphics and Visualization", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2114", "name": "Business Process Re-engineering", "lectureCredits": 1, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "IS2102", "name": "Group Project", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS2208", "name": "IS Management and Strategy", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2209", "name": "Data Management and Governance", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2210", "name": "UI/UX Design", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2211", "name": "Entrepreneurship", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "IS2212", "name": "Cloud Infrastructure and Applications", "lectureCredits": 2, "practicalCredits": 0 },
        { "id": "EN2201", "name": "Enhancement", "lectureCredits": 2, "practicalCredits": 0 }
      ]
    },
    "Year3": {
      "Semester1": [
        { "id": "IS3101", "name": "Database Management Systems II", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3102", "name": "Human Computer Interaction", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3103", "name": "Software Quality Assurance", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3104", "name": "Strategic Management", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3105", "name": "IT Procurement Management", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3106", "name": "Professional Practice", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3107", "name": "Operations Research", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3108", "name": "Middleware Architectures", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3109", "name": "System & Network Administration", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3110", "name": "Mobile Application Development", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3111", "name": "E-Learning and Instructional Design", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3112", "name": "Enterprise Resource Planning Systems", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3113", "name": "Group Project II", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3114", "name": "Enterprise Applications", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3117", "name": "Machine Learning and Neural Computing", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS3118", "name": "Research Methods", "lectureCredits": 1, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "IS3115", "name": "Industrial Training", "lectureCredits": 0, "practicalCredits": 6 }
      ]
    },
    "Year4": {
      "Semester1": [
        { "id": "IS4102", "name": "Advanced Database Systems", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4104", "name": "Research Seminar", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4105", "name": "Advanced Concepts in Software Design and Development", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4109", "name": "Cognitive Robotics", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4110", "name": "Parallel Computing", "lectureCredits": 1, "practicalCredits": 0 }
      ],
      "Semester2": [
        { "id": "IS4111", "name": "Computational Biology", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4112", "name": "Geographical Information Systems", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4113", "name": "Digital Forensics", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4114", "name": "IS Innovation", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4115", "name": "Enterprise Architecture", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4116", "name": "Business Intelligence Systems", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4117", "name": "Intelligent Systems", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4118", "name": "Embedded Systems", "lectureCredits": 1, "practicalCredits": 0 },
        { "id": "IS4119", "name": "Philosophy of Science", "lectureCredits": 1, "practicalCredits": 0 }
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
