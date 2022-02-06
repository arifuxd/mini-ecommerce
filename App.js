import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Card
    //     title="The Red Jacket is for sale"
    //     subTitle="$100"
    //     image={require("./assets/images/red-jacket.jpg")}
    //   />
    // </View>
    <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
});
