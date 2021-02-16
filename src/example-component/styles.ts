import { css } from "../../node_modules/lit-element";

export const exampleComponentStyles = css`
  :host { 
    font-family: var(--example-component-font-family, Roboto);
  }

  :host:not([dark]) { 
    /* define new vars */
    --example-component-internal-text-color: var(--example-component-text-color, black);
    --example-component-internal-input-color: var(--example-component-input-color, white);
    --example-component-internal-background-color: var(--example-component-background-color, white);  
  }

  :host([dark]) {
    --example-component-internal-text-color: var(--example-component-text-color-dark, white);
    --example-component-internal-input-color: var(--example-component-input-color-dark, darkgrey);
    --example-component-internal-background-color: var(--example-component-background-color-dark, black);  
  }

  article {
    border: solid 1px gray;
    padding: 16px;
    max-width: 800px;
    color: var(--example-component-internal-text-color);
    background: var(--example-component-internal-background-color);  
  }

  .hasALongName{
    color: orange;
  }

  .info {
    color: var(--example-component-text-color-warning, var(--example-component-internal-text-color));
  }

  form {
    max-width: 20rem;
  }

  form label,
  form input {
    width: 100%;
  }

  form input {
    padding: .5rem;
    background: var(--example-component-internal-input-color);
    border: 1px solid grey;
    color: var(--example-component-internal-text-color);
  }

  form label {
    margin-bottom: .5rem;
    font-style: italic;
    font-size: .9rem;
  }
  `