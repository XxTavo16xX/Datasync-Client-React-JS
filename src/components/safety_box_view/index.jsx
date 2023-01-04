
// * Dependencies Required 

import { useContext } from "react";
import { MdExpandMore, MdMoreVert, MdDeleteOutline, MdModeEdit, MdRemoveRedEye } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

let userPasswordSchemaReceived = ['empty']


// * view to Return

const SafetyBoxView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Caja Segura' ? 'SafetyBox-Content-Container' : 'Content-Container-Hidded'}>

            <SafetyBoxSearchBar />

            <SafeTyBoxResults />

        </div>

    )

}

const SafetyBoxSearchBar = () => {

    return (

        <div className="SafetyBox-SearchBar-Container">

            <div className="SafetyBox-SearchBar-Category-Filter-Button">

                <p className="SafetyBox-SarchBar-Category-Filter-Label">Todo</p>

                <MdExpandMore color={'#ffffff'} size={24} />

            </div>

            <div className="SafetyBox-SearchBar-Input-Container">

                <input className="SafetyBox-SearchBar-Input" type="text" placeholder="Buscar contraseña" />

            </div>

            <div className="SafetyBox-SeachBar-Normal-Button">

                <p className="SafetyBox-SearchBar-Button-Label" >Generar Contraseña</p>

            </div>

            <div className="SafetyBox-SeachBar-Normal-Button">

                <p className="SafetyBox-SearchBar-Button-Label" >Guardar Contraseña</p>

            </div>

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

                        <div className="SafetyBox-Results-Container-Empty-List-Container">

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

// * This funcion will recive a obj where must check the existance of subCategories, in case
// * there are subCategories will create a loop to return all the elements as html component

const analyzeUserPasswordSchema = (currentElement) => {



}

export default SafetyBoxView