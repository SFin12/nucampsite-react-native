import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import MissionComponent from "./MissionComponent";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

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
                />
            );
        }

        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <MissionComponent />
                    <Card title="Community Partners">
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.partners.errMess) {
            return (
                <ScrollView>
                    <MissionComponent />
                    <Card title="Community Partners">
                        <Text>{this.props.partners.errMess}</Text>
                    </Card>
                </ScrollView>
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
