import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import BlogPost from "../components/BlogPost";

export default function BlogPosts({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPosts = async () => {
     try {
      const response = await fetch('http://192.168.56.1:3000/api/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (

    <View style={styles.root}>
        <View style={styles.main}>
          <View style={styles.header}>
              <Text style={styles.blogName}>Some blog</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Text style={styles.blogCreate} >Create new</Text>
              </TouchableOpacity>

          </View>

          <ScrollView style={styles.scrollview}>

            {data.map((post) => {
              return(
                <BlogPost title={post.title} description={post.description} navigation={navigation} imageUrl={post.image} id={post.id}></BlogPost>
              )
            })}

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
    paddingRight: 16,
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
