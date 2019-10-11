import Link from 'next/link';
import * as featherIcons from 'react-feather';

export default function Connect() {
    return (
        <section className="sectionWrapper pt-5 pb-5" id="connectWithUs">
            <div className="container text-center">
                <div className="sectionHeader">
                    <h3>Connect with us</h3>
                </div>
                <div className="sectionContent pt-3">
                    <ul>
                        <li>
                            <Link href="#">
                                <a><featherIcons.Twitter/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a><featherIcons.Facebook/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a><featherIcons.Instagram/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a><featherIcons.Mail/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a><featherIcons.Phone/></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    #connectWithUs {
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
                `}
            </style>
        </section>
    )
}