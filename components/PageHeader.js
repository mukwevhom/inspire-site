export default function PageHeader(props) {
    return (
        <section className="pageHeader">
            <div className="container text-center">
                {props.children}
            </div>
            <style jsx>
                {`
                    .pageHeader {
                        padding:144px 0 72px;
                        background-color:#f1592c;
                        color:#fff;
                    }
                `}
            </style>
        </section>
    )
}