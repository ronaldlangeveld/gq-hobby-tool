import styled from 'styled-components'
import Header from '../components/section/header';
import Results from '../components/section/results';
import {getDatabase} from '../api/notion';

const Index = ({data}) => {

  return (
    <>
    <Header />
    <Results hobbies={data} />
    </>
  )
}

export default Index;



export async function getServerSideProps(context){
  const data = await getDatabase(process.env.NOTION_DATABASE_ID);
  console.log(data)

  return {props: {
    data
  }};
}