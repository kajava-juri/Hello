import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import {useState, useEffect} from "react";

export default function BlogDetails({navigation, route}){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    let [comments, setComments] = useState([]);
  
    const getPost = async () => {
       try {
        const url=`https://jsonplaceholder.typicode.com/posts/${route.params.id}`;
        const response = await fetch(url);
        const json = await response.json(response);
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }



    const getComments = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${route.params.id}`);
            const json = await response.json(response);
            setComments(json);
        } catch(error) {
            console.error(error);
        } 
    
    }

    useEffect(() => {
        getComments();
      }, []);
  
    useEffect(() => {
      getPost();
    }, []);

    return(
        <View style={styles.root}>
            <ScrollView>
                <ScrollView style={{minHeight: 600}}>
                {data && (
                    <View>
                        <Text style={styles.blogTitle}>{data.title}</Text>
                        <Text style={styles.blogBody}>{data.body}</Text>
                        <Image style={styles.image} source={{uri: data.image}} resizeMode="cover"></Image>

                    </View>
                )}
                </ScrollView>

                <ScrollView>
                    <Text style={{fontSize: 24, alignSelf: "center", marginBottom: 16}}>Comments</Text>
                    {comments.map((comment, i) => {
                        return(
                        <View key={i} style={styles.comment}>
                            <Text style={styles.commentName}>{comment.name}</Text>
                            <Text>{comment.body}</Text>
                        </View>
                        )
                    })}
                </ScrollView>
            </ScrollView>
            

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
        fontSize: 24,
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
    },
    comment: {
        display: "flex",
        flexDirection: "column",
        marginTop: 8,
        marginBottom: 8
    },
    commentName: {
        fontWeight: "bold",
    }
})