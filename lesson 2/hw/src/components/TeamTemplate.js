import "../style/Team.css"

const TeamTemplate = ({img, name, desc}) => {
    return(
        <div id="div">
            <img src={img} id="img"/>
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default TeamTemplate;