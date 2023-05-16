
// * Dependencies Required

import { Link } from 'react-router-dom'

// * Styles Required

import './index.css'

// * Assets Required

import logoURL from '/assets/icons/logo.svg'

// * Component Exported

const TopNavBar = () => {

    return (

        <div className="TopNavBar-Container">

            <div className="TopNavBar-Margin">

                <div className="TopNavBar-Logo-Container">

                    <img className='TopNavBar-Logo' src={logoURL} />

                    <p className='TopNavBar-Brand-Name' >Datasync</p>

                </div>

                <div className="TopNavBar-Nav-Container">

                    <nav className='TopNavBar-Nav-Container-Nav'>

                        <ul className='TopNavBar-Nav-Container-Ul'>

                            <li className='TopNavBar-Nav-Container-Li'><Link to='/'>Inicio</Link></li>
                            <li className='TopNavBar-Nav-Container-Li'><Link to='/eco'>Ecocistema</Link></li>
                            <li className='TopNavBar-Nav-Container-Li'><Link to='/tools'>Herramientas</Link></li>
                            <li className='TopNavBar-Nav-Container-Li'><Link to='/products'>Productos</Link></li>
                            <li className='TopNavBar-Nav-Container-Li'><Link to='/prices'>Precios</Link></li>

                        </ul>

                    </nav>

                </div>

                <div className="TopNavBar-Action-Buttons-Container"></div>

            </div>

        </div>

    )

}

export default TopNavBar