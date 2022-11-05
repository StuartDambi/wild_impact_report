import Chart from 'react-apexcharts';

export default function Prices() {
    return (
        <section className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="mb-4 text-dark">Price paid vs Local market price</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <Chart
                        type="area"
                        series={[
                            {
                                name: "Local Market Price",
                                data: [3.68, 3.68]
                            },
                            {
                                name: "Premium Market Price",
                                data: [6.32, 6.32]
                            }
                        ]}
                        options={{
                            colors: ["#6692D9", "#5BAE89"],
                            stroke: {
                                curve: 'smooth'
                            },
                            xaxis: {
                                type: 'datetime',
                                categories: ["2021-10-19T00:00:00.000Z", "2021-10-19T03:00:00.000Z",]
                            },
                            tooltip: {
                                x: {
                                    format: 'dd/MM/yy HH:mm'
                                }
                            }
                        }}
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Total Volume Bought<code className="ml-2" style={{ color: "#B2453F" }}> 1000Kgs</code>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                This coffee was purchased as parchment. The purchased parchment became 600 kg roasted coffee.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Premium Market Price Per Kg<code className="ml-2" style={{ color: "#B2453F" }}> 6.32 USD</code>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                This is what we paid the farmer.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Local Market Price Per Kg<code className="ml-2" style={{ color: "#B2453F" }}> 3.68USD</code>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                This is what farmers were offered for their coffee from other buyers at this specific time and location.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    Premium Above Market Price<code className="ml-2" style={{ color: "#B2453F" }}> 71.43%</code>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Wild paid this much more than the local market was offering
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                    Total Payment to Farmer <code className="ml-2" style={{ color: "#B2453F" }}> 6316 USD</code>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                For this lot of coffee
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                    Total Above Market Price<code className="ml-2" style={{ color: "#B2453F" }}> 2632 USD</code>
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                The farmer made this much more from selling to Wild
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}