// 문제 : 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야된다.

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. 수를 요소로 갖는 배열
  // 2. arr[i]는 정수
  // 3. boolean 타입을 리턴해야된다.
  // 4. arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 한다.
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    }
    sum = sum + arr[i];
  }
  return true;
}
