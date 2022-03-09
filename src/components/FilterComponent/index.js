import React, { useMemo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import { useLocalStorage } from '../../base/useLocalStorage';
import { getPostsByUsersId } from '../../requests/posts';

import { PostsListView } from '../PostsComponents/PostsListView';


export const SearchSelect = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //selected users for filtering with custom hook useLocalStorage()
    const [selectedUsers, setSelectedUsers] = useLocalStorage('selected-users', []);

    //fetch users data for select dropdown
    const data = useSelector((state) => state.users.users);
    const options = data.map((user) => ({ value: user.id, label: user.name }));

    //fetch posts by selected users data
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsByUsersId(selectedUsers?.map((item) => item.value))
            .then((res) => {
                setError(null);
                setPosts(res);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [selectedUsers]);

    //custom styles for Select
    const customStyles = useMemo(
        () => ({
            option: (provided, state) => ({
                ...provided,
                border: '1px solid rgba(0, 0, 0, 0.35)',
                color: 'rgba(0,0,0,1)',

                opacity: 1,
                padding: 20,
            }),
            control: (provided) => ({
                ...provided,
                maxWidth: 600,
            }),
            container: (provided) => ({
                ...provided,
                maxWidth: 600,
                marginTop: 30,
                marginBottom: 50,
                boxShadow: 'rgba(151, 149, 158, 0.35) 0px 5px 15px;',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 5,
            }),
            singleValue: (provided, state) => ({
                ...provided,
                color: state.data.color,
            }),
        }),
        []
    );

    return (
        <>
            <Select
                defaultValue={selectedUsers}
                isMulti
                isSearchable
                width="10px"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={customStyles}
                onChange={setSelectedUsers}
                value={selectedUsers}
                cacheOptions
            />
            {<PostsListView filterData={posts} error={error} isLoading={isLoading} />}
        </>
    );
};
