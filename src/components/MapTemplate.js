import React from 'react';
import './MapTemplate.scss';

const MapTemplate = () => {
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