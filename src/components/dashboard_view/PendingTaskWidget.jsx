
import { MdExpandMore, MdMic, MdSend, MdSignalCellularConnectedNoInternet0Bar } from 'react-icons/md'
import { getWeekDateInHumanFormat } from '../../modules/Calendar'

import './styles/PendingTask.css'

const pendingTaskReceived = [
    {
        pendingTaskName: 'Ask for Password Proposal Feedback',
        isPendingTaskCompleted: true
    }, {
        pendingTaskName: 'Learn WebVR & Three.js.',
        isPendingTaskCompleted: false
    }, {
        pendingTaskName: 'Test Pending Task List .',
        isPendingTaskCompleted: true
    },

]

const PendingTaskWidget = () => {

    return <div className="Pending-Task-Content-Container">

        <div className="Pending-Task-Content-Background">

            <div className="Pending-Task-Widget-Bacground-Sphere"></div>
            <div className="Pending-Task-Widget-Bacground-Sphere-2"></div>

        </div>

        <div className="Pending-Task-Content">

            <div className="Pending-Task-Title-Container">

                <p className="Pending-Task-Content-Title-Label">Tareas Pendientes</p>

                <p className="Pending-Task-Calendar-Day-Label">{getWeekDateInHumanFormat(Date.now())}</p>

            </div>

            <div className="Pending-Task-Elements-Container">

                <div className="Pending-Task-State-Container">

                    <p className="Pending-Task-State-Label">Completadas</p>

                    <MdExpandMore color='#ffffff45' size={28} />

                </div>

                <div className="Pending-Task-List-Container-Elements">

                    {

                        // * Displaying complete tasks

                        pendingTaskReceived.map(currentPendingTask => {

                            if (currentPendingTask.isPendingTaskCompleted == true) {

                                return (

                                    <div className="Pending-Task-Element-Box-Complete" key={currentPendingTask.pendingTaskName}>

                                        <div className="Pending-Task-Element-Content">

                                            <div className="Pending-Task-Complete-Indicator"></div>

                                            <p className='Pending-Task-Label'>{currentPendingTask.pendingTaskName}</p>

                                            <input className='Pending-Task-CheckBox-Input' type="checkbox" name="" id="" />

                                        </div>

                                    </div>

                                )

                            }

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

                        pendingTaskReceived.map(currentPendingTask => {

                            if (currentPendingTask.isPendingTaskCompleted == false) {

                                return (

                                    <div className="Pending-Task-Element-Box" key={currentPendingTask.pendingTaskName}>

                                        <div className="Pending-Task-Element-Content">

                                            <p className='Pending-Task-Label'>{currentPendingTask.pendingTaskName}</p>

                                            <input className='Pending-Task-CheckBox-Input' type="checkbox" name="" id="" />

                                        </div>

                                    </div>

                                )

                            }

                        })

                    }


                </div>

            </div>

            <div className="Pending-Task-Controllers-Container">

                <div className="Pending-Task-Controller-Task-Button">

                    <MdMic size={24} />

                </div>

                <div className="Pending-Task-Controller-Text-Input-Container">

                    <input className='Pending-Task-Controller-Text-Input' type="text" placeholder='Enviar Cotizacion...' />

                </div>

                <div className="Pending-Task-Controller-Task-Button">

                    <MdSend size={18} />

                </div>

            </div>

        </div>

    </div>

}

export default PendingTaskWidget