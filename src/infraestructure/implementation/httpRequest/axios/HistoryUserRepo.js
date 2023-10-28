import IHistoryUserRepo from "@/domain/repositories/IHistoryUserRepo";
import axios from "axios";

class HistoryUserRepo extends IHistoryUserRepo {
    constructor(id_user) {
        super();
        this.id_user = id_user;
        this.url = "http://localhost:3000/getAll/history/";
    }

    async getAll(_id) {
        const response = await axios.get(`${this.url}${this.id_user}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    id_user: this.id_user,
                },
            });
        console.log(response.data);
        return response.data;

    }

}

export default HistoryUserRepo;
