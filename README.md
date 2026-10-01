# Godfred Nana Yaw Ansah — Portfolio & Blog

A responsive personal portfolio and writing platform for **Godfred Nana Yaw Ansah**, a public relations and digital communications professional and the founder of Nyansa AI.

**Live website:** [godfred-ansah-ny-portfolioo.netlify.app](https://godfred-ansah-ny-portfolioo.netlify.app/)

## Highlights

- Responsive, accessible portfolio with a black-and-gold visual style
- Project, experience, education, and contact sections
- Markdown-powered blog with individual article pages
- Decap CMS editor for creating and updating posts
- Netlify build step that keeps the blog listing in sync

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Markdown
- Node.js build script
- Decap CMS
- Netlify

## Project structure

```text
.
|-- index.html              # Main portfolio
|-- blog.html               # Blog listing
|-- post.html               # Individual post view
|-- blog-data.json          # Generated post index
|-- content/blog/           # Markdown blog posts
|-- images/blog/            # Blog images
|-- admin/                   # Decap CMS configuration
|-- scripts/build-blog.mjs  # Generates blog-data.json
`-- netlify.toml            # Netlify build settings
```

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/godfrey-glitch/godfred-ansah-ny-portfolio.git
   cd godfred-ansah-ny-portfolio
   ```

2. Generate the blog index:

   ```bash
   node scripts/build-blog.mjs
   ```

3. Start a local static server:

   ```bash
   npx serve .
   ```

4. Open the local address shown in the terminal.

## Publish a blog post

Posts can be created through the site's [admin editor](https://godfred-ansah-ny-portfolioo.netlify.app/admin/) or added as Markdown files in `content/blog/`.

Each post uses this front matter:

```markdown
---
title: "Post title"
date: "2026-10-01T12:00:00.000Z"
excerpt: "A short summary shown on the blog page."
---

Write the article here.
```

Run `node scripts/build-blog.mjs` after adding a post manually. Netlify runs the same command during deployment. When the Netlify project is connected to this repository, changes pushed to `main` can be published automatically.

## Deployment

The site is configured for Netlify in `netlify.toml`:

```toml
[build]
  command = "node scripts/build-blog.mjs"
  publish = "."
```

## Author

**Godfred Nana Yaw Ansah**

- [Portfolio](https://godfred-ansah-ny-portfolioo.netlify.app/)
- [Blog](https://godfred-ansah-ny-portfolioo.netlify.app/blog.html)

© 2026 Godfred Nana Yaw Ansah. All rights reserved.
