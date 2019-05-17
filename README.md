# Slack Dark Theme
inspired by [panda syntax](https://github.com/PandaTheme)

# Theme Preview
<img alt="screen-shot preview" src="preview.png">

# Customization

For any further customizations, you can throw your own css in the `ssb-interop.js` file in the `customCSS` variable provided


If you'd like to replace the eyes with the default unread behavior, put the following in the custom css section of your `ssb-interop.js` file.

```css
/* Default Behavior (with custom color) */
  .p-channel_sidebar__channel--unread::before{
    color: #fe00e9 !important;
    content: '' !important;
    background: #fe00e9;
    width: 8px;
    height: 8px;
    border-radius: 50%
  }
```

Another helpful tip for customization is being able to run slack in dev mode so that you can inspect the elements. You can use the following command to run slack in dev mode (Mac):

```sh
export SLACK_DEVELOPER_MENU=true && open -a /Applications/Slack.app
```

<hr>


## First:

**Download and INSTALL this font family**
https://www.fontsquirrel.com/fonts/lato


## Second:

Replace your CURRENT **ssb-interop.js** File
Located at `/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/`

#### With this

[ssb-interop.js file in this repo](https://github.com/RPuffer/slack-dark-theme/blob/master/ssb-interop.js)

## Third

Restart Slack & ENJOY !!! 🙌🏻

## Other

Updating Slack will not cause this theme to reset! 🦁



---

_PS this is my own customization of another [customization](https://github.com/caiceA/slack-black-theme) of the [original theme](https://github.com/widget-/slack-black-theme)_
