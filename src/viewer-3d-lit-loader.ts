import { LitElement, PropertyValueMap, css, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { scene } from './scene'

@customElement('viewer-3d-lit-loader')
export class Viewer3dLitLoader extends LitElement {
  @query(`canvas`)
  canvas!: HTMLCanvasElement

  @property({ type: Number })
  width = 200

  @property({ type: Number })
  height = 200

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

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    // console.log('firstUpdated', this.canvas, this.lightColor, this.cubeColor, this.bgColor, this.bgTransparent, this.noAnimation)
    scene(this.canvas, this.lightColor, this.cubeColor, this.bgColor, this.bgTransparent, this.noAnimation)
  }

  render() {
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
