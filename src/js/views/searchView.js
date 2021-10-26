import icons from './../../img/icons.svg';
import View from './view';
class SearchView extends View {
  _perentElement = document.querySelector('.search');

  getQuery() {
    const query = this._perentElement.querySelector('.search__field').value;
    this.clearInput();
    return query;
  }

  clearInput() {
    this._perentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._perentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
