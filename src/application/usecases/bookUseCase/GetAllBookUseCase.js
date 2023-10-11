import IBookRepo from "@/domain/repositories/IBookRepo";

class GetAllBookUseCase{
    constructor(bookRepo){
        if(!(bookRepo instanceof IBookRepo))
        throw new Error("bookRepo must be instance of IBookRepo");
        this.bookRepo = bookRepo;
    }

    async run(){
        const getBook = await this.bookRepo.getAll();
        return getBook;
    }
    
}
export default GetAllBookUseCase;