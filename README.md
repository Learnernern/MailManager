##MailManager
对nodejs的imap模块进行了简单的封装，目前实现的功能：
> * 下载邮件
> * 获取邮件信息

更多功能今后继续完善


##Example

```javascript
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
