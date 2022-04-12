const localizacao = (state = [], action) => {
  switch (action.type) {
    case "FORM_LOCALIZACAO":
      return [
        ...state,
        {
          ultimoAvistamento: action.data.ultimoAvistamento,
        },
      ];
    case "CLEAR_FORM_LOCALIZACAO":
      return (state = []);
    default:
      return state;
  }
};

export default localizacao;
