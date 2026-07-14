import ReactECharts from "echarts-for-react";

const GroupBarChart = ({ data }) => {

  const option = {

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 10,
      },
    },

    grid: {
      left: "3%",
      right: "3%",
      top: "8%",
      bottom: "18%",
      containLabel: true,
    },

    xAxis: {
      type: "category",

      data: data.map(item => item.date),

      axisTick: {
        show: false,
      },

      axisLine: {
        lineStyle: {
          color: "#E5E7EB",
        },
      },

      axisLabel: {
        color: "#6B7280",
        fontSize: 10,
      },
    },

    yAxis: {
      type: "value",

      splitLine: {
        lineStyle: {
          color: "#F1F5F9",
        },
      },

      axisLabel: {
        fontSize: 10,
      },
    },

    series: [

      {
        name: "Telkomsel",
        type: "bar",

        data: data.map(item => item.telkomsel),

        itemStyle: {
          color: "#D95C5C",
          borderRadius: [4,4,0,0],
        },
      },

      {
        name: "Indosat",
        type: "bar",

        data: data.map(item => item.indosat),

        itemStyle: {
          color: "#B46DFF",
          borderRadius: [4,4,0,0],
        },
      },

      {
        name: "XL",
        type: "bar",

        data: data.map(item => item.xl),

        itemStyle: {
          color: "#4F7CFF",
          borderRadius: [4,4,0,0],
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

export default GroupBarChart;