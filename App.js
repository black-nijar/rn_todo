import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native'
import Header from './Components/Header'
import ListItem from './Components/ListItem'
import {uuid} from 'uuidv4'
import AddItem from './Components/AddItem'

 const App = () => {
   const [ item , setItem ] = useState([ ])
   const deleteItem = (id) => {
      setItem((prevItem ) => {
        return prevItem.filter(item => item.id !== id)
      })
   }
   const addItem = (text) => {
     if (!text) {
      Alert.alert(`Error`, `Please add item...`)
     } else {
      setItem(prevItem =>  {
        return [ { id: uuid(), text },  ...prevItem]
      })
     }
   } 
  return (
      <View style={styles.container}>
        <Header/>
        <AddItem addItem={addItem}/>
        <FlatList
          data={item}
          renderItem={({item}) => 
            <ListItem 
              item={item} 
              deleteItem={deleteItem}
              addItem={addItem}
            />
          }
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
  }
})

export default App