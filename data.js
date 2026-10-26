// Shared real data (faculty + teacher timetables) – edit here only
const FIREBASE_CONFIG = { apiKey: "AIzaSyDpot5YRJpW1l6qGWtNl5YE0nhDUENVdzQ", authDomain: "college-portal-695c0.firebaseapp.com", databaseURL: "https://college-portal-695c0-default-rtdb.firebaseio.com", projectId: "college-portal-695c0", storageBucket: "college-portal-695c0.firebasestorage.app", messagingSenderId: "557644866574", appId: "1:557644866574:web:b6bad6548c60128ffe085f" };
const FACULTY = [["Prof. Sadia", "Urdu Department", "DAEBCF"], ["Prof. Fazeeela", "Physics Department", "BDFCAE"], ["Prof. Bushra", "English Department", "CFAEBD"], ["Prof. Isra", "Mathematics Department", "EBDAFC"], ["Prof. Rabia", "Islamiat Department", "FCBFDA"], ["Prof. Beenish", "Computer Science", "AECDFB"]];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const PERIODS = [["1st Period", "08:40 - 09:20"], ["2nd Period", "09:20 - 10:00"], ["3rd Period", "10:00 - 10:40"], ["4th Period", "11:00 - 11:40"], ["5th Period", "11:00 - 11:30"], ["6th Period", "12:20 - 01:00"]];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const isAdmin = new URLSearchParams(location.search).get('maryam') === 'imran';
if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();
// theme (shared)
document.documentElement.dataset.theme = localStorage.getItem('theme') || 'dark';