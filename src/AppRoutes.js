import React from 'react'

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route exact path = '/' element = {<Index/>}/>
        <Route path = '/background' element = {<BackgroundColorChanger/>}/>
         <Route path = '/calculator' element = {<Calculator/>}/>                                 
        </Routes>
        </BrowserRouter>
        
        </>

    )
}
