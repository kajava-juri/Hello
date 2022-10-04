import {StyleSheet, View, Text} from "react-native";

export default function BlogDetails(){

    return(
        <View style={styles.root}>
            <Text>Details page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#282C34",
        width: "100%",
        height: "100%"
    }
})