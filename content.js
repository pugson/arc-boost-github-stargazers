const repo = window.location.pathname;
const baseRepo = repo.match(/\/([^/]+)\/([^/]+)/)[0];
const stargazers = `https://github.com${baseRepo}/stargazers`
const container = document.querySelector('.pagehead-actions li:last-child .starring-container');


if (container) {
  const extraButton = document.createElement('a');
  extraButton.setAttribute("href", stargazers);
  extraButton.classList.add('btn', 'btn-sm');
  extraButton.text = '👀';

  container.appendChild(extraButton);
}
