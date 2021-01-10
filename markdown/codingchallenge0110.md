---
title: 'Codewars - Decode the Morse Code'
author: 'Ray Velasquez'
---

The last few days I've been working through some Open ID Connect authentication layers in Django.  I'm not too familiar with Django just yet but have learned alot and still in the process of figuring out whether I like it better than Rails or not.  Annnnd that's not what this post is about.  I decided to take a break from that and try out a Codewar challenge called Decode the Morse code.  Here's what was going through my brain while I was working through it.

![Imgur](https://i.imgur.com/1Bbfb35.gif?noredirect)


***

- ##### - Here's the link to the details: 
    [Codewars - Decode the Morse Code Details](https://www.codewars.com/kata/54b724efac3d5402db00065e)

***

- ##### - Now, I'll summarize  

The objective is to be able to accept some Morse code as a string and decode it back in a human-readable string.  The code for translating the letters is already set up so it's just a matter of manipulating the string the look for spaces in the string input.

***

- ##### - I started by splitting the string into an array

        messageArray = morseCode.split(" ")

All I really wanted to do here was get the string into an array to use array methods and loop through the letters.

***

- ##### - Then, I mapped through the array

        messageArray.map((item, index)=> {
            item ? finalArray.push(MORSE_CODE[item]) : finalArray.push(' ')
        })  
  
In every iteration of this loop, I am checking to see if item is defined.  If item is defined, then I am pushing the translated Morse code into a new array which I called finalArray.  If the item is not defined, I am pushing a space to the array.  I got to this result with some trial and error.  I realized that with the 3 space set up in between words, I was going to have to do something about those spaces instead of running it through the MORSE_CODE function.  A few console.logs later and I got what I was expecting.

![Imgur](https://i.pinimg.com/originals/31/76/02/3176028b92c680e1b07a159db36cc3a8.gif)

***

- ##### - Now, I have to bring it all back together:

        return finalArray.join('').replace(/  +/g, ' ')

In this code block I'm returning my finalArray once it is joined and the double space is replaced by just a single space.  So my final code block looks like:

        decodeMorse = function(morseCode){
            finalArray = []
            messageArray = morseCode.split(" ")
                messageArray.map((item, index)=> {
                    item ? finalArray.push(MORSE_CODE[item]) : finalArray.push(' ')
                })
  
            return finalArray.join('').replace(/  +/g, ' ')
        }

- ##### That was easy right?

![Imgur](https://media4.giphy.com/media/dAoaCkGkLe4ABsQrpV/giphy.gif)

***

- ##### - Something we are all taught in grade school is to READ THE DIRECTIONS!

I completely missed an important step, I need to account for any unnecessary spacing in the beginning or end of the string.  This should've be an easy fix but I could not remember what function existed to do such a thing.  I'll never forget now. (I said this when I used it for one of my projects a few months back)

***

### TRIM
### TRIM
### TRIM

.trim - a method that gets rid of all whitespace in the beginning and end of a string...literally the exact thing I needed (goodbye 30 minutes to an hour of my life)

***

- ##### SOLUTION

So now my final code block (and for real this time) looks like this:


        decodeMorse = function(morseCode){
            finalArray = []
            morseCode = morseCode.trim()
            messageArray = morseCode.split(" ")
        
            messageArray.map((item, index)=> {
                item ? finalArray.push(MORSE_CODE[item]) : finalArray.push(' ')
            })
            
        return finalArray.join('').replace(/  +/g, ' ')
        }


Wooooooo!!  Challenge Completed!!

