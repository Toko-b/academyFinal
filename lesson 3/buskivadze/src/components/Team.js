import TeamTemplate from "./TeamTemplate";
import { TeamObjs } from "../libs/data";
import {FlexDiv} from "./Style"


const Team = () => {
  return (
    <FlexDiv>
      {TeamObjs.map((value) => {
        return (
          <TeamTemplate
            key={value.id}
            name={value.name}
            desc={value.description}
            img={value.image}
            facebook={value.facebook}
            ln={value.LinkedIn}
            outlook={value.OutLook}
          />
        );
      })}
    </FlexDiv>
  );
};

export default Team;
