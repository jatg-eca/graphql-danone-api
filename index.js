const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Product {
    productImage: String
    productName: String
    numberInPresentation: Int
    kilocalories: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    products: [Product]
  }
`;

const products = [
    {productImage: "https://www.danone.es/wp-content/uploads/2022/09/08410500023447_A1L1-768x768.jpg", productName: "Danone ECO Natural", numberInPresentation: 4, kilocalories: 62},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/03/08410500006150_C1L1-768x768.jpg", productName: "Coco", numberInPresentation: 4, kilocalories: 72},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/06/08410500028824_C1L1-768x768.jpg", productName: "Chocolate ", numberInPresentation: 2, kilocalories: 100},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/03/08410500006099_C1L1-768x577.jpg", productName: "Azucarado", numberInPresentation: 4, kilocalories: 72},
    {productImage: "https://www.danone.es/wp-content/uploads/2022/09/08410500016104_A1L1-768x657.jpg", productName: "Danone Natural",  numberInPresentation: 12, kilocalories: 56},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/03/08410500006105_C1L1-768x588.jpg", productName: "Fresa",  numberInPresentation: 4, kilocalories: 72},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/04/08410500028794_C1L1-768x768.jpg", productName: "Griego Natural",  numberInPresentation: 4, kilocalories: 96},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/03/08410500006129_C1L1-768x589.jpg", productName: "Plátano",  numberInPresentation: 4, kilocalories: 72},
    {productImage: "https://www.danone.es/wp-content/uploads/2023/03/08410500024529_C1L1-768x518.jpg", productName: "Panna Cotta al Caramelo",  numberInPresentation: 4, kilocalories: 100},

  ]



  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves products from the "products" array above.
const resolvers = {
    Query: {
      products: () => products,
    },
  };


  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});