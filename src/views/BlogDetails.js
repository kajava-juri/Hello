import {StyleSheet, View, Text, Image, ScrollView, TextInput, Button} from "react-native";
import {useState, useEffect} from "react";

export default function BlogDetails({navigation, route}){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
  
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



    const getComments = async () => {
        try{
            const response = await fetch(`http://192.168.56.1:3000/api/comments?postId=${route.params.id}`);
            const json = await response.json(response);
            setComments(json);
        } catch(error) {
            console.error(error);
        } 
    
    }

    const postComment = async () => {
        try{
            const response = await fetch(`http://192.168.56.1:3000/api/comments`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({comment: newComment, postId: route.params.id})
            }).then(response => response.json());
            getComments();
            setNewComment("");
        } catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getComments();
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
                    <View style={styles}>
                        <Text>Enter your comment</Text>
                        <TextInput style={{marginBottom: 8, marginTop: 8, backgroundColor: "#505868"}}
                            maxLength={255}
                            onChangeText={(comment) => setNewComment(comment)}
                            value={newComment}
                        ></TextInput>
                        <Button 
                        title="Submit"
                        onPress={postComment}/>
                    </View>
                    {comments.map((comment) => {
                        return(
                        <View key={comment.id} style={styles.comment}>
                            {/* <Text style={styles.commentName}>{comment.name}</Text> */}
                            <Text style={styles.commentName}>Username</Text>
                            <Text>{comment.comment}</Text>
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
        width: 290,
        height: 220,
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
    },
    commentInputContainer: {
        display: "flex",
        flexDirection: "row",
    }
})