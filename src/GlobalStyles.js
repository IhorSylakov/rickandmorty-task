/* istanbul ignore file */

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --system-theme: enable;
    --main-gap: 30px;
    --has-animation: yes;

    container-name: html;

    @media only screen and (max-width: 768px) {
      --main-gap: 15px;
      --has-animation: no;
    }
  }

  body {
    --theme-color: #000;
    --theme-bg-color: #fff;
    --header-bg-color: #bdbdbd;
    --header-active-bg: #999;

    @container html style(--system-theme: enable) {
      @media (prefers-color-scheme: light) {
        --theme-color: #000;
        --theme-bg-color: #fff;
        --header-bg-color: #bdbdbd;
        --header-active-bg: #999;
      }

      @media (prefers-color-scheme: dark) {
        --theme-color: #fff;
        --theme-bg-color: #303030;
        --header-bg-color: #424242;
        --header-active-bg: #666;
      }
    }

    @container html style(--system-theme: theme-light) {
      --theme-color: #000;
      --theme-bg-color: #fff;
      --header-bg-color: #bdbdbd;
    }

    @container html style(--system-theme: theme-dark) {
      --theme-color: #fff;
      --theme-bg-color: #303030;
      --header-bg-color: #424242;
    }
  }

  * {
    margin-top: 0;
  }

  body {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.3;
    color: var(--theme-color);
    background-color: var(--theme-bg-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--theme-color);
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  dl {
    margin: 0;
    padding: 0 0 20px;
    width: 100%;
  }

  dt {
    float: left;
    margin-right: 10px;
  }

  dd {
    clear: right;
    margin: 0 0 5px;
  }

  @supports (container-type: inline-size) {
    @container html style(--has-animation: yes) {
      .hasZoomAnim {
        transition: transform 0.3s linear;

        &:hover,
        &:focus {
          transform: scale(1.12);
        }
      }
    }
  }
`;
