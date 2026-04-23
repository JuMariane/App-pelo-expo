import 'react-native-gesture-handler'; // Necessário para as animações de arrastar
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Importando o que a gente precisa da biblioteca de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Inicializando os tipos de navegação que vamos usar no projeto
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Nossa tela principal - o parâmetro 'navigation' serve pra gente mudar de tela depois
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      {/* Aqui vai o botão ou conteúdo da tela inicial */}
    </View>
  );
}