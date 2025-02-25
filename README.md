# Rickandmorty test task

## Description and requirements

Based on the API <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>, implement a React application with a lazy-loaded list of characters from the animated series. A lazy-loaded list is one where elements are loaded from the backend in parts, i.e., when the scroll reaches the end of the page, the next part of the list is fetched, and so on, until the backend has no more data for us.

- Upon clicking on a character, the user should be redirected to a separate page with detailed information about that character.
- Use Redux for state management and Redux-Saga for asynchronous requests.
- Use SCSS or StyledComponents for styling.
- Tests are encouraged.

## App preview

The application supports theming with dark and light themes. Currently, the theme depends on the system preferences - if the system has a dark or light theme or an auto theme depending on the time of day, then the app will have a corresponding theme. I plan to add a toggle button to enable a mode different from the system settings.

<table>
  <tr>
    <td>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-dark.webp">
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-light.webp">
        <img alt="Shows an illustrated light and dark modes" src="https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-light.webp">
      </picture>
    </td>
    <td>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-light.webp">
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-dark.webp">
        <img alt="Shows an illustrated dark and light modes" src="https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-dark.webp">
      </picture>
    </td>
  </tr>
</table>
<!-- ![dark theme](https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-dark.webp)
![light theme](https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/rickandmorty-light.webp) -->

## How it works

[Check how it works](https://rickandmorty-task.vercel.app/)

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```
