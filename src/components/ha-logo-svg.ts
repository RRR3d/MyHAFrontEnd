import { css, CSSResultGroup, LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-logo-svg")
export class HaLogoSvg extends LitElement {
  protected render(): TemplateResult {
    return html`
     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0
-2560z m2669 1978 c60 -35 109 -63 108 -64 -7 -6 -405 -238 -667 -389 -556
-320 -605 -349 -612 -360 -4 -5 -8 -339 -8 -742 l0 -731 -107 62 -108 62 -3
741 -2 740 307 177 c170 97 459 264 643 370 184 107 336 195 338 195 1 1 52
-27 111 -61z m609 -352 c136 -79 357 -206 492 -284 135 -77 310 -178 390 -224
l145 -84 3 -127 c1 -70 1 -127 -2 -127 -2 0 -87 49 -188 108 -101 60 -295 173
-433 252 -137 79 -325 187 -417 241 -92 54 -184 107 -206 118 l-40 20 -223
-130 c-123 -72 -334 -194 -469 -272 -135 -77 -320 -184 -413 -238 -92 -55
-170 -99 -173 -99 -2 0 -3 57 -2 126 l3 126 180 105 c99 58 331 192 515 298
184 106 389 224 455 263 66 39 124 71 128 72 5 0 120 -65 255 -144z m-22 -522
c120 -70 345 -200 499 -289 154 -89 342 -197 418 -240 l137 -77 -2 -745 -3
-745 -100 -59 c-55 -32 -103 -58 -107 -59 -5 0 -8 332 -8 739 l0 738 -297 173
c-164 95 -410 238 -548 318 -137 80 -292 169 -343 199 l-93 55 103 59 c57 32
108 59 114 59 6 0 109 -57 230 -126z m-2226 -692 l0 -737 163 -95 c246 -142
751 -434 944 -546 95 -54 172 -101 172 -104 1 -6 -202 -120 -213 -120 -8 0
-326 182 -691 395 -143 83 -335 194 -427 246 l-168 94 0 742 0 741 103 60 c56
33 105 61 110 61 4 1 7 -331 7 -737z m2763 -155 l57 -32 0 -741 0 -742 -352
-203 c-816 -469 -922 -529 -936 -529 -13 0 -212 108 -212 115 0 6 200 125 510
302 162 94 402 232 533 308 l237 137 0 739 0 739 53 -30 c28 -17 78 -45 110
-63z m-2734 -1136 c130 -76 301 -175 381 -221 80 -45 260 -150 401 -232 l257
-149 228 134 c126 74 339 197 474 275 135 77 319 183 408 236 90 53 166 96
168 96 3 0 3 -57 2 -127 l-3 -126 -205 -120 c-272 -158 -996 -576 -1040 -600
l-35 -19 -80 47 c-44 27 -226 132 -405 235 -179 103 -432 249 -562 325 l-238
137 0 124 c0 68 3 124 6 124 3 0 113 -62 243 -139z"/>
</g>
</svg>`;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: var(--ha-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentcolor;
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
      }
      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: block;
      }
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "ha-logo-svg": HaLogoSvg;
  }
}
