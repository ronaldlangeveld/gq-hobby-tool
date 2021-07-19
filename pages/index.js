// import styled from 'styled-components';
import Header from '../components/section/header';
import Results from '../components/section/results';
import {getDatabase} from '../api/notion';
import {useState, useEffect} from 'react';
// import {tags} from '../api/tags';
import {useRouter} from 'next/router';

const Index = ({data, taglist, queries}) => {

  const router = useRouter();

  const [selected, setSelected] = useState([]);

  const [hobbyList, setHobbyList] = useState(data || []);

  const [filteredHobby, setFilteredHobby] = useState([]);

  useEffect(() => {

    if(selected.length > 0){

      // let res = hobbyList.filter(hb => hb.properties.Tags.multi_select.some(tag => tag.name.includes(selected)));
      
      let res = hobbyList.filter(hb => selected.every(tag => hb.properties.Tags.multi_select.some(({name}) => name === tag)))

      setFilteredHobby(res);
    }
    

  }, [selected])

console.log(hobbyList);


  return (
    <>
    <Header SetSelected={setSelected} selected={selected} tags={taglist} />
    <Results selected={selected} hobbies={selected.length > 0 ? filteredHobby : hobbyList} />
    </>
  )
}

export default Index;



export async function getStaticProps(context){
  const data = await getDatabase(process.env.NOTION_DATABASE_ID);


  if (!data) {
    return {
      notFound: true,
    }
  }

  const taglist = [
    "Being Active",
    "Achievement",
    "Relaxing",
    "Being Social",
    "Mentally Engaging",
    "Creativity",
    "Free",
    "Low Cost",
    "At Home",
    "Offline",
    "Cam's Favorites",
    "Easy to Start"
  ]

  return {props: {
    data,
    taglist,
  }};
}