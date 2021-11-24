import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import MissionComponent from "./MissionComponent";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from 'react-native-animatable';

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
                    <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
                    <MissionComponent />
                    <Card title="Community Partners">
                        <Text>{this.props.partners.errMess}</Text>
                    </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
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
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);
