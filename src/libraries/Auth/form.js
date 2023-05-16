
// * This function will check if the email format match with azAZ09-.azAZ09@azAZ09.azAZ09

export const isEmailValueInFormat = (emailValue) => {

    const emailCustomRegex = /^[a-zA-ZñÑ0-9]+([.-]?[a-zA-ZñÑ0-9]+)*@[a-zA-ZñÑ0-9]+(-[a-zA-ZñÑ0-9]+)*(\.[a-zA-ZñÑ0-9]+(-[a-zA-ZñÑ0-9]+)*)+$/;
    return emailCustomRegex.test(emailValue);

}