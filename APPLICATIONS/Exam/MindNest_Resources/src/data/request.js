import { getUserData, clearUserData } from "../utils/utils.js";

const hostname = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if(data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    // If userData exists, add the access token to the headers
    if(userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    const response = await fetch(hostname + url, options);

    if(!response.ok) {
        const error = await response.json();

        if (error.message === 'Invalid access token') {
            clearUserData();
        }
        
        throw new Error(error.message);
    }

    if(response.status === 204) {
        return response;
    } else {
        return response.json();
    }
}

export const get = (url) => request('GET', url);
export const post = (url, data) => request('POST', url, data);
export const del = (url) => request('DELETE', url);
export const put = (url, data) => request('PUT', url, data);