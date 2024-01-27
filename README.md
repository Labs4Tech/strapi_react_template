# Strapi CMS with React Site Hosted

A fresh Strapi CMS project with a middleware setup to host a react built site in the `public` folder. This allows the headless cms to host react frontend content for closer and easier hosting management as all contents are served over one application deployed in one server.
- Strapi version 4.19.0 - dated 1/27/2024
## Get Started

 1. Create your `.env` file. An `.env.example` is provided. Change any required configurations.
 2. Update favicon.png to your application favicon.
 3. Run script `npm run develop`
 4. Once the your cms content types are ready, use `npm start` to serve. You may add contents now or later to your cms.

Reminder: 
- Content Types must be edited in develop mode! 
- Remember to allow access to any newly created types!

### For your React Project
- Deploy this Strapi CMS to your hosting server first. Allow connections to the server as necessary. Default configured port to run this app is 1337. This can be changed in the .env file.
- In your react project `package.json` add a key `proxy` with value `http://your-strapi-server` to route all api requests to your strapi cms when the react project is under development in local environment.
- Once development is complete, `build` your react project, then `copy` contents of the `build folder in your react project` to the `public folder of Strapi` **in your hosted site**.
- Now your react built static site will be hosted at `http://your-strapi-server` of your strapi cms server and the strapi admin panel is accessible from `http://your-strapi-server/admin`

### Notes
- `src/middlewares/spa.js` A middleware to handle fallback routing to public/index.html has been added.
- the middleware has been registered in `config/middlewares.js`


### Strapi Links
[Strapi - Open source Node.js Headless CMS 🚀](https://strapi.io/)
[Welcome to the Strapi Developer Docs! | Strapi Documentation](https://docs.strapi.io/dev-docs/intro)


#### Author
Mohammad A Immam
