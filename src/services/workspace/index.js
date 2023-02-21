const APIBASEURL = 'http://localhost:2279/datasync/'

export const createWorkspaceWithConfig = (userToken, workspaceName, workspaceMembers) => {

    return new Promise(async resolve => {

        if(!userToken) return resolve({error:true, message: 'userToken Missing'})
        if(!workspaceName) return resolve({error:true, message: 'workspaceName Missing'})
        if(!workspaceMembers) return resolve({error:true, message: 'workspaceMembers Missing'})

        const requestBody = {
            userToken: userToken,
            workspaceName: workspaceName,
            workspaceMembersEmailList: workspaceMembers
        }

        const rawResponse = await fetch(APIBASEURL + 'api/v1/workspace/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        resolve(await rawResponse.json())

    })

}