import React from "react"
import { styled} from "frontity"




const BtnDownload = ({url,name,className}) => {
    return (
        <BtnDl className={className} >
            <a href ={url} target="_blank" >{name}</a>

        </BtnDl>
    );
}

const BtnDl = styled.div`
overflow:hidden;
    width: 250px;
    height: 45px;
    z-index:2;
    box-shadow: 0 0 1rem 0 rgba(110,123,251,0.8);
    border-radius: 12px;
    text-align: center;
     background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
         margin: 0 auto;
    &.linkedin {
background-color: #045de9;
background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
    }
    &.instagram {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }
    &.old {
      background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
      background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);


    }
    > a{

    text-decoration: none;
    display:block;
  
    background:inherit;
      border-radius: inherit;
    color:white;
    width:100%;
    heigth:100%;
    font-size:1em;
    line-height:45px;
    text-align:center;
   
    }
    
     &:hover{
    transform:scale(1.02);
      transition: all 1s;
    }
`

export default BtnDownload

