import *as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native'

export default class DailyPicScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apod: []
        };
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DvtLh5S0P1WhboV7m1e7mqUeTMTcsBL7OJ0a4aB1")
            .then(response => {
                this.setState({ apod: response.data })
                    .catch(error => {
                        Alert.alert(error.message)
                    })
            })
    }

    componentDidMount(){
        this.getAPOD()
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/space.gif')}
                    style={styles.backgroundImage} />
                <Text style={styles.routetext}> Astronomy picture of the day</Text>
                <Text style={styles.titletext}> {this.state.apod.title} </Text>
                <TouchableOpacity style={styles.listContainer}
                    onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                >
                    <View style={styles.iconContainer}>
                        <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50 }}></Image>
                    </View>
                </TouchableOpacity>
                <Text>{this.state.apod.explanation}</Text>
            </View >
        )
    }
}
const styles = StyleSheet.create({
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
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },

});
