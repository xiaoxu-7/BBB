// index.js
var rand,sum;
function createRand(){
  rand=[];
  for(var i=0;i<7;i++){
    var r=((Math.random()*30).toFixed(0)*1)+1;
    rand.push(r);
    console.log(rand[i]);
  }
  console.log(sum);
};
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:sum
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:sum
    })
  }
})
