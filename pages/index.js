import styled from 'styled-components';
import Header from '../components/section/header';
import Results from '../components/section/results';
import {getDatabase} from '../api/notion';
import {useState, useEffect} from 'react';
import {tags} from '../api/tags';
import {useRouter} from 'next/router';

const Index = ({data, taglist}) => {

  const router = useRouter();

  console.log(router);

  const [selected, setSelected] = useState(router.query.tags || []);

  useEffect(() => {

    if(selected.length > 0){
      router.push(`/?tags=${selected}`, undefined, { shallow: true })
    }

  }, [selected])


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