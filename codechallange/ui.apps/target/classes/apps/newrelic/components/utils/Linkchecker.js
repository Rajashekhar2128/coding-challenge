"use strict";
use(function () {
 var retLink=this.link;
 if (retLink != null && retLink.substr(0,1)=='/'){
     if(getExtension(retLink) == ""){
		retLink=retLink+'.html';
     }
 }else if(retLink != null && retLink.substr(0,3)=='www'){
     retLink='http://'+retLink;
 }
 return retLink;
});

function getExtension(link)
{
  var ext = /^.+\.([^.]+)$/.exec(link);
  return ext == null ? "" : ext[1];
}