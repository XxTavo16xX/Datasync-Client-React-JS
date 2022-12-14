import { MdMic, MdSend } from 'react-icons/md'
import './styles/PendingTask.css'

function PendingTasksContainer() {

    return <div className="Pending-Task-Content-Container">

        <div className="Pending-Task-Content-Margin">

            <p className='Pending-Task-Content-Title-Label'>Tareas Pendientes</p>

            <div className="Pending-Task-List-Container"></div>

            <div className="Pending-Task-Input-Container">

                <button className="Pending-Task-Action-Button">

                    <MdMic size={18} color={'#000000'} />

                </button>

                <div className="Pending-Task-Input-Container-Bar">

                    <input className='Pending-Task-Input-Container-Input' type="text" placeholder='Enviar correo a ...'/>

                </div>

                <button className="Pending-Task-Action-Button">

                    <MdSend size={18} color={'#000000'} />

                </button>


            </div>

        </div>

    </div>

}

export default PendingTasksContainer