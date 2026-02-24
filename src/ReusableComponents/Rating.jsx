import "../ReusableComponents/Rating.css"


const Rating =({rating}) => {



    return(
        <div className="rating-wrapper">
            <span className="rating-badge">{rating.rate}⭐</span>
            <span className="rating-count">({rating.count})</span>
        </div>
    );
}

export default Rating;