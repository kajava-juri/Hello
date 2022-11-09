import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity} from "react-native";
import React, { useState } from "react";

export default function BlogCreate(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [newPost, setNewPost] = useState({});
    const [imageURL, setImageURL] = useState("");
    const [desc, setDesc] = useState("");

    function handleSubmit(){
        fetch("http://192.168.56.1:3000/api/posts", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({title: title, body: body, image: imageURL, desctiption: desc}),
        }).then(response => response.json())
        .then(data => {
            console.warn(data);
        })
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

            <Text>Image URL</Text>
            <TextInput
            style={styles.input}
            onChangeText={url => setImageURL(url)}
            value={imageURL}
            />

            <Text>Description</Text>
            <TextInput
            maxLength={32}
            style={styles.input}
            onChangeText={d => setDesc(d)}
            value={desc}
            />

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {handleSubmit}>
               <Text> Submit </Text>
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
        backgroundColor: '#ED7923',
        padding: 10,
        margin: 15,
        height: 40,
     },
    input: {
        margin: 15,
        padding: 8,
        borderColor: '#ED7923',
        borderWidth: 1
    },
})