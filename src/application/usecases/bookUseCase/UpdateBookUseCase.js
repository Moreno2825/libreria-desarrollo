import IBookRepo from "@/domain/repositories/IBookRepo";

class UpdateBookUseCase {
    constructor(bookRepo){
        if(!(bookRepo instanceof IBookRepo))
        throw new Error("bookRepo must be instance of IBookRepo");
        this.bookRepo = bookRepo;
    }

    async run(book){
        try {
            const updateBook = await this.bookRepo.update(book);
            return updateBook;
        } catch (error) {
            console.log('Error updating book: ', error);
            throw error;
        }
    }
}

export default UpdateBookUseCase;