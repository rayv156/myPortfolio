---
title: 'Deploying Next.js to Netlify'
author: 'Ray Velasquez'
---

Why not let my first software development related blog post be about my struggle to get this site deployed?  I had become accustomed to create-react-apps built-in scripts and tried deploying to Netlify as I usually would but ran into some issues.  Let me quickly walk through the changes I made to make this work:

***

- ##### Add `"export": "next export"`

![Imgur](https://i.imgur.com/K7aypWu.png)

This is particularly for situations where you are not using any server-side data.  So, specifically for static HTML.

***

- ##### Create a netlify.toml as a direct child in your project's folder.  The file should look like the code block and picture below:

`[build]`   
  `command = "npm run build && npm run export"`   
  `publish = "out"`


![Imgur](https://i.imgur.com/Tfz1s93.png)

***

- ##### Configure your deployment settings:

![Imgur](https://i.imgur.com/eT86gtE.png)

- ##### Click deploy and you should be up and running.  Thanks for reading!

