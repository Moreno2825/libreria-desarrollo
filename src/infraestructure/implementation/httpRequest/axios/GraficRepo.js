import IGraficRepo from "@/domain/repositories/IGraficRepo";
import axios from "axios";

class GraficRepo extends IGraficRepo {
  constructor(id_user) {
    super();
    this.id_user = id_user;
    this.url = "http://localhost:3000/get/graphics";
  }

  async getHigherBooks(_id) {
    const response = await axios.get(this.url, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
      params: {
        graphic: "Mbooks"
      }
    });
    return response.data; 
  }

  async getLowerBooks(_id) {
    const response = await axios.get(this.url, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
      params: {
        graphic: "Lbooks"
      }
    });
    return response.data; 
  }


  async getCategoryBooks(_id) {
    const response = await axios.get(this.url, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
      params: {
        graphic: "Category"
      }
    });
    return response.data; 
  }
}
export default GraficRepo;
