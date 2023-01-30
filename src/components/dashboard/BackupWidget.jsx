
import { getCurrentDateInHumanFormat } from '../../lib/Calendar'

import './styles/BackupHistorialWidget.css'

const backupData = [

    {
        backupType: "Respaldo Automatico",
        backupMessage: "La copia de seguridad se ha completado correctamente.",
        backupDate: 1670577300,
        backupFiles: "Elementos personalizados"

    }, {
        backupType: "Respaldo Automatico",
        backupMessage: "La copia de seguridad se ha completado correctamente.",
        backupDate: 1669972500,
        backupFiles: "Elementos personalizados"

    }, {
        backupType: "Respaldo Automatico",
        backupMessage: "La copia de seguridad se ha completado correctamente.",
        backupDate: 1669367700,
        backupFiles: "Elementos personalizados"

    }, {
        backupType: "Respaldo Automatico",
        backupMessage: "La copia de seguridad se ha completado correctamente.",
        backupDate: 1668762900,
        backupFiles: "Elementos personalizados"

    }

]

const BackupWidget = () => {

    return <div className="Top-Container-Backup-Historial-Container">

        <div className="Top-Container-Backup-Historial-Margin">

            <div className="Top-Container-Backup-Historial-Top">

                <p className="Top-Container-Backup-Historial-Top-Title-Label">Historial de respaldos.</p>

                <button className="Top-Container-Backup-Now-Button">

                    <p className="Top-Container-Backup-Now-Button-Label">Respaldar Ahora</p>

                </button>

            </div>

            <div className="Top-Container-Backup-Historial-Content-Container">

                <div className="Top-Container-Backup-Historial-Content">

                    {

                        // * Populating the Backup History with the data Recived by Datasync-API

                        backupData.map(({ backupType, backupMessage, backupDate, backupFiles }) => {

                            return <div className="Top-Container-Backup-Historial-Snippet" key={backupDate}>

                                <div className="Top-Container-Backup-Historial-Snippet-Margin">

                                    <span className='Top-Container-Backup-Historial-Snippet-Title'>{backupMessage}</span>

                                    <div className="Top-Container-Backup-Historial-Bottom-Container">

                                        <p className='Top-Container-Backup-Historial-Bottom-Labels'>{getCurrentDateInHumanFormat(backupDate)}</p>
                                        <p className='Top-Container-Backup-Historial-Bottom-Labels'>{backupFiles}</p>

                                    </div>

                                </div>

                            </div>

                        })

                    }

                </div>

            </div>



        </div>

    </div>


}

export default BackupWidget