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

  @property({ type: Number })
  color = 0xffffff

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    scene(this.canvas, this.color)
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
