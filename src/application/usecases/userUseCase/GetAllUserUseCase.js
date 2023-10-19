import IUserRepo from "@/domain/repositories/IUserRepo";

class GetAllUserUseCase{
    constructor(userRepo){
        if(!(userRepo instanceof IUserRepo))
        throw new Error("userRepo must be instance of IUserRepo");
        this.userRepo = userRepo;
    }

    async run(){
        const getUser = await this.userRepo.getAll();
        return getUser;
    }
}
export default GetAllUserUseCase;