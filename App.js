import React, { useState } from "react";
import BlogPosts from "./src/views/BlogPosts";
import BlogDetails from "./src/views/BlogDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogCreate from "./src/views/BlogCreate";

const Stack = createNativeStackNavigator();

export default function App() {
  let [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BlogPosts} 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Details" component={BlogDetails} 
        options={{
          title: "Viewing post",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#282C34",
          },
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="Create" component={BlogCreate}
          options={{
            title: "Creating post",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#282C34",
            },
            headerShadowVisible: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
