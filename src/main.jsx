
// * Dependencies Required

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// * Context Required

import { App_Context_Provider } from './app/contexts/app_context'
import { Session_Context_Provider } from './app/contexts/session_context'
import { User_Context_Provider } from './app/contexts/user_context'

import { Notification_Context_Provider } from './app/contexts/notification_context'

// * Components Required

import Push_Notification from './components/shared/Notification'

// * Views Required

import Home_view from './views/Home'
import App_view from './views/App'
import Verification_View from './views/Verification'

const Home_App = () => {

    return (

        <App_Context_Provider>
            <Session_Context_Provider>
                <User_Context_Provider>
                    <Notification_Context_Provider>

                        <Push_Notification />
                        <Home_view />

                    </Notification_Context_Provider>
                </User_Context_Provider>
            </Session_Context_Provider>
        </App_Context_Provider>

    )

}

const App = () => {

    return (

        <App_Context_Provider>

            <Home_view />

        </App_Context_Provider>

    )

}


// * Creating Root Component

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Home_App />} >

                    <Route path='eco' />
                    <Route path='tools' />
                    <Route path='products' />
                    <Route path='prices' />

                </Route>

                <Route path='app' element={<App_view />}>

                    <Route path='dashboard' />
                    <Route path='chat' />
                    <Route path='calendar' />
                    <Route path='databases' />
                    <Route path='cloud' />
                    <Route path='safetyBox' />
                    <Route path='backups' />
                    <Route path='pendingTasks' />
                    <Route path='support' />

                </Route>

                <Route path='/verification' element={<Verification_View />} />

            </Routes>

        </BrowserRouter>

    </React.StrictMode>

)

/* // * Creating Root Component

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>

        <App_Context_Provider >

            <Notification_Context_Provider>

                <Push_Notification />

                <BrowserRouter>

                    <Routes>

                        <Route path='/' element={<Home_view />} />

                        <Route path='app' element={<App_view />}>

                            <Route path='dashboard' />
                            <Route path='chat' />
                            <Route path='calendar' />
                            <Route path='databases' />
                            <Route path='cloud' />
                            <Route path='safetyBox' />
                            <Route path='backups' />
                            <Route path='pendingTasks' />
                            <Route path='support' />

                        </Route>

                        <Route path='/verification' element={<Verification_View />} />

                    </Routes>

                </BrowserRouter>

            </Notification_Context_Provider>

        </App_Context_Provider>

    </React.StrictMode>

) */