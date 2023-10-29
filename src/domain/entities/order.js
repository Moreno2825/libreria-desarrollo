class Order {
    constructor(
        productId,
        userId,
        quantity,
        totalPrice,
        percentDiscount,
        unitPrice
    ) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.percentDiscount = percentDiscount;
        this.unitPrice = unitPrice;
    }
}
export default Order;