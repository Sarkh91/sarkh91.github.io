/*
* 문제 설명
각 변의 길이가 모두 자연수이고, 넓이가 s인 직사각형을 만드는 방법은 여러 가지가 있을 수 있습니다. 이때, 만들 수 있는 직사각형 중, 둘레 길이의 최솟값을 구하려 합니다. 예를 들어 s = 6인 경우 다음과 같이 두 가지 직사각형을 만들 수 있으며, 둘레 길이의 최솟값은 10이 됩니다.

직사각형의최소둘레_1.png

직사각형의 넓이 s가 매개변수로 주어질 때, 만들 수 있는 직사각형 중 둘레 길이의 최솟값을 return 하도록 solution 함수를 완성해주세요.

제한사항
s는 1 이상 100,000 이하의 자연수입니다.
*
*
* 입출력 예
s	result
6	10
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.
* */

function solution(s) {
    let answer = (s * 2) + 2
    let dimension = 0

    for (let i = s; i >= 1; i--) {
        if (s % i === 0) {
            dimension = (i * 2) + ((s / i) * 2)
            if (answer > dimension) answer = dimension
        }
    }

    return answer;
}

console.log(solution(6))