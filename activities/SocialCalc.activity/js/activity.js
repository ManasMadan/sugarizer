define([
  "sugar-web/activity/activity",
  "socialcalc/dist/SocialCalc",
], function (activity) {
  // Manipulate the DOM only when it is ready.
  requirejs(
    ["domReady!", "socialcalc/dist/SocialCalc"],
    function (doc, SocialCalc) {
      // Initialize the activity.
      activity.setup();
      var socialCalcControl = new SocialCalc.SpreadsheetControl();
      socialCalcControl.InitializeSpreadsheetControl(
        document.getElementById("socialcalc"),
        2000,
        1000,
        0
      );
    }
  );
});
