# technology

- URQL (makes graphl request on the client side) [docs](https://formidable.com/open-source/urql/docs/basics/getting-started/)

- next.js server rendered frontend template [docs](https://github.com/vercel/next.js/tree/canary)

- chakra-ui for styling [examples](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui)

- graphql code generator (looks at queries and generates typescript types) [docs](https://graphql-code-generator.com/)

- URQL graphcache (cache endpoint data after a response is sent from Backend)

- URQL next.js, allows us to optionally server side render pages. [routing docs](https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/), server side rendering is better for seo results, it does not need to evaluate JS. Client side rendering has to fetch the data, inside source code the data will initially be set to null. Server side rendering allows us to skip the fetching on the client side and directly insert the data. check index.tsx file. If the data needs to be found by google then we should server side the queries.

## how server side rendering works

- client(local:3000) makes a request to the next.js server -> the servver makes a req to the graphql server on localhost 4000 -> it builds the html -> sends back to your browser

# To connect an endpoint

1. first test the query in the graphql playground
2. copy and paste the query and paste it inside a new file inside the graphql folder.
3. run $ yarn gen , which will create types for the query and a hook on the client side
4. use the hook thats being exported to use the endpoint.

# things to note

### fragment folder is used for mutating our query types when there is alot of repitition
