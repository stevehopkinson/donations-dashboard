# Donations Dashboard
A simple one-page applicaton to fetch and display donations data from the JustGiving API. 

## Running the application
1. Clone this repository to a directory on your system.
2. Run `npm i` to install dependencies. Note that your Node version must be 8.0 or higher.
3. Create a `.env` file, using the included `.env.example` as a template. Populate it with your unique JustGiving AppID, the URL for the JustGiving API you want to use (probably `https://api.justgiving.com`) and your application's base URL (`localhost:8000`, unless you've defined a different port).
4. Run `npm run build` from the root directory to compile the front-end assets into a bundle.
5. Run `npm run start` from the root directory to run the back end.
6. Navigate your browser to the port that the server is running on (`localhost:8000` by default) to view the app.

## Application summary
The application consists of:
- A Node.js/Express server, which serves the index HTML and compiled JavaScript/CSS bundle, and provides an API layer for the client to fetch charity data from;
- A React-Redux front-end, which hits the back-end API to retrieve charity data and displays the result.

The tools used to build the application (and the reasons for choosing them) were:
- React: specified in the specification. Ensures that the application's interface is a pure function of state.
- Redux: overkill for an app with such minimal state management, but to demonstrate an awareness of its use and implementation and to provide a base for further development.
- Express: minimal, tried-and-tested Node framework for handling basic serving and routing.
- Axios: reliable HTTP client that works in both the server and the client. Allows for patterns to be used across both Node and the Browser.
- Webpack/Babel: build tools to transpile front-end code into a bundle.
- Jest: full-stack testing tool. Particularly well-suited to testing React applications.
- Supertest: for testing HTTP requests/responses.
- Axios mock adapter: for mocking external APIs in testing.
- Nodemon: Node development server to remove the need for manual server reloading following changes.
- Webpack dev server: allows hotloading and automatic refreshing of the front-end following changes.

The choice to populate the client with data through an API, rather than bootstrapping the client before sending the initial response, was made for two reasons:
1. To minimise the amount of time between the client's initial request and the first render. (The JustGiving API can take around half a second to respond, making the app feel noticeably less responsive if the back-end waits for a response before serving the client code).
2. To make the front-end/back-end more loosely coupled.
The back-end API also makes the requests to both JustGiving endpoints (to get the charity and its donations) in parallel, parsing the results into a single response so that the client only needs to make a single request.

Owing to time constraints, the application is less developed than I would have liked. Given further time, I would:
- Include a more extensive test suite, including back-end unit tests and additional front-end testing.
- Remove hard-coded charity ID, and create an index page with the option to select between multiple charities, implementing react-redux-router to handle client-side routing.
- Set up isomorphic rendering to take advantage of the synergies between Node and React.
- Implemented further type checking, either through TypeScript or Flow.
- Hosted the application online, using Heroku or a similar PaaS product.
- Develop the visual design, including charity logos, calls to action, and further enhancements.