/**
 * 加密表单
 */
import { Button, Form, Input } from 'antd';
import { encryptData } from '@/services/cerypt';

const { TextArea } = Input;

function EncryptForm() {
  const [form] = Form.useForm();

  // 表单提交
  const handleSubmit = () => {
    form.validateFields().then(values => {
      encryptData(values).then(res => {
        console.log(res);
      });
    });
  }

  return (
    <div>
      <Form name='encryptForm' form={form} layout="vertical">
        <Form.Item label="密钥" name="key" rules={[{
          required: true,
          message: '请输入'
        }]}>
          <Input placeholder='请输入密钥' />
        </Form.Item>
        <Form.Item label="明文" name="plaintext">
          <TextArea placeholder='需要加密的明文' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' onClick={handleSubmit}>加密</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EncryptForm;
