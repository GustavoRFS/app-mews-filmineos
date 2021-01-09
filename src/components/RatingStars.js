import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default (props) => {
  const styles = StyleSheet.create({
    star: {
      width: props.width,
      height: (props.width * 246) / 256,
    },
    starsView: {
      width: props.fullWidth || 180,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  const generateStar = (starValue, key) => {
    starValue *= 10;
    starValue = Math.round(starValue);

    if (starValue === 0)
      return (
        <Image
          key={key}
          source={require("../assets/stars/0.png")}
          style={styles.star}
        />
      );
    else if (starValue === 1)
      return (
        <Image
          key={key}
          source={require("../assets/stars/1.png")}
          style={styles.star}
        />
      );
    else if (starValue === 2)
      return (
        <Image
          key={key}
          source={require("../assets/stars/2.png")}
          style={styles.star}
        />
      );
    else if (starValue === 3)
      return (
        <Image
          key={key}
          source={require("../assets/stars/3.png")}
          style={styles.star}
        />
      );
    else if (starValue === 4)
      return (
        <Image
          key={key}
          source={require("../assets/stars/4.png")}
          style={styles.star}
        />
      );
    else if (starValue === 5)
      return (
        <Image
          key={key}
          source={require("../assets/stars/5.png")}
          style={styles.star}
        />
      );
    else if (starValue === 6)
      return (
        <Image
          key={key}
          source={require("../assets/stars/6.png")}
          style={styles.star}
        />
      );
    else if (starValue === 7)
      return (
        <Image
          key={key}
          source={require("../assets/stars/7.png")}
          style={styles.star}
        />
      );
    else if (starValue === 8)
      return (
        <Image
          key={key}
          source={require("../assets/stars/8.png")}
          style={styles.star}
        />
      );
    else if (starValue === 9)
      return (
        <Image
          key={key}
          source={require("../assets/stars/9.png")}
          style={styles.star}
        />
      );
    else
      return (
        <Image
          key={key}
          source={require("../assets/stars/10.png")}
          style={styles.star}
        />
      );
  };

  const generateStarsComponent = () => {
    const starsArray = [];

    var value = (props.ratingValue / 2).toFixed(1);

    var higherValue;
    for (var i = 0; i <= 5; i++) {
      if (i >= value) {
        higherValue = i;
        i += 6;
      }
    }

    var calculated = false;
    for (var i = 5; i > 0; i--) {
      var starValue;
      if (i > higherValue) {
        starValue = 0;
      } else {
        if (!calculated) {
          starValue = (1 + (value - i)).toFixed(1);
          calculated = true;
        } else {
          starValue = 1;
        }
      }
      starsArray.unshift(generateStar(starValue, i));
    }
    return starsArray;
  };

  return <View style={styles.starsView}>{generateStarsComponent()}</View>;
};
