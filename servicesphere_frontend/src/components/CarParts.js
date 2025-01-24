import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function CarPartsFinder({ signedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!signedIn) {
            navigate('/buy-parts');
        }
    }, [signedIn, navigate]);

    return (
        <>
            {signedIn && (
                <div>
                    <Header />
                    <h1>Welcome to the Car Parts Finder!</h1>
                </div>
            )}
        </>
    );
}

export default CarPartsFinder;
