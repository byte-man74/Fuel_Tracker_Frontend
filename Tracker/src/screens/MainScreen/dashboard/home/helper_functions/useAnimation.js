import { Animated } from 'react-native';

const animate = (fadeInAnimation, slideInAnimation) => {
  // Start Fade-In Animation
  const fadeIn = Animated.timing(fadeInAnimation, {
    toValue: 1,
    duration: 800,
    useNativeDriver: true,
  });

  // Start Slide-In Animation
  const slideIn = Animated.spring(slideInAnimation, {
    toValue: 0,
    speed: 15,
    bounciness: 5,
    useNativeDriver: true,
  });

  // Run both animations in parallel
  Animated.parallel([fadeIn, slideIn]).start();
};

export default animate;
