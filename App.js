import React, {Component} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class App extends Component{

  _onPressbutton(){
    alert('hey! presionaste el boton')
  }

  render(){
    const name= '01 - Guns & Roses'

    return(<View style={styles.container}>
        <View style={styles.innerContainer}/>
        <Text style={styles.title}>
          <Text style={styles.subtitle}>Playing:</Text> {name}
        </Text>
        
        <View>
          <Button onPress={this._onPressbutton} title='Reproducir'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#e67e22',
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#d35400',
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 12,
    left: 10,
  },
  subtitle: {
    fontWeight: 'bold',
  },
})