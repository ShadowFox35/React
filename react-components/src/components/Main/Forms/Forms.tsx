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
  itemName: React.RefObject<HTMLInputElement>;
  itemDate: React.RefObject<HTMLInputElement>;

  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.itemName = React.createRef();
    this.itemDate = React.createRef();

    this.state = {
      itemsList: [],
    };
  }

  createCard() {
    const itemObj: addedCardType = {
      name: this.itemName.current?.value || '',
      date: this.itemDate.current?.value || '',
    };

    this.setState({
      itemsList: [...this.state.itemsList, itemObj],
    });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.createCard();
    console.log('date', this.itemDate);
  }

  render() {
    console.log(this.state.itemsList);
    return (
      <section className="container form-wrapper">
        <h1 className="title">Add new item</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form_option">
            Название товара:
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
            Тип товара:
            <select className="form_option_item">
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option selected value="coconut">
                Кокос
              </option>
              <option value="mango">Манго</option>
            </select>
          </label>

          <label className="form_option">
            Дата выхода на рынок:
            <input className="form_option_item" type="date" ref={this.itemDate} />
          </label>
          <label className="form_option">
            Доступность на складе:
            <input className="form_option_item" type="checkbox" />
          </label>
          <label className="form_option">
            Upload file:
            <input className="form_option_upload" type="file" />
          </label>
          <input className="button" type="submit" value="submit" />
        </form>
        <section className="cards">
          {this.state.itemsList.map((good: addedCardType, index: number) => (
            <div className="card" key={index}>
              <img
                className="good_img"
                src={`${process.env.PUBLIC_URL}/assets/catalogItems/Zefirka.svg`}
                alt={`${good.name}`}
              />
              <strong>{good.name}</strong>
              <strong>{good.date}</strong>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

export default Forms;
