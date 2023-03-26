import React from 'react';
import { addedCardType } from 'types/objects';
import './Forms.scss';

interface IState {
  inputValue?: string;
  itemsList: addedCardType[];
}
interface IProps {
  input?: string;
}

class Forms extends React.Component<IProps, IState> {
  itemType: React.RefObject<HTMLSelectElement>;
  itemName: React.RefObject<HTMLInputElement>;
  itemDate: React.RefObject<HTMLInputElement>;
  itemImg!: React.RefObject<HTMLInputElement>;
  itemDeliveryNo: React.RefObject<HTMLInputElement>;
  itemDeliveryPost: React.RefObject<HTMLInputElement>;
  itemDeliveryCourier: React.RefObject<HTMLInputElement>;
  itemAvailability: React.RefObject<HTMLInputElement>;

  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.itemType = React.createRef();
    this.itemName = React.createRef();
    this.itemDate = React.createRef();
    this.itemImg = React.createRef();
    this.itemDeliveryNo = React.createRef();
    this.itemDeliveryPost = React.createRef();
    this.itemDeliveryCourier = React.createRef();
    this.itemAvailability = React.createRef();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      itemsList: [],
    };
  }

  handleSelectDelivery(): Promise<string | null> {
    return new Promise((resolve) => {
      if (this.itemDeliveryNo.current?.checked) {
        resolve('delivery is not possible');
      } else if (this.itemDeliveryPost.current?.checked) {
        resolve('post delivery is possible');
      } else if (this.itemDeliveryCourier.current?.checked) {
        resolve('courier delivery is possible');
      }
    });
  }

  handleButtonClick() {
    this.itemImg.current?.click();
  }

  handleSelectAvailability(): Promise<string | null> {
    return new Promise((resolve) => {
      if (this.itemAvailability.current?.checked) {
        resolve('Available in the stock');
      } else if (this.itemDeliveryCourier.current?.checked) {
        resolve('Not available in the stock');
      }
    });
  }

  async handleFileSelect(): Promise<string> {
    return new Promise((resolve) => {
      const file: File | undefined = this.itemImg.current?.files?.[0];
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
  }

  async createCard() {
    const itemObj: addedCardType = {
      type: this.itemType.current?.value || '',
      name: this.itemName.current?.value || '',
      date: this.itemDate.current?.value || '',
      img: await this.handleFileSelect(),
      delivery: await this.handleSelectDelivery(),
      availability: await this.handleSelectAvailability(),
    };

    this.setState({
      itemsList: [...this.state.itemsList, itemObj],
    });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.createCard();
  }

  render() {
    return (
      <section className="container form-wrapper">
        <h1 className="title">Add new item</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form_option">
            Product type:
            <select className="form_option_item" ref={this.itemType}>
              <option selected value="Knitted yarn">
                Knitted yarn
              </option>
              <option value="Knitting tools">Knitting tools</option>
              <option value="Literature">Literature</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className="form_option">
            Product Name:
            <input className="form_option_item" type="text" ref={this.itemName} />
          </label>

          <div>Delivery</div>
          <label className="form_option">
            No
            <input
              className="form_option_item"
              type="radio"
              name="discount"
              checked
              ref={this.itemDeliveryNo}
            />
          </label>
          <label className="form_option">
            To the post office
            <input
              className="form_option_item"
              type="radio"
              name="discount"
              ref={this.itemDeliveryPost}
            />
          </label>
          <label className="form_option">
            By courier
            <input
              className="form_option_item"
              type="radio"
              name="discount"
              ref={this.itemDeliveryCourier}
            />
          </label>

          <label className="form_option">
            Receipt date:
            <input className="form_option_item" type="date" ref={this.itemDate} />
          </label>
          <label className="form_option">
            Stock Availability:
            <input className="form_option_item" type="checkbox" ref={this.itemAvailability} />
          </label>
          <label className="form_option">
            Upload photo:
            <button className="choose button" onClick={this.handleButtonClick}>
              Choose file
            </button>
            <div>{this.itemImg.current?.files?.[0].name}</div>
            <input
              className="form_option_upload"
              type="file"
              ref={this.itemImg}
              style={{ display: 'none' }}
            />
          </label>
          <input className="button select" type="submit" value="Submit" />
        </form>
        <section className="cards">
          {this.state.itemsList.map((good: addedCardType, index: number) => (
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
  }
}

export default Forms;
