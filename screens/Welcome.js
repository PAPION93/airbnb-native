import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { BlurView } from "expo-blur";

const LOGO_URL =
  "https://www.pinclipart.com/picdir/big/52-526160_aribnb-logo-airbnb-logo-no-background-clipart.png";

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0px;
`;

const Logo = styled.Image`
  width: 110px;
  height: 120px;
`;

export default ({ navigation }) => (
  <Container>
    <BlurView
      intensity={50}
      tint="light"
      style={{
        flex: 1,
        witdh: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo source={{ uri: LOGO_URL }} />
    </BlurView>
    <Image source={require("../assets/loginBg.jpeg")} />
    <StatusBar barStyle="light-content" />
  </Container>
);
