import React from "react";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  margin-top: 70px;
  padding: 0px 30px;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
  font-size: 48px;
  margin-bottom: 10px;
`;

const NoFavs = styled.Text``;

export default ({ rooms }) => (
  <Container>
    <Title>Favorites ({rooms.length}) </Title>
    <SV
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {rooms.length !== 0 ? (
        rooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            isFav={room.is_fav}
            isSuperHost={room.user.superhost}
            photos={room.photos}
            name={room.name}
            price={room.price}
          />
        ))
      ) : (
        <NoFavs>You don't have any favorites</NoFavs>
      )}
    </SV>
  </Container>
);
