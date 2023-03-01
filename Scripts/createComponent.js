const fs = require('fs-extra')
const path = require('path')
var componentName = process.argv.slice(2)[0]

if (!componentName) {
  return console.log('Missing component name')
}

console.log(`Making files for ${componentName}`)

async function makeDir() {
  try {
    await fs.mkdir(path.join(__dirname, `../src/Components/${componentName}`))
    console.log('makeDir success!')
  } catch (err) {
    console.error(err)
  }
}

async function copyFiles() {
  try {
    await fs.copy(
      path.join(__dirname, '../src/Components/_TemplateComponent'),
      path.join(__dirname, `../src/Components/${componentName}`),
    )
    console.log('copyFiles success!')
  } catch (err) {
    console.error(err)
  }
}

async function renameFiles() {
  try {
    await fs.rename(
      path.join(
        __dirname,
        `../src/Components/${componentName}/_TemplateComponent.tsx`,
      ),
      path.join(
        __dirname,
        `../src/Components/${componentName}/${componentName}.tsx`,
      ),
    )
    console.log('renameFiles success!')
  } catch (err) {
    console.error(err)
  }
}

async function replaceText(fileName) {
  try {
    const data = await fs.readFile(
      path.join(__dirname, `../src/Components/${componentName}/${fileName}.tsx`),
      'utf8',
    )

    const result = data.replace(/_TemplateComponent/g, componentName)

    fs.writeFile(
      path.join(__dirname, `../src/Components/${componentName}/${fileName}.tsx`),
      result,
      'utf8',
    )

    console.log('replaceText success!')
  } catch (err) {
    console.error(err)
  }
}
async function changeFiles() {
  await makeDir()
  await copyFiles()
  await renameFiles()
  await replaceText('index')
  await replaceText(componentName)
}

changeFiles()
