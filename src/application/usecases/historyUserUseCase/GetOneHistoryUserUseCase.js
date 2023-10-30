import IHistoryUserRepo from "@/domain/repositories/IHistoryUserRepo";

class GetOneHistoryUserUseCase{
    constructor(historyUserRepo){
        if(!(historyUserRepo instanceof IHistoryUserRepo))
        throw new Error("historyUserRepo must be instance of IHistoryUserRepo");
        this.historyUserRepo = historyUserRepo;
    }

    async run(_id){
        const getHistoryUser = await this.historyUserRepo.getOne(_id);
        return getHistoryUser;
    }
}
export default GetOneHistoryUserUseCase;