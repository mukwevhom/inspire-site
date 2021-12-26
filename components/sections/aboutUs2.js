export default function AboutUs2(){
    return (
        <section className="sectionWrapper pt-5 pb-md-0 pb-5" id="aboutUs">
            <div className="container">
                <div className="sectionHeader d-none">
                    <h2>About Us</h2>
                </div>
                <div className="sectionContent mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <figure><img src="https://fileboxer.imgix.net/inspireacademy/Books_fdf3r2.png" /></figure>
                            <div className="block-content mt-3">
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
                        <div className="col-md-6 col-12 mt-md-0 mt-5">
                            <figure><img src="https://fileboxer.imgix.net/inspireacademy/ian-schneider-TamMbr4okv4-unsplash_h6p3ql.jpg" /></figure>
                            <div className="block-content mt-3">
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
                        // background-color:#f1592c;
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
                        // color:#fff;
                    }

                    .block-content p:not(:last-of-type) {
                        margin-bottom:21px;
                    }

                    h3 {
                        font-weight: 300;
                    }

                    ul {
                        padding:0;
                        margin:0;
                        list-style:none;
                    }

                    ul, p {
                        font-weight: 300;
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