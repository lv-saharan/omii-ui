var o=`
:host {
  --oi-loading-border: calc(5/30 * var(--oi-loading-size)) ;
}

.loading {
  display: inline-block;
  position: relative;
  width: var(--oi-loading-size);
  height: var(--oi-loading-size);
  border: calc(0.0666666667 * var(--oi-loading-size)) solid var(--oi-loading-color, #000);
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: arrow-circle infinite 0.75s linear;
}

.loading:before,
.loading:after {
  position: absolute;
  top: calc(0.8 * var(--oi-loading-size));
  left: calc(-0.0666666667 * var(--oi-loading-size));
  border-top: var(--oi-loading-border) solid var(--oi-loading-color, #000);
  border-right: var(--oi-loading-border) solid transparent;
  border-left: var(--oi-loading-border) solid transparent;
  content: "";
  transform: rotate(-30deg);
}

.loading:after {
  top: 0;
  left: calc(0.6833333333 * var(--oi-loading-size));
  transform: rotate(150deg);
}

@keyframes arrow-circle {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
}`;var{h:r}=omii,e={template:r("div",{class:"loading"}),css:o};export{e as default};
