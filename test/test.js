/*
*배열의 회전이란 모든 원소를 오른쪽으로 한 칸씩 이동시키고, 마지막 원소는 배열의 맨 앞에 넣는 것을 말합니다.
569815284.94.png

두 배열 arrA와 arrB가 매개변수로 주어질 때, arrA를 회전해 arrB로 만들 수 있으면 true를, 그렇지 않으면 false를 return 하는 solution 함수를 작성해주세요.

제한 조건
arrA는 길이가 1 이상 1,500 이하인 배열입니다.
arrA의 원소는 0 이상 1,500 이하인 정수입니다.
arrB는 길이가 1 이상 1,500 이하인 배열입니다
arrB의 원소는 0 이상 1,500 이하인 정수입니다.
*
*
* 입출력 예
arrA	arrB	return
[7, 8, 10]	[10, 7, 8]	true
[4, 3, 2, 1]	[5, 4, 1, 2]	false
입출력 예 설명
예시 #1
arrA 배열을 한 번 회전하면 arrB와 같아집니다.

예시 #2
arrA 배열은 아무리 회전해도 arrB와 같지 않습니다.
* */



function solution(arrA, arrB) {
    let answer = true;

    if (arrA.length <= 0 || arrB.length <= 0) return false
    if (arrA.length > 1500 || arrB.length > 1500) return false
    if (!arrA.every(n =>  n >= 0 && n <= 1500)) return false
    if (!arrB.every(n =>  n >= 0 && n <= 1500)) return false

    const isEqual = function (a, b)  {
        let ret = true
        if (a.length !== b.length) ret = false

        const sortA = [...a].sort((a,b) => a-b)
        const sortB = [...b].sort((a,b) => a-b)

        ret = sameElements(sortA, sortB)

        return ret
    }

    const sameElements = function (a, b) {
        let ret = true

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]){
                ret = false
                break
            }
        }

        return ret
    }


    const rotate = function (arr) {
        let tmp = arr[0]
        let tmp2
        for (let i = 1; i < arr.length; i++) {
            tmp2 = arr[i]
            arr[i] = tmp
            tmp = tmp2
        }
        arr[0] = tmp

        return arr
    }

    if (!isEqual(arrA, arrB)) return false
    if (sameElements(arrA, arrB)) return true


    let isEqualArray = false
    for (let i = 0; i < arrA.length - 1; i++) {
        if (sameElements(rotate(arrA), arrB)) {
            isEqualArray = true
            break;
        }
    }

    answer = isEqualArray

    return answer;
}
