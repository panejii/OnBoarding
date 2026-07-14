import ReactECharts from "echarts-for-react";

const SankeyChart = ({ data }) => {
  const option = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        type: "sankey",

        layout: "none",

        nodeGap: 25,

        nodeWidth: 18,

        emphasis: {
          focus: "adjacency",
        },

        data: data.nodes,

        links: data.links,

        lineStyle: {
          color: "gradient",
          curveness: 0.5,
          opacity: 0.35,
        },

        label: {
          color: "#374151",
          fontSize: 12,
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{
        width: "100%",
        height: "500px",
      }}
    />
  );
};

export default SankeyChart;