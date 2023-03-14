
// * Dependencies Required 

import { useContext, useState } from "react";
import { MdOutlineMinimize, MdClose } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";
import InputText from "../shared/InputText";

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

                <div className="Database-Form-Header">

                    <div className="Database-Form-Container-Block">

                        <InputText inputPlaceHolder='Fecha' />
                        <InputText inputPlaceHolder='ID' />

                    </div>

                    <InputText inputPlaceHolder='Provider' />

                </div>

            </div>

        </div>

    )



}


export default DatabaseForm