import React from 'react';
import { useLocation } from 'react-router-dom';

export const PageNotFound = () => {
    const {pathname} = useLocation()
    console.log('pathname', pathname);

    return (
        <>
            <h3>
                No match for <code>{pathname}</code>
            </h3>
        </>
    );
};
