function sort(){
    let arr = [];
    var n= Number(window.prompt("Enter the length of the array"));
    for (let i = 0; i < n; i++) {
        let num =Number(window.prompt("Enter the number " + Number(i+1)));
        arr.push(num);
    }
    arr.sort((a, b) => a-b);
    alert("THis is your ascending order array "+arr);
}