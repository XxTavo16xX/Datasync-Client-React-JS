
export const copyToClipboard = (textToCopy) => {

    if (!textToCopy) return

    navigator.clipboard.writeText(textToCopy)

}

export const displayAppNotification = (notificationTitle, notificationDescription) => {

    if (!notificationTitle || !notificationDescription) return

    const notificationWidget = document.getElementById('Nofitication-Widget-Container-ID')
    const notificationTitleLabel = document.getElementById('Notification-Widget-Title-Label')
    const notificationDescriptionLabel = document.getElementById('Notification-Widget-Description-Label')

    notificationTitleLabel.innerText = notificationTitle
    notificationDescriptionLabel.innerText = notificationDescription

    notificationWidget.style.right = '1vw'

    setTimeout(() => { notificationWidget.style.right = '-100%' }, 2500)

}