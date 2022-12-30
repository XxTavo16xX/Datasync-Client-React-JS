
// * This function will return the date in a human format of numberDay, MonthName, numberYear in spanish

const monthNamesList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const WeekDaysNameList = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export const getDateInHumanFormat = (timestamp) => {

    if(!timestamp) return '01 de enero de 2023'

    const date = new Date ( timestamp * 1000 )

    return date.getDate() + ' de ' + monthNamesList[ date.getMonth() ] + ' de ' + date.getFullYear()

}

export const getWeekDateInHumanFormat = ( timestamp ) => {

    if(!timestamp) return 'Domingo 01 de Enero'

    const date = new Date(timestamp);

    return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });

}