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
    <View style={{alignItems: "center"}}>
        <Image source={item.image} style={styles.carouselItemImage} />
        <Text style={styles.carouselItemTex}>{item.title}</Text>
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
    },
    carouselItemImage: {
        top: 0,
        height: height * 0.45,
        width: '100%',
        resizeMode: 'cover',
    },
    carouselItemTex: {
        fontFamily: 'MulishBold', // Replace 'Regular' with the actual font name
        fontSize: 28,
        lineHeight: 35,
        color: "#232323",
        marginTop: 25,
        textAlign: 'center',
        width: 300
    },
    carouselItemParagraph: {
        fontFamily: 'Regular',
        marginTop: 14,
        lineHeight: 22.2,
        fontSize: 15,
        textAlign: "center",
        color: '#232323',
        width: 330
    },
    paginationContainer: {

    },
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
