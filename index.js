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
    r.push(Math.power(2, src[i]))
  }
  return r
}
