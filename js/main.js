angular
    .module('Genecards', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $sce) {
        var vm = this;
        vm.url = "";

        vm.showContent = function (geneKey) {
            vm.url = $sce.trustAsResourceUrl("http://www.genecards.org/cgi-bin/carddisp.pl?gene="+geneKey+"&keywords="+geneKey);
        };
    })
    .controller('LeftCtrl', function ($scope) {
        var vm = this;
        vm.geneKeys = GeneKeys;
    });

