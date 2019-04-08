import {
    View, FlatList, Text, Image, StyleSheet, Alert, Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import React from 'react';
import Swipeout from 'react-native-swipeout';
import flatListData from './flastListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
var {height, width} = Dimensions.get('window');
export default class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: ''
        }
    }

    showEditModal = (editingFood, flatListItem) => {
        console.log(`editingFood = ${JSON.stringify(editingFood)}`);
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        })
        this.refs.myModal.open()
    }

    generateKey = (numberCharacters) => {
        return require('random-string')({length: numberCharacters});
    }

    render() {
        return(
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent:'center',
                    borderRadius: Platform.OS === 'ios'? 30: 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 300
                }}
                position='center'
                backdrop={true}
                onClosed={() =>{
                    alert("Modal closed");
                }}
            >

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>food's information</Text>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                           onChangeText={(text) => this.setState({foodName: text})}
                           placeholder={'Enter food name'}
                           value={this.state.foodName}>
                </TextInput>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                           onChangeText={(text) => this.setState({foodDescription: text})}
                           placeholder="Enter food's description"
                           value={this.state.foodDescription}>
                </TextInput>
                <Button
                    style={{ fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.foodName.length == 0|| this.state.foodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        // Update existing Food
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >Save</Button>

            </Modal>
        );
    }
}