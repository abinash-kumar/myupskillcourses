import React from 'react';
import Link from 'next/link';

const RefundPolicyPage = () => {
    return (
        <><Link href="/"><header className="App-header">
            <img src='/upskill.png' className="upskill-logo" alt="upskill-logo" />
        </header></Link>
            <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Refund Policy</h1>
                <hr />
                <p style={{ fontSize: '16px' }}>Thank you for purchasing Upskill Course/Courses. We want to inform you that all sales are final, and we do not provide refunds for the course.</p>

                <p style={{ fontSize: '16px' }}>We believe in the value and quality of our course materials, and we are committed to providing you with a comprehensive learning experience. However, due to the nature of digital products and the instant access provided upon purchase, we cannot offer refunds once you have gained access to the course materials.</p>

                <p style={{ fontSize: '16px' }}>We encourage you to review the course details, testimonials, and any available sample content before making your purchase decision. If you have any questions or concerns about the course, please contact us prior to making a purchase.</p>

                <p style={{ fontSize: '16px' }}>In case of any technical issues or difficulties accessing the course materials, please reach out to our support team at <a href="mailto:myupskillcourses@gmail.com">myupskillcourses@gmail.com</a>. We are here to assist you and resolve any problems you may encounter.</p>

                <p style={{ fontSize: '16px' }}>By enrolling in Upskill Courses, you acknowledge and agree to our refund policy.</p>
            </div>
        </>
    );
}

export default RefundPolicyPage;
