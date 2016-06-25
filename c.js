/*


     ::::::::   :::::::::    ::::::::   ::::::::::        ::::::::   :::::::::: 
    :+:    :+:  :+:    :+:  :+:    :+:  :+:              :+:    :+:  :+:        
    +:+         +:+    +:+  +:+         +:+              +:+         +:+        
    +#+         +#+    +:+  +#+         +#++:++#         +#+         :#::+::#   
    +#+         +#+    +#+  +#+         +#+              +#+         +#+        
    #+#    #+#  #+#    #+#  #+#    #+#  #+#         #+#  #+#    #+#  #+#        
     ########   #########    ########   ##########  ###   ########   ###        


*/

function FindProxyForURL(url, host){
    //��������Ч������ֹ�������¹����������IP��ַ���ӡ���
    var REJECT = "PROXY example.com:80";
    //������������IP��ֱַ������
    var DIRECT = "DIRECT";
    var hosts = [
//=========����Start=========
//<ad.js_test>
"sc.cdce.cf",
//<youku>
"ad.api.3g.youku.com",
"statis.api.3g.youku.com",
"atm.youku.com",
"stat.youku.com",
//<sohu>
"agn.aty.sohu.com",
"mmg.aty.sohu.com",
//<letv>
"n.mark.letv.com",
"ark.letv.com",
"irs01.com",
//<baofeng>
"xs.houyi.baofeng.net",
//<hunantv>
"da.hunantv.com",
"miaozhen.com",
//<qq>
"lives.l.qq.com",
"vqq.admaster.com.cn",
//<tudou>
"ad.api.3g.tudou.com",
//<pptv>
"de.as.pptv.com",
"pp2.pptv.com",
"stat.pptv.com",
"afp.pplive.com",
//<iqiyi>
"cm.passport.iqiyi.com",
"cupid.iqiyi.com",
"paopao.iqiyi.com",
"ckm.iqiyi.com",
//<google>
"2mdn.net",
"admob.com",
"doubleclick.com",
"doubleclick.net",
"googleadsserving.cn",
"googlecommerce.com",
"googletagmanager.com",
"ads.google.com",
"afd.l.google.com",
"pagead-tpc.l.google.com",
"pagead.google.com",
"pagead.l.google.com",
"partnerad.l.google.com",
//<baidu>
"hm.baidu.com",
"eiv.baidu.com",
"pos.baidu.com",
"cpro.baidu.com",
"cpro.baidustatic.com",
"dup.baidustatic.com",
//<taobao>
"tanx.com",
"alimama.com",
//<360>
"lianmeng.360.cn",
//<others>
"keydot.net",
"mengmob.com",
"zzzkxx.com",
"miaozhen.com",
"adsage.com",
"cocounion.com",
"admaster.com.cn",
"ipinyou.com",
"admin5.com",
"csbew.com",
"jusha.com",
"vsoon.com",
"soquair.com",
"guohead.com",
"live.chartboost.com",
"appodeal.com",
"fastapi.net",
"adsmogo.com",
"adsmogo.org",
"adsmogo.net",
"adsmogo.mobi",
"adlive.cn",
"sstc360.com",
"ad-brix.com",
"leadboltads.net",
"joyingmobi.com"
//=========����End=========
//���ڷֽ����������׷�����������߼���˫���ţ�ʹ�ö��ŷָ�����
    ]
    var ips = [
//=========IP��ַStart=========
//<iqiyi>
"101.227.14.80",
"101.227.14.81",
"101.227.14.82",
"101.227.14.83",
"101.227.14.84",
"101.227.14.85",
"101.227.14.86"
//=========IP��ַEnd=========
    ]
//���ڷֽ����������׷��IP��ַ�����߼���˫���ţ�ʹ�ö��ŷָ�����
    for (n in hosts){
        if(dnsDomainIs(host, hosts[n])){
            return REJECT;
        }
    }
    for (n in ips){
        if(isInNet(host, ips[n], "225.225.225.225")){
            return REJECT;
        }
    }
    return DIRECT;
}