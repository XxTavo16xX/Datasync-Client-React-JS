import { MdClose, MdOutlineMinimize } from "react-icons/md";

import { useContext } from "react";
import { AppContext } from '../AppContext';


import './styles/DatabaseForm.css'

const FormContainer = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    return <div className={globalContext.isNewOrderFormVisible == true ? "Database-New-Order-Form-Container" : "Database-New-Order-Form-Container Database-New-Order-Form-Container-HIde"}>

        <div className="Form-Container-Top-Container">

            <p className="Form-Container-Top-Title-Label">Nueva Orden</p>

            <div className="Form-Container-Form-Controlls-Container">

                <button className="Form-Container-Controller-Button">

                    <MdOutlineMinimize color="#ffffff" size={24}/>

                </button>

                <button className="Form-Container-Controller-Button Form-Container-Close-Button">

                    <MdClose color="#ffffff" size={24}/>

                </button>                

            </div>

        </div>

    </div>

}

export default FormContainer