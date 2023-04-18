import React from 'react';
import { Card } from '@mui/material';

const BenefitList = ({ iconSrc, heading, paragraph }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }}>
                <img src={iconSrc} width="90%" height="auto" alt={heading} />
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </Card>
            <br />
            <br />
        </>
    );
}

export default BenefitList;
