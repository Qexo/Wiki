# Vercel 部署
## 申请 MongoDB 
[注册 MongoDB 账号](https://www.mongodb.com/cloud/atlas/register) 创建免费 MongoDB 数据库，区域**一定要选择 AWS / N. Virginia (us-east-1)** 在 Clusters 页面点击 CONNECT，按步骤设置允许所有 IP 地址的连接），创建数据库用户，并记录数据库连接信息，密码即为你所设置的值
![](https://user-images.githubusercontent.com/51912589/140946317-bafeac24-fe3f-408b-927a-ca9a88168fa8.png)
## 一键部署
点击按钮开始部署 
[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

重新进入项目，在项目设置界面添加环境变量 Environment Variables
| 名称 | 意义 | 示例 |
| --- | --- | --- |
| DOMAINS | 你所允许通信的安全域名 注意双引号而且是英文半角 | [".vercel.app", "127.0.0.1", ".yoursite.com"] |
| MONGODB_HOST | MongoDB 数据库连接地址 | mongodb+srv://cluster0.xxxx.mongodb.net |
| MONGODB_PORT | MongoDB 数据库通信端口 默认应填写 27017 | 27017 |
| MONGODB_USER | MongoDB 数据库用户名 | abudu |
| MONGODB_DB | MongoDB 数据库名 | Cluster0 |
| MONGODB_PASS | MongoDB 数据库密码 | JWo0xxxxxxxx |

在 Deployments 点击 Redeploy 开始部署，若没有 Error 信息即可打开域名进入初始化引导