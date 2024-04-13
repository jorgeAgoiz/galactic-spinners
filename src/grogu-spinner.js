import { groguIcon } from "./assets/grogu-icon";

/**
 * Grogu Spinner Web Component
 * @class GroguSpinner
 */
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

        .full-page {
          position:fixed;
          left:0;
          top:0;
          right:0;
          bottom:0;
          background-color: yellow;
        }

        svg {
            width: ${this.size}px;
            height: ${this.size}px;
            background-color: transparent;
            -webkit-animation: spin ${this.speed}s infinite linear;
            animation: spin ${this.speed}s infinite linear;
            fill: ${this.color};
        }

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg) Scale(1);
                transform: rotate(0deg) Scale(1);
              }
              50% {
                -webkit-transform: rotate(180deg) scale(1.3);
                transform: rotate(180deg) Scale(${this.scale});
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
              transform: rotate(180deg) Scale(${this.scale});
            }
            100% {
              -webkit-transform: rotate(360deg) Scale(1);
              transform: rotate(360deg) Scale(1);
            }
          }
      `;
  }

  connectedCallback() {
    this.size = this.getAttribute("size") ?? "128";
    this.speed = this.getAttribute("speed") ?? "1.8";
    this.color = this.getAttribute("color") ?? "black";
    this.scale = this.getAttribute("scale") ?? "1";
    this.fullpage = this.getAttribute("fullpage");

    if (this.fullpage) {
      /* document.querySelector("div.container").classList.add("full-page"); */
    }

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>${this.getStyles()}</style>
            <div class="container">
              ${groguIcon}
            </div>
        `;
  }
}

customElements.define("grogu-spinner", GroguSpinner);
