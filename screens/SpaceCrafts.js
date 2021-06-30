import *as React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class SpaceCraftScreen extends React.Component{
render(){
    return(
        <View style= {{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems:'center',
        }}>
            <Text> Space Craft Screen </Text>
        </View>
    )
}
}