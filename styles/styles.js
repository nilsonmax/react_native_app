import * as React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#495E',
    },
});

export const stylesHeader = StyleSheet.create({
    containerView: {
        flex: 0.22,
        backgroundColor: '#EE9972',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 40,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
});

export const stylesFooter = StyleSheet.create({
    containerView: {
        backgroundColor: '#EE9972',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: { fontSize: 16, color: 'black' },
});

export const stylesHome = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    containerTextOne: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    containerTextTwo: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
});
