exports.getAuthHeader = function (ssoToken) {
    if (ssoToken !== undefined) {
        return ({
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${ssoToken}`,
                'Content-Type': 'application/json',
            },
        });
    } else {
        return ({
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }
}
