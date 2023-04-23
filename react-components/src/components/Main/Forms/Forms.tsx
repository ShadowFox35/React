import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { addedCardType } from 'types/objects';
import './Forms.scss';

const Forms: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<addedCardType>();
  const [itemsList, setItemsList] = useState<addedCardType[]>([]);
  const [isCreated, setIsCreated] = useState<boolean>(false);

  const createCard = async (data: addedCardType) => {
    const itemObj: addedCardType = {
      type: data.type || '',
      name: data.name || '',
      date: data.date || '',
      img: data.imageFile,
      delivery: data.delivery,
      availability: data.availability ? 'Available in the stock' : 'Not available in the stock',
    };

    setItemsList([...itemsList, itemObj]);
  };
  const handleFileSelect = async (file: File | undefined): Promise<string> => {
    return new Promise((resolve) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result as string);
        };
      } else {
        resolve(`${process.env.PUBLIC_URL}/assets/catalogItems/cardImageIcon.svg`);
      }
    });
  };

  const submitForm = (data: addedCardType) => {
    createCard(data);
    reset();
    setIsCreated(true);
    setTimeout(() => {
      setIsCreated(false);
    }, 2000);
  };

  return (
    <section className="container form-wrapper">
      {isCreated && <div className="iscreated">New item has been added</div>}
      <h1 className="title">Add new item</h1>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <label className="form_option">
          Product type:
          <select className="form_option_item" {...register('type')} defaultValue="Knitted yarn">
            <option value="Knitted yarn">Knitted yarn</option>
            <option value="Knitting tools">Knitting tools</option>
            <option value="Literature">Literature</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="form_option">
          Product Name:*
          <input
            className="form_option_item"
            type="text"
            {...register('name', { required: true })}
            aria-invalid={false}
          />
          {errors.name && <div className="error">Please fill in the field</div>}
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
          <input
            className="form_option_item"
            type="date"
            {...(register('date'), { required: true })}
          />
          {errors.date && <div className="error">Please fill in the field</div>}
        </label>
        <label className="form_option">
          Stock Availability:
          <input className="form_option_item" type="checkbox" {...register('availability')} />
        </label>
        <label className="form_option">
          Upload photo:*
          <Controller
            render={({ field: { onChange } }) => (
              <input
                {...register('img', { required: true })}
                className="form_option_upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={async (e) => {
                  onChange(await handleFileSelect(e.target.files![0]));
                }}
                defaultValue=""
              />
            )}
            name="imageFile"
            control={control}
          />
          {errors.img && <div className="error">Please select an image</div>}
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
