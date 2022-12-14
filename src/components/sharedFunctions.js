
export const getHumanDateFromTimestamp = (timeStamp) => {

    const humanMonthsList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const date = new Date(timeStamp * 1000)
    return date.getDate() + ' de ' + humanMonthsList[date.getMonth()] + ' de ' + date.getFullYear()

}

