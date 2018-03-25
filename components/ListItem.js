import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet, View, Platform } from 'react-native';
import moment from 'moment';
import Icon from '@expo/vector-icons/Ionicons';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }, 
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  subheading: {
    fontSize: 14,
    paddingHorizontal: 10
  },
  listitem: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  itemmain: {
    flex: 1,
  },
  itemrating: {
    paddingHorizontal: 10
  },
  ratinggood: {
    color: '#265819'
  },
  ratingok: {
    color: '#71500f'
  },
  ratingbad: {
    color: '#7e2310'
  },
  accessory: {
    paddingRight: 10
  }
});

class ListItem extends Component { 
  render() {
    
    const { item, onPress } = this.props;
    
    const date = item.showtimes[0].startsAtDate;
    const time = item.showtimes[0].startsAtTime;
    const channel = item.showtimes[0].channel;
    const dateformatted = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').calendar();
    const string = dateformatted + " on " + channel;

    const review = item.tmdbRating;
    const reviewColor = (review >= 60 ? styles.ratinggood : (review < 40 ? styles.ratingbad : styles.ratingok));
    
    return (
      <TouchableHighlight style={styles.container} underlayColor="#e4e4e4" onPress={onPress} >
        <View style={styles.listitem}>
          <View style={styles.itemmain}>
            <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.subheading} numberOfLines={1}>{string}</Text>
          </View>
          <View style={styles.listitem}>
            <Text 
              style={[styles.itemrating, reviewColor]}>
              {item.tmdbRating === 0 ? null : item.tmdbRating + '%'}
            </Text>
            {isIOS && <Icon style={styles.accessory} name="ios-arrow-forward" />}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;