
export const copyToClipboard = (textToCopy) => {

    if(!textToCopy) return

    navigator.clipboard.writeText(textToCopy)

}

export const displayAppNotification = (notificationMessage, ) => {

    if(!notificationMessage) return

    const notificationWidget = document.getElementById('Nofitication-Widget-Container-ID')
    const notificationMessageLabel = document.getElementById('Notification-Widget-Message-Label-ID')

    notificationMessageLabel.innerText = notificationMessage

    notificationWidget.style.display = 'flex'

    setTimeout(() => { notificationWidget.style.transform = 'translateX(0px)' }, 200)

    setTimeout(() => { notificationWidget.style.transform = 'translateX(250px)' }, 2500)

    setTimeout(() => { notificationWidget.style.display = 'none' }, 2700)

}