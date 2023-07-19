# Table of content

- [Table of content](#table-of-content)
  - [Section 1 - Getting starting with Javascript](#section-1---getting-starting-with-javascript)

## Section 1 - Getting starting with Javascript

1. **Install a web browser**
2. **Install visual studio code**
   1. Install extension Live server [live-server]: <https://marketplace.visualstudio.com/items?itemName=yandeu.five-server>
3. **On your desktop create folder name it javascript course**
4. **Inside create 2 files**
   1. index.html
   2. script.js
5. **Open Visual Studio code**
6. **Drag the folder that you just create to it**
7. **Open index.html and write**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <script src="./scripts.js"></script>
       <title>Section 1</title>
     </head>
     <body>
       Just playing with javascript
     </body>
   </html>
   ```

8. **Then go to script.js nd your done!**

   ```javascript
   //here we will be the javascript code
   ```

9. **Using console.log()**

   ```javascript
   // using console.log();
   // console log -> predominantly used for debugging purposes

   console.log('hello, World');
   //undefined - why?
   //this is because console.log has no explicit return value
   ```

10. **Using alert**

    ```javascript
    //using alert
    window.alert('hello');
    //it produce a pop up

    // because window is the global object,  it can be also call just
    //like alert(message);

    //unlike using console.log aler acts as a modeal prompt meaning the cade
    //calling alert will pause until the prompt is answered

    //in other words no other javascript code will excute until the alert is
    // dismissed

    alert('Pause');
    console.log('continue');
    ```

11. **Using window.prompt**

    ```javascript
    //using window.prompt()
    //An easy way to get an input from a user is by using the prompt() method
    //prompt(text,[default])

    //where:
    // text: the text displayed in the prompt box
    // default : a default value for the input field (optional)

    //prompt('Thanks for watching!');
    //it is also a modeal prompt
    console.log(prompt('Thanks for watching!')); // prints the value inserted by the user
    // condition:
    // if Ok:
    // return value
    // else
    //return null
    ```

12. **Using window.confirm()**

    ```javascript
    //using window.confirm();
    //displays a modal dialog with an optional message and two buttons, ok and cancel
    console.log(window.confirm('Are you sure?'));
    //if Ok:
    // true
    //else
    // false
    ```
