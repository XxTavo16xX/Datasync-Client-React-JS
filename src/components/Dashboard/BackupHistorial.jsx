
import './styles/BackupHistorialContainer.css'

const backupData = [

    {
        backupType: "Respaldo Automatico",
        backupDate: 1670577300,
        backupFiles: "Personalizado"

    }, {
        backupType: "Respaldo Automatico",
        backupDate: 1669972500,
        backupFiles: "Personalizado"

    }, {
        backupType: "Respaldo Automatico",
        backupDate: 1669367700,
        backupFiles: "Personalizado"

    }, {
        backupType: "Respaldo Automatico",
        backupDate: 1668762900,
        backupFiles: "Personalizado"

    },

]

const BackUpHistorial = () => {

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

                    <div className="Top-Container-Backup-Historial-Snippet">

                        <span className='Top-Container-Backup-Historial-Snippet-Title'>La copia de seguridad se ha completado correctamente.</span>

                        <div className="Top-Container-Backup-Historial-Bottom-Container">

                            <p className='Top-Container-Backup-Historial-Bottom-Labels'>16 de diciembre 2022 </p>
                            <p className='Top-Container-Backup-Historial-Bottom-Labels'>Elementos personalizados</p>

                        </div>

                    </div>

                </div>

            </div>



        </div>

    </div>


}

export default BackUpHistorial