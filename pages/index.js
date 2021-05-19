import styled from 'styled-components';
import Header from '../components/section/header';
import Results from '../components/section/results';
import {getDatabase} from '../api/notion';
import {useState} from 'react';
import {tags} from '../api/tags';

const Index = ({data, taglist}) => {

  const [selected, setSelected] = useState([]);

  return (
    <>
    <Header SetSelected={setSelected} selected={selected} tags={taglist} />
    <Results hobbies={data} />
    </>
  )
}

export default Index;



export async function getServerSideProps(context){
  const data = await getDatabase(process.env.NOTION_DATABASE_ID);
  const taglist = tags;
  return {props: {
    data,
    taglist
  }};
}