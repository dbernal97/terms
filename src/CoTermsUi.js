import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CoTermsUi-styles.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider';
import '@bbva-web-components/bbva-web-form-checkbox/bbva-web-form-checkbox';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import { bbvaPdf } from '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';


/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<co-terms-ui></co-terms-ui>
```

##styling-doc

@customElement co-terms-ui
*/
export class CoTermsUi extends LitElement {
  static get is() {
    return 'co-terms-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('co-terms-ui-shared-styles')
    ];
  }

  _termsSection(){
    return html`
      <div class="terms-section">
        <p id="num-screen">3 de 3</p>
        <h2>Lee y acepta los términos y condiciones para usar TransfiYa.</h2>
        <br>
        <bbva-web-link href="https://www.bbva.es" target="_blank" icon="${bbvaPdf()}" id="terms-link">Términos y condiciones</bbva-web-link>
        <bbva-web-form-checkbox name="choice2" value="2" id="terms-text" info-message="Solo debes aceptarlos la primera vez que hagas operaciones por TransfiYa">He leído, comprendo y acepto los documentos</bbva-web-form-checkbox>
        <br>
        <bbva-button-default variant="primary" disabled="">Continuar</bbva-button-default>
      </div>
    `
  }

  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="3" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }

  _comisionSection(){
    return html`
      <div id="comision">
        <table>
          <tr>
            <td>Comision:</td>
            <td>Sin costo 😉</td>
          </tr>
        </table>
      </div>
    `
  }

  _summarySection(){
    return html`
      <div class="transfer-summary">
        <p class="title-summary">RESUMEN DE LA TRANSFERENCIA</p>
        <bbva-web-divider></bbva-web-divider>
        <section>
          <table class="values-table">
            <tr>
              <td class="title-summary">VALOR A TRANSFERIR</td>
              <td><bbva-web-link href="#" target="_blank">Editar</bbva-web-link></td>
            </tr>
          </table>
          <p class="amount-change">$250.000,00</p>

          <p class="title-summary">PRODUCTO DESTINO</p>
          <p>Número de celular</p>
          <p>301 513 4333</p>
          
          <bbva-web-divider></bbva-web-divider>
          <br>
          <p class="title-summary">CUENTA DE ORIGEN</p>
          <table class="values-table">
            <tr>
              <td class="title-summary">Ahorros</td>

              <td class="amount-change">$650.000,00</td>
            </tr>
            <tr>
              <td>*1234</td>
              <td class="text-lgh-big">Disponible</td>
            </tr>
          </table>
          <p class="text-lgh">Cuenta exenta de GMF</p>
          <bbva-web-divider></bbva-web-divider>

          <p class="title-summary">TIPO DE TRANSFERENCIA</p>
          <p>A celulares</p>
        </section>
        ${this._comisionSection()}
      </div>
    `
  }


  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._termsSection()}
        ${this._summarySection()}
      </div>
    `;
  }
}
