# wwt-com-content
Post and Page content for the Corporate Website

## Setup
This project requires [node](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads).

1. Open a terminal (if you are using VSCode, View -> Integrated Terminal)
2. `git clone https://github.com/cvharris/wwt-com-content.git`
3. `npm install`
4. Run a local server to pull up a test page: `grunt serve` or in VSCode: Shift + Cmd + P, type 'Tasks', select 'Grunt Serve'

## Workflow

This repo makes use of a plugin that syncs what's on `master` in Github with our Wordpress website. Use the 'test page' to edit your html, then when it looks good add it to the *.md file it came from.

The 'test page' is `index.html` and allows you to work on HTML of a single page or post one at a time. It has the website's header and footer handy so it is helpful to visualize the effects of your changes

1. Open a post or page under one of the folders like `_posts` or `_pages`
2. Copy the HTML portion of the *.md. The top part with two `---` is YML frontmatter which configures post metadata
3. Paste the HTML in between the `<main></main>` in `index.html`
4. Before starting new work, create a new branch off master. Name the branch 1-3 hyphenated words describing the post. For instance: `git checkout -b lifecycle-page-changes`, changing 'lifecycle-page-changes' to whatever you want the branch name to be
5. Go to http://localhost:3010 (should alaready be open if you did `grunt serve`) and you should see the post
6. (Make all file changes here)
7. When all looks good, copy the HTML between `<main></main>` below the bottom `---` and save the file
8. Add the files to git, then commit them to the branch you are on
9. Publish your branch to Github 

## Development Tip: Use Chrome DevTools

Arguably, th most handy tool any web developer has is Chrome's DevTools. Learn to rely on it to make quick tweaks to HTML and CSS in order to make development and troubleshooting easier and faster.

1. In Chrome, right click anywhere on a page and select 'Inspect'
2. Click on the Sources tab and right-click in the list's open space, select Add Folder To Workspace
3. Select the folder for this project, called `wwt-com-content`
4. Now open the cloud-icon that says 'localhost:3010' and right-click on '(index)'. Select 'Map File to System Resource'
5. Now click on Elements tab. Changing any of the HTML and pressing Cmd + S will save the `index.html` from Chrome

## Using VSCode

I recommend using VSCode because it has built-in Intellisense, which helps autocompletion of class names. It also allows us to store Grunt tasks and run them in its integrated terminal, which is a lot easier to help non-developers get up and running with writing HTML. There's a lot more to it that could be found in Atom or some other text editor, but I appreciate how the biggest parts are built-in.

### Git in VSCode

It's easy to use git in VSCode. Click on the 3rd button in the left sidebar, which looks like a fork-in-the-road.

1. If you have saved changes to a file they will show up in the list.
2. To `git add` files in order to commit them, hover over the file and click the '+' icon
3. To `git commit` the files to your new branch, type a commit message describing the changes in the text field with 'Message' in the placeholder, then click the :heavy_check_mark: icon
4. To publish your branch and changes to Github, click the '...' icon above the Message textfield to the top-right, then select Publish Branch, select origin.
5. You can now see your changes out on Github!

### Extensions

Download these in VSCode (View -> Extenstions)
- Auto Close Tag: Automatically add HTML close tags
- HTML CSS Support: Adds project-wide CSS classes to Intellisense for easy autocompletion

There are already a few settings that ship with this project that will take effect once these plugins are installed.