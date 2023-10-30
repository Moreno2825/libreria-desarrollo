import IUserRepo from "@/domain/repositories/IUserRepo";

class GetAllUserUseCase{
    constructor(userRepo){
        if(!(userRepo instanceof IUserRepo))
        throw new Error("userRepo must be instance of IUserRepo");
        this.userRepo = userRepo;
    }

    async run(_id){
        const getUser = await this.userRepo.getAll(_id);
        return getUser;
    }
}
export default GetAllUserUseCase;