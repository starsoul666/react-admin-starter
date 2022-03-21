import React from 'react';
import { Card, Tabs } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import EncryptForm from './EncryptForm';
import DecryptForm from './DecryptForm';

const { TabPane } = Tabs;

const Admin = () => {
  return (
    <PageHeaderWrapper content={'欢迎使用SM4加密系统'}>
      <Card>
        <Tabs defaultActiveKey='1'>
          <TabPane tab="加密" key="1">
            <EncryptForm />
          </TabPane>
          <TabPane tab="解密" key="2">
            <DecryptForm />
          </TabPane>
        </Tabs>
      </Card>
    </PageHeaderWrapper>
  );
};

export default Admin;
