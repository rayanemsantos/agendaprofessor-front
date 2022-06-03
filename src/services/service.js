import api from './api';

/* Login e Cadastro */
export function login(email, password) {
	return api.post(`/auth/`, {
		email: email,
		password: password,
	});
}
export function signup(data) {
	return api.post(`/professor/`, data);
}

/* Alunos */
export function fetchStudents() {
	return api.get(`/student/`);
}
export function fetchStudent(id) {
	return api.get(`/student/${id}`);
}
export function newStudent(data) {
	return api.post(`/student/`, data);
}
export function editStudent(id, data) {
	return api.put(`/student/${id}/`, data);
}

/* Turmas */
export function fetchTurmas() {
	return api.get(`/school_class/`);
}
export function newTurmas(data) {
	return api.post(`/school_class/`, data);
}
export function editTurmas(id, data) {
	return api.put(`/school_class/${id}/`, data);
}

/* Professores */
export function fetchProfessores() {
	return api.get(`/teacher/`);
}
export function fetchProfessor(id) {
	return api.get(`/teacher/${id}`);
}
export function newProfessor(data) {
	return api.post(`/user/teacher/registration/`, data);
}
export function editProfessor(id, data) {
	return api.put(`/teacher/${id}/`, data);
}

/* Eventos */
export function fetchEvents(data) {
	return api.get(`/calendario`, data);
}
export function newCalendarItem(data) {
	return api.post(`/calendario`, data);
}

/* Atividades */
export function fetchAtividades(user) {
	return api.get(`/atividade/`);
}
export function newAtividade(data) {
	return api.post(`/atividade`, data);
}

/* Dashboard */
export function fetchDashboard() {
	return api.get(`/general/dashboard_infos`);
}