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
        getCommentsByPostId(postId) {
            return new URL('comments', this.getPost(postId));
        },
        filterPostByUsers(userIds) {
            const tmpUrl = this.getAllPosts();
            userIds?.forEach((userID) => {
                tmpUrl.searchParams.append('userId', userID);
            });
            return tmpUrl;
        },
        getPost(postId) {
            return new URL(postId, this.getAllPosts());
        },
    };
}