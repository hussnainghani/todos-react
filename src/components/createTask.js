import React, { useState, useEffect } from 'react';
import { Input, Button, message } from 'antd';
import TodoService from '../service/todo.service';
import '../styles/TodoList.css';


const CreateTask = ({ type, updateList }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
    }, [])

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAddTodo = async () => {
        if (title.trim() !== '') {
            await TodoService.createTodoTask({
                title,
                type
            })
            updateList();
            setTitle('');
            message.success('Task Addess Successfully');

        } else {
            message.error('Please Enter Task Title');
        }
    };

    return (
        <div className="form-container">
            <Input
                placeholder="What do you need to do?"
                value={title}
                onChange={handleInputChange}
            />
            <Button type="primary" onClick={handleAddTodo}>
                Add
            </Button>
        </div>

    );
};

export default CreateTask;
