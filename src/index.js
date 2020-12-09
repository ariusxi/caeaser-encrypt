'use strict'

/**
 * @param {String} messageText 
 * @param {Number} [numOfPositions=3]
 * @description Method for transcribe an message with Caesar
 * @return {String} 
 */
exports.transcribeCaesar = (messageText, numOfPositions = 3) => {
    const lettersArray = messageText.split('')
    const translatedMessage = lettersArray.map((currentLetter) => {
        if (currentLetter !== ' ') {
            const charCodeLetter = currentLetter.charCodeAt(0) - numOfPositions
            return String.fromCharCode(charCodeLetter)
        }
        return currentLetter
    })

    return translatedMessage.join('')
}

/**
 * @param {String} messageText 
 * @param {Number} [numOfPositions=3]
 * @description Method for encrypt an message with Caesar
 * @return {String} 
 */
exports.encryptCaesar = (messageText, numOfPositions = 3) => {
    const lettersArray = messageText.split('')
    const translatedMessage = lettersArray.map((currentLetter) => {
        if (currentLetter !== ' ') {
            const charCodeLetter = currentLetter.charCodeAt(0) + numOfPositions
            return String.fromCharCode(charCodeLetter)
        }
        return currentLetter
    })

    return translatedMessage.join('')
}