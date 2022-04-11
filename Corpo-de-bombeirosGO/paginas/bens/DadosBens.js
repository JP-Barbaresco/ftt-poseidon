import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Picker, Button, Switch, SwitchBase, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../../styles/Global";

import { ToggleButton, RadioButton, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

    
export default function DadosBens({navigation}) {

    const [bem, setBem] = useState(null);
    const [idade, setIdade] = useState(null);
    const [inicioData, setInicioData] = useState(null);
    const [inicioHora, setInicioHora] = useState(null);

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

    return (

        <PaperProvider theme={theme}>  
        <View style={globalStyles.container}>
        <SafeAreaView>
        <ScrollView>
        <View style={globalStyles.cardClear}>

        <Text style={globalStyles.tituloPg}>Dados Sobre o Bem</Text>

        <Text style={globalStyles.titulo}>Bem a ser Resgatado *</Text>
        <View>
            <TextInput
                style={globalStyles.inputTypeD}
                onChangeText={value => setBem(value)}
                placeholder="Digite Aqui..."
                multiline={true}
                value={bem}
            />
        </View>

        <Text style={globalStyles.titulo}>Condição *</Text>
        <View style={globalStyles.dadosView}>
            <ToggleButton.Group
            onValueChange={condicao => setCondicao(condicao)}
            value={condicao}>
                <View>
                <ToggleButton style={globalStyles.optionBtnE}
                    icon={()=><View><Text>Trabalho</Text></View>}
                    value="trabalho"
                    status={ condicao === 'trabalho' ? 'checked' : 'unchecked' }
                    onPress={() => setCondicao('trabalho')}
                />
                </View>
                <View>
                    <ToggleButton style={globalStyles.optionBtnD}
                        icon={()=><View><Text>Lazer</Text></View>}

                        value="lazer"
                        status={ condicao === 'lazer' ? 'checked' : 'unchecked' }
                        onPress={() => setCondicao('lazer')}
                    />
                </View>
            </ToggleButton.Group>
        </View>

        <Text style={globalStyles.titulo}>Ingestão de Álcool *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="sim"
                status={ alcool === 'sim' ? 'checked' : 'unchecked' }
                onPress={() => setAlcool('sim')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="nao"
                status={ alcool === 'nao' ? 'checked' : 'unchecked' }
                onPress={() => setAlcool('nao')}
            />
            <Text style={globalStyles.radioText}>Não</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="talvez"
                status={ alcool === 'talvez' ? 'checked' : 'unchecked' }
                onPress={() => setAlcool('talvez')}
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
                onPress={() => navigation.navigate('LocalizacaoBens')}
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