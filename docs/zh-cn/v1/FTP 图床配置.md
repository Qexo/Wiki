# FTP 图床配置
在 **1.6.0版本** 中, Qexo 对 FTP 远程图床进行了支持 
### FTP 主机
所连接的 FTP 主机
```
127.0.0.1
```
### FTP 端口
FTP 连接端口 通常为 **21**
```
21
```
### 用户名
FTP 登录用户名
```
username
```
### 密码
FTP 登录密码
```
password
```
### 保存路径
文件上传后保存的路径 包含文件名
| 关键词 | 意义 | 示例 |
| --- | --- | --- |
| {year} | 当前年份 | 2021 |
| {month} | 当前月份 | 12 |
| {day} | 当前日份 | 22 |
| {filename} | 无后缀的文件名 | image |
| {time} | 时间戳 | 1640186955.4339228 |
| {extName} | 文件后缀名 | png |
```
/Qexo/{year}/{month}/{time}.{extName}
```
### 自定义域名
返回文件链接的 URL 最终返回的链接为 自定义域名+保存路径
```
https://file.example.com/file/CDN
```