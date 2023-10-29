import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";
import axios from "axios";

class CategoryRepo extends ICategoryRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/getAll/category";
    this.urlId = "http://localhost:3000/getById/Category/"
  }

  async getAll() {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getOne(_id) {
    const response = await axios.get(`${this.urlId}${_id}`);
    return response.data;
  }
}
export default CategoryRepo;
