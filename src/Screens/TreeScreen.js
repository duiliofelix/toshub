import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ClassIcon from '../Components/ClassIcon';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderColor: '#DDD',
    borderRadius: 15,
    borderWidth: 1,
    margin: 5,
    padding: 20,
  },
  container: {
    backgroundColor: '#f9c36d',
    flexGrow: 1,
    padding: 10,
    paddingTop: 35,
  },
});

class TreeScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      baseClass: 'ARCHER',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <ClassIcon className={this.state.baseClass} />
        </View>
        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <ClassIcon className="WIZARD" />
          <ClassIcon className="CLERIC" />
          <ClassIcon className="SCOUT" />
        </View>
        <View style={styles.card} >
          <Text>Status</Text>
        </View>
        <View style={styles.card}>
          <Text>Skills</Text>
        </View>
      </View>
    );
  }
}

export default TreeScreen;
