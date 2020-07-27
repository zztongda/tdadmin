<template>
  <div>
    <h1>手机端样式1!</h1>

    <!--搜索-->
    <div class="ui-searchbar-wrap" id="search_bar">
      <div class="ui-searchbar ui-border-radius" id="enterSearch">
        <i class="ui-icon-search"></i>
        <div class="ui-searchbar-text">搜索</div>
        <div class="ui-searchbar-input">
          <input value type="text" placeholder="搜索" autocapitalize="off" />
        </div>
      </div>
    </div>
    <!--点击后的搜索框-->
    <!--<section id="search" style="background: rgb(255, 255, 255); display: block;" class="content">
		<div class="ui-searchbar-wrap focus" id="search_container">
                <div class="ui-searchbar ui-border-radius">
                    <i class="ui-icon-search"></i>
                    <div class="ui-searchbar-text">搜索</div>
                    <div class="ui-searchbar-input"><input value="" type="text" placeholder="搜索" autocapitalize="off" id="search_keywords"></div>
                </div>
				<button class="ui-searchbar-cancel ui-btn" id="btn_search" style="display:none">搜索</button>
				<button class="ui-searchbar-cancel" id="cancel_search">取消</button>
            </div>

            <section class="ui-email-wrap search_list">
                <div class="ui-email-list ui-datalist"></div>
            </section>
    </section>-->

    <!--收件箱-->
    <ul class="data-list ui-list ui-border-tb">
      <li class="ui-border-t" data-id="142" data-attachment="0" data-bodyid="7">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">
            <i class="ui-icon-xingxing icon-star" style="color:#c9cbc9"></i>

            <strong class="ui-email-list-toname">赵敏</strong>

            <span class="ui-txt-muted ui-email-name-preview ui-float-right">2019-08-08</span>
          </h4>
          <h6 class="ui-email-list-title">灭火器使用方法及用电安全培训</h6>
          <p
            class="ui-txt-muted ui-email-list-content"
          >各位领导及同事：为加强消防安全管理，增强安全意识，现将灭火器使用及用电安全培训内容发给大家，安全与我们息息相关，请仔细阅读，安全生产办公室将会不定期进行抽查。一、灭火器使用方法干粉灭火器使用方法：1、在距离起火点约5米处，放下灭火器。2、使用前将灭火器上下颠倒几次，使筒内干粉松动。3、内装式或贮压式的使用方法：先拔下保险销，一只手握住喷嘴，另一只手用力按下压把，干粉即喷出。使用及维护注意事项：1、使用时要处在上风位置。2、干粉灭火器在使用时应保持直立状态，不能平放或倒置使用，否则不能喷粉。3、干粉灭火器应保持干燥、密封，以防止干粉结块，同时要防止受潮和日光曝晒。4、每次使用后要重新装粉和充气。二、用电安全培训1、思想重视自觉提高安全用电意识和觉悟，坚持“安全第一，预防为主”的思想，确保生命和财产安全，从内心真正的重视安全，促进安全生产。2、不能私拉私接电线、不能在电线上或其它电器设备上悬挂衣物和杂物、不能私自加装使用大功率或不符合国家安全标准的电器设备。3、确保电器设备良好散热，不能在其周围堆放易燃易爆物品及杂物、防止因散热不良而损坏设备或引起火灾。4、湿手或赤脚不要接触开关、插座、插头和各种电源接口，不要用湿布抹照明用具和电器设备。5、移动或清洗电器设备时，必须切断电源。6、发现电器设备冒烟或闻到异味（焦味）时，要迅速切断电源，通知电工检查和维修，避免扩大故障范围和发生触电事故。7、发现电线破损要及时更换或用绝缘胶布扎好，严禁用普通医用胶布或其他胶布包扎。8、珍惜电力资源，养成安全用电和节约用电的良好习惯，当要长时间离开或不使用时，要确定切断电源(特别是电热电器)的情况下才能离开。</p>
        </div>

        <div class="ui-list-op-delete">
          <div class="ui-btn-dangerr" data-emailid="142" data-candelete="true">
            <span class="ui-icon-delbox"></span>
          </div>
        </div>
        <div class="ui-list-op-destory">
          <div class data-emailid="142" data-candelete="true">
            <span class="ui-icon-shanchubingguanbi"></span>
          </div>
        </div>
        <div class="ui-list-op-Stars" data-emailid="142">
          <div>
            <i class="ui-icon-xingxing"></i>
          </div>
        </div>
      </li>

      <li class="ui-border-t" data-id="120" data-attachment="0" data-bodyid="6">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">
            <i class="ui-icon-xingxing icon-star" style="color:#c9cbc9"></i>

            <strong class="ui-email-list-toname">常白</strong>

            <span class="ui-txt-muted ui-email-name-preview ui-float-right">2019-08-08</span>
          </h4>
          <h6 class="ui-email-list-title">增值税税率更改通知</h6>
          <p
            class="ui-txt-muted ui-email-list-content"
          >通知 根据国家税务局规定，现将有关事项通知如下： （1）自2019年4月1日起将原适用增值税16%的税率调整为13%，不再开具16%税率的发票。 （2）2019年4月1日之前取得的16%税率的发票仍可以进行费用报销。财务管理部2019年3月20日</p>
        </div>

        <div class="ui-list-op-delete">
          <div class="ui-btn-dangerr" data-emailid="120" data-candelete="true">
            <span class="ui-icon-delbox"></span>
          </div>
        </div>
        <div class="ui-list-op-destory">
          <div class data-emailid="120" data-candelete="true">
            <span class="ui-icon-shanchubingguanbi"></span>
          </div>
        </div>
        <div class="ui-list-op-Stars" data-emailid="120">
          <div>
            <i class="ui-icon-xingxing"></i>
          </div>
        </div>
      </li>

      <li class="ui-border-t" data-id="98" data-attachment="0" data-bodyid="5">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">
            <i class="ui-icon-xingxing icon-star" style="color:#c9cbc9"></i>

            <strong class="ui-email-list-toname">张兰</strong>

            <span class="ui-txt-muted ui-email-name-preview ui-float-right">2019-08-06</span>
          </h4>
          <h6 class="ui-email-list-title">通达全新OA可选组件 - 知己者费用管控系统</h6>
          <p
            class="ui-txt-muted ui-email-list-content"
          >随着企业的发展和不断壮大，企业的决策者对如何防止支付风险，加强费用控制，降低企业成本提出了更高的要求。为了满足用户的需求，通达成都研发中心研发了知己者费用管控系统，这款通达OA可选组件把管理制度，报销标准和审批制度相结合，支持第三方CRM、ERP、财务软件数据的调用，支持按预算、按申请单金额、按报销制度标准控制费用。为企业打造统一的财务共享服务信息系统平台，帮助企业实现操作模式标准化、业务流程标准化和财务制度标准化。 知己者费用管控系统将企业的财务控制前移至业务前端，强化了事前的预算控制和业务控制，减少了人为的判断和控制，降低了企业对财务人员数量和质量的需求。系统提供了丰富的决策信息，通过与内外部系统的无缝对接，保证业务信息和财务信息在系统间及时准确的传递，减少业务流程步骤，提高数据传输效率，提升财务质量，便于管理层在流程中控制和监督业务执行情况，及时发现执行中存在的偏差。 同时，支持用户自定义表单模板和表单要素信息，可按网银格式导出银行代发清单，导出记账凭证，多人多部门分摊报销冲抵借款单。支持条码扫描，保证所有财务基础数据得到完整的存储。决策层通过系统可查询各种数据信息，追踪业务全过程，使数据真实性和业务全程透明化得到真正的保障，为全面分析企业数据奠定基础。</p>
        </div>

        <div class="ui-list-op-delete">
          <div class="ui-btn-dangerr" data-emailid="98" data-candelete="true">
            <span class="ui-icon-delbox"></span>
          </div>
        </div>
        <div class="ui-list-op-destory">
          <div class data-emailid="98" data-candelete="true">
            <span class="ui-icon-shanchubingguanbi"></span>
          </div>
        </div>
        <div class="ui-list-op-Stars" data-emailid="98">
          <div>
            <i class="ui-icon-xingxing"></i>
          </div>
        </div>
      </li>
    </ul>
    <!--收件箱 end-->
    <hr />
    <!--邮件详情-->
    <div class="ui-whitespace">
      <h1 class="ui-article-title" data-id="142">灭火器使用方法及用电安全培训</h1>
      <ul class="ui-list ui-border-b ui-email-names" id="headinfo">
        <!--收件箱的发件人-->
        <li class>
          <div class="ui-list-info">
            <h4 class="ui-txt-muted" data-uid="9">
              <span>发件人：赵敏</span>
              <i
                class="ui-icon-like ui-float-right"
                id="likeicon"
                onclick="changePraiseState()"
                data-emailid="142"
                data-bodyid="7"
              ></i>
            </h4>
          </div>
        </li>
        <!--收件人-->
        <li class id="fromnameli">
          <div class="ui-list-info">
            <h4 class="ui-txt-muted ui-names-short" data-uid="9">
              收件人：
              <span>李佳,王云,系统管理员...</span>
            </h4>
            <h4 class="ui-txt-muted ui-names-long" data-uid="9">
              收件人：
              <span>李佳,王云,系统管理员,刘娜,王德,常白,赵敏,刘明才,王舞,刘永康,王毅,陈飞飞,李天,温炳康,张山,张兰,伊云飞,李琦,念得失,吴海,陈强,陈长流</span>
            </h4>
          </div>
          <div class="ui-eamil-icon" onclick="changeFromname()" id="frmoname">
            <i class="ui-icon-zhankai1"></i>
          </div>
        </li>
        <!-- 外部收件人 -->
        <!--抄送人-->
        <li class id="csnameli" style="display:none">
          <div class="ui-list-info">
            <h4 class="ui-txt-muted ui-names-short">抄送人：</h4>
          </div>
        </li>
        <!--时间-->
        <li class>
          <div class="ui-list-info">
            <h4 class="ui-txt-muted">
              2019-08-08 14:44:42
              <span
                class="ui-float-right ui-lookup-detail"
                id="lookup"
                data-bodyid="7"
                data-emailid="142"
              >查阅情况</span>
            </h4>
          </div>
          <!--<div class="ui-eamil-icon" onclick="hideHeadInfo()" >     <i class="ui-icon-shouqi"  style="font-size:20px;"></i>    </div>-->
        </li>
      </ul>
      <div class="ui-article-content">
        <p style="word-break:break-all;word-wrap:break-word"></p>
        <div
          style="font-family:'Microsoft YaHei', 'PingFang SC', 'Lantinghei SC', arial, '宋体', sans-serif, tahoma;padding:0px;margin:10px 0px 10px 5px;color:rgb(51,51,51);white-space:normal;min-height:75px;line-height:1.3;font-size:12pt;"
        >
          <p
            style="font-family:'Microsoft YaHei', Simsun, Arial, sans-serif;padding:0px;margin:10px;"
          >各位领导及同事：</p>
          <p
            style="font-family:'Microsoft YaHei', Simsun, Arial, sans-serif;padding:0px;margin:10px;"
          >为加强消防安全管理，增强安全意识，现将灭火器使用及用电安全培训内容发给大家，安全与我们息息相关，请仔细阅读，安全生产办公室将会不定期进行抽查。</p>
          <p
            style="font-family:'Microsoft YaHei', Simsun, Arial, sans-serif;padding:0px;margin:10px;"
          >一、灭火器使用方法</p>
          <p
            style="font-family:'Microsoft YaHei', Simsun, Arial, sans-serif;padding:0px;margin:10px;"
          >干粉灭火器使用方法：</p>
        </div>
        <div
          class="accordion"
          style="font-family:'Microsoft YaHei', Simsun, Arial, sans-serif;padding:0px;margin:0px 0px 20px;color:rgb(51,51,51);font-size:12px;white-space:normal;"
        ></div>
        <p>
          <br />
        </p>
        <p></p>
      </div>
      <div class="clearfix" style="height: 40px;border-bottom: 1px solid #efefef;">
        <h3 class="Intercourse_title" style="float:left">最近记录</h3>
        <!-- 上一页下一页 -->
        <div class style="float:right;margin-top: 5px;">
          <button
            id="preBtn"
            class="btn"
            style="margin-right: 60px;font-size:14px;"
            data-changid
          >上一封</button>
          <button id="nextBtn" class="btn" style="font-size:14px;" data-changid="120">下一封</button>
        </div>
      </div>
    </div>
    <!--邮件详情 end-->
    <hr />
    <!--查阅情况-->

    <!--<ul class="data-list ui-list ui-border-tb">
			<li data-id="140" class="ui-border-t">
				<div class="ui-list-info">
					<h4 class="ui-nowrap">
			&nbsp;李佳
				
					<span class="ui-tag" style="color:#2ebd01">未读</span>
					
				<span class="ui-float-right" style="color:#999;font-size:12px;"></span>
			</h4>
					<p>&nbsp;总经办</p>
				</div>

			</li>

			<li data-id="141" class="ui-border-t">
				<div class="ui-list-info">
					<h4 class="ui-nowrap">
			&nbsp;王云
				
					<span class="ui-tag" style="color:#2ebd01">未读</span>
					
				<span class="ui-float-right" style="color:#999;font-size:12px;"></span>
			</h4>
					<p>&nbsp;综合管理部</p>
				</div>

			</li>

			<li data-id="146" class="ui-border-t">
				<div class="ui-list-info">
					<h4 class="ui-nowrap">
			&nbsp;赵敏
				
					<span class="ui-tag" style="color:#e4aa1d">已读</span>
				
				<span class="ui-float-right" style="color:#999;font-size:12px;"></span>
			</h4>
					<p>&nbsp;综合管理部/行政部</p>
				</div>

			</li>

    </ul>-->

    <!--查阅情况 end-->
    <!--公告通知-->
    <ul class="data-list ui-list ui-border-tb ui-list-link">
      <li class="ui-border-t" data-id="5" data-top="0" data-flag="1" data-attachment="0">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">[通知]技术沙龙通知</h4>
          <p class="ui-txt-muted">
            2019-08-06
            <span class="ui-margin-left">刘娜</span>
          </p>
        </div>
      </li>

      <li class="ui-border-t" data-id="4" data-top="0" data-flag="1" data-attachment="0">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">[通知]关于员工福利的通知</h4>
          <p class="ui-txt-muted">
            2019-08-06
            <span class="ui-margin-left">刘娜</span>
          </p>
        </div>
      </li>

      <li class="ui-border-t" data-id="3" data-top="0" data-flag="1" data-attachment="0">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">[通知]“大连行”夏游活动日程安排</h4>
          <p class="ui-txt-muted">
            2019-08-06
            <span class="ui-margin-left">王云</span>
          </p>
        </div>
      </li>

      <li class="ui-border-t" data-id="2" data-top="0" data-flag="1" data-attachment="0">
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap">[通报]关于表扬销售部朱红拾金不昧行为的通报</h4>
          <p class="ui-txt-muted">
            2019-08-06
            <span class="ui-margin-left">王云</span>
          </p>
        </div>
      </li>
    </ul>
    <!--公告通知 end-->
    <hr />
    <!--新建公告-->
    <div class="ui-form ui-border-t">
      <div class="ui-form-item ui-border-b">
        <label>公告标题</label>
        <input type="text" id="notifyTitle" placeholder="请输入公告标题" />
      </div>
      <div class="ui-form-item ui-border-b">
        <label>公告类型</label>
        <div class="ui-select">
          <select id="notifyType">
            <option value>选择公告类型</option>
            <option value="01" data-type="0">决定</option>
            <option value="02" data-type="0">通知</option>
            <option value="03" data-type="0">通报</option>
            <option value="04" data-type="0">其他</option>
          </select>
        </div>
      </div>
      <div class="ui-form-item ui-form-item-show ui-border-b">
        <span>按人员发布</span>
        <button type="button" class="ui-btn ui-btn-primary" id="selectUser">选择人员</button>
        <input type="hidden" name="usersVal" value />
        <textarea id="selectUserVal" disabled="disabled"></textarea>
      </div>
      <div class="ui-form-item ui-form-item-show ui-border-b">
        <span>按部门发布</span>
        <button type="button" class="ui-btn ui-btn-primary" id="selectDept">选择部门</button>
        <input type="hidden" name="deptsVal" value />
        <textarea id="selectDeptVal" disabled="disabled"></textarea>
      </div>
      <div class="ui-form-item ui-border-b">
        <label>发布时间</label>
        <input type="text" id="sendDate" readonly />
      </div>
      <div class="ui-form-item ui-border-b">
        <label>有效期开始</label>
        <input type="text" id="startDate" readonly />
      </div>
      <div class="ui-form-item ui-border-b">
        <label>有效期结束</label>
        <input type="text" id="endDate" readonly />
      </div>
      <div
        class="ui-form-item ui-form-item-checkbox ui-border-b"
        id="smsNoticeWrapper"
        style="display: none;"
      >
        <label class="ui-checkbox">
          <input type="checkbox" id="smsNotice" />
        </label>
        <p>发送事务提醒消息</p>
      </div>
      <div class="ui-form-item ui-form-item-checkbox ui-border-b">
        <label class="ui-checkbox">
          <input type="checkbox" id="allowDownload" />
        </label>
        <p>允许下载Office附件</p>
      </div>
      <div class="ui-form-item ui-form-item-checkbox ui-border-b">
        <label class="ui-checkbox">
          <input type="checkbox" id="allowPrint" />
        </label>
        <p>允许打印Office附件</p>
      </div>
      <div class="ui-form-item ui-form-item-checkbox ui-border-b">
        <label class="ui-checkbox">
          <input type="checkbox" id="top" />
        </label>
        <p>置顶</p>
      </div>
      <div class="ui-form-item ui-border-b">
        <label>置顶天数</label>
        <input type="text" id="topDay" value="0" />
      </div>
      <div class="ui-form-item ui-border-b">
        <span>附件</span>
        <button type="button" class="ui-btn ui-btn-primary" id="attachment">添加附件</button>
        <div class="filelist ui-attach-file ui-attachment-wrap ui-images-list"></div>
      </div>
      <div class="ui-form-item ui-border-b">
        <span>内容简介</span>
        <textarea id="contentSub"></textarea>
      </div>
      <div class="ui-form-item ui-border-b">
        <span>内容</span>
        <textarea id="content"></textarea>
      </div>
      <div class="ui-form-item ui-border-b" id="auditerWrapper" style="display: none;">
        <label>选择审批人</label>
        <div class="ui-select">
          <select id="auditer"></select>
        </div>
      </div>
      <div class="ui-btn-wrap">
        <button class="ui-btn ui-btn-primary" id="notifySend">发布</button>
        <button class="ui-btn" id="notifySave">保存</button>
      </div>
    </div>
    <!--新建公告 end-->
    <hr />
    <!--写日志-->

    <form action="submit.php" method="post" id="form1" name="form1">
      <div class="ui-form ui-border-t">
        <div class="ui-form-item ui-border-b">
          <label>日志类型</label>
          <div class="ui-select">
            <select name="dia_type" id="dia_type" class="ui-txt-muted">
              <option selected value="1">工作日志</option>
              <option value="2">个人日志</option>
            </select>
          </div>
        </div>
        <div class="ui-form-item ui-border-b">
          <label>日志标题</label>
          <div class="ui-select-group">
            <input id="subject" name="subject" class="ui-txt-muted" value="2019-09-24 星期二 日志" />
          </div>
        </div>
        <div class="ui-form-item ui-border-b">
          <label>选择日期</label>
          <div class="ui-select-group">
            <input id="dia_date" name="dia_date" placeholder="请选择日期" class="ui-txt-muted" readonly />
          </div>
        </div>

        <div class="ui-form-item ui-border-b" id="share">
          <p>日志共享</p>
          <img
            class="ui-float-right"
            src="http://106.3.45.23/frame/assets/td/style/oa/img/btn_share.png"
            style="width:18px;position: absolute;top: 50%;right: 16px;margin-top: -9px;"
          />
          <div id="shareList" class="ui-txt-muted ui-nowrap"></div>
        </div>

        <div class="ui-form-item">日志内容</div>
        <div class="ui-form-item ui-border-b" style="height:250px;">
          <textarea
            placeholder="请填写日志内容"
            style="height:220px;padding-left:0px;line-height:1.7em;color:#333;"
            class="ui-txt-muted"
            name="content"
            id="content"
          ></textarea>
        </div>
      </div>

      <div class="ui-form ui-margin-bottom">
        <div class="ui-form-item ui-form-item-switch ui-border-b" id="attachment">
          <p>图片附件</p>
          <label class="ui-switch">
            <!--<i class="ui-icon-thumb ui-iconfont-size-middle ui-float-right" node-type="uploadBtn" node-data="image"  style="margin-top: -10px;color: #0e86fe;font-size: 28px;font-weight: bold;"></i>-->
            <img
              class="ui-float-right"
              node-type="uploadBtn"
              node-data="image"
              src="http://106.3.45.23/frame/assets/td/style/oa/img/btn_photo.png"
              style="width:18px;position: absolute;top: 50%;right: 0px;margin-top: -9px;"
            />
          </label>
        </div>
        <ul node-type="imgList" class="ui-grid-trisect ui-border-b" style="display:none;">
          <li class="ui-txt-info">图片区域</li>
        </ul>
      </div>
    </form>

    <!--写日志 end-->
    <hr />
    <!--公共文件柜-->
    <ul class="ui-list ui-list-link ui-border-tb">
      <li id="goBackToParent" class="ui-border-t" onclick="history.back();">
        <img
          class="net_i"
          style="padding-top:24px;"
          src="http://106.3.45.23/frame/assets/td/style/oa/img/icon_back_def.png"
        />
        <div class="ui-list-info">
          <h4 class="ui-nowrap">返回上一级</h4>
        </div>
      </li>
      <li class="ui-border-t" onclick="routie('list/53');" data-type="folder" data-qid="53">
        <img
          class="net_i"
          style="padding-top:22px;"
          src="http://106.3.45.23/frame/assets/td/style/oa/img/icon_folder_bef.png"
        />
        <div class="ui-list-info">
          <h4 class="ui-nowrap">行政办公制度</h4>
        </div>
      </li>
      <li class="ui-border-t" onclick="routie('list/54');" data-type="folder" data-qid="54">
        <img
          class="net_i"
          style="padding-top:22px;"
          src="http://106.3.45.23/frame/assets/td/style/oa/img/icon_folder_bef.png"
        />
        <div class="ui-list-info">
          <h4 class="ui-nowrap">人力资源开发与管理制度</h4>
        </div>
      </li>
      <li class="ui-border-t" onclick="routie('list/55');" data-type="folder" data-qid="55">
        <img
          class="net_i"
          style="padding-top:22px;"
          src="http://106.3.45.23/frame/assets/td/style/oa/img/icon_folder_bef.png"
        />
        <div class="ui-list-info">
          <h4 class="ui-nowrap">采购报销和备用金制度</h4>
        </div>
      </li>
      <li
        class="ui-border-t ui-li-item"
        data-id="0"
        data-link="/pda/approve_center"
        data-name="流程中心"
        data-undo="6"
      >
        <img
          class="net_i"
          style="padding-top:15px;"
          src="http://106.3.45.23/frame/assets/td/style/oa/img/icon_folder_bef.png"
        />
        <div class="ui-badge-cornernum">6</div>
        <h4>流程中心</h4>
      </li>
    </ul>

    <!--公共文件柜end-->
    <hr />
    <!--待办工作-->
    <div class="ui-searchbar-wrap" id="search_bar">
      <div class="ui-searchbar ui-border-radius" id="enter-search">
        <i class="ui-icon-search" style="margin-left:-15px;"></i>
        <div class="ui-searchbar-text">请输入要查询的流水号或工作名称/文号</div>
        <div class="ui-searchbar-input">
          <input value type="text" placeholder="搜索" autocapitalize="off" />
        </div>
      </div>
    </div>
    <ul class="data-list ui-list ui-border-tb ui-list-link">
      <li
        class="ui-border-t"
        data-id="2019-08-14 11:56:46"
        data-run-id="9"
        data-flow-id="6"
        data-prcs-id="2"
        data-flow-prcs="4"
        data-prcs-key-id="14"
        data-module-name="approve_center"
      >
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap title-nowrap title-left">[9] - 请假申请</h4>
          <div class="remind_set"></div>

          <p class="ui-nowrap">请假申请(2019-08-14 11:56:34)</p>
          <p class="ui-nowrap">第2步:CEO审批 主办</p>
        </div>
      </li>

      <li
        class="ui-border-t"
        data-id="2019-08-22 16:07:59"
        data-run-id="8"
        data-flow-id="6"
        data-prcs-id="4"
        data-flow-prcs="4"
        data-prcs-key-id="34"
        data-module-name="approve_center"
      >
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap title-nowrap title-left">[8] - 请假申请</h4>

          <div class="ui-urgent-img" title="紧急"></div>

          <p class="ui-nowrap">请假申请(2019-08-14 11:55:33)</p>
          <p class="ui-nowrap">第4步:CEO审批 主办</p>
        </div>
      </li>

      <li
        class="ui-border-t"
        data-id="2019-08-22 16:08:52"
        data-run-id="13"
        data-flow-id="15"
        data-prcs-id="2"
        data-flow-prcs="2"
        data-prcs-key-id="35"
        data-module-name="approve_center"
      >
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap title-nowrap title-left">[13] - 会议纪要</h4>

          <div class="ui-entrust-img" title="委托"></div>

          <p class="ui-nowrap">会议纪要(2019-08-14 12:05:56)</p>
          <p class="ui-nowrap">第2步:领导审核 会签</p>
        </div>
      </li>

      <li
        class="ui-border-t"
        data-id="2019-08-14 12:04:15"
        data-run-id="12"
        data-flow-id="5"
        data-prcs-id="1"
        data-flow-prcs="1"
        data-prcs-key-id="21"
        data-module-name="approve_center"
      >
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap title-nowrap title-left">[12] - 用印申请</h4>

          <p class="ui-nowrap">2019YYSQ00001</p>
          <p class="ui-nowrap">第1步:印章申请登记 主办</p>
        </div>
      </li>

      <li
        class="ui-border-t"
        data-id="2019-08-14 11:59:30"
        data-run-id="10"
        data-flow-id="6"
        data-prcs-id="4"
        data-flow-prcs="4"
        data-prcs-key-id="18"
        data-module-name="approve_center"
      >
        <i class="ui-list-read-flag"></i>

        <div class="ui-list-info">
          <h4 class="ui-nowrap title-nowrap title-left">[10] - 请假申请</h4>

          <div class="ui-returned-img" title="退回"></div>
          <p class="ui-nowrap">请假申请(2019-08-14 11:57:47)</p>
          <p class="ui-nowrap">第4步:CEO审批 主办</p>
        </div>
      </li>

      <li
        class="ui-border-t"
        data-id="2019-08-14 11:20:25"
        data-run-id="7"
        data-flow-id="15"
        data-prcs-id="2"
        data-flow-prcs="2"
        data-prcs-key-id="10"
        data-module-name="approve_center"
      >
        <div class="ui-list-info">
          <i class="ui-icon-yuandian ui-list-unread-flag"></i>
          <h4 class="ui-nowrap title-nowrap title-left">[7] - 会议纪要</h4>

          <p class="ui-nowrap">&nbsp;&nbsp;&nbsp;&nbsp;会议纪要(2019-08-14 11:16:33)</p>
          <p class="ui-nowrap">第2步:领导审核 主办</p>
        </div>
      </li>
    </ul>
    <!--待办工作end-->
    <hr />
    <!--办结工作-->
    <div class="ui-searchbar-wrap" id="search_bar">
      <div class="ui-searchbar ui-border-radius" id="enter-search">
        <div class="ui-searchbar-text">请输入要查询的流水号或工作名称/文号</div>
        <div class="ui-searchbar-input">
          <input value type="text" placeholder="搜索" autocapitalize="off" />
        </div>
      </div>
    </div>
    <ul class="data-list ui-list ui-border-tb ui-list-link">
      <li
        class="ui-border-t"
        data-id
        data-run-id="14"
        data-flow-id="15"
        data-prcs-id="2"
        data-flow-prcs="2"
        data-prcs-key-id
        data-edit-flag="2"
        data-module-name="approve_center"
      >
        <div class="ui-list-info">
          <h4 class="ui-nowrap">[14] - 会议纪要(2019-08-14 12:10:16)</h4>
          <p class="ui-nowrap">
            <span style="color:#fc3f3f; margin-right:10px;">已办结</span> 第2步:领导审核 主办
          </p>
        </div>
      </li>

      <li
        class="ui-border-t"
        data-id
        data-run-id="7"
        data-flow-id="15"
        data-prcs-id="1"
        data-flow-prcs="1"
        data-prcs-key-id
        data-edit-flag="2"
        data-module-name="approve_center"
      >
        <div class="ui-list-info">
          <h4 class="ui-nowrap">[7] - 会议纪要(2019-08-14 11:16:33)</h4>
          <p class="ui-nowrap">
            <span style="color:#fc3f3f; margin-right:10px;">已办结</span> 第1步:会议纪要登记 主办
          </p>
        </div>
      </li>
    </ul>
    <!--办结工作end-->
    <hr />
    <!--工作办理-->
    <div id="day_list" style="margin-bottom: 10px;">
      <h4 class="ui-nowrap mark-title">系统管理员从2019年9月1日至2019年9月24日共24天</h4>
      <div class="ui-form-item ui-border-b ui-border-form-b">
        <div class="search-title-item" style="text-align: center;">上下班登记</div>
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#">应出勤天数</label>
        <input type="text" class="start_time attend-search-info" value="0" readonly />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#">全勤</label>
        <input type="text" class="start_time attend-search-info" value="0" readonly />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#">休息天数</label>
        <input type="text" class="start_time attend-search-info" value="24" readonly />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#">旷工天数</label>
        <input type="text" class="start_time attend-search-info" value="0" readonly />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#">迟到</label>
        <input type="text" class="start_time attend-search-info" value="0" readonly />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#" style="width: 120px">上班未登记</label>
        <input
          type="text"
          class="start_time attend-search-info search-list-info"
          value="0"
          readonly
        />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#" style="width: 120px">早退</label>
        <input
          type="text"
          class="start_time attend-search-info search-list-info"
          value="0"
          readonly
        />
      </div>
      <div class="ui-form-item ui-border-b ui-border-form-b ui-attend-search-preview">
        <label for="#" style="width: 120px">下班未登记</label>
        <input
          type="text"
          class="start_time attend-search-info search-list-info"
          value="0"
          readonly
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {}
};
</script>
<style scoped>
@import "~@/assets/css/tongdaapp.css";
</style>