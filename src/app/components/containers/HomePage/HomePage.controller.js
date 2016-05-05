// @flow
class HomePageController {
  constructor() {
    this.items = [{
      name: 'Test',
      price: 10
    }]

    this.remove = function(item) {
      alert('Remove ' + item);
    }
  }
}

export default HomePageController;
