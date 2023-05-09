
// * Dependencies Required

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// * Context Required

import { AppProvider } from './app/context'

// * Process Required

import init_Custom_Context_Menu from './libraries/Contextual-Menu'

// * Views Required

import Home_view from './views/Home'
import App_view from './views/App'
import Verification_View from './views/Verification'

// * Starting App Process

init_Custom_Context_Menu()

// * Creating Root Component

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <AppProvider >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home_view />} />
                    <Route path='/app' element={<App_view />} />
                    <Route path='/verification' element={<Verification_View />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>

)