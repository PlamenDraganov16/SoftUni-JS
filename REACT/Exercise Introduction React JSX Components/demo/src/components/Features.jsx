import FeatureItem from "./FeatureItem.jsx";

export default function Features() {
    return (
        <section className="section home-feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">

                            <FeatureItem title="Modern Strategy" paragraph="Customize anything in this template to fit your website needs" />

                            <FeatureItem title="Best Relationship" paragraph="Contact us immediately if you have a question in mind" />

                            <FeatureItem title="Ultimate Marketing" paragraph="You just need to tell your friends about our free templates" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}