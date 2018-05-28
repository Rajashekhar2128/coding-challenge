"use strict";  
use(["/libs/sightly/js/3rd-party/q.js"], function (Q) {  
    var childProperties = Q.defer();
    var nodePath = this.contentResourcePath || granite.resource.path;
    granite.resource.resolve(nodePath+ "/" + this.multifieldName).then(function (currentResource) {  
        currentResource.getChildren().then(function(child) {  
        childProperties.resolve(child);  
    });  
});  
    return childProperties.promise;  
});