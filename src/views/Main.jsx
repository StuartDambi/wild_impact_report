import { useState, useRef } from "react";
import Chart from 'react-apexcharts';
import { useEffect } from "react";
import Map from "./Map";
import CoffeeLots from "./CofffeeLot";
import FootPrint from "./FootPrint";

const Main = () => {
    const [wildOptions] = useState({
        plotOptions: {
            expandOnClick: false,
        },
        labels: ['Value Returning to Origin', 'Value remaining in consuming country'],
        colors: ["#5BAE89", "#EA4443"],
        dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
        },
        legend: {
            position: "bottom",
            labels: {
                colors: ["#36454F"]
            }
        }
    });

    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);


    return (
        <div id="wrapper">
            <div className="content-area">
                <div className="container-fluid">
                    <div className="text-right mt-3 mb-3 d-fixed">
                        <a href="https://www.wild.coffee" target="_blank" rel="noreferrer" className="btn btn-outline-dark mr-2">
                            <span className="btn-text">Learn More</span>
                        </a>
                    </div>
                    <div className="main">

                        <h1 className="text-dark fade-in " data-animation="fade-in">Show me the money!</h1>

                        <div className="cotainer">
                            <h3 className="text-dark">Where does the money go?</h3>
                            <p>One of the key numbers for us is how much value we can return to the origin of coffee. Let’s see how the coffee you are now drinking compares to a cup from the traditional coffee industry.</p>
                            <p className="mt-4">
                                If we are to reduce global inequality, move value needs to benefit the coffee producing countries
                            </p>
                        </div>

                        <div className="d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ background: "#D3D3D3" }}>
                            <h2 className="text-dark mt-4" style={{ paddingLeft: "40px", paddingTop: "40px" }}>Value Return Rate</h2>
                            <div className="row mt-4" style={{ paddingLeft: "40px", paddingBottom: '20px' }} >
                                <div className="col-md-5">
                                    <p className="text-dark mb-3">Coffee From Traditional Coffee Industry: </p>
                                    <div className="box  mt-4">
                                        <Chart
                                            options={{ ...wildOptions }}
                                            type="pie"
                                            series={[10, 90]}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <p className="text-dark mb-3">Your Coffee from Wild</p>
                                    <div className="box mt-4">
                                        <Chart
                                            options={{ ...wildOptions }}
                                            type="pie"
                                            series={[70, 30]}

                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="d-flex flex-column" style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                            <div className="row mt-4 p-3">
                                <div className="col-md-12 p-2" style={{ background: "#D3D3D3", paddingLeft: "40px" }}>
                                    <div className="box mt-4">
                                        <h3 className="text-dark">Impact Improvement Rate</h3>
                                        <h1 className="text-dark display-1 w-100">7X</h1>
                                        <p className="h6">
                                            By drinking this coffee from Wild, your coffee consumption benefits the origin of the coffee this much more.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <section id="why-us" className="why-us">
                            <div className="container" data-aos="fade-up">

                                <div className="section-header">
                                    <h2>Meet the Farmer</h2>
                                </div>

                                <div className="container-fluid">
                                    <div className="wrapper row">
                                        <div className="col-md-6 preview">
                                            <img src="/olive-kishero.jpg" width={400} height={400} alt="olive_kishero_coffee_farmer" />
                                        </div>
                                        <div className="col-md-6 details">
                                            <h3 className="mb-3">Olive Kishero - speciality coffee from Mt Elgon</h3>

                                            <p >
                                                It's the hardest work
                                                Growing quality coffee is tough. It takes a special kind of farmer, with a unique perseverance, who never lets challenges and setbacks pull her down. One who year after year keeps improving, and never falls for temptations of doing shortcuts and pocket some quick money.

                                                Olive Kishero is one of those rare ones.

                                                "Growing coffee involves a lot of commitment. It’s the hardest work. You have to use all your energy at every stage."
                                                But the hard work has paid off. Olive came second in the Ugandan Taste of Harvest competition in 2019. When it comes to specialty coffee from Mt Elgon, Olive certainly ranks among the best.

                                                Olive has been in the coffee industry since 1989. Despite the challenges, she has been able to make sure all her seven children have received a higher education.

                                                "Since my children were young I have trained them to handle the coffee growing. They used to call this mummy's things. "We are tired of mummy's things" they said."

                                                Meet Olive and some of her children in our video portrait:
                                            </p>
                                            <button className="btn btn-dark">
                                                <i className="bi bi-play-circle"></i><span className="ml-2">Watch Video</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Timeline Start */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 col-sm-12">
                                    <section className="timeline_area section_padding_130">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-sm-8 col-lg-6">
                                                    {/* <!-- Section Heading--> */}
                                                    <div className="section_heading text-center">
                                                        <h6>Timeline</h6>
                                                        <h3>A nice heading for the coffee journey</h3>
                                                        <div className="line"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* <!-- Timeline Area--> */}
                                                    <div className="apland-timeline-area">
                                                        {/* <!-- Single Timeline Content--> */}
                                                        <div className="single-timeline-area">
                                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                                                <p>November 2021</p>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-md-12 col-lg-12">
                                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                                                        <div className="timeline-text">
                                                                            <h6>Harvesting</h6>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-12 col-md-6 col-lg-4">
                                                        <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                            <div className="timeline-icon"><i className="fa fa-archive" aria-hidden="true"></i></div>
                                                            <div className="timeline-text">
                                                                <h6>Fixed bug</h6>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4">
                                                        <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                            <div className="timeline-icon"><i className="fa fa-address-book" aria-hidden="true"></i></div>
                                                            <div className="timeline-text">
                                                                <h6>Reach 1k Users</h6>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                            </div>
                                                        </div>
                                                        {/* <!-- Single Timeline Content--> */}
                                                        <div className="single-timeline-area">
                                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                                                <p>March 2022</p>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-md-12 col-lg-12">
                                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                                        <div className="timeline-icon"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
                                                                        <div className="timeline-text">
                                                                            <h6>Processing</h6>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Single Timeline Content--> */}
                                                        <div className="single-timeline-area">
                                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                                                <p>April 2022</p>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-md-12 col-lg-12">
                                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                                        <div className="timeline-icon"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                                                                        <div className="timeline-text">
                                                                            <h6>Warehouse</h6>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Single Timeline Content--> */}
                                                        <div className="single-timeline-area">
                                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                                                <p>25th October 2022</p>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-md-12 col-lg-12">
                                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                                        <div className="timeline-icon"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                                                                        <div className="timeline-text">
                                                                            <h6>Coffee Roasting</h6>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Single Timeline Content--> */}
                                                        <div className="single-timeline-area">
                                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                                                <p>26th October 2022</p>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-md-12 col-lg-12">
                                                                    <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                                        <div className="timeline-icon"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                                                                        <div className="timeline-text">
                                                                            <h6>Coffee Exporting</h6>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    <section className="timeline_area section_padding_130">

                                        <h3 className="mb-4">Map Area of Coffee Region of Farmer</h3>

                                        <div className="col-md-12 col-sm-12">
                                            {/* Map Area */}
                                            <Map />
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* Impact Graph */}
                        <section className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h1 className="mb-4 text-dark">Premium Vs Local Market Prices</h1>
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
                                                    1000kgs (And some more Description)
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
                                                    6.32 USD
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
                                                    3.68 USD
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
                                                    71.43%
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
                                                    6316 USD
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
                                                    2632 USD
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <CoffeeLots />
                        <FootPrint />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
