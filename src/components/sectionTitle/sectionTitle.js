
import React from "react";

import { Container, ClaimContainer, Line, Text, SpecialTitle, Span } from "../sectionTitle/sectionTitle-elements";


export const SectionTitle= (props) => {
    return (

      <Container>
       <ClaimContainer>
           <Line/><Text> {props.claim} </Text><Line/>
       </ClaimContainer>
       <SpecialTitle><Span  style={{fontFamily:"cocogoose-shadow" }} >{props.title} </Span><Span style={{fontFamily:"cocogoose",color:'#ffffff'}}>{props.title}</Span></SpecialTitle>
      </Container>
    );
  };


  export default SectionTitle;