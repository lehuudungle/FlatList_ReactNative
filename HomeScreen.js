import {
  View, FlatList, Text, Image, StyleSheet, Alert
} from 'react-native';
import React from 'react';
import Swipeout from 'react-native-swipeout';
import flatListData from './flastListData';


class FlatListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowkey: null
    };
  }

  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowkey != null) {
          this.setState({ activeRowkey: null });
        }
      },
      onOpen: (sectionId: number, rowId: number, direction: string) => {
        this.setState({ activeRowkey: this.props.itemFlat.key });
      },

      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowkey;
            Alert.alert(
              'Alert',
              'Are you delete ?',
              [{ text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    // refresh Flatlist
                    this.props.parentFlatList.remoteTableView(deletingRow);
                  }
                },
              ],
              { cancelable: true }

            );
          },
          text: 'Delete',
          type: 'delete'
        }
      ],
      rowID: this.props.index,
      sectionID: 1
    };
    return (

      <Swipeout {...swipeSettings}>
        <View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'mediumseagreen'
          }}
          >
            <Image
              source={{ uri: this.props.itemFlat.imageUrl }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
            <View style={{
              flex: 1,
              flexDirection: 'column'
            }}
            >
              <Text style={styles.flatListItem}>{ this.props.itemFlat.name }</Text>
              <Text style={styles.flatListItem}>{ this.props.itemFlat.key }</Text>
            </View>
          </View>
          <View style={{ height: 1, setBackgroundColor: 'white' }} />
        </View>

      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  }
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      deletedRowKey: null,
    });
  }

    remoteTableView = (deletedKey) => {
      this.setState((prevState )=> {
        return {
              deletedRowKey: deletedKey
        };
      });
    }

    render() {
      return (
        <View style={{ flex: 1, marginTop: 0 }}>
          <FlatList
            data={flatListData}
            renderItem={({ item, index }) => (
              <FlatListItem itemFlat={item} index={index} parentFlatList = { this } />
            )}
          />
          <Text>Le huu dung</Text>
        </View>
      );
    }
}
