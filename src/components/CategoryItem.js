import {Link} from "react-router-dom";
function CategoryItem(props) {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}=props;
    return(
        <div className='card list'>
           <div className="card-img"><img src={strCategoryThumb} alt="picture"/></div>
            <div className="card-title caard-content"><h4>{strCategory}</h4></div>
            <div><p className='card-title'>{strCategoryDescription.slice(0,60)}...</p></div>
            <div className="card-action">
                <Link to={`/category/${strCategory}` } className="btn btn-success mb-3">
                    Watch Category
                </Link>
            </div>
        </div>
    )


}
export default CategoryItem;