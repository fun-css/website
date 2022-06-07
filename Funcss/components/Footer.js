import Link from "next/link";
import Logo from "./Logo"

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer  className="padding-top-50 padding-bottom-20 text-small">
          <div className="container">
            <div className="row">
              <div className="col sm-12 md-8 lg-8 padding">
              <div className="section">
              <div><Logo /></div>
              Fun css is a modern responsive css framework, it will ease your work in developing
              websites, it comes with pre-defined class names which are use to style your website. 
              {/* You can download the framework for free and use our website themes and components for free. */}
              <div className="section">
              <a href="/app/funcss.apk">
              <button className="button success text-white">
              <i className="fab fa-android"></i> Download Android
              </button>
              </a>
              </div>
          
            </div>
              </div>
              <div className="col sm-12 md-4 lg-4">
                <div className="padding">
                <div className="h4 padding">Guides</div>
                <div className="hr"></div>
                <Link href="/gettingstarted">
                  <a className="text-black"><div className="button padding">Getting Started</div></a>
                </Link>
                <Link href="/themes">
                  <a className="text-black"><div className="button padding">Our Themes</div></a>
                </Link>
                <a className="text-black"  href="https://github.com/fun-css"><div className="button padding">Our Github Repo</div></a>
                </div>
              </div>
            </div>

          <div className="row">
              <div className="col sm-12 md-8 lg-8">
              <div className="padding">
                &copy;{year} Funcss, All rights reserved
            </div>
              </div>
              <div className="col sm-12 md-4 lg-4">
               <div className="padding">
                 <a className="text-black" href="https://github.com/fun-css/funcss/blob/main/LICENSE">MIT License</a>
               </div>
              </div>
          </div>
          </div>
        </footer>
    );
}

export default Footer;