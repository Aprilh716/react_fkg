const proxy=require("http-proxy-middleware");
module.exports=(app)=>{
    app.use("/mallms",proxy({
        target:"https://www.fkgou.com",
        changeOrigin:true,
    }))
}
//https://www.fkgou.com/mallms/app/home/mobconfig/query