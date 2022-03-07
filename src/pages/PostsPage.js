import React from 'react';

import { SearchSelect } from '../components/FilterComponent/index';
import { PostsListView } from '../components/PostsComponents/PostsListViewComponent';

export const Posts = () => {
    return (
        <>
            <SearchSelect />
            <PostsListView />
        </>
    );
};
