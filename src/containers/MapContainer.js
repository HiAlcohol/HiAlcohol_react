import React, { useEffect } from "react";
import MapTemplate from "../components/MapTemplate";
const { kakao } = window;


const MapContainer = () => {
    useEffect(() => {

        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
      }, []);

      return (
        <MapTemplate />
      );
};

export default MapContainer;