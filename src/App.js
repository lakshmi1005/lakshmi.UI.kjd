import './App.css';
import Slider from './components/Slider';

function App() {
  return (<>
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="logo">KJD</a>
      </div>
      <div className="navbar-center">
        <a href="#">Services</a>
        <a href="#">Industries</a>
        <a href="#">Cases</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-right">
        <button className="contact-button">Let's Talk</button>
      </div>
    </nav>

    <header className="header">
      <div className="header-content">
        <h1>Live with Confidence</h1>
        <br />
        <p>
          José Mourinho brings confidence to pan-African Sanlam <br />
          campaign.
        </p>
        <br />
        <button className="view-project-button">View Project</button>
      </div>
    </header>

    <div className="line-flex">
      <div className="line"></div>
      <span>What we do</span>
    </div>
    <p className="underhero">
      We offer a complete range of bespoke design and development services to
      help you turn your ideas into digital masterpieces
    </p>

    <div className="grid">
      <div className="section">
        <div className="icon">
          <img src="/images/icon11.png" alt="" />
        </div>
        <br />
        <br />

        <h2>Web Development</h2>
        <br />
        <br />
        <p>
          Our complete web design services will bring your ideas to life and
          provide you with a sleek, high-performing product that elevates your
          business. User experience & design
        </p>
      </div>
      <div className="section">
        <div className="icon">
          <img src="/images/icon1.png" alt="" />
        </div>
        <br />
        <br />

        <h2>User experience & designs</h2>
        <br />
        <br />
        <p>
          Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
        
        </p>
      </div>
      <div className="section">
        <div className="icon">
          <img src="/images/icon2.png" alt="" />
        </div>
        <br />
        <br />

        <h2>Mobile app development</h2>
        <br />
        <br />
        <p>
          Our extensive mobile development experience allows us to create costom native and cross-platform ios and Android mobile solutions for our clients.
         </p>
      </div>
      <div className="section">
        <div className="icon">
          <img src="/images/icon3.png" alt="" />
        </div>
        <br />
        <br />

        <h2>Blockchain solutions</h2>
        <br />
        <br />
        <p>
        We conduct market research to determine the optimal blockchain-based solutions to help your company and achieve your business goals.  
        </p>
      </div>
    </div>

    <Slider/>

    <div className="line-flex">
      <div className="line"></div>
      <span>You'll be in good company</span>
    </div>
    <h1 className="trusted">Trusted by leading brands</h1>
    <div className="grid-container">
      <div className="brand-logo"><img src="/images/logo1.png" alt="Logo 1" /></div>
      <div className="brand-logo"><img src="/images/logo2.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo3.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo4.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo5.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo6.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo7.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo8.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo9.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo10.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo11.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo12.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo13.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo14.png" alt="Logo 2" /></div>
      <div className="brand-logo"><img src="/images/logo15.png" alt="Logo 2" /></div>
    </div>

    <footer>
      <div className="footdiv">
        <div className="footer-flex">
          <div className="footerline"></div>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="footflex">
        <div className="foothead">Have a project in mind? Let's make it happen</div>

        <div className="address">
          <p>22 Lawley Road, Woodstock, 7925,</p>
          <p>Cape Town, South Africa</p>
          <p>+27 21 469 1500</p>
          <a>enquirie@kingjames.co.za</a>
        </div>
      </div>

      <div className="footgrid">
        <p>Terms of service</p>
        <p>Facebook</p>
        <p>Github</p>
        <p>Youtube</p>
        <p>Explore open jobs</p>
        <p>Privacy policy</p>
        <p>Instagram</p>
        <p>Linkedin</p>
        <p>Behance</p>
        <p></p>
        <p>Impressum</p>
        <p>Twitter</p>
        <p>Teams</p>
        <p>Dribbble</p>
        <p>&copy2000-2022 King James Digital</p>
      </div>
    </footer>

  </>);
}

export default App;
