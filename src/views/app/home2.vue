<template>
  <div>
    <h1>手机端首页面1!</h1>


<div class="fjx">手机端</div>
		<!--手机端按钮-->
		<div class="sj-box x-margin inside-padding">
			<div class="title08">手机端按钮</div>
			<div class="sj-content">
				<!--单排-->
				<form>
					<button type="button" class="sj-btn">按钮</button>
					<button type="button" class="sj-btn sj-btn-hsb">灰色边</button>
					<button type="button" class="sj-btn sj-btn-lsbk"><i class="icon iconfont icon-caozuochenggong1"></i>成功</button>
					<button type="button" class="sj-btn pink"><i class="icon iconfont icon-close"></i>失败</button>
					<button type="button" class="sj-btn orange"><i class="icon iconfont icon-shibai2"></i>警告</button>
					<button type="button" class="sj-btn"><i class="icon iconfont icon-shangchuan1"></i>上传</button>
					<button type="button" class="sj-btn green"><i class="icon iconfont icon-xiazai"></i>下载</button>
				</form>
				<!--双排-->
				<form class="double-row">
					<button type="button" class="sj-btn sj-btn-hsb">灰色边</button>
					<button type="button" class="sj-btn">按钮</button>
					<div class="clearfix"></div>
				</form>
				<!--单排短按钮-->
				<form class="short-button">
					<button type="button" class="sj-btn">按钮</button>
								<button type="button" class="sj-btn sj-btn-hsb">灰色边</button>
					<button type="button" class="sj-btn sj-btn-lsbk"><i class="icon iconfont icon-caozuochenggong1"></i>成功</button>
					<button type="button" class="sj-btn pink"><i class="icon iconfont icon-close"></i>失败</button>
					<button type="button" class="sj-btn orange"><i class="icon iconfont icon-shibai2"></i>警告</button>
				</form>
				<!--按钮列表-->
				<form class="si-button-lb">
					<button type="button" class="sj-btn">按钮</button>
					<button type="button" class="sj-btn sj-btn-hsb">灰色边</button>
					<button type="button" class="sj-btn sj-btn-lsbk"><i class="icon iconfont icon-caozuochenggong1"></i>成功</button>
					<button type="button" class="sj-btn pink"><i class="icon iconfont icon-close"></i>失败</button>
					<button type="button" class="sj-btn orange"><i class="icon iconfont icon-shibai2"></i>警告</button>
					<button type="button" class="sj-btn"><i class="icon iconfont icon-shangchuan1"></i>上传</button>
					<button type="button" class="sj-btn green"><i class="icon iconfont icon-xiazai"></i>下载</button>
				</form>
			</div>
		</div>
		<!--手机端按钮end-->
		<!--搜索框-->
		<div class="sj-box x-margin inside-padding">
			<div class="title08">搜索框</div>
			<div class="sj-content">
				<form class="s-margin ">
					<input type="text" name="title" placeholder="请输入标题" class="so-input td-left">
					<button type="button" class="figure-button"></button>
					<div class="clearfix"></div>
				</form>
				<form class=" s-margin">
					<input type="text" name="title" placeholder="请输入标题" class="so-input td-left">
					<button type="button" class="word-button">
						搜索
					</button>
					<div class="clearfix"></div>
				</form>

			</div>
			<div class="sj-content">
				<form class="sj-search">
					<input type="text" name="title" placeholder="请输入标题" class="so-input ">
					<button type="button" class="word-button sj-search01">
						搜索
					</button>
				</form>
			</div>
			<div class="sj-content">
				<form class="sj-search sj-search02">
					<input type="text" name="title" placeholder="请输入标题" class="so-input ">
					<button type="button" class="word-button sj-search01">
						搜索
					</button>
				</form>
			</div>
			<div class="sj-search03 x-margin">
				<div class="search03">
					<i class="icon iconfont icon-sousuo"></i>搜索
				</div>
			</div>
			<div class="sj-search03">
				<div class="search03 search03-2">
					<i class="icon iconfont icon-sousuo"></i>
					<input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="搜索" class="layui-input ">
				</div>
				<a href="#">取消</a>
			</div>
		</div>
		<!--搜索框end-->
		<!--提示-->
		<!--提示01-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt01 margin-top50">
				<i class="icon iconfont icon-shibai7"></i>
				<div class="prompt-xx01">
					<p>上传失败</p>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<!--提示02-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt02 margin-top50">
				<i class="icon iconfont icon-shibai-01"></i>
				<div class="prompt-xx02">
					<b>上传失败</b>
					<p>1.失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因</p>
					<p>2.失败原因
						<a href="#">失败原因</a>失败原因失败原因失败原因失败原因失败原因失败原因失败原因</p>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<!--提示03-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt03 margin-top50">
				<i class="icon iconfont icon-shibai-01"></i>
				<div class="prompt-xx03 prompt-xx003">
					<p>失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因</p>
				</div>
				<form>
					<button class="type=" >返回</button>
				</form>
			</div>
		</div>
		<!--提示04-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt04 margin-top50">
				<p><i class="icon iconfont icon-shibai-01"></i>失败原因失败原因失败失败原因失败</p>
				<form>
					<button class="type=" >返回</button>
				</form>
			</div>
		</div>

		<!--成功提示01-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt01 margin-top50 prompt05">
				<i class="icon iconfont icon-caozuochenggong"></i>
				<div class="prompt-xx01">
					<p>上传成功</p>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<!--成功提示02-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt02 margin-top50 prompt05">
				<i class="icon iconfont icon-chenggong2"></i>
				<div class="prompt-xx02">
					<b>上传成功</b>
					<p>1.上传成功上传成功上传成功上传成功上传成功上传成功上传成功上传成功上传成功</p>
					<p>2.上传成功
						<a href="#">上传成功</a>上传成功上传成功上传成功</p>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<!--成功提示03-->
		<div class="sj-box x-margin inside-padding">
			<div class="prompt03 margin-top50 prompt05">
				<i class="icon iconfont icon-shibai zt-pink"></i>
				<div class="prompt-xx03 prompt-xx003">
					<p>上传成功上传成功上传成功上传成功上传成功上传成功</p>
				</div>
				<form>
					<button class="type=" >返回</button>
				</form>
			</div>
		</div>
		<!--成功提示04-->
		<div class="sj-box x-margin inside-padding">
			<p class="czbz-tx"><span></span>请根据提醒操作</p>
			<div class="biao_dan">
				<form class="sys">
					<input type="text" name="firstname" placeholder="请输入您的手机号" class="input-text02" />
				</form>
				<button type="button" class="qiandao02">确定</button>
			</div>

		</div>

		<!--提示end-->
		<!--新闻列表-->

		<div class="sj-box x-margin inside-padding">
			<div class="nav-box">
				<div class="title09">
					<p><i class="icon iconfont icon-xinwen4"></i>新闻列表</p>
					<a href="#">查看更多</a>
					<div class="clearfix"></div>
				</div>
				<ul class="nav-lb">
					<li>
						<p>上传成功上传成功上传成功上传成功上传成功上传成功</p>
						<i class="icon iconfont icon-fanhui6"></i>
						<div class="clearfix"></div>
					</li>
					<li>
						<p>上传成功上传成功上传成功上传成功上传成功上传成功</p>
						<i class="icon iconfont icon-fanhui6"></i>
						<div class="clearfix"></div>
					</li>
					<li>
						<p>上传成功上传成功上传成功上传成功上传成功上传成功</p>
						<i class="icon iconfont icon-fanhui6"></i>
						<div class="clearfix"></div>
					</li>
				</ul>
			</div>
		</div>
		<!--新闻列表end-->
		<!--格子布局-->

		<div class="sj-box x-margin inside-padding">
			<div class="grid-box">
				<ul>
					<li>
						<div class="grid-nr">
							<i class="icon iconfont icon-liwu"></i>
							<b>格子布局</b>
							<p>解释说明解释说明解释说明解释说明</p>
						</div>
					</li>
					<li>
						<div class="grid-nr">
							<i class="icon iconfont icon-liwu"></i>
							<b>格子布局</b>
							<p>解释说明解释说明解释说明解释说明</p>
						</div>
					</li>
					<li>
						<div class="grid-nr">
							<i class="icon iconfont icon-liwu"></i>
							<b>格子布局</b>
							<p>解释说明解释说明解释说明解释说明</p>
						</div>
					</li>
					<li>
						<div class="grid-nr">
							<i class="icon iconfont icon-liwu"></i>
							<b>格子布局</b>
							<p>解释说明解释说明解释说明解释说明</p>
						</div>
					</li>
					<div class="clearfix"></div>
				</ul>
			</div>
		</div>
		<!--格子布局end-->
		<!--订单详情-->
		<div class="sj-box x-margin inside-padding">
			<div class="title08">订单详情</div>
			<div class="the-order">
				<div class="payment-je">
					<p>付款金额</p><span>￥2400.00</span>
					<div class="clearfix"></div>
				</div>
				<table class="payment-lb">
					<tbody>
					    <colgroup>
					        <col width="90px"/>
					        <col />
					    </colgroup>
						<tr>
							<td>商品：</td>
							<td>短信</td>
						</tr>
						<tr>
							<td>金额：</td>
							<td>￥2400.00</td>
						</tr>
						<tr>
							<td>商品信息：</td>
							<td>商品信息商品信息商品信息商品信息商品信息商品信息商品信息商品信息</td>
						</tr>
					</tbody>
				</table>
				<form class="operation">
					<button type="button">操作01</button>
					<button type="button" class="operation02">操作02</button>
					<div class="clearfix"></div>
				</form>
			</div>
			<div class="the-order">
				<div class="payment-je">
					<p>付款金额</p><span>￥2400.00</span>
					<div class="clearfix"></div>
				</div>
				<table class="payment-lb">
					<tbody>
					    <colgroup>
					        <col width="90px"/>
					        <col />
					    </colgroup>
						<tr>
							<td>商品：</td>
							<td>短信</td>
						</tr>
						<tr>
							<td>金额：</td>
							<td>￥2400.00</td>
						</tr>
						<tr>
							<td>商品信息：</td>
							<td>商品信息商品信息商品信息商品信息商品信息商品信息商品信息商品信息</td>
						</tr>
						<tr>
							<td>商品：</td>
							<td>短信</td>
						</tr>
						<tr>
							<td>金额：</td>
							<td>￥2400.00</td>
						</tr>
						<tr>
							<td>商品信息：</td>
							<td>商品信息商品信息商品信息商品信息商品信息商品信息商品信息商品信息</td>
						</tr>
					</tbody>
				</table>
				<form class="operation">
					<button type="button">操作01</button>
					<button type="button" class="operation02">操作02</button>
					<div class="clearfix"></div>
				</form>
			</div>

		</div>
		<!--订单详情end-->
		<!--列表-->
		<div class="sj-box x-margin inside-padding">
			<ul class="breadcrumb white x-angle">
				<li>
					<a href="#">首页</a> <span class="divider">/</span></li>
				<li>
					<a href="#">新闻中心</a> <span class="divider">/</span></li>
				<li class="active">某某新闻详情</li>
				<div class="clearfix"></div>
			</ul>
			<div class="">
				<ul class="media-list">
					<li>
						<div class="title04">
							<p>基础信息</p>
							<span><i class="icon iconfont icon-xiugai"></i>修改</span>
							<div class="clearfix"></div>
						</div>
						<form>
							<table class="table-list">
							    <colgroup>
							        <col width="80px"/>
							        <col />
							    </colgroup>
								<tr>
									<td class="The-left">姓名:</td>
									<td>张三</td>
								</tr>
								<tr>
									<td class="The-left">性别:</td>
									<td>男</td>
								</tr>
								<tr>
									<td class="The-left">爱好:</td>
									<td>看电影 吃饭 睡觉 打豆豆 玩游戏 唱歌</td>
								</tr>
								<tr>
									<td class="The-left">工作经验:</td>
									<td>2018/12/18 通达软件公司担任前端</td>
								</tr>
								<tr>
									<td class="The-left">详细地址:</td>
									<td>郑州市 郑州科技园东区 创新园</td>
								</tr>
							</table>
						</form>
					</li>
					<li>
						<div class="title04">
							<p>基础信息</p>
							<span><i class="icon iconfont icon-xiugai"></i>修改</span>
							<div class="clearfix"></div>
						</div>
						<form>
							<table class="table-list">
							    <colgroup>
							        <col width="80px"/>
							        <col />
							    </colgroup>
								<tr>
									<td class="The-left">姓名:</td>
									<td>张三</td>
								</tr>
								<tr>
									<td class="The-left">性别:</td>
									<td>男</td>
								</tr>
								<tr>
									<td class="The-left">爱好:</td>
									<td>看电影 吃饭 睡觉 打豆豆 玩游戏 唱歌</td>
								</tr>
								<tr>
									<td class="The-left">工作经验:</td>
									<td>2018/12/18 通达软件公司担任前端</td>
								</tr>
								<tr>
									<td class="The-left">详细地址:</td>
									<td>郑州市 郑州科技园东区 创新园</td>
								</tr>
							</table>
						</form>
					</li>
				</ul>
			</div>
			<div class="">
				<ul class="media-list">
					<li>
						<a href="#">
							<div class="pull-left">
								<img src="http://106.3.45.23/assets/image/td_02.png" />
							</div>
							<div class="media-body media-body04">
								<h4>Media heading</h4>
								<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片</p>
								<span>2018-12-13</span>
							</div>
							<div class="clearfix"></div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="pull-left">
								<img src="http://106.3.45.23/assets/image/td_02.png" />
							</div>
							<div class="media-body media-body04">
								<h4>Media heading</h4>
								<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片</p>
								<span>2018-12-13</span>
							</div>
							<div class="clearfix"></div>
						</a>
					</li>
				</ul>
				<!--媒体列表-文字-->
				<ul class="media-list">
					<li>
						<a href="#">
							<div class="pull-left02">
								<b>12-13</b>
								<p>2018</p>
							</div>
							<div class="media-body media-body02">
								<p>一行文字超出后省略号显示超出后省略号显示</p>
								<p>一行文字超出后省略号显示超出后省略号显示</p>
								<p>一行文字超出后省略号显示超出后省略号显示</p>
								<p>一行文字超出后省略号显示超出后省略号显示</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="pull-left02">
								<b>12-13</b>
								<p>2018</p>
							</div>
							<div class="media-body ">
								<h4>Media heading</h4>
								<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="media-body qczy-padding">
								<h4>Media heading</h4>
								<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="media-body qczy-padding">
								<h4>Media heading</h4>
								<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片媒体列表-图片</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</li>
				</ul>
					<ul class="media-list media-list02">
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
							
						</div>
						<span class="unread02">1</span>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</div>
							<span class="unread02">99+</span>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</div>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
							
						</div>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="media-body media-body04 qczy-padding">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="media-body media-body04 qczy-padding">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						
						<div class="media-body media-body04 qczy-padding">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#" class="clefix">
						
						<div class="media-body media-body05 qczy-padding td-left">
							<div class="media-bt">
								<h4>Media heading</h4></div>
							<p>2019-09-23</p>
						</div>
						<i class="icon iconfont icon-enter tiaozhuan"></i>
					</a>
				</li>
				<li>
					<a href="#" class="clefix">
						
						<div class="media-body media-body05 qczy-padding td-left">
							<div class="media-bt">
								<h4>Media heading</h4></div>
							<p>2019-09-23</p>
						</div>
						<i class="icon iconfont icon-enter tiaozhuan"></i>
					</a>
				</li>
				
			</ul>
			</div>
			<!--列表03-->
			<div class="title08"><i class="icon iconfont icon-xinxi3 label-info"></i>列表03</div>

			<ul class="graphic-box">
				<li>
					<div class="graphic-lb">
						<div class="lb-figure">
							<img src="http://106.3.45.23/assets/image/002.jpg" />
						</div>
						<div class="lb-article">
							<b>文章标题</b>
							<p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
						</div>
					</div>
					<div class="lb-ck-details">
						<a href="#">
							<p>查看详情</p>
							<i class="icon iconfont icon-fanhui6"></i>
							<div class="clearfix"></div>
						</a>
					</div>
				</li>
				<li>
					<div class="graphic-lb">
						<div class="lb-figure">
							<img src="http://106.3.45.23/assets/image/002.jpg" />
						</div>
						<div class="lb-article">
							<b>文章标题</b>
							<p>文章内容文章内容文章内容文章内容文章内容文章章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
						</div>
					</div>
					<div class="lb-ck-details">
						<a href="#">
							<p>查看详情</p>
							<i class="icon iconfont icon-fanhui6"></i>
							<div class="clearfix"></div>
						</a>
					</div>
				</li>
			</ul>

			<!--列表03 end-->
			<!--列表04-->
			<div class="title08"><i class="icon iconfont icon-xinxi3 label-info"></i>列表04</div>
			<ul class="the-list02">
				<li>
					<div class="title03">
						<div class="xhx-bt"><b>样式标题</b></div>
						<p>新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情 新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情
						</p>
					</div>
					<ul class="figure-lb">
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<!--<div class="clearfix"></div>-->
					</ul>
					<ul class="operation-box02">
						<li><i class="icon iconfont icon-qinziAPPtubiao-"></i>20</li>
						<li><i class="icon iconfont icon-pinglun2-copy"></i>50</li>
						<li><i class="icon iconfont icon-zhuanfa"></i>100</li>
						<div class="clearfix"></div>
					</ul>
				</li>
			</ul>
			<!--列表04 end-->

			<!--列表05-->
			<div class="title08 s-margin"><i class="icon iconfont icon-xinxi3 label-info"></i>列表05</div>
			<ul class="the-list03">
				<li>
					<div class="pull-left pull-left03">
						<img src="http://106.3.45.23/assets/image/td_02.png" />
					</div>
					<div class="media-body   media-body03">
						<div class="meeting-lb">
							<p>
								<span class="title-name">会议名称：</span>
								<span class="msg-content">郑州通达年会</span>
							</p>
							<p>
								<span class="title-name">开始时间：</span>
								<span class="msg-content">2019-01-02 10.30</span>
							</p>
							<p>
								<span class="title-name">结束时间：</span>
								<span class="msg-content">2019-01-02 11.30</span>
							</p>
							<p>
								<span class="title-name">报名人数：</span>
								<span class="msg-content">30</span>
							</p>
							<p>
								<span class="title-name">签到人数：</span>
								<span class="msg-content">400</span>
							</p>
						</div>
					</div>
					<div class="clearfix"></div>
				</li>
				<li>
					<div class="pull-left pull-left03">
						<img src="http://106.3.45.23/assets/image/td_02.png" />
					</div>
					<div class="media-body   media-body03">
						<div class="meeting-lb">
							<p>
								<span class="title-name">会议名称：</span>
								<span class="msg-content">郑州通达年会</span>
							</p>
							<p>
								<span class="title-name">开始时间：</span>
								<span class="msg-content">2019-01-02 10.30</span>
							</p>
							<p>
								<span class="title-name">结束时间：</span>
								<span class="msg-content">2019-01-02 11.30</span>
							</p>
							<p>
								<span class="title-name">报名人数：</span>
								<span class="msg-content">30</span>
							</p>
							<p>
								<span class="title-name">签到人数：</span>
								<span class="msg-content">400</span>
							</p>
						</div>
					</div>
					<div class="clearfix"></div>
				</li>
			</ul>
			<!--列表05 end-->
			<!--列表06-->
			<div class="title08 s-margin"><i class="icon iconfont icon-xinxi3 label-info"></i>列表06</div>
			<ul class="the-list03">
				<li>
					<div class="pull-left pull-left03">
						<img src="http://106.3.45.23/assets/image/td_02.png" />
					</div>
					<div class="media-body   media-body03">
						<div class="the-list04">
							<b><span>热门</span>新闻标题</b>
							<p>介绍说明介绍说明介绍说明介绍说明介绍介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明</p>
							<form>
								<p>1000已购买</p>
								<button type="button">立即报名</button>
								<div class="clearfix"></div>
							</form>
						</div>
					</div>
					<div class="clearfix"></div>
				</li>
				<li>
					<div class="pull-left pull-left03">
						<img src="http://106.3.45.23/assets/image/td_02.png" />
					</div>
					<div class="media-body   media-body03">
						<div class="the-list04">
							<b><span>热门</span>新闻标题</b>
							<p>介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明</p>
							<form>
								<p>1000已购买</p>
								<button type="button">立即报名</button>
								<div class="clearfix"></div>
							</form>
						</div>
					</div>
					<div class="clearfix"></div>
				</li>
			</ul>
			<!--列表06 end-->
			<!--图片上传 -->

			<ul class="the-list02 s-margin">
				<li>
					<div class="title03">
						<div class="xhx-bt"><b>图片上传 </b></div>
					</div>
					<ul class="figure-lb image-upload">
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
							<div class="image-state">
								<p>50%</p>
							</div>
						</li>
						<li>
							<img src="http://106.3.45.23/assets/image/td_02.png" />
							<div class="image-state">
								<i class="icon iconfont icon-shibai-01"></i>
							</div>
						</li>
						<li>
							<div class="layui-upload-drag" id="test10">
								<i class="icon iconfont icon-jia-copy"></i>

							</div>
						</li>

						<div class="clearfix"></div>
					</ul>

				</li>

			</ul>
			<!--图片上传 end-->
		</div>

		<!--详情-->
		<div class="sj-box x-margin inside-padding">
			<div class="details-box">
				<h1>大标题</h1>
				<h3>标题</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod，Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
				<div class="details-img">
					<img src="http://106.3.45.23/assets/image/001.jpg" />
				</div>
			</div>
		</div>
		<!--票务-->
		<div class="sj-box x-margin inside-padding white">
			<div class="title10">
				<p>共计购买<b>3</b>张票</p>
			</div>
			<ul class="ticket-box02">
				<li>
					<div class="the-seal">
						<img src="http://106.3.45.23/assets/image/yp01.png" />
					</div>
					<table class="gp-sms">
						<tbody>
							<tr>
								<td>票种：成人票</td>
								<td>价格：￥100</td>
							</tr>
							<tr>
								<td colspan="2">票号：￥123456789423</td>
							</tr>
							<tr>
								<td>状态：
									<p>已签到</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="clearfix"></div>
				</li>
				<li>
					<div class="the-seal">
						<img src="http://106.3.45.23/assets/image/yp02.png" />
					</div>
					<table class="gp-sms">
						<tbody>
							<tr>
								<td>票种：成人票</td>
								<td>价格：￥100</td>
							</tr>
							<tr>
								<td colspan="2">票号：￥123456789423</td>
							</tr>
							<tr>
								<td>状态：
									<p>已签到</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="clearfix"></div>
				</li>

				<div class="clearfix"></div>
			</ul>
		</div>
		<!--易会务提醒页面-->
		<!--注意使用只要tixing-box里面的内容-->
		<!--在线签到页面-->
		<div class="tixing-box">
			<div class="be_jing">
				<div class="deng_lu">
					<p>在线签到</p>
					<div class="biao_dan">
						<form class="sys">
							<input type="text" name="firstname" placeholder="请输入您的手机号" class="input-text" />
							<!--<a href="#" class="sm_01"><i class="icon iconfont icon-huabanfuben smqd"></i></a>-->
							<a href="#" class="sm_01"><img src="http://106.3.45.23/assets/image/sys.png" /></a>
						</form>
						<span>注：手机号不可少于11位</span>
						<button type="button" class="qiandao">签到</button>
						<button type="button" class="qiandao wgp-qiandao">未购票签到</button>
					</div>
					<!--提示-->
					<!--<div class="tsx_01">
						<div class="wxts">
							<i class="icon iconfont icon-shanchu_"></i>
							<p>扫码成功</p>
						</div>
						<p>温馨提示：<br>签到成功签到成功签到成功签到成功签到成功签到成功签到成功签到成功签到成功签到成功签到成功签到成功签到成功</p>
					</div>-->
					<!--提示end-->
				</div>
			</div>
		</div>
		<!--在线签到页面 end-->
		<!--注意使用只要tixing-box里面的内容-->
		<!--报名成功-->
		<div class="tixing-box">
			<div class="be_jing02 be_jing03">
				<!--第一种展示-->
				<div class="tsk">
					<div class="xinxi-nr xinxi02">
						<!--提示图标-->
						<!--对号-->
						<div class="tis_01">
							<i class="icon iconfont icon-tijiao"></i>
						</div>
						<!--感叹号-->
						<!--<div class="tis_01">
							<i class="icon iconfont icon-tishi"></i>
						</div>-->
						<!--错号-->
						<!--<div class="tis_01 zt-pink">
							<i class="icon iconfont icon-shanchu_"></i>
						</div>-->
						<!--提示图标 end-->
						<div class="tis_03">
							报名成功
						</div>
						<div class="clearfix"></div>
					</div>
					<button type="button" class="fanhui fanhui02">查看凭证</button>
				</div>
				<!--第二种展示-->
				<div class="tsk">
					<div class="xinxi-nr">
						<div class="tis_01">
							<i class="icon iconfont icon-tishi"></i>
						</div>
						<div class="tis_02">
							本次会议，您已于【2018-08-29 / 09:10:20】签到成功！
						</div>
						<div class="clearfix"></div>
					</div>
					<button type="button" class="fanhui">返回</button>
				</div>
			</div>
		</div>
		<!--报名成功end-->
		<!--筹备中的会议-->
		<!--注意使用只要tixing-box里面的内容-->
		<div class="tixing-box">
			<div class="be_jing02">
				<div class="tsk">
					<div class="tis_06">会议处于筹备中，暂时无法报名</div>
				</div>
			</div>
		</div>
		<!--筹备中的会议end-->
		<!--易会务提醒页面 end-->
		<!--易会务手机端宣传页面-->
		<div class="sj-box">
			<!--只复制propaganda-box里面的内容-->
			<div class="propaganda-box">
				<h1>标题</h1>
				<span>2019-03-12</span>
				<div class="propaganda-tp">
					<img src="http://106.3.45.23/assets/image/xc01.jpg" />
				</div>
				<p>
					移动端管理活动，自定义注册表单。更有电子签到功能，满足现场参会数据实时统计与分析、签到用户实时同步，分会场签到等常见需求。
				</p>
				<p>易会务 移动APP/H5微会议提供多项常用的会议服务功能，几乎覆盖活动所有需求，功能全部模块化，用户自己配置前端呈现，所见即所得。让注重互动社交的会议动起来，借助移动APP/H5微会议和社交网络让您的活动会“说话”。</p>
				<p>
					微现场整合了抽奖、抢红包、红包雨、大屏幕互动上墙，微信签到等多种现场互动服务，多屏互动，让会议活动“活起来”。
				</p>
				<p>全媒体、全平台的直播平台，利用多元化的数字营销手段，广泛覆盖线上线下、手机及PC端，有效提升知名度、增加曝光率，获得更多潜在客户。</p>
				<p>您可以通过易会务的平台来管理所有活动信息和数据，包括：会议信息、大会资料、投票调查、合作伙伴，以及参会者数据等，让您的活动管理由繁杂变得简单且清晰；易会务还支持自定义注册报名表单并支持购票、支付和提醒等。</p>
				<div class="propaganda-bt">
					<!--<img src="http://106.3.45.23/assets/image/wmdyj.png"/>-->
					<p>
						易会务致力于提高主办方工作效率，减少重复劳动， 节约成本，让主办方专注于业务方面的工作。希望通过我们不断迭代优化的产品， 给您提供稳定，可靠，切合需求的场景化服务。
					</p>
				</div>

			</div>
		</div>
		<!--易会务手机端宣传页面end-->
		<!--评论-->
		<div class="sj-box">
			<!--只需复制里面内容-->
			<div class="pl-box">
				<div class="pl-biaoti"><span></span>
					<p>评论区</p>
					<div class="clearfix"></div>
				</div>
				<ul>
					<li>
						<div class="pl-yh">
							<div class="yonghu">
								<i class="icon iconfont icon-touxiang1"></i>
								<div class="pl-yh02">
									<p>名称名称</p>
									<span>2019-08-01</span>
								</div>
								<div class="clearfix"></div>
							</div>
							<ul class="pl-xinxi">

								<li>
									<i class="icon iconfont icon-duanxin"></i>
								</li>
								<li>
									<i class="icon iconfont icon-appreciate"></i>28
								</li>
								<div class="clearfix"></div>
							</ul>
							<div class="clearfix"></div>
						</div>
						<div class="plxx-box">
							<p>人称现实版流川枫:明天晚上八点，人大走起，哦不？人称现实版流川枫:明天晚上八点，人大走起，哦不？人称现实版流川枫:明天晚上八点，人大走起，哦不？人称现实版流川枫:明天晚上八点，人大走起，哦不？</p>
							<ul>
								<li>二级评论</li>
								<li>丫丫个呸的:可以呀，到时候不见不散哥们。</li>
								<p>共<span>7</span>条回复></p>
							</ul>
						</div>
					</li>
					<li>
						<div class="pl-yh">
							<div class="yonghu">
								<i class="icon iconfont icon-touxiang1"></i>
								<div class="pl-yh02">
									<p>名称名称</p>
									<span>2019-08-01</span>
								</div>
								<div class="clearfix"></div>
							</div>
							<ul class="pl-xinxi">

								<li>
									<i class="icon iconfont icon-duanxin"></i>
								</li>
								<li>
									<i class="icon iconfont icon-appreciate"></i>28
								</li>
								<div class="clearfix"></div>
							</ul>
							<div class="clearfix"></div>
						</div>
						<div class="plxx-box">
							<p>人称现实版流川枫:明天晚上八点，人大走起，哦不？人称现实版流川枫:明天晚上八点，人大走起，哦不？人称现实版流川枫:明天晚上八点，人大走起，哦不？人称现实版流川枫:明天晚上八点，人大走起，哦不？</p>
							<ul>
								<li>二级评论
									<div class="pl02-xx">
										<p>2018-08-04</p>
										<ul class="pl-xinxi">

											<li>
												<i class="icon iconfont icon-duanxin"></i>
											</li>
											<li>
												<i class="icon iconfont icon-appreciate"></i>28
											</li>
											<div class="clearfix"></div>
										</ul>
										<div class="clearfix"></div>
									</div>
									<div class="pl03-xx">
										<div>张三
											<p>回复</p><span>丫丫个呸的</span></div>
										<p>三级评论</p>
									</div>
								</li>
								<li>丫丫个呸的:可以呀，到时候不见不散哥们。</li>
								<p>共<span>7</span>条回复></p>
							</ul>
						</div>
					</li>
				</ul>

			</div>
		</div>
		<!--评论end-->
		<!--消息列表-->
		<div class="sj-box">
			<!--搜索-->
			<!--<div class="sj-search03">-->
			<!--	<div class="search03">-->
			<!--		<i class="icon iconfont icon-sousuo"></i>搜索-->
			<!--	</div>-->
			<!--</div>-->
			<div class="sj-search03">
				<div class="search03 search03-2">
					<i class="icon iconfont icon-sousuo"></i>
					<input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="搜索" class="layui-input ">
				</div>
				<a href="#">取消</a>
			</div>
			<ul class="media-list media-list02 solid-line02">
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
							
						</div>
						<span class="unread02">1</span>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</div>
							<span class="unread02">99+</span>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
						</div>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="pull-left">
							<img src="http://106.3.45.23/assets/image/td_02.png" />
							
						</div>
						<div class="media-body media-body04">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="media-body media-body04 qczy-padding">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="media-body media-body04 qczy-padding">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li>
					<a href="#">
						<div class="media-body media-body04 qczy-padding">
							<div class="media-bt">
								<h4>Media heading</h4><span>2018-12-13</span></div>
							<p>媒体列表-图片媒体列表-图片媒体列表-图片媒体列表</p>
						</div>

					</a>
				</li>
				<li >
					<a href="#" class="clefix">
						
						<div class="media-body media-body05 qczy-padding td-left">
							<div class="media-bt">
								<h4>Media heading</h4></div>
							<p>2019-09-23</p>
						</div>
						<i class="icon iconfont icon-enter tiaozhuan"></i>
					</a>
				</li>
				<li>
					<a href="#" class="clefix">
						
						<div class="media-body media-body05 qczy-padding td-left">
							<div class="media-bt">
								<h4>Media heading</h4></div>
							<p>2019-09-23</p>
						</div>
						<i class="icon iconfont icon-enter tiaozhuan"></i>
					</a>
				</li>
			</ul>
		</div>
		<!--消息列表end-->
		<!--展开全部-->
		<div class="inside-padding">
			<ul class="media-list03 l-card ">
				<p class="title13"><span>信息列表</span><button><i class="icon iconfont icon-jia-copy"></i>添加信息</button></p>
				<li>
					<h4>信息标题<span>2019/10/10</span></h4>
					<p>信息详情</p>
				</li>
				<li>
					<h4>信息标题<span>2019/10/10</span></h4>
					<p>信息详情信息详信息详情信息详情信息详情信息详情信息详情信息详情情信息详情信息详情信息详情信息详情</p>
				</li>
				<div class="unfold"><i class="icon iconfont icon-xiangxia"></i>展开全部</div>
			</ul>
		</div>

  </div>
</template>
<script>
	export default{
		mounted () {
		   


		  },		
	}

</script>
<style scoped>
		
  @import '~@/assets/css/app.css';		
  @import '~@/assets/css/td.css';		
  
	
  @import '~@/assets/font/iconfont.css';
</style>