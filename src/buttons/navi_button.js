import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, FlatList, Image, Button, TouchableOpacity, Dimensions } from 'react-native';


const win = Dimensions.get('window');

export default class NaviButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            < View style={styles.container}>
                <Button
                    onPress={this._onPressButton}
                    title={this.props.title}
                    color='white'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: win.width / 2.5,
        backgroundColor: '#3897f0',
        borderRadius: 5
    },
});


