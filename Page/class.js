import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
// import './class.css';
import AddClass from '../Component/addclass.js';
import AddClass2 from '../Component/addclass2';
const Class = () => {
  const [addClass, setaddClass] = useState([{text: 'buy coffee', key: '1'}]);
  const pressHandler = (key) => {
    setaddClass((prevClass) => {
      return prevClass.filter((addClass) => addClass.key != key);
    });
  };

  const submitHandler = (text) => {
    setaddClass((prevClass) => {
      return [{text: text, key: Math.random().toString()}, ...prevClass];
    });
  };
  return (
    <View>
      <View>
        <AddClass2 submitHandler={submitHandler} />
        <FlatList
          data={addClass}
          style={styles.item}
          renderItem={({item}) => (
            <AddClass item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#b9ffe0',
  },
});

export default Class;
