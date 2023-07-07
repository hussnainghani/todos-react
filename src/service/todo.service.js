import api from './api';

const apiList = {
    createTodoTask: async (data) => {
        try {
            const res = await api.post('/todo/create-task', data);
            return res.data;
        } catch (error) {
            return error.message;
        }
    },
    getTodoTask: async (data) => {
        try {
            const res = await api.get('/todo/get-all-task', {
                params: data,
            });
            return res.data;
        } catch (error) {
            return error.message
        }
    },
    deleteTodoTask: async (id) => {
        try {
            const res = await api.delete(`/todo/delete-task/${id}`);
            return res;
        } catch (error) {
            return error.message
        }
    },
    updateTodoTask: async (id, data) => {
        try {
            const res = await api.put(`/todo/update-task-status/${id}`, data);
            return res;
        } catch (error) {
            return error.message
        }
    },
    clearTodoTask: async (data) => {
        try {
            const res = await api.put(`/todo/clear-tasks`, data);
            return res;
        } catch (error) {
            return error.message
        }
    },
}

export default apiList;