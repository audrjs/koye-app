import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, FlatList, Image, Button, TouchableOpacity,Dimensions  } from 'react-native';

const win = Dimensions.get('window');

export default class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            < View style={styles.container}>
                <Button
                    onPress={this.props.onPress}
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
        backgroundColor: '#0073bb',
        borderRadius: 5
    },
});


