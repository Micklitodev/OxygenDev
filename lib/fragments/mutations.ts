import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_CS = gql`
  mutation Mutation($pkg: [ID]!) {
    checkoutSess(pkg: $pkg) {
      session
    }
  }
`;
