import axios from 'axios';


export const instance = axios.create({
    baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
    headers : {
        "Authorization": 'JWT ' + sessionStorage.getItem('token')
    }
    
});



export const usersAPI = {
    signUp(username, email, password) {
        return instance.post(`/users/create/`, {username, email, password})
    },
    login(username, password) {
        return instance.post(`/users/login/`, {username, password})
    }
};


export const cardsAPI = {
  getCards() {
    return instance.get('cards/')
  },
  createTask(row, text) {
    return instance.post('cards/', {row, text})
  },
  deleteTask(id) {
    return instance.delete(`cards/${id}/`)
  },
  updateTask(id, row, seq_num, text) {
    return instance.patch(`cards/${id}`, {row, seq_num, text})
  }
};
