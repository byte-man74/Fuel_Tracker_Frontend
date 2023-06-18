import { StyleSheet, Text, View, Dimensions, StatusBar, Image } from 'react-native'
import React from 'react'

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;


const Slider = () => {
  return (
      <View style={styles.coverContainer}>
          <Image
              source={require('../images/cover_image.png')}
              style={styles.coverImage}
          />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    coverContainer: {
        top: -statusBarHeight,
        height: height * 0.60,
        width: '100%',
        backgroundColor: 'red',
    },
    coverImage: {
        top: 0,
        height: height * 0.45,
        width: '100%',
        resizeMode: 'contain',
    },
})



import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselData = [
    { id: 1, title: 'Slide 1', image: require('./path/to/image1.jpg') },
    { id: 2, title: 'Slide 2', image: require('./path/to/image2.jpg') },
    { id: 3, title: 'Slide 3', image: require('./path/to/image3.jpg') },
];

const CarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselItemImage} />
        <Text style={styles.carouselItemText}>{item.title}</Text>
    </View>
);

const App = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderCarouselItem = ({ item }) => <CarouselItem item={item} />;

    return (
        <View style={styles.container}>
            <Carousel
                data={carouselData}
                renderItem={renderCarouselItem}
                sliderWidth={300}
                itemWidth={200}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={carouselData.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 20,
    },
    carouselItemImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    carouselItemText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    paginationContainer: {
        marginTop: 10,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
    },
    paginationInactiveDot: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});

export default App;
