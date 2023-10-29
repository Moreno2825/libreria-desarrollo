import ICartRepo from "@/domain/repositories/ICartRepo";

class GetCartUseCase{
    constructor(cartRepo){
        if(!(cartRepo instanceof ICartRepo))
        throw new Error("cartRepo must be instance of ICartRepo");
        this.cartRepo = cartRepo;
    }

    async run(id_user){
        const gotCart = await this.cartRepo.get(id_user);
        return gotCart;
    }
}
export default GetCartUseCase;