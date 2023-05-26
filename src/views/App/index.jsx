
// * Dependencies Required

import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// * Context Required

import { App_Context } from '../../app/contexts/app_context'

// * Componentes Required

import TopNavBar from '../../components/app/TopNavBar'
import SideNavBar from '../../components/app/SideNavBar'
import WorkspaceNodeCreator from '../../components/app/WorkspaceCreator'

// * Views Required

import InDevelopmentView from '../InDevelopment'
import Dashboard_App_View from '../Dashboard'

// * Styles Required

import './index.css'


const App_view = () => {

    const { context, setContext } = useContext(App_Context)
    const navigate = useNavigate();

    // * Components States

    const [currentAppView, setAppView] = useState('dashboard')
    const [currentAppViewLabel, setAppViewLabel] = useState('Dashboard')

    const [WorkspaceNodeCreatorState, setWorkspaceNodeCreatorState] = useState(false)
    const [ContextMenuState, setContextMenuState] = useState(false)

    useEffect(() => {

        if (context.session.token == '') { navigate('/') }

    }, [])

    // * Workspace Nodes Formating

    const workspaceNodesConnections = [...context.user.workspaceNodes]
    workspaceNodesConnections.push({ actionLabel: 'Crear nuevo Workspace', customAction: () => { setWorkspaceNodeCreatorState(!WorkspaceNodeCreatorState) } })
    workspaceNodesConnections.push({ actionLabel: 'Unirme a Workspace' })

    // * Controllers

    const handleWorkspacenodeSwitch = () => {

        console.log('handleWorkspacenodeSwitch at AppView');

    }

    return (

        <div className="App-Page-Container">

            <TopNavBar userWorkspaceNodeConnections={workspaceNodesConnections} updateWorkspaceNodeState={handleWorkspacenodeSwitch} AppViewLabel={currentAppViewLabel} userProfilePicURL={context.user.profilePhotoURL} userDisplayName={context.user.displayName} />
            <SideNavBar updateAppViewState={setAppView} updateAppViewLabel={setAppViewLabel} />

            {WorkspaceNodeCreatorState === true ? <WorkspaceNodeCreator updateWorkspaceNodeState={setWorkspaceNodeCreatorState} contextMenuStates={{ ContextMenuState, setContextMenuState }} ownerData={context.user} /> : null}

            <div className="App-Page-Display">

                <div className="App-Page-Display-Margin">

                    {currentAppView === 'dashboard' ? <Dashboard_App_View /> : null}
                    {currentAppView === 'chat' ? <InDevelopmentView /> : null}
                    {currentAppView === 'calendar' ? <InDevelopmentView /> : null}
                    {currentAppView === 'databases' ? <InDevelopmentView /> : null}
                    {currentAppView === 'cloud' ? <InDevelopmentView /> : null}
                    {currentAppView === 'safetyBox' ? <InDevelopmentView /> : null}
                    {currentAppView === 'backups' ? <InDevelopmentView /> : null}
                    {currentAppView === 'pendingTasks' ? <InDevelopmentView /> : null}
                    {currentAppView === 'support' ? <InDevelopmentView /> : null}
                    {currentAppView === 'inDev' ? <InDevelopmentView /> : null}

                </div>

            </div>

        </div>

    )

}

export default App_view