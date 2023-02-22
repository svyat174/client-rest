import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

export const ButtonLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Space direction="vertical">
        <Space wrap>
          <Button 
            type="primary" 
            shape="round"  
            size='middle' 
            onClick={() => setLoading(!loading)} 
            loading={loading}
            >
              Войти
            </Button>
          <Button 
            type="default" 
            shape="round" 
            size='middle'
          >
            Регистрация
          </Button>
        </Space>
      </Space>
    </>
  );
};

