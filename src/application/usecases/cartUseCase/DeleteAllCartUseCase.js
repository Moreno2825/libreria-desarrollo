const { default: ICartRepo } = require("@/domain/repositories/ICartRepo");

class DeleteAllCartUseCase {
    constructor(cartRepo) {
        if(!(cartRepo instanceof ICartRepo)) {
            throw new Error("cartRepo must be an instance of ICartRepo");
        }
        this.cartRepo = cartRepo;
    }

    async run(id_user) {
        try {
            const response = await this.cartRepo.deleteAll(id_user);
            return response;
        } catch (error) {
            console.error('Error removing cart:', error);
            throw error;
        }
    }
}
export default DeleteAllCartUseCase;