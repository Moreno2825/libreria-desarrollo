import IUserRepo from "@/domain/repositories/IUserRepo";

class GetOneUserUseCase{
    constructor(userRepo){
        if(!(userRepo instanceof IUserRepo))
        throw new Error("userRepo must be instance of IUserRepo");
        this.userRepo = userRepo;
    }

    async run(_id){
        const getByUser = await this.userRepo.getOne(_id);
        return getByUser;
    }
}
export default GetOneUserUseCase;