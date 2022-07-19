const ModalStyle = {
    overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0.45)",
		zIndex: 10,
	},
	content: {
		display: "flex",
		justifyContent: "center",
		background: "#242424",
		overflow: "auto",
		top: "15vh",
		left: "15vw",
		right: "15vw",
		bottom: "15vh",
		WebkitOverflowScrolling: "touch",
		borderRadius: "20px",
		outline: "none",
		zIndex: 10,
	},
};


function RecipeModal() {
    return(
        <>
        {/* <div class="name">{recipe[i].cocktail}</div>
        <br />
        <img src = {recipe[i].img} className="recipe-img" />
        <br /><br />
        <div className="material">
                {inputItem}
        </div>
        <br /><br /><br />
        <p>- 비율 -</p>
        <h2>{recipe[i].rate}</h2>
        <br /><br />
        <p>{recipe[i].content}</p> */}
        <div class="name">칵테일이름</div>
        <br />
        <img src = '이미지' className="recipe-img" />
        <br /><br />
        <div className="material">
                재료
        </div>
        <br /><br /><br />
        <p>- 비율 -</p>
        <h2>비율</h2>
        <br /><br />
        <p>내용</p>
        </>
    )
}

export default RecipeModal;