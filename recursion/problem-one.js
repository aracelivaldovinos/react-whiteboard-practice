const recurseReverse = (string) => {
  const array = string.split(" ")
  if (string === "") {
    return "";
  } else {
    return recurseReverse(string.substring(1)) + string[0];
  }
}