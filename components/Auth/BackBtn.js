import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IsAndroid = Platform.OS === "android";

const Container = styled.View`
  padding-left: 40px;
`;

export default () => (
  <Container>
    <Ionicons name={IsAndroid ? "md-arrow-down" : "ios-arrow-down"} size={28} />
  </Container>
);
