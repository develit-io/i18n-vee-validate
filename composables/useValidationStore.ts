import * as yup from 'yup'

export const useValidationStore = defineStore('useValidationStore', () => {
  const { $t } = useI18n()

  const validationSchema = yup.object({
    email: yup
      .string()
      .required(String($t('email_required')))
      .email(String($t('invalid_email')))
      .when('userType', {
        is: 'admin',
        then: () =>
          yup
            .string()
            .matches(/@admin$/, String($t('admin_email_invalid'))),
        otherwise: () =>
          yup.string().email(String($t('user_email_invalid'))), 
      }),
    userType: yup.string().required(String($t('name_required'))),
  })

  const { values, errors, handleSubmit } = useForm({
    validationSchema,
    initialValues: {
      email: '',
      userType: 'user', 
    },
  })

  return {
    values,
    errors,
    handleSubmit,
  }
})
