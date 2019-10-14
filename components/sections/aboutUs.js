import Link from 'next/link';
import * as featherIcons from 'react-feather';

export default function AboutUs() {
    return (
        <section className="sectionWrapper pt-5 pb-5" id="aboutUs">
            <div className="container text-center">
                <div className="sectionHeader">
                    <h2>About Us</h2>
                </div>
                <div className="sectionContent mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <figure><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/v1571066702/InspireAcademy/Books_fdf3r2.png" /></figure>
                        </div>
                        <div className="col-md-6 col-12 position-relative order-md-first">
                            <div className="block-content">
                                <h3>Who are we?</h3>
                                <p>Inspire Academy is an educational institution that exists for the cause of inspiring people to pursue and happily engage in endeavors that fulfill and inspire them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    img {
                        width:100%;
                    }

                    .block-content {
                        position:absolute;
                        top:50%;
                        transform:translateY(-50%);
                        width: calc(100% - 30px);
                    }
                `}
            </style>
        </section>
    )
}