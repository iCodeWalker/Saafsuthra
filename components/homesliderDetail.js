import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const HomeSliderDetail = ({route}) => {
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const id = route.params.id;

  const getDetail = (id) => {
    try {
      setResult(data);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };
  /*const getDetail = async (id) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 7,
          term,
          location: 'san jose',
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('something went wrong !! Try again later');
    }
  };
};
*/
  useEffect(() => {
    getDetail(id);
  }, []);
  const data = [
    {
      id: 1,
      name: 'Wash and Fold',
    },
    {
      id: 2,
      name: 'Wash and Iron',
    },
    {
      id: 3,
      name: 'Winter Wear',
    },
    {
      id: 4,
      name: 'Blankets',
    },
    {
      id: 5,
      name: 'Households',
    },
    {
      id: 6,
      name: 'Vehicle Covers',
    },
    {
      id: 7,
      name: 'Sofa Covers',
    },
  ];
  return (
    <SafeAreaView>
      <View>
        <Text>{data.name}</Text>

        <FlatList
          data={result}
          keyExtractor={(result) => result.id.toString()}
          renderItem={({item}) => {
            <Text>{item.name}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeSliderDetail;
