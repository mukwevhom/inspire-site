import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader';
import JoinUs from '../components/sections/joinUs';

// import '../assets/styles/styles.scss';

export default function Tutoring() {
    return (
        <Layout>
            <PageHeader >
                <h1>Tutoring</h1>
            </PageHeader>
            <section className="sectionWrapper">
                <div className="sectionContent container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="blockContent serviceBlock">
                                <ul>
                                    <li>Intensive tutoring for grade 10/11/12</li>
                                    <li>Intensive tutoring for rewriting students</li>
                                    <li>intensive tutoring for ABET (senior certificate</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <figure>
                                <img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1571068505/InspireAcademy/tutoring.jpg" />
                            </figure>
                        </div>
                    </div>
                    
                </div>
            </section>
            <JoinUs />
            <style jsx>
                {`
                    .serviceBlock {
                        position:absolute;
                        top:50%;
                        transform:translateY(-50%);
                        width: calc(100% - 30px);
                    }

                    ul, p {
                        font-size:1.2rem;
                    }

                    ul {
                        padding:0;
                        margin:0;
                    }

                    figure {
                        margin:0;
                    }

                    img {
                        width:100%;
                    }

                    @media (max-width:767px) {
                        .serviceBlock {
                            position:relative;
                            top:0;
                            transform:unset;
                        }
                    }
                `}
            </style>
        </Layout>
    );
}