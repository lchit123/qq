var Stat = {
    pageIds: {
        'qidian_login': 'qd_P_qdlogin',
        'qq_login': 'qd_P_QQlogin',
        'qidian_reg': 'qd_P_qdreg',
        'qq_reg': 'qd_P_QQreg'
    },
    pageTitles: {
        'qidian_login': '起点登录界面（PC）',
        'qq_login': 'QQ阅读登录界面（PC）',
        'qidian_reg': '起点注册界面（PC）',
        'qq_reg': 'QQ阅读注册界面（PC）'
    },
    pageId: '',
    pageTitle: '',
    chan: '',
    init: function() {
        // 依赖于JQ或Zepto.
        // 占用全局对象Report，调用init方法，初始化脚本
        var pathname = document.location.pathname || 'login';
        if (pathname.indexOf('reg.html') > -1) {
            pathname = 'reg';
            try { Stat.chan = QRegister.config.appId; } catch (e) { Stat.chan = 10;};
        } else {
            pathname = 'login';
            try { Stat.chan = LoginV1.config.appId; } catch (e) { Stat.chan = 10;};
        }

        var host = document.location.host;
        var pageId = '';
        if (host.indexOf('qidian.com') > -1) {
            pageId = 'qidian_' + pathname;
        } else {
            pageId = 'qq_' + pathname;
        }
        Stat.pageId = Stat.pageIds[pageId] || Stat.pageIds.qidian_login;
        Stat.pageTitle = Stat.pageTitles[pageId] || Stat.pageTitles.qidian_login;
        
        Report.init({
            pid: Stat.pageId,
            title: Stat.pageTitle,
            chan: Stat.chan
        });
        
        $('.stat').on('click', function(e) {
            var dataReport = $(this).attr('data-report');
            if (dataReport == 0) return;
            
            var offData = $(this).attr('data-off-stat');
            var data = $(this).attr('data-stat');
            if (data == undefined || data == '' || data == null) { // 如果没有统计value，则不发送统计
                return;
            }
            e = e || event;
            var x = e.clientX;
            var y = e.clientY;
            if (offData != undefined && offData != '' && offData != null) {
                // check 检查选中状态
                var check = $(this).is(":checked") ? 0 : 1; // 此处获取的还是之前的状态
                var forId = $(this).attr('for');
                if (forId != undefined && forId != null && forId != '') {
                    check = $('#' + forId).is(":checked") ? 0 : 1; // 此处获取的还是之前的状态
                }
                if (check == 0) data = offData;
            }
            
            data = data.split('|');
            
            Report.send(e, {
                pid: Stat.pageId,
                title: data[1] || '',
                eid: data[0] || '',
                chan: Stat.chan,
                x: x,
                y: y,
                l1: data[2] || ''
            }, $(this));
        });
    },
    report: function() {
        // 依赖于JQ或Zepto.
        // 占用全局对象Report，调用init方法，初始化脚本
        Report.init({
            pid: 'qd_P_qdlogin',
            title: '起点登录界面（PC）'
        });
    }
};