import {StyleSheet, View, Text, Button, TouchableOpacity} from "react-native";
import React, { useState } from "react";

export default function BlogPost({title, description, navigation}){

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.blog}>

                <Text style={styles.blogTitle}>{title}</Text>
                <Text style={styles.desc}>{description}</Text>

            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    blog: {
        width: "100%",
        height: 175,
        display: "flex",
        paddingLeft: 16,
        paddingTop: 16,
        paddingRight: 16,
        margin: 32,
        borderStyle: "solid",
        borderColor: "darkgray",
        borderBottomWidth: 2,
        backgroundColor: "#373b44",
    },
    blogTitle: {
        fontSize: 32,
        color: "white"
    },
    desc: {
        marginTop: 16,
        color: "white"
    }
  });