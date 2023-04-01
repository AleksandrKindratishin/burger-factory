function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  

  var links = document.querySelectorAll('.smooth-scroll');
    
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();

            var targetElement = document.querySelector(this.hash);
            var scrollDistance = targetElement.offsetTop;

            var duration = 300; // длительность анимации в миллисекундах
            var startingPosition = window.pageYOffset; // начальная позиция прокрутки

            var startTime = null;

            function scrollToTarget(timestamp) {
                if (!startTime) startTime = timestamp;

                var progress = timestamp - startTime;
                var percentage = Math.min(progress / duration, 1);

                var currentPosition = startingPosition + (scrollDistance * percentage);

                window.scrollTo(0, currentPosition);

                if (progress < duration) {
                    window.requestAnimationFrame(scrollToTarget);
                }
            }

            window.requestAnimationFrame(scrollToTarget);
        });
    }



    var detailsBtns = document.querySelectorAll('.list__details-btn');
    var popup = document.querySelector('.popup-details');
    var closeBtn = popup.querySelector('.close-btn');
    
    detailsBtns.forEach(function(detailsBtn) {
      detailsBtn.addEventListener('click', function() {
        popup.classList.add('show');
      });
    });
    
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('show');
    });