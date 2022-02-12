const { httpGet } = require('./mock-http-interface');

const generateFormatedResult = async (url) => {
  const response = await httpGet(url);
  const { status, body } = response;
  const message = JSON.parse(body).message;
  if (status === 200) {
    return { 'Arnie Quote': message };
  } else {
    return { 'FAILURE': message };
  }
}

const getArnieQuotes = async (urls) => {
  let results = [];
  await Promise.all(urls.map(async (url) => {
    const result = await generateFormatedResult(url);
    results.push(result);
  }));
  return results;
};

module.exports = {
  getArnieQuotes,
};
