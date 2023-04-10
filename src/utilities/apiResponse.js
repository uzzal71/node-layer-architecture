export const apiSuccess = (response) => ({
    type: 'API_SUCCESS',
    payload: response,
});

export const apiFailed = (response) => ({
    type: 'API_FAILED',
    payload: response,
});

export default {};
