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
        left: "18%",   // ⬅️ kasih ruang buat label kiri
        right: "18%",  // ⬅️ kasih ruang buat label kanan
        nodeGap: 70,
        nodeWidth: 3,

        emphasis: {
          focus: "adjacency",
        },

        data: data.nodes.map((n) => ({
          ...n,
          x: n.side === "left" ? 0.05 : n.side === "right" ? 0.95 : 0.5,
          y: n.y,
          label: {
            position: n.side === "right" ? "left" : "right",
          },
        })),

        links: data.links.map((l) => ({
          ...l,
          actualValue: l.value,
          value: 1,
        })),

        lineStyle: {
          color: "gradient",
          curveness: 0.5,
          opacity: 0.35,
        },

        label: {
          color: "#374151",
          fontSize: 8,
          formatter: (p) => p.name,
        },

        edgeLabel: {
          show: true,
          fontSize: 8,
          color: "#374151",
          formatter: (p) => p.data.actualValue,
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default SankeyChart;