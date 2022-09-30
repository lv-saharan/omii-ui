var i=`
.loading {
  margin: 0 calc(0.6666666667 * var(--oi-loading-size));
  display: inline-block;
  position: relative;
  width: calc(0.2 * var(--oi-loading-size));
  height: calc(0.3333333333 * var(--oi-loading-size));
  animation: rectangle infinite 1s ease-in-out -0.2s;
  background-color: var(--oi-loading-color, #000);
}

.loading:before,
.loading:after {
  position: absolute;
  width: calc(0.2 * var(--oi-loading-size));
  height: calc(0.3333333333 * var(--oi-loading-size));
  content: "";
  background-color: var(--oi-loading-color, #000);
}

.loading:before {
  left: calc(-0.4666666667 * var(--oi-loading-size));
  animation: rectangle infinite 1s ease-in-out -0.4s;
}

.loading:after {
  right: calc(-0.4666666667 * var(--oi-loading-size));
  animation: rectangle infinite 1s ease-in-out;
}

@keyframes rectangle {
  0%, 80%, 100% {
    height: calc(0.6666666667 * var(--oi-loading-size));
    box-shadow: 0 0 var(--oi-loading-color-a, #000);
  }
  40% {
    height: var(--oi-loading-size);
    box-shadow: 0 -20px var(--oi-loading-color-b, #000);
  }
}`;var{h:o}=omii,n={template:o("div",{class:"loading"}),css:i};export{n as default};
