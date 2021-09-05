import React from "react"
import {connect, styled} from "frontity"
 import Image from "@frontity/components/image";

const FeaturedMedia = ({state,id}) => {

    const featuredMediaId = state.source.attachment[id]
    return(
        <FeaturedImage src={featuredMediaId.source_url} />
    )
}

export default connect(FeaturedMedia)

const FeaturedImage = styled.img`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-radius: 15px;
  width : 10vw;
  height : auto;
  max-height : 200px
`