// UCSC Module Data
const COURSE_DATA = {
    CS: {
        Year1: {
            Semester1: [
                { id: "SCS1301", name: "Data Structures and Program Design in C", lectureCredits: 3, practicalCredits: 1 },
                { id: "SCS1302", name: "Discrete Mathematics", lectureCredits: 2, practicalCredits: 0 },
                { id: "SCS1303", name: "Introduction to Software Engineering", lectureCredits: 2, practicalCredits: 0 },
                { id: "SCS1304", name: "Problem Solving Strategies and Computation Approaches", lectureCredits: 2, practicalCredits: 0 }
            ],
            Semester2: [
                { id: "SCS1305", name: "Object Oriented Programming", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS1306", name: "Computer Systems Fundamentals", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS1307", name: "Mathematics for Computing", lectureCredits: 2, practicalCredits: 0 },
                { id: "SCS1308", name: "Communication Skills", lectureCredits: 1, practicalCredits: 0 }
            ]
        },
        Year2: {
            Semester1: [
                { id: "SCS2301", name: "Algorithms and Data Structures", lectureCredits: 3, practicalCredits: 1 },
                { id: "SCS2302", name: "Database Management Systems", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS2303", name: "Operating Systems", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS2304", name: "Computer Networks", lectureCredits: 2, practicalCredits: 1 }
            ],
            Semester2: [
                { id: "SCS2305", name: "Software Engineering", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS2306", name: "Theory of Computation", lectureCredits: 2, practicalCredits: 0 },
                { id: "SCS2307", name: "Human Computer Interaction", lectureCredits: 2, practicalCredits: 0 },
                { id: "SCS2308", name: "Web Technologies", lectureCredits: 2, practicalCredits: 1 }
            ]
        },
        Year3: {
            Semester1: [
                { id: "SCS3301", name: "Artificial Intelligence", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS3302", name: "Machine Learning", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS3303", name: "Distributed Systems", lectureCredits: 2, practicalCredits: 0 }
            ],
            Semester2: [
                { id: "SCS3304", name: "Data Mining", lectureCredits: 2, practicalCredits: 1 },
                { id: "SCS3305", name: "Computer Security", lectureCredits: 2, practicalCredits: 0 }
            ]
        },
        Year4: {
            Semester1: [
                { id: "SCS4301", name: "Research Project I", lectureCredits: 1, practicalCredits: 3 }
            ],
            Semester2: [
                { id: "SCS4302", name: "Research Project II", lectureCredits: 1, practicalCredits: 3 }
            ]
        }
    },
    IS: {
        Year1: {
            Semester1: [
                { id: "IS1101", name: "Introduction to Information Systems", lectureCredits: 2, practicalCredits: 0 },
                { id: "IS1102", name: "Business Mathematics", lectureCredits: 2, practicalCredits: 0 },
                { id: "IS1103", name: "Programming for Information Systems", lectureCredits: 2, practicalCredits: 1 }
            ],
            Semester2: [
                { id: "IS1201", name: "Fundamentals of Information Systems", lectureCredits: 2, practicalCredits: 0 },
                { id: "IS1202", name: "Database Systems", lectureCredits: 2, practicalCredits: 1 },
                { id: "IS1203", name: "Web Technologies", lectureCredits: 2, practicalCredits: 1 }
            ]
        },
        Year2: {
            Semester1: [
                { id: "IS2101", name: "Systems Analysis and Design", lectureCredits: 2, practicalCredits: 0 },
                { id: "IS2102", name: "Enterprise Architecture", lectureCredits: 2, practicalCredits: 0 },
                { id: "IS2103", name: "Database Design", lectureCredits: 2, practicalCredits: 1 }
            ],
            Semester2: [
                { id: "IS2201", name: "Business Intelligence", lectureCredits: 2, practicalCredits: 0 },
                { id: "IS2202", name: "E-Commerce Systems", lectureCredits: 2, practicalCredits: 1 }
            ]
        },
        Year3: {
            Semester1: [
                { id: "IS3101", name: "Information Systems Strategy", lectureCredits: 2, practicalCredits: 0 }
            ],
            Semester2: [
                { id: "IS3201", name: "Information Systems Project", lectureCredits: 1, practicalCredits: 3 }
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
    dashboard: document.getElementById('dashboard-section')
};

const nav = document.getElementById('main-nav');
const setupForm = document.getElementById('setup-form');
const modulesContainer = document.getElementById('modules-container');

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
    nav.classList.toggle('hidden', sectionId !== 'dashboard');
}

function calculateTargets(module) {
    // 50 total hours per lecture credit
    const lectureHours = module.lectureCredits * 15;
    const selfHours = module.lectureCredits * 30;
    const otherHours = module.lectureCredits * 5;
    // 1000 hours per practical point
    const practicalHours = module.practicalCredits * 1000;

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
        
        const moduleCompleted = progress.lecture + (progress.self || 0) + (progress.other || 0) + (progress.practical || 0);
        totalCompleted += moduleCompleted;
        totalTarget += targets.total;

        const card = document.createElement('div');
        card.className = 'card module-card';
        card.innerHTML = `
            <h4>${module.id}: ${module.name}</h4>
            <span class="lp-badge">Credits - L: ${module.lectureCredits} P: ${module.practicalCredits}</span>
            
            ${renderProgressBar('Lectures', progress.lecture, targets.lecture, module.id, 'lecture')}
            ${renderProgressBar('Self Study', progress.self, targets.self, module.id, 'self')}
            ${renderProgressBar('Other', progress.other, targets.other, module.id, 'other')}
            ${targets.practical > 0 ? renderProgressBar('Practical', progress.practical, targets.practical, module.id, 'practical') : ''}
            
            <div class="module-footer">
                <small>${moduleCompleted} / ${targets.total} hrs (${Math.round((moduleCompleted / targets.total) * 100)}%)</small>
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
