import * as React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
// import { stylesHeader } from '../styles/styles'

// const menuItemsToDisplay = [
//     ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
// ];

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
];

const Item = ({ name, price }) => (
    <View style={stylesMenu.container}>
        <Text style={stylesMenu.text}>{name}</Text>
        <Text style={stylesMenu.text}>{' '}{price}</Text>
    </View>
);

const Separator = () => <View style={stylesMenu.separator} />
const Header = () => <Text style={stylesMenu.textHeaderList} >Servicios</Text>
const Footer = () => <Text style={stylesMenu.textHeaderList} >Los esperamos nuevamente</Text>

export const Menu = () => {

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    return (
        <View style={{ flex: 0.75 }}>
            <Text style={{ color: 'black', fontSize: 40, flexWrap: 'wrap' }}>
                View Menu
            </Text>
            <FlatList
                data={menuItemsToDisplay}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}

            >
            </FlatList>
            {/* <ScrollView indicator Style={"white"} style={{
                paddingHorizontal: 40,
                paddingVertical: 40,
                backgroundColor: "black",
            }}>
                <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
                    View Menu
                </Text>
                <Text style={{ color: '#F4CE14', fontSize: 36 }}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView> */}
        </View>
    )
}
export const stylesMenu = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: "black",
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#F4CE14',
        fontSize: 20,
    },
    separator: {
        marginVertical: 10,
        borderColor: '#00000050',
        borderWidth: 0.5,
    },
    textHeaderList: {
        marginVertical: 10,
        borderColor: '#00000050',
        borderWidth: 0.5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }

});