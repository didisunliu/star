var hnUtil = (function(){
	return {
		/**
		 * 常用的正则验证表达式<br>
		 */
		regType : {
			/**数字类型*/
			digit : /^[\d]+$/,
			/**4-67位数字*/
			numericString : /^[\d]{4,12}$/,
			/**数字类型*/
			decimal : /^[-]?([\d]+|[\d]+\.[\d]+)$/,
			/**正数类型*/
			decimalPlus : /^([\d]+|[\d]+\.[\d]+)$/,
			/**英文单词*/
			english : /^[A-Za-z]+$/,
			/**中文字*/
			chinese : /^[\u0391-\uFFE5]+$/,
			containChinese : /[\u0391-\uFFE5]/g,
			/**大小写字母、数字和下划线格式*/
			username : /^[\w]+$/,
			/**特殊字符除外的所有字符*/
			character : /^[\w\.\s@\-\(\)\[\]\{\}`~!#\$&\*\+\/'";:,_=<>]+$/,
			/**备注里面的特殊字符*/
			noteChar : /[^&]+/,
			/**电子邮箱格式(someName@someWebName.domainName)*/
			email :  /^((([,;\!#$%&'\*\+\-\/=\?`\^\~\[\]\(\)\_\{\}%])+)|((([,;\!#$%&'\*\+\-\/=\?`\^\~\[\]\(\)\_\{\}% a-zA-Z0-9])+\.?)*[a-zA-Z0-9,;\!#$%&'\*\+\-\/=\?`\^\~\[\]\(\)\{\}%]+)+)+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			/**电话格式(0731-88888888或者073188888888)*/
			phone : /^\d{3,4}[-]?\d{7,8}$/,
			/**移动电话格式(189-88888888、18988888888、0189-88888888、018988888888)*/
			mobile : /^0?1[\d]{2}[-]?[\d]{8}$/,
			/**url连接*/
			url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
			/**六位数邮政编码*/			
			zip : /^[1-9]\d{5}$/,
			/**整数*/
			integer : /^[-\+]?\d+$/,
			/**正整数*/
			positiveInteger : /^\d+$/,
			/**小数*/
			"double" : /^[-\+]?\d+(\.\d+)?$/,
			/**IP地址*/
			ipAddress : /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,
			/**ipv6地址*/
			ipv6Address : /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/ ,
			/**短日期格式(YYYY-MM-DD)**/
			shortDate : /^[1-9]\d{3}-[0-1]?\d-([0-2]?\d|3[0-1])$/,
			/***时间格式 (HH:MM:SS)*/
			time : /^([0-5]?\d|60):([0-5]?\d|60):([0-5]?\d|60)$/,
			/**长日期格式（YYYY-MM-DD HH:MM:SS）*/
			datetime : /^[1-9]\d{3}-[0-1]?\d-([0-2]?\d|3[0-1]) ([0-5]?\d|60):([0-5]?\d|60):([0-5]?\d|60)$/
		},
		getScript : function(url,async,callback){
			if(typeof async === "undefined") async = true ;
			if(typeof $ === 'undefined'){
				this.includeScript(url,callback);
			}else{
				if(!async)$.ajaxSetup({async : async});
				$.getScript(url,callback);
				if(!async)$.ajaxSetup({async : true});
			}
		},
		includeScript : function(url,callback){
			var script = document.createElement("script");
     		script.setAttribute("type","text/javascript");
     		var head = document.getElementsByTagName("head")[0];
     		var hasAppend = false ;
     		script.onload  = script.onreadystatechange = function() {
     		    if(!hasAppend && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
     		    	hasAppend =true ;
     		    	if(typeof callback === 'function')callback.call();
     		    }
     		   script.onload = script.onreadystatechange = null;
     		   head.removeChild(script);
     		};
     		script.setAttribute("src",url);
     		head.appendChild(script);
		},
		/**去除字符串两边的空格*/
		trim :function(varStr){
		   var value = varStr || "";
		   return value.replace(/(^\s*)|(\s*$)/g, "");
		},
		ajax :function (){
			//包含参数
			if(arguments && arguments.length > 0 ){
              var length = arguments.length ;		
				if(length == 4){
					return hnUtil.frame.post.apply(window, arguments);
				}else if(length == 1){
					//当参数智能为一个的时候必须为url
					var url = arguments[0];
					if(typeof url === "string"){
						return hnUtil.frame.post(url,undefined,undefined,undefined);
					} 
				}else if(length == 2){
					var url = arguments[0];
					if(typeof url === "string"){
						//只有第一个参数为URL的时候执行
						var obj = arguments[1];
						if(hnUtil.extend.isGetConfigParam(obj)){
							return hnUtil.frame.post(url,{},obj,undefined);
						}else{
							return hnUtil.frame.post(url,obj,undefined,undefined);
						}
					 }
				}else if(length == 3){
					 var url = arguments[0];
					 if(typeof url === "string"){
						 var lastP = arguments[2];
						 //包雨涵了回调函数
						 if(typeof lastP === "function"){
							  var obj = arguments[1];
							  if(hnUtil.extend.isGetConfigParam(obj)){
								  return hnUtil.frame.post(url,undefined,obj,lastP);
							  }else{
								  return hnUtil.frame.post(url,obj,undefined,lastP);
							  }
						 }else{
							 //不包含回调函数则前面参数默认为正常顺序，直接执行
							 return hnUtil.frame.post.apply(window, arguments);
						 }
					 }
				}
			}
		},
		length :function(str){
             if(str == null) return 0 ;
             return str.replace(this.regType.containChinese,"**").length;
		}
	};
})();


/**
 * 消息提示：(错误信息、警告信息、确认信息等)
 */
hnUtil.message = (function(){
	 return {
		 alert : function(msg){
		   window.alert(msg);
	     },
		 confirm : function(msg){
	    	return window.confirm(msg);
	     },
		 error : function(error){
	    	 window.alert(error);
	     }
	 };
})();

hnUtil.validor = (function(){
	return {
		//适配校验方法
		valide : function(regex,varStr){
		  if(regex && regex instanceof RegExp){
			  if(typeof varStr === "string"){
				  return regex.test(varStr);
			  }
			  return regex.test(varStr.toString());
		  }else{
			  return false ;
		  }
		},
		//包含中文
		containChinese : function(varStr){
			return hnUtil.regType.containChinese.test(varStr);
		},
		//纯中文
		isChinese : function(varStr){
			return hnUtil.regType.chinese.test(varStr);
		},
		/**
		 * 校验是否为数字  min最小长度、Max最大长度
		 */
		isNumber : function(value,min,max){
			if(!min && !max) return hnUtil.regType.digit.test(value);
			var regexStr = "/^\\d{"+ ( min ? min +( max ? ","+max : "") :( max ? max : "") )+"}$/";
		    return eval(regexStr).test(value);
		}
	};
})();


/**
 * 视图信息
 */
hnUtil.view = (function(){
	return {
		html :function(url,param,c){
			var confObj = {};
			confObj.dataType = "html";
			if(typeof c === "function"){
				hnUtil.ajax(url,param ||{},confObj,c);
			}
			else{
				confObj.isReturn = true ;
				var html = hnUtil.ajax(url,param||{},confObj);
				if(typeof c === "string"){
					$("#"+c).html(html);
				}else{
					$(c).html(html);
				}
			}
		},
		htmlback :function(url,param,c, fn){
			var confObj = {};
			confObj.dataType = "html";
			if(typeof c === "function"){
				hnUtil.ajax(url,param ||{},confObj,c);
			}
			else{
				confObj.isReturn = true ;
				var html = hnUtil.ajax(url,param||{},confObj);
				if(typeof c === "string"){
					$("#"+c).html(html);
				}else{
					$(c).html(html);
				}
			}
			fn(html);
		}
	};
})();

/**
 * 视图信息
 */
hnUtil.frame = (function(){
	 return {
		 /**
		  * ajax请求
		  * @param url 访问地址
		  * @param p 参数对象json格式 {}
		  * @param config 访问配置对象
		  * @param callback :回调函数
		  */
		 post :function(url,p,config,callback){
			 var setting = {
				 async : true ,
				 dataType : "json" ,
				 type : "POST",
				 isReturn :false
			 };
			 $.extend(setting,config);
			 var retObj = null ;
			 if(setting.isReturn) setting.async = false ;
			 var ajaxParam = {    
				        url: url,
				        type: setting.type,    
				        dataType: setting.dataType, 
				        async : setting.async,
				        data : p || {} ,
				        success: function (data) {   
				        	if(setting.isReturn)retObj = data ;
				        	if(typeof callback === "function"){
					        	callback.apply(window,[data]);
				        	}
				        } 
		 	 };
			 //如果是跨越jsonp格式需要设置 callback=jsonpCallback 格式，后台返回jsonpCallback(data)类型数据，前台解析
			 if(ajaxParam.dataType.toLowerCase() === 'jsonp'){
				 ajaxParam.jsonp = setting.callback || "callback";
				 ajaxParam.jsonpCallback = setting.jsonpCallback || "jsonpCallback";
			 }
			 $.ajax(ajaxParam);
			 return retObj;
		  }
	 };
})();

/**   
 * 拓展
 */
hnUtil.extend = (function(){
	return {
		/**
		 * 判断是否是ajax请求的配置参数对象(方法有隐患，目前没有硬性规则，暂时这样判断。)
		 */
		isGetConfigParam : function(param){
			if(param.async || param.dataType || param.isReturn){
				return true ;
			}
			return false ;
		}
	};
})();

