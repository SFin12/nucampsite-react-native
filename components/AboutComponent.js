import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { PARTNERS } from "../shared/partners";
import MissionComponent from "./MissionComponent";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        }
    }
    static navigationOptions = {
        title: 'About Us'
    };
    render() {
        function renderPartners({item}){
            return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./images/bootstrap-logo.png'
                )}}>

            </ListItem>
            )
        }
        return (
        <ScrollView>
            <MissionComponent />
            <View>
            <Card title="Community Partners">
                <FlatList 
                    data={this.state.partners}
                    renderItem={renderPartners}
                    keyExtractor={item => item.id.toString()}/>
            </Card>
            </View>
        </ScrollView>
        )
    }
}

export default About;
