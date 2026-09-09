import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Taste with Lauds | Food Blog</title>
        <meta
          name="description"
          content="Contact Taste with Lauds for questions, feedback, food stories, and inquiries. Connect through email and social media."
        />
      </Helmet>

      <div className="page">

        <section className="page-header">
          <p className="section-label">GET IN TOUCH</p>

          <h1>Contact Us</h1>

          <p>
            Have a question, suggestion, or food story to share?
          </p>
        </section>

        <section className="contact-section">

          <div className="contact-info">

            <p className="section-label">
              SAY HELLO
            </p>

            <h2>Let's Talk About Food!</h2>

            <p>
              We’d love to hear from you! Whether you have a question, a
              recipe suggestion, feedback, or simply want to share your love
              for Filipino food, feel free to send us a message. Your thoughts
              and ideas are always welcome, and we’ll do our best to get back
              to you as soon as possible. Thank you for being part of the Taste
              with Lauds community!
            </p>

            <div className="contact-detail">
              <span>📧</span>

              <div>
                <h4>Email</h4>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@tastewithlauds.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@tastewithlauds.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span>📱</span>

              <div>
                <h4>Social Media</h4>

                <div className="contact-social-links">

                  <a
                    href="https://www.facebook.com/trankeda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://www.instagram.com/kaping_mainit?stkn=OW56dGxnNHJpeWhy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.tiktok.com/@clhentlaudato?_r=1&_t=ZS-99XKEGqeIss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>

                </div>
              </div>
            </div>

            <div className="contact-detail">
              <span>🍴</span>

              <div>
                <h4>Food Blog</h4>
                <p>Taste with Lauds</p>
              </div>
            </div>

          </div>

          <div className="contact-form-container">

            {submitted ? (

              <div className="success-message">

                <span>🎉</span>

                <h2>Message Sent!</h2>

                <p>
                  Thank you for reaching out to Taste with Lauds.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <label>Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                />

                <label>Email</label>

                <input
                  type="email"
                  placeholder="Your email"
                  required
                />

                <label>Subject</label>

                <input
                  type="text"
                  placeholder="What is your message about?"
                  required
                />

                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message →
                </button>

              </form>

            )}

          </div>

        </section>

      </div>
    </>
  );
}

export default Contact;