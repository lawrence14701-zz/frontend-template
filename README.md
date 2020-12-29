# technology

- URQL (makes graphl request on the client side) [docs](https://formidable.com/open-source/urql/docs/basics/getting-started/)

- next.js server rendered frontend template [docs](https://github.com/vercel/next.js/tree/canary)

- chakra-ui for styling [examples](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui)

- graphql code generator (looks at queries and generates typescript types) [docs](https://graphql-code-generator.com/)

- URQL graphcache (cache endpoint data after a response is sent from Backend)

# To connect an endpoint

1. first test the query in the graphql playground
2. copy and paste the query and paste it inside a new file inside the graphql folder.
3. run $ yarn gen , which will create types for the query and a hook on the client side
4. use the hook thats being exported to use the endpoint.

# things to note

### fragment folder is used for mutating our query types when there is alot of repitition
