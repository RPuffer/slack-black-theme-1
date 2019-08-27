//# sourceMappingURL=ssb-interop.bundle.js.map


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

	.p-channel_sidebar__channel:hover i ,
	.p-channel_sidebar__link:hover i {
		display: none;
	}

	.p-channel_sidebar__channel:not(.p-channel_sidebar__channel--typing):hover::before {
		animation: explode 0.5s cubic-bezier(.87,.25,1,.66) forwards;
		opacity: 1 !important;
		width: 22px;
		font-size: 15px;
	}

	.p-channel_sidebar__channel:hover span, .p-channel_sidebar__link:hover span {
		color: black !important;
		animation: shake 0.5s linear infinite;
		animation-delay: 0.425s;
		margin-left: 0px;
	}

	@keyframes shake {
		0% { transform: translate(1px, 1px) rotate(0deg); }
		10% { transform: translate(-1px, -2px) rotate(-1deg); }
		20% { transform: translate(-3px, 0px) rotate(1deg); }
		30% { transform: translate(3px, 2px) rotate(0deg); }
		40% { transform: translate(1px, -1px) rotate(1deg); }
		50% { transform: translate(-1px, 2px) rotate(-1deg); }
		60% { transform: translate(-3px, 1px) rotate(0deg); }
		70% { transform: translate(3px, 1px) rotate(-1deg); }
		80% { transform: translate(-1px, -1px) rotate(1deg); }
		90% { transform: translate(1px, 2px) rotate(0deg); }
		100% { transform: translate(1px, -2px) rotate(-1deg); }
	}

	@keyframes explode {
		0% {
			transform: scale(-0.5, 0.5) translate(4px, 1.5px);
			content: '💣';
		}
		85% {
			transform: scale(-1.775, 1.775) translate(4px, 1.5px);
			content: '💥';
		}
		100% {
			transform: scale(-2, 2) translate(4px, 1.5px);
			content: '💥';
		}
	}
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