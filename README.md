# 计算机科学

#### 计算机早期历史（起源）

- 算盘
- 时钟（算日出，潮汐，天体的位置，或纯粹拿来计时）
- 星盘（让船只可以在海上计算维度）
- 计算尺（帮助计算乘法和除法）

**这些设备让原先很费力的事变得更快，更简单，更精确。**

###### 最早计算机 ”Computer“ 指负责计算的人是一门职业。（减低计算工作量）

<hr/>

工业时代出现了 **步进计算器** （第一台能做到 加减乘除全部四种运算的计算器）（制作成本大，效率不行）

#### 电子计算机

早期计算设备都针对特定用途，比如 制表机 大大推进了政府和企业  它们帮助，甚至代替了人工，然而人类社会的规模在以前所未有的速度增长。

20世纪上半叶，世界人口几乎翻倍，一战动员7千万人，二战1亿多人全球贸易和运输更加紧密工程和科学的复杂度也达到新高。我们甚至开始考虑登陆其他行星复杂度的增高导致数据量暴增人们需要更多自动化 更强的计算能力，很快，柜子大小的计算机变成房间大小，维护费用高 而且容易出错。

哈佛马克一号 （通过继电器）控制电子。当电流流过线圈，线圈产生电磁场吸引金属臂，从而闭合电路 这个电路可以连接到马达让计算齿轮 +1 . （继电器内的机械表有质量因此无法快速开关）因为是齿轮磨损任何会动的机械都会随时间磨损。

因为这些原因出现了真空管 向"控制"电极施加正电荷，它会允许电子流动，但如果施加负电荷它会阻止电子流动。

因此通过控制线路，可以断开或闭合电路和继电器的功能一样，但真空管里面没用机械组件这意味着更少的磨损。

这些“三级真空管” 成为了无线电，长途电话以及其他电子设备的基础，持续了接近半个世纪。	

**这标志着计算机从机电转向电子**

##### 巨人 被认为是第一个可编程的电子计算机

编程的方法是把几百根电线插入插板有点像老电话交换机这是为了让计算机执行正确操作，虽然“可编程”，但还是要配置它

##### 电子数值积分计算机 “ENIAC”

几年后在 1946 年，在“宾夕法尼亚大学”完成建造 **这是世上第一个真正的通用，可编程，电子计算机**。

ENIAC 每秒可执行 5000次十位数加减法比前辈快了很多倍。ENIAC  运行半天左右就会出一次故障。

### 晶体管

晶体管的出现，一个全新的计算机时代诞生了。晶体管的物理学相当复杂，牵扯到量子力学。

它是一个开关，可以用控制线路来控制开或关。晶体管有两个电极，电极之间有一种材料隔开它们。这种材料有时候导电，电极之间有一种材料隔开它们，这种材料有时候导电，有时候不导电 。这叫 “半导体”。

#### 布尔逻辑和逻辑门

只用 开/关 两张状态也可以代表信息这叫二进制 **意思是“用两种状态表示”**

电路闭合，电流流过，代表 “真”电路断开，无电流流过，代表  “假”

二进制也可以写成 1 和 0 而不是 true 和 false 只是不同的表单方式罢了。

晶体管的确可以不只是 开/关,还可以让不同大小的电流通过，一些早期电子计算机是三进制的，有三种状态甚至五进制，五种状态问题是，状态越多，越难区别信息。

计算机用二进制的另一个原因是有一整个数学分支存在，专门处理 “真” 和 “假”它已经解决了所有法则和运算 叫 “布尔代数”

**布尔代数中有三个基本操作：NOT,AND,OR**

#### 计算机如何存储和表示数字



| 128  |  64  |  32  |  16  |  8   |  4   |  2   |  1   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|  1   |  1   |  1   |  1   |  1   |  1   |  1   |  1   |

128 + 64 + 32 +16 +8 +4 + 2 + 1 = 255

最大数是 255，8位都是 1 能表示 256个不同的值，2的 8次方 0 - 256

你可以听说过 8 位机，8 位图像，8位音乐意思是计算机里大部分操作都是 8位这样处理的，但 256个值不算多，意味着 8位游戏只能用 256种颜色 8位是如此常见，以至于有专门的名字：字节

1 字节 = 8位

1 bytes = 8bits

如果有 10个 bytes ，意味着有 80 位。

你听过 千字节（kb）兆字节（mb）千兆字节（gb）不同前缀代表不同数量级

**计算机必须给内存中每一个位置，做一个“标记”这个标记叫“位址”目的是为了方便存取数据**

除了负数和正数，计算机也要处理非整数，比如 12.7 和 3.14,因为小数点可以在数字间浮动。有很多种方法表示浮点数

**IEEE 754标准**

652.9可以写成 0.6259 x 10 ^3

.6259 叫 “有效位数”，3 是指数。 **在 32 位浮点数中第一位表示数字的正负，接下来 8位存指数，剩下 23 位存有效位数**

**计算机可以用数字表示字母**

最直接的方法是给字母编号：A是 1，B是 2，C是 3，以此类推曾用 5位序列 来编码英文的 26个字母。

#### ASCII,美国信息交换标准代码，发明与 1963年，ASCII是 7 位代码，足够存 128 个不同值。

很多国家语言不一样，中文，日文，所以为了统一，Unicode 诞生了统一所有编码的标准。设计与 1992 年，解决了不同国家不同标准的问题。

Unicode 用一个统一编码方案。

#### 算术逻辑单元（ALU）

ALU 是计算机的数学大脑 ALU 就是计算机里负责运算的组件，基本其他所有部件都用到了它。

ALU 有 2个单元，1个算术单元和 1个逻辑单元

##### 算术单元

**它负责计算机里的所有数字操作。**

现代计算机用的加法电路有点不同， “超前进位加法器”

#### 逻辑单元

逻辑单元执行逻辑操作比如之前讨论过的 AND，OR 和 NOT操作它也能做简单的数值测试比如一个数字是不是负数。

#### 计算机内存

我们知道可以用 ALU计算那么结果我们要保存可能下次运算或者再次运算。

如果你在玩困难磨模式的 “扫雷”，然后狗跑过来，被电源线绊倒，把插头拔了出来，你知道失去进度的痛苦。你损失数据的原因是：

**电脑用的是随机存取存储器** 简称 “RAM”它只能在有电的情况下存储东西，比如游戏状态。

**另一种存储（memory）叫持久存储，电源关闭时数据也不会丢失它用来存其他东西。**

锁存器通过允许写入跟ALU逻辑门来存储数据，一组这样的锁存器叫“寄存器”寄存器能存一个数字，这个数字有多少位，叫“位宽”。早期电脑用 8 位寄存器，然后是 16 位，32 位。如今许多计算机都有 64 位宽的寄存器。

写入寄存器前，要先启用里面所有锁存器。

64位寄存器要64根数据线，64根连到输出端。幸运的是，我们只要 1 根线启用所有锁存器但加起来也有 129条线了。如果存 256 位要513条线！解决办法就是 ”**矩阵**“

**矩阵** 黑客帝国 yyds

在 矩阵 中，我们不并列排放锁存器而是做成网格。存 256 位，我们用 16x16 网格的锁存器，有 16行 16列要启用某个锁存器，就打开相应的 行线和列线。

所以对于 256位的存储。只要 35 条线，1 条 ”数据线“ 1 条 ”允许写入线“ 1条 ”允许读取线“ 还有16行 16列的线用于选择锁存器 （16+16=32，32+3=35）

RAM 有很多类型，DRAM，闪存，和 NVRAM,它们在功能上与 SRAM 相似。但用不同的电路存单个位。比如用不同的逻辑门，电容器，电荷陷阱，或忆阻器。**但根本上 这些技术都是矩阵层层嵌套，来存储大量信息。就像计算机中的很多事情，底层其实都很简单。**让人难以理解的，是一层层精妙的抽象，像一个越来越小的俄罗斯套娃。