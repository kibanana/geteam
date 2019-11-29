import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const typeDef = `
    scalar Date
    type Query{
      _empty: String
    }
    type Mutation {
      _empty: String
    }`;

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};
