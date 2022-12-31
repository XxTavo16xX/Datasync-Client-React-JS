
export const convertToDisplayNumber = ( numberToDisplay ) => {

    if(!numberToDisplay) return '00'

    const numStr = numberToDisplay.toString() || numberToDisplay

    if(numStr.length == 1) return '0' + numStr

    return numStr

}