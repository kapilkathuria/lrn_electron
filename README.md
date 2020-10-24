# Electron
create desktop apps with web tech like javascript, node, html and css

## Why we use it
Complex web apps being created. 
Shortcoming of web apps: doesn't have access to many end user's resources. i.e. web apps can't access hard disk and many other low level api of os

Ex. symphony, Slack, Discord

## Internals
Electron === Google chrome (mostly...)

each tab in chrome spwans a new process. why? to have better encapsulation of each tab i.e. if there is issue with one tab or security issue, it doesn't impact other tabs. these process are so separate that they can only talk to each other only via Inter Process Communication (IPC).

Electron uses Chromium and it works in absolutly in same way as chrome does and can communicate to each other via IPC only.

## history
Made by github-- github created Atom Code Editor using Elctron

Most commonly used app on github --> Javascript --> hence github decided to use JS to create a desktop app


