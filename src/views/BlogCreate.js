import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity} from "react-native";
import React, { useState } from "react";

export default function BlogCreate(){
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [newPost, setNewPost] = useState({});

    function handleSubmit(){
        fetch("localhost:3000/api/posts", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({title: title, body: body}),
        }).then(response => response.json())
        .then(data => {
            console.warn(data);
        })
    }

    function handleFetch(){
        fetch("192.168.56.1:3000/api/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {  
            console.error(error);  
          });
    }

    return(
        <View style={styles.root}>
            <Text>Title</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
            value={title}></TextInput>

            <Text>Body</Text>
            <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => setBody(text)}
            value={body}></TextInput>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {handleSubmit}>
               <Text> Submit </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {handleFetch}>
               <Text> Fetch </Text>
            </TouchableOpacity>

            
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#282C34",
        width: "100%",
        height: "100%",
        padding: 16,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
    input: {
        margin: 15,
        padding: 8,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
})