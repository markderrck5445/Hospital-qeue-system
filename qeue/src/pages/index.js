import React from 'react'

function index() {
  return (
    <div>
        {/* export default function HealthCenter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }; */}

  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <p>Welcome to a Professional Health Care</p>
            </div>
            
            <div className="col-md-8 col-sm-7 text-align-right">
              <span className="phone-icon"><i className="fa fa-phone"></i> 010-060-0160</span>
              <span className="date-icon"><i className="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
              <span className="email-icon"><i className="fa fa-envelope-o"></i> <a href="#">info@company.com</a></span>
            </div>
          </div>
        </div>
      </header>

      {/* MENU */}
      <section className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>

            {/* lOGO TEXT HERE */}
            <a href="index.html" className="navbar-brand"><i className="fa fa-h-square"></i>ealth Center</a>
          </div>

          {/* MENU LINKS */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#top" className="smoothScroll">Home</a></li>
              <li><a href="#about" className="smoothScroll">About Us</a></li>
              <li><a href="#team" className="smoothScroll">Doctors</a></li>
              <li><a href="#news" className="smoothScroll">News</a></li>
              <li><a href="#google-map" className="smoothScroll">Contact</a></li>
              <li className="appointment-btn"><a href="#appointment">Make an appointment</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOME */}
      <section id="home" className="slider" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item item-first">
                <div className="caption">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Let's make your life happier</h3>
                    <h1>Healthy Living</h1>
                    <a href="#team" className="section-btn btn btn-default smoothScroll">Meet Our Doctors</a>
                  </div>
                </div>
              </div>

              <div className="item item-second">
                <div className="caption">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Aenean luctus lobortis tellus</h3>
                    <h1>New Lifestyle</h1>
                    <a href="#about" className="section-btn btn btn-default btn-gray smoothScroll">More About Us</a>
                  </div>
                </div>
              </div>

              <div className="item item-third">
                <div className="caption">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Pellentesque nec libero nisi</h3>
                    <h1>Your Health Benefits</h1>
                    <a href="#news" className="section-btn btn btn-default btn-blue smoothScroll">Read Stories</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <h2 className="wow fadeInUp" data-wow-delay="0.6s">Welcome to Your <i className="fa fa-h-square"></i>ealth Center</h2>
                <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                  <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
                </div>
                <figure className="profile wow fadeInUp" data-wow-delay="1s">
                  <img src="images/author-image.jpg" className="img-responsive" alt="" />
                  <figcaption>
                    <h3>Dr. Neil Jackson</h3>
                    <p>General Principal</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" data-stellar-background-ratio="1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <h2 className="wow fadeInUp" data-wow-delay="0.1s">Our Doctors</h2>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="col-md-4 col-sm-6">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                <img src="images/team-image1.jpg" className="img-responsive" alt="" />

                <div className="team-info">
                  <h3>Nate Baston</h3>
                  <p>General Principal</p>
                  <div className="team-contact-info">
                    <p><i className="fa fa-phone"></i> 010-020-0120</p>
                    <p><i className="fa fa-envelope-o"></i> <a href="#">general@company.com</a></p>
                  </div>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-linkedin-square"></a></li>
                    <li><a href="#" className="fa fa-envelope-o"></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                <img src="images/team-image2.jpg" className="img-responsive" alt="" />

                <div className="team-info">
                  <h3>Jason Stewart</h3>
                  <p>Pregnancy</p>
                  <div className="team-contact-info">
                    <p><i className="fa fa-phone"></i> 010-070-0170</p>
                    <p><i className="fa fa-envelope-o"></i> <a href="#">pregnancy@company.com</a></p>
                  </div>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-facebook-square"></a></li>
                    <li><a href="#" className="fa fa-envelope-o"></a></li>
                    <li><a href="#" className="fa fa-flickr"></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                <img src="images/team-image3.jpg" className="img-responsive" alt="" />

                <div className="team-info">
                  <h3>Miasha Nakahara</h3>
                  <p>Cardiology</p>
                  <div className="team-contact-info">
                    <p><i className="fa fa-phone"></i> 010-040-0140</p>
                    <p><i className="fa fa-envelope-o"></i> <a href="#">cardio@company.com</a></p>
                  </div>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-twitter"></a></li>
                    <li><a href="#" className="fa fa-envelope-o"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" data-stellar-background-ratio="2.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              {/* SECTION TITLE */}
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Latest News</h2>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* NEWS THUMB */}
              <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                <a href="news-detail.html">
                  <img src="images/news-image1.jpg" className="img-responsive" alt="" />
                </a>
                <div className="news-info">
                  <span>March 08, 2018</span>
                  <h3><a href="news-detail.html">About Amazing Technology</a></h3>
                  <p>Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.</p>
                  <div className="author">
                    <img src="images/author-image.jpg" className="img-responsive" alt="" />
                    <div className="author-info">
                      <h5>Jeremie Carlson</h5>
                      <p>CEO / Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* NEWS THUMB */}
              <div className="news-thumb wow fadeInUp" data-wow-delay="0.6s">
                <a href="news-detail.html">
                  <img src="images/news-image2.jpg" className="img-responsive" alt="" />
                </a>
                <div className="news-info">
                  <span>February 20, 2018</span>
                  <h3><a href="news-detail.html">Introducing a new healing process</a></h3>
                  <p>Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.</p>
                  <div className="author">
                    <img src="images/author-image.jpg" className="img-responsive" alt="" />
                    <div className="author-info">
                      <h5>Jason Stewart</h5>
                      <p>General Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* NEWS THUMB */}
              <div className="news-thumb wow fadeInUp" data-wow-delay="0.8s">
                <a href="news-detail.html">
                  <img src="images/news-image3.jpg" className="img-responsive" alt="" />
                </a>
                <div className="news-info">
                  <span>January 27, 2018</span>
                  <h3><a href="news-detail.html">Review Annual Medical Research</a></h3>
                  <p>Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.</p>
                  <div className="author">
                    <img src="images/author-image.jpg" className="img-responsive" alt="" />
                    <div className="author-info">
                      <h5>Andrio Abero</h5>
                      <p>Online Advertising</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAKE AN APPOINTMENT */}
      <section id="appointment" data-stellar-background-ratio="3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img src="images/appointment-image.jpg" className="img-responsive" alt="" />
            </div>

            <div className="col-md-6 col-sm-6">
              {/* CONTACT FORM HERE */}
              <div id="appointment-form" role="form">
                {/* SECTION TITLE */}
                <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                  <h2>Make an appointment</h2>
                </div>

                <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" />
                  </div>

                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
                  </div>

                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="date">Select Date</label>
                    <input type="date" name="date" defaultValue="" className="form-control" />
                  </div>

                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="select">Select Department</label>
                    <select className="form-control">
                      <option>General Health</option>
                      <option>Cardiology</option>
                      <option>Dental</option>
                      <option>Medical Research</option>
                    </select>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <label htmlFor="telephone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" />
                    <label htmlFor="Message">Additional Message</label>
                    <textarea className="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                    {/* <button type="submit" className="form-control" id="cf-submit" name="submit" onClick={handleSubmit}>Submit Button</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

    </div>
  )
}

export default index;