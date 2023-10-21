import IUserRepo from "@/domain/repositories/IUserRepo";
import axios from "axios";
import { setUser } from '@/actions/userActions'; 

class UserRepo extends IUserRepo {
  constructor(dispatch) {
    super();
    this.dispatch = dispatch;
    this.url = "http://localhost:3000/getAll/users";
    this.urlSignIn = "http://localhost:3000/sigin";
    this.urlSingUp = "http://localhost:3000/signup";
  }

  async getAll() {
    const response = await axios.get(this.url);
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
          "Content-Type": "application/json",
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
