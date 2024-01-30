import * as React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    // containerHeader: {
    //     flex: 0.27,
    //     backgroundColor: '#495E56',
    //     //   alignItems: 'center',
    //     //   justifyContent: 'center',
    // },
    // containerFooter: {
    //     flex: 0.04,
    //     backgroundColor: '#495E57',
    //     // marginBottom:10,
    //     //   alignItems: 'center',
    //     //   justifyContent: 'center',
    // },
    containerHome: {
        flex: 1,
        backgroundColor: '#495E',
        //   alignItems: 'center',
        //   justifyContent: 'center',
    },
});

export const stylesHeader = StyleSheet.create({
    containerView: {
        // flex: 0.22,
        backgroundColor: '#F4CE14',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: { padding: 40, fontSize: 30, color: 'black' },
});

export const stylesFooter = StyleSheet.create({
    containerView: {
        // flex: 0.22,
        backgroundColor: '#F4CE14',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom:10,
    },
    containerText: { fontSize: 16, color: 'black' },
});