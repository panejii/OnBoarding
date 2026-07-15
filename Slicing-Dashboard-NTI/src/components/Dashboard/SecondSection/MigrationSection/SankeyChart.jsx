import ReactECharts from "echarts-for-react";

const SankeyChart = ({ data }) => {

  console.log(data)

  const option = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        type: "sankey",

        layout: "none",

        nodeGap: 20,

        nodeWidth: 3,  

        emphasis: {
          focus: "adjacency",
        },

        // data: data.nodes,

        // links: data.links,

        data: data.nodes.map((n, i) => ({
          ...n,
          x: n.side === "left" ? 0.05 : n.side === "right" ? 0.95 : 0.5,
          y: n.y, // atur manual per posisi vertikal, jaraknya kamu tentukan sendiri
        })),
        links: data.links.map((l) => ({
          ...l,
          value: 1, // paksa semua link "setebal" yang sama
        })),
        label: {
          formatter: (p) => `${p.name}\n${originalValueMap[p.name]}`,
        },

        lineStyle: {
          color: "gradient",
          curveness: 0.5,
          opacity: 0.35,
        },

        label: {
          color: "#374151",
          fontSize: 8,
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{
        width: "100%",
        height: "120px",
      }}
    />
  );
};

export default SankeyChart;