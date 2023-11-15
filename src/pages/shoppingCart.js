import {
  ClearText,
  ContainerView,
  CustomTable,
  CustomThead,
  EmptyState,
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
import React, { useEffect, useReducer, useState } from "react";
import ShoppingCartBook from "@/components/ShoppingCartBook";
import GetCartUseCase from "@/application/usecases/cartUseCase/GetCartUseCase";
import CartRepo from "@/infraestructure/implementation/httpRequest/axios/CartRepo";
import { useSelector } from "react-redux";
import DeleteProductCartUseCase from "@/application/usecases/cartUseCase/DeleteProductCartUseCase";
import DeleteAllCartUseCase from "@/application/usecases/cartUseCase/DeleteAllCartUseCase";
import CustomAlert from "@/components/CustomAlert";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51O9VOUIFwFx6YJHYQKFypXZA429JQNbbMY15cisOcYLDjfUAVPJBcIiG0YIW3z06fuXyZBTr8ltjVR3z6DcyvzCZ00GMmm74Bn"
);

const paymentSchema = yup.object().shape({
  cardName: yup.string().required("Este dato es requerido"),
});

const ShoppingCart = () => {
  const [isPurchaseSuccess, setPurchaseSuccess] = useState(false);
  const route = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const userId = useSelector((state) => state.user._id);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartRepo = new CartRepo(userId);
  const getCartUseCase = new GetCartUseCase(cartRepo);

  const deleteProductCartUseCase = new DeleteProductCartUseCase(cartRepo);
  const deleteAllCartUseCase = new DeleteAllCartUseCase(cartRepo);

  const resetPurchaseAlert = () => {
    setTimeout(() => {
      setPurchaseSuccess(false);
    }, 1000);
  };

  async function paymentMethod(userIdToPost) {
    try {
      const response = await axios.post(
        `http://localhost:3000/cart/payment`,
        {
          userId: userIdToPost,
        },
        {
          headers: {
            "Content-Type": "application/json",
            id_user: userIdToPost,
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        return true;
      }
      console.error("Error:", response.statusText);
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }
    const CARD_ELEMENT_OPTIONS = {
      hidePostalCode: true,
    };

    const postData = {
      id,
      amount: totalPrice * 100,
    };

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement, CARD_ELEMENT_OPTIONS),
      billing_details: {
        name: data.cardName,
      },
    });
    console.log("pago:", paymentMethod);

    if (error) {
      console.log("Error al crear el método de pago:", error);
    } else {
      try {
        const response = await axios.post("/api/stripe", postData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(response.data);

        if (response.status === 200) {
          const success = await paymentMethod(userId);
          if (success) {
            route.push("/history");
          }
        } else {
          throw new Error('El pago no fue exitoso.');
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    }
  };

  const fetchOrder = async () => {
    try {
      const order = await getCartUseCase.run(userId);
      setOrder(order.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentClick = async () => {
    const success = await paymentMethod(userId);
    if (success) {
      route.push("/history");
    }
  };

  const handleDeleteProduct = async (bookId) => {
    try {
      await deleteProductCartUseCase.run(userId, bookId);
      setPurchaseSuccess(true);
      resetPurchaseAlert();
      // establecer un nuevo array filtrado
      setOrder((prevOrder) =>
        prevOrder.filter((item) => item.bookId !== bookId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleDeleteCart = async () => {
    try {
      await deleteAllCartUseCase.run(userId);
      // mi lista vacia para que order.length === 0 se aplique
      setOrder([]);
    } catch (error) {
      console.error("Error deleting cart:", error);
    }
  };

  /// recordar dejar abajo los useEffect
  useEffect(() => {
    fetchOrder();
  }, [userId]);

  useEffect(() => {
    const total = order.reduce((acc, item) => acc + item.totalPrice, 0);
    setTotalPrice(total);
  }, [order]);

  return (
    <div>
      <HeaderContainer>
        <TitleText>Carrito de compra</TitleText>
        <ClearText onClick={handleDeleteCart}>Limpiar carrito</ClearText>
      </HeaderContainer>
      {order.length === 0 ? (
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
          </CustomTable>
          <EmptyState>
            <h2>Tu carrito está vacío</h2>
            <p>Agrega algunos productos para comenzar.</p>
          </EmptyState>
        </div>
      ) : (
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
              {order.map((item, index) => (
                <tr key={index}>
                  <td>
                    <ShoppingCartBook
                      image={item.frontImage}
                      name={item.name}
                      price={item.unitPrice}
                    />
                  </td>
                  <td>{item.quantity}</td>
                  <td>$ {item.totalPrice}.00 MX</td>
                  <td>
                    <Icon
                      icon={faTrash}
                      onClick={() => handleDeleteProduct(item.bookId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </div>
      )}
      <ContainerView onSubmit={onSubmit}>
        <ViewDetails>
          <TitleDetails>Total de la compra</TitleDetails>
          <Row>
            <SubTotalText>Subtotal</SubTotalText>
            <SubTotalText>$ {totalPrice}.00 MX</SubTotalText>
          </Row>
          <Line />
          <Row>
            <TotalText>Total</TotalText>
            <TotalText>$ {totalPrice}.00 MX</TotalText>
          </Row>
          <CardElement/>
          <CustomButton
            buttonText="Comprar ahora"
            fullWidth
            type="submit"
          />
        </ViewDetails>
      </ContainerView>
      <CustomAlert
        open={isPurchaseSuccess}
        onClose={() => setPurchaseSuccess(false)}
        title="Eliminado correctamente"
        text="El producto se ha eliminado correctamente de tu carrito"
      >
        <Image
          src="/img/correcto.png"
          width={109}
          height={123}
          alt="ok"
        ></Image>
      </CustomAlert>
    </div>
  );
};

export default function PaymentMethod() {
  return (
    <Elements stripe={stripePromise}>
      <ShoppingCart />
    </Elements>
  );
}
