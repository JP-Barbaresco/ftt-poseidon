import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Picker,  FlatList, Button, Switch, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../../styles/Global";

import { RadioButton, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function EquipeBens({navigation}) {

    const [rai, setRai] = useState(null);
    const [dia, setDia] = useState("diaSemana");
    const [identificacao, setIdentificacao] = useState(null);
    const [obm, setObm] = useState(null);
    const [rendicao, setRedicao] = useState(null);

    const [apoio, setApoio] = React.useState('sim');
    const [segundaResposta, setSegundaResposta] = React.useState('sim');
    // A linha a cima é a constrante de uso no Rádio importado do Paper. 
    // A linha a baixo é o tema importado do Paper.
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          primary: '#ECEFF1',
          accent: '#263238',
        },
      }; //Este tema não é nativo Native.

    return (
        <PaperProvider theme={theme}>
        <View style={globalStyles.container}>
        <SafeAreaView>
        <ScrollView>
        <View style={globalStyles.cardClear}>

        <Text style={globalStyles.tituloPg}>Registo de Ocorrência</Text>

        <Text style={globalStyles.titulo}>RAI *</Text>
        <TextInput
            style={globalStyles.inputTypeB}
            onChangeText={value => setRai(value)}
            placeholder="RAI"
            keyboardType="numeric"
            value={rai}
        />

        <Text style={globalStyles.titulo}>Dia da Semana *</Text>
        <View style={globalStyles.pikerBotton}>
            <Picker style={globalStyles.piker}
            dia={dia}
            onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
            >
                <Picker.Item label="Selecione"/>
                <Picker.Item label="Domingo" value="domingo"/>
                <Picker.Item label="Segunda-Feira" value="segunda"/>
                <Picker.Item label="Terça-Feira" value="terça"/>
                <Picker.Item label="Quarta-Feira" value="quarta"/>
                <Picker.Item label="Quinta-Feira" value="quinta"/>
                <Picker.Item label="Sexta-Feira" value="sexta"/>
                <Picker.Item label="Sábado" value="sabado"/>
            </Picker>
        </View>

        <Text style={globalStyles.titulo}>Apoio de outra OBM *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="sim"
                status={ apoio === 'sim' ? 'checked' : 'unchecked' }
                onPress={() => setApoio('sim')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                style={globalStyles.optionBtn}
                value="nao"
                status={ apoio === 'nao' ? 'checked' : 'unchecked' }
                onPress={() => setApoio('nao')}
            />
            <Text style={globalStyles.radioText}>Não</Text>
        </View>
        </View>

        <Text style={globalStyles.titulo}>identificação do Militar</Text>
        <TextInput
            style={globalStyles.input}
            onChangeText={value => setIdentificacao(value)}
            placeholder="Nome"
            keyboardType="text"
            value={identificacao}
        />
        <Text style={globalStyles.titulo}>OBM</Text>
        <TextInput
            style={globalStyles.input}
            onChangeText={value => setObm(value)}
            placeholder="Digite Aqui..."
            keyboardType="text"
            value={obm}
        />

        <Text style={globalStyles.titulo}>Segunda Resposta *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="sim"
                status={ segundaResposta === 'sim' ? 'checked' : 'unchecked' }
                onPress={() => setSegundaResposta('sim')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="nao"
                status={ segundaResposta === 'nao' ? 'checked' : 'unchecked' }
                onPress={() => setSegundaResposta('nao')}
            />
            <Text style={globalStyles.radioText}>Não</Text>
        </View>
        </View>

        <Text style={globalStyles.titulo}>Data da Rendição *</Text>
        <TextInput
            style={globalStyles.inputTypeB}
            onChangeText={value => setRedicao(value)}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            value={rendicao}
        />
        
        <View>
            <View>
                <TouchableHighlight style={globalStyles.primaryBtn}
                    onPress={() => navigation.navigate('DadosBens')}
                    underlayColor={'#33A4DC'}
                    >
                    <Text style={globalStyles.textPrimary}>PRÓXIMO</Text>
                </TouchableHighlight>
            </View>
        </View>

        </View>
        </ScrollView> 
        </SafeAreaView>
        </View>
        </PaperProvider>
    );
};