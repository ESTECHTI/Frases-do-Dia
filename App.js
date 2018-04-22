import React from 'react';
import { StyleSheet, Text,View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={principal}>

        <Image source={require('./imgs/logo.png')} />

        <TouchableOpacity 
          onPress={gerarNovaFrase}
          style={botao}>
          <Text style={textoBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = Array();
    frases[0] = 'Estou sempre alegre. Essa é a melhor maneira de resolver os problemas da vida.';
    frases[1] = 'O tempo dura bastante para aqueles que sabem aproveitá-lo.';
    frases[2] = 'Se você encontrar um caminho sem obstáculos, ele provavelmente não leva a lugar nenhum.';
    frases[3] = 'Não existe um caminho para a felicidade. A felicidade é o caminho.';
    frases[4] = 'Você nunca sabe a força que tem. Pois essa força é a que vem de Deus.';

    var fraseEscolhida = frases[ numeroAleatorio ]

  Alert.alert(fraseEscolhida);
}


const { principal, botao, textoBotao } = styles;
