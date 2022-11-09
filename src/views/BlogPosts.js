import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import BlogPost from "../components/BlogPost";

export default function BlogPosts({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  // function getPosts(){
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(posts => {
  //       posts.map((post) => {
  //         post.image = "https://github.com/mxrguspxrt/mobile/raw/main/cat1.jpeg";
  //         post.description = "desc";
  //     });
  //     console.log(posts);
      
  //     setData(posts);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   })
  // }

  const getPosts = async () => {
    try {
     const url=`http://192.168.56.1:3000/api/posts`;
     const response = await fetch(url);
     const posts = await response.json(response);
     setData(posts);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  useEffect(() => {
    const postCreated = navigation.addListener('focus', async () => {
      getPosts();
    })
    return postCreated;
    
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

            {data.map((post, i) => {
              return(
                <BlogPost key={i} title={post.title} description={post.description} navigation={navigation} imageUrl={post.image} id={post.id}></BlogPost>
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
    marginBottom: 16,
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
