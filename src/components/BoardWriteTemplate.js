import React from 'react';
import '../scss/board/BoardWriteTemplate.scss';
import Header from './Header';

const BoardWriteTemplate = () => {
    return (
        <div className='BoardWriteTemplate'>
           <form>
            <div className='main-title'>
                <Header right='write'></Header>
                <div className='container'>
                    <div className='writeTitle'>
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