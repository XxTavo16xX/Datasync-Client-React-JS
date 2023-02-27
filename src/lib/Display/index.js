
export const convertToDisplayNumber = (numberToDisplay) => {

    if (!numberToDisplay) return '00'

    const numStr = numberToDisplay.toString() || numberToDisplay

    if (numStr.length == 1) return '0' + numStr

    return numStr

}

export const formatToDisplayNumber = (amount) => {

    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


}