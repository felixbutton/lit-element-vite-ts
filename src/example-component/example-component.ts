import { html, LitElement, property, customElement, internalProperty, PropertyValues } from '../../node_modules/lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { exampleComponentStyles } from "./styles";

@customElement('example-component')
export class ExampleComponent extends LitElement {

  // Styles
  static get styles() { return exampleComponentStyles; }

  // Outside properties to cause rerender on change
  @property({ type: String, reflect: true }) userInput: string = '';
  @property({ type: Boolean, reflect: true }) dark: boolean = false

  // Internal properties to cause rerender on change
  @internalProperty() userInputValid: boolean = false;
  @internalProperty() hasALongName: boolean = false;

  // I don't cause a rerender on change
  propWithoutRerender: boolean = false;

  // 1. I run before the first render
  connectedCallback() {
    super.connectedCallback();

    console.log('%cconnectedCallback', 'color: darkgoldenrod')
  }

  // 2. I run after the initial render. Property change may cause rerender
  firstUpdated() {
    console.log('%cfirstUpdated', 'color: green')
    if (this.userInput.length) this.userInputValid = true;
  }

  // 3. I run after each update. Try to avoid property changes that cause rerenders (infinite loop)
  // I apparently don't run if the attributeChangeCallback is set
  updated(changed: PropertyValues) {
    console.log('%cupdated:', 'color: purple')
    console.log(changed)
    console.log('')
    this.propWithoutRerender = !this.propWithoutRerender
  }


  // 4. I run when the element is removed from the DOM
  disconnectedCallback() {
    super.disconnectedCallback();

    console.log('%cdisconnectedCallback', 'color: red')
  }

  onUserInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value; // type casting to InputElement
    this.userInputValid = this.userInput.length > 0;
    this.hasALongName = this.userInput.length > 5;
  }


  /**
   * Render function
   */
  render() {
    console.log('%crender', 'color: orange')
    let dataContent = html``;

    // check wether userInputIsValid, add dynamic class
    if (this.userInputValid)
      dataContent = html`<p>Hey <span class=${classMap({ hasALongName: this.hasALongName })}>${this.userInput}</span>!</p>`

    return html`
      <article ?dark=${this.dark}>
        <h3>Welcome stranger</h3>
        <p class="info">Open the developer tools to see console logs and DOM changes</p>
      
        <form>
          <label for="user-input">Please enter your name</label>
          <input type="text" id="user-input" .value=${this.userInput} @input=${this.onUserInput} />
        </form>
      
        <!-- output the content from above -->
        ${dataContent}
      </article>
    `;
  }
}
