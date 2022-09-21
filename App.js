import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import BlogPost from "./components/BlogPost";

export default function App() {
  let [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.blogName}>Some blog</Text>
          <Text style={styles.blogCreate}>Create new</Text>
        </View>


        <BlogPost title="Blog Title" description="desc"></BlogPost>
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
  },
  blogCreate:{
    flex: 1,
    textAlign: "right",
  },
  header: {
    flexDirection: "row",
  }
});
