import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import './DemandActionMenu.js';
import './TestElement.js';

export class BldnPrivRequest extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--bldn-priv-request-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html` <demand-action-menu></demand-action-menu> `;
    // return html`
    //   <h2>${this.title} Nr. ${this.counter}!</h2>
    //   <button @click=${this.__increment}>increment</button>
    // `;
  }
}
