
// * This function will return the date in a human format of numberDay, MonthName, numberYear in spanish

const monthNamesList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const getDateInHumanFormatByTimestamp = (timestamp) => {

    if (!timestamp) return '01 de enero de 2023'

    const timestampLength = timestamp.toString().length

    const date = new Date(timestampLength === 13 ? timestamp : timestamp * 1000)

    return date.getDate() + ' de ' + monthNamesList[date.getMonth()] + ' de ' + date.getFullYear()

}

export const getDateByTimestamp = (timestamp) => {

    if (!timestamp) return '01/01/2023'

    const timestampLength = timestamp.toString().length

    const date = new Date(timestampLength === 13 ? timestamp : timestamp * 1000)

    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

}


export const getCurrentDateInHumanFormat = () => {

    const date = new Date(Date.now())

    return date.getDate() + ' de ' + monthNamesList[date.getMonth()] + ' de ' + date.getFullYear()

}

export const getCurrenteDate = () => {

    const date = new Date(Date.now())

    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export const getMonthAndYearInHumandFormat = () => {

    const date = new Date(Date.now())

    return monthNamesList[date.getMonth()] + ' de ' + date.getFullYear()

}

export const getWeekDateInHumanFormat = (timestamp) => {

    if (!timestamp) return 'Domingo 01 de Enero'

    const date = new Date(timestamp);

    return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });

}

export const getWeekDayNameByDate = (date) => {

    if (!date) return 'Domingo 01 de Enero'

    return date.toLocaleDateString('es-ES', { weekday: 'long' });

}

export const getDaysInCurrentMonth = (year, month) => {

    const currentDate = new Date(year, month, 1);
    const days = [];
    while (currentDate.getMonth() === month) {
        days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;

}