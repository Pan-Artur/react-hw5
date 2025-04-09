import styled from "styled-components";

export const StyledRecipe = styled.li`
    padding: 10px;
    background-color: rgb(191, 221, 255);

    & p, h2, img {
        display: flex;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    & h2 {
        font-size: 16px;
        font-weight: 800;
    }

    & img {
        width: 300px;
        height: 300px;
        border-radius: 25px;
    }

    & ul.info {
        list-style: none;
        display: flex;
        
    }
`;