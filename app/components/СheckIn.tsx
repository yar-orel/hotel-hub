'use client'
import { DatePicker, Input, Form } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { db } from "../../firebase";
import React from "react";

export const CheckIn = ({ roomId, room, closeModal }: any) => {
    const [form] = Form.useForm();
    
    const handleCancel = () => {
        closeModal(false);
    };

    const onFinish = async (values: any) => {
        try {
            const roomDetails = room[roomId];
            await db.collection('room').doc(roomId).update({
                [roomId]: {
                    ...roomDetails,
                    isCheckedIn: true,
                    checkInDate: values.checkInDate.format("YYYY-MM-DD"),
                    checkOutDate: values.checkOutDate.format("YYYY-MM-DD"),
                    guest: values.guestName
                }
            });
            closeModal(false);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    return (
        <div className="check-in">
            <p className="check-in__header">Check In</p>
            <Form form={form} onFinish={onFinish}>
                <Form.Item
                    name="guestName"
                    rules={[{ required: true, message: "Please enter the guest's name!" }]}
                >
                    <Input
                        className="input__guest"
                        placeholder="Guest's Name"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </Form.Item>
                <p>Please, enter the approximate date of guest check in:</p>
                <Form.Item name="checkInDate">
                    <DatePicker className="input__date" />
                </Form.Item>
                <p>Please, enter the approximate date of guest check out:</p>
                <Form.Item name="checkOutDate">
                    <DatePicker className="input__date" />
                </Form.Item>
                <div className="check-in-buttons">
                    <button className="btn_item check-in__btn_cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className="btn_item check-in__btn_check-in" type="submit">
                        Check in
                    </button>
                </div>
            </Form>
        </div>
    );
};
