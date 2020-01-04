const core = require('@actions/core');

async function run() {

  try {

    core.debug('action run');
  } catch (error) {
    core.setFailed("Failed");
  }

}

module.exports = run;