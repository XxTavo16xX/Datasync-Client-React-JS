
import { MdExpandMore, MdMic, MdSend, MdDone, MdCheckBoxOutlineBlank } from 'react-icons/md'

import { getCurrentDateInHumanFormat } from '../../lib/Calendar'

import './styles/PendingTask.css'

const PendingTaskWidget = ({ completedTaskReceived, pendingTaskReceived }) => {

    return <div className="Pending-Task-Content-Container">

        <div className="Pending-Task-Content">

            <div className="Pending-Task-Title-Container">

                <p className="Pending-Task-Content-Title-Label">Tareas Pendientes</p>

                <p className="Pending-Task-Calendar-Day-Label">{getCurrentDateInHumanFormat()}</p>

            </div>

            <div className="Pending-Task-Elements-Container">

                <div className="Pending-Task-State-Container">

                    <p className="Pending-Task-State-Label">Completadas</p>

                    <MdExpandMore color='#ffffff45' size={28} />

                </div>

                <div className="Pending-Task-List-Container-Elements">

                    {

                        // * Displaying complete tasks

                        completedTaskReceived.map((currentPendingTask, index) => {

                            return (

                                <div className="Pending-Task-Element-Box-Complete" key={index}>

                                    <div className="Pending-Task-Element-Content">

                                        <div className="Pending-Task-Complete-Indicator"></div>

                                        <p className='Pending-Task-Label'>{currentPendingTask.taskName}</p>

                                        <button className='Pending-Task-Checkbox-Button' >

                                            <MdDone color={'#ffffff60'} size={28} />

                                        </button>

                                    </div>

                                </div>

                            )

                        })

                    }

                </div>

                <div className="Pending-Task-State-Container">

                    <p className="Pending-Task-State-Label">Pendientes</p>

                    <MdExpandMore color='#ffffff45' size={28} />

                </div>

                <div className="Pending-Task-List-Container-Elements">

                    {

                        // * Displaying pending tasks

                        pendingTaskReceived.map((currentPendingTask, index) => {

                            return (

                                <div className="Pending-Task-Element-Box" key={index}>

                                    <div className="Pending-Task-Element-Content">

                                        <p className='Pending-Task-Label'>{currentPendingTask.taskName}</p>

                                        <button className='Pending-Task-Checkbox-Button'>

                                            <MdCheckBoxOutlineBlank color={'#000d41'} size={28} />

                                        </button>

                                    </div>

                                </div>

                            )

                        })

                    }


                </div>

            </div>

            <div className="Pending-Task-Controllers-Container">

                <div className="Pending-Task-Controller-Task-Button">

                    <MdMic size={24} color='#ffffff' />

                </div>

                <div className="Pending-Task-Controller-Text-Input-Container">

                    <input className='Pending-Task-Controller-Text-Input' type="text" placeholder='Enviar Cotizacion...' />

                </div>

                <div className="Pending-Task-Controller-Task-Button">

                    <MdSend size={18} color='#ffffff' />

                </div>

            </div>

        </div>

    </div>

}

export default PendingTaskWidget