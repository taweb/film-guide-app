import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';
import ListSeperator from './ListSeperator';

const styles = StyleSheet.create({
  container: {
    flex: 1 
  } 
});

class List extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    const navigate = () => {
      this.props.navigateToDetail(item);
    };
    return <ListItem item={item} onPress={navigate} />;
  }

  renderSeperator(){
    return <ListSeperator />
  } 

  render() {
    const { items } = this.props;

    return (
      <FlatList
       data={items}
       renderItem={this.renderItem}
       keyExtractor={this.keyExtractor}
       ItemSeparatorComponent={this.renderSeperator} /> 
    );
  }
}

export default List;