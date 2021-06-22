---
date: "2021-06-21"
title: "Tailwind Read Progress Bar"
tags: ["web", "tailwindcss", "css"]
category: "web"
cover:
  imageFile: "tailwind-read-progress/cover.png"
---

It's that time of year again, where I decided to rewrite my personal website.

This year I decided to grab the tools I know best instead of trying something brand-new, and landed on a stack of Next.js and TailwindCSS. I won't go into too much more detail about the rewrite itself as its still under way. But, I did want to share one particular feature I'm very happy to have gotten working with (mostly) just Tailwind!

And thats the read progress bar on scroll! You know the ones, that are fixed to the top of the page and indicate to the user how far they are through the story.

![Screenshot 1](/assets/blog/tailwind-read-progress/progress.png)

Lets just take a look at the markup / tailwind classes first. You'll see that all I'm defining is the `bg-gradient-to-r` to set the `background-image` to a linear-gradient. And then two ring colors. The second line are all properties which just generate the line and keep it stuck to the top of the screen.

```jsx
const ProgressBar = () => {
  return (
    <div
      id="scroll-progress"
      className="
        bg-gradient-to-r ring-pink-300 dark:ring-palevioletred
        fixed top-0 left-0 z-50 w-full h-2 p-0 
      "
    />
  )
}

export default ProgressBar
```

Now lets dig into some more of the logic. I'm using `react-use` for their wonderful set of hooks, in this case `useWindowScroll` to get the current scroll position easily. I'm also calculating the page height, we'll need this for our calculation later on.

Finally, theres a `useEffect` which has only the `y` window scroll position and `pageHeight` as dependencies. We use these two values to calculate the current `percentScrolled` value to determine how far the user is _down_ the page, and therefore how far _across_ the page the progress bar should be!

Now we come to the interesting part!

After calcuting the percentage scrolled value, we should be able to just plop that in somewhere and call it a day, right? Wrong.

Tailwind's linear gradients are fairly flexible, but if used as gradients are intended to - i.e. for backgrounds, buttons, etc. I tried to use their built-in `to-transparent`, however it does not contain the `0` stop value, causing the selected color to transition out slowly, as gradients do.

Fortunately Tailwind makes extremely liberal use of CSS custom properties, which we can piggy back upon and overwrite their original "fade-out" type gradient.

```jsx
import { useWindowScroll } from "react-use"
import { useEffect } from "react"

const ProgressBar = () => {
  const { y } = useWindowScroll()
  const pageHeight = document.body.scrollHeight - window.innerHeight

  useEffect(() => {
    const percentScrolled = Math.abs(y) / pageHeight
    const el = document.getElementById("scroll-progress")
    if (el) {
      el.style.setProperty(
        "--tw-gradient-stops",
        `var(--tw-ring-color) ${percentScrolled * 100}%, transparent 0`
      )
    }
  }, [y, pageHeight])

  return (
    <div
      id="scroll-progress"
      className="
        bg-gradient-to-r ring-pink-300 dark:ring-palevioletred
        fixed top-0 left-0 z-50 w-full h-2 p-0 
      "
    />
  )
}

export default ProgressBar
```

The `bg-gradient-to-r` generates `background-image: linear-gradient(to right, var(--tw-gradient-stops));`. This allows us to completely overwrite the `--tw-gradient-stops` ourselves.

By setting the stop points of the initial color to the percentage scrolled, and transparent to 0, we can achieve the effect of having a sharp edge along the progress bar, moving across the screen. Thanks to `useEffect` this percentage scrolled value is updated constantly as the user scrolls, generating a realistic progress bar along the top of the screen!

Finally, some of you may be wondering if I'd ever mention those `ring-color`s again, while others have probably figured it out already. The ring colors simply provided an easy tailwind custom property to hijack in order to be able to define different colors for the bar via tailwind, based on whether we were in light or dark mode.

I hope you had fun reading this and maybe even learned something, I know I did working through it!
