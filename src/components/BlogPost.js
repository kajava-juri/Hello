import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { SvgUri } from "react-native-svg"

export default function BlogPost({title, description, imageUrl, id, navigation}){

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {id: id})}>
            <View style={styles.blog}>

                <Text style={styles.blogTitle}>{title}</Text>
                <Image style={styles.image} source={{uri: imageUrl}} resizeMode="cover"></Image>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    blog: {
        width: "100%",
        height: 350,
        display: "flex",
        paddingLeft: 16,
        paddingTop: 16,
        paddingRight: 16,
        marginBottom: 32,
        borderStyle: "solid",
        borderColor: "darkgray",
        borderBottomWidth: 2,
        backgroundColor: "#373b44",
    },
    blogTitle: {
        fontSize: 32,
        marginBottom: 8,
        color: "white"
    },
    desc: {
        marginTop: 8,
        marginBottom: 8,
        color: "white"
    },
    image: {
        width: 200,
        height: 200,
    }
  });