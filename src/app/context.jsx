
export const saveLocalContext = ( accountContext, defaultWorkspaceContext, userToken, userRefreshToken ) => {

    localStorage.setItem('ds-session-token', JSON.stringify( userToken))
    localStorage.setItem('ds-session-Rtoken', JSON.stringify( userRefreshToken ))
    localStorage.setItem('ds-account-contenxt', JSON.stringify(accountContext))
    localStorage.setItem('ds-workspace-contenxt', JSON.stringify(defaultWorkspaceContext))

    return true

}