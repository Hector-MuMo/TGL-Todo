import { Button, Col, Row } from 'antd'
import React from 'react'

import "../styles/TodoFilter/TodoFilter.css"

const TodoFilters = ({ onChangeAll, onChangeCompleted, onChangePending }) => {
    return (
        <div className='filter-contet'>
            <h5>Filtra tus actividades</h5>
            <Row className='filter-row'>
                <Button className='filter-button' onClick={onChangeAll}>Todas</Button>
                <Button className='filter-button' onClick={onChangePending}>Pendientes</Button>
                <Button className='filter-button' onClick={onChangeCompleted}>Completadas</Button>
            </Row>
        </div>
    )
}

export default TodoFilters