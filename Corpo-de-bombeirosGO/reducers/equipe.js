const equipe = (state = [], action) => {
  switch (action.type) {
    case "FORM_EQUIPE":
      return [
        ...state,
        {
          RAI: action.data.RAI,
        },
      ];
    case "CLEAR_FORM_EQUIPE":
      return (state = []);
    default:
      return state;
  }
};

export default equipe;
