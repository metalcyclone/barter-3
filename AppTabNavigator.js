import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';
import {AppStackNavigator} from './AppStackNavigator'

export const AppTabNavigator = createBottomTabNavigator({
    Donate: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarLabel: "Donate" 
        } 
    },
    Request: {
        screen: RequestScreen,
        navigationOptions: {
            tabBarLabel: "Request" 
        } 
    }
})

