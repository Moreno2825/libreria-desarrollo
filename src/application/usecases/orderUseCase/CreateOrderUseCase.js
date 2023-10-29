import IOrderRepo from "@/domain/repositories/IOrderRepo";

class CreateOrderUseCase{
    constructor(orderRepo){
        if(!(orderRepo instanceof IOrderRepo))
        throw new Error("orderRepo must be instance of IOrderRepo");
        this.orderRepo = orderRepo;
    }

    async run(order){
        try {
            const createdOrder = await this.orderRepo.create(order);
            return createdOrder;
        } catch (error) {
            console.log('Error creating order:', error);
            throw error;
        }
    }
}
export default CreateOrderUseCase;