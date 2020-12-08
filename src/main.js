import "@capacitor/core"

import { Plugins } from '@capacitor/core';

const { Device, App } = Plugins;

App.getState().then(state=>{
  console.log(state);
})

async function displayDeviceInfo() {
  const info = await Device.getInfo();
  console.log(info);
}

function bootstrap() {
  displayDeviceInfo()
}

bootstrap()

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}