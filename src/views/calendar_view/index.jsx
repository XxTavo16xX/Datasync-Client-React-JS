// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getMonthAndYearInHumandFormat, getDaysInCurrentMonth } from "../../lib/Calendar";
import { convertToDisplayNumber } from "../../lib/Display";

// * view Styles

import '../styles/Calendar_view.css'

// * Components Required

// * view to Return

const CalendarView = () => {

    const { context } = useContext(AppContext)

    const daysInMonth = getDaysInCurrentMonth(2023, 1)

    if (context.app.current_view == 'Calendario') return (

        <div className="Calendar-View-Container">

            <div className="Calendar-View-Background"></div>

            <div className="Calendar-View-Content">

                <div className="Calendar-TopBar-Container">

                    <div className="Calendar-TopBar-Container-Margin">

                        <p className="Calendar-Current-Date-Label">{getMonthAndYearInHumandFormat()}</p>

                    </div>

                </div>

                <div className="Calendar-Container">

                    {

                        daysInMonth.map((element) => {

                            const currentNumberDay = element.getDate()

                            return (

                                <div className="Calendar-Day-Container" key={currentNumberDay}>

                                    <div className="Calendar-Day-Margin">

                                        <div className="Calendar-Day-Container-Top-Container">                                            

                                            { currentNumberDay == 1 ? <div className="Calendar-Day-Current-Day-Sign"><p className="Calendar-Current-Day-Number-Label">{convertToDisplayNumber(currentNumberDay)}</p></div> : <p className="Calendar-Day-Number-Label">{convertToDisplayNumber(currentNumberDay)}</p>}

                                        </div>

                                    </div>

                                </div>

                            )

                        })

                    }

                </div>

            </div>

        </div>

    )

}

export default CalendarView