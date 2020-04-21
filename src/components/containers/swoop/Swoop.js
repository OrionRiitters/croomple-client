import React, { useState } from 'react';
import {Line} from 'react-chartjs-2';
import './Swoop.scss';
import cubicBezier from '../../../utilities/cubic-bezier';

export default function Swoop(props) {

    const calculateBezier = function() {
        let range = [];
        for (let i = 0; i <= 1.01; i=i+.01) {
            range.push(cubicBezier.easeIn(i));
        }
        console.log(range.length)
        return range
    }

    const makeLabels = function() {
        let range = [];
        for (let i = 0; i < 100; i++) {
            range.push(cubicBezier.easeIn(i));
        }
        console.log(range.length)
        return range
    }
    const data = {
        labels: makeLabels(),
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
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: calculateBezier()
            }
        ]
    };

    return (
        <div onClick={calculateBezier} className="Swoop" >
            <div className="animated-box" />
            <Line data={data} height={60} width={60} />
        </div>
    )
}