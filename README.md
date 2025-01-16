# Animating DOM Elements additions and removals from a list

With the View Transition API it is now possible to easily animate DOM elements being added and removed from a list, without any external libraries or complicated state tracking code.

No Framer Motion, no AutoAnimate, no GSAP.

Just wrap your JS adding and removing operation in `document.startViewTransition` and make sure each DOM element has a unique `view-transition-name` CSS declaration assigned to them.

![animate add removal list](https://github.com/user-attachments/assets/b6477753-0352-4205-b117-f3b96f7b75ef)
