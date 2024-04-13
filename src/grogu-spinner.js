export class GroguSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getStyles() {
    return `
        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 100px;
            height: 100px;
            background-color: transparent;
            -webkit-animation: spin 1.5s infinite linear;
            animation: spin 1.5s infinite linear;
        }

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg) Scale(1);
                transform: rotate(0deg) Scale(1);
              }
              50% {
                -webkit-transform: rotate(180deg) scale(1.3);
                transform: rotate(180deg) Scale(1.3);
              }
              100% {
                -webkit-transform: rotate(360deg) Scale(1);
                transform: rotate(360deg) Scale(1);
              }
          }
        @keyframes spin {
            0% {
              -webkit-transform: rotate(0deg) Scale(1);
              transform: rotate(0deg) Scale(1);
            }
            50% {
              -webkit-transform: rotate(180deg) scale(1.3);
              transform: rotate(180deg) Scale(1.3);
            }
            100% {
              -webkit-transform: rotate(360deg) Scale(1);
              transform: rotate(360deg) Scale(1);
            }
          }
      `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>${this.getStyles()}</style>
            <div>
                <img 
                    alt="Grogu Image" 
                    src="./src/assets/grogu-lib-icon.svg"
                />
            </div>
        `;
  }
}

customElements.define("grogu-spinner", GroguSpinner);

/**
 * @todo
 * - Create Spinner animation
 * - Create Scale animation
 * - Add color props
 * - Add size props
 * - Add velocity props
 * - Add scale props
 */
