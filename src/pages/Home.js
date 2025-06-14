import React from "react";
const Home = () => {
  return (
    <>
      <section
        className="home-section home-parallax home-fade home-full-height"
        id="home"
      >
        <div className="hero-slider">
          <ul className="slides">
            <li
              className="bg-dark-30 bg-dark"
              style={{
                backgroundImage:
                  "url(assets/images/nwe/bride-and-groom-s-hands.jpg)",
              }}
            >
              <div className="titan-caption">
                <div className="caption-content">
                  <div className="font-alt mb-30 titan-title-size-1">
                    Hello &amp; welcome
                  </div>
                  <div className="font-alt mb-40 titan-title-size-4">
                    We are Titan
                  </div>
                  <a
                    className="section-scroll btn btn-border-w btn-round"
                    href="#about"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>
            <li
              className="bg-dark-30 bg-dark"
              style={{
                backgroundImage: "url(assets/images/nwe/wp2349395.jpg)",
              }}
            >
              <div className="titan-caption">
                <div className="caption-content">
                  <div className="font-alt mb-30 titan-title-size-2">
                    Titan is creative multipurpose html template for
                    <br />
                    web developers who change the world
                  </div>
                  <a className="btn btn-border-w btn-round" href="about">
                    Learn More
                  </a>
                </div>
              </div>
            </li>
            <li
              className="bg-dark-30 bg-dark"
              style={{
                backgroundImage: "url(assets/images/nwe/corporate-1.jpg)",
              }}
            >
              <div className="titan-caption">
                <div className="caption-content">
                  <div className="font-alt mb-30 titan-title-size-1">
                    We build brands that build business
                  </div>
                  <div className="font-alt mb-40 titan-title-size-3">
                    We are Amazing
                  </div>
                  <a
                    className="section-scroll btn btn-border-w btn-round"
                    href="#about"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="main">
        <section className="module" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2 className="module-title font-alt">Welcome to Titan</h2>
                <div className="module-subtitle font-serif large-text">
                  We’re an award winning London based digital agency, lovingly
                  curating pixels for maximum impact. We don’t have a style — we
                  have standards.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-sm-offset-5">
                <div className="large-text align-center">
                  <a className="section-scroll" href="#services">
                    <i className="fa fa-angle-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="divider-w" />
        <section className="module" id="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Our Services</h2>
                <div className="module-subtitle font-serif">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </div>
              </div>
            </div>
            <div className="row multi-columns-row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-lightbulb"></span>
                  </div>
                  <h3 className="features-title font-alt">
                    Ideas and concepts
                  </h3>
                  <p>
                    Careful attention to detail and clean, well structured code
                    ensures a smooth user experience for all your visitors.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-bike"></span>
                  </div>
                  <h3 className="features-title font-alt">
                    Optimised for speed
                  </h3>
                  <p>
                    Careful attention to detail and clean, well structured code
                    ensures a smooth user experience for all your visitors.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-tools"></span>
                  </div>
                  <h3 className="features-title font-alt">
                    Designs &amp; interfaces
                  </h3>
                  <p>
                    Careful attention to detail and clean, well structured code
                    ensures a smooth user experience for all your visitors.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-gears"></span>
                  </div>
                  <h3 className="features-title font-alt">
                    Highly customizable
                  </h3>
                  <p>
                    Careful attention to detail and clean, well structured code
                    ensures a smooth user experience for all your visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="module" id="alt-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Our features</h2>
                <div className="module-subtitle font-serif">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="alt-features-item">
                  <div className="alt-features-icon">
                    <span class="icon-strategy"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Branding</h3>A
                  wonderful serenity has taken possession of my entire soul like
                  these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-tools-2"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Development</h3>A
                  wonderful serenity has taken possession of my entire soul like
                  these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-target"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Marketing</h3>A
                  wonderful serenity has taken possession of my entire soul like
                  these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-tools"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Design</h3>A wonderful
                  serenity has taken possession of my entire soul like these
                  sweet mornings.
                </div>
              </div>
              <div class="col-md-6 col-lg-6 hidden-xs hidden-sm">
                <div class="alt-services-image align-center">
                  <img
                    src="assets/images/nwe/wed3[1].jpg"
                    alt="Feature Image"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-camera"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Photography</h3>A
                  wonderful serenity has taken possession of my entire soul like
                  these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-mobile"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Mobile</h3>A wonderful
                  serenity has taken possession of my entire soul like these
                  sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-linegraph"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Music</h3>A wonderful
                  serenity has taken possession of my entire soul like these
                  sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon">
                    <span class="icon-basket"></span>
                  </div>
                  <h3 class="alt-features-title font-alt">Shop</h3>A wonderful
                  serenity has taken possession of my entire soul like these
                  sweet mornings.
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="divider-w" />
        <section class="module pb-0" id="works">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Our Works</h2>
                <div class="module-subtitle font-serif"></div>
              </div>
            </div>
          </div>
          <ul
            class="works-grid works-grid-gut works-grid-3 works-hover-w"
            id="works-grid"
          >
            <li class="work-item illustration webdesign">
              <a href="portfolio-single-1.html">
                <div class="work-image">
                  <img src="assets/images/work-1.jpg" alt="Portfolio Item" />
                </div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Corporate Identity</h3>
                  <div class="work-descr">Illustration</div>
                </div>
              </a>
            </li>
            <li class="work-item marketing photography">
              <a href="portfolio-single-1.html">
                <div class="work-image">
                  <img src="assets/images/work-2.jpg" alt="Portfolio Item" />
                </div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Bag MockUp</h3>
                  <div class="work-descr">Marketing</div>
                </div>
              </a>
            </li>
            <li class="work-item illustration photography">
              <a href="portfolio-single-1.html">
                <div class="work-image">
                  <img src="assets/images/work-3.jpg" alt="Portfolio Item" />
                </div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Disk Cover</h3>
                  <div class="work-descr">Illustration</div>
                </div>
              </a>
            </li>
            <li class="work-item marketing photography">
              <a href="portfolio-single-1.html">
                <div class="work-image">
                  <img src="assets/images/work-4.jpg" alt="Portfolio Item" />
                </div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Business Card</h3>
                  <div class="work-descr">Photography</div>
                </div>
              </a>
            </li>
            <li class="work-item illustration webdesign">
              <a href="portfolio-single-1.html">
                <div class="work-image">
                  <img src="assets/images/work-5.jpg" alt="Portfolio Item" />
                </div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Business Card</h3>
                  <div class="work-descr">Webdesign</div>
                </div>
              </a>
            </li>
            <li class="work-item marketing webdesign">
              <a href="portfolio-single-1.html">
                <div class="work-image">
                  <img src="assets/images/work-6.jpg" alt="Portfolio Item" />
                </div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Business Cards in paper clip</h3>
                  <div class="work-descr">Marketing</div>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section
          class="module bg-dark-60 pt-0 pb-0 parallax-bg testimonial"
          data-background="assets/images/testimonial_bg.jpg"
        >
          <div class="testimonials-slider pt-140 pb-140">
            <ul class="slides">
              <li>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="module-icon">
                        <span class="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <blockquote class="testimonial-text font-alt">
                        I am alone, and feel the charm of existence in this
                        spot, which was created for the bliss of souls like
                        mine.
                      </blockquote>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 col-sm-offset-4">
                      <div class="testimonial-author">
                        <div class="testimonial-caption font-alt">
                          <div class="testimonial-title">Jack Woods</div>
                          <div class="testimonial-descr">
                            SomeCompany INC, CEO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="module-icon">
                        <span className="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <blockquote className="testimonial-text font-alt">
                        I should be incapable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </blockquote>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                      <div className="testimonial-author">
                        <div className="testimonial-caption font-alt">
                          <div className="testimonial-title">Jim Stone</div>
                          <div className="testimonial-descr">
                            SomeCompany INC, CEO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="module-icon">
                        <span className="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <blockquote className="testimonial-text font-alt">
                        I am so happy, my dear friend, so absorbed in the
                        exquisite sense of mere tranquil existence, that I
                        neglect my talents.
                      </blockquote>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                      <div className="testimonial-author">
                        <div className="testimonial-caption font-alt">
                          <div className="testimonial-title">Adele Snow</div>
                          <div className="testimonial-descr">
                            SomeCompany INC, CEO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="module-small bg-dark" id="about-titan">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">About Titan</h5>
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
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Recent Comments</h5>
                  <ul className="icon-list">
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
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Blog Categories</h5>
                  <ul className="icon-list">
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
              <div className="col-sm-3">
                <div className="widget">
                  <h5 className="widget-title font-alt">Popular Posts</h5>
                  <ul className="widget-posts">
                    <li className="clearfix">
                      <div className="widget-posts-image">
                        <a href="#">
                          <img
                            src="assets/images/rp-1.jpg"
                            alt="Post Thumbnail"
                          />
                        </a>
                      </div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title">
                          <a href="#">Designer Desk Essentials</a>
                        </div>
                        <div className="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="widget-posts-image">
                        <a href="#">
                          <img
                            src="assets/images/rp-2.jpg"
                            alt="Post Thumbnail"
                          />
                        </a>
                      </div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title">
                          <a href="#">Realistic Business Card Mockup</a>
                        </div>
                        <div className="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="divider-d" />
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
      <div className="scroll-up">
        <a href="#totop">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
