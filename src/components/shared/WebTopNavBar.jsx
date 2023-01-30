
// * Dependencies Required 

import { useContext } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { MdSubject } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/WebTopNavBar.css'

// * Components Required

// * view to Return


const WebTopNavBar = () => {

    return (

        <div className="Web-Top-Nav-Bar">

            <div className="Web-Top-Nav-Bar-Container">                

                <div className="Web-Top-Nav-Bar-Logo-Container">

                    <div className="Web-Top-Nav-Bar-Container-Logo-Icon-Container">

                        <img src="assets\icons\logo.svg" alt="" />

                    </div>

                    <p className="Web-Top-Nav-Bar-Logo-App-Name-Label">Datasync</p>

                </div>

                <div className="Web-Top-Nav-Bar-Menu-Container">

                    <nav className="Web-Top-Nav-Bar-Menu-Nav">

                        <ul className="Web-Top-Nav-Bar-Menu-Nav-Ul">
                                    <li className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li" ><a className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li-Label" href="./">Inicio</a></li>
                            <li className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li" ><a className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li-Label" href="./workspace">Tu esfera</a></li>
                            <li className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li" ><a className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li-Label" href="tools">Herramientas</a></li>
                            <li className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li" ><a className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li-Label" href="products">Productos</a></li>
                                    <li className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li" ><a className="Web-Top-Nav-Bar-Menu-Nav-Ul-Li-Label" href="./prices">Precios</a></li>
                        </ul>
                    </nav>

                </div>

                <MenuButton />

            </div>

        </div>

    )

}

const MenuButton = () => {

    return <button className="Header-Lateral-Menu-Button">

        <MdSubject size={20} />

    </button>

}

export default WebTopNavBar