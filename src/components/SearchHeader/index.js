import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import { isIphoneX } from '@lib/isIphoneX';
import MStatusBar from '@components/MStatusBar';

import {Text, Appbar, Searchbar } from 'react-native-paper';

export default class SearchHeader extends Component {
  state = {
    searchQuery: '',
    isFocused: false
  }

  _onFocus = () => {
    this.setState({ isFocused: true }, () => {
      this.props.navigation.navigate('SearchScreen');
      setTimeout(() => { this.searchTextInput.focus() }, 240);
    });
  };

  _onBlur = () => {
    this.setState({ isFocused: false });
  };

  _onPress = ()=> {
    this._onFocus();
  }

  _goBack = ()=> {
    this._onBlur();
    this.props.navigation.goBack (null);
  }

  render() {
    return (
      <View style={styles.container}>
        <MStatusBar barStyle="light-content" />
        {this.state.isFocused ? (
          <Appbar style={styles.toolbar}>
            <Searchbar ref={input => { this.searchTextInput = input; }}
                        style={styles.searchbar}
                        placeholder="Search"
                        icon={ Platform.OS === 'ios' ? 'keyboard-arrow-left'  : 'arrow-back' }
                        onIconPress={this._goBack}
                        onChangeText={query => { this.setState({ searchQuery: query }); }}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                        value={this.state.searchQuery}
            />
          </Appbar>
        ) : (
          <Appbar style={styles.toolbar}>
            <Appbar.Action icon="search" onPress={this._onPress}/>
              <TouchableOpacity style={styles.btn} onPress={this.onPress}>
                <Text style={styles.btnText}>Search</Text>
              </TouchableOpacity>
            <Appbar.Action icon="face" onPress={this._onSearch} />
          </Appbar>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: isIphoneX() ? 100 : null,
    backgroundColor: "black",
    justifyContent: 'flex-end',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#bdc3c7"
  },
  elevatedContainer: {
    height: isIphoneX() ? 100 : null,
    backgroundColor: "black",
    justifyContent: 'flex-end',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#bdc3c7",
    elevation: 4
  },

  searchbar: {
    backgroundColor: 'white',
    elevation: 0
  },
  toolbar: {
    backgroundColor: 'white'
  },
  search: {
    flexDirection: 'row',
    height: 50, 
    alignItems: 'center'
  },
  input: {
    width: '90%',
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16
  },
  btn: {
    width: '75%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  btnText: {
    fontSize: 16,
    color: '#7f8c8d'
  }
});

