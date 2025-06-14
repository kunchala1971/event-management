import React from "react";

const Contactus = () => {
  return (
    <main>
      <div class="main">
        <section
          class="module bg-dark-60 contact-page-header bg-dark"
          data-background="assets/images/contact_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Contact Us</h2>
                <div class="module-subtitle font-serif">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h4 class="font-alt">Get in touch</h4>
                <br />
                <form
                  id="contactForm"
                  role="form"
                  method="post"
                  action="php/contact.php"
                >
                  <div class="form-group">
                    <label class="sr-only" for="name">
                      Name
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name*"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email*"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="7"
                      id="message"
                      name="message"
                      placeholder="Your Message*"
                      required="required"
                      data-validation-required-message="Please enter your message."
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="text-center">
                    <button
                      class="btn btn-block btn-round btn-d"
                      id="cfsubmit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div
                  class="ajax-response font-alt"
                  id="contactFormResponse"
                ></div>
              </div>
              <div class="col-sm-6">
                <h4 class="font-alt">Additional info</h4>
                <br />
                <p>
                  I am alone, and feel the charm of existence in this spot,
                  which was created for the bliss of souls like mine. I am so
                  happy, my dear friend.
                </p>
                <hr />
                <h4 class="font-alt">Business Hours</h4>
                <br />
                <ul class="list-unstyled">
                  <li>Mo - Fr: 8am to 6pm</li>
                  <li>Sa, Su: 10am to 2pm</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="map-section">
          <div id="map"></div>
        </section>
        <div class="module-small bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">About Titan</h5>
                  <p>
                    The languages only differ in their grammar, their
                    pronunciation and their most common words.
                  </p>
                  <p>Phone: +1 234 567 89 10</p>Fax: +1 234 567 89 10
                  <p>
                    Email:<a href="#">somecompany@example.com</a>
                  </p>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Recent Comments</h5>
                  <ul class="icon-list">
                    <li>
                      Maria on <a href="#">Designer Desk Essentials</a>
                    </li>
                    <li>
                      John on <a href="#">Realistic Business Card Mockup</a>
                    </li>
                    <li>
                      Andy on <a href="#">Eco bag Mockup</a>
                    </li>
                    <li>
                      Jack on <a href="#">Bottle Mockup</a>
                    </li>
                    <li>
                      Mark on <a href="#">Our trip to the Alps</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Blog Categories</h5>
                  <ul class="icon-list">
                    <li>
                      <a href="#">Photography - 7</a>
                    </li>
                    <li>
                      <a href="#">Web Design - 3</a>
                    </li>
                    <li>
                      <a href="#">Illustration - 12</a>
                    </li>
                    <li>
                      <a href="#">Marketing - 1</a>
                    </li>
                    <li>
                      <a href="#">Wordpress - 16</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Popular Posts</h5>
                  <ul class="widget-posts">
                    <li class="clearfix">
                      <div class="widget-posts-image">
                        <a href="#">
                          <img
                            src="assets/images/rp-1.jpg"
                            alt="Post Thumbnail"
                          />
                        </a>
                      </div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title">
                          <a href="#">Designer Desk Essentials</a>
                        </div>
                        <div class="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="widget-posts-image">
                        <a href="#">
                          <img
                            src="assets/images/rp-2.jpg"
                            alt="Post Thumbnail"
                          />
                        </a>
                      </div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title">
                          <a href="#">Realistic Business Card Mockup</a>
                        </div>
                        <div class="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="divider-d" />
        <footer className="footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p className="copyright font-alt">
                  &copy; 2017&nbsp;<a href="index.html">TitaN</a>, All Rights
                  Reserved
                </p>
              </div>
              <div className="col-sm-6">
                <div className="footer-social-links">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div class="scroll-up">
        <a href="#totop">
          <i class="fa fa-angle-double-up"></i>
        </a>
      </div>
    </main>
  );
};

export default Contactus;
