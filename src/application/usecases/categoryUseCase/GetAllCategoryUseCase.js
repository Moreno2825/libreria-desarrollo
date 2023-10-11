import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class GetAllCategoryUseCase {
    constructor(categoryRepo){
        if(!(categoryRepo instanceof ICategoryRepo))
        throw new Error("categoryRepo must be instance of ICategoryRepo");
        this.categoryRepo = categoryRepo;
    }

    async run(){
        const getCategory = await this.categoryRepo.getAll();
        return getCategory;
    }
}
export default GetAllCategoryUseCase;