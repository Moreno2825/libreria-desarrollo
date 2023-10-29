import IUserRepo from "@/domain/repositories/IUserRepo";

class CreateUserUseCase{
    constructor(userRepo){
        if(!(userRepo instanceof IUserRepo))
        throw new Error("userRepo must be instance of IUserRepo");
        this.userRepo = userRepo;
    }

    async run(user){
        try {
            const createdUser = await this.userRepo.create(user);
            return createdUser;
        } catch (error) {
            console.log('Error creating user:', error);
            throw error;
        }
    }
}
export default CreateUserUseCase;