function ComponentExampleController() {
}

angular.module('app')
  .component('componentExample', {
    templateUrl: 'app/componentExample.html',
    controller: ComponentExampleController,
    bindings: {
      param: '@'
    }
  });
