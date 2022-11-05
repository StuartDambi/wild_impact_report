// import { useState } from 'react';
import Chart from 'react-apexcharts';

var options = {
    chart: {
        type: 'bar',
        height: 440,
        stacked: true
    },
    colors: ['#EA4443', '#EA4443', '#EA4443', '#EA4443', '#EA4443', '#EFB94F', '#5BAE89'],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',
            distributed: true
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },

    grid: {
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    yaxis: {
        min: -25,
        max: 10,
        title: {
            // text: 'Age',
        },
    },
    tooltip: {
        shared: false,
        x: {
            formatter: function (val) {
                return val
            }
        },
        y: {
            formatter: function (val) {
                return Math.abs(val) + ""
            }
        }
    },
    title: {
        text: 'Carbon Foot Print /kg Roasted Coffee'
    },
    xaxis: {
        categories: ['Farm', 'Processing', 'Administration', 'Transport - Local', 'Transport - Export', 'Carbon Offset', 'Final Carbon Footprint'
        ],
        title: {
            text: 'Kilograms C02 removed Per Kg of Roasted Coffee'
        },
        labels: {
            formatter: function (val) {
                return Math.abs(Math.round(val)) + ""
            }
        }
    },
};

export default function FootPrint() {

    return (
        <>

            
            <section data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <h3 className="mb-4 text-dark">Carbon Footprint</h3>
                    <div className="card">
                        <div className="container-fluid">
                            <div className="wrapper row">
                                <div className="col-md-8">
                                    <Chart
                                        type="bar"

                                        // height={350}
                                        // series={[{
                                        //     data: [3.1, 0.2, 0.1,0.4,7.0,22]
                                        // }]}
                                        series={[
                                            {
                                                name: 'Negative Carbon FootPrint',
                                                data: [3.1, 0.2, 0.1, 0.4, 7.0, 0,]
                                            },
                                            {
                                                name: 'Positive Carbon FootPrint',
                                                data: [0, 0, 0, 0, 0, -22, -11.2]
                                            }
                                        ]}

                                        options={options}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <h3 className="mt-4 text-dark">Values</h3>

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr></tr>
                                            </thead>
                                            <tbody>
                                                <tr itemScope="row">
                                                    <td>Farm</td>
                                                    <td style={{ backgroundColor: '#EA4443' }} className="text-white">3.1</td>
                                                </tr>
                                                <tr itemScope="row">
                                                    <td>Processing</td>
                                                    <td style={{ backgroundColor: '#EA4443' }} className="text-white">0.2</td>
                                                </tr>
                                                <tr itemScope="row">
                                                    <td>Administration</td>
                                                    <td style={{ backgroundColor: '#EA4443' }} className="text-white">0.1</td>
                                                </tr>
                                                <tr itemScope="row">
                                                    <td>Transport - Local</td>
                                                    <td style={{ backgroundColor: '#EA4443' }} className="text-white">0.4</td>
                                                </tr>
                                                <tr itemScope="row">
                                                    <td>Transport - Export</td>
                                                    <td style={{ backgroundColor: '#EA4443' }} className="text-white">7.0</td>
                                                </tr>
                                                <tr itemScope="row">
                                                    <td>Carbon Offset</td>
                                                    <td style={{ backgroundColor: '#EFB94F' }} className="text-white">-22</td>
                                                </tr>
                                                <tr itemScope="row">
                                                    <td>Final Carbon Footprint</td>
                                                    <td style={{ backgroundColor: '#5BAE89' }} className="text-white">-11.2</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <p className="mt-3" style={{ width: "100%" }}>11.2kgs C02 removed per Kg of Roasted Coffee</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex flex-column" style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                <div className="row mt-4 p-3">
                    <div className="col-md-12 p-2" style={{ background: "#CFECE1", paddingLeft: "40px" }}>
                        <div className="box mt-4">
                            <h3 className="text-dark mb-4">This coffee is carbon negative.</h3>
                            {/* <h1 className="text-dark display-1 w-100">7X</h1> */}
                            <p className="h6">
                            Each kg of this coffee has contributed to the removal of 11.2 kgs of greenhouse gases from the atmosphere.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}


