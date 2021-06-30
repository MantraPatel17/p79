import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/main-icon.png')}
              style={styles.iconImage2}></Image>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
            <Text style={styles.routeText}>Space Craft</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    height: 1000,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  iconImage: {
    position: 'absolute',
    height: 70,
    width: 70,
    resizeMode: 'contain',
    right: 15,
    top: -15,
  },
  iconImage2: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    right: 130,
    top: 10
  },
});
