import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';


export const PageNotFound = () => {
    const {pathname} = useLocation()
    console.log('pathname', pathname);

    return (
        <>
            {/* <h3>
                No match for <code>{pathname}</code>
            </h3> */}
            <div className={styles.msg} >
                Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                the first place?
                <p>
                    Let's go <Link to={`/`}>Main page</Link>  and try from there.
                </p>
            </div>
        </>
    );
};
