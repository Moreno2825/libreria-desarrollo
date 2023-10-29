import ICartRepo from "@/domain/repositories/ICartRepo";
import axios from "axios";

class CartRepo extends ICartRepo {
    constructor(id_user) {
        super();
        this.id_user = id_user;
        this.id_product = this.id_product;
        this.url = "http://localhost:3000/user/";
        this.urlDelete = "http://localhost:3000/cart/";
    }

    async get(id_user) {
        try {
            const response = await axios.get(`${this.url}${id_user}`, {
                headers: {
                    id_user: this.id_user
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching cart:", error);
            throw error;
        }
    }

    async deleteProduct(id_user, id_product) {
        try {
            const response = await axios.delete(`${this.urlDelete}${id_user}/${id_product}`, {
                headers: {
                    id_user: this.id_user
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }

    async deleteAll(id_user) {
        try {
            const response = await axios.delete(`${this.urlDelete}${id_user}`, {
                headers: {
                    id_user: this.id_user
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}
export default CartRepo;