import React from 'react';
import './Forms.scss';

interface IState {
  inputValue: string;
}
interface IProps {
  input?: string;
}

class Forms extends React.Component<IProps, IState> {
  input: React.RefObject<HTMLInputElement>;
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    alert('Отправленное имя: ' + this.input?.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="container form" onSubmit={this.handleSubmit}>
        <label>
          Название товара:
          <input type="text" ref={this.input} />
        </label>

        <label>
          radio:
          <input type="radio" name="radio" ref={this.input} />
        </label>
        <label>
          radio:
          <input type="radio" name="radio" ref={this.input} />
        </label>

        <label>
          Тип товара:
          <select>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option selected value="coconut">
              Кокос
            </option>
            <option value="mango">Манго</option>
          </select>
        </label>

        <label>
          Дата выхода на рынок:
          <input type="date " ref={this.input} />
        </label>
        <label>
          Доступность на складе:
          <input type="checkbox" ref={this.input} />
        </label>
        <label>
          Upload file:
          <input type="file" ref={this.input} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Forms;
