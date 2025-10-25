export function generateThreeUniqueNumber(recipesData, excludeId) {
  const randomNumberArr = [];
  while (randomNumberArr.length < 3) {
    const randomNumber = Math.floor(Math.random() * recipesData.length) + 1;
    if (
      !randomNumberArr.includes(randomNumber) &&
      randomNumber !== Number(excludeId)
    ) {
      randomNumberArr.push(randomNumber);
    }
  }
  return randomNumberArr;
}
