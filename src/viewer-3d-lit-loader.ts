import { LitElement, PropertyValueMap, css, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { scene } from './scene'

const DEFAULT_WIDTH = 200
const DEFAULT_HEIGHT = 200

@customElement('viewer-3d-lit-loader')
export class Viewer3dLitLoader extends LitElement {
  @query(`canvas`)
  canvas!: HTMLCanvasElement

  @property({ type: Number })
  width = 0

  @property({ type: Number })
  height = 0

  @property({ type: String })
  lightColor = '#ffffff'

  @property({ type: String })
  cubeColor = '#000000'

  @property({ type: String })
  bgColor = "#000000"

  @property({ type: Boolean })
  noAnimation = false

  @property({ type: Boolean })
  bgTransparent = false

  @property({ type: Boolean })
  fullContent = false

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    scene(this.canvas, this.lightColor, this.cubeColor, this.bgColor, this.bgTransparent, this.noAnimation)
  }

  render() {
    if(this.fullContent) {
      const parent = this.parentElement
      if(parent){
        this.width ||= parent.clientWidth || DEFAULT_WIDTH
        this.height ||= parent.clientHeight || DEFAULT_HEIGHT
      }
    } else {
      this.width ||= DEFAULT_WIDTH
      this.height ||= DEFAULT_HEIGHT
    }

    return html`<canvas width="${this.width}" height="${this.height}"></canvas>`
  }

static styles = css`
    :host {}
    @media (prefers-color-scheme: light) {}
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'viewer-3d-lit-loader': Viewer3dLitLoader
  }
}
