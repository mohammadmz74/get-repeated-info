export function getRepeatedInfo(number) {
  const num = {
    1: "1",
    2: "22",
    3: "333",
    4: "4444",
    5: "55555",
    6: "666666",
    7: "7777777",
    8: "88888888",
    9: "999999999",
  };
  console.log((number = num[number]));
}
getRepeatedInfo(5);
