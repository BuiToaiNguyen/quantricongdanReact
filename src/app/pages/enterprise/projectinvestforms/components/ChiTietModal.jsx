import React, {useState, useEffect, useRef} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import {Form, Input, Select, Spin, DatePicker} from 'antd';
import {Modal, Button} from 'react-bootstrap';
import {toast} from 'react-toastify';

import * as actionsModal from 'src/setup/redux/modal/Actions';
import {requestPOST, requestGET, requestPUT, API_URL, FILE_URL} from 'src/utils/baseAPI';
import ImageUpload from 'src/app/components/ImageUpload';
import {handleImage} from 'src/utils/utils';

const FormItem = Form.Item;

const {TextArea} = Input;

const ModalItem = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.accessToken);

  const dataModal = useSelector((state) => state.modal.dataModal);
  const modalVisible = useSelector((state) => state.modal.modalVisible);
  const id = dataModal?.id ?? null;

  const [form] = Form.useForm();

  const [loadding, setLoadding] = useState(false);
  const [image, setImage] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoadding(true);
      const res = await requestGET(`api/v1/projectinvestforms/${id}`);

      if (res && res.data) {
        form.setFieldsValue(res.data);
        setImage(handleImage(res.data?.image ?? '', FILE_URL));
        setIcon(handleImage(res.data?.icon ?? '', FILE_URL));
      }
      setLoadding(false);
    };
    if (id) {
      fetchData();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleCancel = () => {
    form.resetFields();
    /*  props.setDataModal(null);
    props.setModalVisible(false); */
    dispatch(actionsModal.setModalVisible(false));
  };

  const onFinish = async () => {
    const values = await form.validateFields();

    try {
      let arrImage = [];
      image.forEach((i) => {
        if (i.response) {
          arrImage.push(i.response.data[0].url);
        } else {
          arrImage.push(i.path);
        }
      });
      form.setFieldsValue({image: arrImage.join('##')});

      let arrIcon = [];
      icon.forEach((i) => {
        if (i.response) {
          arrIcon.push(i.response.data[0].url);
        } else {
          arrIcon.push(i.path);
        }
      });
      form.setFieldsValue({icon: arrIcon.join('##')});

      const formData = form.getFieldsValue(true);
      if (id) {
        formData.id = id;
      }

      const res = id
        ? await requestPUT(`api/v1/projectinvestforms/${id}`, formData)
        : await requestPOST(`api/v1/projectinvestforms`, formData);
      if (res) {
        toast.success('C???p nh???t th??nh c??ng!');
        dispatch(actionsModal.setRandom());
        handleCancel();
      } else {
        toast.error('Th???t b???i, vui l??ng th??? l???i!');
      }
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <Modal
      show={modalVisible}
      fullscreen={'lg-down'}
      size='xl'
      onExited={handleCancel}
      keyboard={true}
      scrollable={true}
      onEscapeKeyDown={handleCancel}
    >
      <Modal.Header className='bg-primary px-4 py-3'>
        <Modal.Title className='text-white'>Chi ti???t</Modal.Title>
        <button type='button' className='btn-close btn-close-white' aria-label='Close' onClick={handleCancel}></button>
      </Modal.Header>
      <Modal.Body>
        <Spin spinning={loadding}>
          {!loadding && (
            <Form form={form} layout='vertical' /* initialValues={initData} */ autoComplete='off'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6'>
                  <FormItem label='T??n' name='name' rules={[{required: true, message: 'Kh??ng ???????c ????? tr???ng!'}]}>
                    <Input placeholder='' />
                  </FormItem>
                </div>
                <div className='col-xl-6 col-lg-6'>
                  <FormItem label='M??' name='code'>
                    <Input placeholder='' />
                  </FormItem>
                </div>

                <div className='col-xl-12 col-lg-12'>
                  <FormItem label='M?? t???' name='description'>
                    <TextArea rows={4} placeholder='' />
                  </FormItem>
                </div>
              </div>
              <div className='row '>
                <div className='col col-xl-12'>
                  <FormItem label='???nh ?????i di???n'>
                    <ImageUpload
                      URL={`${API_URL}/api/v1/attachments`}
                      fileList={image}
                      onChange={(e) => setImage(e.fileList)}
                      headers={{
                        Authorization: `Bearer ${token}`,
                      }}
                    />
                  </FormItem>
                </div>
              </div>
              <div className='row '>
                <div className='col col-xl-12'>
                  <FormItem label='???nh icon'>
                    <ImageUpload
                      URL={`${API_URL}/api/v1/attachments`}
                      fileList={icon}
                      onChange={(e) => setIcon(e.fileList)}
                      headers={{
                        Authorization: `Bearer ${token}`,
                      }}
                    />
                  </FormItem>
                </div>
              </div>
            </Form>
          )}
        </Spin>
      </Modal.Body>
      <Modal.Footer className='bg-light px-4 py-2 align-items-center'>
        <div className='d-flex justify-content-center  align-items-center'>
          <Button className='btn-sm btn-primary rounded-1 p-2  ms-2' onClick={onFinish}>
            <i className='fa fa-save'></i>
            {id ? 'L??u' : 'T???o m???i'}
          </Button>
        </div>
        <div className='d-flex justify-content-center  align-items-center'>
          <Button className='btn-sm btn-secondary rounded-1 p-2  ms-2' onClick={handleCancel}>
            <i className='fa fa-times'></i>????ng
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalItem;
