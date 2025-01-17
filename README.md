### Prompt

Create a single-page application (SPA) using React that fetches and displays data from a public API. Choose an API that provides a list of items, such as movies, books, or products. 

Your application must include the following features: 

1. A search bar to filter items based on user input. 
2. A paginated list of items displaying relevant details (e.g., title, image, description). 
3. A loading spinner displayed while data is being fetched. 
4. Error handling for cases where the API request fails. 
5. Use CSS or any CSS framework of your choice to style the application and ensure it is responsive.

### Feedback / Response

[Watch the Video](https://i.gyazo.com/46a7d382717be894ba863688bc85d6aa.mp4)

1. Total time took 6hrs
2. Issues encountered
    - Getting the boiler-plate going
    - CORS was a big issue fetching from IGDB
    - Lint issues
    - Learning to paginate Data
3. I'm still trying to figure out how to delay searching as the user is typing. Debouncing only queue's up and fires off all the searches after the delay.

### Stack: React, Material UI { using ts(x) }

1. React app bootstrapped with CRA
2. Material UI using emotion for style composition
3. SSL support + SSL setup for local dev
4. Auth0 integration for SSO authentication
5. Navigation tree setup
6. Respect system's dark/light mode

### Getting started

1. Generate SSL cert (don't self sign) using `mkcert`
2. `brew install mkcert` 
3. `mkcert --install` [GH](https://github.com/FiloSottile/mkcert)
4. `npm i`
5. `npm run start`
6. Add Auth0 keys to `.env.development.local` file
