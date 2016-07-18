//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////
// Place all your Javascript code inside this "document ready" function so
// it does not run until the DOM is ready for Javascript manipulation.
$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

  // Create a function to listen for clicks on the "login" button.
    $('.login-btn').on('click', function(event){
      console.log(event);
      var targetElement = event.target;
      var container = targetElement.parentElement.parentElement;
      //      1. When a user clicks the "login" button, hide the login
      //          form elements on the page.
      $(container).find('#login-form').each(function(index, el){
        if ($(el).is(':visible')){
          $(el).fadeOut();
          targetElement = '#login-form';
        }
      })
      //      2. Fill the user's first and last name into `div.user-info`.
      $(container).find('.user-info').each(function(index, el){
        var userFirstName = userInfo.firstName;
        var userLastName = userInfo.lastName;
        $('.first-name').text(userFirstName);
        $('.last-name').text(userLastName);
        console.log(userFirstName, userLastName);
        if ($(el).is(':hidden')){
          $(el).fadeIn();
          targetElement = '.user-info';
        };
      })
    })


    // Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    $('.view-details').on('click', function(event){
        console.log(event);
        var targetElement = event.target;
        var container = targetElement.parentElement.parentElement;
        //      2. Within that parent, find all the elements that have the class `details`.
        $(container).find('.details').each(function(index, el){
          //      3. Toggle visibility of all the elements within that parent with the class `details`.
            if ($(el).is(':visible')){
                $(el).fadeOut();
                targetElement.innerText = 'View Details';
            }
            //      4. Change the text of the "view details" button to read "hide details" so the user
            //          understands they can hide the text again.
            else {
                $(el).fadeIn();
                targetElement.innerText = 'Hide Details'
            }
        });
    });

    // Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    $('.vote').on('click', function(event){
      console.log(event);
      voteCounts.total++;
      var targetElement = event.target;
      //      2. When a button is clicked, look at the `data-vote` attribute to determine
      //          what the user is voting for ("great" or "greatest").

      if ($(targetElement).data('vote') === 'great'){
      //      3. Increment the counter for whichever vote talley is affected.
      voteCounts.great++;
      }

      else {
      //      3. Increment the counter for whichever vote talley is affected.
        voteCounts.greatest++;
      }

      //      4. Determine the respective percentages (out of 100) for each progress bar.
      var greatPercent = (voteCounts.great/voteCounts.total*100);
      var greatestPercent = (voteCounts.greatest/voteCounts.total*100);

      //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
      $('.great-progress').css('width', greatPercent + '%');
      $('.greatest-progress').css('width', greatestPercent + '%');
      console.log(voteCounts.great, voteCounts.greatest, voteCounts.total, greatPercent, greatestPercent);
    })
});
