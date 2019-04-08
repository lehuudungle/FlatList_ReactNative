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
export default class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }

    showAddModal = () => {
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
                }}>New food's information</Text>
                 <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                     borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({newFoodName: text})}
                    placeholder={'Enter new food name'}
                    value={this.state.newFoodName}>
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
                           onChangeText={(text) => this.setState({newFoodDescription: text})}
                           placeholder="Enter new food's description"
                           value={this.state.newFoodDescription}>
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
                        if (this.state.newFoodName.length == 0|| this.state.newFoodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: 'https://picsum.photos/g/200/300',
                            foodDescription: this.state.newFoodDescription
                        }
                        flatListData.push(newFood);
                        this.props.parentFlatlist.remoteTableView(newKey)
                        this.refs.myModal.close()
                    }}
                >Save</Button>

            </Modal>
        );
    }
}