import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
  },
  cardClear: {
    width: 360,
  },
  
  titulo: {
    fontWeight: 'bold',
    fontSize: 12,
    marginHorizontal: 20,
  },

  tituloPg: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 20,
  },

  pikerBotton: {
    height: 50,
    marginTop: 10,
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#ECEFF1',
  },

  piker: {
    color: '#263238',
  },

  radioGroup: {
    marginTop: 10,
    marginBottom: 20,
  },

  radioView: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  radioText: {
    padding: 10,
  },

  nome: {
    width: 220,
  },

  inputNome: {
    height:50,
    width: 220,
    margin: 20,
    marginTop: 10,
    marginBottom: 20,
    marginEnd: 10,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#263238',
  },

  idade: {
    width: 80,
    marginStart: 20,
  },

  inputIdade: {
    height:50,
    width: 80,
    margin: 10,
    marginTop: 10,
    marginBottom: 20,
    marginEnd: 20,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#263238',
    alignItems: 'center'
  },

  dadosView: {
    flexDirection: 'row',
  },

  dadosOpt: {
    padding: 20,
  },

  input: {
    height:50,
    marginTop: 10,
    marginBottom: 20,
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#263238',
  },

  inputTypeB: {
    height:40,
    width: 140,
    margin: 20,
    marginTop: 0,
    marginBottom: 24,
    paddingHorizontal: 10,
    borderBottomWidth: 1.5,
    borderColor: '#263238',
  },

  inputTypeC: {
    height:40,
    width: 80,
    marginTop: 0,
    margin: 24,
    paddingHorizontal: 10,
    borderBottomWidth: 1.5,
    borderColor: '#263238',
  },

  inputTypeD: {
    height: 200,
    marginTop: 10,
    marginBottom: 20,
    margin: 20,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#263238',
    textAlignVertical: 'top',
  },

  inputTypeE: {
    height:40,
    margin: 20,
    marginTop: 0,
    marginBottom: 24,
    paddingHorizontal: 10,
    borderBottomWidth: 1.5,
    borderColor: '#263238',
  },

  primaryBtn: {
    height: 40,
    backgroundColor:'#263238',
    borderRadius: 4,
    margin: 20,
    padding: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    
  },

  textPrimary: {
    color: '#ECEFF1',
  },

  secBtn: {
    height: 40,
    borderColor:'#263238',
    borderWidth: 1.5,
    borderRadius: 4,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
    padding: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    
  },

  textSec: {
    color: '#263238',
  },

  optionBtnD: {
    width: 160,
    height: 50,
    borderColor: '#263238',
    borderWidth: 1.5,
    margin: 20,
    marginTop: 10,
    marginEnd: 20,
    marginStart: -1,
  },

  optionBtnE: {
    width: 160,
    height: 50,
    borderColor: '#263238',
    borderWidth: 1.5,
    margin: 20,
    marginTop: 10,
    marginStart: 20,
    marginEnd: -1,
  },
});

//ECEFF1 cor de seletores e botões.
//263238 cor de botões primarios, anexos etc. Bordas de imputs de textos, bordas botões secundarios..