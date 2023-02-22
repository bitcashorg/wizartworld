import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        <Link href="/" passHref>
          <a className="pl-0 logo">
            <Image
              layout="fill"
              src="/assets/images/logo-icon-28.png"
              className="inline-block sm:hidden"
              alt=""
            />
            <div className="hidden sm:block">
              <Image
                layout="fill"
                src="/assets/images/logo-dark.png"
                className="inline-block dark:hidden h-7"
                alt=""
              />
              <Image
                layout="fill"
                src="/assets/images/logo-white.png"
                className="hidden dark:inline-block h-7"
                alt=""
              />
            </div>
          </a>
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="mb-0 list-none buy-button">
          <li className="inline-block mb-0">
            <div className="relative form-icon">
              <i className="absolute text-lg -translate-y-1/2 uil uil-search top-1/2 left-3"></i>
              <input
                type="text"
                className="pl-10 bg-white form-input rounded-3xl sm:w-44 w-28 dark:bg-slate-900"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </li>

          <li className="inline-block pl-1 mb-0">
            <a
              id="connectWallet"
              className="text-white rounded-full btn btn-icon bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700"
            >
              <i className="uil uil-wallet"></i>
            </a>
          </li>

          <li className="inline-block pl-1 mb-0">
            <a
              href=""
              className="text-white rounded-full btn btn-icon bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700"
            >
              <Image
                layout="fill"
                src="/assets/images/client/05.jpg"
                className="rounded-full"
                alt=""
              />
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="justify-end navigation-menu">
            <li className="has-submenu parent-menu-item">
              <a href="/">Home</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="index.html" className="sub-menu-item">
                    Home One
                  </a>
                </li>
                <li>
                  <a href="index-two.html" className="sub-menu-item">
                    Home Two
                  </a>
                </li>
                <li>
                  <a href="index-three.html" className="sub-menu-item">
                    Home Three
                  </a>
                </li>
                <li>
                  <a href="index-four.html" className="sub-menu-item">
                    Home Four{' '}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a href="index-five.html" className="sub-menu-item">
                    Home Five{' '}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a href="index-six.html" className="sub-menu-item">
                    Home Six{' '}
                    <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                      Light
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="/">Explore</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="explore-one.html" className="sub-menu-item">
                    {' '}
                    Explore One
                  </a>
                </li>
                <li>
                  <a href="explore-two.html" className="sub-menu-item">
                    {' '}
                    Explore Two
                  </a>
                </li>
                <li>
                  <a href="explore-three.html" className="sub-menu-item">
                    {' '}
                    Explore Three
                  </a>
                </li>
                <li>
                  <a href="auction.html" className="sub-menu-item">
                    Live Auction
                  </a>
                </li>
                <li>
                  <a href="item-detail.html" className="sub-menu-item">
                    {' '}
                    Item Detail
                  </a>
                </li>
                <li>
                  <a href="activity.html" className="sub-menu-item">
                    {' '}
                    Activities
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="sub-menu-item">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="upload-work.html" className="sub-menu-item">
                    Upload Works
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="wallet.html" className="sub-menu-item">
                Wallet
              </a>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="/">Pages</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="aboutus.html" className="sub-menu-item">
                    About Us
                  </a>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="/"> Creator </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="creators.html" className="sub-menu-item">
                        {' '}
                        Creators
                      </a>
                    </li>
                    <li>
                      <a href="creator-profile.html" className="sub-menu-item">
                        {' '}
                        Creator Profile
                      </a>
                    </li>
                    <li>
                      <a href="creator-profile-edit.html" className="sub-menu-item">
                        {' '}
                        Profile Edit
                      </a>
                    </li>
                    <li>
                      <a href="become-creator.html" className="sub-menu-item">
                        {' '}
                        Become Creator
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="/"> Blog </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="blogs.html" className="sub-menu-item">
                        {' '}
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-menu-item">
                        {' '}
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="/"> Auth Pages </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="login.html" className="sub-menu-item">
                        {' '}
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="signup.html" className="sub-menu-item">
                        {' '}
                        Signup
                      </a>
                    </li>
                    <li>
                      <a href="reset-password.html" className="sub-menu-item">
                        {' '}
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="lock-screen.html" className="sub-menu-item">
                        {' '}
                        Lock Screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="/"> Special </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="comingsoon.html" className="sub-menu-item">
                        {' '}
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a href="maintenance.html" className="sub-menu-item">
                        {' '}
                        Maintenance
                      </a>
                    </li>
                    <li>
                      <a href="error.html" className="sub-menu-item">
                        {' '}
                        404!
                      </a>
                    </li>
                    <li>
                      <a href="thankyou.html" className="sub-menu-item">
                        {' '}
                        Thank you
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="/"> Help Center </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="helpcenter-overview.html" className="sub-menu-item">
                        {' '}
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="helpcenter-faqs.html" className="sub-menu-item">
                        {' '}
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="helpcenter-guides.html" className="sub-menu-item">
                        {' '}
                        Guides
                      </a>
                    </li>
                    <li>
                      <a href="helpcenter-support.html" className="sub-menu-item">
                        {' '}
                        Support
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="terms.html" className="sub-menu-item">
                    Terms Policy
                  </a>
                </li>
                <li>
                  <a href="privacy.html" className="sub-menu-item">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contact.html" className="sub-menu-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
