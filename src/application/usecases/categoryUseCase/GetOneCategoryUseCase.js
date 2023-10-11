import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class GetOneCategoryUseCase{
    constructor(categoryRepo){
        if(!(categoryRepo instanceof ICategoryRepo))
        throw new Error("categoryRepo must be instance of IcategoryRepo");
        this.categoryRepo = categoryRepo;
    }

    async run(_id){
        const category = await this.categoryRepo.getOne(_id);
        return category;
    }
}
export default GetOneCategoryUseCase;