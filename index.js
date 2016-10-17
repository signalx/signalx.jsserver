(function ($, window, undefined) {
	if(!window.signalx){
		throw "Please include signalx script first";
		return;
		}
      signalx.server = function (n, f) {        
        if (n && f) {
            haservers = true;
            var nname = toCamelCase(n);
            signalx.server[nname] = (function (f, n) {
                return function (message, retTo, sender, messageId) {
                  return  chatserversend(n, message, retTo, sender, messageId,f);
                };
            })(f, nname);
            nname = toUnCamelCase(n);
            signalx.server[nname] = (function (f, n) {
                return function (message, retTo, sender, messageId) {
                    return chatserversend(n, message, retTo, sender, messageId, f);
                };
            })(f, nname);
        } else {
            signalx.error.f({
                description: "error registering server handler"
            });
        }
    };
 
}(window.jQuery, window));