import styled from 'styled-components';
import Container from '../layouts/container';
import FilterButton from '../elements/filterBtn';

const Header = () => {

    return (

        <HeaderStyled>
            <Container>
                <img src="/logo.png" />
                <h1>Use the filter to find your perfect new hobby</h1>

                <FilterListStyled>
                    
                </FilterListStyled>

            </Container>
        </HeaderStyled>
    )
}

export default Header;

const HeaderStyled = styled.section`

background-color: ${({ theme }) => theme.colors.dark};
width: 100%;
height: 100%;
padding-bottom: 100px;
text-align: center;

img {
padding-top: 50px;
max-width: 300px;
text-align: center;
}

h1 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 36px;
}

`

const FilterListStyled = styled.div`
justify-content: center;
display: inline-flex;
flex-wrap: wrap;
padding-top: 30px;
gap: 25px;


`