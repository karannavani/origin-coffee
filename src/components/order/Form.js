import React from 'react';
import { Form, Input, Radio, Button } from 'antd';
const FormItem = Form.Item;
class CompanyForm extends React.Component {

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }

    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 16,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 4
        }
      }
    };

    const { handleSubmit, handleChange, company } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <FormItem {...formItemLayout} label="Company Name">
          <Input name="name" value={company.name || ''} onChange={handleChange}/>
        </FormItem>

        <FormItem {...formItemLayout} label="Rank">
          <Input name="rank" value={company.rank || ''} onChange={handleChange}/>
        </FormItem>

        <FormItem {...formItemLayout} label="Reason">
          <Input name="reason" value={company.reason || ''} onChange={handleChange}/>
        </FormItem>

        <FormItem {...formItemLayout} label="Status">
          <Radio.Group name="status" value={company.status || ''} buttonStyle="solid" onChange={handleChange}>
            <Radio.Button  key={1} value='Private' >Private</Radio.Button>
            <Radio.Button key={2} value='Public'>Public</Radio.Button>
          </Radio.Group>
        </FormItem>

        <FormItem {...formItemLayout} label="Headquarters">
          <Input name="hq" value={company.hq || ''} onChange={handleChange}/>
        </FormItem>

        <FormItem {...formItemLayout} label="Valuation">
          <Input name="valuation" value={company.valuation || ''} onChange={handleChange}/>
        </FormItem>

        <FormItem {...formItemLayout} label="Image URL">
          <Input name="image" value={company.image || ''} onChange={handleChange}/>
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

export default CompanyForm;
