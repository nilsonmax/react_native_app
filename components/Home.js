import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import{stylesHome} from '../styles/styles'

export const Home = () => {
    return (
        <ScrollView indicatorStyle={'white'} style={stylesHome.containerHome}>
            <Text style={stylesHome.containerTextOne}>Bienvenido a ITechMax Solutions</Text>
            <Text style={stylesHome.containerTextTwo}>es un encantador bistró de barrio que sirve comida sencilla y cócteles clásicos en un ambiente animado pero informal. ¡Nos encantaría saber más sobre su experiencia con nosotros!</Text>
        </ScrollView>
    )
}
