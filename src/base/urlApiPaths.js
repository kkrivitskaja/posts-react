export const urlPaths = {
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    getAllPosts() {
        return new URL('posts', this.baseUrl);
    },
    getAllUsers() {
        return new URL('users', this.baseUrl);
    },
    getCommentsByPostId(postId) {
        const tmpUrl = this.getPost(postId);
        tmpUrl.pathname += '/comments';
        return tmpUrl;
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
        tmpUrl.pathname += `/${postId}`;
        return tmpUrl;
    },
    getUser(userId) {
        const tmpUrl = this.getAllUsers();
        tmpUrl.pathname += `/${userId}`;
        return tmpUrl;
    },
};
