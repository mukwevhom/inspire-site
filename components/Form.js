import { ValidationError, useForm } from '@formspree/react';

export default function MyForm() {
    const [state, submit] = useForm("mwkzbvdo");

    if (state.succeeded) {
        return (
            <div>Thank you for contacting us we'll get back to you!</div>
        )
    }

    return (
        <form onSubmit={submit} className="mx-auto">
            <div className="fieldWrapper">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="fieldWrapper">
                <label htmlFor="contactNo">Contact Number</label>
                <input type="phone" name="contactNo"placeholder="Contact Number"  required />
            </div>
            <div className="fieldWrapper">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email Address"  required />
                <ValidationError field="email" prefix="Email" errors={state.errors} />
            </div>
            <div className="fieldWrapper">
                <label htmlFor="services">Services</label>
                <select name="services">
                    <option value="Tutoring">Tutoring</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Motivation">Motivation</option>
                    <option value="Career Guidance">Career Guidance</option>
                </select>
            </div>
            <button type="submit" className="btn cta mt-3 w-25">Join Us</button>
            <style jsx>
                {`
                
                    .fieldWrapper > * {
                        display: block;
                        text-align: initial;
                        width: 100%;
                    }

                    .fieldWrapper:not(:last-of-type) {
                        margin-bottom:21px;
                    }

                    .fieldWrapper input,
                    .fieldWrapper select {
                        padding: 5px;
                        border-radius: 3px;
                        border: 1px solid;
                    }

                    .fieldWrapper select {
                        background-color: #0000;
                        height: 36px;
                    }

                    
                `}
            </style>
            <style global jsx>
                {`

                    form {
                        width:50% !important;
                    }
                    .btn.cta {
                        width:50%;
                        background-color:#f1592c;
                        color:#fff;
                    }

                    @media (max-width:767px) {
                        form {
                            width:90% !important;
                        }
                        .btn.cta {
                            width:75%;
                        }
                    }
                `}
            </style>
        </form>
    )
}