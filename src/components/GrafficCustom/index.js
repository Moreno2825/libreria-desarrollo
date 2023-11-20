import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const CustomGraphic = ({ data, style }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length) {
      const transformedData = data.map((item) => ({
        value: item.totalSoldCount,
        name: item.name,
      }));

      const myChart = echarts.init(chartRef.current);
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: transformedData,
          },
        ],
      };

      myChart.setOption(option);

      // Limpieza cuando el componente se desmonta
      return () => {
        myChart.dispose();
      };
    }
  }, [data]); // Dependencia de los datos para actualización

  return (
    <div ref={chartRef} style={style || { width: "100%", height: "400px" }} />
  );
};

export default CustomGraphic;
