import { groguIcon } from "./assets/grogu-icon";

/** @type {string} Default spinner´s size */
const DEFAULT_SIZE = "128";

/** @type {string} Default spinner speed */
const DEFAULT_SPEED = "1.8";

/** @type {string} Default spinner color */
const DEFAULT_COLOR = "black";

/** @type {string} Default background color to full page variant */
const DEFAULT_BG_COLOR = "white";

/** @type {string} Default spinner scale */
const DEFAULT_SCALE = "1";

/**
 * Grogu Spinner Native Web Component
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
          background-color: ${this.bgColor};
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
    this.size = this.getAttribute("size") ?? DEFAULT_SIZE;
    this.speed = this.getAttribute("speed") ?? DEFAULT_SPEED;
    this.color = this.getAttribute("color") ?? DEFAULT_COLOR;
    this.scale = this.getAttribute("scale") ?? DEFAULT_SCALE;
    this.bgColor = this.getAttribute("bg-color") ?? DEFAULT_BG_COLOR;
    this.fullpage = this.hasAttribute("fullpage");

    this.render();

    if (this.fullpage) {
      this.shadowRoot.querySelector(".container").classList.add("full-page");
    }
  }

  attributeChangedCallback() {
    console.log(this.getAttributeNames());
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
