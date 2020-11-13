import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import RoomCard from "../../../components/RoomCard";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", marginTop: 120 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              isFav={room.user.is_fav}
              isSuperHost={room.user.superhost}
              photos={room.photos}
              name={room.name}
              price={room.price}
            />
          ))}
        </ScrollView>
      )}
    </Container>
  );
};
