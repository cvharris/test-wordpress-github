# wwt-com-content
Post and Page content for the Corporate Website

## Setup
This project requires [node](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads).

1. Open a terminal (if you are using VSCode, View -> Integrated Terminal)
2. `git clone https://github.com/cvharris/wwt-com-content.git`
3. `npm install`
4. Run a local server to pull up a test page: `grunt serve` or in VSCode: Shift + Cmd + P, type 'Tasks', select 'Grunt Serve'

The 'test page' is `index.html` and allows you to work on HTML of a single page or post one at a time. It has the website's header and footer handy so it is helpful to visualize the effects of your changes

1. Open a post or page under one of the folders like `_posts` or `_pages`
2. Copy the HTML portion of the *.md. The top part is YML frontmatter which configures post metadata
3. Paste the HTML in between the `<main></main>` in `index.html`
4. Go to http://localhost:3010 (should alaready be open if you did `grunt serve`) and you should see the post

## Development Tip: Use Chrome DevTools

Arguably, th most handy tool any web developer has is Chrome's DevTools. Learn to rely on it to make quick tweaks to HTML and CSS in order to make development and troubleshooting easier and faster.

1. In Chrome

### Using VSCode

I recommend using VSCode because it has built-in Intellisense, which helps autocompletion of class names. It also allows us to store Grunt tasks and run them in its integrated terminal, which is a lot easier to help non-developers get up and running with writing HTML. There's a lot more to it that could be found in Atom or some other text editor, but I appreciate how the biggest parts are built-in.

#### Extensions

Download these in VSCode (View -> Extenstions)
- Auto Close Tag: Automatically add HTML close tags
- HTML CSS Support: Adds project-wide CSS classes to Intellisense for easy autocompletion

There are already a few settings that ship with this project that will take effect once these plugins are installed.