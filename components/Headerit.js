import * as React from 'react'
import { View, Text } from 'react-native'
import { stylesHeader } from '../styles/styles'

export const HeaderIT = () => {
    return (
        <View style={stylesHeader.containerView}>
             <Text style={stylesHeader.containerText} numberOfLines={3}>
            {/* {'      '} Welcome to {' '} */}
                {/* <Text style={{ fontWeight: 'bold' }}> {' '} */}
                    ITechMax Solutions
                </Text>
            {/* </Text> */}
        </View>
    )
}

