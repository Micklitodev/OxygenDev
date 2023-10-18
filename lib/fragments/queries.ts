import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query {
    user {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const GET_PKGS = gql`
  query Query {
    getPkg {
      _id
      features
      name
      price
      popular
    }
  }
`;
