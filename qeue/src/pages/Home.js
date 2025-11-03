import React from 'react';

function Home() {
  return (
    <div className="home-page">
      {/* Top Header Bar */}
      {/* <header className="top-header">
        <div className="container">
          <div className="header-content">
            <div className="welcome-text">
              <p>Welcome to a Professional Health Care</p>
            </div>
            
            <div className="contact-info">
              <span className="info-item">
                <i className="fa fa-phone"></i> 010-060-0160
              </span>
              <span className="info-item">
                <i className="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)
              </span>
              <span className="info-item">
                <i className="fa fa-envelope-o"></i> 
                <a href="mailto:info@company.com">info@company.com</a>
              </span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section / Slider */}
      <section id="home" className="hero-slider">
        <div className="container">
          <div className="slider-content">
            <div className="slide active">
              <div className="slide-caption">
                <h3>Let's make your life happier</h3>
                <h1>Healthy Living</h1>
                <a href="#team" className="btn-primary">Meet Our Doctors</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Your Health Center</h2>
              <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
              <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
              
              <div className="profile-card">
                <img src="images/author-image.jpg" alt="Dr. Neil Jackson" />
                <div className="profile-info">
                  <h3>Dr. Neil Jackson</h3>
                  <p>General Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Doctors</h2>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <img src="images/team-image1.jpg" alt="Nate Baston" />
              <div className="team-info">
                <h3>Nate Baston</h3>
                <p>General Principal</p>
                <div className="contact-details">
                  <p><i className="fa fa-phone"></i> 010-020-0120</p>
                  <p><i className="fa fa-envelope-o"></i> <a href="mailto:general@company.com">general@company.com</a></p>
                </div>
                <ul className="social-links">
                  <li><a href="#" className="fa fa-linkedin-square"></a></li>
                  <li><a href="#" className="fa fa-envelope-o"></a></li>
                </ul>
              </div>
            </div>

            <div className="team-card">
              <img src="images/team-image2.jpg" alt="Jason Stewart" />
              <div className="team-info">
                <h3>Jason Stewart</h3>
                <p>Pregnancy</p>
                <div className="contact-details">
                  <p><i className="fa fa-phone"></i> 010-070-0170</p>
                  <p><i className="fa fa-envelope-o"></i> <a href="mailto:pregnancy@company.com">pregnancy@company.com</a></p>
                </div>
                <ul className="social-links">
                  <li><a href="#" className="fa fa-facebook-square"></a></li>
                  <li><a href="#" className="fa fa-envelope-o"></a></li>
                  <li><a href="#" className="fa fa-flickr"></a></li>
                </ul>
              </div>
            </div>

            <div className="team-card">
              <img src="images/team-image3.jpg" alt="Miasha Nakahara" />
              <div className="team-info">
                <h3>Miasha Nakahara</h3>
                <p>Cardiology</p>
                <div className="contact-details">
                  <p><i className="fa fa-phone"></i> 010-040-0140</p>
                  <p><i className="fa fa-envelope-o"></i> <a href="mailto:cardio@company.com">cardio@company.com</a></p>
                </div>
                <ul className="social-links">
                  <li><a href="#" className="fa fa-twitter"></a></li>
                  <li><a href="#" className="fa fa-envelope-o"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest News</h2>
          </div>

          <div className="news-grid">
            <div className="news-card">
              <a href="news-detail.html">
                <img src="images/news-image1.jpg" alt="News" />
              </a>
              <div className="news-content">
                <span className="news-date">March 08, 2018</span>
                <h3><a href="news-detail.html">About Amazing Technology</a></h3>
                <p>Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.</p>
                <div className="author-info">
                  <img src="images/author-image.jpg" alt="Author" />
                  <div>
                    <h5>Jeremie Carlson</h5>
                    <p>CEO / Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="news-card">
              <a href="news-detail.html">
                <img src="images/news-image2.jpg" alt="News" />
              </a>
              <div className="news-content">
                <span className="news-date">February 20, 2018</span>
                <h3><a href="news-detail.html">Introducing a new healing process</a></h3>
                <p>Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.</p>
                <div className="author-info">
                  <img src="images/author-image.jpg" alt="Author" />
                  <div>
                    <h5>Jason Stewart</h5>
                    <p>General Director</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="news-card">
              <a href="news-detail.html">
                <img src="images/news-image3.jpg" alt="News" />
              </a>
              <div className="news-content">
                <span className="news-date">January 27, 2018</span>
                <h3><a href="news-detail.html">Review Annual Medical Research</a></h3>
                <p>Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.</p>
                <div className="author-info">
                  <img src="images/author-image.jpg" alt="Author" />
                  <div>
                    <h5>Andrio Abero</h5>
                    <p>Online Advertising</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="appointment-section">
        <div className="container">
          <div className="appointment-content">
            <div className="appointment-image">
              <img src="images/appointment-image.jpg" alt="Appointment" />
            </div>

            <div className="appointment-form">
              <h2>Make an appointment</h2>
              
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Full Name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Select Date</label>
                    <input type="date" id="date" name="date" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="department">Select Department</label>
                    <select id="department" name="department">
                      <option>General Health</option>
                      <option>Cardiology</option>
                      <option>Dental</option>
                      <option>Medical Research</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Phone" />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Additional Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Message"></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;