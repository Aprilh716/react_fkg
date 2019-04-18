const { 
    override,  //相当于根函数，专门用来暴露配置项的
    fixBabelImports,//按需加载的函数
    addWebpackAlias //配置别名的函数
} = require('customize-cra');
const path = require("path");
module.exports = override(
    //按需加载antd
    fixBabelImports('import', {    //可以用import因为下载了"babel-plugin-import"     
        libraryName: 'antd-mobile',   //模块的名称     
        libraryDirectory: 'es',       
        style: 'css',       //按需加载
    }),
    //别名配置
    addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "./src"),             
        ["@views"]: path.resolve(__dirname, "./src/views"),
        ["@components"]: path.resolve(__dirname, "./src/components") ,
        ["@actions"]:path.resolve(__dirname,"./src/actions"),
        ["@common"]:path.resolve(__dirname,"./src/common"),
        ["@apis"]:path.resolve(__dirname,"./src/apis"),
        ["@mapprops"]:path.resolve(__dirname,"./src/mapprops"),   
    })
);