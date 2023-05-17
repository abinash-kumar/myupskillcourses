import React, { useState } from 'react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'What is included in the Gym Entrepreneur\'s Blueprint Course?',
            answer:
                'The course includes a 45 min video tutorials where we guide you through the process of opening a gym in India. Additionally, you will receive a downloadable PDF guide that provides step-by-step instructions and valuable insights on gym setup, equipment selection, marketing strategies, and more.',
        },
        {
            question: 'How can I access the course videos?',
            answer:
                'Upon purchase, you will receive link to our online learning platform, where you can access the course videos. You can watch the videos at your own pace and revisit them as many times as you need.',
        },
        {
            question: 'Can I download the course videos?',
            answer:
                'Yes, you will have the option to download the course videos for offline viewing. This way, you can access the content even when you\'re not connected to the internet. Please note that the downloadable videos are for personal use only and should not be shared or distributed.',
        },
        {
            question: 'Is the PDF guide comprehensive?',
            answer:
                'Absolutely! The PDF guide provided with the course is a comprehensive resource that covers various aspects of opening a gym in India. It includes detailed step-by-step instructions, practical tips, and expert insights to help you navigate the entire process with confidence.',
        },
        // Add more FAQs here
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}></h2>
            <p style={{ marginLeft: 40, marginRight: 40, fontSize: 25, fontWeight: 600, }}>
                Frequently Asked  <span style={{ color: '#6c3ad3' }}>Questions</span>
            </p>

            {faqData.map((faq, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: '20px',
                        border: '1px solid #e8e8e8',
                        borderRadius: '4px',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        onClick={() => togglePanel(index)}
                        style={{
                            backgroundColor: '#f5f5f5',
                            padding: '15px 20px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #e8e8e8',
                        }}
                    >
                        <h3 style={{ fontSize: '20px', margin: 0 }}>{faq.question}</h3>
                        <span style={{ fontSize: '24px', transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                            &#9662;
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div style={{ padding: '20px', backgroundColor: '#fff' }}>
                            <p style={{ fontSize: '16px', margin: 0 }}>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQSection;
