# general

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

build路径问题
根目录 vue.config.js
module.exports = {
  //基本路径
  publicPath: '/dist/',
  //输出文件目录
  outputDir: 'dist',

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  //assetsDir: 'dist/',


}


$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

git config --global user.name "zztongda"

git config --global user.email 2548864909@qq.com


git config --global user.name "wxiaofei92"

git config --global user.email 1042432275@qq.com


长期存储密码：

git config –global credential.helper store


git 账号和密码

简单方法：
clone 时，把账号和密码带上，一起克隆，会把改账号和密码也添加到~/.git-credentials

http://yourname:password@git.coding.net/xxxxxxxx/xxxx.git/

git 账号和密码


git add . ：他会监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区，包括文件内容修改(modified)以及新文	    件(new)，但不包括被删除的文件。



git add -u ：他仅监控已经被add的文件（即tracked file），他会将被修改的文件提交到暂存区。add -u 不会提交新文件（	     untracked file）。（git add --update的缩写）




git add -A ：是上面两个功能的合集（git add --all的缩写）




git reset HEAD 如果后面什么都不跟的话 就是上一次add 里面的全部撤销了 
git reset HEAD XXX/XXX/XXX.java 就是对某个文件进行撤销了




git init   // 初始化版本库
 
git add .   // 添加文件到版本库（只是添加到缓存区），.代表添加文件夹下所有文件 

git add 目录/文件夹

 
git commit -m "first commit" // 把添加的文件提交到版本库，并填写提交备注


git status -s 查看状态


git remote add origin 你的远程库地址  // 把本地库与远程库关联
 
git push -u origin master    // 第一次推送时
 
git push origin master  // 第一次推送后，直接使用该命令即可推送修改

将本地当前分支 推送到 与本地当前分支同名的远程分支上（注意：pull是远程在前本地在后，push相反）：

git push origin <本地分支名>


推送分支

git push <远程主机名> <本地分支名>:<远程分支名>
 
git push origin master:master


pull操作

将远程指定分支 拉取到 本地指定分支上：

git pull origin <远程分支名>:<本地分支名>

将远程指定分支 拉取到 本地当前分支上：

git pull origin <远程分支名>

将与本地当前分支同名的远程分支 拉取到 本地当前分支上(需先关联远程分支，方法见文章末尾)

git pull


将本地分支与远程同名分支相关联

git push --set-upstream origin <本地分支名>




1.创建本地分支 local_branch

	git branch local_branch


2.创建本地分支local_branch 并切换到local_branch分支

	git checkout -b local_branch


3.切换到分支local_branch

	git checkout local_branch
	

4、推送本地分支local_branch到远程分支 remote_branch并建立关联关系

? ? ? 
	a.远程已有remote_branch分支并且已经关联本地分支local_branch且本地已经切换到local_branch

? ? ? ? ? 		git push

? ? ?
	b.远程已有remote_branch分支但未关联本地分支local_branch且本地已经切换到local_branch

? ? ? ? ?
		git push -u origin/remote_branch

? ? ?
	c.远程没有有remote_branch分支并，本地已经切换到local_branch

? ? ? ? 
		git push origin local_branch:remote_branch


5、删除本地分支local_branch

      git branch -d local_branch


6、删除远程分支remote_branch

? ? ?
	git push origin ?:remote_branch

?
	重命名分支，如果newbranch名字分支已经存在，则需要使用-M强制重命名，否则，使用-m进行重命名。

??? ? ?
	git branch -m | -M oldbranch newbranch?
	git branch -d | -D branchname?删除branchname分支

???
	git branch -d -r branchname?删除远程branchname分支


7、查看本地分支

      git branch



8、查看远程和本地分支

      git branch -a


==================删除分支==================


1.列出本地分支：



	git branch



2.删除本地分支：



	git branch -D BranchName


	其中-D也可以是--delete，如：

git branch --delete BranchName

?

3.删除本地的远程分支：



git branch -r -D origin/BranchName



4.远程删除git服务器上的分支：



git push origin -d BranchName



其中-d也可以是--delete，如：

git push origin --delete BranchName

