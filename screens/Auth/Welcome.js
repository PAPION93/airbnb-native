import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { BlurView } from "expo-blur";
import Btn from "../../components/Auth/Btn";

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
  margin-top: 100px;
  width: 110px;
  height: 120px;
`;

const BtnContainer = styled.View`
  margin-top: 40px;
`;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");

  return (
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
        <BtnContainer>
          <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
          <Btn onPress={goToSignIn} text={"Sign In"} />
        </BtnContainer>
      </BlurView>
      <Image source={require("../../assets/loginBg.jpeg")} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};
