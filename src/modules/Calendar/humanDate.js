
// * This function will return the date in a human format of numberDay, MonthName, numberYear in spanish

const toHumanDate = (timestamp) => {

    if(!timestamp) return '01 de enero de 2023'

    const monthNamesList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const date = new Date ( timestamp * 1000 )

    return date.getDate() + ' de ' + monthNamesList[ date.getMonth() ] + ' de ' + date.getFullYear()

}