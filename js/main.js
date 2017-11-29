(function () {
    var carPic = document.querySelectorAll('.data-ref');
    var model = document.querySelector('.modelName');
    var price = document.querySelector('.priceInfo');
    var description = document.querySelector('.modelDetails');
    var appliedClass;
    carPic.forEach(function(elem) {
        elem.addEventListener("click", function() {
            var index = this.dataset.roundaboutindex;
            description.innerHTML = index;

      let carModel = document.querySelectorAll('.model');
      let carPrice = document.querySelectorAll('.price');
      let carDescription = document.querySelectorAll('.description');
      carModel.innerHTML = "carData[index]";
      carPrice.innerHTML = "carData[index]['price']";
      carDescription.innerHTML = "carData[index]['description']";
      console.log(this);
        });
    });
})();
