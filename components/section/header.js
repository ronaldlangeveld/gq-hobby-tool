import styled from 'styled-components';
import Container from '../layouts/container';
import FilterButton from '../elements/filterBtn';
import {useEffect} from 'react';

const Header = ({tags, selected, SetSelected}) => {

    return (
        <>
        <HeaderStyled>
            <Container>
                <FilterListStyled>
                  {tags.map((tag, idx) => (
            <FilterButton SetSelected={SetSelected} Selected={selected} key={idx} hobby={tag} />
        ))}
                </FilterListStyled>
            </Container>
        </HeaderStyled>
        </>
    )
}

export default Header;

const HeaderStyled = styled.section`


background-color: ${({ theme }) => theme.colors.dark};
width: 100%;
height: 100%;
padding-bottom: 100px;
text-align: center;



h1 {
    margin-top: 0px;
    padding-top: 30px;
    color: ${({ theme }) => theme.colors.light};
    font-size: 28px;
}

h2 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 18px;
}


span.tag{
    font-size: 12px;
}


`

const FilterListStyled = styled.div`
justify-content: center;
display: inline-flex;
flex-wrap: wrap;
padding-top: 40px;
gap: 25px;


`