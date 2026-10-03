import { Profile, Card, Logo, LinkedIn, LogoDiv} from "./Style";
import Facebook from "../imgs/facebook.png";
import Ln from "../imgs/Ln.png";
import Mail from "../imgs/mail.png";

const TeamTemplate = ({ img, name, desc, facebook, ln, mail }) => {
  return (
    <Card>
      <Profile src={img} alt="Image" />
      <h3>{name}</h3>
      <p>{desc}</p>
      <LogoDiv>
        <a href={facebook}>
          <Logo src={Facebook} />
        </a>
        <a href={ln}><LinkedIn src={Ln}/></a>
        <a href={mail}><Logo src={Mail}/></a>
      </LogoDiv>
    </Card>
  );
};

export default TeamTemplate;
