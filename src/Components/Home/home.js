import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'

const Home = () => {
  return (
    <div>
      <Header></Header>
        <section id="hero" className="hero d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 d-flex flex-column justify-content-center">
        <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
        <h2 data-aos="fade-up" data-aos-delay={400}>We Provide Integerated data of Securities at a single platform</h2>
        <div data-aos="fade-up" data-aos-delay={600}>
          <div className="text-center text-lg-start">
            <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
              <span>Get Started</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
        <img src={require('../../assets/img/hero-img.png')} className="img-fluid" alt ></img>
        <img  />
      </div>
    </div>
  </div>
</section>
<main id="main">
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="row gx-0">
        <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
          <div className="content">
            <h3>Who We Are</h3>
            <h2>Young talented people providing insights about all the securities in a better way.</h2>
            <p>
              Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
            </p>
            <div className="text-center text-lg-start">
              <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Read More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
        <img src={require('../../assets/img/about.jpg')} className="img-fluid" alt />
        </div>
      </div>
    </div>
  </section>
  {/* <section id="values" className="values">
    <div className="container" data-aos="fade-up">
      <header className="section-header">
        <h2>Our Values</h2>
        <p>Odit est perspiciatis laborum et dicta</p>
      </header>
      <div className="row">
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="box">
            <img src="../../assets/img/values-1.png" className="img-fluid" alt />
            <h3>Ad cupiditate sed est odio</h3>
            <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400}>
          <div className="box">
            <img src="../../assets/img/values-2.png" className="img-fluid" alt />
            <h3>Voluptatem voluptatum alias</h3>
            <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={600}>
          <div className="box">
            <img src="../../assets/img/values-3.png" className="img-fluid" alt />
            <h3>Fugit cupiditate alias nobis.</h3>
            <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="counts" className="counts">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-emoji-smile" />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
              <p>Projects</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-headset" style={{color: '#15be56'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
              <p>Hours Of Support</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-people" style={{color: '#bb0852'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}




  
  {/* <section id="team" className="team">
    <div className="container" data-aos="fade-up">
      <header className="section-header">
        <h2>Team</h2>
        <p>Our hard working team</p>
      </header>
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
          <div className="member">
            <div className="member-img">
              <img src="assets/img/team/team-1.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
          <div className="member">
            <div className="member-img">
              <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <div className="member-img">
              <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
          <div className="member">
            <div className="member-img">
              <img src="assets/img/team/team-4.jpg" className="img-fluid" alt />
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}

 
  
  <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
      <header className="section-header">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </header>
      <div className="row gy-4">
        <div className="col-lg-6">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-box">
                <i className="bi bi-geo-alt" />
                <h3>Address</h3>
                <p>Sipcott IT park,<br /> Chennai, 630312</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box">
                <i className="bi bi-telephone" />
                <h3>Call Us</h3>
                <p>+91 89045 53172</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box">
                <i className="bi bi-envelope" />
                <h3>Email Us</h3>
                <p>info@usm.com<br />contact@usm.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form action="forms/contact.php" method="post" className="php-email-form">
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 ">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
<Footer></Footer>

    </div>
  )
}

export default Home