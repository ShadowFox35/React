import React from 'react';
import { addedCardType } from 'types/objects';
import './Forms.scss';

interface IState {
  inputValue?: string;
  itemsList: addedCardType[];

  imageUrl: string | null;
}
interface IProps {
  input?: string;
}

class Forms extends React.Component<IProps, IState> {
  itemType: React.RefObject<HTMLSelectElement>;
  itemName: React.RefObject<HTMLInputElement>;
  itemDate: React.RefObject<HTMLInputElement>;
  itemImg!: React.RefObject<HTMLInputElement>;

  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.itemType = React.createRef();
    this.itemName = React.createRef();
    this.itemDate = React.createRef();
    this.itemImg = React.createRef();
    this.state = {
      itemsList: [],
      imageUrl: null,
    };
  }

  handleFileSelect = () => {
    const file: File | undefined = this.itemImg.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({
          imageUrl: reader.result as string,
        });
      };
    } else {
      this.setState({ imageUrl: null });
    }
  };

  createCard() {
    const itemObj: addedCardType = {
      type: this.itemType.current?.value || '',
      name: this.itemName.current?.value || '',
      date: this.itemDate.current?.value || '',
      img: this.state.imageUrl,
    };

    this.setState({
      itemsList: [...this.state.itemsList, itemObj],
    });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.createCard();
    console.log('img', this.itemImg);
  }

  render() {
    console.log(this.state.itemsList);
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

          <label className="form_option">
            radio:
            <input className="form_option_item" type="radio" name="radio" />
          </label>
          <label className="form_option">
            radio:
            <input className="form_option_item" type="radio" name="radio" />
          </label>

          <label className="form_option">
            Receipt date:
            <input className="form_option_item" type="date" ref={this.itemDate} />
          </label>
          <label className="form_option">
            Доступность на складе:
            <input className="form_option_item" type="checkbox" />
          </label>
          <label className="form_option">
            Upload photo:
            <input
              className="form_option_upload"
              type="file"
              ref={this.itemImg}
              onChange={this.handleFileSelect}
            />
          </label>
          <input className="button" type="submit" value="submit" />
        </form>
        <section className="cards">
          {this.state.itemsList.map((good: addedCardType, index: number) => (
            <div className="card" key={index}>
              <img
                className="card_img"
                src={good.img || `${process.env.PUBLIC_URL}/assets/catalogItems/cardImageIcon.svg`}
                alt={`${good.name}`}
              />
              <strong>{good.type}</strong>
              <strong>{good.name}</strong>
              <div>{good.date}</div>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

export default Forms;
