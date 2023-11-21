import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const GrafficLower = ({ data, style }) => {
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
          trigger: 'item'
        },
        legend: {
          top: 'bottom'
        },
        
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: transformedData,
          }
        ]
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

export default GrafficLower;
