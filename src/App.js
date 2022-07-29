import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AddUser from './AddUser'
import ViewUsers from './ViewUsers'
import NavButton from './NavButton'
const App = () => {
    return (
        <div className='App'>
            <h1 className='title'>CRUD Using Axios, Formik- mockapi</h1>
            <Routes>
                <Route path="/" element={<NavButton />} />
                <Route path='/view-users' element={<ViewUsers />} />
                <Route path='/add-user' element={<AddUser />} />
            </Routes>



        </div>
    )
}

export default App