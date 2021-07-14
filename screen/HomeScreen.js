import React, {useContext} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  TouchableHighlight,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {screenHeight, screenWidth} from '../utils/Dimensions';
const HomeScreen = () => {
  const onTouchBanner = index => {
    if (index === 0) {
      Linking.canOpenURL('https://www.thelivingos.com/').then(supported => {
        if (supported) {
          Linking.openURL('https://www.thelivingos.com/');
        }
      });
    } else if (index === 1) {
      Linking.openURL('google.navigation:q=100+101');
    } else if (index === 2) {
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity onPress={onTouchBanner(index)}>
          <View>
            <Image style={styles.imageSldie} source={item.image} />
            <View style={styles.imageCaption}>
              <Text>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const entries = [
    {
      title: 'No.1',
      image: require('../assets/banner/banner_1.jpg'),
    },
    {
      title: 'No.2',
      image: require('../assets/banner/banner_2.jpg'),
    },
    {
      title: 'No.3',
      image: require('../assets/banner/banner_3.jpg'),
    },
  ];
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
      />
      <FormButton buttonText="List Example" />
      <FormButton buttonText="Logout" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  slide: {
    width: '95%',
    height: screenHeight / 1.5,
    marginBottom: 10,
  },
  imageSldie: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  imageCaption: {
    position: 'absolute',
    padding: 6,
    backgroundColor: '#ddd',
  },
});
