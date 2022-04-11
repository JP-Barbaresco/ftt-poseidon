import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Picker, Button, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../../styles/Global";

import { ToggleButton, RadioButton, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

export default function Localizacao({navigation}) {

    const [ultimoAvistamento, setUltimoAvistamento] = useState(null);
    const [avistamentoComentario, setAvistamentoComentario] = useState(null);
    const [pontoEncontro, setPontoEncontro] = useState(null);
    const [encontroComentario, setEncontroComentario] = useState(null);
    const [evidencia, setEvidencia] = useState(null);
    const [evidenciaComentario, setEvidenciaComentario] = useState(null);
    const [tipoLocal, setTipoLocal] = useState("tipoLocal");
    const [tipoFundo, setTipoFundo] = useState("tipoFundo");
    const [visibilidade, setVisibilidade] = React.useState('');
    const [temperatura, setTemperatura] = useState(null);
    const [fimData, setFimData] = useState(null);
    const [fimHora, setFimHora] = useState(null);
    const [condicao, setCondicao] = React.useState('');
    const [deslocamento, setDeslocamento] = React.useState('');
    const [IML, setIML] = useState(null);
    const [comentario, setComentario] = useState(null);

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
        <Text style={globalStyles.tituloPg}>Detalhes da Localização</Text>
       
        <View>
        <Text style={globalStyles.titulo}>Ultimo Avistamento *</Text>
        <TextInput
            style={globalStyles.inputTypeE}
            onChangeText={value => setUltimoAvistamento(value)}
            placeholder="00.00000, -00.00000."
            keyboardType="numeric"
            value={ultimoAvistamento}
        />
        <TextInput
            style={globalStyles.inputTypeD}
            onChangeText={value => setAvistamentoComentario(value)}
            placeholder="Digite Aqui..."
            multiline={true}
            value={avistamentoComentario}
        />
        </View>

        <View>
        <Text style={globalStyles.titulo}>Ponto de Encontro *</Text>
        <TextInput
            style={globalStyles.inputTypeE}
            onChangeText={value => setPontoEncontro(value)}
            placeholder="00.00000, -00.00000."
            keyboardType="numeric"
            value={pontoEncontro}
        />
        <TextInput
            style={globalStyles.inputTypeD}
            onChangeText={value => setEncontroComentario(value)}
            placeholder="Digite Aqui..."
            multiline={true}
            value={encontroComentario}
        />  
        </View>

        <View>
        <Text style={globalStyles.titulo}>Evidencia</Text>
        <TextInput
            style={globalStyles.inputTypeE}
            onChangeText={value => setEvidencia(value)}
            placeholder="00.00000, -00.00000."
            keyboardType="numeric"
            value={evidencia}
        />
        <TextInput
            style={globalStyles.inputTypeD}
            onChangeText={value => setEvidenciaComentario(value)}
            placeholder="Digite Aqui..."
            multiline={true}
            value={evidenciaComentario}
        />  
        </View>

        <Text style={globalStyles.titulo}>Tipo do Local *</Text>
        <View style={globalStyles.pikerBotton}>
            <Picker style={globalStyles.piker}
            tipoLocal={tipoLocal}
            onValueChange={(itemValue, itemIndex) => setTipoLocal(itemValue)}
            >
                <Picker.Item label="Cachoeira" value="cachoeira"/>
                <Picker.Item label="Lago" value="lago"/>
                <Picker.Item label="Represa" value="represa"/>
                <Picker.Item label="Rio" value="rio"/>
            </Picker>
        </View>

        <Text style={globalStyles.titulo}>Tipo Predominante de Fundo *</Text>
        <View style={globalStyles.pikerBotton}>
            <Picker style={globalStyles.piker}
            tipoLocal={tipoFundo}
            onValueChange={(itemValue, itemIndex) => setTipoFundo(itemValue)}
            >
                <Picker.Item label="Arenoso" value="arenoso"/>
                <Picker.Item label="Galhada" value="galhada"/>
                <Picker.Item label="Lama" value="lama"/>
                <Picker.Item label="Pedra" value="pedra"/>
            </Picker>
        </View>

        <Text style={globalStyles.titulo}>Visibilidade da Agua *</Text>
        <View style={globalStyles.radioGroup}>
        <View style={globalStyles.radioView}>
            <RadioButton
                value="sim"
                status={ visibilidade === 'sim' ? 'checked' : 'unchecked' }
                onPress={() => setVisibilidade('sim')}
            />
            <Text style={globalStyles.radioText}>Sim</Text>
        </View>
        <View style={globalStyles.radioView}>
            <RadioButton
                style={globalStyles.optionBtn}
                value="nao"
                status={ visibilidade === 'nao' ? 'checked' : 'unchecked' }
                onPress={() => setVisibilidade('nao')}
            />
            <Text style={globalStyles.radioText}>Não</Text>
        </View>
        </View>

        <Text style={globalStyles.titulo}>Temperatura *</Text>
        <TextInput
            style={globalStyles.inputTypeC}
            onChangeText={value => setTemperatura(value)}
            placeholder="0° C"
            keyboardType="numeric"
            value={temperatura}
        />

        <Text style={globalStyles.titulo}>Momento de Encontro *</Text>
        <View style={globalStyles.dadosView}>
            <TextInput
                style={globalStyles.inputTypeB}
                onChangeText={value => setFimData(value)}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                value={fimData}
            />

            <TextInput
                style={globalStyles.inputTypeB}
                onChangeText={value => setFimHora(value)}
                placeholder="hh:mm"
                keyboardType="numeric"
                value={fimHora}
            />
        </View>

        <Text style={globalStyles.titulo}>Deslocamento até o Local da Ocorrência *</Text>
        <TextInput
            style={globalStyles.inputTypeB}
            onChangeText={value => setDeslocamento(value)}
            placeholder="KM"
            keyboardType="numeric"
            value={deslocamento}
        />

        <Text style={globalStyles.titulo}>Tempo de Espera até Chegada do IML *</Text>
        <TextInput
            style={globalStyles.inputTypeB}
            onChangeText={value => setIML(value)}
            placeholder="hh:mm"
            keyboardType="numeric"
            value={IML}
        />

        <Text style={globalStyles.titulo}>Condição *</Text>
        <View style={globalStyles.dadosView}>
            <ToggleButton.Group
            onValueChange={condicao => setCondicao(condicao)}
            value={condicao}>
                <View>
                <ToggleButton style={globalStyles.optionBtnE}
                    icon={()=><View><Text>Boiando</Text></View>}
                    value="trabalho"
                    status={ condicao === 'trabalho' ? 'checked' : 'unchecked' }
                    onPress={() => setCondicao('trabalho')}
                />
                </View>
                <View>
                    <ToggleButton style={globalStyles.optionBtnD}
                        icon={()=><View><Text>Fundo</Text></View>}

                        value="lazer"
                        status={ condicao === 'lazer' ? 'checked' : 'unchecked' }
                        onPress={() => setCondicao('lazer')}
                    />
                </View>
            </ToggleButton.Group>
        </View>


        <View>
        <Text style={globalStyles.titulo}>Relato de Ocorrência *</Text>
        <TextInput
            style={globalStyles.inputTypeD}
            onChangeText={value => setComentario(value)}
            placeholder="Digite Aqui..."
            multiline={true}
            value={comentario}
        />
        </View>

        <View>
            <View>
                <TouchableHighlight style={globalStyles.primaryBtn}
                    onPress={()=>buscaDeCorpos()}
                    underlayColor={'#33A4DC'}
                >
                    <Text style={globalStyles.textPrimary}>FINALIZAR OCORRÊNCIA</Text>
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