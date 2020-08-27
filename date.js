module.exports.getDate=function(){
  let today = new Date();
  let options={weekday:"long",day:"numeric",month:"long"};
  let day=today.toLocaleDateString("en-US",options);
  return day;
}

exports.getDay=getDay;//module.exports or simply exports both are same
var getDay=function(){
  let today = new Date();
  let options={weekday:"long"};
  return today.toLocaleDateString("en-US",options);
}
console.log(module.exports.getDay);
