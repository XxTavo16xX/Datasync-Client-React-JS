import { MdMic, MdSend } from 'react-icons/md'
import './styles/PendingTask.css'

function PendingTasksContainer() {

    return <div className="bottomSectionPendingTaskContainer">

        <div className="bottomContentContainerMargin">

            <p>Tareas Pendientes</p>

            <div className="taskListContainer"></div>

            <div className="taskInputContainer">

                <div className="taskInputButton">

                    <MdMic size={18} />

                </div>

                <div className="taskInputInputContainer">

                    <input type="text" placeholder='Enviar correo a ...'/>

                </div>

                <div className="taskInputButton">

                    <MdSend size={18} />

                </div>


            </div>

        </div>

    </div>

}

export default PendingTasksContainer