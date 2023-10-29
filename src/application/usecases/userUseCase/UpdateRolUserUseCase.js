import IUserRepo from "@/domain/repositories/IUserRepo";

class UpdateUserRoleUseCase {
  constructor(userRepo) {
    if (!(userRepo instanceof IUserRepo))
      throw new Error("userRepo must be instance of IUserRepo");
    this.userRepo = userRepo;
  }

  async run(userId, _id) {
    const updatedUser = await this.userRepo.updateRole(userId, _id);
    return updatedUser;
  }
}
export default UpdateUserRoleUseCase;