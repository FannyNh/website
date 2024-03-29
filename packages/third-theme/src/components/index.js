import React from 'react'
import {connect, Global, css, styled, Head} from 'frontity'
import Link from '@frontity/components/link'
import Switch from '@frontity/components/switch'

import Header from "./header"

import List from "./list"
import MainAnimationBis from "./animation/mainAnimationBis"
import CardProject from "./cardProject/cardProject"

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Global
                styles={css`
                  * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                  }

                  html {
                    font-family: system-ui, Verdana, Arial, sans-serif;
                  }

                  body {
                    background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
                    width: 100vw;
                    height: 100vh;
                  }
                `}
            />
            <Head>
                <title>My First Frontity Theme</title>
                <meta
                    name="description"
                    content="Based on the Frontity step by step tutorial"
                />
            </Head>
            <Header/>
            <Main>
                <MainAnimationBis/>

                <Switch>
                    <CardProject when={data.isPost}/>
                    {/*<Loading when={data.isFetching} />*/}
                    <List when={data.isArchive}/>
                    {/*<Post when={data.isPost}/>*/}
                    {/*<Page when={data.isPage}/>*/}
                    {/*<Page when={data.isDestinations} />*/}
                    {/*<Error when={data.isError} />*/}
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root)


const Main = styled.main`
  position: absolute;
  top: 0;
  width: 100vw;
  padding: none;
  margin: auto;
  height: 100vh;
`
