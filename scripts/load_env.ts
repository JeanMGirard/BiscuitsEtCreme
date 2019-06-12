let fs = require('fs');
let yargs  = require('yargs');

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object

const environment = yargs.argv.environment;
const isProd = environment === 'prod';
let targetPath = `./src/environments/environment.ts`;
if(isProd) targetPath = `./src/environments/environment.${environment}.ts`;

const envConfigFile = `
export const environment = {
  production: ${isProd},
  googleApiKey: "${process.env.GOOGLEAPI_KEY}"
};
`
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});