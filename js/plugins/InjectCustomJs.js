function injectCustomJs(jsPath) {
  jsPath = jsPath || 'js/inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function () {
    // 放在页面不好看，执行完后移除掉
    this.parentNode.removeChild(this);
  };
  document.head.appendChild(temp);

  //
  //
  //
  // var disablerFunction = function () {
  //
  //   window.alert = function alert(msg) { console.log('Hidden Alert ' + msg); };
  //   window.confirm = function confirm(msg) {
  //     console.log("Hidden Confirm " + msg);
  //     return true; /*simulates user clicking yes*/
  //   };
  //
  // };
  //
  // var disablerCode = "(" + disablerFunction.toString() + ")();";
  //
  // var disablerScriptElement = document.createElement('script');
  // disablerScriptElement.textContent = disablerCode;
  //
  // document.documentElement.appendChild(disablerScriptElement);
  // disablerScriptElement.parentNode.removeChild(disablerScriptElement);
}
