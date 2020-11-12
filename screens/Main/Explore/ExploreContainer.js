import React, { useEffect } from "react";
import ExplorePresenter from "./ExploreContainer";

export default ({ getRooms, rooms, page }) => {
  useEffect(() => {
    getRooms();
  }, []);
  return <ExplorePresenter rooms={rooms} />;
};
