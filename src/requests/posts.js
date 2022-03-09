import axios from "axios";


const baseUrl = 'https://jsonplaceholder.typicode.com/'

export function getAllPosts() {
    return axios
        .get(`${baseUrl}posts`)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

export function getPostById(id) {
    return axios
        .get(`${baseUrl}posts/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function getUrlPostsByUsers(userIds) {
    const tmpUrl = new URL('posts', baseUrl);
    userIds?.forEach((id) => {
        tmpUrl.searchParams.append('userId', id);
    });
     return tmpUrl;
}

export function getPostsByUsersId(id) {
    return axios
        .get(getUrlPostsByUsers(id))
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}