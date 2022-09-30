var i=`
:host {
  width: var(--oi-loading-size);
  height: var(--oi-loading-size);
}

.loading {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: calc(0.0666666667 * var(--oi-loading-size)) solid var(--oi-loading-color, #000);
  border-top-color: transparent;
  border-radius: 100%;
  animation: circle infinite 0.75s linear;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}`;var{h:o}=omii,e={template:o("div",{class:"loading"}),css:i};export{e as default};
