import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 100%;
  background-color: var(--main-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  -webkit-box-shadow: 0 6px 6px -6px black;
	   -moz-box-shadow: 0 6px 6px -6px black;
	        box-shadow: 0 6px 6px -6px black;
  h1 {
    color: #fff;
  }

  .inner-container {
    max-width: 800px;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-container {
    height: 30px;
    background-color: azure;
    width: 50%;
  }

  .logo {
    width: 100px;
    height: 30px;
    background-color: #f00;
  }

`;

export default ContainerStyle;