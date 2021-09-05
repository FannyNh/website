import React from "react"
import {connect, styled} from "frontity"
import Link from '@frontity/components/link'


const Header = ({state, actions})=>{
    const data = state.source.get(state.router.link)

    return(
        <HeaderStyle isPostType={data.isPostType}>
            <HeaderContent>
                <h1>The third Moira</h1>
                { state.theme.isUrlVisible
                    ? <>Current URL: {state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></>
                    : <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
                }                    <Menu>
                {/*<Link link="/">Home</Link>*/}
                {/*<Link link="/destinations">Destinations</Link>*/}
                {/*<Link link="/about-us">About Us</Link>*/}
            </Menu>
            </HeaderContent>

        </HeaderStyle>
    )
}

export  default connect(Header)


const HeaderStyle = styled.header`
   overflow: hidden;
    background-color: inherit;
  position: absolute;
  top:0;
   border-radius: 15px;
   border: 1px solid #009ffd;
     box-shadow: 0 0 1rem 0 rgba(110,123,251,0.2);
     :before {
  background-color: inherit;
  backdrop-filter: blur(19px) saturate(127%) contrast(76%) brightness(111%);
  content: '';
  height: 100%;
  position: absolute;
  width: 100%;
}
  
  h1 {
       color: #FFF;
    position: relative;
    z-index: 2;
  }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

const Button = styled.button   `
background: transparent;
border: none;
color: #aaa;

:hover {
    cursor: pointer;
    color: #888;
}
`