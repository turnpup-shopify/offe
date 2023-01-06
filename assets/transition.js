class Transition extends HTMLElement{constructor(){super()}connectedCallback(){this.state="at_start",this.setState(this.state),this.transitionListeners()}setState(t){this.setAttribute("data-transition",t),this.state=t}updateState(){this.state=this.getAttribute("data-transition")}transitionListeners(){this.on("transitionend",t=>{t.target===this&&(this.updateState(),"forwards"===this.state?(this.setState("at_end"),this.trigger("transition:at_end")):"backwards"===this.state&&(this.setState("at_start"),this.trigger("transition:at_start")))})}}customElements.define("transition-root",Transition);