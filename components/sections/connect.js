import Link from 'next/link';
import * as featherIcons from 'react-feather';

export default function Connect() {
    return (
        <section className="sectionWrapper pt-5 pb-5" id="connectWithUs">
            <div className="container text-center">
                <div className="sectionHeader">
                    <h3>Connect with us</h3>
                </div>
                <div className="sectionContent mt-5">
                    <ul>
                        <li>
                            <Link href="https://twitter.com/MYINSPIREACa">
                                <a><featherIcons.Twitter/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/myinspireacademy100/">
                                <a><featherIcons.Facebook/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com/myinspireacademy">
                                <a><featherIcons.Instagram/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:admin@inspireacademy.co.za">
                                <a><featherIcons.Mail/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="tel:+27761293655">
                                <a><featherIcons.Phone/></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    #connectWithUs {
                        border-top: 2px solid #f3f3f3;
                    }
                    #connectWithUs .sectionContent {
                    }
                    #connectWithUs .sectionContent ul {
                        margin:0;
                        padding:0;
                    }
                    #connectWithUs .sectionContent ul li {
                        display:inline-block;
                        margin-right:12px;
                    }
                    #connectWithUs .sectionContent ul li:last-of-type {
                        margin-right:0;
                    }

                    #connectWithUs .sectionContent ul li a {
                        color:#000;
                    }

                    #connectWithUs .sectionContent ul li a:hover {
                        color:#f1592c;
                    }
                `}
            </style>
        </section>
    )
}