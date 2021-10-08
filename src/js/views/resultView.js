import icons from '../../img/icons.svg';
import View from './view';
import previewView from './previewView';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _messageError = ' please try again';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join(' ');
  }
}
export default new ResultView();
