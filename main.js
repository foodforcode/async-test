/*
get a random number less than 10,
then, wait three seconds
then, write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- You must use "getNumLessThan.js" to generate your random number. Note: the "getNumLessThan.js" file is just an overly complicated way to make getting a random number asynchronous (there is no reason for it to be asynchronous, other than as an exercise).
- No editing any file except main.js (comments are the exception)
*/

const getNumLessThanTen = require('./getNumLessThan.js');
const writeToFile = require('./writeToHardDrive.js');
const waitOneSecond = require('./waitOneSecond.js');


getNumLessThanTen((err, randNum) => {
  if(err) {
    console.log(err);
    return;
  } else {
    //wait 3 seconds
    waitOneSecond((err, waitConfirm) => {
      if (err) {
        console.log(err);
        return;
      } else {
        waitOneSecond((err, waitConfirm) => {
          if (err) {
            console.log(err);
            return;
          } else {
            waitOneSecond((err, waitConfirm) => {
              if (err) {
                console.log(err);
                return;
              } else {
                writeToFile(randNum.toString(), (err, message) => {
                  if (err) {
                    console.log(err);
                    return;
                  } else {
                    console.log(message);
                    console.log("I'm done!");
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})