import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Picker, Button, Switch, SwitchBase, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../../styles/Global";
import { ToggleButton, RadioButton, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';


    
export default function Vitimas ({navigation})  {

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [inicioData, setInicioData] = useState(null);
    const [inicioHora, setInicioHora] = useState(null);

    const [sexo, setSexo] = React.useState('');
    const [condicao, setCondicao] = React.useState('');
    const [alcool, setAlcool] = React.useState('');

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
                nome_vitima: nome,
                idade_vitima: idade,
                sexo_vitima: sexo,
                data_submercao: inicioData,
                hora_submercao: inicioHora,
                condicao_ocorrencia: condicao,
                ingestao_alcoo: alcool,
            }) 
        });
    };

    return (

        <PaperProvider theme={theme}>  
        <View style={globalStyles.container}>
        <SafeAreaView>
        <ScrollView>
        <View style={globalStyles.cardClear}>

        <Text style={globalStyles.tituloPg}>Dados da Vitima</Text>

        <View style={globalStyles.dadosView}>
            <View style={globalStyles.nome}>
                <Text style={globalStyles.titulo}>Nome *</Text>
            </View>
            <View style={globalStyles.idade}>
            <Text style={globalStyles.titulo}>Idade *</Text>
            </View>
       </View>

       <View style={globalStyles.dadosView}>
            <View style={globalStyles.inputNome}>
                <TextInput
                    onChangeText={value => setNome(value)}
                    placeholder="Nome"
                    keyboardType="text"
                    maxLength={70}
                />
            </View>
            <View style={globalStyles.inputIdade}>
                <TextInput
                    onChangeText={value => setIdade(value)}
                    placeholder="18"
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>
       </View>
       <Text style={globalStyles.titulo}>Sexo *</Text>
        <View style={globalStyles.dadosView}>
            <ToggleButton.Group
            onValueChange={sexo => setSexo(sexo)}
            value={sexo}>
                <View>
                <ToggleButton style={globalStyles.optionBtnE}
                    icon={()=><View><Text>Homem</Text></View>}
                    value="1"
                    status={ sexo === '1' ? 'checked' : 'unchecked' }
                    onPress={() => setSexo('1')}
                />
                </View>
                <View>
                    <ToggleButton style={globalStyles.optionBtnD}
                        icon={()=><View><Text>Mulher</Text></View>}

                        value="0"
                        status={ sexo === '0' ? 'checked' : 'unchecked' }
                        onPress={() => setSexo('0')}
                    />
                </View>
            </ToggleButton.Group>
       </View>

       <Text style={globalStyles.titulo}>Condição *</Text>
        <View style={globalStyles.dadosView}>
            <ToggleButton.Group
            onValueChange={condicao => setCondicao(condicao)}
            value={condicao}>
                <View>
                <ToggleButton style={globalStyles.optionBtnE}
                    icon={()=><View><Text>Trabalho</Text></View>}
                    value="1"
                    status={ condicao === '1' ? 'checked' : 'unchecked' }
                    onPress={() => setCondicao('1')}
                />
                </View>
                <View>
                    <ToggleButton style={globalStyles.optionBtnD}
                        icon={()=><View><Text>Lazer</Text></View>}

                        value="0"
                        status={ condicao === '0' ? 'checked' : 'unchecked' }
                        onPress={() => setCondicao('0')}
                    />
                </View>
            </ToggleButton.Group>
        </View>

        <Text style={globalStyles.titulo}>Ingestão de Álcool *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="1"
                status={ alcool === '1' ? 'checked' : 'unchecked' }
                onPress={() => setAlcool('1')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="0"
                status={ alcool === '0' ? 'checked' : 'unchecked' }
                onPress={() => setAlcool('0')}
            />
            <Text style={globalStyles.radioText}>Não</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="2"
                status={ alcool === '2' ? 'checked' : 'unchecked' }
                onPress={() => setAlcool('2')}
            />
            <Text style={globalStyles.radioText}>Talvez</Text>
        </View>
        </View>

        <Text style={globalStyles.titulo}>Momento da Submersão *</Text>
        <View style={globalStyles.dadosView}>
            <TextInput
                style={globalStyles.inputTypeB}
                onChangeText={value => setInicioData(value)}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                value={inicioData}
            />

            <TextInput
                style={globalStyles.inputTypeB}
                onChangeText={value => setInicioHora(value)}
                placeholder="hh:mm"
                keyboardType="numeric"
                value={inicioHora}
            />
        </View>

        <View>
            <View>
                <TouchableHighlight style={globalStyles.primaryBtn}
                onPress={() => navigation.navigate('Localizacao',  buscaDeCorpos())}
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