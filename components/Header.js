import Link from 'next/link';

export default function Header() {
    return (
        <nav>
            <div className="container">
                <a href="/" className="siteLogo"><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/v1571064414/InspireAcademy/IA_Color_Icon_fvnvwl.png" alt="Inspire Academy" /></a>
                <div className="site-nav float-right">
                    <ul>
                        <li>
                            <Link href="#aboutUs">
                                <a className="nav-link" >About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#ourServices">
                                <a className="nav-link" >Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#connectWithUs">
                                <a className="nav-link" >Connect</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
            <style jsx>
                {`
                    nav {
                        background: #fffffffa;
                        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
                        pointer-events: auto;
                        position: fixed;
                        width: 100%;
                        z-index: 1;
                    }

                    nav > div {
                        padding:12px 0;
                    }

                    .siteLogo {

                    }

                    .siteLogo > img {
                        width:51px;
                    }

                    ul {
                        margin:0;
                        padding:0;
                    }

                    li {
                        display:inline-block;
                    }

                    a {
                        color: #000;
                    }

                    a:hover,
                    a:focus {
                        color: #f1592c;
                    }
                `}
            </style>
        </nav>
    
    )
}