import React from 'react';
import './TermsAndConditionsPage.css';

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms & Conditions – Srajan Vastu</h1>
          <p className="terms-intro">
            These Terms & Conditions ("Terms") govern the use of the website www.srajanvastu.com ("Website") and all services provided by Srajan Vastu ("we," "our," or "us"). By accessing, browsing, or making payments through this Website, you ("User," "Visitor," or "You") acknowledge that you have read, understood, and agreed to abide by these Terms.
          </p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By making a payment to Srajan Vastu through an online gateway (e.g., Paytm, PhonePe, Net Banking, Debit/Credit Cards) or by any other means, you are deemed to have accepted these Terms. Please read them carefully before proceeding.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Use of Website Content</h2>
            <p>
              All logos, trademarks, names, text, articles, blogs, graphics, and other material available on this Website are the intellectual property of Srajan Vastu or its licensed associates.
            </p>
            <p>
              You may not copy, modify, sell, reproduce, distribute, display, or use any content for public or commercial purposes without prior written consent from the Managing Director of Srajan Vastu.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Online Payments</h2>
            <ul>
              <li>Users are responsible for ensuring accurate payment details when making transactions through online gateways.</li>
              <li>Srajan Vastu does not store or access your banking/card details. Payments are securely processed by third-party providers.</li>
              <li>It is your responsibility to keep a copy of the transaction record for future reference.</li>
              <li>Payments are considered complete only after receipt in Srajan Vastu's bank account. If funds are debited from your account but not credited to ours, we cannot be held liable.</li>
              <li>We reserve the right to refuse services in cases of payment defaults or fraudulent transactions.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Disclaimer & Limitation of Liability</h2>
            <p>
              Services offered by Srajan Vastu are based on ancient knowledge, research, and expert interpretation in Vastu, Numerology, Pronology, and Astrology. They are intended for guidance only and do not guarantee specific outcomes.
            </p>
            <p>Srajan Vastu shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages.</li>
              <li>Delays, interruptions, unauthorized access, or data loss while using online services.</li>
              <li>Losses arising from reliance on consultation reports, remedies, or recommendations.</li>
            </ul>
            <p>Our services are not a substitute for medical, legal, or financial advice. Please consult a qualified professional where required.</p>
          </section>

          <section className="terms-section">
            <h2>5. Security</h2>
            <ul>
              <li>All online payments are encrypted using secure technology.</li>
              <li>Srajan Vastu is not responsible for user negligence, such as sharing login/payment details or failure to protect personal information.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>6. Warranty Disclaimer</h2>
            <p>
              No express or implied warranties are provided regarding the accuracy, reliability, or effectiveness of our services or Website.
            </p>
            <p>
              Information is provided to the best of our knowledge and research, but outcomes may vary depending on individual circumstances.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Consultation-Specific Terms</h2>
            <ul>
              <li>Fees charged are solely for analysis, consultation, and guidance. They do not include technical documentation, evaluations of other consultants' opinions, or guaranteed results.</li>
              <li>Reports and recommendations are suggestive in nature, not absolute. Reliance on such information is at the User's sole discretion.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>8. Variations to Terms</h2>
            <p>
              We reserve the right to modify, amend, or withdraw these Terms at any time without prior notice. The latest version published on this Website will apply.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Grievance Redressal</h2>
            <p>For concerns or complaints, please contact:</p>
            <div className="contact-details">
              <p><strong>Mrs. Seema Sharma</strong></p>
              <p>📞 +91 9810681928 (12:00 PM – 05:00 PM IST)</p>
              <p>📧 connect@srajanvastu.com</p>
            </div>
            <p>We aim to address all genuine concerns within 7 working days.</p>
          </section>

          <section className="terms-section">
            <h2>10. Dispute Resolution & Governing Law</h2>
            <ul>
              <li>Any disputes shall be referred to a sole arbitrator appointed by Srajan Vastu under the Arbitration & Conciliation Act, 1996.</li>
              <li>The venue of arbitration shall be Gurgaon, India.</li>
              <li>These Terms are governed by the laws of India, and courts in Gurgaon shall have exclusive jurisdiction.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
