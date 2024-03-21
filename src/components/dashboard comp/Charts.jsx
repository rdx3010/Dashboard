
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Charts = ({ data , type ,widthx , heighty}) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy(); // Destroy the previous Chart instance
      }
  
      const ctx = chartRef.current.getContext('2d');
  
      chartInstance.current = new Chart(ctx, {
        type: type,
        data: data,
      });
  
      return () => {
        if (chartInstance.current !== null) {
          chartInstance.current.destroy(); // Ensure the Chart instance is destroyed when the component unmounts
        }
      };
    }, [data, type, widthx, heighty]);
  
    return (
      <div className='canvus'>
        <canvas ref={chartRef}  width={widthx} height={heighty}></canvas>
      </div>
    );
  };

export default Charts;