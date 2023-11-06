import {
  DescriptionText,
  TitleText,
} from "@/styles/History.style";
import React from "react";
import TableHistory from "@/components/TableHistory";

export default function History() {
  return (
    <div>
      <div style={{marginBottom: "26px"}}>
        <TitleText>Historial de compras</TitleText>
        <DescriptionText>
        He aquí el historial de la humanidad, escrito con la tinta de la sabiduría 
        y encuadernado en las bibliotecas de la eternidad, donde cada página es un testigo silencioso de los pasajes más memorables de la historia.{" "}
        </DescriptionText>
      </div>
      <TableHistory/>
      <div>

      </div>
    </div>
  );
}
