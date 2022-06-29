import  React from "react";
import '../scss/MapTemplate.scss';

const MapTemplate = () => {
    
    return (
        <div className='MapTemplate'>
            <div>
                <form className='mymap' method="get" action="map">
                    <input type="text" name="location" placeholder="궁금한 장소를 입력해주세요" />
                    <button type='submit'>보러가기</button>
                </form>
                <div id="map"></div>
            </div>
        </div>
    );
};

export default MapTemplate;