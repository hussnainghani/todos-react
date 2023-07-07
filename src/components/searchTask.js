import React, { useState, useEffect } from 'react';
import { Input, Button, List, Typography, Tabs, Image } from 'antd';
import '../styles/TodoList.css';


const SearchTask = ({ updateList, type }) => {
    const [search, setTitle] = useState('');

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAddTodo = async () => {
        updateList({ search, type });
    };

    return (
        <div className="form-container">
            <Input
                placeholder="Search your Tasks"
                value={search}
                onChange={handleInputChange}
            />
            <Button type="primary" onClick={handleAddTodo}>
                Search
            </Button>
        </div>

    );
};

export default SearchTask;
