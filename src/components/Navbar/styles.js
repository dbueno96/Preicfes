import styled from 'styled-components';



export const Navbar = styled.nav`
    display: flex; 
    width: 100%;
    min-width: 10rem;
    background: #07404d;
    border-radius: 5px;
    height:100%;
    }
    
    
`
export const NavList = styled.ul` 
    display: inherit;
    border: 1px solid #07404d;
    list-style: none;    
    padding: 0 1.5rem 0 0;
    overflow: auto;
    min-width: 35%;
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        background: transparent;  
    }
`
export const ListItem = styled.li`
    border-radius: 5px;
`
export const Logo = styled.img`
    border-radius: 15px; 
    width: 10rem;
    height: 90%
`
export const IconStyles = {
    height: '3.5rem',
    width: '3.5rem',
    'min-height':  '3.5rem',
    'min-width': '3.5rem',
    color: '#fff',
    margin: 'initial', 
    padding: '0.5rem',
    transition: 'all .5s'    
}

export const UserIconStyles = {
    height: '2.3rem',
    width: '2.3rem',
    color: '#fff',
    'align-self': 'center',
    'margin-left': 'auto',
    padding: '0 1rem 0 1rem ',
    'min-width': '1.4rem',
    'min-height': '1.4rem', 
}

