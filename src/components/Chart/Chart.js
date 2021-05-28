import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointsMaxValue = Math.max(...props.dataPoints
        .map(dataPoint => dataPoint.value));
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={dataPointsMaxValue}
                    label={dataPoint.label}
                />)}
        </div>
    );
};

export default Chart;