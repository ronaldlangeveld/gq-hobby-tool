import styled from 'styled-components';

const FilterButton = ({hobby, active, SetSelected, Selected}) => {

    const SelectTag = (e) => {
        const item = e.target.dataset['item']
        if(Selected.includes(item)){
            SetSelected(Selected.filter(itm => itm !== item));
        } else {
            SetSelected(Selected => [...Selected, item]);
        }
    };

    return(

        <ButtonStyled active={Selected.includes(hobby)} onClick={SelectTag} data-item={hobby}>
            {hobby}
        </ButtonStyled>

    )
}


export default FilterButton

const ButtonStyled = styled.button`


${props => props.active === true ?

`
background-color: #E2574C;
border: 0;
border-radius: 3px;
border: 3px solid transparent;
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
// transition: 0.2s;
-webkit-appearance: none;

`

:

`

border-color: #fff;
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
transition: 0.2s;
-webkit-appearance: none;`

}

`
