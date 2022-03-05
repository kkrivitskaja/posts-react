export const urlPaths = generateUrlPath();

function generateUrlPath() {
    return {
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        getAllPosts() {
            return new URL('posts', this.baseUrl);
        },
        getAllUsers() {
            return new URL('users', this.baseUrl);
        },
        getAllComments() {
            return new URL('comments', this.baseUrl);
        },
        filterPostByUsers(userIds) {
            const tmpUrl = this.getAllPosts();
            userIds?.forEach((userID) => {
                tmpUrl.searchParams.append('userId', userID);
            });
            return tmpUrl;
        },
        getPost(postId) {
            const tmpUrl = this.getAllPosts();
            tmpUrl.searchParams.append('postId', postId);
            return tmpUrl;
        },
    };
}