import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {stylesFooter} from '../styles/styles'

export const FooterIt = () => {
    return (
        <View style={stylesFooter.containerView}>
            <Text style={stylesFooter.containerText}>
            All rights reserved by ITechMax Solutions, 2024
            </Text>
        </View>
    )
}