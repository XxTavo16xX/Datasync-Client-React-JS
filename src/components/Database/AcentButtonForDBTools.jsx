
import React, { useContext } from 'react';
import { AppContext } from "../../app/Context";

import './styles/dbToolsButton.css'

const AcentButtonForDBTools = () => {

    const { context, setContext } = useContext(AppContext);

    const updateNewFormIsVisible = () => {

        if (context.app.database.default_collection == false) return setContext({ ...context, isNewOrderFormVisible: true });
        if (context.app.database.default_collection == true) return setContext({ ...context, isNewOrderFormVisible: false });

    }

    return <div className="accentButtonContainer" onClick={() => {
        updateNewFormIsVisible()
    }}>

        <p>Nueva Orden</p>

    </div>

}

export default AcentButtonForDBTools