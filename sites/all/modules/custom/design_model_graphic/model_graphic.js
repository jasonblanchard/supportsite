(function($) {
  Drupal.behaviors.designModelGraphic = { 
    attach: function(context, settings) {

      // Create the paper canvas from a DOM element.
      var paperDiv = $('.pane-main-menu .pane-content')[0];

      paper = Raphael(paperDiv, 600, 300);

      // Create the middle bubble.
      var model = paper.circle(paper.width * .30, paper.height * .5, 60);

      model.attr("fill", "rgb(213, 73, 73)");
      model.attr("stroke", "rgb(116, 39, 39)");

      modelLabel = paper.text(model.attrs.cx, model.attrs.cy, "Design\nModel");
      modelLabel.attr("font", "20px 'Lucida Grande'");

      // Get the menu links.
      var planLink = $('.menu li').children()[0];

      // Function to add the bubbles.
      function createPhaseBubble(link, xval, yval) {

        var phase = paper.circle(xval, yval, 40);

        phase.attr("fill", "rgb(129, 179, 157)");
        phase.attr('href', '#');

        label = paper.text(phase.attrs.cx, phase.attrs.cy, link.text);
        label.attr("font", "20px", "Lucida Grande");
        label.attr('href', '#');

        $(label.node).click(function() {
          link.click();
          return false;
        });

        $(phase.node).click(function() {
          link.click();
          return false; 
        });

        line = paper.path('M' + model.attrs.cx + ' ' +  model.attrs.cy + 'L' + phase.attrs.cx + ' ' + phase.attrs.cy)
        line.toBack();
      }

      // Create a bubble for each phase.
      createPhaseBubble(planLink, paper.width * .50, paper.height * .15, 40);

    }
  }
})(jQuery);
