import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import styles from './toaster.styles';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={[styles.toast, styles.toastSuccess]}
      text1Style={styles.text}
      contentContainerStyle={{paddingHorizontal: 15}}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={[styles.toast, styles.toastError]}
      text1Style={styles.text}
      contentContainerStyle={{paddingHorizontal: 15}}
    />
  ),
};
