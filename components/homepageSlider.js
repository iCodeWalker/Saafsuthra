import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import yelp from '../api/yelp';

MaterialCommunityIcons.loadFont();
const {width, height} = Dimensions.get('window');

const HomePageSlider = () => {
  const [term, setTerm] = useState('pasta');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const resultApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 7,
          term,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('something went wrong !! Try again later');
    }
  };

  useEffect(() => {
    resultApi();
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
    <View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('homesliderdetail', {
                    id: item.id.toString(),
                  });
                }}>
                <View style={styles.container}>
                  <View style={{padding: 5}}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                  <Image
                    style={styles.image}
                    source={{
                      uri:
                        'https://thumbs.dreamstime.com/z/blanket-vector-drawing-neat-cozy-snug-thick-feather-divan-blue-velvet-throw-roll-navi-chock-white-bedroom-backdrop-bright-125762809.jpg',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    width: width - 30,
    height: height / 7,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: width - 210,
    height: height / 7,
    marginLeft: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    paddingTop: 25,
    width: width - 280,
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: 'green',
  },
});

export default HomePageSlider;
