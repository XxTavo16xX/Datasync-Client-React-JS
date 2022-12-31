
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";
import { convertToDisplayNumber } from "../../modules/Display";

// * view Styles

import './styles/ResumenDataContainer.css'

const HoursDigitals = []
const MinutesDigitals = []

for (let i = 0; i < 13; i++) {

    HoursDigitals.push(<span className="Digits-Label" key={i + ' Hours'} > {convertToDisplayNumber(i)} </span>)

}

for (let i = 0; i < 61; i++) {

    MinutesDigitals.push(<span className="Digits-Label" key={i + ' Minutes'} > {convertToDisplayNumber(i)} </span>)

}

const DigitalClockUpdate = () => {

    try {

        const date = new Date()

        const currentHours = date.getHours() % 12 || 12; 
        const currentMinutes = date.getMinutes()

        document.getElementById('Digits-Container-Hours').scroll({ top: [125 * currentHours], behavior: 'smooth' });
        document.getElementById('Digits-Container-Minutes').scroll({ top: [125 * currentMinutes], behavior: 'smooth' });

    }catch (e){

    }

}

setInterval(DigitalClockUpdate, 1000);

// * view to Return

const ResumenWidget = () => {


    return <div className="Top-Container-Resumen-Data-Container">

        <DigitalClockWidget />

        <p className="Top-Containter-Resume-Current-Week-Day-Date">Viernes, 30 de Diciembre de 2022</p>

    </div>



}

const DigitalClockWidget = () => {

    return (

        <div className="Top-Container-Resumen-Digital-Clock-Container">

            <div className="Digital-Clock-Digitals-Container">

                <div className="Digits-Label-Container" id="Digits-Container-Hours"> {HoursDigitals} </div>

                <p className='Digits-Colom'>:</p>

                <div className="Digits-Label-Container" id="Digits-Container-Minutes"> {MinutesDigitals} </div>


            </div>

        </div>

    )

}



export default ResumenWidget