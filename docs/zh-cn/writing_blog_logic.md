# 编写博客逻辑

当你创建完你的界面，你需要

- 编写指定的逻辑（DLL文件）
- 选择别人编写好的DLL

来完成你的后续操作。

例如：Maker已经提供了安装在线第三方编辑方法的DLL文件，所以你只需要创建博客界面即可完成所有的操作。

**那么我们接下来就介绍如果编写指定格式的DLL应该如何操作**

更为详细的全程请参考灯光语句自定义编辑方法：
aa

以下地方需要更改：

> 三、编写dll文件 - ③右键引用-添加引用 - 在弹出的对话框中，选择-软件根目录Operation.dll文件

这里改为 选择-软件根目录Blog.dll文件。

> ④继承IGetOperationResult并实现IGetOperationResult接口中的方法

这里改为 继承IToBlog并实现IToBlog接口中的方法