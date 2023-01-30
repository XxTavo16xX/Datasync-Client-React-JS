
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import '../styles/chat_View.css'

// * Components Required

// * view to Return

const ChatView = () => {

    const { context } = useContext(AppContext)

    if (context.app.current_view == 'Chat') return (

        <div className="ChatView-View-Container">

            <div className="Chat-View-Chats-Options-Container">

                <div className="View-Container-Background"></div>

                <div className="Chat-View-Content-Container">

                    <div className="Chat-Options-Info-Container">

                        <div className="Chat-Options-Info-Margin">

                            <p className="Chat-Selected-Title-Label">Recibidos</p>

                            <p className="Chat-Selected-Subtitle-Label">0 Correos Nuevos</p>

                        </div>

                    </div>

                    <div className="Chat-Options-Container">



                    </div>

                </div>

            </div>

            <div className="Chat-View-Chat-Selected-Display-Container">

                <div className="View-Container-Background"></div>

                <div className="Chat-View-Selected-Content-Container">

                    <p className="Chat-View-No-Selected-Label">Selecciona un elemento para mostrar su contenido.</p>

                </div>


            </div>


        </div>

    )


}

export default ChatView