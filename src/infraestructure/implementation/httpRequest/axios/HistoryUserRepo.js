import IHistoryUserRepo from "@/domain/repositories/IHistoryUserRepo";
import axios from "axios";

class HistoryUserRepo extends IHistoryUserRepo {
  constructor(id_user) {
    super();
    this.id_user = id_user;
    this.url = "http://localhost:3000/getAll/history/";
  }

  async getAll() {
    const response = await axios.get(`${this.url}${id_user}`);
    return response.data;
  }

}

export default HistoryUserRepo;
