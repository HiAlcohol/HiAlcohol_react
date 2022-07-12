import React, { useEffect } from "react";
import MapTemplate from "../components/MapTemplate";
const { kakao } = window;


const MapContainer = () => {
     const params = new URLSearchParams(window.location.search);
    let loc = params.get("location");

    useEffect(() => {

        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        if (navigator.geolocation) {
        
           navigator.geolocation.getCurrentPosition(function(position) {
            
               var geocoder = new kakao.maps.services.Geocoder();
            
               var lat = position.coords.latitude,
               lon = position.coords.longitude; 
            
               var coord = new kakao.maps.LatLng(lat, lon);
               var callback = function(result, status) {
                   if (status === kakao.maps.services.Status.OK) {
                       console.log(result[0].address.address_name);
                   }
               };
            
               geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
          
               var locPosition = new kakao.maps.LatLng(lat, lon), 
               mapContainer = document.getElementById('map'), 
               mapOption = {
                   center: locPosition,
                   level: 5 
               };
            
               var map = new kakao.maps.Map(mapContainer, mapOption);
               var center = map.getCenter();
       
            //    new kakao.maps.InfoWindow({ position: center, map: map, content: '현재 위치'});
               var ps = new kakao.maps.services.Places(); 
               

             ps.keywordSearch(loc+'주류유통', placesSearchCB); 
        
            function placesSearchCB (data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
            
                    var bounds = new kakao.maps.LatLngBounds();
            
                    for (var i=0; i<data.length; i++) {
                        displayMarker(data[i]);    
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    } 
            
                    map.setBounds(bounds);
                } 
            }

            // ps.keywordSearch('주류유통', placesSearchCB, {
            //     location: center, 
            //     sort: kakao.maps.services.SortBy.DISTANCE
            // }); 
         
            // function placesSearchCB (data, status, pagination) {
            //     if (status === kakao.maps.services.Status.OK) {
            //         for (var i=0; i<data.length; i++) {
            //             displayMarker(data[i]);
            //         }
            //     }
            // }
           
           function displayMarker(place) {
        
               var marker = new kakao.maps.Marker({
                   map: map,
                   position: new kakao.maps.LatLng(place.y, place.x) 
               });
     
           kakao.maps.event.addListener(marker, 'click', function() {
            
               infowindow.setContent(
                   '<div class= "mapview"><div class="viewname">' + place.place_name + '</div><hr>'+
                   '<div class="viewblank"></div>'+
                   '<div style="font-size:12px;">' + place.address_name + '</div>'+
                   '<div class="viewblank"></div>'+
                   '<div style="font-size:12px;">' + place.phone + '</div>'+
                   '<div class="viewblank"></div>'+
                   '<div style="font-size:12px;"><a href="' + place.place_url + '">[상세보기]</a></div></div>'
                   );
               infowindow.open(map, marker);
               });
           }
            
           });
           }
      }, []);

      return (
        <MapTemplate />
      );
};

export default MapContainer;