import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, StatusBar } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';

const { height, width } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const paragraphOne = 'The tracker constantly monitors fuel prices and updates them in real-time to reflect the current market conditions accurately.';
const paragraphTwo = 'Just turn on your location and you will find the nearest filling station around you.';
const paragraphThree = 'Price updates are generated from users like yourself. You also get the chance to share your experience with other users.';

const carouselData = [
    { id: 1, title: 'Get update on petrol prices.', paragraph: paragraphOne, image: require('../images/share.json') },
    { id: 2, title: 'Locate petrol stations near you.', paragraph: paragraphTwo, image: require('../images/maps.json') },
    { id: 3, title: 'Share your experience with other users.', paragraph: paragraphThree, image: require('../images/experience.json') },
];

const CarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
        <LottieView
            source={item.image}
            autoPlay
            loop
            style={styles.carouselItemImage}
        />
        <Text style={styles.carouselItemText}>{item.title}</Text>
        <Text style={styles.carouselItemParagraph}>{item.paragraph}</Text>
    </View>
);

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderCarouselItem = ({ item }) => <CarouselItem item={item} />;

    return (
        <View style={styles.container}>
            <Carousel
                data={carouselData}
                renderItem={renderCarouselItem}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={setActiveSlide}
                decelerationRate={0.9}
                snapToInterval={width}
                snapToAlignment="start"
                autoplay
                autoplayInterval={5500}
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

Slider.propTypes = {
    style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
    container: {
        top: -statusBarHeight,
        minHeight: height * 0.6,
        width: width,
    },
    carouselItem: {
        alignItems: 'center',
        width: '100%',
    },
    carouselItemImage: {
        width: '100%',
        aspectRatio: 1,
    },
    carouselItemText: {
        fontFamily: 'MulishBold',
        fontSize: 28,
        lineHeight: 35,
        color: '#232323',
        marginTop: 25,
        textAlign: 'center',
        width: 300,
    },
    carouselItemParagraph: {
        fontFamily: 'Regular',
        marginTop: 14,
        lineHeight: 22.2,
        fontSize: 15,
        textAlign: 'center',
        color: '#232323',
        width: 330,
    },
    paginationContainer: {},
    paginationDot: {
        width: 17,
        height: 6,
        marginHorizontal: -8,
        borderRadius: 5,
        backgroundColor: '#1E1E1E',
    },
    paginationInactiveDot: {
        width: 6,
        backgroundColor: '#BDBDBD',
    },
});

export default Slider;
