
// * Dependencies Required

import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// * Context Required

import { AppContext } from '../../app/context'

// * Styles Required

import './index.css'


const App_view = () => {

    const { context, setContext } = useContext(AppContext)
    const navigate = useNavigate();

    
    useEffect(() => {
        
        console.log(context.session.token);
        if (context.session.token == '') {

            navigate('/')

        }

    }, [])

    return (

        <div className="App-Page-Container">

            <p className="App-Page">App PAGE</p>

        </div>

    )

}

export default App_view