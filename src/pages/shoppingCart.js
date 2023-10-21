import {
  ClearText,
  ContainerView,
  CustomTable,
  CustomThead,
  HeaderContainer,
  Icon,
  Line,
  Row,
  SubTotalText,
  TitleDetails,
  TitleText,
  TotalText,
  ViewDetails,
} from "@/styles/ShoppingCart.style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/components/CustomButton";
import React from "react";
import { shopping } from "@/constants";
import ShoppingCartBook from "@/components/ShoppingCartBook";

export default function shoppingCart() {
  return (
    <div>
      <HeaderContainer>
        <TitleText>Carrito de compra</TitleText>
        <ClearText>Limpiar carrito</ClearText>
      </HeaderContainer>
      <div>
        <CustomTable>
          <thead>
            <CustomThead>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Eliminar</th>
            </CustomThead>
          </thead>
          <tbody>
            {shopping.map((item, index) => (
              <tr key={index}>
                <td>
                  <ShoppingCartBook
                    image={item.product.image}
                    name={item.product.name}
                    author={item.product.author}
                    price={item.product.price}
                  />
                </td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <Icon icon={faTrash} />
                </td>{" "}
                {/* agregar una función para eliminar el producto aquí */}
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </div>
      <ContainerView>
        <ViewDetails>
          <TitleDetails>Total de la compra</TitleDetails>
          <Row>
            <SubTotalText>Subtotal</SubTotalText>
            <SubTotalText>$ 1288.00</SubTotalText>
          </Row>
          <Line />
          <Row>
            <TotalText>Total</TotalText>
            <TotalText>$ 1288.00</TotalText>
          </Row>
          <CustomButton buttonText="Comprar ahora" fullWidth type="submit" />
        </ViewDetails>
      </ContainerView>
    </div>
  );
}
