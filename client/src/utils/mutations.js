import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        foodCount
        savedFoods {
          foodId
        }
      }
    }
  }
`;

export const SAVE_FOOD = gql`
  mutation saveFood($newFood: InputFood!) {
    saveFood(newFood: $newFood) {
      _id
      username
      email
      savedFoods {
        foodId
      }
    }
  }
`;

export const REMOVE_FOOD = gql`
  mutation removeFood($foodId: ID!) {
    removeFood(foodId: $foodId) {
      _id
      username
      email
      savedFoods {
        foodId
      }
    }
  }
`;