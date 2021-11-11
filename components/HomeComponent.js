import React, { Component } from "react";
import { View, Text, EdgeInsetsPropType } from "react-native";


class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        )
    }
}

export default Home;