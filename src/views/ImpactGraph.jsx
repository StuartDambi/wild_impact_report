import React from 'react';
import { IgrFinancialChart, IgrFinancialChartModule } from 'igniteui-react-charts';


const data = [
    {
        date: "2021-03-01",
        traditional: 3.68,
        premium: 6.32,
        volume: 1000
    },
    {
        date: "2021-12-01",
        traditional: 3.68,
        premium: 6.32,
        volume: 1000
    },
    {
        date: "2022-05-01",
        traditional: 3.68,
        premium: 6.32,
        volume: 1000
    },
    {
        date: "2022-08-21",
        traditional: 3.68,
        premium: 6.32,
        volume: 1000
    },
]

const ImpactGraph: React.FC = () => {
    return (
        <div className="container">
            <div className="container" style={{ height: "calc(100% - 25px)" }}>
                <IgrFinancialChart
                    width='100%'
                    height='100%'
                    chartType="Line"
                    thickness={2}
                    chartTitle="Traditional vs Premium Coffee Prices"
                    subtitle="Between 2021 and 2022"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    dataSource={data}
                />
            </div>
        </div>
    )
}

export default ImpactGraph;


