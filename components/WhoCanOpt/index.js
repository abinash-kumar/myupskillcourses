import React from 'react';

const ProfessionList = () => {
    const professions = [
        { name: 'Fitness enthusiasts', color: '#800000' },
        { name: 'Aspiring gym owners', color: '#006400' },
        { name: 'Personal trainers', color: '#000080' },
        { name: 'Fitness professionals', color: '#800080' },
        { name: 'Existing gym managers or staff', color: '#808000' },
        { name: 'Business professionals', color: '#00008B' },
        { name: 'Fitness entrepreneurs', color: '#8B4513' },
        { name: 'Sports enthusiasts', color: '#4B0082' },
        { name: 'Health and wellness consultants', color: '#006400' },
        { name: 'Individuals seeking a career change', color: '#8B0000' },
        { name: 'Physical education teachers', color: '#000080' },
        { name: 'Rehabilitation specialists', color: '#008080' },
        { name: 'Wellness professionals', color: '#800000' },
        { name: 'Corporate wellness coordinators', color: '#8B2500' },
        { name: 'Fitness influencers', color: '#2F4F4F' },
        { name: 'Athletes transitioning from professional sports', color: '#556B2F' },
        { name: 'Retired military or law enforcement personnel', color: '#333333' },
        { name: 'Community leaders', color: '#800000' },
        { name: 'Individuals with unique fitness concepts', color: '#8B0000' }
    ];


    return (
        <div style={styles.container}>
            <p style={{ marginLeft: 40, marginRight: 40, fontSize: 25, fontWeight: 600, }}>
                <span style={{ color: '#6c3ad3' }}>Who'S</span> this <span style={{ color: '#6c3ad3' }}>WORKSHOP</span> for?
            </p>
            <ul style={styles.list}>
                {professions.map((profession, index) => (
                    <li key={index} style={{ ...styles.item, backgroundColor: profession.color }}>
                        {profession.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '20px auto',
    },
    heading: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
        textTransform: 'uppercase',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    item: {
        borderRadius: '8px',
        color: '#fff',
        padding: '12px 24px',
        margin: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
    },
};

export default ProfessionList;
