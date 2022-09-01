
  // slider

  $('.hero--slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true,
    fade: true
  });


  //tooltip
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




// countdown js
$(function(){
    var endDate = "June 7, 2087 15:02:25";

    $('.countdown.simple').countdown({ date: endDate});
    // styled 1
    $('.countdown.styled').countdown({
      date: endDate,
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + "<span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + "<span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + "<span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + "<span>sec</span></div>");
      }
    });

// second coundown js
  $('.countdown.styled-2').countdown({
      date: endDate,
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + "<span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + "<span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + "<span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + "<span>sec</span></div>");
      }
    });
  });
