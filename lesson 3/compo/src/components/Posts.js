import PostTemplate from "./PostTemplate";
import {PostObjects} from "../libs/data"
import { FlexDiv } from "./PostsStyle";

const Posts = () => {
  return (
    <FlexDiv>
      {PostObjects.map(value => {
        return(
          <PostTemplate key={value.id} title={value.title} desc={value.description}/>
        )
      })}
    </FlexDiv>
  );
};


export default Posts;