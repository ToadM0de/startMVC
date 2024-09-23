import * as MODEL from "../model/model.js";

function listAlNames() {}

function initListeners() {
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    MODEL.changePage(btnID);
  });
}

$(document).ready(function () {
  MODEL.changePage("home");
  initListeners();
});
