import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
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
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./images/bootstrap-logo.png'
                )}}>

            </ListItem>
        }
        return (
        <ScrollView>
            <MissionComponent />
        </ScrollView>
        )
    }
}

export default About;
