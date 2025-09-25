1. Create project with create-app
- React cuz its widely used
- Supabase
- NestJS or Express, we'll see
- Maybe Tailwind to try it out

2. Setup project structure
- react-router-dom for routing
- no nextjs this time, lets go barebone
- components, assets, contants, hooks, pages, routers, store, styles, types, utils
- Alias @ didnt work
- Having trouble with 'react-router-dom', not defined?
- Problems with file ref and pathing
- CRA is slow as hell, use Vite

3. Remake in Vite
- Accidentally messed up using :R in nvim
- Vite is faster and awesome

4. Start home page
- Look at dalong home page and improve it
- React.FC for stronger types
- Create Navbar with styles in tailwindcss
- Hot reload would trigger in WSL so i put in scripts, "dev": "CHOKIDAR_USEPOLLING=true vite"
- Fuck tailwind
- Hero component - thinking
- Add carousel - with props
- Create CarouselProp type
- Image not loading so create alias in vite.config.ts
- Cant use require here for some reason, difference is webpack apparently so for rendering image had to use import

5. End general structure of home page
- Do the hero component
- Add a temporal cool background
- The idea is to have grandpa to the left
- And a carousel with latest news like bandai.hobby-site to the right

- Added placeholder for grandpa img
- Added quick carousel
- Hero structure done

- Placeholder of structure for the rest of home sections
- For now:
    - News to put the latest news
    - Latest to put the latest kits additions and stuff
    - And a short about section

6. Kits Page
- Create the Kit.tsx component and its type, simple for now
- Tough part here is scrapping every kit
