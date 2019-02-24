# leetcode-javascript-answer #

![](https://img.shields.io/badge/language-javascript-green.svg)
![](https://img.shields.io/badge/Dependencies-MarkDown-brightgreen.svg)
![](https://img.shields.io/badge/VuePress-v1.x-blue.svg)
![](https://img.shields.io/badge/license-MIT-blue.svg)

leetcode中使用javascript的解题答案<https://leetcode-answer.github.io/leetcode-javascript-answer/>。

## 项目说明 ##

运行本项目，需要将 VuePress 安装为本地依赖：

``` Shell
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
yarn docs:dev # 或者：npm run docs:dev

# 构建
yarn docs:build # 或者：npm run docs:build
```

其他相关配置请查看 [VuePress官网](https://vuepress.vuejs.org/zh/) 。

另外本项目的部署方式采用的是 [GitHub Pages](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)，相应的`deploy.sh`文件已经创建好，md文档编写好了之后上传github，再执行


``` Shell
npm run deploy
```

会自动构建并将构建好的静态页面自动上传到github上对应的分支。

## 说明 ##

QQ群：737278880

如果您有更多更好更棒的方法，欢迎您的加入，让我们一起共同完善。