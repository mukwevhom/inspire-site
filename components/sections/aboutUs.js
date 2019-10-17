import Link from 'next/link';
import * as featherIcons from 'react-feather';

export default function AboutUs() {
    return (
        <section className="sectionWrapper pt-5 pb-5" id="aboutUs">
            <div className="container text-center">
                <div className="sectionHeader d-none">
                    <h2>About Us</h2>
                </div>
                <div className="sectionContent mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <figure><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/v1571066702/InspireAcademy/Books_fdf3r2.png" /></figure>
                        </div>
                        <div className="col-md-6 col-12 position-relative order-md-first">
                            <div className="block-content">
                                <h3>About Us</h3>
                                <p>Inspire Academy is an education institution that exists for the cause of inspiring people to pursue and happily engage in endeavors that fulfill and inspire them.</p>
                                <p className="d-none">One of our core bases for this academy is a key problem in a growing number of students not performing to the best of their ability and potential academically.</p>
                                <ul>
                                    <li>Tutoring</li>
                                    <li>Inspiration</li>
                                    <li>Career Guidance</li>
                                    <li>Coaching</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 col-12">
                            <figure><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1571146627/InspireAcademy/ian-schneider-TamMbr4okv4-unsplash_h6p3ql.jpg" /></figure>
                        </div>
                        <div className="col-md-6 col-12 position-relative">
                            <div className="block-content">
                                <h3>Our Vision</h3>
                                <p>We as Inspire Academy strive to be leaders in the cause of inspiring people through education and fulfillment of their purposes.</p>
                                <p>This is to be accomplished by by establishing an academy that will be accessible to anyone who believe in our cause,we plan to alter the existing eco-system  between the students and tertiary institutions and create a eco- system that will result in a greater influx of students in tertairy institutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    section {
                        background-color:#f1592c;
                        // background: linear-gradient(-22deg, #fff 0%, #f1592c99 50%, #fff 100%);
                    }

                    figure {
                        margin:0;
                        box-shadow:0 0 11px -1px #fff;
                    }

                    img {
                        width:100%;
                    }

                    .block-content {
                        position:absolute;
                        top:50%;
                        transform:translateY(-50%);
                        width: calc(100% - 30px);
                        color:#fff;
                    }

                    .block-content p:not(:last-of-type) {
                        margin-bottom:21px;
                    }

                    ul {
                        padding:0;
                        margin:0;
                        list-style:none;
                    }

                    ul, p {
                        font-size:1.2rem;
                    }

                    @media (max-width:767px) {
                        .block-content {
                            position:relative;
                            top:0;
                            transform:unset;
                        }
                    }
                `}
            </style>
        </section>
    )
}