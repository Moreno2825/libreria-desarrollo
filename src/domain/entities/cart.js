class Cart {
    constructor(
        bookId,
        name,
        frontImage,
        backImage,
        quantity,
        unitPrice,
        totalPrice,
        categoryNames,
        totalPriceOfCart
    ) {
        this.bookId = bookId;
        this.name = name;
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.totalPrice = totalPrice;
        this.categoryNames = categoryNames;
        this.totalPriceOfCart = totalPriceOfCart;
    }
}