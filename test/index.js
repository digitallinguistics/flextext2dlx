const flextext2dlx = require(`../src`);
const { readFile } = require(`fs`).promises;
const path         = require(`path`);

describe(`flextext2dlx`, () => {

  let xml;

  beforeAll(async () => {
    const filepath = path.join(__dirname, `test.xml`);
    xml = await readFile(filepath, `utf8`);
  });

  it(`produces a valid DLx text`, () => {
    const dlx = flextext2dlx(xml);
  });

});
