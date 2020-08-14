// CHECKBOX LIST WITH PROGRESS BAR AND LOCAL STORAGE
var checkboxsets = document.querySelectorAll(".checklist-progressbar");

// LOOP THROUGH ALL SETS OF CHECKBOX LISTS WITH PROGRESS BARS
for (var i = 0, ilen = checkboxsets.length; i < ilen; i++) {
  var checkboxinputs = checkboxsets[i].querySelectorAll(
    "input[type='checkbox']"
  );

  // add event listener to detect checkbox changes
  for (var j = 0, jlen = checkboxinputs.length; j < jlen; j++) {
    // if checkbox has an id, initialize local storage for all with key = id
    var box = checkboxinputs[j];
    if (box.hasAttribute("id")) {
      setupLocalStorage(box);
    }

    // on click event listener
    box.addEventListener("click", function (e) {
      updateProgressbar();
    });
  }

  // SETUP LOCAL STORAGE
  function setupLocalStorage(box) {
    var storageId = box.getAttribute("id");
    var oldVal = localStorage.getItem(storageId);

    // initial sync with local storage
    if (oldVal == "true") {
      box.checked = true;
    } else {
      box.checked = false;
    }

    // update local storage whenever a checkbox value is changed
    box.addEventListener("change", function () {
      localStorage.setItem(storageId, this.checked);
    });
  }
}

// UPDATE PROGRESS BAR
function updateProgressbar() {
  // LOOP THROUGH ALL SETS
  for (var i = 0, ilen = checkboxsets.length; i < ilen; i++) {
    var checkboxinputs = checkboxsets[i].querySelectorAll(
      "input[type='checkbox']"
    );
    var progressbar = checkboxsets[i].querySelector(".progressbar-inner");
    var progressbarvalue = checkboxsets[i].querySelector(".progressbar-value");
    var progresspercentageNum = 0;
    var progresspercentage = "0%";

    var checkedboxes = 0;
    for (var k = 0, klen = checkboxinputs.length; k < klen; k++) {
      if (checkboxinputs[k].checked) {
        checkedboxes++;
      }
    }

    progresspercentageNum = (checkedboxes / checkboxinputs.length) * 100;
    progresspercentage = (checkedboxes / checkboxinputs.length) * 100 + "%";

    if (progresspercentageNum < 50) {
      progressbar.style.backgroundColor = "#EE6D72";
    } else if (progresspercentageNum < 100) {
      progressbar.style.backgroundColor = "#F5AD6D";
    } else {
      progressbar.style.backgroundColor = "#63BDA4";
    }
    progressbar.style.width = progresspercentage;
    progressbarvalue.innerHTML = Math.round(progresspercentageNum) + "%";
  }
}

// INIT UPDATE OF THE PROGRESS BAR
updateProgressbar();
