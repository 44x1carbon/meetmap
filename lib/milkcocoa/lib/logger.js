"browser"!==process.title?module.exports={mode:!1,log:function(){this.mode&&console.log(arguments)},error:function(){this.mode&&console.error(arguments)}}:module.exports={mode:!1,log:function(){window.console&&this.mode&&console.log(arguments)},error:function(){window.console&&this.mode&&console.error(arguments)}};