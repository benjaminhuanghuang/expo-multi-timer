import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { globalStyles } from '../globalStyles';

export const SettingsScreen : React.FC = ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>Settings...</Text>
    </View>
  )
}