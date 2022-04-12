const vitimas = (state = [], action) => {
  switch (action.type) {
    case "FORM_VITIMAS":
      return [
        ...state,
        {
          nome_vitima: action.data.nome_vitima,
        },
      ];
    case "CLEAR_FORM_VITIMAS":
      return (state = []);
    default:
      return state;
  }
};

export default vitimas;
