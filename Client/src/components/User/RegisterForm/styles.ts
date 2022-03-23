import styled from "styled-components";

export default styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 85vh;

  .Form {
    width: 100%;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    background-color: ${p => p.theme.colors.primary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    > label {
      display: block;
      margin-bottom: 0.3rem;

      > input {
        margin-top: 0.3rem;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border: 0;

        &::placeholder {
          color: #000;
        }

        &:focus {
          outline: none;
        }
      }
    }

    > button {
      margin-top: 1rem;
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      border: 0;
      background-color: ${p => p.theme.colors.secundary};
      color: #fff;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        color: #000;
        background-color: #fff;
      }

      &:focus {
        outline: none;
        filter: saturate(1.5);
      }
    }
  }

  .Register {
    margin-top: 1rem;
    text-align: center;

    &:focus {
      outline: none;
    }

    > a {
      color: #00a8ff;
      text-decoration: none;
      

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .Warn {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 0;
    background-color: #ff0000;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:focus {
      outline: none;
    }
  }

  .Sucess {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 0;
    background-color: #00ff00;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:focus {
      outline: none;
    }
  }

  .Load {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 0;
    background-color: #ff9100;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:focus {
      outline: none;
    }
  }
`;