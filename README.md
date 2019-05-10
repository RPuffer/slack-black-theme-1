# Slack Black Theme Night Mood - Mac Only
## The Black Theme you'll fall in love with 😍
```
28 September 2018 Update:
- Resolved many cosmetic issues, download latest zip file from below
```
# Theme Preview
<img alt="screen-shot preview" src="preview.png">

# Customization

If you'd like to replace the eyes with the default unread behavior, just find this section in the `ssb-interop.js` file and replace it with the default version.

```css
.p-channel_sidebar__channel--unread::before{
  color: #fe00e9 !important;
  content: '👀' !important;
  opacity: 1;
  width: 22px;
  // background: #fe00e9;
  // width: 10px;
  // height: 10px;
  // border-radius: 50%
}

/* Default Behavior (with custom color) */
.p-channel_sidebar__channel--unread::before{
  color: #fe00e9 !important;
  content: '';
  background: #fe00e9;
  width: 10px;
  height: 10px;
  border-radius: 50%
}
```

Another helpful tip for customization is being able to run slack in dev mode so that you can inspect the elements. You can use the following command to run slack in dev mode (Mac):

```sh
export SLACK_DEVELOPER_MENU=true && open -a /Applications/Slack.app
```

<hr>

## Notes

Ideally, I would get rid of the use of `!important` but its not a huge priority and I work on this very sporadically.  I also plan to use variables for most of the color selections so that the theme is much more easily customizable.



## First:

**Download and INSTALL this font family**
https://www.fontsquirrel.com/fonts/lato



## Second:

Go to Application  and right click on Slack  > Show Package Content
Contents > Resources > app.asar.unpacked > src > static >  ssb-interop.js

Replace your CURRENT **ssb-interop.js** File
Located at `/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/`

#### With this

http://neckcode.com/slack/ssb-interop.js.zip

OR
[View file on GitHub](https://github.com/caiceA/slack-black-theme/blob/master/ssb-interop.js)

## Third

Restart Slack & ENJOY !!! 🙌🏻

## Other

Updating Slack will not cause this theme to reset! 🦁



---

_PS this is my own customization of [original theme](https://github.com/widget-/slack-black-theme)_
