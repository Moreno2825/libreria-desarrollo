import IUserRepo from "@/domain/repositories/IUserRepo";

class GetAllUserAccountUseCase{
    constructor(userRepo){
        if(!(userRepo instanceof IUserRepo))
        throw new Error("userRepo must be instance of IUserRepo");
        this.userRepo = userRepo;
    }

    async run(_id){
        const getUserAccount = await this.userRepo.getAllAccount(_id);
        return getUserAccount;
    }
}
export default GetAllUserAccountUseCase;