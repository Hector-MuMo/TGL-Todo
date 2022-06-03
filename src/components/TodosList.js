import React, { useEffect, useState } from 'react'
import { Avatar, Button, Checkbox, List } from 'antd';
import { updateData, deleteData } from '../utils/axios';
import { DeleteFilled } from '@ant-design/icons';
import { RELOAD_TODOS } from '../reducers/TodosReducers/actions';
import randomNums from '../utils/randomNums';

import "../styles/TodoList/TodoList.css"
import TodoFilters from './TodoFilters';

const TodosList = ({ todos, reloadTodos, dispatch }) => {
    const [todosFiltered, setTodosFiltered] = useState(todos);

    const handleChangeCompleted = async (id, checked, todo) => {
        let changeCompleted = { ...todo, isCompleted: checked }
        //onChangeReload()
        await updateData(id, changeCompleted)
        dispatch(RELOAD_TODOS)
        reloadTodos()
    }

    const handleDeleteTodo = async (id) => {
        await deleteData(id)
        //onChangeReload()
        dispatch(RELOAD_TODOS)
        reloadTodos()
    }

    const handleAllFilterButton = () => {
        setTodosFiltered(todos)
    }

    const handleCompleteFilterButton = () => {
        let completedTodos = todos.filter((todo) => todo.isCompleted)
        setTodosFiltered(completedTodos)
    }

    const handlePendingFilterButton = () => {
        let completedTodos = todos.filter((todo) => !todo.isCompleted)
        setTodosFiltered(completedTodos)
    }

    useEffect(() => {
        setTodosFiltered(todos)
    }, [todos]);

    return (
        <section >
            <TodoFilters
                onChangeAll={handleAllFilterButton}
                onChangeCompleted={handleCompleteFilterButton}
                onChangePending={handlePendingFilterButton} />
            <List
                itemLayout="horizontal"
                dataSource={todosFiltered}
                renderItem={item => {
                    return (
                        <List.Item actions={[<Button onClick={() => handleDeleteTodo(item.id)}><DeleteFilled /></Button>]}>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://i.pravatar.cc/150?img=${randomNums()}`} />}
                                title={<p style={item.isCompleted ? { textDecoration: "line-through" } : null} >{item.owner}</p>}
                                description={<p style={item.isCompleted ? { textDecoration: "line-through" } : null}>{item.task}</p>}
                            />
                            <Checkbox checked={item.isCompleted} onChange={(e) => handleChangeCompleted(item.id, e.target.checked, item)} />
                        </List.Item>
                    )
                }}
            />
        </section>
    )
}

export default TodosList