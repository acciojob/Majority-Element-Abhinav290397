//your code here
const majorElement = (arr, n) => {
	const obj = {};
	for(let i=0;i<n;i++){
		if(obj[arr[i]]){
			obj[arr[i]]++;
		}
		else{
			obj[arr[i]] = 1;
		}
	}
	for(let i in obj){
		if(obj.i > Math.floor(n/2)){
			return i;
		}
		return -1;
	}
}