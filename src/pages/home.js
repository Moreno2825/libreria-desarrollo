import GetAllGraficUseCase from "@/application/usecases/grafricUseCase/GetAllGraficUseCase";
import GetAllLowGraficUseCase from "@/application/usecases/grafricUseCase/GetAllLowGraficUseCase";
import CustomGraphic from "@/components/GrafficCustom";
import GraficRepo from "@/infraestructure/implementation/httpRequest/axios/GraficRepo";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Home = () => {
  const [graphicData, setGraphicData] = useState(null);
  const [graphicLowData, setGraphicLowData] = useState(null);
  
  const loggedInUserId = useSelector((state) => state.user._id);

  useEffect(() => {
    const graficRepo = new GraficRepo(loggedInUserId);
    const getAllGraficUseCase = new GetAllGraficUseCase(graficRepo);

    getAllGraficUseCase.run().then(data => {
      setGraphicData(data);
    });

    const getAllLowerGraficUseCase = new GetAllLowGraficUseCase(graficRepo);
    getAllLowerGraficUseCase.run().then(data => {
      setGraphicLowData(data);
    })
  }, [loggedInUserId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {graphicData && graphicLowData ? (
        <>
          <CustomGraphic data={graphicData} style={{ flex: 1, height: '400px' }}/>
          <CustomGraphic data={graphicLowData} style={{ flex: 1, height: '400px' }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
