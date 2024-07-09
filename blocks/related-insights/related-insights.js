import { html, render } from '../../scripts/preact.js';
import ffetch from '../../scripts/ffetch.js';

function Article(props) {
    const { page } = props;
    return html`
      <li>${page.title}</li>`;
  }

function Articles(props) {
  const { pages } = props;
  return html`
    <div>
        <ul>${pages.map(page => html`<${Article} page=${page} />`)}</ul>
    </div>`;
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const pages = await ffetch('/world-view/query-index.json').all();
  console.log(pages);
  window.pages = pages;
  block.innerText = '';
  render(html`<${Articles} pages=${pages} />`, block);
}