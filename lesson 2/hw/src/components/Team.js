import TeamTemplate from "./TeamTemplate";
import president from "../imgs/president.png";
import vice from "../imgs/vice-pres.jpg";
import tect from "../imgs/tech-director.jpg";
import andro from "../imgs/andro_scsa-1.jpg";
import director from "../imgs/director.png";
import d from "../imgs/d.jpg"
import "../style/Team.css";

const Team = () => {
  return (
    <div id="bg">
      <TeamTemplate
        id="template"
        img={president}
        name="მაქსიმ იავიჩი"
        desc="დამფუძნებელი და პრეზიდენტი"
      />
      <TeamTemplate
        id="template"
        img={director}
        name="დიანა პოპოვა"
        desc="დირექტორი"
      />
      <TeamTemplate
        id="template"
        img={vice}
        name="ვლადიმერ სვანაძე"
        desc="ვიცე-პრეზიდენტი"
      />
      <TeamTemplate
        id="template"
        img={andro}
        name="ანდრია გოცირიძე"
        desc="კიბერ სტრატეგიის კონსულტანტი, მკვლევარი"
      />
      <TeamTemplate
        id="template"
        img={tect}
        name="სერგო სიმონოვი"
        desc="ტექნიკური დირექტორი"
      />
      <TeamTemplate
        id="template"
        img={d}
        name="დავითი ბოჭორიშვილი"
        desc="ვებ დეველოპერების გუნდის ხელმძღვანელი, ვებ პენტესტერი"
      />
    </div>
  );
};

export default Team;
