import IGraficRepo from "@/domain/repositories/IGraficRepo";

class GetAllGraficUseCase{
    constructor(graficRepo){
        if(!(graficRepo instanceof IGraficRepo))
        throw new Error("graficRepo must be instance of IGraficRepo");
        this.graficRepo = graficRepo;
    }

    async run(_id){
        const get = await this.graficRepo.getHigherBooks(_id);
        return get;
    }
    
}
export default GetAllGraficUseCase;