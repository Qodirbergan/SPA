import {Link} from "react-router-dom";


function MealItem(props) {
    const {strMeal,strMealThumb,idMeal}=props;

    return(
        <div className='card list'>
            <div className="card-img"><img className='card-img' src={strMealThumb} alt={strMeal}/></div>
            <div><p className='card-title'>{strMeal}...</p></div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}` } className="btn btn-success mb-3">
                    Watch Recipe
                </Link>
            </div>
        </div>
    )

}
export default MealItem;