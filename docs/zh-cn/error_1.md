
# System.InvalidOperationException

此实现不是 Windows 平台 FIPS 验证的加密算法的一部分


### 解决办法：

1. Win键+R 输入 regedit 打开注册表编辑器
2. 对于Vista、Win7、Win8、Win10 用户，请定位到： HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\FIPSAlgorithmPolicy\Enabled  ~~对于Windows XP用户，请定位到：HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\FIPSAlgorithmPolicy~~ (Windows XP无法使用该软件)
3. 右键->修改 将值修改为默认值0 
4. 退出注册表编辑器,重启软件