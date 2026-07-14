import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const AreaChart = ({ data }) => {
  const option = {
    tooltip: {
      trigger: "axis",
    },

    grid: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data.map((item) => item.date),

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },

      axisLabel: {
        color: "#9CA3AF",
      },
    },

    yAxis: {
      type: "value",

      splitLine: {
        lineStyle: {
          color: "#E5E7EB",
        },
      },

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },
    },

    series: [
      {
        data: data.map((item) => item.value),

        type: "line",

        smooth: true,

        symbol: "circle",

        symbolSize: 8,

        lineStyle: {
          width: 3,
          color: "#2563EB",
        },

        itemStyle: {
          color: "#2563EB",
        },

        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(37,99,235,.35)",
              },
              {
                offset: 1,
                color: "rgba(37,99,235,.03)",
              },
            ]
          ),
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default AreaChart;