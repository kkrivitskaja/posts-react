import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export function getPostComments(id) {
    return axios
        .get(`${baseUrl}posts/${id}/comments`)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}