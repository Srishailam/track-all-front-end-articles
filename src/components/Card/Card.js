import React from 'react';
import styled from 'styled-components/macro';

const CardContainer = styled.div`
  border: 2px solid palevioletred;
  position: relative;
  display:flex;
  width: 400px;
  border-radius: 10px;
  transition: transform .5s;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  &: hover {
    transform: scale(1.1);
  }
`;
const CardLink = styled.a`
  text-decoration: none;
`;
const Title = styled.div`
  min-height: 200px
`;
const Tag = styled.div`
  position:absolute;
  bottom: 0px;
  height: 30px;
  width: 100%;
  line-height: 30px;
  border-radius: 10px;
  background-color: black;
  color: #fff;
`;

function Card(props) {
  const {id, url, title, tag} = props.item;
  return (
    <CardContainer hover={true}>
      <CardLink href={url} target="_blank" rel="noreferrer" title={title}>
        <Title>{title}</Title>
      </CardLink>
      <Tag>{tag}</Tag>
    </CardContainer>
  )
}

export default Card
