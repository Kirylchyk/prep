function bubble(tokens) {

    function swap (list, index1, index2) {

        let temp = list[index1];
        list[index1]=list[index2];
        list[index2]=temp;
    }

    function sorting(arr) {

        let n = arr.length;
        for (let j=0; j<n-1; j++ ){
            for (let i=0; i<n-1-j; i++){
                if (arr[i]>arr[i+1]) {
                    swap(arr, i, i+1);
                }
            }
        }
    }
    sorting(tokens);
    return tokens;

}

let tokens = [8,5,6,1,7,4,2];
console.log(bubble(tokens));
