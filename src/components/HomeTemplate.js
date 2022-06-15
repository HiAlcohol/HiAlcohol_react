import './HomeTemplate.css';

const HomeTemplate = () => {
    return (
        <div className='HomeTemplate'>
            <div className='app-title'>Hi Alcohol</div>

            <div className='homebar-recommend'>
                <p>오늘의 술 추천</p>
                
                <a>마가리타</a>
                <br></br>
                <img src='/src/img/cocktail.png'></img>

            </div>
            
        </div>
    );
};

export default HomeTemplate;