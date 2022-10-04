import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import BlogPost from "../components/BlogPost";

export default function BlogPosts({navigation}) {
  let [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.root}>
        <View style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.blogName}>Some blog</Text>
            <Text style={styles.blogCreate}>Create new</Text>
        </View>

        <ScrollView style={styles.scrollview}>
            <BlogPost title="Blog Title" description="desc" navigation={navigation}></BlogPost>
            <BlogPost title="Blog Title" description="desc"></BlogPost>
            <BlogPost title="Blog Title" description="desc"></BlogPost>
            <BlogPost title="Blog Title" description="desc"></BlogPost>
            <BlogPost title="Blog Title" description="desc"></BlogPost>
        </ScrollView>

        </View>
    </View>


    
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#282C34",
  },
  main: {
    paddingLeft: 16,
    paddingRight: 32,
    paddingTop: 32,
  },
  blogName:{
    fontSize: 32,
    marginBottom: 32,
    marginRight: 20,
    flex: 1,
    color: "white"
  },
  blogCreate:{
    flex: 1,
    textAlign: "right",
    color: "white"
  },
  header: {
    flexDirection: "row",
    color: "white"
  },
  scrollview:{
    marginBottom: 64,
  }
});
