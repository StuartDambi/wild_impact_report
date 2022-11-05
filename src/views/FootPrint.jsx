// import { useState } from 'react';
import Chart from 'react-apexcharts';

var options = {
    series: [{
        name: 'Males',
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
            3.9, 3.5, 3
        ]
    },
    {
        name: 'Females',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
        -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
    }
    ],
    chart: {
        type: 'bar',
        height: 440,
        stacked: true
    },
    colors: ['#6692D9', '#EA4443'],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',
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
        min: -5,
        max: 5,
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
            text: 'Kilograms'
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
                                            name: 'Carbon FootPrint',
                                            data: [3.1, 0.2, 0.1, 0.4, 7.0, 22,]
                                        },
                                        {
                                            name: 'Carbon FootPrint',
                                            data: [0,0,0,0,0,0,-11.2]
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
                                                <td style={{backgroundColor: "#5BAE89"}}>Farm</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">3.1</td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td style={{backgroundColor: "#5BAE89"}}>Processing</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">0.2</td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td style={{backgroundColor: "#5BAE89"}}>Administration</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">0.1</td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td style={{backgroundColor: "#5BAE89"}}>Transport - Local</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">0.4</td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td style={{backgroundColor: "#5BAE89"}}>Transport - Export</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">7.0</td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td style={{backgroundColor: "#5BAE89"}}>Carbon Offset</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">22</td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td style={{backgroundColor: "#5BAE89"}}>Final Carbon Footprint</td>
                                                <td style={{backgroundColor: '#EA4443'}} className="text-white">-11.2</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <p className="mt-3" style={{width: "100%"}}>11.2kgs C02 removed per Kg of Roasted Coffee</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


