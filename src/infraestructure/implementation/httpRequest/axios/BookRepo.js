import IBookRepo from "@/domain/repositories/IBookRepo";
import axios from "axios";

class BookRepo extends IBookRepo {
  constructor(id_user) {
    super();
    this.id_user = id_user;
    this.url = "http://localhost:3000/getAll/books";
    this.urlId = "http://localhost:3000/getOne/";
    this.urlCreate = "http://localhost:3000/create/books";
    this.urlUpdate = "http://localhost:3000/update/";
    this.urlDelete = "http://localhost:3000/delete/";
  }

  async getAll() {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getOne(_id) {
    const response = await axios.get(`${this.urlId}${_id}`);
    return response.data;
  }

  async create(book) {
    const formData = new FormData();
    formData.append("name", book.name);
    formData.append("author", book.author);
    formData.append("details", book.details);
    formData.append("id_category", book.id_category);
    formData.append("price", book.price);
    formData.append("priceDiscount", book.priceDiscount);
    formData.append("frontImage", book.frontImage);
    formData.append("backImage", book.backImage);

    const response = await axios.post(this.urlCreate, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        id_user: this.id_user,
      },
    });
    return response.data;
  }

  async update(book) {
    try {
      const formData = new FormData();
      formData.append("name", book.name);
      formData.append("author", book.author);
      formData.append("details", book.details);
      formData.append("id_category", book.id_category);
      formData.append("price", book.price);
      formData.append("priceDiscount", book.priceDiscount);
      formData.append("frontImage", book.frontImage);
      formData.append("backImage", book.backImage);

      const response = await axios.put(
        `${this.urlUpdate}${book._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            id_user: this.id_user,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating book: ", error);
      throw error;
    }
  }

  async delete(_id) {
    const response = await axios.delete(`${this.urlDelete}${_id}`, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
    });
    return response.data;
  }
}
export default BookRepo;
