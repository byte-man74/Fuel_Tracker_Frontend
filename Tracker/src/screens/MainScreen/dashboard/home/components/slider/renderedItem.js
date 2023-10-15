import { FlatList, View, Text, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import SkeletonItem from "../Skeleton";
import { styles } from "./styles";
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.68;



const LoadingSkeleton = () => (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      renderItem={() => <SkeletonItem containerWidth={ITEM_WIDTH} />}
      keyExtractor={(item) => item.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      snapToInterval={ITEM_WIDTH}
      decelerationRate="fast"
    />
  );
  
const EmptyDataUI = () => (
    <View style={styles.emptyDataContainer}>
      <LottieView
        source={require("../../../../../../images/emptypage.json")}
        autoPlay
        loop
        style={styles.carouselItemImage}
      />
      <Text style={styles.emptyDataText}>
        No fueling station in your location has been registered on our database.
      </Text>
    </View>
  );
  
  const DataFlatList = ({ data, renderItem }) => (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      snapToInterval={ITEM_WIDTH}
      decelerationRate="fast"
    />
  );
  
export const MainComponent = ({ loading, sortedData, renderItem }) => (
    <View style={styles.sliderContainer}>
      {loading ? (
        <LoadingSkeleton />
      ) : sortedData.length === 0 ? (
        <EmptyDataUI />
      ) : (
        <DataFlatList data={sortedData} renderItem={renderItem} />
      )}
    </View>
  );
