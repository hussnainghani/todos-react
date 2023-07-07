import React, { useEffect } from 'react';
import { Button, List } from 'antd';
import TodoService from '../service/todo.service';

import '../styles/TodoList.css';


const TodoList = ({ tasks, type, updateList }) => {

    useEffect(() => {
    }, [])

    const handleDeleteTodo = async (id) => {
        await TodoService.deleteTodoTask(id);
        updateList();
    };

    const handleToggleComplete = async(id) => {
        await TodoService.updateTodoTask(id);
        updateList();
    };

    const taskItem = (task, index) => {
        return (
            <List.Item>
                <label className="todo-list-item" onClick={() => handleToggleComplete(task.id)}>
                    <input type="checkbox" name="task_1" className="todo-list-cb" checked={task.status === 'completed'} />
                    <span className="todo-list-mark"></span>
                    <span className="todo-list-desc">{task.title}</span>
                </label>
                <Button type="danger" onClick={() => handleDeleteTodo(task.id)}>
                    <img src="./img/Delete outline.svg" alt="Logo" />
                </Button>
            </List.Item>
        );
    }

    return (
        <List
            dataSource={tasks}
            renderItem={taskItem}
        />
    );
};

export default TodoList;
