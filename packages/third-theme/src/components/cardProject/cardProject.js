import React from "react"
import {connect, styled} from "frontity"


const CardProject = ({state, libraries}) => {
    return (
        <CardP>
            <a href={url} target="_blank">{name}</a>
        </CardP>
    );
}
const CardP = styled.div`
  overflow: hidden;
  background-color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.48);
  z-index: 2;
  width: 300px;
  height: 250px;
  box-shadow: 0 0 1rem 0 rgba(110, 123, 251, 0.2);

  :before {
    background-color: inherit;
    backdrop-filter: blur(19px) saturate(127%) contrast(76%) brightness(111%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

`
export default connect(CardProject)

