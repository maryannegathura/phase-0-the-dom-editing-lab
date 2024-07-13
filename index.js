// index.test.js

const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the contents of index.html
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('index.html', () => {
  let dom;
  let document;

  beforeEach(() => {
    // Create a new JSDOM instance with the HTML content
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it('contains a <body> tag', () => {
    expect(document.querySelector('body')).to.exist;
  });

  it('contains a </body> tag', () => {
    expect(document.querySelector('body').innerHTML).to.include('</body>');
  });

  it('contains an <h1> tag', () => {
    expect(document.querySelector('h1')).to.exist;
  });

  it('contains a <p> tag', () => {
    expect(document.querySelector('p')).to.exist;
  });

  it('within the <p>, it contains a <strong> tag', () => {
    const pTag = document.querySelector('p');
    expect(pTag.querySelector('strong')).to.exist;
  });

  it('within the <p>, it contains an <em> tag', () => {
    const pTag = document.querySelector('p');
    expect(pTag.querySelector('em')).to.exist;
  });

  it('within the <p>, it contains an <a> tag with the correct href', () => {
    const aTag = document.querySelector('p a');
    expect(aTag).to.exist;
    expect(aTag.href).to.equal('https://developer.mozilla.org/en-US/docs/Web/HTML');
  });

  it('contains a <table> tag', () => {
    expect(document.querySelector('table')).to.exist;
  });
});
