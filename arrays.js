var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, chocolate) {
  return [chocolate, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate) {
  chocolateBars.unshift(chocolate)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, chocolate) {
  return [...chocolateBars, chocolate]
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate) {
  chocolateBars.push(chocolate)
  return chocolateBars
}

function accessElementInArray(chocolateBars, chocolate) {
  return chocolateBars[chocolate]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
