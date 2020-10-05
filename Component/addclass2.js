import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default function AddClass2( { submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
            style={styles.input} 
            placeholder = 'new class...'
            onChangeText={changeHandler}
            />
            <Button onPress={()=> submitHandler(text)} title='add Class' color = 'coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})