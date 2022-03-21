/**
 * 解密表单
 */
import { Button, Form, Input } from 'antd';
import { decryptData } from '@/services/cerypt';

const { TextArea } = Input;

function DecryptForm() {
  const [form] = Form.useForm();

  // 表单提交
  const handleSubmit = () => {
    form.validateFields().then(async values => {
      // 异步提交同步写法
      const response = await decryptData(values);
      console.log(response);
    });
  }

  return (
    <div>
      <Form name='decryptForm' form={form} layout="vertical">
        <Form.Item label="密钥" name="key" rules={[{
          required: true,
          message: '请输入'
        }]}>
          <Input placeholder='请输入密钥' />
        </Form.Item>
        <Form.Item label="密文" name="ciphertext">
          <TextArea placeholder='需要解密的密文' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' onClick={handleSubmit}>解密</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default DecryptForm;
