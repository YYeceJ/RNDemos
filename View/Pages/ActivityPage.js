import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, ImageBackground, Image, TouchableOpacity, TextInput, Keyboard, ScrollView
} from 'react-native';
import Toast from "react-native-easy-toast";
import {size, deviceWidth, deviceHeight} from '../utils/screenUtil'
import SplashScreen from "react-native-splash-screen";

export default class ActivityPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showRule : false,
            phoneNum : ''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide()
        },1000)
    }

    checkPhoneNum (){
        let phone = this.state.phoneNum
        let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

        if(!reg.test(phone)){
            this.refs.toast.show('请输入正确的手机号')
        }
    }

    getCAPTCHA(){
        this.checkPhoneNum()
    }

    render() {
        return (
            <ScrollView style={[styles.container, {height: deviceHeight}]} overScrollMode='never' scrollEnabled={false}>
                <ImageBackground source={require('../images/banner_v1.png')}
                                 style={{width: deviceWidth, height: size(829) / size(750) * deviceWidth}}>
                    <TouchableOpacity style={styles.jqrStyle}>
                        <Image source={require('../images/jqr.png')} style={styles.jqrImgStyle}/>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={require('../images/mainbg_v1.png')}
                                 style={{width: deviceWidth, height: size(502) / size(750) * deviceWidth}}>
                    <View style={styles.mainButton}>
                        <View style={[styles.textInputStyle, {width: size(260.413),}]}>
                            <TextInput placeholder={'请输入有效的中国电信互联网卡号码'}
                                       autoFocus={true}
                                       underlineColorAndroid='transparent'
                                       keyboardType={"numeric"}
                                       style={{padding: 0, paddingLeft: size(5)}}
                                       onChangeText={text => this.setState({phoneNum : text})}
                            >
                            </TextInput>
                        </View>
                        <View style={{
                            width: size(260.413),
                            flexDirection: 'row',
                            marginTop: size(10),
                            justifyContent: 'space-between'
                        }}>
                            <View style={[styles.textInputStyle, {width: size(138.813)}]}>
                                <TextInput placeholder={'请输入验证码'}
                                           underlineColorAndroid='transparent'
                                           keyboardType={"numeric"}
                                           style={{padding: 0, paddingLeft: size(5)}}
                                >
                                </TextInput>
                            </View>
                            <TouchableOpacity style={styles.getCAPTCHAButton} onPress={() => this.getCAPTCHA()}>
                                <Text style={styles.getCAPTCHATextStyle}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.getAgeButtonStyle}>
                            <Text style={styles.getAgeTextStyle}>一键查网龄</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ruleViewButton} onPress={() => {
                            this.setState({
                                showRule: true
                            })
                        }}>
                            <Text style={styles.ruleViewTextStyle}>活动规则</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
                {
                this.state.showRule
                    ?
                    <View style={styles.netAgeGift_ruleBox}>
                        <View style={styles.netAgeGift_ruleMain}>
                          <Text style={styles.netAgeGift_ruleTitle}>活动规则</Text>
                            <ScrollView style={styles.netAgeGift_ruleDes} showsVerticalScrollIndicator={false}><Text
                                style={styles.netAgeGift_ruleDesText}>1、促销期：2019年8月7日-2019年12月31日。
                                2、本活动仅限指定的电信互联网卡套餐领取，号码如处于黑名单、欠费停机、停机保号等异常状态，需用户缴清费用后，方可参加活动。
                                3、用户网龄以用户当前互联网卡套餐激活时间为起点计算，如用户由其他套餐变更至互联网卡套餐，则以变更后套餐的激活时间为起点计算网龄。
                                4、用户网龄3个月≤X＜6个月，可领取 爱奇艺周卡/优酷周卡/5元话费（三选一）
                                ①爱奇艺/优酷周卡在领取成功后48小时内到账，权益自到账之日起生效，有效期7天。
                                ②5元话费次月月底之前到账，赠送话费不退返现金，不可抵扣国际业务、港澳台业务通信费和SP/CP等代收费用，有效期30天，可结转。
                                5、用户网龄6个月≤X＜9个月，可领取 腾讯月卡/爱奇艺月卡/优酷月卡/2G通用流量*1个月（四选 一）
                                ①腾讯/爱奇艺/优酷月卡领取成功后48小时内到账，权益自到账之日起生效，有效期30天。
                                ②2G通用流量次月月底之前到账，赠送流量仅限本机号码使用，有效期30天，可结转。
                                6、用户网龄9个月≤X＜12个月，可领取喜马拉雅会员*2个月/200分钟语音时长*1个月（二选一）
                                ①200分钟语音时长次月月底之前到账，赠送语音仅限本机号码使用，有效期30天，可结转。
                                ②喜马拉雅会员领取成功后分2个月发放，首次发放将于参加活动成功后48小时内，剩余会员权益次月起按月发放（月卡），连续发放1个月。
                                7、用户网龄X≥12个月，可领取 腾讯半年卡/爱奇艺半年卡/优酷半年卡（三选一）
                                腾讯/爱奇艺/优酷半年卡领取成功后分6个月发放，首次发放将于参加活动成功后48小时内，剩余会员权益次月起按月发放（月卡），连续发放5个月。
                                8、用户参与本活动成功后，号码如处于黑名单、欠费停机、停机保号、拆机等异常状态，则剩余赠送话费或权益将无法继续赠送。
                                9、此链接转发无效，仅限本号码参与。
                                温馨提示：
                                一、爱奇艺、优酷、喜马拉雅会员领取注意事项：
                                请使用活动手机号码登陆/注册账号。
                                二、腾讯视频-手机号领取会员说明
                                场景一：活动手机号已绑定QQ或微信号
                                1.打开短信内链接，使用QQ或微信登陆腾讯视频。
                                2.快到腾讯视频账号里领取礼品啦。
                                场景二：活动手机号未绑定QQ或微信号
                                1.打开短信内链接，使用QQ或微信登陆腾讯视频。
                                2.输入手机号及验证码完成手机账号的绑定。
                                3.快到腾讯视频账号里领取礼品啦。
                                注：手机号验证后将自动绑定当前微信或QQ账号。
                                其他领取方式及流程
                                1.APP内领取：打开腾讯视频 APP->我的->个人信息->手机，领取会员权益
                                2.公众号内领取：关注【腾讯视频 VIP】公众号，点击菜单 VIP 服务->我的 VIP，找到“手 机号内 VIP 兑换”，领取会员权益。
                                三、5元话费、200分钟语音时长、2G通用流量领取注意事项：
                                只有活动手机号码才可领取相应权益哦！</Text></ScrollView>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                showRule: false
                            })
                        }} style={styles.ruleBox_closeBtn}>
                            <Image source={require('../images/close.png')} style={styles.ruleBox_closeImg}/>
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }
                <Toast  //提示
                    ref="toast"
                    style={{backgroundColor:'gray'}}
                    position='center'
                    positionValue={200}
                    opacity={0.6}
                    textStyle={{color:'white'}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b4771',
    },
    jqrStyle: {
        width: size(100),
        height: size(25),
        position: 'absolute',
        top: size(30),
        right: size(40),
    },
    jqrImgStyle: {
        width: size(100),
        height: size(25),
        resizeMode: 'center'
    },
    mainButton: {
        alignItems: 'center',
        marginTop: size(20)
    },
    textInputStyle: {
        backgroundColor: '#fff',
        borderWidth: size(2),
        borderColor: '#ffcb11',
        height: size(34),
        borderRadius: size(6)
    },
    hiddenView: {
        width: deviceWidth,
    },
    getCAPTCHAButton: {
        width: size(112.550),
        height: size(34),
        backgroundColor: '#ffcb11',
        borderRadius: size(6),
    },
    getCAPTCHATextStyle: {
        fontSize: size(13),
        color: '#3e4b75',
        lineHeight: size(36),
        fontWeight: '600',
        textAlign: 'center',
    },
    getAgeButtonStyle: {
        width: '44%',
        height: size(40),
        backgroundColor: '#ffcb11',
        borderRadius: size(22),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: size(10)
    },
    getAgeTextStyle: {
        fontWeight: '600',
        color: '#3b4771',
        fontSize: size(18),
        textAlign: 'center',
    },
    ruleViewButton: {
        backgroundColor: 'transparent',
        borderColor: '#ffcb11',
        borderWidth: size(2),
        borderRadius: size(30),
        width: '26%',
        height: size(38),
        marginTop: size(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    ruleViewTextStyle: {
        color: '#ffcb11',
        fontWeight: '500',
        marginHorizontal: 'auto'
    },
    netAgeGift_ruleBox: {
        backgroundColor:'rgba(0,0,0,.3)',
        width: deviceWidth,
        height: deviceHeight,
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: 9999,
        alignItems: 'center'
    },
    netAgeGift_ruleMain: {
        width: '90%',
        height: '60%',
        backgroundColor: '#3a4670',
        borderRadius: size(8),
        borderWidth: size(2),
        borderColor: '#fff',
        marginTop:'20%',
    },
    netAgeGift_ruleTitle: {
        color: '#fff',
        fontSize: size(20),
        lineHeight: size(40),
        textAlign: 'center',
        marginTop: size(10)
    },
    netAgeGift_ruleDes: {
        width: '92%',
        marginLeft: '4%',
        marginBottom:size(-30)
    },
    netAgeGift_ruleDesText: {
        color: '#fff',
        fontSize: size(12),
        lineHeight: size(24)
    },
    ruleBox_closeBtn: {
        marginTop:size(10)
    },
    ruleBox_closeImg: {
        width: size(30),
        height: size(30),
    }
})
