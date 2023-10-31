import IHistoryUserRepo from "@/domain/repositories/IHistoryUserRepo";
import axios from "axios";

class HistoryUserRepo extends IHistoryUserRepo {
    constructor(id_user) {
        super();
        this.id_user = id_user;
        this.url = "http://localhost:3000/getAll/history/";
        this.urlById = "http://localhost:3000/getbyId/history/";
    }

    async getAll(_id) {
        const response = await axios.get(`${this.url}${this.id_user}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    id_user: this.id_user,
                },
            });
        return response.data;
    }
    
    async getOne(_id) {
        const response = await axios.get(`${this.urlById}${_id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    id_user: this.id_user,
                },
            });
        return response.data;
    }

}

export default HistoryUserRepo;
