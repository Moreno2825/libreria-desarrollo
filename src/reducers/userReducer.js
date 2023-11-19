const isBrowser = typeof window !== 'undefined';

const initialState = {
  _id: isBrowser ? JSON.parse(localStorage.getItem("user"))?._id || null : null,
  id_rol: isBrowser ? JSON.parse(localStorage.getItem("user"))?.id_rol || null : null,
  name: isBrowser ? JSON.parse(localStorage.getItem("user"))?.name || '' : '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      // Actualizar el estado con la nueva información
      const newState = {
        ...state,
        ...action.payload,
      };

      // Guardar el nuevo estado en localStorage
      localStorage.setItem("user", JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
};

export default userReducer;
