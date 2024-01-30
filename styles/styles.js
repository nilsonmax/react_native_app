import * as React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Headerit: {
        flex: 1,
        backgroundColor: '#495E57',
        //   alignItems: 'center',
        //   justifyContent: 'center',
    },
    Footerit: {
        //   flex: 1,
        backgroundColor: '#495E57',
        //   alignItems: 'center',
        //   justifyContent: 'center',
    },
});

export const stylesHeader = StyleSheet.create({
    containerView: { flex: 0.22, backgroundColor: '#F4CE14' },
    containerText: { padding: 40, fontSize: 30, color: 'black' },
});

export const stylesFooter = StyleSheet.create({
    containerView: {
        backgroundColor: '#F4CE14',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: { fontSize: 18, color: 'black' },
});