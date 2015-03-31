module.exports.parseHTML = function (data) {
  console.log(data);
  return String(data);
};
// var parseHTML = function (data, options)  {
//     var parser = new DOMParser()
//     var el = parser.parseFromString(data, "text/xml");
//     return  options.fn(htmlDoc);
//   };