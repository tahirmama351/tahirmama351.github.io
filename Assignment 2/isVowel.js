'use strict'


function isVowel(string) {
     string = string.toLowerCase()
     if (
          string === "a" ||
          string === "e" ||
          string === "i" ||
          string === "o" ||
          string === "u"
     ) {
          return true
     }
     return false
}