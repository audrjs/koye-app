import React, { Component } from 'react';
import { StyleSheet, View, Image, SafeAreaView, FlatList, Text, Button, Dimensions } from 'react-native';
import t from 'tcomb-form-native';
import SubmitButton from '../buttons/submit_button'

const Form = t.form.Form;
const User = t.struct({
    Name: t.String,
    Phone: t.String,
    Address: t.String,
    City: t.Array,
    Open: t.String,
    Close: t.String,
    category: t.String,
    Menu: t.String,
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
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


