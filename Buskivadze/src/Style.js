import styled from "styled-components";

export const Banner = styled.img`
  max-width: 100%;
  height: 500px;
`;

export const PostDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 50px;
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 25px;
`;

export const Logos = styled.img`
  height: 25px;
`;

export const GridDiv = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 50px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInputs = styled.input`
  width: 300px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  background-color: #cb9954;
  border: none;
  color: white;
  padding: 15px 30px;
  align-self: center;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0;
`;
export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 450px;
  box-shadow: 0 0 10px black;
  border-radius: 15px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
`;

export const TextDiv = styled.div`
  padding: 25px;
`;

export const PostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  gap: 15px;
  width: 90%;
`;
export const ExitButton = styled.button`
  position: absolute;
  border-radius: 50%;
  border: none;
  right: 15px;
  top: 15px;
`;
