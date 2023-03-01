const fs = require('fs-extra')
const path = require('path')
var containerName = process.argv.slice(2)[0]

if (!containerName) {
  return console.log('Missing container name')
}

console.log(`Making files for ${containerName}`)

async function makeDir() {
  try {
    await fs.mkdir(path.join(__dirname, `../src/Containers/${containerName}`))
    console.log('makeDir success!')
  } catch (err) {
    console.error(err)
  }
}

async function copyFiles() {
  try {
    await fs.copy(
      path.join(__dirname, '../src/Containers/_TemplateContainer'),
      path.join(__dirname, `../src/Containers/${containerName}`),
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
        `../src/Containers/${containerName}/_TemplateContainer.tsx`,
      ),
      path.join(
        __dirname,
        `../src/Containers/${containerName}/${containerName}.tsx`,
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
      path.join(__dirname, `../src/Containers/${containerName}/${fileName}.tsx`),
      'utf8',
    )

    const result = data.replace(/_TemplateContainer/g, containerName)

    fs.writeFile(
      path.join(__dirname, `../src/Containers/${containerName}/${fileName}.tsx`),
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
  await replaceText(containerName)
}

changeFiles()
