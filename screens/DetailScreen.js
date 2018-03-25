import React, { Component } from 'react';
import moment from 'moment';
import {Text, StyleSheet, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import NavIconButton from '../navigation/NavIconButton';
import OpenInBrowserIcon from '../navigation/OpenInBrowserIcon';
import { WebBrowser} from 'expo';

class DetailScreen extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    const imageId = item.tmdbImageId;
    const release = item.year; 
    const review = item.tmdbRating;
    const date = item.showtimes[0].startsAtDate;
    const time = item.showtimes[0].startsAtTime;
    const channel = item.showtimes[0].channel;
    const dateformatted = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').calendar();
    const string = dateformatted + " on " + channel;
    const reviewColor = (review >= 60 ? styles.ratinggood : (review < 40 ? styles.ratingbad : styles.ratingok));
    const synopsis = item.synopsis;
    const imagelink = 'https://image.tmdb.org/t/p/original/'+ imageId + '.jpg';
    
    return (
      <ScrollView style={styles.container}>
        {imageId !== null ? <Image 
          source={{uri: imagelink}}
          style={{height: 400, width: 400}}
          resizeMode= "contain"
        /> : null}
        <View style={styles.filmdetails}>
          <View style={styles.detailsflex}>
            {+release !==0 ? <Text style={styles.header}>Released in {+release}</Text> : null}
            {+review !== 0 ? 
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.header}>Rating: </Text><Text style={[styles.header, reviewColor]}>{review}%</Text>
              </View>
            : null}
          </View>
          <View style={styles.detailslist}>
            <Text style={styles.header}>Showtimes:</Text>
            <Text style={styles.paragraph}>{string}</Text>
            <Text style={styles.paragraph}>{synopsis}</Text>
          </View>
        </View>
 
      </ScrollView>
    ); 
  }
}

DetailScreen.navigationOptions = ({ navigation }) => {
  const { name, imdbUrl } = navigation.state.params.item;
  const openFilmUrl = () => WebBrowser.openBrowserAsync(imdbUrl);
  return {
  headerTitle: navigation.state.params.item.name,
  headerRight: (
    <NavIconButton onPress={openFilmUrl}>
      <OpenInBrowserIcon />
    </NavIconButton>
    )
  }
};

export default DetailScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },  
  image: {
    flex: 1
  },
  filmdetails: {
    paddingHorizontal: 10
  },
  detailsflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailslist: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    marginVertical: 5
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 5
  },
  ratinggood: {
    color: '#265819'
  },
  ratingok: {
    color: '#71500f'
  },
  ratingbad: {
    color: '#7e2310'
  }
});

