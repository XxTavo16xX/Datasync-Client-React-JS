const APIBASEURL = 'http://localhost:2279/datasync/'

export const createDatabaseNodeRequest = (userToken, workspaceID, databaseName, databaseMembersList, databaseContentType, databaseContentSchema, databaseTableTitles, databaseTableSchemaLinkForRows) => {

    return new Promise(async resolve => {

        if (!userToken) return resolve({ error: true, message: 'userToken Missing' })
        if (!databaseName) return resolve({ error: true, message: 'databaseName Missing' })
        if (!databaseMembersList) return resolve({ error: true, message: 'databaseMembersList Missing' })

        const requestBody = {
            userToken: userToken,
            seedOrigin: workspaceID,
            databaseName: databaseName,
            databaseMembersList: databaseMembersList,
            contentType: databaseContentType,
            contentEntryExample: databaseContentSchema,
            contentTableColumnsTitlesList: databaseTableTitles,
            contentTableRowsEntrysSchemaReferenceList: databaseTableSchemaLinkForRows,
            contentDocPreviewSchema: {}
        }

        const rawResponse = await fetch(APIBASEURL + 'api/v1/database/create', {
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

export const getDatabaseNodeContent = (userToken, workspaceID, databaseSeed) => {

    return new Promise(async resolve => {

        if (!userToken) return resolve({ error: true, message: 'userToken Missing' })
        if (!workspaceID) return resolve({ error: true, message: 'workspaceID Missing' })
        if (!databaseSeed) return resolve({ error: true, message: 'databaseSeed Missing' })

        const requestBody = {
            userToken: userToken,
            workspaceID: workspaceID,
            databaseNodeSeed: databaseSeed,
            contentToSave: {}
        }

        const rawResponse = await fetch(APIBASEURL + 'api/v1/database/getContent', {
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

export const getDatabaseNodeData = (userToken, seedOrigin, seed) => {

    return new Promise(async resolve => {

        if (!userToken) return resolve({ error: true, message: 'userToken Missing' })
        if (!seedOrigin) return resolve({ error: true, message: 'workspaceID Missing' })
        if (!seed) return resolve({ error: true, message: 'databaseSeed Missing' })

        const requestBody = {
            userToken: userToken,
            seedOrigin: seedOrigin,
            databaseNodeSeed: seed
        }

        const rawResponse = await fetch(APIBASEURL + 'api/v1/database/get/databaseNode', {
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