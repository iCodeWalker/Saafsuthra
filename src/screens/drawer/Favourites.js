import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { styles } from '../../styles/styles.js'

Favourites = () => {
  const route = useRoute();
  console.log(route)
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Favourites</Text>
    </View>
  )
}

export default Favourites;