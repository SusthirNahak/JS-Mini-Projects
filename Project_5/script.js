let String = "";
function imageUploaded() {
  let file = document.querySelector("input[type=file]")["files"][0];
  let reader = new FileReader();
  reader.onload = function () {
    String = reader.result.replace("data:", "").replace(/^.+,/, "");

    imageStringsep = String;
    // console.log(String);
  };
  reader.readAsDataURL(file);
}

function displayString() {
  //onsole.log("String about to be printed");
  alert(String);
}
