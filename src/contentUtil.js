/*!
 * contentUtil v0.1
 * by ShenYiXuan
 *
 */

var contentUtil = function($){
    var LockFlag = {
        "sensitive":false,
        "newsFlag":false
    };
    function checkSensitive(params, succBack, errBack){
        if(LockFlag["sensitive"]){
            return;
        }
        LockFlag["sensitive"] = true;
        // params = $.trim(params);
        $.ajax({
            type: "GET",
            url: 'https://web-lib.webapp.163.com/badword/api?',
            dataType: "jsonp",
            data: params,
            success: function(result){                
                if(!result.passed){
                    succBack && succBack(result);                    
                }else{
                    errBack && errBack(result);
                }
            },
            complete:function(){
                LockFlag["sensitive"] = false;
            },
            error: function() {
                console.log('服务器出错，请稍后再试');
                
            }
        });
    }
    function checkNews(params, succBack, errBack){  
        if(/(http|https):\/\/[\w\-_\.]+\.163\.com\//.test(params) == false){
            errBack && errBack({
                'msg':'请检查输入的地址是否为163.com/'
            });
            return;
        }
        
        if(LockFlag["newsFlag"]){
            return;
        }
        LockFlag["newsFlag"] = true;
        $.ajax({
            type: "GET",
            url: 'https://webapi.game.163.com/interface/get/proxy',
            data : {
                url:params
            },
            dataType: "jsonp",
            timeout:1000,
            success: function(result){
                if(result.code == 0){   
                    succBack && succBack(result);
                }else{                    
                    errBack && errBack(result);
                }
            },
            complete:function(){
                LockFlag["newsFlag"] = false;
            },
            error: function(result) {
                console.log('服务器出错，请稍后再试')
            }
        });
        
        
    }
    return {
        sensitive:function(params, succBack, errBack){
            checkSensitive(params, succBack, errBack);
        },
        news:function(params,succBack, errBack){
            checkNews(params,succBack, errBack);
        }
    }

}(window.jQuery || window.Zepto);