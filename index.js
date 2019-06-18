const maxBy = require('lodash/maxBy');
const repeat = require('lodash/repeat');

module.exports = {
  renderTable: (data) => {
    let maxLen = maxBy(data, (r) => r[0].length)[0].length;
    data = data.map(
      (r) => `<code>${r[0]}: ${repeat(' ', maxLen - r[0].length)}${r[1]}</code>`
    );
    maxLen = maxBy(data, 'length').length;
    let result = data.join('\n');
    result =
      `\n<code>${repeat('-', maxLen - 13)}</code>\n` +
      result +
      `\n<code>${repeat('-', maxLen - 13)}</code>`;
    return result;
  },
};
