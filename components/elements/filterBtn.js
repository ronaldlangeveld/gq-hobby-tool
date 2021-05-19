import styled from 'styled-components';

const FilterButton = () => {

    return(

        <ButtonStyled>
            Being Active
        </ButtonStyled>

    )
}


export default FilterButton

const ButtonStyled = styled.button`
${props => props.active ?

`
background-color: #E2574C;
border: 0;
border-radius: 3px;
box-shadow: 0 2px 4px rgba(0,0,0,0.2);
color: #FFFFFF;
cursor: pointer;
font-size: inherit;
font-family: inherit;
display: inline-block;
font-style: normal;
font-weight: bold;
padding: 17px 31px;
position: relative;
text-align: center;
text-transform: uppercase;
transition: 0.3s;
-webkit-appearance: none;
`

:

`border-color: #fff;
background-color: transparent !important;
border: 3px solid white;
border-radius: 3px;
color: white;
cursor: pointer;
font-size: inherit;
font-family: inherit;
display: inline-block;
font-style: normal;
font-weight: bold;
padding: 17px 31px;
position: relative;
text-align: center;
text-transform: uppercase;
transition: 0.3s;
-webkit-appearance: none;`

}


`
