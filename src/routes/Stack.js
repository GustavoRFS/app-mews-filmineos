import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesTabs from "./MoviesTabs";
import MovieInfo from "../views/MovieInfo";
import Login from "../views/Login";
import Icon from "react-native-vector-icons/FontAwesome";
import AddMovie from "../views/SearchMovie";

const Stack = createStackNavigator();

export default (props) => {
  const headerOptions = {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#0b0b0b",
    },
    headerTitle: () => {
      return (
        <Image
          source={require("../assets/Netflix_icon.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
      );
    },
    headerTintColor: "#fff",
  };

  const headerButton = (navigation) => {
    return {
      headerRight: (props) => (
        <TouchableOpacity
          style={{
            marginRight: 4,
            paddingHorizontal: 14,
            paddingVertical: 12,
          }}
          onPress={() => navigation.navigate("AddMovie")}
        >
          <Icon name="plus" color={props.tintColor} size={20} />
        </TouchableOpacity>
      ),
    };
  };

  return (
    <Stack.Navigator initialRouteName="MoviesTabs">
      <Stack.Screen name="Login" component={Login} options={headerOptions} />
      <Stack.Screen
        name="MoviesTabs"
        component={MoviesTabs}
        options={({ navigation }) => ({
          ...headerOptions,
          ...headerButton(navigation),
        })}
      />
      <Stack.Screen
        name="MovieInfo"
        component={MovieInfo}
        options={headerOptions}
      />
      <Stack.Screen
        name="AddMovie"
        component={AddMovie}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};
