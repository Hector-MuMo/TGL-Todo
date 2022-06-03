import React from "react"

import TodosForm from './components/TodosForm';
import './App.css';
import 'antd/dist/antd.min.css'


function App() {

    return (
        <div className="App">

            <h2>Administra tus Actividades</h2>
            <TodosForm />

        </div>
    );
}

export default App;
