import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const GrafficCategory = ({ data, style }) => {
  const chartRef = useRef(null);

  useEffect(() => {
if (data && data.length) {
  const transformedData = data.map((item) => ({
    value: item.totalSoldCount,
    name: item._id,
  }));

      const myChart = echarts.init(chartRef.current);
      const option = 
      {
        tooltip:{
          show:true,
        },
        xAxis: {
          type: 'category',
          data: transformedData.map((item) => item.name),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: transformedData.map((item) => item.value),
            type: 'bar', // Puedes ajustar el tipo de gráfico según tus necesidades
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

export default GrafficCategory;
