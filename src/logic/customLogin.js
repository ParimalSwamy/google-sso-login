export const login = async (username, password) => {
    // Simulate an API call for user authentication
    const fakeApiResponse = {
        success: username === 'user' && password === 'password',
        token: 'fake-jwt-token'
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fakeApiResponse.success) {
                resolve(fakeApiResponse.token);
            } else {
                reject('Invalid username or password');
            }
        }, 1000);
    });
};

export const logout = () => {
    // Clear user session or token
    localStorage.removeItem('userToken');
};

export const isAuthenticated = () => {
    // Check if the user is authenticated
    return !!localStorage.getItem('userToken');
};