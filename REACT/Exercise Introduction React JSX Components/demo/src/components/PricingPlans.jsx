import PricingItem from "./PricingItem.jsx";

export default function PricingPlans() {
    return (
        <section className="section colored" id="pricing-plans">
            <div className="container">
                {/* ***** Section Title Start ***** */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Pricing Plans</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>
                                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                                quis arcu elementum, quis congue risus volutpat.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ***** Section Title End ***** */}
                <div className="row">

                    <PricingItem
                        className="pricing-item"
                        title="Starter"
                        price={14.50}
                        space={60}
                        transfer={600}
                        pro
                    />

                    <PricingItem
                        className="pricing-item active"
                        title="Premium"
                        price={21.50}
                        space={120}
                        transfer={1200}
                        pro
                        support
                    />

                    <PricingItem
                        className="pricing-item"
                        title="Advanced"
                        price={42.00}
                        space={250}
                        transfer={5000}
                        pro
                        support
                        emails
                        security
                    />

                </div>
            </div>
        </section>
    )
}