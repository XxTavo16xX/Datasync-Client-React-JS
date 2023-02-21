
// * Dependencies Required 

import { useContext, useState } from 'react';

import { MdQrCodeScanner, MdClear, MdCopyAll, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { IoIosRefresh } from "react-icons/io";
import Slider from '@mui/material/Slider';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

// * Modules Required

import { AppContext } from '../../app/Context';

import { generatePassword } from '../../lib/Encrypt';
import { copyToClipboard } from '../../lib/System'
import { displayAppNotification } from '../../lib/System';

// * view Styles

import './styles/PasswordGeneratorWidget.css'

// * Components Required

const themasde = createTheme({ palette: { primary: { main: '#06113c' } } });

// * view to Return

const PasswordGeneratorWidget = () => {

    const [sliderLength, setSliderLength] = useState(18);
    const { context, setContext } = useContext(AppContext)

    const handleSliderChange = (event, newValue) => {

        setSliderLength(newValue);
        displayPassword()

    };

    const handleInputChange = (event) => {
        setSliderLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const displayPassword = () => {

        document.getElementById('Password-Generator-Widget-Password-Result').innerText = generatePassword(sliderLength)

    }

    const handleSavePassword = (e) => {

        e.preventDefault()

        if(context.app.safetybox.password_generator_save_password === false ) return setContext({ app: { ...context.app, safetybox: {...context.app.safetybox, password_generator_save_password: true} }, workspace: { ...context.workspace}, user: { ...context.user } })
        if(context.app.safetybox.password_generator_save_password === true ) return setContext({ app: { ...context.app, safetybox: {...context.app.safetybox, password_generator_save_password: false} }, workspace: { ...context.workspace}, user: { ...context.user } })

        console.log('done');

    }

    return (

        <div className="Password-Generator-Container-Layer">

            <div className="Password-Generator-Widget">

                <div className="Password-Generator-Widget-Background">

                    <div className="Password-Generator-Widget-Background-Sphere"></div>
                    <div className="Pending-Task-Widget-Background-Sphere-2"></div>

                </div>

                <div className="Password-Generator-Widget-Content">

                    <div className="Password-Generator-Widget-Content-Margin">

                        <div className="Password-Generator-Widget-Section-Title-Bar">

                            <MdQrCodeScanner size={24} color={'#06113c'} />

                            <p className="Password-Generator-Widget-Title-Label">Generador de contraseña</p>

                            <MdClear size={24} color={'#06113c'} />

                        </div>

                        <div className="Password-Generator-Widget-Section-Password-Result-Container">

                            <p className="Password-Generator-Widget-Password-Result-Flip-Column-Option" id='Password-Generator-Widget-Password-Result'>{generatePassword(sliderLength)}</p>

                        </div>

                        <div className="Password-Generator-Widget-Section-Password-Result-Container-Action-Buttons-Container">

                            <div className="Password-Result-Container-Action-Buttons-Container-Margin">

                                <div className="Password-Result-Container-Action-Button" onClick={() => { displayPassword() }}>

                                    <IoIosRefresh size={20} color='#ffffff' />

                                </div>

                                <div className="Password-Result-Container-Action-Button" onClick={() => {

                                    copyToClipboard(document.getElementById('Password-Generator-Widget-Password-Result').innerText)
                                    displayAppNotification('Contraseña Copiada!')

                                }} >

                                    <MdCopyAll size={20} color='#ffffff' />

                                </div>

                            </div>

                        </div>

                        <div className="Password-Generator-Widget-Section-Password-Result-Properties-Container">

                            <p className="Password-Generator-Widget-Section-Password-Result-Properties-Title">Propiedades de Contraseña</p>

                            <div className="Password-Generator-Widget-Property-Container">

                                <p className="Password-Generator-Widget-Property-Title-Label">Longitud de contraseña</p>

                                <div className="Password-Generator-Widget-Property-Container-Slider">

                                    <div className="Password-Generator-Widget-Property-Container-Slider-Container">

                                        <ThemeProvider theme={themasde}>

                                            <Slider min={8} max={75} defaultValue={18} aria-label="Default" valueLabelDisplay="auto" onChange={handleSliderChange} value={typeof sliderLength === 'number' ? sliderLength : 0} />

                                            <div className="Password-Generator-Widget-Property-Container-Slider-Range-Container">

                                                <p className='Password-Generator-Widget-Property-Container-Slider-Range-Label' >8</p>
                                                <p className='Password-Generator-Widget-Property-Container-Slider-Range-Label' >75</p>

                                            </div>

                                        </ThemeProvider>

                                    </div>

                                    <div className="Password-Generator-Widget-Property-Container-Slider-Input-Container">

                                        <input className='Password-Generator-Widget-Property-Container-Slider-Input' type="number" value={sliderLength} onChange={handleInputChange} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="Password-Generator-Widget-Section-Save-Password-Container">

                            <p className="Password-Generator-Widget-Section-Save-Password-Title-Label">¿Guardar contraseña?</p>

                            <MdCheckBoxOutlineBlank color='#06113c' size={20} onClick={ handleSavePassword } />

                        </div>

                    </div>

                </div>

            </div>


        </div>

    )

}

export default PasswordGeneratorWidget