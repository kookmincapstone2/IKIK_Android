import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Addclass({item, pressHandler}) {

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1
    }
})