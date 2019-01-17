import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c36d',
    flexGrow: 1,
    paddingTop: 35,
  },
});

class TreeScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text>Class Slot</Text>
        </View>
        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <Text>Class Slot</Text>
          <Text>Class Slot</Text>
          <Text>Class Slot</Text>
        </View>
        <View>
          <Text>Status</Text>
        </View>
        <View>
          <Text>Skills</Text>
        </View>
      </View>
    );
  }
}

export default TreeScreen;
