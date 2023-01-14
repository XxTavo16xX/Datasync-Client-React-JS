
// * Dependencies Required 

import { useContext } from "react";
import { MdExpandMore, MdMoreVert } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

let userPasswordSchemaReceived = [{
    "currentCategory": 'Correos',
    "categoryElements": [
        {
            "elementName": "Gmail",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Gmail",
            "elementAccount": "tavo141692@gmail.com"

        }, {
            "elementName": "Gmail",
            "elementAccount": "vengoparamatar@gmail.com"

        }, {
            "elementName": "Gmail Escuela",
            "elementAccount": "20654398@prepaenlinea-sep.edu.mx"

        }, {
            "elementName": "Ionos Web Design Nodes",
            "elementAccount": "armandoperalta@webdesignnodes.com"

        }, {
            "elementName": "Ionos PayAll",
            "elementAccount": "armandoperalta@payall.com.mx"

        }]
}, {
    "currentCategory": 'Redes Sociales',
    "categoryElements": [
        {
            "elementName": "Github",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Twitter",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Instagram",
            "elementAccount": "Login with Facebook"

        }, {
            "elementName": "Reddit",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Twitch",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "LinkedIn",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Facebook",
            "elementAccount": "tavo14169@gmail.com"

        }]
}, {
    "currentCategory": 'Entretenimiento',
    "categoryElements": [
        {
            "elementName": "Steam",
            "elementAccount": "tavogamer_16"

        },
        {
            "elementName": "Netflix",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Spotify",
            "elementAccount": "Login with Facebook"

        }, {
            "elementName": "HBO MAX",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Amazon Prime",
            "elementAccount": "tavo141692@gmail.com"

        }, {
            "elementName": "Disney",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "F1 TV",
            "elementAccount": "tavo14169@gmail.com"

        }]
}]

import SearchBar from './SearchBar'
import PasswordGeneratorWidget from "./PasswordGeneratorWidget";

// * view to Return

const SafetyBoxView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Caja Segura' ? 'SafetyBox-Content-Container' : 'Content-Container-Hidded'}>

            <SearchBar />

            <SafeTyBoxResults />

            { context.app.safetybox.password_generator_is_displayed === true ? <PasswordGeneratorWidget /> : null }            

        </div>

    )

}

const SafeTyBoxResults = () => {

    return <div className="SafetyBox-Results-Container">

        <p className="SafetyBox-Results-Container-Title-Label">Contraseñas Guardadas</p>

        <div className="SafetyBox-Results-Container-List">

            {

                userPasswordSchemaReceived.map(currentElement => {

                    if (currentElement == 'empty') return (

                        <div className="SafetyBox-Results-Container-Empty-List-Container" key={0}>

                            <div className="SafetyBox-Results-Container-Empty-List-Container-Margin">

                                <p className="SafetyBox-Results-Container-Empty-List">Aun no haz guardado ninguna contraseña</p>

                                <div className="SafetyBox-SeachBar-Normal-Button">

                                    <p className="SafetyBox-SearchBar-Button-Label" >Guardar Contraseña</p>

                                </div>

                            </div>

                        </div>


                    )

                    const { subCategories } = currentElement;

                    if (subCategories) {

                        console.log('must check');

                    } else {

                        const { currentCategory, categoryElements } = currentElement

                        return (

                            <div className="Password-Manager-Category-Container" key={currentCategory} >

                                <div className="Password-Manager-Category-Title-Container">

                                    <div className="Password-Manager-Category-Title-Container-Margin">

                                        <p className="Password-Manager-Category-Title-Label">{currentCategory}</p>

                                        <MdExpandMore size={34} color={'#000000'} />

                                    </div>

                                </div>

                                <div className="Password-Manager-Category-List-Container">

                                    <div className="Password-Manager-Category-Table-Titles-Container">

                                        <div className="Password-Manager-Category-Table-Titles-Container-Margin">

                                            <div className="Password-Manager-Category-Table-Title-Container">

                                                <p className="Password-Manager-Category-Element-Name-Title-Label">Nombre</p>

                                            </div>

                                            <div className="Password-Manager-Category-Table-Title-Container">

                                                <p className="Password-Manager-Category-Element-Name-Title-Label">Cuenta</p>

                                            </div>

                                            <div className="Password-Manager-Category-Table-Title-Container">

                                                <p className="Password-Manager-Category-Element-Name-Title-Label">Contraseña</p>

                                            </div>

                                        </div>

                                    </div>

                                    {

                                        categoryElements.map(categoryElement => {

                                            const { elementAccount, elementName } = categoryElement

                                            return (

                                                <div className="Password-Manager-Category-List-Element-Container" key={elementAccount + '_' + elementName}>

                                                    <div className="Password-Manager-Category-Element-Container">

                                                        <div className="Password-Manager-Category-Element-Container-Margin">

                                                            <div className="Password-Manager-Category-Element-Element-Site-Name-Container">

                                                                <p className="Password-Manager-Category-Element-Name-Label">{elementName}</p>

                                                            </div>

                                                            <div className="Password-Manager-Category-Element-Element-Account-Container">

                                                                <p className="Password-Manager-Category-Element-Account-Label">{elementAccount}</p>

                                                            </div>

                                                            <div className="Password-Manager-Category-Element-Element-Password-Representation">

                                                                <p className="Password-Manager-Category-Element-Password-Label">*********</p>

                                                            </div>

                                                            <div className="Password-Manager-Category-Element-Element-Action-Buttons-Container">

                                                                <button className="Password-Action-Button">

                                                                    <MdMoreVert size={20} />

                                                                </button>

                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                            )

                                        })

                                    }</div>

                            </div>

                        )

                    }

                })

            }

        </div>

        <div className="SafetyBox-Results-Container-Recents">



        </div>

    </div >

}

export default SafetyBoxView