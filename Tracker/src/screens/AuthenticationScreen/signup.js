import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <ImageBackground
      source={require('../../images/Background.png')}
      style={styles.backgroundImage}
    >
    </ImageBackground>
  )
}

export default SignUp

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})