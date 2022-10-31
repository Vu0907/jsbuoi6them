function Bai5() {
  var soN = document.getElementById("soN").value;
  var result = "";

  for (var i = 2; i <= soN; i++) {
    var check = KiemtraSNT(i);
    if (check) {
      result += i + " ";
    }
  }
  document.getElementById("infoSonguyento").innerHTML = result;
}

function KiemtraSNT(number) {
  var KiemtraSNT = true;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      KiemtraSNT = false;
      break;
    }
  }
  return KiemtraSNT;
}
