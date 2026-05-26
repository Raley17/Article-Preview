# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/Frontend%20Mentor%20-%20Article%20preview%20component.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/article-preview-solution-e098UzygTD)
- Live Site URL: [Add live site URL here](https://article-preview-puce-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned to do the next things:

```css
.override::before {
  content: "";
  position: absolute;
  bottom: -1em;
  left: 50%;
  transform: translateX(-50%);
  border: 0.5em solid transparent;
  border-top-color: var(--color-1);
}
```

```js
sharebutton.addEventListener("click", function () {
  console.log("click detectado", override.style.opacity);
  override.style.opacity = "1";
  override.style.zIndex = "2";
});

activeshare.addEventListener("click", function () {
  override.style.opacity = "0";
  override.style.zIndex = "-2";
});

document.addEventListener("click", function (e) {
  console.log(e.target);
});
```

### Continued development

I want to upgrade the share button to a more fitting color, and also adapt the font sizes to be more adequeate to the original.

### AI Collaboration

I use Claude to learn from my mistakes and make a better code.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Raley17)
