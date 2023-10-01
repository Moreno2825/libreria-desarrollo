import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";
import axios from "axios";

class CategoryRepo extends ICategoryRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/getAll/category";
  }

  async getAll() {
    const response = await axios.get(this.url);
    return response.data;
  }
}
export default CategoryRepo;
