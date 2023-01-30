## Intro

I used React with the Chakra UI library. Because I had no access to the API docs, I made certain assumptions. For example:
-that there will only ever be one Production object per endpoint
-that the shortDescription string starts and ends with <p> tags and that there will be no other tags found in the string
-that there will be no tags at all in the middle of the shortDescription string.

## Quick Start

<br>
First, install all dependencies:

```
npm i
```

It appears that ROH's API only allows for requests from https:roh.org.uk. To circumvent that, I created proxy.js in the root. You may need to run the file in order to start the app. From the root:

```
node proxy.js
```

After that you can start the app:

```
npm start
```

## what's next?

Had I had more time, I would love to write some tests for the app. Also, I would add environmental variables so that the developer is able to only change the URL and the date in the .env file in order to fetch data for a different production/run/activity. The app could still suffer some refactoring, for example the 2 List components could be abstracted away and re-used.
