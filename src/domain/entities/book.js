class Book {
  constructor(
    _id,
    name,
    author,
    details,
    id_category,
    price,
    priceDiscount,
    frontImage,
    backImage
  ) {
    this._id = _id;
    this.name = name;
    this.author = author;
    this.details = details;
    this.id_category = id_category;
    this.price = price;
    this.priceDiscount = priceDiscount;
    this.frontImage = frontImage;
    this.backImage = backImage;
  }
}
export default Book;
