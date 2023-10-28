import IHistoryUserRepo from "@/domain/repositories/IHistoryUserRepo";

class historyUserUseCase{
    constructor(historyUserRepo){
        if(!(historyUserRepo instanceof IHistoryUserRepo))
        throw new Error("historyUserRepo must be instance of IHistoryUserRepo");
        this.historyUserRepo = historyUserRepo;
    }

    async run(){
        const getHistoryUser = await this.historyUserRepo.getAll();
        return getHistoryUser;
    }
}
export default historyUserUseCase;