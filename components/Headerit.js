import * as React from 'react'
import { View, Text } from 'react-native'
import {stylesHeader} from '../styles/styles'

export const HeaderIT = () => {
    return (
        <View style={stylesHeader.containerView}>
            <Text style={stylesHeader.containerText}>
                Welcome to ITechMax Solutions
            </Text>
        </View>
    )
}

