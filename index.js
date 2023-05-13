const {ContainerBuilder, YamlFileLoader} = require('node-dependency-injection');
const path = require('path');

async function main() {
  let container = new ContainerBuilder()
  let loader = new YamlFileLoader(container)
try {
  const filePath = path.resolve(__dirname, './di.yml')
  await loader.load(filePath)
  
} catch (error) {
  console.log('------', error)
  
}
  
  const greeter = container.get('greeter');
  
  console.log(greeter.greet());
}

main();