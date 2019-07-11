# 工具组件

### 功能介绍

+ 敏感字检查
+ `gbk`编码的内页、列表页的抓取

### 效果预览

<iframe src="http://test.nie.163.com/test_html/nie-js/nie-contentUtil/" style="border: 1px solid rgb(170, 170, 170); width: 820px; min-height: 200px; height: 480px;"></iframe>

### 预览

实例：[点它点他](http://test.nie.163.com/test_html/nie-js/nie-contentUtil/)


### JS - 敏感词检测

``` js
var contentUtil = nie.require("nie.util.contentUtil");

var sen_con = $('.sen_inp').val();
//'输入要检测是否存在敏感字的内容','成功回调','失败回调'
contentUtil.sensitive({
    text:sen_con,
    product:"common"//默认搜索词库为common
},function(result){                
    alert('您输入的内容涉及敏感词汇！');    
    $('.sen_inp').val('');                

},function(result){
    alert('您输入的内容没毛病。');
})

```
> 调用：contentUtil.sensitive(params, succBack, errBack)

##### 参数

| 参数      |    说明  |  备注  |
| :-------- | --------:|  :--:  |
| params    | 带两个参数(text:传需要检测的字符；product:词库表，默认'common')|  必填  |
| succBack  | 成功回调                                              |  必填  |
| errBack   | 失败回调                                              |  必填  |

### JS - gbk编码的内页、列表页的抓取

``` js
var contentUtil = nie.require("nie.util.contentUtil");

contentUtil.news(gbk_con,function(result){  
    var $data = $(result.data),
        con = $data.find('#NIE-art').html();     

    if(con){              
        $('.gbk_change_con').html(con);
    }else{
        alert('请检查要读取的内容块！');
    }
    
},function(result){
    alert(result.msg);
    $('.gbk_change_con').html('');
    $('.gbk_inp').val('');
})
```
> 调用：contentUtil.news(params, succBack, errBack)

##### 参数

| 参数      |    说明  |  备注  |
| :-------- | --------:|  :--:  |
| params    | 传入需要转换的链接（必须是163.com）|  必填  |
| succBack  | 成功回调                  |  必填  |
| errBack   | 失败回调                  |  必填  |




> 使用过程如有疑问请反馈 903514282@qq.com


