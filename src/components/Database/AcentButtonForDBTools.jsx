
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

import './styles/dbToolsButton.css'

const AcentButtonForDBTools = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    const updateNewFormIsVisible = () => {

        if (globalContext.isNewOrderFormVisible == false) return setGlobalContext({ ...globalContext, isNewOrderFormVisible: true });
        if (globalContext.isNewOrderFormVisible == true) return setGlobalContext({ ...globalContext, isNewOrderFormVisible: false });

    }

    return <div className="accentButtonContainer" onClick={() => {
        updateNewFormIsVisible()
    }}>

        <p>Nueva Orden</p>

    </div>

}

export default AcentButtonForDBTools