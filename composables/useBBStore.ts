import * as yup from 'yup'

export const useBBStore = defineStore('useBBStore', () => {
  const { $t } = useI18n()

  const validationSchema = yup.object({
    swap: yup.object().shape({
      swapFrom: yup.object().shape({
        amount: yup.number().required(String($t('components.swapForm.amountRequired'))),
        price: yup.number().required(),
      }).test({
        name: 'verified-used',
        test: () => {
          if (false)
            return true
        },
        message: String($t('components.swapForm.verifiedAccountRequired')),
      }).test({
        name: 'personal-limit',
        test: val => {
          if (false)
            return true
        },
        message: String($t('components.swapForm.exceedsPersonalLimit')),
      }).test({
        name: 'maximum-eur',
        test: val => val.amount * val.price <= 100000,
        message: String($t('components.swapForm.maximumEur')),
      }),
      swapTo: yup.object().shape({
        amount: yup.number()
          .required(String($t('components.swapForm.toAmountRequired')))
          .moreThan(0, String($t('components.swapForm.toAmountGreaterThanZero'))),
      }),
    }),
    fromType: yup.string().required().when(
      'swap.swapFrom.type',
      {
        is: 'FIAT',
        then: () => yup.string().oneOf(['bank'], String($t('components.swapForm.paymentMethodNotSelected'))),
        otherwise: () => yup.string().oneOf(['wallet'], String($t('components.swapForm.paymentMethodNotSelected'))),
      },
    ),
    fromBankAccount: yup.object().when('fromType', {
      is: 'bank',
      then: schema => schema.required(String($t('components.swapForm.bankAccountNotSelected'))),
    }),
    fromNetwork: yup.object().when('fromType', {
      is: 'wallet',
      then: schema => schema.required(String($t('components.swapForm.networkNotSelected'))),
    }),
    toType: yup.string().required().when(
      'swap.swapTo.type',
      {
        is: 'FIAT',
        then: () => yup.string().oneOf(['bank'], String($t('components.swapForm.paymentMethodNotSelected'))),
        otherwise: () => yup.string().oneOf(['wallet'], String($t('components.swapForm.paymentMethodNotSelected'))),
      },
    ),
    toBankAccount: yup.object().when('toType', {
      is: 'bank',
      then: schema => schema.required(String($t('components.swapForm.bankAccountNotSelected'))),
    }),
    toWalletAddress: yup.string().when('toType', {
      is: 'wallet',
      then: () => yup.string().required(String($t('components.swapForm.enterWalletAddress'))).test({
        name: 'to-address-regex',
        test: val => {
          return true
        },
        message: String($t('components.swapForm.invalidWalletAddress')),
      }),
    }),
    toNetwork: yup.object().when('toType', {
      is: 'wallet',
      then: schema => schema.required(String($t('components.swapForm.networkNotSelected'))).test({
        name: 'min-amount',
        test: val => {
          return true
        },
        message: String($t('components.swapForm.amountBelowMinimum')),
      }),
    }),
    consent: yup.boolean().required().oneOf([true], String($t('components.swapForm.consentRequired'))),
  });

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
