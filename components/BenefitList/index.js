import React from 'react';
import { Card } from '@mui/material';

const BenefitList = ({ iconSrc, heading, paragraph }) => {
    return (
        <>
            <Card style={{ margin: 'auto', color: '#6c3ad3', borderRadius: 15, paddingLeft: 10, margin: 10, display: 'grid', fontSize: 15, fontWeight: 600, gridTemplateColumns: '40px 1fr' }}>
                <div className="flex">
                    <img src={iconSrc} width="90%" style={{ maxWidth: 400 }} height="auto" alt={heading} />
                </div>
                <span style={{ padding: '20px 10px', textAlign: 'left' }}>{heading}</span>
                {/* <p style={{ padding: 10 }}>{paragraph}</p> */}
            </Card>
        </>
    );
}

export default BenefitList;
