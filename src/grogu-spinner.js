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
 *
 * @attributes size, speed, color, scale, bg-color
 */
export class GroguSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    /** @property {string} [size="128"] size Size of spinner on pixels */
    this.size;

    /** @property {string} [speed="1.8"] Speed of spinner in seconds */
    this.speed;

    /** @property {string} [color="black"] Color of spinner in any valid format */
    this.color;

    /** @property {string} [scale="1"] Scale of spinner */
    this.scale;

    /** @property {string} [bg-color="white"] Background color of full page variant */
    this.bgColor;

    /** @property {boolean} [fullpage="false"] Full page variant */
    this.fullpage;
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
