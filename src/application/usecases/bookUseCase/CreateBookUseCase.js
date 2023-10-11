import IBookRepo from "@/domain/repositories/IBookRepo";

class CreateBookUseCase{
    constructor(bookRepo){
        if(!(bookRepo instanceof IBookRepo))
        throw new Error("bookRepo must be instance of IBookRepo");
        this.bookRepo = bookRepo;
    }

    async run(book){
        try {
            const createdBook = await this.bookRepo.create(book);
            return createdBook;
        } catch (error) {
            console.log('Error creating book:', error);
            throw error;
        }
    }
}
export default CreateBookUseCase;