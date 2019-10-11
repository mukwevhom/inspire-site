export default function Hero() {
    return (
        <section className="sectionWrapper" id="heroSection">
            <div className="container">
                <div className="heroContent text-center">
                    <figure className="logo">
                        <img src="https://res.cloudinary.com/dbu3hvhtr/image/upload/v1570508944/InspireAcademy/IA_Logo_1_se50ll.png" width="250px" />
                    </figure>
                    <h1>Hello. We are Inspire Academy</h1>
                    <p>We provide you with Educational Solutions</p>
                </div>
            </div>
            <style jsx>
                {`
                    #heroSection {
                        height:100vh;
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
                `}
            </style>
        </section>
    )
}