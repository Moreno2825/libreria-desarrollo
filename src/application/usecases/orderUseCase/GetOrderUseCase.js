import IOrderRepo from "@/domain/repositories/IOrderRepo";

class GetOrderUseCase{
    constructor(orderRepo){
        if(!(orderRepo instanceof IOrderRepo))
        throw new Error("orderRepo must be instance of IOrderRepo");
        this.orderRepo = orderRepo;
    }

    async run(){
        const getOrder = await this.orderRepo.get();
        return getOrder;
    }
}
export default GetOrderUseCase;