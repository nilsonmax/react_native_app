import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const HeaderIT = () => {
    return (
        <View style={styles.containerView}>
            <Text style={styles.containerText}>
                Welcome to ITechMax Solutions
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    containerView: { flex: 0.3, backgroundColor: '#F4CE14' },
    containerText: { padding: 40, fontSize: 30, color: 'black' },
});
