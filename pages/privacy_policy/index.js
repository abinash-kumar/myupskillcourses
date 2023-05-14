import React from 'react';
import Link from 'next/link';


const PrivacyPolicyPage = () => {
    return (
        <><Link href="/"><header className="App-header">
            <img src='/upskill.png' className="upskill-logo" alt="upskill-logo" />
        </header></Link >
            <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Privacy Policy for upskill Courses</h1>
                <hr />
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>1. Collection of Personal Information:</h2>
                    <p style={{ fontSize: '16px' }}>We may collect personal information from you, such as your name, email address, contact number, and payment details, when you enroll in our course. This information is used solely for the purpose of course administration, communication, and providing you with the course materials.</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>2. Use of Personal Information:</h2>
                    <p style={{ fontSize: '16px' }}>We use the personal information collected to:</p>
                    <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
                        <li>Process your enrollment and provide access to the course materials.</li>
                        <li>Communicate with you regarding course updates, announcements, and related information.</li>
                        <li>Ensure compliance with our Terms of Service and applicable laws and regulations.</li>
                        <li>Improve and personalize the course experience based on your feedback and preferences.</li>
                        <li>Respond to inquiries, requests, or complaints raised by you.</li>
                    </ul>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>3. Disclosure of Personal Information:</h2>
                    <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
                        <li>We do not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your personal information with trusted service providers who assist us in delivering the course, such as payment processors and email communication platforms. These service providers are bound by confidentiality agreements and are prohibited from using your personal information for any other purpose.</li>
                    </ul>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>4. Third-Party Websites and Links:</h2>
                    <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
                        <li>Our course may contain links to third-party websites or resources. Please note that we are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.
                        </li>
                    </ul>
                </div>


                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>5. Legal Compliance:</h2>
                    <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
                        <li>We may disclose your personal information if required to do so by law or if we believe that such action is necessary to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.
                        </li>
                    </ul>
                </div>


                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>6. Changes to the Privacy Policy:</h2>
                    <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
                        <li>We reserve the right to modify or update this Privacy Policy at any time. Any changes made will be effective immediately upon posting the revised policy. We encourage you to review this policy periodically to stay informed about how we protect your personal information.
                        </li>
                    </ul>
                </div>

                {/* Rest of the privacy policy sections */}

                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>8. Contact Us:</h2>
                    <p style={{ fontSize: '16px' }}>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:myupskillcourses@gmail.com">myupskillcourses@gmail.com</a>.</p>
                    <hr />
                    <small><footer>By enrolling in Upskill courses, you acknowledge that you have read, understood, and agree to the terms and conditions outlined in this Privacy Policy.</footer></small>
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicyPage;
