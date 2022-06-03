import React, { useEffect, useReducer, useState } from 'react'
import { Button, Form } from 'antd';
import { getData, createData } from '../utils/axios';
import TodosList from './TodosList';
import '../styles/TodoForm/TodoForm.css'
import todosReducer from '../reducers/TodosReducers/reducers';
import initialStates from '../reducers/TodosReducers/initialStates';
import { GET_TODOS, RELOAD_TODOS } from '../reducers/TodosReducers/actions';
import TodoInput from './TodoInput';

const TodosForm = () => {
    const [form] = Form.useForm()
    const [state, dispatch] = useReducer(todosReducer, initialStates)
    //const [todos, setTodos] = useState();
    //const [reloadTodos, setReloadTodos] = useState(true);

    const getTodos = async () => {
        let allTodos = await getData()
        dispatch({ ...GET_TODOS, payload: allTodos })
        //setTodos(allTodos)
    }

    const onFinish = async (values) => {
        let addIsCompleted = { ...values, isCompleted: false }

        const createTodo = async (data) => {
            await createData(data)
        }

        await createTodo(addIsCompleted)
        //setReloadTodos(!reloadTodos)
        dispatch(RELOAD_TODOS)
        form.resetFields()
        getTodos()
    }

    const onFinishFailed = (errors) => {
        console.log(errors);
    }

    const handleChangeReloadTodo = () => {
        //setReloadTodos(!reloadTodos)
    }

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <Form className="todoForm" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <TodoInput label='Responsable' propName="owner" />
            <TodoInput label='Tarea' propName="task" />
            <Button type="primary" htmlType='submit'>Send</Button>
            <TodosList todos={state.todos} reloadTodos={getTodos} dispatch={dispatch} />
        </Form>
    )
}

export default TodosForm