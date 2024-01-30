import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {stylesFooter} from '../styles/styles'

export const FooterIt = () => {
    return (
        <View style={stylesFooter.containerView}>
            <Text style={stylesFooter.containerText}>
                All right reserved by ITechMax Solutions
            </Text>
        </View>
    )
}