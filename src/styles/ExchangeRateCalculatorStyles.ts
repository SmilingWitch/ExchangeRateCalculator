import styled from "styled-components";


export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80% ;
    height: 150px;
    background: #0e1627;
    padding: 10px;
    border-radius: 20px; 
    color: #E5E5E5;
    margin-bottom:20px;
    -webkit-box-shadow: 10px 10px 26px -8px rgba(41,40,40,1);
    -moz-box-shadow: 10px 10px 26px -8px rgba(41,40,40,1);
    box-shadow: 10px 10px 26px -8px rgba(41,40,40,1);

`

export const Body = styled.div`
  position: relative;
  display : flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80%; 
  background: rgba(0,0,0,0.2);
  border-radius: 10px;
`
export const Header = styled.div`
  position: relative; 
  width: 100%;
  font-size: 1em ;
`

export const Input = styled.input`
    position: relative;
    margin:20px 20px ;
    width: 50px;
    border-radius: 5px ;
    border: 1px solid transparent;
    background:  transparent;
    color: #E5E5E5;
    font-family: 'Poppins', sans-serif; 
    font-size: 1em ;
    outline: none;  
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Otros navegadores */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
`;


export const Select = styled.select`
    position: relative;
    padding: 15px ;
    height: 50px;
    display:flex; 
    align-items: center;
    justify-content: center;
    margin:20px 20px ;
    width: 100px;
    background: transparent;
    font-family: 'Poppins', sans-serif;
    border-radius: 25px ;
    border: 1px solid rebeccapurple;
    color: #E5E5E5; ;
    font-size: 1em ;
    outline: none;
    font-family: 'Poppins', sans-serif; 
    
`;
export const Option = styled.option`
  font-size: 1rem;
  background: #14213D;
  font-family: 'Poppins', sans-serif;
  border-radius: 20px;
  overflow: auto;
`;


export const Amount = styled.div`
    position: relative;
    margin:20px 20px ;
    width: 50px;
    border-radius: 5px ;
    border: 1px solid transparent;
    background:  transparent;
    color: rgb(189, 186, 181); 
    font-size: 1em ;
    outline: none;
    
    padding: 10px;  
    color: whitesmoke;
`;

export const Button = styled.button`
position: relative; 
background: -moz-linear-gradient(rebeccapurple,rgb(189, 62, 206),rgb(194, 132, 103));
width: 80%;
height:60px;
margin 0 auto ;
border: none;
color: white;
padding: 15px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
border-radius: 20px;
font-family: 'Poppins', sans-serif;
font-size: 1em;
margin-bottom: 20px ;
transition: background-color 0.3s, transform 0.3s;

&:hover {
  transform: translateY(-2px);
}

&:active {
  background-color: #3e8e41;
  transform: translateY(1px);
}
`;

export const Rate = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: whitesmoke
`;