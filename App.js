import React, { Component } from 'react';
import {Text, View, Image, StatusBar} from 'react-native';


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='bluesky' barStyle="light-content" />

        <View style={{ padding: 20, backgroundColor: '#F8FA44'}}>
          <Text style={{textAlign: 'center', color: 'green', fontWeight: 'bold', fontSize: 20}}>VacaTime</Text>
        </View>
      <View style={{flex: 1}}>
        <View style={{ flex:1, backgroundColor: 'white'}}></View>
        <View style={{height:54, backgroundColor: 'green', flexDirection:'row'}}>
          <View style={{backgroundColor: 'lightgreen', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width:26, height:26, backgroundColor: 'white'}}>
              <Image source={require('./icon/home.png')} />
            </View>
            <Text style={{fontSize: 10, marginTop: 4}}>Home</Text>
          </View>
          <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width:26, height:26, backgroundColor: 'orange'}}>
            <Image source={require('./icon/akun.png')} />
          </View>
            <Text style={{fontSize: 10, marginTop: 4}}>Login</Text>
          </View>
          <View style={{backgroundColor: 'lightgreen', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width:26, height:26, backgroundColor: 'white'}}>
           <Image source={require('./icon/about.png')} />
          </View>
            <Text style={{fontSize: 10, marginTop: 4}}>About</Text>
          </View>
          
      </View>
        </View>
        </View>
      
    )
  }
}


export default App;
