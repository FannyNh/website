import React from "react"
import {connect, styled} from "frontity"
import Link from '@frontity/components/link'
import BtnDownload from "./btnDownload/btnDownload";


const Header = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    return (
        <HeaderStyle isPostType={data.isPostType}>
            <HeaderContent>
                <Menu>
                    <h1>The third Moira</h1>
                    <BtnDownload url={"https://www.linkedin.com/in/fanny-nhouyvanisvong-design/"} name={"Linkedin"}
                                 className={"linkedin"}/>
                    <BtnDownload url={"https://www.instagram.com/the_third_moira/"} name={"Instagram"}
                                 className={"instagram"}/>
                    <BtnDownload url={"https://www.thethirdmoira.fr/wp-content/uploads/2021/10/resume-202110.pdf"}
                                 name={"Resume"}/>
                    <BtnDownload url={"https://www.thethirdmoira.fr/"} name={"Portfolio"} className={"old"}/>
                </Menu>
            </HeaderContent>

        </HeaderStyle>
    )
}

export default connect(Header)


const HeaderStyle = styled.header`
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
  width: 400px;
  height: 350px;
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

  h1 {
    color: #FFF;
    position: relative;
    text-align: center;
    font-size: 2em;
    z-index: 2;
    margin-bottom: 1em;
  }
`
const HeaderContent = styled.div`
  width: 400px;
  height: 350px;
  padding: 2em 1em;
  margin: auto;
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  margin: 0 auto;
`

