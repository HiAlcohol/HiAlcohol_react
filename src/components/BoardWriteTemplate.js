import React from 'react';
import { Link } from 'react-router-dom';
import './BoardWriteTemplate.scss';

const BoardWriteTemplate = () => {
    return (
        <div className='BoardWriteTemplate'>
           <form>
            <div className='main-title'>
                <div className='exit'>
                    X
                </div>
                <div className='hi_alcohol'>
                <Link to='/'>Hi Alcohol</Link>
                </div>
                <div className='completion'>
                    완료                  
                </div>
                <div className='container'>
                    <div className='title'>
                        <input type='text' placeholder='제목'></input>
                    </div>
                    <div className='contents'>
                        <textarea name='content' placeholder='내용 입력'></textarea>
                    </div>
                </div>
            </div>
           </form>
        </div>
    );
};

export default BoardWriteTemplate;