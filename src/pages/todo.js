import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import TodoService from '../service/todo.service';
import CreateTask from '../components/createTask';
import SearchTask from '../components/searchTask';
import TaskListing from '../components/taskListing';
import '../styles/TodoList.css';

const { TabPane } = Tabs;

const TodoList = () => {
  const [personalTasks, setPersonalTask] = useState([]);
  const [professionalTasks, setProfessionalTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('personal');

  useEffect(() => {
    getTaskList({});
  }, [])

  const getTaskList = async (data) => {
    const res = await TodoService.getTodoTask(data);
    if (res.success) {
      setPersonalTask(res.personalTask);
      setProfessionalTasks(res.professionalTask);
    }
  }

  const handleClearCompleted = async (type) => {
    await TodoService.clearTodoTask({ type });
    getTaskList({});
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  const renderTabs = ({ name, type }) => {
    return (
      <TabPane tab={name} key={type}>
        <CreateTask type={type} updateList={getTaskList} />
        <SearchTask updateList={getTaskList} type={type} />
        <TaskListing type={type} updateList={getTaskList} tasks={type === 'personal' ? personalTasks : professionalTasks} />
        <div className='clear-completed' onClick={() => handleClearCompleted(type)}>
          <div>
            <img src="./img/clear.svg" alt="Logo" />
            <span>Clear Completed</span>
          </div>
        </div>
      </TabPane>
    )
  }

  return (
    <div>
      <div className="header">
        <img src="./img/To-Do-Logo 1.svg" alt="Logo" />
      </div>
      <div className="todo-list">
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          {renderTabs({ name: "Personal", type: "personal" })}
          {renderTabs({ name: "Professional", type: "professional" })}
        </Tabs>
      </div>
    </div>

  );
};

export default TodoList;
