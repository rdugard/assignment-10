document.getElementById("halloween").onclick = useHalloween;
document.getElementById("thanksgiving").onclick = useThanksgiving;
document.getElementById("hanukkah").onclick = useHanukkah;
document.getElementById("christmas").onclick = useChristmas;

function useHalloween () {
  document.getElementById("buttonPic").src = "images/pumpkin-48.png";
}

function useThanksgiving () {
  document.getElementById("buttonPic").src = "images/thanksgiving-48.png";
}

function useHanukkah () {
  document.getElementById("buttonPic").src = "images/dreidel-48.png"
}

function useChristmas() {
	document.getElementById("buttonPic").src = "images/gingerbreadman-48.png";
}
