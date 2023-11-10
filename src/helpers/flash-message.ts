import { showMessage } from 'react-native-flash-message';

export const showSuccessFlash = (title: string, message: string = '') => {
  showMessage({
    message: title,
    description: message,
    type: 'success',
    icon: 'success',
  });
};

export const showErrorFlash = (title: string, message: string = '') => {
  showMessage({
    message: title,
    description: message,
    type: 'danger',
    icon: 'danger',
  });
};

export const showWarningFlash = (title: string, message: string = '') => {
  showMessage({
    message: title,
    description: message,
    type: 'warning',
    icon: 'warning',
  });
};

export const showInfoFlash = (title: string, message: string = '') => {
  showMessage({
    message: title,
    description: message,
    type: 'info',
    icon: 'info',
  });
};
