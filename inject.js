
// remove any custom sidebar theme
window.onload = () => {
    // this is really hacky, should probably find a better way to do this...
    setTimeout(() => {
        const nav = document.getElementsByTagName('style');

        for (let i = 0; i < nav.length; i++) {
            let item = nav[i];
            if (item.className.includes('p-channel_sidebar__theme')) {
                item.innerHTML = '';
            }
        }
    }, 1500)
};

// Slack Dark Mode
document.addEventListener("DOMContentLoaded", function() {
  // Then get its webviews
  let webviews = document.querySelectorAll(".TeamView webview");
  // Fetch our CSS in parallel ahead of time
  const cssPath = 'https://raw.githubusercontent.com/RPuffer/slack-dark-theme/master/dark.css';
  let cssPromise = fetch(cssPath).then(response => response.text());

  let customCSS = `
    :root {
        /* Modify these to change your theme colors: */
        --text: #dadada;
        --dark-text: #000;
        --bg-main: #222;
        --bg-sidebar: #2c2c2c;
        --bg-med: #363636;
        --bg-light: #424242;
        --bg-highlight: #545454;
        --panda-red: #ff2c6d;
        --panda-blue: #72c3ff;
        --panda-teal: #35ffdc;
        --panda-pink: #ff95bf;
        --panda-orange: #ffb86c;
        --panda-purple: #b080f6;
    }
    /* add custom css here */
  `

  // Insert a style tag into the wrapper view
  cssPromise.then(css => {
      let s = document.createElement('style');
      s.type = 'text/css';
      s.innerHTML = css + customCSS;
      document.head.appendChild(s);
  });
  // Wait for each webview to load
  webviews.forEach(webview => {
      webview.addEventListener('ipc-message', message => {
          if (message.channel == 'didFinishLoading')
          // Finally add the CSS into the webview
              cssPromise.then(css => {
              let script = `
                let s = document.createElement('style');
                s.type = 'text/css';
                s.id = 'slack-custom-css';
                s.innerHTML = \`${css + customCSS}\`;
                document.head.appendChild(s);
              `
              webview.executeJavaScript(script);
          })
      });
  });
});