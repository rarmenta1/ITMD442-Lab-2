const db = new Map();

db.set('a593c7cf-889d-4e81-bf0a-76cfd2d9810d', {text: 'This is contact 1 text', id: 'a593c7cf-889d-4e81-bf0a-76cfd2d9810d'})
db.set('7054c36e-d85e-41d3-8fd8-a996e0cac276', {text: 'This is contact 2 text', id: '7054c36e-d85e-41d3-8fd8-a996e0cac276'})

const repo = {
  findAll: () => Array.from(db.values()),
};

module.exports = repo;