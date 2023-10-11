const { default: IBookRepo } = require("@/domain/repositories/IBookRepo");

class DeleteBookUseCase {
  constructor(bookRepo) {
    if (!(bookRepo instanceof IBookRepo)) {
      throw new Error("bookRepo must be an instance of IBookRepo");
    }
    this.bookRepo = bookRepo;
  }

  async run(_id) {
    const book = await this.bookRepo.getOne(_id);
    if (!book) {
      throw new Error(`Book with ID ${_id} not found`);
    }
    await this.bookRepo.delete(_id);
    return { message: `Book with ID ${_id} has been deleted` };
  }
}
export default DeleteBookUseCase;