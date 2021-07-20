import Container from '../layouts/container';

import styled from 'styled-components';

const Results = ({ hobbies, selected }) => {


    const HobbiesList = () => (
        hobbies.map((item, index) => (
            <HobbyItemStyled key={index}>
                <div className="hobbyImg" style={{backgroundImage: `url(https://source.unsplash.com/${item.properties.Unsplash_id.rich_text[0].plain_text})`}}></div>
                <div className="content">
                <h1>{item.properties.Name.title[0].plain_text}</h1>
                <div className="description">{item.properties.Description.rich_text[0].plain_text}</div>
                {item.properties.Tags.multi_select.map((tag, idx) => (
                    <span key={idx} className="tag">{tag.name}</span>
                ))}
                </div>
            </HobbyItemStyled>
        ))
    )



    return (
        <ResultsStyled>
            <Container>
                {hobbies.length && selected.length > 0 ? <HobbiesList /> : <DefaultText>To get started, select some of the filters above</DefaultText>}
                {hobbies.length === 0 && selected.length > 0 ? <DefaultText>Sorry, we couldn't hobbies matching this criteria.</DefaultText> : <></>}
            </Container>
        </ResultsStyled>


    )
};


export default Results;


const ResultsStyled = styled.section`

padding-top: 60px;

`

const HobbyItemStyled = styled.div`
display: flex;
flex-wrap: wrap;
padding-top: 30px;
gap: 50px;
min-height: 190px;



.hobbyImg {
height: 150px;
width: 150px;
background-position: center;
background-size: cover;
border-radius: 10px;
@media(max-width: 764px){
    width: 100%;
    height: 300px;
}
}

.content {
  
  max-width: 600px;

    h1 {
    /* margin-top: 0; */
    font-size: 24px;
}

.description {
    font-size: 16px;
    font-weight: bold;
   
}

.tag {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    padding: 4px 8px 3px;
    margin-top: 10px;
    margin-right: 10px;
    display: inline-flex;
    white-space: nowrap;
    cursor: pointer;
    //styleName: Body/B2 · Work Sans Medium;
    font-size: 10px;
    font-style: normal;
    font-weight: bold;
    line-height: 21px;
    letter-spacing: -0.02em;
    text-align: left;
    color: white;
}

}

`

const DefaultText = styled.h1`
margin: auto;
text-align: center;
font-size: 14px;
max-width: 500px;


`