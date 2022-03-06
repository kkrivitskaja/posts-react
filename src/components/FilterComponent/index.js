import React, { useMemo, useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/userActions';
import { getFilteredPosts } from '../../redux/actions/filterPostsByUsersIdActions';
import { useLocalStorage } from '../../base/useLocalStorage';

export const SearchSelect = (props) => {
    const dispatch = useDispatch();
  

    //selected users for filtering

    const [selectedUsers, setSelectedUsers] = useLocalStorage('selected-users', '');

    //fetch users data for select dropdown
    const data = useSelector((state) => state.users.users);
    const options = data.map((user) => ({ value: user.id, label: user.name }));


    let isCacheLoaded = false;
    useEffect(() => {
        dispatch(getUsers());/*
        const data = JSON.parse(localStorage.getItem('selected-users'));
        
        if (data && typeof data != 'undefined') {
            setSelectedUsers(data);
            setSelectedValue(data.map((item) => item.value));
            isCacheLoaded = true;
        }*/
    }, []);

    useEffect(() => {
        /*if (!isCacheLoaded) { */
        dispatch(getFilteredPosts(selectedUsers?.map((item) => item.value)));
        /* isCacheLoaded = false;
    }*/
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
                width: 700,
            }),
            container: (provided) => ({
                ...provided,
                width: 700,
                marginTop: 30,
                marginBottom: 50,
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
