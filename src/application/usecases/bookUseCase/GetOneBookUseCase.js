const { default: IBookRepo } = require("@/domain/repositories/IBookRepo");

class GetOneBookUseCase{
    constructor(bookRepo){
        if(!(bookRepo instanceof IBookRepo))
        throw new Error("bookRepo must be instance of IBookRepo");
        this.bookRepo = bookRepo;
    }

    async run(_id){
        const book = await this.bookRepo.getOne(_id);
        return book;
    }
}
export default GetOneBookUseCase;