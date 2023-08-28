
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、服务名、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# fc-llm-api 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-llm-api&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-llm-api" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-llm-api&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-llm-api" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-llm-api&type=packageDownload">
  </a>
</p>

<description>

部署大语言模型和向量数据库的相关应用到函数计算，向量计算与存储由RDS PostgreSQL提供支持

</description>

<codeUrl>

- [:smiley_cat: 代码](https://github.com/devsapp/fc-llm-api)

</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务：

<service>



| 服务 |  备注  |
| --- |  --- |
| 函数计算 FC |  对 AIGC 进行 CPU/GPU 推理计算 |
| 文件存储 NAS |  存储大语言模型以及Embedding服务所需要的模型, 新用户请先领取免费试用资源包https://free.aliyun.com/?product=9657388&crowd=personal |

</service>

推荐您拥有以下的产品权限 / 策略：
<auth>
</auth>

<remark>

您还需要注意：   
您还需要注意：  
本项目部署 qwen 模型 以及 chatglm2-6b 模型均需要进行模型文件的下载，大约花费5-10分钟的时间, llama2则因为模型直接集成到镜像里面，不需要进行模型下载部署会比较快一些

</remark>

<disclaimers>

免责声明：   
免责声明：

1. 该项目的软件部分由开源社区贡献，阿里云仅提供了算力及存储支持；

</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=fc-llm-api) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=fc-llm-api) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init fc-llm-api -d fc-llm-api `
  - 进入项目，并进行项目部署：`cd fc-llm-api && s deploy - y`
   
</deploy>

## 应用详情

<appdetail id="flushContent">

## 前期准备

使用该项目，您需要有开通以下服务：

| 服务 | 备注 |
| --- | --- |
| 函数计算 FC | 对 AIGC 进行 CPU/GPU 推理计算 |
| 文件存储 NAS | 存储大语言模型以及Embedding服务所需要的模型, 新用户请先领取免费试用资源包https://free.aliyun.com/?product=9657388&crowd=personal |


推荐您拥有以下的产品权限 / 策略：

## 应用介绍文档

### 应用详情

使用阿里云函数计算部署开源大模型应用，提供兼容openai规范的接口和[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)客户端.
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693222399152-69e625af-13c9-4d4a-8d68-2b0475921622.png#clientId=u0542e5c1-914e-4&from=paste&height=730&id=ue7c46bb6&originHeight=1460&originWidth=2986&originalType=binary&ratio=2&rotation=0&showTitle=false&size=3207417&status=done&style=none&taskId=ud6ce1730-09f2-407c-8443-9a4723f48ea&title=&width=1493)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693221028075-582cc6e4-9728-4703-bde7-911bc3c6b00a.png#clientId=ude024fc4-380f-4&from=paste&height=893&id=u2439d332&originHeight=1786&originWidth=3580&originalType=binary&ratio=2&rotation=0&showTitle=false&size=5320998&status=done&style=none&taskId=u534cd37f-6b4a-4a56-bce5-ad6906be4db&title=&width=1790)

## 使用文档
### 函数计算应用中心部署方案
#### 选择应用模版
登录到阿里云函数计算控制台->应用->创建应用-> 人工智能
选择fc-llm-api应用模板点击"立即创建"

#### 应用模版设置
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693221250389-dd37dd84-e5e9-4b85-bfc3-84073f5232dd.png#clientId=ude024fc4-380f-4&from=paste&height=402&id=u9892dffa&originHeight=804&originWidth=2916&originalType=binary&ratio=2&rotation=0&showTitle=false&size=967112&status=done&style=none&taskId=u3e9a0c04-fd9a-4598-b867-fef9c497688&title=&width=1458)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693221427794-2d6b9665-8c45-4f0e-929b-482e2789d8fc.png#clientId=ude024fc4-380f-4&from=paste&height=655&id=ucc1703ed&originHeight=1310&originWidth=3142&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1725536&status=done&style=none&taskId=u6780c22b-479c-4be4-9bd2-7c3842e70b8&title=&width=1571)
设置好知道点击"创建并部署默认环境"
#### 等待部署
该过程您会自动完成
#### 服务访问
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693221533357-feaf349e-0407-44a2-8bff-b96b749a9d91.png#clientId=ude024fc4-380f-4&from=paste&height=436&id=u423c1ddc&originHeight=872&originWidth=3496&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1149916&status=done&style=none&taskId=u6ed8cdae-005f-4001-8460-ade73827a9d&title=&width=1748)
服务部署成功之后会返回两个链接
llm-server 为大语言模型的api服务界面，基于swagger，
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693222399152-69e625af-13c9-4d4a-8d68-2b0475921622.png#clientId=u0542e5c1-914e-4&from=paste&height=730&id=ue7c46bb6&originHeight=1460&originWidth=2986&originalType=binary&ratio=2&rotation=0&showTitle=false&size=3207417&status=done&style=none&taskId=ud6ce1730-09f2-407c-8443-9a4723f48ea&title=&width=1493)
llm-client则是访问客户端,访问客户端需要您输入前面填写的客户端私有密码，填写好之后就可以测试使用了
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693222348657-9108b705-410b-4e91-9615-fe57139cf51b.png#clientId=u0542e5c1-914e-4&from=paste&height=848&id=u0db11206&originHeight=1696&originWidth=3048&originalType=binary&ratio=2&rotation=0&showTitle=false&size=4148920&status=done&style=none&taskId=udfbcf199-f9a0-40a3-889a-0556486ba84&title=&width=1524)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693222385485-269f26cd-bf9d-48c9-b50e-2e3b6659a9aa.png#clientId=u0542e5c1-914e-4&from=paste&height=758&id=ua2f84a5f&originHeight=1516&originWidth=2292&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2692422&status=done&style=none&taskId=u6ec42732-9011-4784-9d5e-b6a1f723b1b&title=&width=1146)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/13970/1693222464449-2182d157-946a-4bae-b2ff-777e485a3de6.png#clientId=u0542e5c1-914e-4&from=paste&height=878&id=u7bdc386e&originHeight=1756&originWidth=3552&originalType=binary&ratio=2&rotation=0&showTitle=false&size=5004927&status=done&style=none&taskId=ub0203b48-815a-4a82-8558-9aef97231f7&title=&width=1776)
### 本地部署方案

- 安装 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 开发者工具`npm install @serverless-devs/s -g`
，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
- 初始化项目：`s init fc-llm-api -d fc-llm-api` 根据引导选择region，模型，填入客户端密码等
- 进入项目，并进行项目部署：`cd fc-llm && s deploy - y`
本地部署成功后使用部分参考应用中心部署方案配置管理后台系列操作


</appdetail>

## 使用文档

<usedetail id="flushContent">

### 常见问题

</usedetail>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>
