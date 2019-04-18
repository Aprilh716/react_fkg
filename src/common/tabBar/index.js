import React,{Component} from 'react';
import { TabBar } from 'antd-mobile';
import {
    Home,
    Message,
    Search,
    Mine,
    ShopCar
} from "@views";
import {withRouter} from "react-router-dom"
 class TabBarCom extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home ',//默认选中哪一个
          fullScreen: true,//是否定位
        };
      }
  render() {
      console.log(this,2222)
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {//按下时会触发一个事件
              this.setState({
                selectedTab: 'home',
              });
              this.props.history.push('/home');
              document.title='首页'
            }}
            data-seed="logId"
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="搜索"
            key="search"
            selected={this.state.selectedTab === 'search'}
            onPress={() => {
              this.setState({
                selectedTab: 'search',
              });
              this.props.history.push('./search');
              document.title="搜索"
            }}
            data-seed="logId1"
          >
            <Search/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="消息"
            key="message"
            selected={this.state.selectedTab === 'message'}
            onPress={() => {
              this.setState({
                selectedTab: 'message',
              });
              this.props.history.push('./message');
              document.title="消息"
            }}
          >
            <Message/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="购物车"
            key="shopcar"
            selected={this.state.selectedTab === 'shopcar'}
            onPress={() => {
              this.setState({
                selectedTab: 'shopcar',
              });
              this.props.history.push('./shopcar');
              document.title="购物车"
            }}
          >
            <ShopCar/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
              this.props.history.push('./my');
              document.title="我的"
            }}
          >
           <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
        )
    }
}
export default withRouter(TabBarCom);