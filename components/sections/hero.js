export default function Hero() {
    return (
        <section className="sectionWrapper" id="heroSection">
            <div className="container">
                <div className="heroContent text-center w-md-75 w-100">
                    <figure className="logo">
                        <img src="https://fileboxer.imgix.net/inspireacademy/IA_Logo_1_se50ll.png" width="250px" />
                    </figure>
                    <h1>Hello. We are Inspire Academy</h1>
                    <p>We provide you with Educational Solutions</p>
                </div>
            </div>
            <style jsx>
                {`
                    #heroSection {
                        height:100vh;
                        background-image:url(https://fileboxer.imgix.net/inspireacademy/priscilla-du-preez-ggeZ9oyI-PE-unsplash_hpdlkj.jpg);
                        background-size:cover;
                        background-position:center top;
                    }

                    #heroSection:before {
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        content: "";
                        background-color: #f1592c;
                        opacity: 0.2;
                    }

                    .container {
                        height: 100%;
                        position: relative;
                    }

                    .heroContent {
                        position: absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                    }

                    h1,
                    p {
                        color:#fff;
                    }
                `}
            </style>
        </section>
    )
}