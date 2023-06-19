import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, StatusBar } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const paragraphOne = 'The tracker constantly monitors fuel prices and updates them in real-time to reflect the current market conditions accurately.';
const paragraphTwo = 'Just turn on your location and you will find the nearest filling station around you.';
const paragraphThree = 'Price updates are generated from users like yourself. You also get the chance to share your experience with other users.';

const carouselData = [
    { id: 1, title: 'Get update on petrol prices.', paragraph: paragraphOne, image: require('../images/cover_image.png') },
    { id: 2, title: 'Locate petrol stations near you.', paragraph: paragraphTwo, image: require('../images/maps.png') },
    { id: 3, title: 'Share your experience with other users.', paragraph: paragraphThree, image: require('../images/experience.png') },
];

const CarouselItem = ({ item }) => (
    <>
        <Image source={item.image} style={styles.carouselItemImage} />
        <Text style={styles.carouselItemText}>{item.title}</Text>
        <Text style={styles.carouselItemParagraph}>{item.paragraph}</Text>
    </>
);

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderCarouselItem = ({ item }) => <CarouselItem item={item} />;

    return (
        <View style={styles.container}>
            <Carousel
                data={carouselData}
                renderItem={renderCarouselItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onSnapToItem={(index) => setActiveSlide(index)}
                decelerationRate={0.9} // Adjust the deceleration rate for smoother scrolling
                snapToInterval={Dimensions.get('window').width} // Snap to each item's width for smooth snapping
                snapToAlignment="start" // Snap to the start of each item
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
        width: '100%',
        backgroundColor: 'red',
    },
    carouselItemImage: {
        top: 0,
        height: height * 0.45,
        width: '100%',
        resizeMode: 'cover',
    },
    carouselItemText: {
        fontFamily: 'Mulish-Regular',
        marginTop: 33,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    carouselItemParagraph: {
        marginTop: 10,
        fontSize: 20,
        color: 'white',
    },
    paginationContainer: {
    },
    paginationDot: {
        width: 15,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
    },
    paginationInactiveDot: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});

export default Slider;
