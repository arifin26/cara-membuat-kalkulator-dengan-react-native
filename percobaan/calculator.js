import React from 'react'
import { View ,ImageBackground} from 'react-native'
import { Calculator } from 'react-native-calculator'
 
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
   
        <Calculator style={{ flex: 1 }} 
          actionButtonColor='#ff4500'
          actionButtonBackgroundColor='#191970'
          fontSize={30}
          keyboardHeight={400}

        />
      
      </View>
    )
  }
}