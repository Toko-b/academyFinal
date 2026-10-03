import "../style/News.css"

const NewsTemplate = ({img, desc}) => {
    return(
        <div>
            <img src={img}/>
            <h1>
                {desc}
            </h1>
        </div>
    )
}

export default NewsTemplate;