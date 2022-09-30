var a=`
:host {
  --oi-loading-width: calc(54/18 * var(--oi-loading-size));
  --oi-loading-height: var(--oi-loading-size);
}

.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: inline-block;
  font-size: 0;
  color: var(--oi-loading-color, #000);
}

.loading.la-dark {
  color: var(--oi-loading-color-a, #000);
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: var(--oi-loading-width);
  height: var(--oi-loading-height);
}

.loading > div {
  width: calc(0.5555555556 * var(--oi-loading-size));
  height: calc(0.5555555556 * var(--oi-loading-size));
  margin: calc(0.2222222222 * var(--oi-loading-size));
  border-radius: 100%;
  opacity: 0;
  animation: ball-fall 1s ease-in-out infinite;
}

.loading > div:nth-child(1) {
  animation-delay: -200ms;
}

.loading > div:nth-child(2) {
  animation-delay: -100ms;
}

.loading > div:nth-child(3) {
  animation-delay: 0ms;
}

@keyframes ball-fall {
  0% {
    opacity: 0;
    transform: translateY(-145%);
  }
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateY(145%);
  }
}`;var{h:i}=omii,n={template:i("div",{class:"loading"},i("div",null),i("div",null),i("div",null)),css:a};export{n as default};
