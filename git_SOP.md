&nbsp;GitHub + 国内服务器自动化同步 SOP (2026版)



**一、 \[准备工作] 生成 GitHub 长期凭证 (Token)**

由于 GitHub 禁用密码登录，必须使用 Token 代替密码。



1、登录 GitHub -> Settings -> Developer settings。

2、Tokens (classic) -> Generate new token (classic)。

3、Note: server\_sync / Expiration: No expiration / Scopes: 勾选 repo。

4、保存生成的 ghp\_xxxx 字符串（这是你唯一的“万能钥匙”）。



二、 \[Windows 本地] 第一次创建并推送项目

在您的 Windows 开发电脑上执行：



1、初始化项目身份：



git config --global user.name "chrands"

git config --global user.email "chrands@yeah.net"



2、提交代码到本地仓库：



cd 项目地址

git init

git add .

git commit -m "initial: 项目初始化"

git branch -m main



3、绑定远程仓库 (使用含 Token 地址，实现免密推送)：



git remote add origin https://您的Token@github.com/chrands/wsxy.git



4、推送到 GitHub：





git push -u origin main



三、 \[Ubuntu 服务器] 第一次部署项目

通过 SSH 登录服务器：root@118.195.246.218



1、进入 Web 根目录并拉取代码： 为了解决国内服务器访问慢的问题，我们直接使用 镜像站 + Token 组合：



cd /www/wwwroot

\# 即使是私有仓库，带上 Token 也能通过镜像站拉取

git clone https://您的Token@gitclone.com/github.com/chrands/wsxy.git



2、修正权限 (针对宝塔/www环境)：



chown -R www:www /www/wwwroot/wsxy

chmod -R 755 /www/wwwroot/wsxy



四、 \[日常开发] 往后的更新流程

一旦上述环境配置好，以后的日常同步只需简单的两步：



1\. 在本地电脑修改代码后：



git add .

git commit -m "update: 描述你的修改"

git push



2\. 在云服务器执行更新：



cd /www/wwwroot/wsxy

git pull

(由于你在 git clone 时已经嵌入了 Token，服务器执行 git pull 时将不再询问密码，直接秒速更新)



🛠️ 关键安全提醒

不要泄露 Token：任何人拿到你的 ghp\_xxx 字符串都能控制你的仓库。

仓库地址检查：如果服务器 git pull 依然慢得离谱，可以随时用 git remote set-url origin <新地址> 切换镜像源。

