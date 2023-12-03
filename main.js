const input = document.querySelector("#input");
const inputSecond = document.querySelector("#inputSecond");
const submit = document.querySelector("#submit");
const submitSecond = document.querySelector("#submitSecond");
const inputError = document.querySelector("#inputError");
const inputErrorSecond = document.querySelector("#inputErrorSecond");

const btnFirst = document.querySelector(".btnFirst");
const btnSecond = document.querySelector(".btnSecond");
const btnThird = document.querySelector(".btnThird");
const btnFourth = document.querySelector(".btnFourth");
const btnFifth = document.querySelector(".btnFifth");
const btnSixth = document.querySelector(".btnSixth");

const answerContainerFirst = document.querySelector("#answerContainerFirst");
const answerContainerSecond = document.querySelector("#answerContainerSecond");
const answerContainerThird = document.querySelector("#answerContainerThird");
const answerContainerFourth = document.querySelector("#answerContainerFourth");
const answerContainerFifth = document.querySelector("#answerContainerFifth");
const answerContainerSixth = document.querySelector("#answerContainerSixth");

const plusIconFirst = document.querySelector("#plusIconFirst");
const plusIconSecond = document.querySelector("#plusIconSecond");
const plusIconThird = document.querySelector("#plusIconThird");
const plusIconFourth = document.querySelector("#plusIconFourth");
const plusIconFifth = document.querySelector("#plusIconFifth");
const plusIconSixth = document.querySelector("#plusIconSixth");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  if (input.value === "") {
    inputError.style.display = "block";
  }
  input.focus();
});

submitSecond.addEventListener("click", (e) => {
  e.preventDefault();
  inputSecond.value = "";
  if (inputSecond.value === "") {
    inputErrorSecond.style.display = "block";
  }
  inputSecond.focus();
});

btnFirst.addEventListener("click", () => {
  answerContainerFirst.classList.toggle("open");
  plusIconFirst.classList.toggle("fa-times");

  if (answerContainerFirst.classList.contains("open")) {
    answerContainerSecond.classList.remove("open");
    answerContainerThird.classList.remove("open");
    answerContainerFourth.classList.remove("open");
    answerContainerFifth.classList.remove("open");
    answerContainerSixth.classList.remove("open");
  }

  if (plusIconFirst.classList.contains("fa-times")) {
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnSecond.addEventListener("click", () => {
  answerContainerSecond.classList.toggle("open");
  plusIconSecond.classList.toggle("fa-times");

  if (answerContainerSecond.classList.contains("open")) {
    answerContainerFirst.classList.remove("open");
    answerContainerThird.classList.remove("open");
    answerContainerFourth.classList.remove("open");
    answerContainerFifth.classList.remove("open");
    answerContainerSixth.classList.remove("open");
  }

  if (plusIconSecond.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnThird.addEventListener("click", () => {
  answerContainerThird.classList.toggle("open");
  plusIconThird.classList.toggle("fa-times");

  if (answerContainerThird.classList.contains("open")) {
    answerContainerFirst.classList.remove("open");
    answerContainerSecond.classList.remove("open");
    answerContainerFourth.classList.remove("open");
    answerContainerFifth.classList.remove("open");
    answerContainerSixth.classList.remove("open");
  }

  if (plusIconThird.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnFourth.addEventListener("click", () => {
  answerContainerFourth.classList.toggle("open");
  plusIconFourth.classList.toggle("fa-times");

  if (answerContainerFourth.classList.contains("open")) {
    answerContainerFirst.classList.remove("open");
    answerContainerSecond.classList.remove("open");
    answerContainerThird.classList.remove("open");
    answerContainerFifth.classList.remove("open");
    answerContainerSixth.classList.remove("open");
  }

  if (plusIconFourth.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnFifth.addEventListener("click", () => {
  answerContainerFifth.classList.toggle("open");
  plusIconFifth.classList.toggle("fa-times");

  if (answerContainerFifth.classList.contains("open")) {
    answerContainerFirst.classList.remove("open");
    answerContainerSecond.classList.remove("open");
    answerContainerThird.classList.remove("open");
    answerContainerFourth.classList.remove("open");
    answerContainerSixth.classList.remove("open");
  }

  if (plusIconFifth.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconSixth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconSixth.classList.add("fa-plus");
  }
});

btnSixth.addEventListener("click", () => {
  answerContainerSixth.classList.toggle("open");
  plusIconSixth.classList.toggle("fa-times");

  if (answerContainerSixth.classList.contains("open")) {
    answerContainerFirst.classList.remove("open");
    answerContainerSecond.classList.remove("open");
    answerContainerThird.classList.remove("open");
    answerContainerFourth.classList.remove("open");
    answerContainerFifth.classList.remove("open");
  }

  if (plusIconSixth.classList.contains("fa-times")) {
    plusIconFirst.classList.remove("fa-times");
    plusIconSecond.classList.remove("fa-times");
    plusIconThird.classList.remove("fa-times");
    plusIconFourth.classList.remove("fa-times");
    plusIconFifth.classList.remove("fa-times");

    plusIconFirst.classList.add("fa-plus");
    plusIconSecond.classList.add("fa-plus");
    plusIconThird.classList.add("fa-plus");
    plusIconFourth.classList.add("fa-plus");
    plusIconFifth.classList.add("fa-plus");
  }
});
