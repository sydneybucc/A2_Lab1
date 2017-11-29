(function () {
    var carPic = document.querySelectorAll('.data-ref');
    const httpRequst = new XMLHttpRequest();
    var model = document.querySelector('.modelName');
    var price = document.querySelector('.priceInfo');
    var description = document.querySelector('.modelDetails');
    var appliedClass;

    //if (!httpRequest) {
    //alert('giving up, your browser sucks!');
    //return flase;
    //}
    //httpRequest.onreadystatechange = processRequest; //fire this function when things change
    //httpRequest.open('get', './includes/functions.php?carModel=' + this.id);
    //httpRequest.send();
    //}

    //handle the stages of our ajax call
    //let reqIndicator = document.querySelector('.request-state');
    //reqIndicator.textContent = httpRequest.ready.State;
    //if (httpRequest.readyState == XMLHttpRequest.DONE) {
    //  if (httpRequest.status === 200); //request worked, all is good
    //  //debugger
    //  let data = JSON.parse(httpRequest.responseText);
    //  } else {
    //    alert('There was a problem with th request');
    //    }
    //  }
    //}

    //const { modelName, pricing, modeldetails } = data;

    carPic.forEach(function(elem) {
        elem.addEventListener("click", function() {
            var index = this.dataset.roundaboutindex;
            description.innerHTML = index;

      let carModel = document.querySelectorAll('.model').textContent = modelName;
      let carPrice = document.querySelectorAll('.price').innerHTML = pricing;
      let carDescription = document.querySelectorAll('.description').textContent = modelDetails;
      carModel.innerHTML = "carData[index]";
      carPrice.innerHTML = "carData[index]['price']";
      carDescription.innerHTML = "carData[index]['description']";
      console.log(this);
        });
    });
})();
