import './SearchListItem.css';

const SearchListItem = () => {
    return (
        <div className="SearchListItem">
            <div className="list">
                <a>내 마음대로 주</a>
                <div className="recipe">{'>'}</div>
                <br /><br />
                <div className="input">
                    <div>체리</div>
                    <div>맥콜</div>
                    <div>사이다</div>
                    <div>소주</div>
                    <div>깔라만씨 토닉워터</div>
                    <div>토닉워터</div>
                    <div>토닉워터</div>
                </div>
            </div>
        </div>
    );
};

export default SearchListItem;