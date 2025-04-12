import styled from "styled-components";

export const StyledRecipe = styled.li`
  padding: 20px;
  background-color: transparent;
  border-radius: 15px;
  width: 300px;

  & p,
  h2,
  img {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  & img {
    width: 300px;
    height: 300px;
    border-radius: 25px;
  }

  & h2 {
    font-size: 18px;
    font-weight: 800px;
    margin-bottom: 15px;
    color: #333;
  }

  & ul.info {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 0;
    margin-bottom: 15px;
    background-color: white;
    border-radius: 25px;

    & li p {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 10px;
      font-weight: 900px;
      color: #8a8a8a;

      span {
        display: flex;
        align-items: center;
        color: black;

        & svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  & div.difficulty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    margin: 0 auto 15px;
    background-color: white;
    border-radius: 25px;

    & h2 {
        margin: 15px auto 5px 10px;
    }

    & ul {
      list-style: none;
      display: flex;
      gap: 10px;
      padding: 0;
      margin: 0 auto 15px;

      & li p {
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 600;
        color: #666;
        background-color: #f0f0f0;

        &.active {
          background-color: #ff6b6b;
          color: white;
        }
      }
    }
  }
`;
