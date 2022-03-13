const express = require('express');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { join } = require('path');
const resolvers = require('./infrastructure/resolvers')

const schema = loadSchemaSync(join(__dirname, 'infrastructure/schema/index.graphql'), {
    loaders: [
      new GraphQLFileLoader(),
    ]
});

const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});

const app = express();

app.use(cors());
app.use(
    graphqlHTTP({
        schema: schemaWithResolvers,
        graphiql: true,
    })
);

app.listen(process.env.PORT || 4000, () => {
    console.info(`Server listening on http://localhost:4000`)
})