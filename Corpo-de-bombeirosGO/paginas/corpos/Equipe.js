import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Picker,  FlatList, Button, Switch, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../../styles/Global";

import { ToggleButton, RadioButton, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';



export default function Equipe({navigation}) {

    const [rai, setRai] = useState(null);
    const [dia, setDia] = useState(null);
    const [identificacao, setIdentificacao] = useState(null);
    const [obm, setObm] = useState(null);
    const [rendicao, setRedicao] = useState(null);

    const [apoio, setApoio] = React.useState(null);
    const [segundaResposta, setSegundaResposta] = React.useState(null);


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

    //Função de requisição do back-end.
    async function buscaDeCorpos() {

        let request = await fetch ('http://192.168.0.100:8081/vitimas', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                RAI: rai,
                dia_semana: dia,
                apoio: apoio,
                id_militar: identificacao,
                OBM: obm,
                segunda_resposta: segundaResposta,
                data_rendicao: rendicao,
            }) 
        });
    };
      
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
            maxLength={8}
        />

        <Text style={globalStyles.titulo}>Dia da Semana *</Text>
        <View style={globalStyles.pikerBotton}>
            <Picker style={globalStyles.piker}
            dia={dia}
            onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
            >
                <Picker.Item label="Selecione"/>
                <Picker.Item label="Domingo" value="1"/>
                <Picker.Item label="Segunda-Feira" value="2"/>
                <Picker.Item label="Terça-Feira" value="3"/>
                <Picker.Item label="Quarta-Feira" value="4"/>
                <Picker.Item label="Quinta-Feira" value="5"/>
                <Picker.Item label="Sexta-Feira" value="6"/>
                <Picker.Item label="Sábado" value="7"/>
            </Picker>
        </View>

        <Text style={globalStyles.titulo}>Apoio de outra OBM *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="1"
                status={ apoio === '1' ? 'checked' : 'unchecked' }
                onPress={() => setApoio('1')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                style={globalStyles.optionBtn}
                value="0"
                status={ apoio === '0' ? 'checked' : 'unchecked' }
                onPress={() => setApoio('0')}
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
            maxLength={11}
        />
        <Text style={globalStyles.titulo}>OBM</Text>
        <TextInput
            style={globalStyles.input}
            onChangeText={value => setObm(value)}
            placeholder="Digite Aqui..."
            keyboardType="text"
            value={obm}
            maxLength={255}
        />

        <Text style={globalStyles.titulo}>Segunda Resposta *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="1"
                status={ segundaResposta === '1' ? 'checked' : 'unchecked' }
                onPress={() => setSegundaResposta('1')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="0"
                status={ segundaResposta === '0' ? 'checked' : 'unchecked' }
                onPress={() => setSegundaResposta('0')}
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
            maxLength={10}
        />
        
        <View>
            <View>
                <TouchableHighlight style={globalStyles.primaryBtn}
                    onPress={()=> navigation.navigate('Vitimas', buscaDeCorpos())}
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