import {StyleSheet, View, Text} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-vector-icons/Icon";


export default function BlogPost({title, description}){
    return (
        <View style={styles.blog}>
            <Text style={styles.blogTitle}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
            <Icon name="comments" size={30} color="#900" light />
        </View>
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
        borderStyle: "solid",
        borderColor: "darkgray",
        borderBottomWidth: 2
    },
    blogTitle: {
        fontSize: 32,
    },
    desc: {
        marginTop: 16
    }
  });