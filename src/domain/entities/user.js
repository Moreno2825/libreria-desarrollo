class User {
  constructor(_id, name, id_rol, email, password, countBooks) {
    this._id = _id;
    this.name = name;
    this.id_rol = id_rol;
    this.email = email;
    this.password = password;
    this.countBooks = countBooks;
  }
}
export default User;
