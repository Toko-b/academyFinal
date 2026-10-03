import { CurrentPost, Paragraph } from "./PostsStyle"

const PostTemplate = ({title,desc}) => {
    return(
        <CurrentPost>
            <h3>{title}</h3>
            <Paragraph>{desc}</Paragraph>
        </CurrentPost>
    )
}

export default PostTemplate