const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);


// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
let contentGroth = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedGroth = contentGroth.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedGroth = bumpedGroth.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedGroth);

let contentPlonk = fs.readFileSync("./contracts/Plonk_Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedPlonk = contentPlonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedPlonk = bumpedPlonk.replace(verifierRegex, 'contract Plonk_Multiplier3Verifier');

fs.writeFileSync("./contracts/Plonk_Multiplier3Verifier.sol", bumpedPlonk);
