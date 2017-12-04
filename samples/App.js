import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import SegmentControl from 'react-native-segment-controller';

export default class App extends Component<{}> {

  constructor() {
    super();

    this.state = {
      index: 0,
      content: ''
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(index) {
    this.setState({ content: `Segment ${index + 1} selected !!!`, index});
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>react-native-segment-controller</Text>
        <SegmentControl
          values={['One', 'Two', 'Three', 'Four']}
          badges={[0, 5, 0, 2]}
          selectedIndex={this.state.index}
          height={30}
          onTabPress={this.handlePress}
          borderRadius={5}
          tabBadgeContainerStyle={{ backgroundColor: 'red'}}
        />
        <View style={{ marginTop: 20, marginBottom: -50}}>
        <Text style={styles.tab}>{this.state.content}</Text>
        <Text style={styles.info}>Author: csath</Text>
        <Text style={styles.info}>Email: chanakaathurugiriya@gmail.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: -200,
    marginBottom: 60
  },
  info: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    padding: 5
  },
  tab: {
    padding: 30,
    alignSelf: 'center'
  }  
});
