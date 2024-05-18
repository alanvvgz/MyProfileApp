import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text>Olá, meu nome é Alan Vitor, tenho 21 anos e moro em Pernambuco, Brasil. Amo tudo que envolve jogos, programação e futebol, e sou completamente apaixonado pelo jogo CS:GO, não é atoa que tenho 5 mil horas.
Atualmente estudo Análise e Desenvolvimento de Sistemas (ADS) na Faculdade Senac, e dedico meu tempo aos estudos, academia e quando sobra tempo, uso para jogos. Pretendo me aprofundar em algumas linguagens de programação como C#, Java, PHP e Python. Estou buscando melhorar meu inglês através de aplicativos de ensino, que no meu caso é o Duolingo. Acredito que meu principal problema com o inglês seja a pronúncia.
Adoro desafios, principalmente quando envolve computador, no qual tenho em minha vida desde os quatro anos de idade, quando meus pais montaram uma lan house juntos, e eu era muito curioso, então sempre perguntava sobre tudo, e acabei aprendendo várias coisas durante essa época da minha vida, no qual acredito que me guiou até onde estou, e não me arrependo nem um pouco de nada, amo essa área e pretendo continuar sempre nela.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
