import styled from "@emotion/styled";

export const List = styled.ul`
    list-style: none;
    font-size: 16px;
    color: #102445;
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
`

export const ListBtn = styled.button`

    background-image: linear-gradient(#42A1EC, #0070C9);
    border: 1px solid #0077CC;
    border-radius: 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    direction: ltr;
    display: inline-block;
    font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -.022em;
    line-height: 1.47059;
    min-width: 30px;
    overflow: visible;
    padding: 2px 8px;
    text-align: center;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    
    &:hover {
        background-image: linear-gradient(#51A9EE, #147BCD);
        border-color: #1482D0;
        text-decoration: none;
    }

    &:active {
    background-image: linear-gradient(#3D94D9, #0067B9);
    border-color: #006DBC;
    outline: none;
    }

    &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
    }

`