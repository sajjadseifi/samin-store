import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ProviderWithCitySelect } from "../../components/Select/ProviderWithCitySelect"
import { Button, Card,  Col, Container, Input, Row } from "reactstrap"
import { AiOutlineUser, AiTwotonePhone } from 'react-icons/ai'
import { TextIcon } from "../../components/TextIcon/TextIcon"
import { SectionTitle } from "../../components/Section/SectionTitle"
const schema = yup
  .object({
    name: yup.number().required(),
    phoe: yup.string().required(),
    city: yup.string().required(),
    provider: yup.string().required()

  })
  .required()

export const CompletePurchasePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: {errors },
  } = useForm({
     resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)


  return (
    <SectionTitle title='فرم خرید محصول'>
      <Container 
        className="m-3"
      >
        <Row style={{color:'red'}}>
          <Col>تعداد کل کاها ها</Col>
          <Col >12</Col>
        </Row>
        <Row style={{color:'green'}}>
          <Col>مجموع قیمت ها</Col>
          <Col>3200.02 تومان</Col>
        </Row>
      </Container>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <Card className="py-2 px-5">
        <TextIcon IConomponent={AiOutlineUser} text="نام" />
        <Input
          className="my-2"
          {...register('name')}
          placeholder="نام خریداد"  
          />
        <TextIcon IConomponent={AiTwotonePhone} text="شماره" />
        <Input
          className="my-2"
          {...register('phone')}
          placeholder="شماره تماس خریدار"  
          />
        <ProviderWithCitySelect {...{watch,control,setValue}} />

        </Card>
        <Container dir="ltr" className="my-2">
          <Button type="submit" >
            خرید محصول
          </Button>
        </Container>
      </form>
    </SectionTitle>
  )
}

