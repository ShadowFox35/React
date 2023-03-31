import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { addedCardType } from 'types/objects';
import './Forms.scss';
interface errorsType {
  itemName?: boolean;
  itemDate?: boolean;
  itemImg?: boolean;
}
const Forms: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    control,
    formState: { errors },
  } = useForm<addedCardType>();
  const [itemsList, setItemsList] = useState<addedCardType[]>([]);
  const [error, setError] = useState({
    itemName: false,
    itemDate: false,
    itemImg: false,
  });

  const createCard = async (data: addedCardType) => {
    const itemObj: addedCardType = {
      type: data.type || '',
      name: data.name || '',
      date: data.date || '',
      img: data.img,
      delivery: data.delivery,
      availability: data.availability ? 'Available in the stock' : 'Not available in the stock',
    };
    console.log(itemObj);

    setItemsList([...itemsList, itemObj]);
  };

  // checkErros = () => {
  //   const newErrors: errors = {};
  //   const fileType = [];
  //   if (this.itemName.current!.value === '') {
  //     newErrors['itemName'] = true;
  //   }
  //   if (this.itemDate.current!.value === '') {
  //     newErrors['itemDate'] = true;
  //   }
  //   if (
  //     this.itemImg.current!.value === '' ||
  //     !this.itemImg.current?.files![0].type.includes('image')
  //   ) {
  //     newErrors['itemImg'] = true;
  //   }
  //   if (Object.keys(newErrors).length) {
  //     this.setState(() => ({
  //       error: newErrors,
  //     }));
  //     return true;
  //   } else {
  //     this.setState(() => ({
  //       error: {
  //         itemName: false,
  //         itemDate: false,
  //         itemImg: false,
  //       },
  //     }));
  //     return false;
  //   }
  // };
  const submitForm = (data: addedCardType) => {
    console.log(data);

    // event.preventDefault();
    // if (checkErros()) {
    //   return;
    // }
    createCard(data);
    reset();

    // this.setState(() => ({ isCrated: true }));
    // const timerId = setTimeout(() => {
    //   this.setState(() => ({ isCrated: false }));
    // }, 2000);
    // this.setState({ timerId });
  };
  // componentWillUnmount() {
  //   clearInterval(this.state.timerId);
  // }

  return (
    <section className="container form-wrapper">
      {/* {this.state.isCrated && <div className="iscreated">New item has been added</div>} */}
      <h1 className="title">Add new item</h1>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <label className="form_option">
          Product type:
          <select className="form_option_item" {...register('type')} defaultValue="Knitted yarn">
            <option selected value="Knitted yarn">
              Knitted yarn
            </option>
            <option value="Knitting tools">Knitting tools</option>
            <option value="Literature">Literature</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="form_option">
          Product Name:*
          <input className="form_option_item" type="text" {...register('name')} />
          {/* {this.state.error.itemName && <div className="error">Please fill in the field</div>} */}
        </label>
        <div>Delivery</div>
        <label className="form_option">
          No
          <input
            className="form_option_item"
            type="radio"
            name="discount"
            checked
            value="delivery is not possible"
            {...register('delivery')}
          />
        </label>
        <label className="form_option">
          To the post office
          <input
            className="form_option_item"
            type="radio"
            name="discount"
            value="post delivery is possible"
            {...register('delivery')}
          />
        </label>
        <label className="form_option">
          By courier
          <input
            className="form_option_item"
            type="radio"
            name="discount"
            value="courier delivery is possible"
            {...register('delivery')}
          />
        </label>

        <label className="form_option">
          Receipt date:*
          <input className="form_option_item" type="date" {...register('date')} />
          {/* {this.state.error.itemDate && <div className="error">Please fill in the field</div>} */}
        </label>
        <label className="form_option">
          Stock Availability:
          <input className="form_option_item" type="checkbox" {...register('availability')} />
        </label>
        <label className="form_option">
          Upload photo:*
          <Controller
            render={({ field }) => <input className="form_option_upload" type="file" {...field} />}
            name="img"
            control={control}
            defaultValue=""
          />
          {/* {this.state.error.itemImg && <div className="error">Please select an image</div>} */}
        </label>
        <input className="button select" type="submit" value="Submit" />
      </form>
      <section className="cards">
        {itemsList.map((good: addedCardType, index: number) => (
          <div className="card" key={index}>
            <img className="card_img" src={good.img} alt={`${good.name}`} />
            <strong>{good.type}</strong>
            <strong>{good.name}</strong>
            <span className="card_availability">{good.availability}</span>
            <span className="card_delivery">{good.delivery}</span>
            <div>{good.date}</div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Forms;
