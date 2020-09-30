## Deployed on [Vercel](https://anilist-nextjs-jceunqs92.vercel.app/).

The website uses **Next.JS** and **GraphQL (w/ ApolloClient)** to extract details from [Anilist](anilist.co)'s API and displays all animanga in a paginated format.

## Basic Functionality
### Home Page
![](/md_assets/homepage.png)
All animanga are always sorted by most popular to least popular.

### Pagination
![](/md_assets/pagination.png)
Pagination implemented through the use of back-next buttons.
A number input field available to jump to specific pages.
Page indicator is updated accordingly.

### Search Bar
![](/md_assets/search.png)
Search is done instantly and while typing.
Does not require page to refresh to search and also change pages.

### Details Page
Clicking on any of the animanga directs to the MyAnimeList website for more details.