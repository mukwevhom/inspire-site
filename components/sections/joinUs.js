import MyForm from '../Form';

export default function JoinUs() {
    return (
        <section className="sectionWrapper pt-5 pb-5" id="connectWithUs">
            <div className="container text-center">
                <div className="sectionHeader">
                    <h3>Join Us</h3>
                    <p>Please complete the below to join us</p>
                </div>
                <div className="sectionContent mt-5">
                    <MyForm />
                </div>
            </div>
            <style jsx>
                {`
                    
                `}
            </style>
        </section>
    )
}