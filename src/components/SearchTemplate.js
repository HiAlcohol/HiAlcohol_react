import '../scss/SearchTemplate.scss';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchList = () => {
    return (
        <div className="SearchListTemplate">
            <div className='search'>
                <input type='text' placeholder="술 이름을 입력해주세요." />
                {/* <button type='submit'><Link to = '/searchlist'><FaSearch /></Link>
                </button> */}
                <button type='submit'><Link to = '/searchlist'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Link>
                </button>
            </div>
            <br></br>
        </div>
        
    );
};
export default SearchList;