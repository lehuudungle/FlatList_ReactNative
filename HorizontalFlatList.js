import {
    View, FlatList, Text, Image, StyleSheet, Alert, Platform, TouchableHighlight, TouchableOpacity
} from 'react-native';
import React from 'react';

import { horizontalStatus} from "./horizontalFlatListData";
import {horizontalFatListData} from "./horizontalFlatListData";
import Icon from 'react-native-vector-icons/Ionicons';
class HorizontalFlatListItem extends React.Component {
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'grey',
                    margin: 4,
                }}
            >
                <TouchableOpacity onPress={()=> {
                    alert(`You pressed: ${this.props.item.hour}`)
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white', 
                    margin: 20
                }}>{ this.props.item.hour }
                </Text>
                <Icon name={(Platform.OS == 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                      size={ 30 }
                      color={'white'}
                ></Icon>
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    margin: 10
                }}>{ this.props.item.degrees }🌡️
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export  default  class HorizontalFlatList extends React.Component {
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'ios' ? 34: 0
                }}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(52, 52, 52, 0.8)'
                    }}
                ></View>
                <View style={{ height: 150}}>
                    <FlatList
                        style={{ backgroundColor: 'black', opacity: 0.5 }}
                        horizontal={true}
                        data={ horizontalFatListData }
                        renderItem={({ item, index }) => {
                            return(
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                </HorizontalFlatListItem>
                            );
                        }}
                        keyExtractor={( item, index) => item.hour}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}