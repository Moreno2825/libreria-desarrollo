import IOrderRepo from "@/domain/repositories/IOrderRepo";

class GetOrderUseCase{
    constructor(orderRepo){
        if(!(orderRepo instanceof IOrderRepo))
        throw new Error("orderRepo must be instance of IOrderRepo");
        this.orderRepo = orderRepo;
    }

    async run(userId){
        const gotOrder = await this.orderRepo.get(userId);
        return gotOrder;
    }
}
export default GetOrderUseCase;