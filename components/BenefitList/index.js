import React from 'react';
import { Card } from '@mui/material';

const BenefitList = ({ iconSrc, heading, paragraph }) => {
    return (
        <>
            <Card style={{ margin: 'auto' }}>
                <img src={iconSrc} width="90%" style={{ maxWidth: 400 }} height="auto" alt={heading} />
                <h2>{heading}</h2>
                <p style={{ padding: 10 }}>{paragraph}</p>
            </Card>
        </>
    );
}

export default BenefitList;
