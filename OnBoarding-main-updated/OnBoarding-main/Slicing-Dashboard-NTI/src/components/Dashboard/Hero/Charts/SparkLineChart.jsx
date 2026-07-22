import ReactECharts from "echarts-for-react";

const SparklineChart = ({ data, color = "#E53935" }) => {
  const option = {
    grid: {
      left: 0,
      right: 0,
      top: 5,
      bottom: 5,
    },

    xAxis: {
      type: "category",
      show: false,
      boundaryGap: false,
      data: data.map((_, index) => index),
    },

    yAxis: {
      type: "value",
      show: false,
      scale: true,
    },

    tooltip: {
      show: false,
    },

    series: [
      {
        type: "line",
        data: data,
        smooth: true,
        showSymbol: false,

        lineStyle: {
          color: color,
          width: 3,
        },

        areaStyle: {
          opacity: 0.12,
          color: color,
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default SparklineChart;