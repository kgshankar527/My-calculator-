function doGet() {
      return HtmlService.createHtmlOutputFromFile("index")
          .setTitle("Smart Calculator")
              .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
