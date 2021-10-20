import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import EventButton from './EventButton';

const FlatListEvent = ({ data, navigation,nomPage }) => {
    let id = 1
    const D = data
    if (data != null || data != undefined) {
        return (
            <View style={styles.container}>
                <View style={styles.liste}>
                    <FlatList
                        data={D}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text>{(id++).toString()}. {item.nom}</Text>
                                        <Text>{item.localisation.toString()}</Text>
                                    </View>
                                    <EventButton navigation={navigation} item={item} nomPage={nomPage} />
                                </View>
                                
                            )
                        }
                        }
                    />
                </View>
            </View>
        )
    }
    else if (data == null || data == undefined) {
        return (
            <View style={styles.container}>
                <Text>AUCUNS ÉVÈNEMENTS TROUVÉS</Text>
            </View>
        )
    }
}

export default FlatListEvent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    liste: {
        flexDirection: "column"
    }
})