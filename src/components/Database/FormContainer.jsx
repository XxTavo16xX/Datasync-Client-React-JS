import { MdClose, MdOutlineMinimize } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import { useContext } from "react";
import { AppContext } from '../AppContext';


import './styles/DatabaseForm.css'

const minimizeNewOrderForm = () => {

    const newOrderForm = document.getElementById('newOrderFormContainer')

    if (newOrderForm.style.width == '' || newOrderForm.style.width == '80%') {

        newOrderForm.style.width = '20%'
        newOrderForm.style.transform = 'translateY(95.3%)'
        return
    }

    if (newOrderForm.style.width == '20%') {

        newOrderForm.style.width = '80%'
        newOrderForm.style.transform = 'translateY(0px)'
        return
    }

}

const FormContainer = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    const closeNewOrderForm = () => {

        if (globalContext.isNewOrderFormVisible == false) return setGlobalContext({ ...globalContext, isNewOrderFormVisible: true });
        if (globalContext.isNewOrderFormVisible == true) return setGlobalContext({ ...globalContext, isNewOrderFormVisible: false });

    }

    return <div className={globalContext.isNewOrderFormVisible == true ? "Database-New-Order-Form-Container" : "Database-New-Order-Form-Container Database-New-Order-Form-Container-HIde"} id="newOrderFormContainer">

        <div className="Form-Container-Top-Container">

            <p className="Form-Container-Top-Title-Label">Nueva Orden</p>

            <div className="Form-Container-Form-Controlls-Container">

                <button className="Form-Container-Controller-Button" onClick={() => { minimizeNewOrderForm() }}>

                    <MdOutlineMinimize color="#ffffff" size={24} />

                </button>

                <button className="Form-Container-Controller-Button Form-Container-Close-Button" onClick={() => { closeNewOrderForm() }}>

                    <MdClose color="#ffffff" size={24} />

                </button>

            </div>

        </div>

        <div className="Form-Container-Form-Container">

            <div className="Form-Content-Margin">

                <div className="Form-Content-Top-Container">

                    <div className="From-Content-Input-1-4">

                        <TextField fullWidth id="outlined-basic" label="Number Cop" variant="outlined" InputProps={{ style: { color: '#06113C', }, }} />

                    </div>

                    <div className="From-Content-Input-1-4">

                        <TextField fullWidth id="outlined-basic" label="Fecha" variant="outlined" InputProps={{ style: { color: '#06113C', }, }} />

                    </div>

                    <div className="From-Content-Input-1-2">

                        <TextField fullWidth id="outlined-basic" label="Provedor" variant="outlined" InputProps={{ style: { color: '#06113C', }, }} />

                    </div>

                </div>

                <div className="Form-Content-Mid-Container">

                    <div className="From-Content-Container-1-3">

                        <div className="Form-Content-1-3-Margin">

                            <p className="Form-Content-Title-Label">Facturado a</p>

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Rezon Social" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Dirreccion" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="RFC" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Contacto" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Numero Telefonico" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Customer Order" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <div className="Form-Content-Two-Inputs-One-Column">

                                <div className="From-Content-Input-15">

                                    <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Terms" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                                </div>

                                <div className="From-Content-Input-15">

                                    <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Request Arrival" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                                </div>

                            </div>

                        </div>


                    </div>

                    <div className="From-Content-Container-1-3">

                        <div className="Form-Content-1-3-Margin">

                            <p className="Form-Content-Title-Label">Consignado a</p>

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Rezon Social" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Dirreccion" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Contacto" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Numero Telefonico" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <p className="Form-Content-Title-Label Subtitle-Label">Enviado a</p>

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Rezon Social" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Dirreccion" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Contacto" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Numero Telefonico" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                        </div>


                    </div>

                    <div className="From-Content-Container-1-3">

                        <div className="Form-Content-1-3-Margin">

                            <p className="Form-Content-Title-Label">Embarque</p>

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Nombre del puerto" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <div className="Form-Content-Two-Inputs-One-Column">

                                <div className="From-Content-Input-15">

                                    <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Incoterm" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                                </div>

                                <div className="From-Content-Input-15">

                                    <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Delivery Place" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                                </div>

                            </div>

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Shipment Via" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Endpoin" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Instrucciones Especiales" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Notas importantes" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                            <TextField className="Form-Content-1-3-TextField" fullWidth id="outlined-basic" label="Marks" variant="outlined" InputProps={{ style: { color: '#06113C', marginBottom: '20px' }, }} />

                        </div>


                    </div>

                </div>

            </div>

        </div>

    </div>

}

export default FormContainer