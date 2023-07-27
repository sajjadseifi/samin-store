import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ProviderWithCitySelect } from "../../components/Select/ProviderWithCitySelect"
import { Button, Card,  Col, Container,  Row } from "reactstrap"
import { AiOutlineUser, AiTwotonePhone } from 'react-icons/ai'
import { SectionTitle } from "../../components/Section/SectionTitle"
import { InputForm } from "../../components/Form/Input/Input"
import { useDispatch, useSelector } from "react-redux"
import { addToBag } from "../../store/reducers/shopcard.reuducer"

const schema = yup
  .object({
    name: yup.string().min(3,'حد اقل 3 حرف وارد شود')
    .required('فیلد صاحب خرید الزامی است'),
    localAddress: yup.string()
    .min(5,'حداقل 5 حرف وارد کنید')
    .required('فیلد ادرس محلی الزامی است')
    ,
    city: yup.object({
      value : yup.number().required('شهر را انتخاب کنید'),
    }).required('فیلد شهر الزامی است'),
    provider: yup.object({}).required('فیلد استان الزامی است')
  })
  .required('فرم را به صورت کامل پر کنید')

export const CompletePurchasePage = () => {
  const {
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
     resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const cards = useSelector(state=> state.shopcard.shopCard)
  const counts = cards.reduce((prv,cur)=>prv+ cur.counts,0)
  const prices = cards.reduce((prv,cur)=>prv + (cur.counts * cur.product.price),0)

  const onSubmit = (data) => {

    const formData = {
      name:data.name,
      localAddress:data.localAddress,
      city:data.city.label,
      provider:data.provider.label,
    }
    dispatch(addToBag(formData))
  }

  return (
    <SectionTitle title='فرم خرید محصول'>
      <Container 
        className="m-3"
      >
        <Row style={{color:'red'}}>
          <Col>تعداد کل کاها ها</Col>
          <Col >{counts}</Col>
        </Row>
        <Row style={{color:'green'}}>
          <Col>مجموع قیمت ها</Col>
          <Col>{prices} تومان</Col>
        </Row>
      </Container>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <Card className="py-2 px-5">
          <InputForm
            title="نام"
            IConomponent={AiOutlineUser}
            control={control}
            name='name'
            errors={errors}
          />
          <InputForm
            title="آدرس محلی"
            IConomponent={AiTwotonePhone}
            control={control}
            name='localAddress'
            errors={errors}
          />

        <ProviderWithCitySelect {...{watch,control,setValue,errors}} />
        </Card>
        <Container dir="ltr" className="my-2">
          <Button color="primary" type="submit">
            خرید محصول
          </Button>
        </Container>
      </form>
    </SectionTitle>
  )
}

