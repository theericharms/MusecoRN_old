const fs = require('fs-extra')
const path = require('path')
var serviceCode = process.argv.slice(2)[0]

if (!serviceCode) {
  return console.log('Missing service code name')
}

console.log(`Making files for ${serviceCode}`)

async function copyFiles() {
  try {
    await fs.copy(
      path.join(__dirname, '../e2e/_TestTemplate.js'),
      path.join(__dirname, `../e2e/${serviceCode}.e2e.js`),
    )
    console.log('Copying file success!')
  } catch (err) {
    console.error(err)
  }
}

async function replaceText() {
  try {
    const data = await fs.readFile(
      path.join(__dirname, `../e2e/${serviceCode}.e2e.js`),
      'utf8',
    )

    const result = data.replace(/_TemplateCode/g, serviceCode)

    fs.writeFile(
      path.join(__dirname, `../e2e/${serviceCode}.e2e.js`),
      result,
      'utf8',
    )

    console.log('replaceText success!')
  } catch (err) {
    console.error(err)
  }
}
async function changeFiles() {
  await copyFiles()
  await replaceText()
}

changeFiles()
