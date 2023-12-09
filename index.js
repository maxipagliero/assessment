import { Model } from "survey-core";

const survey = new Survey.Model(json);
survey.applyTheme(themeJson);

survey.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://prod-45.westeurope.logic.azure.com:443/workflows/389aeabb9edc43e691053a983f90ee42/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4MfBpDT87ZPDhW-HlM_4RKPOcx-z4jIJti1xAQLYgaE");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status == 200) {
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
      }
    };
    xhr.send(JSON.stringify(sender.data));
  });
  

$("#surveyElement").Survey({ model: survey });



