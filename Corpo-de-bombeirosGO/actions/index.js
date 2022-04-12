export const formEquipe = (data) => ({
  type: "FORM_EQUIPE",
  data,
});

export const formVitimas = (data) => ({
  type: "FORM_VITIMAS",
  data,
});

export const formLocalizacao = (data) => ({
  type: "FORM_LOCALIZACAO",
  data,
});

export const clearFormEquipe = {
  type: "CLEAR_FORM_EQUIPE",
};

export const clearFormVitimas = {
  type: "CLEAR_FORM_VITIMAS",
};

export const clearFormLocalizacao = {
  type: "CLEAR_FORM_LOCALIZACAO",
};
