import icons from '../../img/icons.svg';
import View from './view';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const gotoPage = +btn.dataset.goto;
      if (!gotoPage) return;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.res_per_page
    );

    if (currPage === 1 && numPages > 1)
      return ` <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${currPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;

    if (currPage < numPages)
      return ` <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currPage - 1}</span>
  </button>
  <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
    <span>Page ${currPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;

    if (currPage === numPages && currPage > 1)
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currPage - 1}</span>
  </button>`;

    if (numPages === 1) return '';
  }

  _generateMarkupPrev(page) {
    return `<button data-goto="${
      page - 1
    }" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${page - 1}</span>
</button>`;
  }
}

export default new PaginationView();
