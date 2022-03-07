import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { getUsers } from '../../redux/actions/userActions';
import { getFilteredPosts } from '../../redux/actions/filterPostsByUsersIdActions';
import { useLocalStorage } from '../../base/useLocalStorage';

export const SearchSelect = () => {
    const dispatch = useDispatch();
    let isCacheLoaded = false;
    //selected users for filtering with custom hook useLocalStorage()
    const [selectedUsers, setSelectedUsers] = useLocalStorage('selected-users', []);

    //fetch users data for select dropdown
    const data = useSelector((state) => state.users.users);
    const options = data.map((user) => ({ value: user.id, label: user.name }));

    useEffect(() => {
        dispatch(getUsers());
        isCacheLoaded = true;
    }, []);

    useEffect(() => {
        if (!isCacheLoaded) {
            isCacheLoaded = false;
            dispatch(getFilteredPosts(selectedUsers?.map((item) => item.value)));
        }
    }, [dispatch, selectedUsers]);

    //handle selected users data from select
    const selectHandler = (data) => {
        setSelectedUsers(data);
    };

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
                onChange={selectHandler}
                value={selectedUsers}
                cacheOptions
            />
        </>
    );
};
