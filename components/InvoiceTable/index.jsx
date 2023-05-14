import React from 'react';

const InvoiceItemList = () => {
    return (
        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ backgroundColor: '#ffb601', textAlign: 'left' }}>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Item</th>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Get best prices negotiation techenique with suppliers and save upto</td>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>₹80,000</td>
                </tr>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Guid on buying essential equipment only will save upto</td>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>₹65,000</td>
                </tr>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>DIY renovations and decor and save upto</td>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>₹45,000</td>
                </tr>
                <tr>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Utilize cost-effective marketing strategies and save upto</td>
                    <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>₹20,000</td>
                </tr>
            </tbody>
            <tfoot>
                <tr style={{ backgroundColor: '#ffb601' }}>
                    <td style={{ textAlign: 'right', padding: '10px' }} colSpan="2"><b>Total Saving upto: ₹2,10,000</b></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default InvoiceItemList;
