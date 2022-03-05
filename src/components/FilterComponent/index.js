import React, { useMemo, useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/userActions';
import { getFilteredPosts } from '../../redux/actions/fileredPostsByUsersIdActions';


export const SearchSelect = (props) => {
    const dispatch = useDispatch();
    //selected users for filtering
    const [selectedValue, setSelectedValue] = useState([]);

    //fetch users data for select dropdown
    const data = useSelector((state) => state.users.users);
    const options = data.map((user) => ({ value: user.id, label: user.name }));
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        dispatch(getFilteredPosts(selectedValue));
    }, [dispatch, selectedValue]);

    const { filteredPosts } = useSelector((state) => state.filteredPosts);
    console.log('filteredPosts', filteredPosts);

    //handle selected users data from select
    const selectHandler = (data) => {
        setSelectedValue(data?.map((item) => item.value));
    };

   

    // const response = axios
    //   .get(urlPaths.filterPostByUsers(selectedValue))
    //   // .then((res) => res.data);
    //   .then((res) => console.log(res.data));

    //cusrom styles for Select
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
                // defaultValue={""}
                isMulti
                isSearchable
                width="10px"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={customStyles}
                // value={selectedValue}
                onChange={selectHandler}
                cacheOptions
            />
        </>
    );
};
