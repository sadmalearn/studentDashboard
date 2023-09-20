export const ApiProfile = {
    Dev: 'http://localhost:3000/api/', 
    Test: 'http://18.216.19.237:8080/vitesco-test-automation-api/api/v1/',
    UAT: '',
    Prod: ''
}

export const getActivProfile = (profile) => {
    switch (profile) {
        case 'Dev': return (ApiProfile.Dev);
        case 'Test': return (ApiProfile.Test);
        case 'UAT': return (ApiProfile.UAT);
        case 'Prod': return (ApiProfile.Prod);
        default: return (ApiProfile.Dev);
    }
}
