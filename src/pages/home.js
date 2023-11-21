import GetAllGraficUseCase from "@/application/usecases/grafricUseCase/GetAllGraficUseCase";
import GetAllLowGraficUseCase from "@/application/usecases/grafricUseCase/GetAllLowGraficUseCase";
import GetCategoryGraficUseCase from "@/application/usecases/grafricUseCase/GetCategoryGraficUseCase";
import GrafficCategory from "@/components/GrafficCategory";
import CustomGraphic from "@/components/GrafficCustom";
import GrafficLower from "@/components/GrafficLower";
import GraficRepo from "@/infraestructure/implementation/httpRequest/axios/GraficRepo";
import { Title } from "@/styles/Home.style";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [graphicData, setGraphicData] = useState(null);
  const [graphicLowData, setGraphicLowData] = useState(null);
  const [GrafficCategoryData, setGrafficCategoryData] = useState(null);

  const loggedInUserId = useSelector((state) => state.user._id);

  useEffect(() => {
    const graficRepo = new GraficRepo(loggedInUserId);

    const getAllGraficUseCase = new GetAllGraficUseCase(graficRepo);
    getAllGraficUseCase.run().then((data) => {
      setGraphicData(data);
    });

    const getCategoryGraficUseCase = new GetCategoryGraficUseCase(graficRepo);
    getCategoryGraficUseCase.run().then((data) => {
      setGrafficCategoryData(data);
    });

    const getAllLowerGraficUseCase = new GetAllLowGraficUseCase(graficRepo);
    getAllLowerGraficUseCase.run().then((data) => {
      setGraphicLowData(data);
    });
  }, [loggedInUserId]);

  return (
    <>
    <Title>Bienvenido de vuelta!</Title>
    <span>Aquí encontrarás las gráficas más relevantes que te ayudarán a visualizar y entender los datos de manera rápida y efectiva.</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "95vh",
        }}
      >
        {graphicData && graphicLowData && GrafficCategoryData ? (
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                height: "70%",
              }}
            >
              <CustomGraphic
                data={graphicData}
                style={{ width: "40%", height: "70%" }}
              />
              <GrafficLower
                data={graphicLowData}
                style={{ width: "50%", height: "100%" }}
              />
            </div>
            <div style={{ width: "100%", height: "50%" }}>
              <GrafficCategory
                data={GrafficCategoryData}
                style={{ height: "90%" }}
              />
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Home;
