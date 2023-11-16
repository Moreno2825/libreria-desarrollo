import GetAllGraficUseCase from "@/application/usecases/grafricUseCase/GetAllGraficUseCase";
import GetAllLowGraficUseCase from "@/application/usecases/grafricUseCase/GetAllLowGraficUseCase";
import GetCategoryGraficUseCase from "@/application/usecases/grafricUseCase/GetCategoryGraficUseCase";
import GrafficCategory from "@/components/GrafficCategory";
import CustomGraphic from "@/components/GrafficCustom";
import GrafficLower from "@/components/GrafficLower";
import GraficRepo from "@/infraestructure/implementation/httpRequest/axios/GraficRepo";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Home = () => {
  const [graphicData, setGraphicData] = useState(null);
  const [graphicLowData, setGraphicLowData] = useState(null);
  const [GrafficCategoryData, setGrafficCategoryData] = useState(null);
  
  const loggedInUserId = useSelector((state) => state.user._id);

  useEffect(() => {
    const graficRepo = new GraficRepo(loggedInUserId);

    const getAllGraficUseCase = new GetAllGraficUseCase(graficRepo);
    getAllGraficUseCase.run().then(data => {
      setGraphicData(data);
    });

    const getCategoryGraficUseCase = new GetCategoryGraficUseCase(graficRepo);
    getCategoryGraficUseCase.run().then(data => {
      setGrafficCategoryData(data);
    });

    const getAllLowerGraficUseCase = new GetAllLowGraficUseCase(graficRepo);
    getAllLowerGraficUseCase.run().then(data => {
      setGraphicLowData(data);
    })
  }, [loggedInUserId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {graphicData && graphicLowData && GrafficCategoryData ? (
        <>
          <CustomGraphic data={graphicData} style={{ flex: 1, height: '400px' }} />
          <GrafficLower data={graphicLowData} style={{ flex: 1, height: '400px',  }} />
          <div style={{ lineHeight: 2}}> <br/> </div>
          <GrafficCategory data={GrafficCategoryData} style={{ flex: 2, height: '400px'}} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
