import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alan Vitor Vitorino Galdino</Text>
      <Image source={require('../assets/alan.jpg')} style={styles.image} />
      <Button title="Sobre Mim" onPress={() => navigation.navigate('About')} />
      <Button title="Experiência" onPress={() => navigation.navigate('Experience')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      flex: 1,
      marginHorizontal: 10, // Ajuste o valor conforme necessário
    },
  });