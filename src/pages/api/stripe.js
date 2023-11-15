import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51O9VOUIFwFx6YJHY6luBfoUWo8V1pn7gFJPUbFMW9YPYjVc8eC4nWmXFdBHAuLLot37F1asSqHl3HyN4CDEMl4pz00yQq88Tuq"
);

export default async (req, res) => {
  if (req.method === "POST") {
    const { id, amount } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "MXN",
        payment_method: id,
        confirm: true,
      });

      console.log(payment);

      return res.status(200).json({ message: "Pago exitoso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method ${req.method} Not Allowed");
  }
};
