import React from 'react'
import {connect, styled } from 'frontity'
import Link from '@frontity/components/link'
import FeaturedMedia from "./featuredMedia";

const List = ({state, actions, libraries}) => {
    const data = state.source.get(state.router.link)
    const Html2React = libraries.html2react.Component
    if(data.isDestinationsArchive){
        return (
            <Items>
                {
                    data.items.map((item) => {
                        const post = state.source[item.type][item.id]
                        return (
                            <Item  isDestinationsArchive={data.isDestinationsArchive}>
                                <h2 key={post.id}>
                                    {post.title.rendered}
                                    <br />
                                </h2>
                                <Html2React html={post.excerpt.rendered} key={post.id} />
                                <Link key={item.id} link={post.link}>
                                    Read more...
                                </Link>
                            </Item>

                        )
                    })
                }

            </Items>)
    }
    else{
        return(
            <Items>
            {
                data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    return (
                        <Item  isDestinationsArchive={data.isDestinationsArchive}>
                            <FeaturedMedia id = {post.featured_media} key={post.featured_media} />
                            <h2 key={post.id}>
                                {post.title.rendered}
                                <br />
                            </h2>
                            <Html2React html={post.excerpt.rendered} key={post.id} />
                            <Link key={item.id} link={post.link}>
                                Read more...
                            </Link>
                        </Item>

                    )
                })
            }
            <PrevNextNav isDestinationsArchive={data.isDestinationsArchive} >
                {data.previous && (
                    <button onClick={() => { actions.router.set(data.previous)}}>Prev &#187;</button>
                )}
                {data.next && (
                    <button onClick={() => { actions.router.set(data.next)}}>Next &#187;</button>
                )}
            </PrevNextNav>
        </Items>)
    }
}

const Items = styled.div`
 
  
  `
const Item = styled.div`
     & > h2 {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
  & > a {
    font-size: 1 em;
    color: steelblue;
    text-decoration: none;
     &:hover {
        color: cadetblue;
    }
  }
    ${props => props.isDestinationsArchive ?
    'display: block;border : 1px solid steelblue;border-radius : 12px; margin-bottom:10px; padding:5px;'
    :
    ''
};`
const PrevNextNav = styled.div`
  padding-top: 1.5em;
  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`
export default connect(List)
