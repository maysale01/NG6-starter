import { default as Store } from '../../../services/Store';
import { addItem, removeItem } from '../../../actionCreators/items';

class itemsPageController {
  constructor($scope) {
    "ngInject"; // Inject $scope properly

    this.name = 'itemsPage';
    this.items = Store.getState().items.toJS();

    this.unsubscribeFn = Store.subscribe(() => {
      this.items = Store.getState().items.toJS();
    });

    // Remove our listener to the store
    $scope.$on('$destroy', () => {
      this.unsubscribeFn();
    });
  }

  promptAddItem() {
      let price = prompt("Enter an item price");
      if (price) {
        Store.dispatch(addItem(price));
      }
  }

  promptRemoveItem(item) {
    if(confirm(`Remove ${item.name}?`)) {
      Store.dispatch(removeItem(item.id));
    }
  }
}

export default itemsPageController;
