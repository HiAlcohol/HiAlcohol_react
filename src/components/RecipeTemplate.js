import  React from "react";
import '../scss/RecipeTemplate.scss';

const RecipeTemplate = () => {
    
    return (
        <div className='RecipeTemplate'>
            <div class="name">마가리타</div>
            <br /><br />
            <div className="material">
                    <div>체리</div>
                    <div>맥콜</div>
                    <div>사이다</div>
                </div>
            <br /><br /><br />
            <p>- 비율 -</p>
            <h2>1 : 1 : 1</h2>
            <br /><br />
            <p>설명</p>

        </div>
    );
};

export default RecipeTemplate;