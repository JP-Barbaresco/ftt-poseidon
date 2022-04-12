import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Equipe from "./paginas/corpos/Equipe";
import Vitimas from "./paginas/corpos/Vitimas";
import Localizacao from "./paginas/corpos/Localizacao.js";
import EquipeBens from "./paginas/bens/EquipeBens";
import DadosBens from "./paginas/bens/DadosBens";
import LocalizacaoBens from "./paginas/bens/LocalizacaoBens";
import Home from "./paginas/Home";
import { Provider } from "react-redux";
import store from "./store";

//<Stack.Navigator initialRouteName="Home"> //Para definir a tela inicial.

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Equipe"
            component={Equipe}
            options={{
              title: "Busca de Corpos 1-3",
            }}
          />
          <Stack.Screen
            name="Vitimas"
            component={Vitimas}
            options={{
              title: "Busca de Corpos 2-3",
            }}
          />
          <Stack.Screen
            name="Localizacao"
            component={Localizacao}
            options={{
              title: "Busca de Corpos 3-3",
            }}
          />
          <Stack.Screen
            name="EquipeBens"
            component={EquipeBens}
            options={{
              title: "Busca de Bens 1-3",
            }}
          />
          <Stack.Screen
            name="DadosBens"
            component={DadosBens}
            options={{
              title: "Busca de Bens 2-3",
            }}
          />
          <Stack.Screen
            name="LocalizacaoBens"
            component={LocalizacaoBens}
            options={{
              title: "Busca de Bens 3-3",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
