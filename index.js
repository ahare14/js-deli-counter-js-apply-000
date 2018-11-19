function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else if (katzDeliLine.length > 0) {
    var line = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  return line
  }
}

function currentLine(line) {
  if (line.length === 0) {
  return "The line is currently empty."
}
  else if (line.length > 0) {
    var phrase = "The line is currently:"
    for (let i = 0; i < line.length; i++) {
  if (line.length - 1 === i) {
    phrase += ` ${i + 1}. ${line[i]}`
  }
  else {
    phrase += ` ${i + 1}. ${line[i]},`
  }
}
  return phrase
  }
}
