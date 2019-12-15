import React, { Component } from 'react';
import {StyleSheet, View, Image, SafeAreaView, FlatList, Text, Button, Dimensions  } from 'react-native';
import t from 'tcomb-form-native';
import SubmitButton from '../buttons/submit_button'

const Form = t.form.Form;
const User = t.struct({
    name: t.String,
    전화: t.String,
    주소: t.String,
    오픈: t.String,
    클로즈: t.String,
    종류: t.String,
    메뉴: t.String,
});

const win = Dimensions.get('window');

export default class UploadView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
      }

    render() {
        return (
            <View style={styles.container}>
                <Form ref={c => this._form = c} type={User} />
                <SubmitButton  onPress={this.handleSubmit} title = {"Submit"} ></SubmitButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});


