import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#5cdb95",
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },

    title: {
        fontSize: 28,
        color: "#edf5e1",
        fontWeight: "bold"
    }
});

export default Header;