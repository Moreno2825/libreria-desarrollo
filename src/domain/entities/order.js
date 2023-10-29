class Order {
    constructor(
        productId,
        userId,
        quantity,
        percentDiscount,
    ) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.percentDiscount = percentDiscount;
    }
}
export default Order;