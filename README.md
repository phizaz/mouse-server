# Mouse Server

> An API server for controlling mouse based on Robot.js

This is a program that allows you to control your mouse (movement and actions) from remote HTTP requests.

## Prerequisites

You will need **NodeJS** latest version (v.7 or better) for this.

### What is NodeJS ?

It should take a longer read for its proper introduction, but for our purposes right now all you need to know are:

- Think of a Python, you have a Python language and a Python interpreter to run it
- In the world of Javascript, another language, you have the language, Javascript, and you have the interpreter, **NodeJS**, to run it, loosely speaking
- So, you write your *general purpose programs* in Javascript and run it with NodeJS

### If you have no idea how to install it ?

Please visit https://nodejs.org/en/download/current/, and download the intaller for your system. Make sure that you download the "current" version of NodeJS so that you will get the latest version which is madatory!

### I'm not sure if I have it installed ?

You can test whether you have **NodeJS** installed on your system already or not, or maybe you just want to check if you have the right version of NodeJS. Here is how you do it:

Open your console or terminal and type:

```
> node --version
v8.6.0 # I got this, but yours can be differ
```

If your vesion is not high enough (> v7), please update!

## To setup

**Clone** or **download** this project to your computer.

Let's say that you have it copied to `Desktop/mouse-server`, open your terminal and **cd** to that directory, then proceed the following instructions.

### For Windows

On Windows, I recommend you to install the **windows build tools** for node-js first by following:

1. open **cmd** as an administrator
2. then enter `npm install --global --production windows-build-tools`
3. it will take quite some time ... so please be patient !

Then:

```
npm install -g node-gyp
npm install
```

### For Linux and Mac

If you have **NodeJS** properly installed, you just need to:

```
npm install -g node-gyp
npm install
```

If you find no error, you should be good to go !

## To run

```
# it will open a server on port 3000
node server.js
```

You can try by accessing `http://<ip>:<port>/`, it has a nice testing page checking if you can now controll your mouse remotely.

![](https://pictr.com/images/2017/09/27/85f34cd5d7778ec9f744d05313623477.png)

## API List

Always use header `Content-Type: application/x-www-form-urlencoded` for makeing any POST request.

### POST /move-to

```
Desc: move the cursor to a designated position x, y
Input: x, y
Return: none
```

### POST /move-by

```
Desc: move the cursor by a given distance along the axes x, y
Input: x, y
Return: none
```

### POST /left-click

```
Desc: perform the left click
Input: none
Return: none
```

### POST /right-click

```
Desc: perform the right click
Input: none
Return: none
```

