import IUserRepo from "@/domain/repositories/IUserRepo";
import axios from "axios";
import { setUser } from "@/actions/userActions";

class UserRepo extends IUserRepo {
  constructor(dispatch, id_user) {
    super();
    this.id_user = id_user;
    this.dispatch = dispatch;
    this.url = "http://localhost:3000/getAll/users";
    this.urlMaster = "http://localhost:3000/getAll/acount";
    this.urlUser = "http://localhost:3000/getSale/";
    this.urlSignIn = "http://localhost:3000/sigin";
    this.urlSingUp = "http://localhost:3000/signup";
  }

  async getAll(_id) {
    const response = await axios.get(this.url, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
    });
    return response.data;
  }

  async getOne(_id) {
    const response = await axios.get(`${this.urlUser}${_id}`, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
    });
    return response.data;
  }

  async getAllAccount(_id) {
    const response = await axios.get(this.urlMaster, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
    });
    return response.data;
  }

  async updateRole(userId, _id) {
    const url = `http://localhost:3000/users/${userId}/updateRole`;
    const response = await axios.put(url, {
      headers: {
        "Content-Type": "application/json",
        id_user: this.id_user,
      },
    });
    return response.data;
  }

  async signIn(user) {
    try {
      const response = await axios.post(this.urlSignIn, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data._id) {
        this.dispatch(setUser(response.data));
        console.log(response.data);
        return response.data;
      } else {
        throw new Error("Invalid credentials or unexpected server response");
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    }
  }

  async signUp(user) {
    try {
      const response = await axios.post(this.urlSingUp, user, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }
  }
}
export default UserRepo;
