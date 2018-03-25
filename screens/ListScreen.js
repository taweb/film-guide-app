import React, { Component } from 'react';
import List from '../components/List'; 
import FilmsLoading from '../components/FilmsLoading';

class ListScreen extends Component {  
  constructor(props) { 
    super(props);
    this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  componentDidMount() { 
      this.props.onLoad();
  }

  navigateToDetail(item) {
    this.props.navigation.navigate('Detail', {
      item: item
    });
  }

  render() {
    const {films, loading} = this.props;
    if (loading) {
      return <FilmsLoading />;
    }

    return <List items={films} navigateToDetail={this.navigateToDetail} />
  }
}

ListScreen.navigationOptions = {
  title: 'Films on Freeview',
};

export default ListScreen;