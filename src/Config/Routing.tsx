import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CardDetail from '../Components/CardDetail'
import Cards from '../Components/Cards'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/:id' element={<CardDetail />} />
        </Routes>
    )
}

export default Routing
