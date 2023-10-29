import {
  CustomTable,
  CustomThead,
  DescriptionText,
  Icon,
  TitleText,
} from "@/styles/History.style";
import { FiShoppingCart } from "react-icons/fi";
import { history } from "@/constants";
import React from "react";

export default function History() {
  return (
    <div>
      <div>
        <TitleText>Historial de compras</TitleText>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </DescriptionText>
      </div>
      <div>
        <CustomTable>
          <thead>
            <CustomThead>
              <th></th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Total</th>
            </CustomThead>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <Icon>
                  <FiShoppingCart size={20} />
                </Icon>
                <td>{item.product.name}</td>
                <td>{item.date}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice} MX</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </div>
    </div>
  );
}
