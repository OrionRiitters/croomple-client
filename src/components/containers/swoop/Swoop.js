import React, { useState, useEffect, useRef } from 'react';
import {Line} from 'react-chartjs-2';
import './Swoop.scss';
import cubicBezier from '../../../utilities/cubic-bezier';

export default function Swoop(props) {
    const [tInt, setTInt] = useState(0);
    const chartRef = useRef({});
    const [chartData, setChartData] = useState({
        labels: [...Array(100)],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#338800',
                pointBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [...Array(100)]
            }
        ]
    })
    useEffect(() => {
        let newChartData = {...chartData}
            newChartData.labels = makeLabels();
            newChartData.datasets[0].data = calculateBezier();

        let asd = 0;
        let flip = 1;
        const interval = setInterval(() => {
            asd = asd + flip;
            if (asd >= 100 || asd <= 0) {
                flip = flip * -1;
            }
            setTInt(asd);
            newChartData.datasets[0].pointRadius = renderPoints(asd);
            setChartData(newChartData);
        }, 16);
        return () => clearInterval(interval);
      }, []);
    
    const renderPoints = function(asd) {
        let points = makeLabels().map((e,i) => {
            if (i === asd) {
                return 100;
            } 
            return 1
        });
        return points
    }

    const calculateBezier = function() {
        let range = [];
        for (let i = 0; i <= 1.01; i=i+.01) {
            range.push(cubicBezier.easeIn(i));
        }
        return range
    }

    const makeLabels = function() {
        let range = [];
        for (let i = 0; i < 100; i++) {
            range.push(i);
        }
        return range
    }

    let animatedBoxStyle = {
        left: `${cubicBezier.easeIn(tInt*.01).y * 500}px`,
        top: '20px'
    }

    return (
        <div onClick={calculateBezier} className="Swoop" >
            <div className="animated-box" style={animatedBoxStyle} />
            <Line ref={chartRef} data={chartData} height={60} width={60} />
            <img src="./content/media/cool_pic.jpg" className={`${tInt > 98 ? '' : 'hide'}`} />
        </div>
    )
}
