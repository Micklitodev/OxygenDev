"use client";

import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";

const AnalyticsComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const data: ChartConfiguration = {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Monthly Usage (GB)",
              data: [10, 23, 15, 30, 25, 17, 20, 33, 45, 36, 36, 55],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: `Total Gross `,
              color: "rgba(159, 122, 234, 0.7)",
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                color: "rgba(255, 60, 5, 0.8)",
              },
              ticks: {
                color: "rgba(245, 245, 245, 0.8)",
              },
              grid: {
                color: "rgba(225, 225, 225, 0.4)",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                color: "rgba(255, 60, 5, 0.8)",
              },
              ticks: {
                color: "rgba(245, 245, 245, 0.8)",
              },
              grid: {
                color: "rgba(225, 225, 225, 0.4)",
              },
            },
          },
        },
      };
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      if (ctx) {
        chartInstance.current = new Chart(ctx, data);
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="600" height="300"></canvas>
    </div>
  );
};

export default AnalyticsComponent;
