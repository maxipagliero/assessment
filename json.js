const json = {
    "title": "Report an Issue",
    "description": "This form is designed to report issues and propose suggestions for improvement. Your feedback is invaluable in helping us make our services better and resolve issues promptly. Please complete the form below in as much detail as possible.",
    "logoPosition": "right",
    "completedHtml": "<div style=\"max-width:688px;text-align:center;margin:16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thank you.</h4>\n<p>Your message has been sent successfully.</p>\n</div>\n\n</div>\n\n",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "issue-report",
        "elements": [
         {
          "type": "text",
          "name": "issue-title",
          "width": "100%",
          "minWidth": "auto",
          "title": "Title"
         },
         {
          "type": "comment",
          "name": "issue-details",
          "width": "100%",
          "minWidth": "auto",
          "title": "Details",
          "maxLength": 512,
          "rows": 6,
          "placeholder": "Introduce the problem and expand on what you put in the title. Describe what you tried, what you expected to happen, and what actually resulted.",
          "autoGrow": true,
          "allowResize": false
         },
         {
          "type": "rating",
          "name": "issue-priority",
          "title": "Level of priority",
          "autoGenerate": false,
          "rateCount": 3,
          "rateValues": [
           {
            "value": 1,
            "text": "Low"
           },
           {
            "value": 2,
            "text": "Medium"
           },
           {
            "value": 3,
            "text": "High"
           }
          ]
         },
         {
          "type": "file",
          "name": "attached-files",
          "title": "Attachments",
          "allowMultiple": true,
          "filePlaceholder": "Click the button below to select files to upload."
         },
         {
          "type": "text",
          "name": "email",
          "width": "100%",
          "minWidth": "auto",
          "title": "Email address"
         }
        ],
        "width": "100%"
       }
      ]
     }
    ],
    "showQuestionNumbers": "off",
    "questionDescriptionLocation": "underInput",
    "questionErrorLocation": "bottom",
    "completeText": "Submit",
    "widthMode": "static",
    "width": "720",
    "fitToContainer": true,
    "headerView": "advanced"
   }