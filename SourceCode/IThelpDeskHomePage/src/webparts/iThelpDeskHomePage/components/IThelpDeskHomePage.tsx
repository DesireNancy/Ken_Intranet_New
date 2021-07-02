import * as React from 'react';
import styles from './IThelpDeskHomePage.module.scss';
import { IIThelpDeskHomePageProps } from './IIThelpDeskHomePageProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class IThelpDeskHomePage extends React.Component<IIThelpDeskHomePageProps, {}> {
  public render(): React.ReactElement<IIThelpDeskHomePageProps> {
    return (
      <div className={styles.iThelpDeskHomePage}>

        {/* <!-- =-=-=-=-=-=-=-=-=-=-= HEADER AREA START =-=-=-=-=-=-=-=-=-=-= --> */}
        <div className="header-area">
          <div className="row mp-0 align-items-end">
            <div className="col-8 col-lg-5">
              <div className="header-area__left">
                <div className="header-logo">
                  <a href={"home.html"}>
                    <img className="d-xs-none" src={"./assets/img/logo-desktop.png"} alt="IT Help Desk" />
                    <img className="d-pc-none d-xs-block" src={"./assets/img/logo-mobile.jpg"} alt="IT Help Desk" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-7 d-xs-none">
              <div className="header-menu-right">
                <ul>

                  <li className='event-news'>
                    <a href={"Events_News.html"}>Event &amp; News</a>
                    <ul>

                    </ul>
                  </li>

                  <li className='user-guides'>
                    <a href={"User_Guides.html"}>User Guides</a>
                    <ul>

                      <li>
                        <a href={"User_Guides.html"}>Popular Items</a>

                        <ul>

                          <li>
                            <a href={"assets/docs/User guide of EUSS.pdf"}>Service Portal</a>
                          </li>

                          <li>
                            <a href={"assets/docs/Secure Print User guide.pdf"}>Pull Printing</a>
                          </li>

                          <li>
                            <a href={"assets/docs/EDSI SSPM User Guide.pdf"}>Self Password Reset</a>
                          </li>

                        </ul>

                      </li>

                    </ul>
                  </li>

                  <li className='quick links'>
                    <a href={"Quick_Links.html"}>Quick Links</a>
                    <ul>

                      <li>
                        <a href={"#"}>Pull Printing</a>

                      </li>

                      <li>
                        <a href={"#"}>EUSS</a>

                      </li>

                      <li>
                        <a href={"#"}>Change Password</a>

                      </li>

                      <li>
                        <a href={"assets/download/IT_Helpdesk_support_office_registration_form.pdf"}>ITHD Support Office Registration Form</a>

                      </li>

                    </ul>
                  </li>

                  <li className='faq'>
                    <a href={"FAQ.html"}>FAQ</a>
                    <ul>

                    </ul>
                  </li>

                  <li className='contact-us'>
                    <a href={"Contact_Us.html"}>Contact Us</a>
                    <ul>

                    </ul>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-4 d-pc-none d-xs-block">
              <button type="button" className="header-menu-button">
                <span className="header-menu-bar-icon">
                  <img src={"./assets/img/icon/icon-bars.png"} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- =-=-=-=-=-=-=-=-=-=-= HEADER AREA END =-=-=-=-=-=-=-=-=-=-= --> */}
        <button type="button" className="backdrop-area"></button>
        {/* <!-- =-=-=-=-=-=-=-=-=-=-= MENU AREA START =-=-=-=-=-=-=-=-=-=-= --> */}
        <div className="fullwidth-menu-area">
          <button type="button" className="header-menu-close-button">
            <span className="header-menu-close-icon">
              <img src={"./assets/img/icon/icon-close.png"} alt="" />
            </span>
          </button>
          <div className="fullwidth-menu-list-area">
            <div className="fullwidth-menu-list">
              <ul>

                <li>

                  <a href={"Events_News.html"}>Event &amp; News</a>

                </li>

                <li>

                  <button className="menu-collapse__header" type="button" data-toggle="collapse" data-target="#menu-collapse-2" aria-expanded="false" aria-controls="menu-collapse-2">
                    <span className="text">User Guides</span>
                    <span className="icon">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </button>
                  <div className="collapse" id="menu-collapse-2">
                    <div className="menu-collapse__body">
                      <ul>

                        <li>
                          <a href={"User_Guides.html"}>Popular Items</a>

                          <ul>

                            <li>
                              <a href={"assets/docs/User guide of EUSS.pdf"}>Service Portal</a>
                            </li>

                            <li>
                              <a href={"assets/docs/Secure Print User guide.pdf"}>Pull Printing</a>
                            </li>

                            <li>
                              <a href={"assets/docs/EDSI SSPM User Guide.pdf"}>Self Password Reset</a>
                            </li>

                          </ul>

                        </li>

                      </ul>
                    </div>
                  </div>

                </li>

                <li>

                  <button className="menu-collapse__header" type="button" data-toggle="collapse" data-target="#menu-collapse-3" aria-expanded="false" aria-controls="menu-collapse-3">
                    <span className="text">Quick Links</span>
                    <span className="icon">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </button>
                  <div className="collapse" id="menu-collapse-3">
                    <div className="menu-collapse__body">
                      <ul>

                        <li>
                          <a href={"#"}>Pull Printing</a>

                        </li>

                        <li>
                          <a href={"#"}>EUSS</a>

                        </li>

                        <li>
                          <a href={"#"}>Change Password</a>

                        </li>

                        <li>
                          <a href={"assets/download/IT_Helpdesk_support_office_registration_form.pdf"}>ITHD Support Office Registration Form</a>

                        </li>

                      </ul>
                    </div>
                  </div>

                </li>

                <li>

                  <a href={"FAQ.html"}>FAQ</a>

                </li>

                <li>

                  <a href={"Contact_Us.html"}>Contact Us</a>

                </li>

              </ul>
            </div>
          </div>
        </div>
        {/* <!-- =-=-=-=-=-=-=-=-=-=-= MENU AREA END =-=-=-=-=-=-=-=-=-=-= --> */}


        <main className="main">
          <div className="main-content">

            {/* <!-- =-=-=-=-=-=-=-=-=-=-= HERO AREA START =-=-=-=-=-=-=-=-=-=-= --> */}
            <section className="hero-area">
              <div className="hero-area-cell">
                <div className="hero__image">
                  <img className="d-xs-none" src={"./assets/img/home/hero-desktop.jpg"} alt="" />
                  <img className="d-pc-none d-xs-block" src={"./assets/img/home/hero-mobile.jpg"} alt="" />
                </div>
              </div>
            </section>
            {/* <!-- =-=-=-=-=-=-=-=-=-=-= HERO AREA END =-=-=-=-=-=-=-=-=-=-= -->
            <!-- =-=-=-=-=-=-=-=-=-=-= HOMEPAGE ITEMS AREA START =-=-=-=-=-=-=-=-=-=-= --> */}
            <section className="homepage-items-area">
              <div className="row mp-0">

                <div className="col-12">
                  <div className="homepage-item__single">
                    <a href={"Events_News.html"} className="homepage-item__image">
                      <img src={"./assets/img/home/homeEventNews.png"} alt="" />
                    </a>
                    <div className="homepage-item__text">Know more about our past event and upcoming services</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="homepage-item__single">
                    <a href={"User_Guides.html"} className="homepage-item__image">
                      <img src={"./assets/img/home/homeUserGuide.png"} alt="" />
                    </a>
                    <div className="homepage-item__text">We have prepared user guide for you</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="homepage-item__single">
                    <a href={"FAQ.html"} className="homepage-item__image">
                      <img src={"./assets/img/home/homeFAQ.png"} alt="" />
                    </a>
                    <div className="homepage-item__text">Got technical / procedure questions?Find your answers here</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="homepage-item__single">
                    <a href={""} className="homepage-item__image">
                      <img src={"./assets/img/home/homeQuickLinks.png"} alt="" />
                    </a>
                    <div className="homepage-item__text">Pull Printing Console ShortCut</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="homepage-item__single">
                    <a href={"assets/docs/Quick Start Guide for joining Teams meeting for desktop.pdf"} className="homepage-item__image">
                      <img src={"./assets/img/home/homeTeams.png"} alt="" />
                    </a>
                    <div className="homepage-item__text">Quick Start Guide for joining Teams meeting for desktop</div>
                  </div>
                </div>

              </div>
            </section>
            {/* <!-- =-=-=-=-=-=-=-=-=-=-= HOMEPAGE ITEMS AREA END =-=-=-=-=-=-=-=-=-=-= --> */}

          </div>
          {/* <!-- =-=-=-=-=-=-=-=-=-=-= FOOTER AREA START =-=-=-=-=-=-=-=-=-=-= --> */}
          <section className="copyright-area">
            <div className="copyright-text">
              Copyright@ 2017 Hong Kong International Airport. All right reserved.
            </div>
          </section>
          {/* <!-- =-=-=-=-=-=-=-=-=-=-= FOOTER AREA END =-=-=-=-=-=-=-=-=-=-= --> */}
        </main>

        {/* <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href='https://aka.ms/spfx' className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div> */}
      </div >
    );
  }
  componentDidMount(){
    require("./assets/css/bootstrap.min.css");
    require("./assets/css/animate.min.css");
    require("./assets/css/font-awesome-all.min.css");
    require("./assets/css/style.css");
    require("./assets/css/responsive.css");

    require("./assets/js/jquery.min.js");
    require("./assets/js/popper.min.js");
    require("./assets/js/bootstrap.min.js");
    require("./assets/js/TweenMax.min.js");
    require("./assets/js/main.js");
  }
}
