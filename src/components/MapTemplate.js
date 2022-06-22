import  React, { useEffect} from "react";
import './MapTemplate.scss';
const { kakao } = window;

const MapTemplate = () => {
    useEffect(() => {

        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
      }, []);
    
    return (
        
        <div className='MapTemplate'>
            <div>
                <form className='mymap'>
                    <input type="text" placeholder="궁금한 장소를 입력해주세요" />
                    <button type='submit'>보러가기</button>
                </form>
                <div id="map"></div>
            </div>
        </div>
    );
};

export default MapTemplate;