var requestObj = {
  url: 'https://api.github.com/repos/phinze/homebrew-cask/contents/Casks',
  method: 'GET',
  headers: {
    'Accept': 'application/vnd.github.beta+json',
    'User-Agent': 'A test application for homebrew cask dotfile'
  }
};

module.exports = requestObj;