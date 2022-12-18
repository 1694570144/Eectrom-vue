# 开始

## 运行命令

```
yarn 或 npm install
```

如果电脑本地没有wait-on这个库的话需要安装，运行如下命令

```
npm install -g wait-on
```

项目启动首先运行的是vue项目，查看本地运行的接口号，然后需要修改两个地方

```
.env文件中 -> PROT=xxxx
package.json文件中-> "electron": "wait-on tcp:xxxx && electron ."
```

## 启动程序

```
yarn electron:serve
```

