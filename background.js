browser.browserAction.onClicked.addListener((tab) => {

  console.log("yey");

  let createData = {
      type: "detached_panel",
      url: "pages/window.html"
  };

  let creating = browser.windows.create(createData);

  creating.then(() => {
    console.log("The detached panel has been created");
  });

});