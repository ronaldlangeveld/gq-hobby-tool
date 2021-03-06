import styled from 'styled-components';

const Container = ({children}) => {

    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}


export default Container;

const ContainerStyled = styled.div`
margin: auto;
max-width: 1200px;


@media(max-width: 764px){
    padding: 20px;
}

`