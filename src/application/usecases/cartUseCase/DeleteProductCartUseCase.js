const { default: ICartRepo } = require("@/domain/repositories/ICartRepo");

class DeleteProductCartUseCase {
    constructor(cartRepo) {
        if (!(cartRepo instanceof ICartRepo)) {
            throw new Error("cartRepo must be an instance of ICartRepo");
        }
        this.cartRepo = cartRepo;
    }

    async run(id_user, id_product) {
        try {
            const response = await this.cartRepo.deleteProduct(id_user, id_product);
            return response;
        } catch (error) {
            console.error('Error removing product from cart:', error);
            throw error;
        }
    }
}
export default DeleteProductCartUseCase;