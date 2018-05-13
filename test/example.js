var manager= require("../mail_manager")

var config = {
    user: 'xxxx@qq.com',
    password: 'xxxx',
    host: 'imap.qq.com',
    port: 993,
    tls: true
}

//设置需要获取的字段
var options = {
    bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
    struct: true
}

//获取前n条邮件信息
manager.getEmailInfo(1,config,options)

//下载前n条邮件
manager.downloadEmails(1,config,options)