const chalk = require('chalk');

function heyworld() {
    console.log(chalk.green('HELLO'),chalk.blue('BLUE'));
}

module.exports = {
    heyworld: heyworld
}