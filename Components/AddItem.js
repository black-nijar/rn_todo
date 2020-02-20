import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text ,setText] = useState('')
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder='Add Todo...'
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name='plus' size={18}/>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  textInput: {
    padding: 6,
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    borderColor: 'grey',
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: 'blue',
    padding: 6,
    margin: 6,
  }
})
export default AddItem
