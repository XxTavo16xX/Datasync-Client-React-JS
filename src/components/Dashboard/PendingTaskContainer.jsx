import { MdMic, MdSend } from 'react-icons/md'
import './styles/PendingTask.css'

const pendingTaskReceived = [
    {
        pendingTaskName: 'Enviar Factura a ...',
        isPendingTaskCompleted: true
    },{
        pendingTaskName: 'Enviar cotizacion a ...',
        isPendingTaskCompleted: false
    },

]

function PendingTasksContainer() {

    return <div className="Pending-Task-Content-Container">

        <div className="Pending-Task-Content-Margin">

            <p className='Pending-Task-Content-Title-Label'>Tareas Pendientes</p>

            <div className="Pending-Task-List-Container">

                {pendingTaskReceived.length == 0 ? <p className="Pending-Task-List-Empty-Message">Aun no has agregado tareas pendientes.</p> : null}

                {

                    pendingTaskReceived.map(({pendingTaskName, isPendingTaskCompleted}) => {

                        return <div className="Pending-Task-Container" key={pendingTaskName}>

                            <div className="Pending-Task-Action-Input-Container">

                                <input className='Pending-Task-Action-Input-Container-CheckBox' type="checkbox" name="" id={pendingTaskName} />

                            </div>

                            <p className="Pending-Task-Name-Label">{pendingTaskName}</p>

                        </div>

                    })

                }

            </div>

            <div className="Pending-Task-Input-Container">

                <button className="Pending-Task-Action-Button">

                    <MdMic size={18} color={'#000000'} />

                </button>

                <div className="Pending-Task-Input-Container-Bar">

                    <input className='Pending-Task-Input-Container-Input' type="text" placeholder='Enviar correo a ...' />

                </div>

                <button className="Pending-Task-Action-Button">

                    <MdSend size={18} color={'#000000'} />

                </button>


            </div>

        </div>

    </div>

}

export default PendingTasksContainer