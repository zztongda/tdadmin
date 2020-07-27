<template>
  <div>
    <h1>手机端首页面1!</h1>


<!--当前用户-->
		<div class="app-dqyh">
			<i class="icon iconfont icon-touxiang1"></i>用户名：张三
			<i class="icon iconfont icon-tuichu"></i>
		</div>
		<!--项目图标-->
		<ul class="app-tb clefix">
			<li>
				<a href="#">
					<div class="app-jrgz"><i class="icon iconfont icon-huo "></i></div>

					<p>今日工作</p>
				</a>
			</li>

			<li>
				<a href="#">
					<div class="app-jrgz app-wd"><i class="icon iconfont icon-daiban"></i></div>
					<p>我的工作</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="app-jrgz app-zx"><i class="icon iconfont icon-xiangmu "></i></div>
					<p>执行中任务</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="app-jrgz app-ss"><i class="icon iconfont icon-linedesign-12"></i></div>
					<p>搜索</p>
				</a>
			</li>
		</ul>
		<!--分割线-->
		<div class="app-line"></div>
		<!--列表-->
		<div class="app-list">
			<ul class="clefix app-tab">
				<li class="tab-qq">进行中<span></span></li>
				<li>已完成</li>
				<li>全部项目</li>
			</ul>
			<!--列表01-->
			<ul class="app-list01">
				<li>
					<h2><span></span>煤监局调研报告与处室联系分局&财务门户</h2>
					<p>状态：信息中心OA和厅OA单点登录，以及登陆界面，app的logo因网络原因，单点需要到现场。节后去现场进行。</p>
					<div class="app-jd">
						<span style="width: 80%;"></span>
						<p>80%</p>
					</div>
				</li>
				<li>
					<h2><span></span>煤监局调研报告与处室联系分局&财务门户</h2>
					<p>状态：信息中心OA和厅OA单点登录，以及登陆界面，app的logo因网络原因，单点需要到现场。节后去现场进行。</p>
					<div class="app-jd">
						<span style="width: 80%;"></span>
						<p>80%</p>
					</div>
				</li>
				<li>
					<h2><span></span>煤监局调研报告与处室联系分局&财务门户</h2>
					<p>状态：信息中心OA和厅OA单点登录，以及登陆界面，app的logo因网络原因，单点需要到现场。节后去现场进行。</p>
					<div class="app-jd">
						<span style="width: 80%;"></span>
						<p>80%</p>
					</div>
				</li>
			</ul>
			<!--列表02-->
			<ul class="app-list02 clefix">
				<li>
					<div>
						<h2>煤监局调研报告与处理报告与处理</h2>
						<p>状态：客户反馈中</p>
						<div class="app-jd-box">
							进度：<span>80%</span>
							<div class="app-jd">
								<span style="width: 80%;"></span>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div>
						<h2>煤监局调研报告与处理报告与处理</h2>
						<p>状态：客户反馈中</p>
						<div class="app-jd-box">
							进度：<span>80%</span>
							<div class="app-jd">
								<span style="width: 80%;"></span>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div>
						<h2>煤监局调研报告与处理报告与处理</h2>
						<p>状态：客户反馈中</p>
						<div class="app-jd-box">
							进度：<span>80%</span>
							<div class="app-jd">
								<span style="width: 80%;"></span>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div>
						<h2>煤监局调研报告与处理报告与处理</h2>
						<p>状态：客户反馈中</p>
						<div class="app-jd-box">
							进度：<span>80%</span>
							<div class="app-jd">
								<span style="width: 80%;"></span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<!--新建项目按钮-->
			<form class="app-xjxm">
				<button> 新建项目</button>
			</form>
		</div>
		<!--分割线-->
		<div class="app-line"></div>
		<!--开发部成员-->
		<div class="app-kf">
			<p><i class="icon iconfont icon-chengyuanicon"></i>开发部成员 </p>
			<!--开发部成员01-->
			<ul class="clefix app-kfbcy01">
				<li>
					<a href="#">
						<div class="app-cytx">
							<img src="~@/assets/image/td_02.png" />
						</div>
						<p>张先生</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="app-cytx">
							<img src="~@/assets/image/td_02.png" />
						</div>
						<p>张先生</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="app-cytx">
							<img src="~@/assets/image/td_02.png" />
						</div>
						<p>张先生</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="app-cytx">
							<img src="~@/assets/image/td_02.png" />
						</div>
						<p>张先生</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="app-cytx">
							<img src="~@/assets/image/002.jpg" />
						</div>
						<p>张先生</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="app-cytx">
							<img src="~@/assets/image/td_02.png" />
						</div>
						<p>张先生</p>
					</a>
				</li>

			</ul>
			<!--开发部成员02 有横向滚动条,包两个div-->
			<div class="over-hidden">
				<div class="app-scroll-y">
					<ul class="clefix app-staff app-kfbcy02" style="overflow: hidden;">
						<li>
							<a href="#">
								<div class="app-cytx">
									<img src="~@/assets/image/td_02.png" />
								</div>
								<p>张先生</p>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="app-cytx">
									<img src="~@/assets/image/td_02.png" />
								</div>
								<p>张先生</p>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="app-cytx">
									<img src="~@/assets/image/td_02.png" />
								</div>
								<p>张先生</p>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="app-cytx">
									<img src="~@/assets/image/td_02.png" />
								</div>
								<p>张先生</p>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="app-cytx">
									<img src="~@/assets/image/td_02.png" />
								</div>
								<p>张先生</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--分割线-->
		<div class="app-line"></div>
		<!--筛选条件-->
		<ul class="clefix app-sxtj">
			<li>
				<p>已完成状态<i class="icon iconfont icon-cuowu"></i></p>
			</li>
			<li>
				<p>负责人:张三<i class="icon iconfont icon-cuowu"></i></p>
			</li>
			<li>
				<p>发布人:杜注梁<i class="icon iconfont icon-cuowu"></i></p>
			</li>
			<li>
				<p>已完成状态<i class="icon iconfont icon-cuowu"></i></p>
			</li>

		</ul>
		<!--列表03-->
		<ul class="app-list01 app-list03">
			<li>
				<h2><span></span>煤监局调研报告与处室联系分局&财务门户</h2>
				<p>状态：信息中心OA和厅OA单点登录，以及登陆界面，app的logo因网络原因，单点需要到现场。节后去现场进行。</p>
				<ul class="app-fzr clefix">
					<li><i class="icon iconfont icon-gerenzhongxin"></i>责任人：张蒙蒙</li>
					<li><i class="icon iconfont icon-shijian1"></i>08-13 ~ 08-14</li>
				</ul>
			</li>
			<li>
				<h2><span></span>煤监局调研报告与处室联系分局&财务门户</h2>
				<p>状态：信息中心OA和厅OA单点登录，以及登陆界面，app的logo因网络原因，单点需要到现场。节后去现场进行。</p>
				<ul class="app-fzr clefix">
					<li><i class="icon iconfont icon-gerenzhongxin"></i>责任人：张蒙蒙</li>
					<li><i class="icon iconfont icon-shijian1"></i>08-13 ~ 08-14</li>
				</ul>
			</li>
			<li>
				<h2><span></span>煤监局调研报告与处室联系分局&财务门户</h2>
				<p>状态：信息中心OA和厅OA单点登录，以及登陆界面，app的logo因网络原因，单点需要到现场。节后去现场进行。</p>
				<ul class="app-fzr clefix">
					<li><i class="icon iconfont icon-gerenzhongxin"></i>责任人：张蒙蒙</li>
					<li><i class="icon iconfont icon-shijian1"></i>08-13 ~ 08-14</li>
				</ul>
			</li>
		</ul>
		<!--分割线-->
		<div class="app-line"></div>
		<!--扶贫首页-->
		<form class="sj-search04">
			<input type="text" name="title" placeholder="请输入搜索内容">
			<button type="button">
						<i class="icon iconfont icon-sousuo"></i>
					</button>
		</form>
		<div class="app-line"></div>

		<ul class="app-list04">
			<li>
				<a>
					<div class="app-list04-nr">
						<p>姓名：张三 <span>电话：15538986569</span></p>
						<p>帮扶责任人：李四</p>
						<p>地址：郑州市中原区大学科技园郑州市中原区大学科...</p>
					</div>
					<div class="app-list04-bz clefix">
						<p><i class="icon iconfont icon-huiyuanmingdan "></i>贫困属性：一般贫困户</p>
						<p><i class="icon iconfont icon-kongzhikuangjia"></i>脱贫状态：未脱贫</p>
					</div>
				</a>
			</li>
			<li>
				<a>
					<div class="app-list04-nr">
						<p>姓名：张三 <span>电话：15538986569</span></p>
						<p>帮扶责任人：李四</p>
						<p>地址：郑州市中原区大学科技园郑州市中原区大学科...</p>
					</div>
					<div class="app-list04-bz clefix">
						<p><i class="icon iconfont icon-huiyuanmingdan "></i>贫困属性：一般贫困户</p>
						<p><i class="icon iconfont icon-kongzhikuangjia"></i>脱贫状态：未脱贫</p>
					</div>
				</a>
			</li>
		</ul>
		<!--照片历史记录-->
		<ul class="app-list05">
			<li>
				<a>
					<div class="app-list05-tp">
						<img src="~@/assets/image/002.jpg" />
					</div>
					<div class="app-list05-nr">
						<p>贫困户姓名：张三</p>
						<p>类型：低保贫困户</p>
						<p>拍照时间：2019-12-30</p>
					</div>
				</a>
			</li>
			<li>
				<a>
					<div class="app-list05-tp">
						<img src="~@/assets/image/002.jpg" />
					</div>
					<div class="app-list05-nr">
						<p>贫困户姓名：张三</p>
						<p>类型：低保贫困户</p>
						<p>拍照时间：2019-12-30</p>
					</div>
				</a>
			</li>
		</ul>
		<!--照片标注-->
		<ul class="image-upload02 clefix">
			<li>
				<img src="~@/assets/image/002.jpg" />
				<i class="icon iconfont icon-shanchu1"></i>
			</li>
			<li>
				<img src="~@/assets/image/002.jpg" />
				<i class="icon iconfont icon-shanchu1"></i>
			</li>
			<li>
				<img src="~@/assets/image/002.jpg" />
				<i class="icon iconfont icon-shanchu1"></i>
			</li>
			<li>
				<div class="image-sc"><i class="icon iconfont icon-add"></i></div>
			</li>
		</ul>
		<form class="layui-form mark">
			<span>标注类型：</span>
			<div class="layui-input-inline">
				<input type="radio" name="sex" value="不需要整改" title="不需要整改">
				<input type="radio" name="sex" value="需要整改" title="需要整改">
			</div>
			<button>提交</button>
		</form>
		<!--详情页-->
		<div class="details">
			<p>姓名：张三
				<br> 电话：15553026986
				<br> 地址：郑州市中原区大学科技园郑州市中原区大学科技园郑州市中原区大学科技园
				<br> 家庭人口：4人
				<br> 帮扶责任人：李四
				<br> 贫困户属性：一般贫困户
				<br> 脱贫状态：脱贫中
			</p>
		</div>
		<!--分割线-->
		<div class="app-line"></div>
		<!--签到记录-->
		<div class="qd-details">
			<h2><span></span>最近三次签到记录</h2>
			<table border="1">
				<colgroup>
					<col width="" align="center">
					<col width="100" align="center">
				</colgroup>

				<thead>
					<tr>
						<th align="center"> 签到地点</th>
						<th align="center"> 操作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td align="center"> 郑州市中原区大学科技园郑州市中原区郑州市中原区大学科技园郑州市中原区</td>
						<td align="center">
							<a><i class="icon iconfont icon-tuiguang1"></i>导航</a>
						</td>
					</tr>
					<tr>
						<td align="center"> 郑州市中原区大学科技园郑州市</td>
						<td align="center">
							<a><i class="icon iconfont icon-tuiguang1"></i>导航</a>
						</td>
					</tr>
					<tr>
						<td align="center"> 郑州市中原区大学科技园郑州市中原区郑州市中</td>
						<td align="center">
							<a><i class="icon iconfont icon-tuiguang1"></i>导航</a>
						</td>
					</tr>
				</tbody>

			</table>
		</div>
		<!--分割线-->
		<div class="app-line"></div>
		<div class="cz-details ">
			<form>
				<button>签到</button>
				<button class="luyin">录音</button>
				<button class="paizhao">拍照</button>
			</form>
			<ul>
				<div>填表</div>
				<li>
					<a href="##">贫困户、边缘户、脱贫监测户信息采集表</a>
				</li>
				<li>
					<a href="##">建档立卡户入户调查问卷</a>
				</li>
				<li>
					<a href="##">非建档立卡户入户调查问卷</a>
				</li>
				<li>
					<a href="##">贫困户享受行业政策一览表</a>
				</li>
				<li>
					<a href="##">问卷历史记录</a>
				</li>
			</ul>
		</div>
		<div class="app-line"></div>
		<!--签到历史记录-->
		<form class="sj-search05">
			<div class="sj-search05-ss">
				<input type="text" name="title" placeholder="请输入搜索内容">
				<button type="button">
			<i class="icon iconfont icon-sousuo"></i>
			</button>
			</div>
			<div class="sj-search05-an"><button>签到</button></div>

		</form>
		<div class="app-line"></div>
		<ul class="app-list05">
			<li>
				<a>
					<p>签到地点：郑州市中原区大学科技园郑州市中原区中原<br> 园郑州市中原区大学科技园
						<br> 签到时间：2019-12-30 15:55<br> 贫苦户姓名：张三
					</p>
				</a>
			</li>
			<li>
				<a>
					<p>签到地点：郑州市中原区大学科技园郑州市中原区中原<br> 园郑州市中原区大学科技园
						<br> 签到时间：2019-12-30 15:55<br> 贫苦户姓名：张三
					</p>
				</a>
			</li>
		</ul>
		<!--分割线-->
		<div class="app-line"></div>
		<!--问卷调查历史记录-->
		<form class="sj-search05">
			<div class="sj-search05-ss">
				<input type="text" name="title" placeholder="请输入搜索内容">
				<button type="button">
			<i class="icon iconfont icon-sousuo"></i>
			</button>
			</div>
			<div class="sj-search05-an">
				<p class="sj-search05-btn">筛选<i class="icon iconfont icon-xiangxia"></i></p>
				<ul class="sj-search05-xl">
					<li>
						<a>贫困户、边缘户、脱贫监测户信息采集表 </a>
					</li>
					<li>
						<a> 建档立卡户入户调查问卷</a>
					</li>
					<li>
						<a>非建档立卡户入户调查问卷 </a>
					</li>
					<li>
						<a>贫困户享受行业政策一览表 </a>
					</li>
				</ul>
			</div>

		</form>
		<div class="app-line"></div>
		<ul class="app-list05">
			<li>
				<a>
					<p>调查问卷：建档立卡户入户调查问卷<br> 调查对象姓名：李四
						<br> 调查对象属性：一般贫困户
						<br> 调查时间：2019-12-30
					</p>
				</a>
			</li>
			<li>
				<a>
					<p>调查问卷：建档立卡户入户调查问卷<br> 调查对象姓名：李四
						<br> 调查对象属性：一般贫困户
						<br> 调查时间：2019-12-30
					</p>
				</a>
			</li>
		</ul>
		

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
	
  @import '~@/assets/font/iconfont.css';
</style>