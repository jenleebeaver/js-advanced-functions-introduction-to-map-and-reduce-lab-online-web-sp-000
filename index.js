// Your code here
//1.
function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++){
    r.push(-1 * src[i])
  }
  return r
}

//2.
function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++){
    r.push(src[i])
  }
  return r
}

//3.
function mapToDouble(src) {
  let r = []
  for (let i = 0; i < src.length; i++){
    r.push(2 * src[i])
  }
  return r
}

//4.
function mapToSquare(src){
  let r = []
  for (let i = 0; i < src.length; i++){
    // r.push(src[i] * src[i])
    r.push(src[i]**2)
  }
  return r
}

//5.
function reduceToTotal(src, startingPoint = 0){
  let r = []
  for (let i = 0; i < src.length; i++){

  }
}
