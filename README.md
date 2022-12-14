
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png">
</p>

# Introduction:

This is simple application that gets pokemon information form https://pokeapi.co/api/v2/,  and displays initial 20 pokomon per page. 
User can search for particular pokemon and view its details information such as Name, Height, Weight, List of abilities. 
There is pagination for user to search for more pokomon-go

# Pokemon-Go: 

- [x] Checked itemCreate a web application to list all Pokémon and show paginated results
- [x] User should be shown the Pokémons in a card-based layout (click to see best practices)
- [x] Each card should contain the image of the Pokémon: `Name`, `Height`, `Weight`, `List of abilities`
- [x] User should have option to choose the number of cards available per page available options are 10, 20 and 50
- [x] User should be shown previous and next links - on both the top and the bottom of the page
- [x] User should be able to search through the Pokémon list using the name and abilities
- [ ] User should be able to sort the result by name, height and weight.
- [x] Page refresh should maintain the sorting and search related data.
- [x] User should be taken to the details page and present all the information available for that Pokémon. 
- [ ] Test cases

#### How to start:

### `npm start`
### `npm test`
### `npm run build`

### Scope of imporvements:

- Better type checking
- Test cases
- Bug's in fitering
- More refactoring `pokoResources.ts`

#### Tech used:

- React: React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components. 
- UI: https://chakra-ui.com/: Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
- Axios: https://axios-http.com/docs/intro: Axios is a promise-based HTTP Client for node.js and the browser. 
- Framer Motion: https://github.com/framer/motion: An open source motion library for React.
- styled-components: https://styled-components.com/: Styled-components allows you to write actual CSS code to style your components.
- Testing: https://jestjs.io/docs/tutorial-react: Use Jest to test React applications and componenets.
- Typescript: https://www.typescriptlang.org/: TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

# Animation:

  ![pokomon-go.gif](pokomon-go.gif)