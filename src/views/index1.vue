<template>
  <div>
    <h1>门户首页面1!</h1>

<div class="td-box x-margin">
			<fieldset class="layui-elem-field site-demo-button inside-padding">
				<legend>卡片面板</legend>
				<div class="inside-padding bj-gray">
					<div class="layui-row layui-col-space15">
						<div class="layui-col-md6">
							<div class="layui-card">
								<div class="layui-card-header">我的任务
									<i class="icon iconfont icon-tianjia td-right"></i>
								</div>
								<div class="layui-card-body">
									<ul class="task-box">
										<li>
											<div class="task-bt">
												<p>任务一:</p>
												<div class="operation-box03">
													<i class="icon iconfont icon-icon-bainji"></i>
													<i class="icon iconfont icon-shanchu4"></i>
												</div>
												<div class="clearfix"></div>
											</div>
											<p>任务详情说明任务详情说明任务详情说明任务详情说明任务详情说明任务详情说明任务详情说明</p>
										</li>
										<li>
											<div class="task-bt">
												<p>任务一:</p>
												<div class="operation-box03">
													<i class="icon iconfont icon-icon-bainji"></i>
													<i class="icon iconfont icon-shanchu4"></i>
												</div>
												<div class="clearfix"></div>
											</div>
											<p>任务详情说明任务详情说明任务详情说明任务详情说明任务详情说明任务详情说明任务详情说明</p>
										</li>

									</ul>
								</div>
							</div>
						</div>
						<div class="layui-col-md6">
							<div class="layui-card">
								<div class="layui-card-header">我的客户</div>
								<div class="layui-card-body">
									<ul class="customer-box">
										<li>
											<div class="customer-tx">
												<img src="../assets/image/td_02.png">
											</div>
											<div class="customer-xx">
												<div class="state">
													<p>张三</p>
													<span>在线</span>
													<div class="clearfix"></div>
												</div>
												<span>2018/12/17&nbsp;&nbsp;登录</span>
											</div>

											<div class="clearfix"></div>
										</li>
										<li>
											<div class="customer-tx">
												<img src="/assets/image/td_02.png">
											</div>
											<div class="customer-xx">
												<div class="state">
													<p>张三</p>
													<span class="state02">离线</span>
													<div class="clearfix"></div>
												</div>
												<span>2018/12/17&nbsp;&nbsp;登录</span>
											</div>

											<div class="clearfix"></div>
										</li>
										<div class="ck-all">查看全部<i class="icon iconfont icon-liebiao_o"></i></div>
									</ul>
								</div>
							</div>
						</div>
						<div class="layui-col-md12">
							<div class="layui-card">
								<div class="layui-card-header">消息通知</div>
								<div class="layui-card-body">
									<ul class="customer-box">
										<li>
											<div class="customer-xx customer-xxtz">
												<div class="state">
													<p>张三</p>
													<span class="state02">1天前</span>
													<div class="clearfix"></div>
												</div>
												<p>关于借用实施服务单和合同，以及公司证件者，需提前办理，不要等到下班后，私自借用。因为大部分业务都是你们业务部提前知道要用的。请你们自己计划好借用时间。提前通知行政部备好</p>
												<span>2018/12/17</span>
											</div>

											<div class="clearfix"></div>
										</li>
										<li>
											<div class="customer-xx customer-xxtz">
												<div class="state">
													<p>张三</p>
													<span class="state02">3天前</span>
													<div class="clearfix"></div>
												</div>
												<p>关于借用实施服务单和合同，以及公司证件者，需提前办理，不要等到下班后，私自借用。因为大部分业务都是你们业务部提前知道要用的。请你们自己计划好借用时间。提前通知行政部备好</p>
												<span>2018/12/17</span>
											</div>
											<div class="clearfix"></div>
										</li>
										<div class="ck-all">查看全部<i class="icon iconfont icon-liebiao_o"></i></div>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</fieldset>
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


  @import '../assets/css/layui.css';		
  @import '../assets/css/td.css';		
  @import '../assets/font/iconfont.css';
</style>