import Toast, {ToastShowParams, ToastType} from 'react-native-toast-message';

type ShowToast = (
  type: ToastType,
  message: string,
  params?: ToastShowParams,
) => void;

export const showToast: ShowToast = (type, message, params) => {
  Toast.show({type, text1: message, ...params});
};
