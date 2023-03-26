import React from 'react';
import { addedCardType } from 'types/objects';
import './Forms.scss';
interface errors {
  itemName?: boolean;
  itemDate?: boolean;
  itemImg?: boolean;
}
interface IState {
  inputValue?: string;
  itemsList: addedCardType[];
  isCrated: boolean;
  timerId?: string | number | NodeJS.Timeout | undefined;
  error: errors;
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
    this.state = {
      itemsList: [],
      isCrated: false,
      timerId: undefined,
      error: {
        itemName: false,
        itemDate: false,
        itemImg: false,
      },
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

  handleSelectAvailability(): Promise<string | null> {
    return new Promise((resolve) => {
      if (this.itemAvailability.current?.checked) {
        resolve('Available in the stock');
      } else {
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
  clearForm = () => {
    this.itemType.current!.value = 'Knitted yarn';
    this.itemName.current!.value = '';
    this.itemDate.current!.value = '';
    this.itemImg.current!.value = '';
    this.itemDeliveryNo.current!.value = '';
    this.itemDeliveryPost.current!.value = '';
    this.itemDeliveryCourier.current!.value = '';
    this.itemAvailability.current!.checked = false;
  };
  checkErros = () => {
    const newErrors: errors = {};
    const fileType = [];
    if (this.itemName.current!.value === '') {
      newErrors['itemName'] = true;
    }
    if (this.itemDate.current!.value === '') {
      newErrors['itemDate'] = true;
    }
    if (
      this.itemImg.current!.value === '' ||
      !this.itemImg.current?.files![0].type.includes('image')
    ) {
      newErrors['itemImg'] = true;
    }
    if (Object.keys(newErrors).length) {
      this.setState(() => ({
        error: newErrors,
      }));
      return true;
    } else {
      this.setState(() => ({
        error: {
          itemName: false,
          itemDate: false,
          itemImg: false,
        },
      }));
      return false;
    }
  };
  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.checkErros()) {
      return;
    }
    this.createCard();
    this.clearForm();

    this.setState(() => ({ isCrated: true }));
    const timerId = setTimeout(() => {
      this.setState(() => ({ isCrated: false }));
    }, 2000);
    this.setState({ timerId });
  }
  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }
  render() {
    return (
      <section className="container form-wrapper">
        {this.state.isCrated && <div className="iscreated">New item has been added</div>}
        <h1 className="title">Add new item</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form_option">
            Product type:
            <select className="form_option_item" ref={this.itemType} defaultValue="Knitted yarn">
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
            <input className="form_option_item" type="text" ref={this.itemName} />
            {this.state.error.itemName && <div className="error">Please fill in the field</div>}
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
            Receipt date:*
            <input className="form_option_item" type="date" ref={this.itemDate} />
            {this.state.error.itemDate && <div className="error">Please fill in the field</div>}
          </label>
          <label className="form_option">
            Stock Availability:
            <input className="form_option_item" type="checkbox" ref={this.itemAvailability} />
          </label>
          <label className="form_option">
            Upload photo:*
            <input className="form_option_upload" type="file" ref={this.itemImg} />
            {this.state.error.itemImg && <div className="error">Please select an image</div>}
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
