
// * Dependencies Required

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// * Process Required

import init_Custom_Context_Menu from './libraries/Contextual-Menu'

// * Views Required

import Home_view from './views/Home'
import App_view from './views/App'

// * Starting Process

init_Custom_Context_Menu()

// * Creating Root Component

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Home_view />} />
                <Route path='/App' element={<App_view />} />

            </Routes>

        </BrowserRouter>

    </React.StrictMode>

)