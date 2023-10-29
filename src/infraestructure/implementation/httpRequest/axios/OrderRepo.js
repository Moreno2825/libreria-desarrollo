import IOrderRepo from "@/domain/repositories/IOrderRepo";
import axios from "axios";

class OrderRepo extends IOrderRepo {
    constructor(id_user) {
        super();
        this.id_user = id_user;
        this.url = "http://localhost:3000/user/";
        this.urlCreate = "http://localhost:3000/addCart";
        this.urlDeleteProduct = "http://localhost:3000/cart/";
        this.urlDeteleAll = "http://localhost:3000/user/";
    }

    async get(userId) {
        try {
            const response = await axios.get(`${this.url}${userId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching order", error);
            throw error;
        }
    }

    async create(order) {
        try {
            const response = await axios.post(this.urlCreate, order, {
                headers: {
                    "Content-Type": "application/json",
                    id_user: this.id_user,
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error creating", error.message);
            throw error;
        }
    }
}
export default OrderRepo;