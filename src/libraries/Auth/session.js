
export const getUserSession = () => {

    const userToken = localStorage.getItem('ds-session-token')

    const currentLocation = window.location.pathname

    if (currentLocation == '/') {

        if (userToken) return window.location.href = '/app'

    }else if (currentLocation == '/app') {

        if (!userToken) return window.location.href = '/';

    }

}