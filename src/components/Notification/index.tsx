import React, { FunctionComponent } from 'react';
import './Notification.scss';

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface NotificationProp {
  text: string;
  type: NotificationType | undefined;
}
const Notification: FunctionComponent<NotificationProp> = ({
  text = 'Simple Notification',
  type = NotificationType.INFO,
}) => {
  return (
    <div className={`cat-app-notification cat-app-notification--${type}`}>
      <div className='cat-app-notification--content'>{text}</div>
    </div>
  );
};

export default Notification;
