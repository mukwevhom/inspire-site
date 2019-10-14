import Link from 'next/link';
import * as featherIcons from 'react-feather';

export default function Services() {
    return (
        <section className="sectionWrapper pt-5 pb-5" id="ourServices">
            <div className="container text-center">
                <div className="sectionHeader">
                    <h2>Our Services</h2>
                    <p>We offer our service to high school students in Grade 10/11/12 </p>
                </div>
                <div className="sectionContent mt-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-12">
                            <div className="serviceBlock">
                                <figure className="w-75 mx-auto"><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1571068505/InspireAcademy/tutoring.jpg" /></figure>
                                <div className="serviceInfo">
                                    <h4>Tutoring</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-12">
                            <div className="serviceBlock">
                                <figure className="w-75  mx-auto"><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1571068866/InspireAcademy/coaching.jpg" /></figure>
                                <div className="serviceInfo">
                                    <h4>Coaching</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-12">
                            <div className="serviceBlock">
                                <figure className="w-75 mx-auto"><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1571069034/InspireAcademy/motivation.jpg" /></figure>
                                <div className="serviceInfo">
                                    <h4>Motivation</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-12">
                            <div className="serviceBlock">
                                <figure className="w-75 mx-auto"><img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1571068784/InspireAcademy/career%20guidance.jpg" /></figure>
                                <div className="serviceInfo">
                                    <h4>Career Guidance</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    #ourServices {
                        border-bottom: 1px solid;
                    }

                    img {
                        width:100%;
                        border-radius: 50%;
                    }
                `}
            </style>
        </section>
    )
}