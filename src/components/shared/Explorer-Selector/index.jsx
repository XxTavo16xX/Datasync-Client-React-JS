
// * Dependencies Required

import { MdClose } from 'react-icons/md'

// * Styles Required

import './index.css'

// * Controllers Required

import { buttonOnPress, buttonUnpress } from '../../../components/shared/controllers/Form'

const categories = ['unisex', 'male', 'female', 'abstract']

// * Component Exported

export const Profile_Picture_Explorer_Selector = ({ isHidde, onClose, onSelect }) => {

    return (

        <div className={isHidde === true ? "Profile-Picture-Explorer-Selector Profile-Picture-Explorer-Selector-Hided" : "Profile-Picture-Explorer-Selector"}>

            <div className="Profile-Picture-Explorer-Selector-Margin">

                <div className="Profile-Picture-Explorer-Selector-Top-Container">

                    <p className="Explorer-Selector-Title-Label">Cambiar Foto de perfil</p>

                    <div className="Icon-Button">

                        <MdClose size={24} color='#0000000' style={{ cursor: 'pointer' }} onClick={onClose} />

                    </div>


                </div>

                <p className="Section-Title-Label">Imagenes preseleccionadas generadas por DALLE</p>

                <div className="Profile-Picture-Explorer-Defautl-Container">

                    {

                        categories.map(categorie => {

                            return (

                                <div className='Profile-Picture-Explorer-Defautl-Container-Row' key={categorie}>

                                    <div className="Profile-Picture-Option-Container" onClick={onSelect} key={categorie + '1'}>

                                        <img src={'https://scontent.webdesignnodes.com/datasync/default_profile_pics/' + categorie + '/1.png'} alt="" />

                                    </div>

                                    <div className="Profile-Picture-Option-Container" onClick={onSelect} key={categorie + '2'}>

                                        <img src={'https://scontent.webdesignnodes.com/datasync/default_profile_pics/' + categorie + '/2.png'} alt="" />

                                    </div>

                                    <div className="Profile-Picture-Option-Container" onClick={onSelect} key={categorie + '3'}>

                                        <img src={'https://scontent.webdesignnodes.com/datasync/default_profile_pics/' + categorie + '/3.png'} alt="" />

                                    </div>

                                    <div className="Profile-Picture-Option-Container" onClick={onSelect} key={categorie + '4'}>

                                        <img src={'https://scontent.webdesignnodes.com/datasync/default_profile_pics/' + categorie + '/4.png'} alt="" />

                                    </div>

                                    <div className="Profile-Picture-Option-Container" onClick={onSelect} key={categorie + '5'}>

                                        <img src={'https://scontent.webdesignnodes.com/datasync/default_profile_pics/' + categorie + '/5.png'} alt="" />

                                    </div>

                                </div>

                            )

                        })

                    }

                </div>

                <div id='auth_form_login_button' className="Auth-Form-Login-Button" tabIndex={0} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} >

                    <p id='auth_form_login_button' className="Button-Label">Cargar Foto</p>

                </div>

            </div>

        </div>

    )

}