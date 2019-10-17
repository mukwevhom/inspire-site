import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader';
import JoinUs from '../components/sections/joinUs';

// import '../assets/styles/styles.scss';

export default function Inspiration() {
    return (
        <Layout>
            <PageHeader >
                <h1>Inspiration</h1>
            </PageHeader>
            <section className="sectionWrapper">
                <div className="sectionContent container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="blockContent serviceBlock">
                                <ul>
                                    <li>Goals and goal setting</li>
                                    <li>Personal growth</li>
                                    <li>Fear of failure</li>
                                    <li>Building a good character</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <figure>
                                <img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1571069034/InspireAcademy/motivation.jpg" />
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