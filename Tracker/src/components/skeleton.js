// LinearGradientSkeleton.js

import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


const LinearGradientSkeleton = () => (
  <SkeletonPlaceholder>
    {/* Define the skeleton for the LinearGradient component */}
    <View style={{ width: '100%', height: 170, borderRadius: 8, backgroundColor: '#E0E0E0' }} />
  </SkeletonPlaceholder>
);

export default LinearGradientSkeleton;
