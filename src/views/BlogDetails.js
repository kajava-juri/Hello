import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import {useState, useEffect} from "react";

export default function BlogDetails({navigation, route}){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
  
    const getPost = async () => {
       try {
        const url=`http://192.168.56.1:3000/api/posts/${route.params.id}`;
        const response = await fetch(url);
        const json = await response.json(response);
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getPost();
    }, []);

    return(
        <View style={styles.root}>

            {data && (
                <View>
                    <Text style={styles.blogTitle}>{data.title}</Text>
                    <Text style={styles.blogBody}>{data.body}</Text>
                    <Image style={styles.image} source={{uri: data.image}} resizeMode="cover"></Image>

                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#282C34",
        width: "100%",
        height: "100%",
        padding: 16,
    },
    blogTitle: {
        fontSize: 32,
        marginBottom: 32,
        color: "white",
        alignSelf: "center"
    },
    blogBody: {
        color: "white",
        textAlign: "justify"
    },
    image: {
        width: "80%",
        height: "40%",
        alignSelf: "center",
        marginTop: 16,
    },
    scrollview: {
        height: "100%",
    }
})