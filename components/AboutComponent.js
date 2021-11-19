import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import MissionComponent from "./MissionComponent";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
    return {
        partners: state.partners,
    };
};
class About extends Component {
    static navigationOptions = {
        title: "About Us",
    };
    render() {
        function renderPartners({ item }) {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: { uri: baseUrl + item.image } }}
                ></ListItem>
            );
        }
        return (
            <ScrollView>
                <MissionComponent />
                <View>
                    <Card title="Community Partners">
                        <FlatList
                            data={this.props.partners.partners}
                            renderItem={renderPartners}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);
