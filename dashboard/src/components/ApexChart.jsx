import React, { useState } from "react";
import Chart from "react-apexcharts";

function ApexChart() {
  const [chartData] = useState({
    options: {
      chart: {
        id: "apexchart-bar",
        toolbar: {
          show: true, // Toolbar for chart interaction
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ], // Months
      },
      yaxis: {
        tickAmount: 5, // Divides into 5 ticks (adjustable)
        min: 0,
        max: 100,
        labels: {
          formatter: (val) => `${val}`, // Show values as is
        },
      },
      legend: {
        position: "top", // Legend at the top
        horizontalAlign: "center",
      },
      plotOptions: {
        bar: {
          horizontal: false, // Vertical bars
          columnWidth: "50%", // Adjusts bar width
          dataLabels: {
            enabled: false, // Disable data labels on bars
          },
        },
      },
      colors: ["#008FFB", "#00E396", "#FEB019"], // Bar colors
      dataLabels: {
        enabled: false, // Disable data labels at the root level
      },
      tooltip: {
        shared: true, // Use this if you want a shared tooltip
        intersect: false, // Make sure this is false when `shared` is true
      },
    },
    series: [
      {
        name: "Orders",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 65, 55, 45], // Sample data for orders
      },
      {
        name: "Revenue",
        data: [20, 30, 25, 40, 39, 50, 60, 81, 75, 55, 45, 35], // Sample data for revenue
      },
      {
        name: "Sales",
        data: [10, 20, 15, 30, 29, 40, 50, 61, 55, 35, 25, 15], // Sample data for sellers
      },
    ],
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar" // Bar chart
        width="100%"
        height={400}
      />
    </div>
  );
}

export default ApexChart;
