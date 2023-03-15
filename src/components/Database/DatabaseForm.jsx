
// * Dependencies Required 

import { useContext, useState } from "react";
import { MdOutlineMinimize, MdClose, MdSearch } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";
import InputText from "../shared/InputText";
import { getCurrenteDate } from "../../lib/Calendar";

// * view Styles

import './styles/DatabaseForm.css'

// * view to Return

const DatabaseForm = () => {

    const { context, setContext } = useContext(AppContext)

    const [formState, setFormState] = useState('Display')

    const handleCloseForm = () => {

        setContext({ ...context, app: { ...context.app, display_database_new_entry_form: !context.app.display_database_new_entry_form } })

    }

    const handleMinimizeForm = () => {

        const databaseFormContainer = document.getElementById('Database-Form-Container')

        if (databaseFormContainer.style.transform == '' || databaseFormContainer.style.transform == 'translateY(0px)') return databaseFormContainer.style.transform = 'translateY(590px)'

        return databaseFormContainer.style.transform = 'translateY(0px)'

    }

    if (context.app.display_database_new_entry_form != false) return (

        <div className="Database-Form-Container" id="Database-Form-Container">

            <div className="Database-Form-Margin">

                <div className="Database-Form-Top-Container">

                    <p className="Form-Title-Label">Nueva Orden</p>

                    <div className="Database-Form-Top-Container-Action-Buttons-Container">

                        <div className="Database-Form-Title-Action-Button" onClick={handleMinimizeForm}>

                            <MdOutlineMinimize color="#ffffff" size={20} />

                        </div>

                        <div className="Database-Form-Title-Action-Button" onClick={handleCloseForm}>

                            <MdClose color="#ffffff" size={20} />

                        </div>

                    </div>


                </div>

                <div className="Database-Form-Sections-Container">

                    <div className="Database-Form-Sections-Margin">

                        <div className="Database-Form-OrderData-Section">

                            <div className="Database-Form-Container-Block">

                                <InputText inputPlaceHolder='Fecha' inputDefaultValue={getCurrenteDate()} />
                                <InputText inputPlaceHolder='ID' inputDefaultValue='15917' />

                            </div>

                            <InputText inputPlaceHolder='Proveedor' />

                        </div>

                        <div className="Database-Form-Section-Container">

                            <p className="Database-Form-Section-Title">Informacion del Cliente</p>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Razon Social' />

                                <InputText inputPlaceHolder='Dirreccion' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='RFC' />

                                <InputText inputPlaceHolder='Customer Order' />

                                <InputText inputPlaceHolder='Petición de llegada' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Nombre de contacto' />

                                <InputText inputPlaceHolder='Correo de contacto' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Terminos' />


                            </div>

                        </div>

                        <div className="Database-Form-Section-Container">

                            <p className="Database-Form-Section-Title">Informacion del Destinatario</p>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Razon Social' />

                                <InputText inputPlaceHolder='Dirreccion' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Nombre de contacto' />

                                <InputText inputPlaceHolder='Correo de contacto' />

                            </div>

                        </div>

                        <div className="Database-Form-Section-Container">

                            <p className="Database-Form-Section-Title">Informacion del Envio</p>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Razon Social' />

                                <InputText inputPlaceHolder='Dirreccion' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Nombre de contacto' />

                                <InputText inputPlaceHolder='Correo de contacto' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Transportado por' />

                                <InputText inputPlaceHolder='Puerto de descarga' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <div className="Database-Form-Section-Block-2">

                                    <InputText inputPlaceHolder='Dirreccion de Entrega' />

                                </div>

                                <InputText inputPlaceHolder='Intercom' />

                            </div>

                            <div className="Database-Form-Section-Shape-2_50">

                                <InputText inputPlaceHolder='Marks' />

                                <InputText inputPlaceHolder='Instrucciones especiales' />

                            </div>

                        </div>

                        <div className="Database-Form-Section-Container">

                            <p className="Database-Form-Section-Title">Lista de Productos</p>

                            <div className="Database-Form-List-Tools-Bar">

                                <div className="Database-Form-Search-Button">

                                    <MdSearch color="#081648" size={20} />

                                </div>

                                <div className="Database-Form-New-Product-Button">

                                    <p className="Database-Form-Tools-Button-Label">Nuevo Producto</p>

                                </div>

                            </div>

                            <div className="Form-Order-Lists-Container">

                                <div className="Form-Order-List-Container">


                                </div>

                                <div className="Form-Order-Element-List-Container">

                    
                                </div>

                            </div>

                        </div>

                        <div className="Database-Form-Action-Button-Container">

                            <p className="Action-Button-Label">Crear nueva orden</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )



}


export default DatabaseForm