const arr = [1,2,3,[4,5,[6,7],8],9];

const flat = (ar,level=1,levelcounter=0,memo=[]) => {
  for(i = 0; i < ar.length; i++){
    if(Array.isArray(ar[i]) && levelcounter < level){
      levelcounter++;
      flat(ar[i],level,levelcounter,memo);
    }else{
      memo.push(ar[i]);
    }
  }
  return memo;
}
