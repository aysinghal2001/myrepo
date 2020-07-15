import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GetStarted from "./components/GetStarted";
import LoginHere from "./components/LoginHere";
import Login from "./components/Login";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="GetStart" component={GetStarted} 
      options={{ title: 'Welcome', 
                 headerStyle: {
                 backgroundColor: '#BD1C6F'},
                 headerTintColor: '#fff',
                 headerTitleStyle: {
                 fontWeight: 'bold',
                 }}}/>
      <Stack.Screen name="Login Here" component={LoginHere}
       options={{ title: 'Register', 
       headerStyle: {
       backgroundColor: '#BD1C6F'},
       headerTintColor: '#fff',
       headerTitleStyle: {
       fontWeight: 'bold',
       }}}/>
       <Stack.Screen name="Login" component={Login}
       options={{ title: 'Login', 
       headerStyle: {
       backgroundColor: '#BD1C6F'},
       headerTintColor: '#fff',
       headerTitleStyle: {
       fontWeight: 'bold',
       }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
